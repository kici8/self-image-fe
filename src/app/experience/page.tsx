"use client";

import { useRef, useState } from "react";
import WebcamFeed from "./components/WebCamFeed";
import { Button } from "@/components/ui/button";
import * as THREE from "three";
import { uploadSelfie } from "@/lib/api";
import Image from "next/image";
import {
  Dialog,
  DialogFooter,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DownloadIcon,
  LoaderCircleIcon,
  Undo2Icon,
  UploadIcon,
} from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cameraButtonSVGVariants = cva(
  "absolute left-0 top-0 h-full w-full group-disabled:opacity-40",
  {
    variants: {
      loading: {
        true: ["animate-spin"],
        false: ["animate-none"],
      },
    },
  },
);

// This is a helper function to convert a canvas to a Blob that works on iOS Safari (I hope)
function canvasToBlob(
  canvas: HTMLCanvasElement,
  type = "image/jpeg",
  quality = 1.0,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    if (canvas.toBlob) {
      console.log("🔵 Using canvas.toBlob");
      canvas.toBlob(
        (blob) => {
          console.log("🔵 Blob created", blob);
          if (blob) resolve(blob);
          else reject(new Error("Canvas is empty"));
        },
        type,
        quality,
      );
    } else {
      // Fallback for iOS Safari: use toDataURL then convert
      try {
        const dataUrl = canvas.toDataURL(type, quality);
        console.log("🟧 Using canvas.toDataURL");
        const byteString = atob(dataUrl.split(",")[1]);
        const mimeString = dataUrl.split(",")[0].split(":")[1].split(";")[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        console.log("🟧 blob from dataUrl", blob);
        resolve(blob);
      } catch (error) {
        reject(error);
      }
    }
  });
}

const ExperiencePage: React.FC = () => {
  // FIXME: remove Mock user ID
  const mockUserId = "1397665e-fd7e-424b-9e6c-78336377488e";

  // Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  // State for screenshot modal
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isProcessingSelfie, setIsProcessingSelfie] = useState(false);
  const [isSceneLoaded, setIsSceneLoaded] = useState(false);

  const handleTakeSelfie = async () => {
    setIsProcessingSelfie(true);
    if (!rendererRef.current) {
      setIsProcessingSelfie(false);
      return;
    }

    const canvas = rendererRef.current.domElement;

    // Use our helper that works on iOS
    try {
      const blob = await canvasToBlob(canvas, "image/jpeg", 1.0);
      // Create a URL for preview
      const previewUrl = URL.createObjectURL(blob);
      setScreenshotUrl(previewUrl);
      setModalOpen(true);
    } catch (error) {
      console.error("Error capturing canvas:", error);
    } finally {
      setIsProcessingSelfie(false);
    }
  };

  const handleDownload = () => {
    if (!screenshotUrl) return;
    const link = document.createElement("a");
    link.href = screenshotUrl;
    link.download = `selfie-${Date.now()}.jpeg`;
    link.click();
  };

  const handleSubmit = async () => {
    if (!screenshotUrl) return;
    setUploading(true);
    try {
      // Convert the screenshotUrl blob back to Blob
      const response = await fetch(screenshotUrl);
      const blob = await response.blob();

      // Create FormData and append fields
      const formData = new FormData();
      formData.append("player_id", mockUserId);
      formData.append("file", blob, `selfie-${Date.now()}.jpeg`);

      const res = await uploadSelfie(formData);
      if (res.status === "success") {
        console.log("Screenshot uploaded successfully!");
      } else {
        console.error("Upload failed:", res.status);
      }
      // FIXME: Clean up the modal and URL or just redirect to the next page
      // if (screenshotUrl) {
      //   URL.revokeObjectURL(screenshotUrl);
      // }
      // setModalOpen(false);
    } catch (error) {
      console.error("Error uploading screenshot:", error);
    } finally {
      setUploading(false);
    }
  };

  const closeScreenshotModal = () => {
    if (screenshotUrl) {
      URL.revokeObjectURL(screenshotUrl);
    }
    setScreenshotUrl(null);
    setModalOpen(false);
    setIsProcessingSelfie(false);
  };

  return (
    <div className="relative h-svh w-svw">
      <WebcamFeed
        canvasRef={canvasRef}
        rendererRef={rendererRef}
        isSceneLoaded={isSceneLoaded}
        setIsSceneLoaded={setIsSceneLoaded}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
        <button
          disabled={isProcessingSelfie || !isSceneLoaded}
          onClick={handleTakeSelfie}
          className="group relative h-20 w-20 bg-transparent text-white"
          aria-label="Scatta selfie"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(cameraButtonSVGVariants({ loading: !isSceneLoaded }))}
          >
            <circle
              cx="12"
              cy="12"
              fill="none"
              r="10"
              strokeWidth="1"
              stroke="currentColor"
              strokeDasharray={!isSceneLoaded ? "42 64" : "64 64"}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white transition-all group-hover:scale-75 group-active:scale-50 group-disabled:scale-50 group-disabled:cursor-not-allowed group-disabled:opacity-40" />
        </button>
      </div>

      {modalOpen && screenshotUrl && (
        <Dialog
          open={modalOpen}
          onOpenChange={(open) =>
            open ? setModalOpen(open) : closeScreenshotModal()
          }
        >
          <DialogContent
            className="sm:max-w-[425px]"
            aria-describedby={undefined}
          >
            <DialogHeader>
              <DialogTitle>Carica Selfie</DialogTitle>
            </DialogHeader>
            <div className="relative">
              <Button
                onClick={handleDownload}
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 rounded-full bg-secondary/40"
              >
                <DownloadIcon />
              </Button>
              <Image
                src={screenshotUrl}
                alt="Screenshot preview"
                className="mb-4 max-h-[60vh] w-full object-contain"
                width={500}
                height={500}
                unoptimized
              />
            </div>
            <DialogFooter className="flex flex-col gap-2 sm:flex-row">
              <Button
                onClick={closeScreenshotModal}
                variant="outline"
                className="flex-1 sm:flex-auto"
              >
                Scatta ancora
                <Undo2Icon />
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={uploading}
                className="flex-1"
              >
                Carica selfie
                {uploading ? (
                  <LoaderCircleIcon className="animate-spin" />
                ) : (
                  <UploadIcon />
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ExperiencePage;
