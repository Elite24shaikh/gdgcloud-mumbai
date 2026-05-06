'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ isReady = true }: { isReady?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Subtle parallax on the video wrapper div (not the video element itself)
    gsap.to(videoWrapperRef.current, {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    if (isReady) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });
      tl.fromTo(contentRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, delay: 0.3 });
    }
  }, { scope: sectionRef, dependencies: [isReady] });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* ── Video background ── */}
      <div className="absolute inset-4 md:inset-8 z-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
        {/* Extra wrapper for parallax — taller than container so parallax has room */}
        <div
          ref={videoWrapperRef}
          className="absolute inset-0 w-full"
          style={{ height: '120%', top: '-10%' }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{ display: 'block' }}
          >
            <source src="/Mumbaihero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
        <div className="absolute inset-0 bg-black/10 z-10" />
      </div>

      {/* ── Main content ── */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full h-full pt-16"
      >
        {isReady && (
          <>
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-medium tracking-widest uppercase mb-6 shadow-xl">
              GDG Cloud Mumbai
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.05] font-medium tracking-tight mb-6 text-white drop-shadow-lg max-w-5xl">
              मुंबई <br />
              <span className="text-white/90">Runs On Cloud</span>
            </h1>

            <p className="text-sm md:text-lg lg:text-xl text-white/80 max-w-2xl font-sans font-light mb-10 tracking-wide drop-shadow-md">
              Join India&apos;s premier developer community. Learn, collaborate, and innovate with Google technologies in Mumbai and Pune.
            </p>

            <div className="flex items-center gap-4">
              <button className="bg-black/20 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black/40 transition-all shadow-xl">
                Explore Events
              </button>
            </div>
          </>
        )}
      </div>

      {/* ── Bottom stats ── */}
      <div className="absolute bottom-16 left-0 w-full px-12 md:px-20 md:flex justify-between items-end z-20 pointer-events-none hidden">
        <div className="flex flex-col text-left">
          <span className="text-white text-3xl font-medium drop-shadow-md">8K+</span>
          <span className="text-white/70 text-xs font-medium uppercase tracking-wider">Developers</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-white text-3xl font-medium drop-shadow-md">60+</span>
          <span className="text-white/70 text-xs font-medium uppercase tracking-wider">Events Annually</span>
        </div>
      </div>
    </section>
  );
}
