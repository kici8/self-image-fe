"use client";
import { FaceLandmarkerResult } from "@mediapipe/tasks-vision";
import { useLoader } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import React from "react";
import * as THREE from "three";
import FaceMeshComponent from "../components/FaceMesh";

import { Effect } from "postprocessing";
import { forwardRef, useMemo } from "react";

const fragmentShader = `
  uniform sampler2D tDiffuse;
  vec4 mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 targetColor) {
    targetColor = vec4(vec3(1.0 - inputColor.rgb), inputColor.a);
    return targetColor;
  }
`;

class InvertEffectImpl extends Effect {
  constructor() {
    super("InvertEffect", fragmentShader, {
      uniforms: new Map(),
    });
  }
}

const InvertEffect = forwardRef((props, ref) => {
  const effect = useMemo(() => new InvertEffectImpl(), []);
  return <primitive ref={ref} object={effect} dispose={null} />;
});
InvertEffect.displayName = "InvertEffect";

interface Props {
  faceLandmarkerResult: FaceLandmarkerResult;
  aspect: number;
}

const XRayFilter: React.FC<Props> = ({ faceLandmarkerResult, aspect }) => {
  // Load texture for the FaceMesh component
  const texture = useLoader(THREE.TextureLoader, "/ar/uv-x-ray-small.jpg");
  texture.flipY = false;

  return (
    <>
      <FaceMeshComponent
        faceLandmarkerResult={faceLandmarkerResult}
        aspect={aspect}
        texture={texture}
        opacity={0.6}
      />
      <EffectComposer>
        <InvertEffect />
      </EffectComposer>
    </>
  );
};

export default XRayFilter;
