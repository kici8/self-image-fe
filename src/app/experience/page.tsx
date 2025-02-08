"use client";

import { CameraKit } from "@/lib/context/CameraKitContext";
import dynamic from "next/dynamic";

const SnapCanvas = dynamic(() => import("./components/SnapCanvas"), {
  ssr: false,
});

export default function Experience() {
  return (
    <div>
      Camera kit:
      <CameraKit>
        <SnapCanvas />
      </CameraKit>
    </div>
  );
}
