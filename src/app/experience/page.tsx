"use client";

import { useRef } from "react";
import WebcamFeed from "./components/WebCamFeed";
import { Button } from "@/components/ui/button";

const ExperiencePage: React.FC = () => {
  // Ref
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Utility to convert dataURL to Blob.
  function dataURLtoBlob(dataUrl: string): Blob {
    const arr = dataUrl.split(",");
    const mimeMatch = arr[0].match(/:(.*?);/);
    if (!mimeMatch) throw new Error("Invalid dataURL");
    const mime = mimeMatch[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  // Handler to capture canvas as screenshot and upload.
  const handleScreenshotUpload = async () => {
    if (!canvasRef.current) return;

    // Convert canvas to data URL.
    const dataUrl = canvasRef.current.toDataURL("image/png");
    // Convert data URL to Blob.
    const blob = dataURLtoBlob(dataUrl);
    console.log("Screenshot captured!", blob);

    // // Create FormData and append the image blob.
    // const formData = new FormData();
    // formData.append("screenshot", blob, "screenshot.png");

    // try {
    //   // Replace '/upload' with your actual backend endpoint.
    //   const response = await fetch("/upload", {
    //     method: "POST",
    //     body: formData,
    //   });
    //   if (response.ok) {
    //     console.log("Screenshot uploaded successfully!");
    //   } else {
    //     console.error("Upload failed:", response.statusText);
    //   }
    // } catch (error) {
    //   console.error("Error uploading screenshot:", error);
    // }
  };

  return (
    <div className="h-svh w-svw bg-green-400 p-4">
      <WebcamFeed canvasRef={canvasRef} />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
        <Button onClick={handleScreenshotUpload}>Scatta</Button>
      </div>
    </div>
  );
};

export default ExperiencePage;
