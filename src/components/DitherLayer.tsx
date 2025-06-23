import { useEffect, useState, lazy, Suspense } from "react";

// Lazy-load the Dither component
const Dither = lazy(() => import("./Dither"));

function useIdleCallbackEffect(callback: () => void, delay = 2000) {
  useEffect(() => {
    let id: number;

    const win = window as Window & typeof globalThis;
    if ("requestIdleCallback" in win) {
      // @ts-ignore
      id = requestIdleCallback(callback);
    } else {
      id = window.setTimeout(callback, delay);
    }

    return () => {
      if ("cancelIdleCallback" in window) {
        // @ts-ignore
        cancelIdleCallback(id);
      } else {
        clearTimeout(id);
      }
    };
  }, []);
}

export default function DitherLayer() {
  const [showDither, setShowDither] = useState(false);

  useIdleCallbackEffect(() => {
    setShowDither(true);
  }, 2000);

  if (!showDither) return null;

  return (
    <Suspense fallback={null}>
      <div className="absolute w-full h-full z-0 pointer-events-none will-change-transform">
        <Dither />
      </div>
    </Suspense>
  );
}
