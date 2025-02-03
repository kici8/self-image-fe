"use client";

import {
  FaceLandmarker,
  FaceLandmarkerResult,
  FilesetResolver,
} from "@mediapipe/tasks-vision";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import FaceMeshComponent from "./FaceMesh";
import * as THREE from "three";

const WebcamFeed: React.FC = () => {
  // refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

  function track() {
    if (!landmarker) return;
    const video = webcamRef.current?.video;
    if (!video || video.readyState < 4) return;
    console.log("🥎🏀 video dimension", {
      video_w: video.videoWidth,
      video_wh: video.videoHeight,
    });
    setVideoDimension({
      width: video.videoWidth,
      height: video.videoHeight,
    });
    const result = landmarker.detectForVideo(video, performance.now());
    setFaceResults(result);
  }

  // TRACKING WITH REQUEST ANIMATION FRAME
  const trackAnimationID = requestAnimationFrame(track);

  // EFFECTS AND CLEANUPS
  useEffect(() => {
    // Cleanup function
    return () => {
      cancelAnimationFrame(trackAnimationID);
    };
  }, [trackAnimationID]);

  return (
    <div className="relative h-full w-full flex-1 bg-red-400">
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-violet-500"
            style={{
              height: videoDimension?.height,
              width: videoDimension?.width,
            }}
          >
            <Canvas
              ref={canvasRef}
              camera={{
                position: [0, 0, 1], // Move the camera back so the plane fits
                fov: 50,
                near: 0.1,
                far: 1000,
                aspect: videoDimension.width / videoDimension.height,
              }}
            >
              <ambientLight intensity={0.01} />
              {webcamRef.current?.video && (
                <VideoMesh video={webcamRef.current.video} />
              )}
              {faceResults && (
                <FaceMeshComponent
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

// Component to create a mesh with the video texture.
const VideoMesh: React.FC<{ video: HTMLVideoElement }> = ({ video }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  // Create a VideoTexture from the video element
  const videoTexture = new THREE.VideoTexture(video);
  videoTexture.flipY = true;
  // Const
  const aspect = size.width / size.height;

  // Update texture on every frame if required
  useFrame(() => {
    if (video.readyState >= video.HAVE_CURRENT_DATA && meshRef.current) {
      // Mirror the video on the X axis by setting a negative scale value.
      meshRef.current.scale.set(-aspect, 1, 1);
      meshRef.current.renderOrder = 2;
      videoTexture.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry />
      {/* You can replace meshBasicMaterial with a custom shader material */}
      <meshBasicMaterial map={videoTexture} />
    </mesh>
  );
};

export default WebcamFeed;
