'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the entire container
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: 'power2.inOut',
          onComplete: onComplete,
        });
      },
    });

    // Animate loader width (simulating progress)
    tl.to(loaderRef.current, {
      width: '100%',
      duration: 2.5,
      ease: 'expo.inOut',
    });

    // Animate text opacity
    tl.to(textRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
    }, '-=0.8'); // start fading text a bit before loader finishes
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black"
    >
      <div className="flex w-64 flex-col items-center justify-center gap-6">
        {/* Animated Loader Bar */}
        <div className="h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
          <div
            ref={loaderRef}
            className="h-full w-0 bg-white"
          />
        </div>

        {/* Loading Text */}
        <div
          ref={textRef}
          className="text-sm font-mono tracking-widest text-white/50 uppercase"
        >
          Initializing MUMBAI SPRITS
        </div>
      </div>
    </div>
  );
}
