'use client';

import { useState, useEffect, useRef } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import EventsSection from '@/components/EventsSection';
import OrganizersSection from '@/components/OrganizersSection';
import CommunitySection from '@/components/CommunitySection';
import FooterSection from '@/components/FooterSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Lock scrolling while loading
    if (isLoading) {
      lenis.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis.start();
      document.body.style.overflow = '';
      
      // Refresh ScrollTrigger after loading unmounts so it calculates correct positions
      gsap.delayedCall(0.1, () => {
        ScrollTrigger.refresh();
      });

      // Background Color Transition Effect
      // Animates the main container's background when crossing sections
      const sections = document.querySelectorAll('[data-color]');
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => {
            gsap.to(mainRef.current, {
              backgroundColor: section.getAttribute('data-color') || '#ffffff',
              color: section.getAttribute('data-text') || '#000000',
              duration: 1,
              ease: 'power2.inOut',
            });
          },
          onEnterBack: () => {
            gsap.to(mainRef.current, {
              backgroundColor: section.getAttribute('data-color') || '#ffffff',
              color: section.getAttribute('data-text') || '#000000',
              duration: 1,
              ease: 'power2.inOut',
            });
          },
        });
      });
    }

    return () => {
      lenis.destroy();
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <main ref={mainRef} className="relative min-h-screen w-full bg-[#fafafa] transition-colors duration-1000">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && <Navbar />}

      {/* We keep main content mounted but it will handle its own entrance animation */}
      <div data-color="#000000" data-text="#ffffff" className="w-full">
        <HeroSection isReady={!isLoading} />
      </div>
      
      {!isLoading && (
        <>
          <div id="about" data-color="#ffffff" data-text="#000000" className="w-full">
            <WhatWeDoSection />
          </div>
          <div data-color="#000000" data-text="#ffffff" className="w-full">
            {/* Dark background for events */}
            <EventsSection />
          </div>
          <div data-color="#ffffff" data-text="#000000" className="w-full">
            <OrganizersSection />
          </div>
          <div data-color="#000000" data-text="#ffffff" className="w-full">
            {/* Dark background for community */}
            <CommunitySection />
          </div>
          <div data-color="#ffffff" data-text="#000000" className="w-full">
            <FooterSection />
          </div>
        </>
      )}
    </main>
  );
}
