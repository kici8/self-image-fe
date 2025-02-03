"use client";
import {
  FaceLandmarkerResult,
  NormalizedLandmark,
} from "@mediapipe/tasks-vision";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { triangles } from "./TRIANGLES";
import { UV_COORDS } from "./UVCOORDS";

// Component properties interface
interface Props {
  faceLandmarkerResult: FaceLandmarkerResult;
  aspect: number;
}

function normalize(
  point: NormalizedLandmark,
  aspect: number,
): [number, number, number] {
  const x = -(point.x - 0.5) * aspect;
  const y = 0.5 - point.y;
  const z = point.z;

  return [x, y, z];
}

const FaceMeshComponent: React.FC<Props> = ({
  faceLandmarkerResult,
  aspect,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Load texture and prevent flipping on Y axis.
  const texture = useLoader(
    TextureLoader,
    "/ar/canonical_face_model_uv_visualization_brutto.png",
  );
  texture.flipY = false;

  // Pre-calculate the UV array from your canonical UV coords.
  const uv = useMemo(() => {
    const uvArray = new Float32Array(UV_COORDS.length * 2);
    UV_COORDS.forEach((point, i) => {
      uvArray[i * 2] = point.x;
      uvArray[i * 2 + 1] = point.y;
    });
    return uvArray;
  }, []);

  // Update the mesh geometry every frame.
  useFrame(() => {
    if (!meshRef.current) return;

    // Get face landmarks (assuming the first face).
    const keypoints = faceLandmarkerResult.faceLandmarks[0];
    if (!keypoints) return; // Optionally early-return if no face

    // Create vertices array from landmarks.
    const vertices = new Float32Array(keypoints.length * 3);
    keypoints.forEach((landmark, i) => {
      const [x, y, z] = normalize(landmark, aspect);
      vertices[i * 3] = x;
      vertices[i * 3 + 1] = y;
      vertices[i * 3 + 2] = z;
    });

    // Build geometry and assign attributes.
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));

    // Flatten triangle indices.
    const indices = new Uint16Array(triangles.flat());
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    geometry.computeVertexNormals();

    // Update mesh geometry.
    meshRef.current.geometry = geometry;
    meshRef.current.renderOrder = 1;
  });

  return (
    // Render the mesh. The mesh will use the material that applies the texture.
    <mesh ref={meshRef}>
      <meshStandardMaterial
        map={texture}
        transparent={true}
        opacity={0.8}
        side={THREE.DoubleSide}
        wireframe={false}
        depthTest={false}
      ></meshStandardMaterial>
    </mesh>
  );
};

export default FaceMeshComponent;
