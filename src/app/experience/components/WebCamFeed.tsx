"use client";
import {
  FaceLandmarker,
  FaceLandmarkerResult,
  FilesetResolver,
} from "@mediapipe/tasks-vision";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

interface WebcamFeedProps {
  onFaceDetected: (results: FaceLandmarkerResult) => void;
}

const WebcamFeed: React.FC<WebcamFeedProps> = ({ onFaceDetected }) => {
  const webcamRef = useRef<Webcam>(null);

  const [landmarker, setLandmarker] = useState<FaceLandmarker | null>(null);

  // Inizializza Face Landmarker
  useEffect(() => {
    async function loadFaceLandmarker() {
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
    }

    loadFaceLandmarker();
  }, []);

  // Elabora il video per ottenere i landmark
  useEffect(() => {
    if (!landmarker || !webcamRef.current) return;

    const processVideo = async () => {
      if (!webcamRef.current) return;
      const video = webcamRef.current.video;
      if (!video) return;

      const results = landmarker.detectForVideo(video, performance.now());

      if (results.faceLandmarks.length > 0) {
        console.log(results);
        onFaceDetected(results);
      }
      requestAnimationFrame(processVideo);
    };

    if (webcamRef.current.video?.readyState === 4) {
      processVideo();
    } else {
      webcamRef.current.video?.addEventListener("loadeddata", processVideo);
    }
  }, [landmarker, onFaceDetected]);

  return (
    <Webcam
      mirrored={true}
      width={640}
      height={480}
      ref={webcamRef}
      className="absolute left-0 top-0"
      videoConstraints={{ facingMode: "user", width: 640, height: 480 }}
    />
  );
};

export default WebcamFeed;
