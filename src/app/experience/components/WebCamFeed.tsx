"use client";

import {
  FaceLandmarker,
  FaceLandmarkerResult,
  FilesetResolver,
} from "@mediapipe/tasks-vision";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import FaceMeshComponent from "./FaceMesh";

const WebcamFeed: React.FC = () => {
  // refs
  const webcamRef = useRef<Webcam>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // states
  const [loaded, setLoaded] = useState(false);
  const [landmarker, setLandmarker] = useState<FaceLandmarker | null>(null);
  const [faceResults, setFaceResults] = useState<FaceLandmarkerResult | null>(
    null,
  );
  const [containerDimension, setContainerDimension] = useState<{
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
    const result = landmarker.detectForVideo(video, performance.now());
    setFaceResults(result);
  }

  // TRACKING WITH REQUEST ANIMATION FRAME
  const trackAnimationID = requestAnimationFrame(track);

  // EFFECTS AND CLEANUPS

  useEffect(() => {
    // FIXME: ResizeObserver is not supported in Safari?
    // FIXME: on resize mediapipe face mesh breaks
    // // roi->width > 0 && roi->height > 0 ROI width and height must be > 0.;
    // // Adding proto packet of type mediapipe. NormalizedRect to stream norm_rect was not ok

    if (containerRef.current) {
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          setContainerDimension({
            width: width,
            height: height,
          });
        }
      });

      observer.observe(containerRef.current);

      // Cleanup function
      return () => {
        cancelAnimationFrame(trackAnimationID);
        observer.disconnect();
      };
    }
  }, [trackAnimationID]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full flex-1 bg-red-400"
    >
      <Webcam
        mirrored={true}
        ref={webcamRef}
        className="absolute h-full max-h-full w-full object-cover"
        videoConstraints={{
          facingMode: "user",
          height: containerDimension?.height || 1080,
          width: containerDimension?.width || 1920,
        }}
        onLoadedData={handleVideoLoad}
      />

      {loaded && (
        <div
          className="absolute"
          style={{
            height: containerDimension?.height || 1080,
            width: containerDimension?.width || 1920,
          }}
        >
          <Canvas camera={{ position: [0, 0, 10], fov: 10 }}>
            <ambientLight intensity={0.5} />
            {faceResults && (
              <FaceMeshComponent faceLandmarkerResult={faceResults} />
            )}
          </Canvas>
        </div>
      )}
    </div>
  );
};

export default WebcamFeed;
