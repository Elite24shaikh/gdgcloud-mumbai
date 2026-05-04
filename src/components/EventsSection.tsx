import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="events" ref={sectionRef} className="py-32 px-6 md:px-12 bg-transparent text-white min-h-screen flex flex-col justify-center transition-colors duration-1000">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400 mb-4">Events</h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">Upcoming & Featured</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Build and Grow Hackathon */}
          <div className="group cursor-pointer flex flex-col">
            <div className="w-full aspect-[4/3] bg-[#111] rounded-3xl mb-6 overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/5">
               <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-500 z-10"/>
               <div className="w-full h-full flex flex-col items-center justify-center text-5xl md:text-7xl bg-gradient-to-br from-blue-900/40 to-indigo-900/40 group-hover:scale-105 transition-transform duration-700">
                 👨‍💻
                 <span className="text-lg font-medium text-blue-200/60 mt-4 tracking-widest uppercase">Hackathon 2.0</span>
               </div>
            </div>
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="text-2xl md:text-3xl font-medium mb-3 group-hover:text-blue-400 transition-colors">Build and Grow AI Hackathon 2.0</h4>
                <p className="text-white/60 leading-relaxed font-light">Join India's premier developer hackathon. Build innovative AI solutions with Google technologies, connect with mentors, and compete for amazing prizes. Finale in Mumbai.</p>
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-blue-300 bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 rounded-full whitespace-nowrap">Featured</span>
            </div>
          </div>

          {/* CCD */}
          <div className="group cursor-pointer flex flex-col">
            <div className="w-full aspect-[4/3] bg-[#111] rounded-3xl mb-6 overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/5 md:mt-16">
               <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-500 z-10"/>
               <div className="w-full h-full flex flex-col items-center justify-center text-5xl md:text-7xl bg-gradient-to-br from-emerald-900/40 to-green-900/40 group-hover:scale-105 transition-transform duration-700">
                 ☁️
                 <span className="text-lg font-medium text-emerald-200/60 mt-4 tracking-widest uppercase">Community</span>
               </div>
            </div>
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="text-2xl md:text-3xl font-medium mb-3 group-hover:text-emerald-400 transition-colors">Cloud Community Days (CCD)</h4>
                <p className="text-white/60 leading-relaxed font-light">The largest gathering of cloud developers and tech enthusiasts in Mumbai & Pune. Learn, share, and connect with industry experts.</p>
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-emerald-300 bg-emerald-900/30 border border-emerald-500/30 px-4 py-1.5 rounded-full whitespace-nowrap">Upcoming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
