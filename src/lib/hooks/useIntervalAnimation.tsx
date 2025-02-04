import { useEffect, useRef } from "react";

export function useIntervalAnimation(
  callback: (time: number) => void,
  interval: number = 6, // roughly 60fps
) {
  const savedCallback = useRef(callback);

  // Remember latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let timeoutId: number;

    const tick = () => {
      const now = performance.now();
      savedCallback.current(now);
      timeoutId = window.setTimeout(tick, interval);
    };

    tick();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [interval]);
}
