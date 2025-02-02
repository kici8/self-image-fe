"use client";
import { FaceLandmarkerResult } from "@mediapipe/tasks-vision";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import FaceMeshComponent from "./components/FaceMesh";
import WebcamFeed from "./components/WebCamFeed";

const ExperiencePage: React.FC = () => {
  const [faceResults, setFaceResults] = useState<FaceLandmarkerResult | null>(
    null,
  );

  return (
    <div className="h-full w-full">
      <div className="relative mx-auto h-[480px] w-[640px]">
        {/* Webcam */}
        <WebcamFeed onFaceDetected={setFaceResults} />
        {/* Three.js Scene */}
        <div className="absolute left-0 top-0 h-[480px] w-[640px]">
          {/* TODO: this is an hardcode value, we need to fix it to match the real
          dimensions of the webcam */}
          <Canvas camera={{ position: [0, 0, 10], fov: 10 }}>
            <ambientLight intensity={0.5} />
            {faceResults && (
              <Suspense fallback={null}>
                <FaceMeshComponent faceLandmarkerResult={faceResults} />
              </Suspense>
            )}
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
