"use client";

import {
  FaceLandmarkerResult,
  NormalizedLandmark,
} from "@mediapipe/tasks-vision";
import { useFrame } from "@react-three/fiber";
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useEffect,
} from "react";
import * as THREE from "three";
import { triangles } from "./TRIANGLES";
import { UV_COORDS } from "./UVCOORDS";

interface Props {
  faceLandmarkerResult: FaceLandmarkerResult;
  aspect: number;
  texture: THREE.Texture;
  opacity?: number;
}

const FaceMeshComponent = forwardRef<THREE.Mesh, Props>(
  ({ faceLandmarkerResult, aspect, texture, opacity = 1 }, ref) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const geometryRef = useRef<THREE.BufferGeometry>(
      new THREE.BufferGeometry(),
    );

    useImperativeHandle(ref, () => meshRef.current as THREE.Mesh);

    const uv = useMemo(() => {
      const uvArray = new Float32Array(UV_COORDS.length * 2);
      UV_COORDS.forEach((point, i) => {
        uvArray[i * 2] = point.x;
        uvArray[i * 2 + 1] = point.y;
      });
      return uvArray;
    }, []);

    const indices = new Uint16Array(triangles.flat());
    const vertexCount = uv.length / 2;
    const vertices = new Float32Array(vertexCount * 3);
    geometryRef.current.setAttribute(
      "position",
      new THREE.BufferAttribute(vertices, 3),
    );
    geometryRef.current.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    geometryRef.current.setIndex(new THREE.BufferAttribute(indices, 1));

    // Cleanup della geometry al desmontaggio.
    useEffect(() => {
      const geometry = geometryRef.current;
      const mesh = meshRef.current;
      return () => {
        if (geometry) {
          geometry.dispose();
          mesh?.geometry?.dispose();
          texture.dispose();
        }
      };
    }, [texture]);

    useFrame(() => {
      if (!meshRef.current) return;

      const keyPoints = faceLandmarkerResult.faceLandmarks[0];
      if (!keyPoints) return;

      const positionAttr = geometryRef.current.getAttribute(
        "position",
      ) as THREE.BufferAttribute;
      const vertices = positionAttr.array as Float32Array;

      keyPoints.forEach((landmark, i) => {
        const [x, y, z] = normalize(landmark, aspect);
        vertices[i * 3] = x;
        vertices[i * 3 + 1] = y;
        vertices[i * 3 + 2] = z;
      });

      positionAttr.needsUpdate = true;
      geometryRef.current.computeVertexNormals();
      meshRef.current.geometry = geometryRef.current;
      meshRef.current.renderOrder = 1;
    });

    return (
      <mesh ref={meshRef}>
        <meshStandardMaterial
          map={texture}
          transparent
          opacity={opacity}
          side={THREE.DoubleSide}
          depthTest={false}
        />
      </mesh>
    );
  },
);

FaceMeshComponent.displayName = "FaceMeshComponent";
export default FaceMeshComponent;

function normalize(
  point: NormalizedLandmark,
  aspect: number,
): [number, number, number] {
  const x = -(point.x - 0.5) * aspect;
  const y = 0.5 - point.y;
  const z = point.z;
  return [x, y, z];
}
