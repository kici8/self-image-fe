"use client";

import { useCallback, useEffect, useRef } from "react";
import { useCameraKit } from "@/lib/hooks/useCameraKit";

// If we don't want the watermark we have to move the snapchat app to production
// https://developers.snap.com/camera-kit/app-review/design-guide
// https://developers.snap.com/camera-kit/app-review/release-app#using-the-production-api-token

function SnapCanvas() {
  const { session, lenses } = useCameraKit();
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const startCameraKit = useCallback(async () => {
    // Lazy-load the camera-kit module on the client.
    const { createMediaStreamSource, Transform2D } = await import(
      "@snap/camera-kit"
    );

    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    const source = createMediaStreamSource(mediaStream, {
      transform: Transform2D.MirrorX,
    });

    console.log("source", source);
    console.log("session", session);
    console.log("lenses", lenses);

    session.setSource(source);
    session.applyLens(lenses[0]);
    session.play("live");
  }, [session, lenses]);

  useEffect(() => {
    startCameraKit();
  }, [startCameraKit]);

  useEffect(() => {
    canvasContainerRef?.current?.replaceWith(session.output.live);
  }, [session]);

  return <div ref={canvasContainerRef}></div>;
}

export default SnapCanvas;
