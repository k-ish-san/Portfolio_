import { useEffect, useState, lazy, Suspense } from "react";

// Lazy-load the heavy Dither shader only when needed
const Dither = lazy(() => import("./Dither"));

export default function DitherLayer() {
  const [showDither, setShowDither] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setShowDither(true));
    } else {
      // Fallback if requestIdleCallback isn't supported
      setTimeout(() => setShowDither(true), 2000);
    }
  }, []);

  if (!showDither) return null;

  return (
    <Suspense fallback={null}>
      <div className="absolute w-full h-full z-0 pointer-events-none will-change-transform">
        <Dither
          waveColor={[0, 0, 1]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
    </Suspense>
  );
}
