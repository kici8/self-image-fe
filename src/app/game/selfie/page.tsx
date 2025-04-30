"use client";

import { CameraKit } from "@/lib/context/CameraKitContext";
import dynamic from "next/dynamic";

const SnapCanvas = dynamic(() => import("./components/SnapCanvas"), {
  ssr: false,
});

export default function GameSelfie() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between overflow-hidden bg-black md:rounded-xl">
      <CameraKit>
        <SnapCanvas />
      </CameraKit>
    </div>
  );
}
