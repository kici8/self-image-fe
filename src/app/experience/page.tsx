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
  const [cameraButtonDisabled, setCameraButtonDisabled] = useState(false);

  const handleTakeSelfie = async () => {
    setCameraButtonDisabled(true);
    if (!rendererRef.current) {
      setCameraButtonDisabled(false);
      return;
    }

    const canvas = rendererRef.current.domElement;

    canvas.toBlob(
      async (blob) => {
        if (!blob) return;

        // Create a URL for preview
        const previewUrl = URL.createObjectURL(blob);
        setScreenshotUrl(previewUrl);
        setModalOpen(true);
      },
      "image/jpeg",
      1.0,
    );
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
    setCameraButtonDisabled(false);
  };

  return (
    <div className="relative h-svh w-svw">
      <WebcamFeed canvasRef={canvasRef} rendererRef={rendererRef} />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
        <button
          disabled={cameraButtonDisabled}
          onClick={handleTakeSelfie}
          className="group relative h-20 w-20 rounded-full border-4 border-white bg-transparent transition-all disabled:border-transparent"
          aria-label="Scatta selfie"
        >
          <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white transition-all group-hover:size-10/12 group-active:size-6/12 group-disabled:animate-pulse group-disabled:cursor-not-allowed" />
        </button>
      </div>

      {modalOpen && screenshotUrl && (
        <Dialog
          open={modalOpen}
          onOpenChange={(open) =>
            open ? setModalOpen(open) : closeScreenshotModal()
          }
        >
          <DialogContent className="sm:max-w-[425px]">
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
