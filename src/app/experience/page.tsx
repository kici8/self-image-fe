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

const ExperiencePage: React.FC = () => {
  const mockUserId = "1397665e-fd7e-424b-9e6c-78336377488e";

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.Camera | null>(null);

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

    // Forza il ridisegno della scena
    if (sceneRef.current && cameraRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }

    // Aspetta un frame per assicurarsi che il canvas sia aggiornato
    await new Promise((resolve) => setTimeout(resolve, 100));

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

  function canvasToBlob(
    canvas: HTMLCanvasElement,
    type = "image/jpeg",
    quality = 1.0,
  ): Promise<Blob> {
    return new Promise((resolve, reject) => {
      try {
        // Safari iOS Fix: Usa un canvas 2D per catturare l'immagine
        const offscreenCanvas = document.createElement("canvas");
        offscreenCanvas.width = canvas.width;
        offscreenCanvas.height = canvas.height;
        const ctx = offscreenCanvas.getContext("2d");

        if (!ctx) {
          reject(new Error("Failed to create 2D context"));
          return;
        }

        ctx.drawImage(canvas, 0, 0);
        offscreenCanvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error("Canvas is empty"));
          },
          type,
          quality,
        );
      } catch (error) {
        reject(error);
      }
    });
  }

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
      const response = await fetch(screenshotUrl);
      const blob = await response.blob();

      const formData = new FormData();
      formData.append("player_id", mockUserId);
      formData.append("file", blob, `selfie-${Date.now()}.jpeg`);

      const res = await uploadSelfie(formData);
      if (res.status === "success") {
        console.log("Screenshot uploaded successfully!");
      } else {
        console.error("Upload failed:", res.status);
      }
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
        sceneRef={sceneRef}
        cameraRef={cameraRef}
        isSceneLoaded={isSceneLoaded}
        setIsSceneLoaded={setIsSceneLoaded}
      />
      <button
        disabled={isProcessingSelfie || !isSceneLoaded}
        onClick={handleTakeSelfie}
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
                disabled={!screenshotUrl}
                onClick={handleDownload}
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 rounded-full bg-secondary/40"
              >
                <DownloadIcon />
              </Button>
              {screenshotUrl ? (
                <Image
                  src={screenshotUrl}
                  alt="Screenshot preview"
                  className="mb-4 max-h-[60vh] w-full object-contain"
                  width={500}
                  height={500}
                  unoptimized
                />
              ) : (
                <div className="mb-4 h-[60vh] w-full animate-pulse rounded bg-gray-300" />
              )}
            </div>
            <DialogFooter className="flex flex-col gap-2 sm:flex-row">
              <Button onClick={closeScreenshotModal} variant="outline">
                Scatta ancora
                <Undo2Icon />
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={uploading || !screenshotUrl}
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
