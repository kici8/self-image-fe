import { useEffect, useRef } from "react";

export function useIntervalAnimation(
  callback: (time: number) => void,
  delay: number,
) {
  const savedCallback = useRef<(time: number) => void | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let id: NodeJS.Timeout;
    function tick() {
      if (savedCallback.current) {
        savedCallback.current(performance.now());
      }
      id = setTimeout(tick, delay);
    }
    tick();
    return () => clearTimeout(id);
  }, [delay]);
}
