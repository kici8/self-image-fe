"use client";

import { Button } from "@/components/ui/button";
import { useAnimationFrame } from "@/lib/hooks/useAnimationFrame";
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
import { PerformanceMonitor, Stats } from "@react-three/drei";

enum Filters {
  SERIGRAPHY,
  XRAY,
}

type WebcamFeedProps = {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  rendererRef: React.RefObject<THREE.WebGLRenderer | null>;
  sceneRef: React.RefObject<THREE.Scene | null>;
  cameraRef: React.RefObject<THREE.Camera | null>;
  isSceneLoaded: boolean;
  setIsSceneLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};

const WebcamFeed: React.FC<WebcamFeedProps> = ({
  canvasRef,
  rendererRef,
  sceneRef,
  cameraRef,
  isSceneLoaded,
  setIsSceneLoaded,
}) => {
  // refs
  const webcamRef = useRef<Webcam>(null);
  const lastDetectionTimeRef = useRef(0);
  const detectionInterval = 100; // in milliseconds

  // states
  const [landmarker, setLandmarker] = useState<FaceLandmarker | null>(null);
  const [faceResults, setFaceResults] = useState<FaceLandmarkerResult | null>(
    null,
  );
  const [videoDimension, setVideoDimension] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [activeFilter, setActiveFilter] = useState<Filters>(Filters.XRAY);
  const [dpr, setDpr] = useState(1);

  // CALLBACKS
  // TODO: FaceLandmarker is also a drei component, we can use it directly
  async function handleVideoLoad(
    event: React.SyntheticEvent<HTMLVideoElement, Event>,
  ) {
    const video = event.currentTarget;
    if (video.readyState !== 4) return;
    if (isSceneLoaded) return;
    // FIXME: add as public asset?
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm",
    );
    // FIXME: add as public asset?
    const faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath:
          "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
        delegate: "GPU",
      },

      runningMode: "VIDEO",
      outputFacialTransformationMatrixes: false,
      outputFaceBlendshapes: false,
      numFaces: 1,
      minFaceDetectionConfidence: 0.1,
      minFacePresenceConfidence: 0.1,
      minTrackingConfidence: 0.1,
    });
    setLandmarker(faceLandmarker);
    setIsSceneLoaded(true);
  }

  const track = useCallback(
    (time: number) => {
      if (!landmarker) return;
      const video = webcamRef.current?.video;
      if (!video || video.readyState < 4) return;

      if (!videoDimension?.height || !videoDimension?.width) {
        setVideoDimension({
          width: video.videoWidth,
          height: video.videoHeight,
        });
      }
      // Throttle detection: only run if enough time has passed.
      if (time - lastDetectionTimeRef.current < detectionInterval) return;
      lastDetectionTimeRef.current = time;

      // Run face detection.
      const result = landmarker.detectForVideo(video, time);
      setFaceResults(result);
    },
    [landmarker, videoDimension?.height, videoDimension?.width],
  );

  // Check if on performance side is better to use useFrame or an interval based loop
  useAnimationFrame(track);

  return (
    <div className="relative h-full w-full flex-1 overflow-hidden bg-black">
      <div className="fixed right-0 top-0 z-10 bg-white p-4">
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
            width: {
              max: 360,
            },
            height: {
              max: 360,
            },
            frameRate: {
              max: 30,
            },
          }}
          onLoadedData={handleVideoLoad}
        />

        {isSceneLoaded && videoDimension !== null ? (
          <div
            className="absolute left-1/2 top-0 min-h-full min-w-full -translate-x-1/2 transform"
            style={{
              aspectRatio: `${videoDimension.width}/${videoDimension.height}`,
            }}
          >
            <Canvas
              frameloop="demand"
              // Change the key to reset the canvas this prevent cleanup issues
              key={activeFilter}
              ref={canvasRef}
              dpr={dpr}
              camera={{
                position: [0, 0, 1], // Move the camera back so the plane fits
                fov: 50,
                near: 0.1,
                far: 1000,
                aspect: videoDimension.width / videoDimension.height,
              }}
              gl={{
                // FIXME: preserveDrawingBuffer is needed for the screenshot
                // but it's not recommended for performance
                // How can we workaround this?
                preserveDrawingBuffer: false,
                antialias: false,
              }}
              onCreated={({ gl, camera, scene }) => {
                rendererRef.current = gl;
                cameraRef.current = camera;
                sceneRef.current = scene;
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
              <Stats showPanel={0} className="bottom-0 left-0" />
              <PerformanceMonitor
                onIncline={() => setDpr(2)}
                onDecline={() => setDpr(0.25)}
              />
            </Canvas>
          </div>
        ) : null}
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
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = true;
    return texture;
  }, [video]);

  const geometry = useMemo(() => new THREE.PlaneGeometry(1, 1), []);
  const material = useMemo(
    () => new THREE.MeshBasicMaterial({ map: videoTexture }),
    [videoTexture],
  );

  // Cleanup
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
