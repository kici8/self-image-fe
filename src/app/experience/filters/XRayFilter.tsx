"use client";
import { FaceLandmarkerResult } from "@mediapipe/tasks-vision";
import { useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import FaceMeshComponent from "../components/FaceMesh";
import {
  BrightnessContrast,
  EffectComposer,
  Sepia,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

// Component properties interface
interface Props {
  faceLandmarkerResult: FaceLandmarkerResult;
  aspect: number;
}

const XRayFilter: React.FC<Props> = ({ faceLandmarkerResult, aspect }) => {
  const faceMeshRef = React.useRef<THREE.Mesh | null>(null);
  //  Load texture and prevent flipping on Y axis.
  const texture = useLoader(THREE.TextureLoader, "/ar/uv-x-ray.png");
  texture.flipY = false;

  return (
    // Render the mesh. The mesh will use the material that applies the texture.
    <>
      <FaceMeshComponent
        faceLandmarkerResult={faceLandmarkerResult}
        aspect={aspect}
        texture={texture}
        opacity={0.6}
        ref={faceMeshRef}
      />
      <EffectComposer>
        <BrightnessContrast
          brightness={0.8}
          contrast={-0.9}
          opacity={0.99}
          blendFunction={BlendFunction.INVERT_RGB}
        />
        <Sepia opacity={1} blendFunction={BlendFunction.NORMAL} />
        <BrightnessContrast
          brightness={0.6}
          contrast={-0.8}
          opacity={0.99}
          blendFunction={BlendFunction.DARKEN}
        />
      </EffectComposer>
    </>
  );
};

export default XRayFilter;
