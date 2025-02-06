"use client";

import { Button } from "@/components/ui/button";
import { useIntervalAnimation } from "@/lib/hooks/useIntervalAnimation";
import {
  FaceLandmarker,
  FaceLandmarkerResult,
  FilesetResolver,
} from "@mediapipe/tasks-vision";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Webcam from "react-webcam";
import * as THREE from "three";
import SerigraphyFilter from "../filters/SerigraphyFilter";
import XRayFilter from "../filters/XRayFilter";

enum Filters {
  SERIGRAPHY,
  XRAY,
}

type WebcamFeedProps = {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  rendererRef: React.RefObject<THREE.WebGLRenderer | null>;
};

const WebcamFeed: React.FC<WebcamFeedProps> = ({ canvasRef, rendererRef }) => {
  // refs

  const webcamRef = useRef<Webcam>(null);

  // states
  const [loaded, setLoaded] = useState(false);
  const [landmarker, setLandmarker] = useState<FaceLandmarker | null>(null);
  const [faceResults, setFaceResults] = useState<FaceLandmarkerResult | null>(
    null,
  );
  const [videoDimension, setVideoDimension] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [activeFilter, setActiveFilter] = useState<Filters>(Filters.XRAY);

  // CALLBACKS
  async function handleVideoLoad(
    event: React.SyntheticEvent<HTMLVideoElement, Event>,
  ) {
    const video = event.currentTarget;
    if (video.readyState !== 4) return;
    if (loaded) return;
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm",
    );
    const faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
        delegate: "GPU",
      },

      runningMode: "VIDEO",
      outputFacialTransformationMatrixes: true,
      outputFaceBlendshapes: true,
      numFaces: 1,
    });
    setLandmarker(faceLandmarker);
    setLoaded(true);
  }

  const track = useCallback(
    (time: number) => {
      if (!landmarker) return;
      const video = webcamRef.current?.video;
      if (!video || video.readyState < 4) return;

      setVideoDimension({
        width: video.videoWidth,
        height: video.videoHeight,
      });

      const result = landmarker.detectForVideo(video, time);
      setFaceResults(result);
    },
    [landmarker],
  );

  // Use the custom hook based on setTimeout instead of requestAnimationFrame.
  useIntervalAnimation(track, 16);

  return (
    <div className="relative h-full w-full flex-1 overflow-hidden bg-black">
      <div className="fixed left-0 top-0 z-10 bg-white p-4">
        <Button onClick={() => setActiveFilter(Filters.XRAY)}>XRAY</Button>
        <Button onClick={() => setActiveFilter(Filters.SERIGRAPHY)}>
          SERIGRAPHY
        </Button>
      </div>

      <>
        <Webcam
          mirrored={true}
          ref={webcamRef}
          className="absolute opacity-0"
          videoConstraints={{
            facingMode: "user",
          }}
          onLoadedData={handleVideoLoad}
        />

        {loaded && videoDimension !== null ? (
          <div
            className="absolute left-1/2 top-0 min-h-full min-w-full -translate-x-1/2 transform"
            style={{
              aspectRatio: `${videoDimension.width}/${videoDimension.height}`,
            }}
          >
            <Canvas
              key={activeFilter} // In questo modo la canvas verrà ricreata ad ogni cambio filtro
              ref={canvasRef}
              camera={{
                position: [0, 0, 1], // Move the camera back so the plane fits
                fov: 50,
                near: 0.1,
                far: 1000,
                aspect: videoDimension.width / videoDimension.height,
              }}
              gl={{
                preserveDrawingBuffer: true,
              }}
              onCreated={({ gl }) => {
                rendererRef.current = gl;
              }}
            >
              <ambientLight intensity={1} />

              {webcamRef.current?.video && (
                <VideoMesh video={webcamRef.current.video} />
              )}

              {faceResults && activeFilter == Filters.XRAY && (
                <XRayFilter
                  faceLandmarkerResult={faceResults}
                  aspect={videoDimension.width / videoDimension.height}
                />
              )}
              {faceResults && activeFilter == Filters.SERIGRAPHY && (
                <SerigraphyFilter
                  faceLandmarkerResult={faceResults}
                  aspect={videoDimension.width / videoDimension.height}
                />
              )}
            </Canvas>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </>
    </div>
  );
};

const VideoMesh: React.FC<{ video: HTMLVideoElement }> = ({ video }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  const aspect = size.width / size.height;

  const videoTexture = useMemo(() => {
    const texture = new THREE.VideoTexture(video);
    texture.flipY = true;
    return texture;
  }, [video]);

  // Crea geometry e material manualmente per poi poter fare il cleanup.
  const geometry = useMemo(() => new THREE.PlaneGeometry(1, 1), []);
  const material = useMemo(
    () => new THREE.MeshBasicMaterial({ map: videoTexture }),
    [videoTexture],
  );

  // Cleanup: rilascia texture, geometry e material quando il componente si smonta.
  useEffect(() => {
    return () => {
      videoTexture.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [videoTexture, geometry, material]);

  useFrame(() => {
    if (video.readyState >= video.HAVE_CURRENT_DATA && meshRef.current) {
      meshRef.current.scale.set(-aspect, 1, 1);
      meshRef.current.renderOrder = 0;
      videoTexture.needsUpdate = true;
    }
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
};

export default WebcamFeed;
