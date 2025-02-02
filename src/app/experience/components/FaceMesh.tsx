"use client";
import {
  FaceLandmarkerResult,
  NormalizedLandmark,
} from "@mediapipe/tasks-vision";
import { useLoader } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { triangles } from "./TRIANGLES";
import { UV_COORDS } from "./UVCOORDS";

// Component properties interface
interface Props {
  faceLandmarkerResult: FaceLandmarkerResult;
}

function normalize(point: NormalizedLandmark): [number, number, number] {
  const x = -(point.x - 0.5) * 2;
  const y = -(point.y - 0.5) * 2;
  const z = point.z;

  return [x, y, z];
}

const FaceMeshComponent: React.FC<Props> = ({ faceLandmarkerResult }) => {
  // Create a ref to store the Three.js mesh instance
  const meshRef = useRef<THREE.Mesh>(null);

  // States
  const [isUVMapped, setIsUVMapped] = useState(false);

  // Load the texture using react-three-fiber's useLoader hook
  const texture = useLoader(
    TextureLoader,
    "/ar/canonical_face_model_uv_visualization_brutto.png",
  );

  texture.flipY = false;

  const uv = useMemo(() => {
    const uvArray = new Float32Array(UV_COORDS.length * 2);
    UV_COORDS.forEach((point, i) => {
      uvArray[i * 2] = point.x;
      uvArray[i * 2 + 1] = point.y;
    });
    return uvArray;
  }, []);

  useEffect(() => {
    // Ensure a mesh reference is available before proceeding
    if (!meshRef.current) return;

    // Extract face landmarks from the result
    const vertices: number[] = faceLandmarkerResult.faceLandmarks[0].reduce(
      (acc, landmark) => {
        const [x, y, z] = normalize(landmark);
        return [...acc, x, y, z];
      },
      [] as number[],
    );

    const indices: number[] = triangles.reduce(
      (acc, triangle) => [...acc, ...triangle],
      [] as number[],
    );

    // Create a new BufferGeometry which will hold our mesh data
    const geometry = new THREE.BufferGeometry();

    if (!isUVMapped) {
      // Map UV coordinates using the predefined canonical texture mapping.
    }

    UV_COORDS.forEach((point, i) => {
      uv[i * 2] = point.x;
      uv[i * 2 + 1] = point.y;
    });

    geometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    setIsUVMapped(true);

    geometry.setIndex(indices);
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(vertices), 3),
    );

    meshRef.current.geometry = geometry;
  }, [faceLandmarkerResult, isUVMapped, uv]);

  return (
    // Render the mesh. The mesh will use the material that applies the texture.
    <mesh ref={meshRef}>
      <meshStandardMaterial
        map={texture}
        transparent={true}
        opacity={0.8}
        side={THREE.DoubleSide}
        wireframe={false}
      ></meshStandardMaterial>
    </mesh>
  );
};

export default FaceMeshComponent;
