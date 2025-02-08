"use client";

import { CameraKitSession, Lens } from "@snap/camera-kit";
import { createContext, useEffect, useRef, useState } from "react";

const apiToken = process.env.NEXT_PUBLIC_SNAP_API_TOKEN;
if (!apiToken) {
  throw new Error("Missing NEXT_PUBLIC_SNAP_API_TOKEN environment variable");
}
const lensGroupId = process.env.NEXT_PUBLIC_SNAP_LENS_GROUP_ID;
if (!lensGroupId) {
  throw new Error(
    "Missing NEXT_PUBLIC_SNAP_LENS_GROUP_ID environment variable",
  );
}

export interface CameraKitState {
  session: CameraKitSession; // Replace `any` with CameraKitSession if desired
  lenses: Lens[]; // Replace `any` with Lens if desired
}

export const CameraKitContext = createContext<CameraKitState | null>(null);

export const CameraKit: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isInitialized = useRef<boolean>(false);
  const [session, setSession] = useState<CameraKitSession | null>(null);
  const [lenses, setLenses] = useState<Lens[]>([]);

  useEffect(() => {
    const initializeCameraKit = async () => {
      // Dynamically import the camera-kit module here
      const { bootstrapCameraKit } = await import("@snap/camera-kit");
      const cameraKit = await bootstrapCameraKit({ apiToken });
      const session = await cameraKit.createSession();
      const { lenses } = await cameraKit.lensRepository.loadLensGroups([
        lensGroupId,
      ]);
      setLenses(lenses);
      setSession(session);
    };

    if (isInitialized.current) return;
    isInitialized.current = true;
    initializeCameraKit();
  }, []);

  return !session ? (
    <div>Initializing Camera Kit...</div>
  ) : (
    <CameraKitContext.Provider value={{ session, lenses }}>
      {children}
    </CameraKitContext.Provider>
  );
};
