'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import hack1 from '@/assets/Events/hack1.png';
import ccd1 from '@/assets/Events/ccd1.jpg';
import img22 from '@/assets/Events/22.jpg';

const events = [
  {
    id: 1,
    title: 'Build and Grow AI Hackathon 2.0',
    description:
      "India's premier developer hackathon. Build innovative AI solutions with Google technologies, connect with mentors, and compete for amazing prizes. Finale in Mumbai.",
    tag: 'Featured',
    tagColor: 'border-blue-400/40 text-blue-300',
    image: hack1,
  },
  {
    id: 2,
    title: 'Cloud Community Days',
    description:
      'The largest gathering of cloud developers and tech enthusiasts in Mumbai & Pune. Learn, share, and connect with industry experts at CCD.',
    tag: 'Upcoming',
    tagColor: 'border-emerald-400/40 text-emerald-300',
    image: ccd1,
  },
  {
    id: 3,
    title: 'DevFest Mumbai 2024',
    description:
      'Annual developer festival celebrating technology, community, and innovation. Expect amazing talks, workshops, and networking with top engineers.',
    tag: 'Past Event',
    tagColor: 'border-orange-400/40 text-orange-300',
    image: img22,
  },
];

export default function EventsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(index);
        },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      );
      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const currentNum = (activeIndex + 1).toString().padStart(2, '0');
  const totalNum = events.length.toString().padStart(2, '0');

  return (
    <section id="events" className="bg-transparent text-white">
      {/* ── Section header ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400 mb-5">
          Events
        </p>
        <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-none">
          Upcoming &amp; Featured
        </h2>
      </div>

      {/* ── Sticky counter ── */}
      <div className="sticky top-0 z-30 max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center gap-6 pointer-events-none">
        {/* number */}
        <span className="text-4xl md:text-5xl font-bold tabular-nums leading-none text-white shrink-0 w-[4.5rem] text-right">
          {currentNum}
          <span className="text-gray-600 font-light text-2xl md:text-3xl ml-1">/{totalNum}</span>
        </span>
        {/* line */}
        <div className="flex-1 h-px bg-white/15" />
      </div>

      {/* ── Stacked cards ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-40">
        <div className="flex flex-col gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="group sticky top-24 rounded-[2rem] overflow-hidden border border-white/8 shadow-2xl"
              style={{
                zIndex: 10 + index,
                background: 'rgba(10,10,10,0.92)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex flex-col md:flex-row min-h-[60vh]">
                {/* Image — left 45% */}
                <div className="relative w-full md:w-[45%] min-h-[260px] md:min-h-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  {/* subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 md:hidden" />
                </div>

                {/* Content — right 55% */}
                <div className="flex flex-col justify-center p-8 md:p-14 w-full md:w-[55%]">
                  <span
                    className={`self-start text-[10px] font-semibold uppercase tracking-[0.22em] border px-3 py-1 rounded-full mb-8 ${event.tagColor}`}
                  >
                    {event.tag}
                  </span>

                  <h3 className="text-3xl md:text-[2.6rem] font-medium leading-[1.15] tracking-tight mb-6">
                    {event.title}
                  </h3>

                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light max-w-md">
                    {event.description}
                  </p>

                  <div className="mt-10 flex items-center gap-6">
                    <button className="px-7 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium tracking-wide uppercase">
                      Learn More
                    </button>
                    <span className="text-white/25 text-sm font-light select-none">
                      {(index + 1).toString().padStart(2, '0')} / {totalNum}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
