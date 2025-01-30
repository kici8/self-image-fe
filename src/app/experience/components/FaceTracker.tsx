"use client";

import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
import { Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

export default function FaceTracker() {
  const webcamRef = useRef<Webcam | null>(null);
  const [landmarker, setLandmarker] = useState<FaceLandmarker | null>(null);
  const [landmarks, setLandmarks] = useState<[number, number, number] | null>(
    null,
  );

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
        const noseTip = results.faceLandmarks[0][1]; // Punto 1: punta del naso
        const x = -(noseTip.x - 0.5) * 10; // Normalize x to [-1, 1]
        const y = -(noseTip.y - 0.5) * 10; // Normalize y to [-1, 1] and invert
        const z = noseTip.z; // Use z as is
        setLandmarks([x, y, z]);
      }
      requestAnimationFrame(processVideo);
    };

    if (webcamRef.current.video?.readyState === 4) {
      processVideo();
    } else {
      webcamRef.current.video?.addEventListener("loadeddata", processVideo);
    }
  }, [landmarker]);

  return (
    <div className="h-full w-full">
      <div className="relative mx-auto h-[480px] w-[640px]">
        {/* Webcam */}
        <Webcam
          mirrored={true}
          width={640}
          height={480}
          ref={webcamRef}
          className="absolute left-0 top-0"
          videoConstraints={{ facingMode: "user" }}
        />
        {/* Three.js Scene */}
        <div className="absolute left-0 top-0 h-[480px] w-[640px]">
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {landmarks && <FaceObject position={landmarks} />}
          </Canvas>
        </div>
      </div>
    </div>
  );
}

// Modello 3D per il filtro
function FaceObject({ position }: { position: [number, number, number] }) {
  return (
    <Sphere args={[0.05, 32, 32]} position={position}>
      <meshStandardMaterial color="red" />
    </Sphere>
  );
}
