'use client';

export default function GlobalNoise() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-30 mix-blend-overlay">
      <svg className="absolute left-0 top-0 h-full w-full">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilter)"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
