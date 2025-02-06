"use client";

import { useRef } from "react";
import WebcamFeed from "./components/WebCamFeed";
import { Button } from "@/components/ui/button";
import * as THREE from "three";
import { uploadSelfie } from "@/lib/api";

const ExperiencePage: React.FC = () => {
  // FIXME: remove Mock user ID
  const mockUserId = "1397665e-fd7e-424b-9e6c-78336377488e";

  // Ref
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  const handleScreenshotUpload = async () => {
    if (!rendererRef.current) return;

    const canvas = rendererRef.current.domElement;
    canvas.toBlob(
      async (blob) => {
        if (!blob) return;
        // Create a link to download the image using the blob data
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "canvas_image.jpg";
        link.click();

        // Create a FormData object
        const formData = new FormData();
        formData.append("player_id", mockUserId);
        formData.append("file", blob, `selfie-${Date.now()}.jpeg`);

        try {
          // Replace '/upload' with your actual backend endpoint.
          const response = await uploadSelfie(formData);
          if (response.status === "success") {
            console.log("Screenshot uploaded successfully!");
          } else {
            console.error("Upload failed:", response.status);
          }
        } catch (error) {
          console.error("Error uploading screenshot:", error);
        }
      },
      "image/jpeg",
      1.0,
    );
  };

  return (
    <div className="h-svh w-svw bg-green-400 p-4">
      <WebcamFeed canvasRef={canvasRef} rendererRef={rendererRef} />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
        <Button onClick={handleScreenshotUpload}>Scatta</Button>
      </div>
    </div>
  );
};

export default ExperiencePage;
