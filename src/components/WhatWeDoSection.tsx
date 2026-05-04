'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    label: 'Developers',
    value: '10K+',
  },
  {
    label: 'Events Annually',
    value: '100+',
  },
  {
    label: 'Community Reach',
    value: '1M+',
  },
];

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 80%',
      },
    });

    // Divider line stretch
    gsap.fromTo(lineRef.current, 
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 85%',
        },
      }
    );

    // Stats stagger reveal
    statsRef.current.forEach((stat, index) => {
      gsap.from(stat, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: index * 0.1,
        scrollTrigger: {
          trigger: headerRef.current, // Use header as common trigger for consistent stagger
          start: 'top 75%',
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative z-20 bg-transparent text-black w-full min-h-screen py-32 px-6 md:px-12 flex flex-col justify-center transition-colors duration-1000"
    >
      <div className="max-w-screen-2xl mx-auto w-full">
        {/* Section Header */}
        <div ref={headerRef} className="mb-24 md:mb-32 max-w-4xl">
          <h2 className="font-sans text-4xl md:text-6xl lg:text-8xl font-light tracking-tight leading-tight mb-8">
            Empowering developers, startups, and tech leaders.
          </h2>
          <p className="text-xl md:text-3xl text-black/60 font-display">
            We build a thriving ecosystem for cloud and AI innovation through collaborative events, hackathons, and study jams.
          </p>
        </div>

        {/* Minimal Divider */}
        <div ref={lineRef} className="w-full h-[1px] bg-black/10 mb-20 origin-left" />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) statsRef.current[index] = el;
              }}
              className="flex flex-col gap-2"
            >
              <h3 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-lg md:text-xl text-black/60 uppercase tracking-widest font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
