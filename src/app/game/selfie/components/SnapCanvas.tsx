"use client";

import { uploadSelfie } from "@/lib/api";
import { useCameraKit } from "@/lib/hooks/useCameraKit";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGame } from "../../store/gameContext";
import SelfieDialog from "./SelfieDialog";
import { canvasToBlob } from "./utils";

// If we don't want the watermark we have to move the snapchat app to production
// https://developers.snap.com/camera-kit/app-review/design-guide
// https://developers.snap.com/camera-kit/app-review/release-app#using-the-production-api-token

const cameraButtonSVGVariants = cva(
  "absolute left-0 top-0 block h-full w-full group-disabled:opacity-40",
  {
    variants: {
      loading: {
        true: ["animate-spin"],
        false: ["animate-none"],
      },
    },
  },
);

function SnapCanvas() {
  // Hooks
  const { session, lenses } = useCameraKit();
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const router = useRouter();
  const { resetGame } = useGame();

  // Local storage
  const userId = localStorage.getItem("player_id");

  // States
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isProcessingSelfie, setIsProcessingSelfie] = useState(false);
  const [isSceneLoaded, setIsSceneLoaded] = useState(false);

  // Callbacks
  const stopExistingStream = () => {
    if (mediaStreamRef.current) {
      console.log(
        "Stopping existing stream...",
        mediaStreamRef.current.getTracks(),
      );
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
      console.log("Stream stopped???", mediaStreamRef.current);
    }
  };

  // START CAMERA KIT
  const startCameraKit = useCallback(async () => {
    stopExistingStream();
    // Lazy-load the camera-kit module on the client.
    const { createMediaStreamSource, Transform2D } = await import(
      "@snap/camera-kit"
    );
    mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    const source = createMediaStreamSource(mediaStreamRef.current, {
      transform: Transform2D.MirrorX,
    });
    session.setSource(source);
    session.applyLens(lenses[0]);
    session.play("live");
    setIsSceneLoaded(true);
  }, [session, lenses]);

  // CAPTURE SELFIE
  const captureSelfie = async () => {
    setIsProcessingSelfie(true);
    if (!session?.output?.live) {
      setIsProcessingSelfie(false);
      return;
    }
    const canvas = session.output.live;
    try {
      const blob = await canvasToBlob(canvas, "image/jpeg", 1.0);
      const previewUrl = URL.createObjectURL(blob);
      setScreenshotUrl(previewUrl);
      setModalOpen(true);
    } catch (error) {
      console.error("Error capturing canvas:", error);
    } finally {
      setIsProcessingSelfie(false);
    }
  };

  // HANDLE DOWNLOAD
  const handleDownload = async () => {
    if (!screenshotUrl) return;
    try {
      const link = document.createElement("a");
      link.href = screenshotUrl;
      link.download = `selfie-${Date.now()}.jpeg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(
        "Errore: non è stato possibile scaricare l'immagine",
        error,
      );
    }
  };

  // HANDLE SHARE
  const handleShare = async () => {
    if (!screenshotUrl) return;

    try {
      const response = await fetch(screenshotUrl);
      const blob = await response.blob();
      const file = new File([blob], `selfie-${Date.now()}.jpeg`, {
        type: "image/jpeg",
        lastModified: Date.now(),
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "Self image",
          text: "",
          files: [file],
        });
      } else {
        console.warn("Share non è supportato in questo browser.");
      }
    } catch (error) {
      console.error(
        "Errore: non è stato possibile condividere l'immagine",
        error,
      );
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async () => {
    if (!screenshotUrl || !userId) return;
    setUploading(true);
    try {
      const response = await fetch(screenshotUrl);
      const blob = await response.blob();

      const formData = new FormData();
      formData.append("player_id", userId);
      formData.append("file", blob, `selfie-${Date.now()}.jpeg`);

      const res = await uploadSelfie(formData);
      if (res.status === "success") {
        console.log("Screenshot uploaded successfully!");
        resetGame();
        router.push("/game/completed");
      } else {
        console.error("Upload failed:", res.status);
      }
    } catch (error) {
      console.error("Error uploading screenshot:", error);
    } finally {
      setUploading(false);
    }
  };

  // CLOSE SCREENSHOT MODAL
  const closeScreenshotModal = () => {
    if (screenshotUrl) {
      URL.revokeObjectURL(screenshotUrl);
    }
    setScreenshotUrl(null);
    setModalOpen(false);
    setIsProcessingSelfie(false);
  };

  // Effects
  useEffect(() => {
    startCameraKit();
    return () => {
      stopExistingStream();
    };
  }, [startCameraKit]);

  useEffect(() => {
    if (canvasContainerRef.current && session.output.live) {
      const liveCanvas = session.output.live;
      liveCanvas.style.width = "100%";
      liveCanvas.style.height = "100%";
      liveCanvas.style.display = "block";
      liveCanvas.style.objectFit = "cover";
      liveCanvas.style.objectPosition = "center";
      liveCanvas.style.borderRadius = "4px";
      canvasContainerRef.current.replaceWith(liveCanvas);
    }
  }, [session]);

  return (
    <div className="relative h-full w-full">
      <div ref={canvasContainerRef} />
      <button
        disabled={isProcessingSelfie || !isSceneLoaded}
        onClick={captureSelfie}
        className="group absolute bottom-4 left-1/2 h-20 w-20 -translate-x-1/2 transform rounded-full bg-black/10 text-white shadow-xl"
        aria-label="Scatta selfie"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(cameraButtonSVGVariants({ loading: !isSceneLoaded }))}
        >
          <defs>
            <clipPath id="innerStrokeClip">
              <circle cx="12" cy="12" r="12" />
            </clipPath>
          </defs>
          <circle
            cx="12"
            cy="12"
            fill="none"
            r="12"
            strokeWidth="4"
            stroke="currentColor"
            strokeDasharray={!isSceneLoaded ? "52 76" : "76 76"}
            clipPath="url(#innerStrokeClip)"
          />
        </svg>
        <span className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white transition-all group-hover:scale-75 group-active:scale-50 group-disabled:scale-50 group-disabled:cursor-not-allowed group-disabled:opacity-40" />
      </button>
      {modalOpen && (
        <SelfieDialog
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          closeScreenshotModal={closeScreenshotModal}
          screenshotUrl={screenshotUrl}
          handleDownload={handleDownload}
          handleShare={handleShare}
          handleSubmit={handleSubmit}
          uploading={uploading}
        />
      )}
    </div>
  );
}

export default SnapCanvas;
