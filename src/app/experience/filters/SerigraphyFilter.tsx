"use client";
import { FaceLandmarkerResult } from "@mediapipe/tasks-vision";
import { useLoader } from "@react-three/fiber";
import {
  BrightnessContrast,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import React from "react";
import * as THREE from "three";
import FaceMeshComponent from "../components/FaceMesh";

// Component properties interface
interface Props {
  faceLandmarkerResult: FaceLandmarkerResult;
  aspect: number;
}

const SerigraphyFilter: React.FC<Props> = ({
  faceLandmarkerResult,
  aspect,
}) => {
  const faceMeshRef = React.useRef<THREE.Mesh | null>(null);

  //  Load texture and prevent flipping on Y axis.
  const texture = useLoader(THREE.TextureLoader, "/ar/serigraphy.png");
  texture.flipY = false;

  return (
    // Render the mesh. The mesh will use the material that applies the texture.
    <>
      <FaceMeshComponent
        faceLandmarkerResult={faceLandmarkerResult}
        aspect={aspect}
        texture={texture}
        opacity={0.98}
        ref={faceMeshRef}
      />
      <EffectComposer>
        <BrightnessContrast
          brightness={0.0}
          contrast={0.4}
          opacity={0.4}
          blendFunction={BlendFunction.MULTIPLY}
        />
      </EffectComposer>
    </>
  );
};

export default SerigraphyFilter;
