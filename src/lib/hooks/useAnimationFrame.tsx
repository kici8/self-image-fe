import { useCallback, useEffect, useRef } from "react";

export function useAnimationFrame(callback: (time: number) => void) {
  const requestRef = useRef<number | null>(null);

  // The animate function gets called on every frame.
  const animate = useCallback(
    (time: number) => {
      callback(time); // Call the callback provided by the component.
      requestRef.current = requestAnimationFrame(animate); // Schedule next frame.
    },
    [callback],
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup: cancel the next animation frame on unmount.
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);
}
