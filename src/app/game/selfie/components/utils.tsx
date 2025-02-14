export function canvasToBlob(
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
