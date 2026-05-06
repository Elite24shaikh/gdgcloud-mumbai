'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';
import iconImg from '@/assets/icon.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ['About', 'Events', 'Community', 'Team', 'FAQ'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 transition-all duration-500 pointer-events-none">
      <div className={clsx(
        "max-w-5xl mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500",
        scrolled ? "bg-white/70 backdrop-blur-xl py-3 px-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50" : "bg-transparent py-2 px-2"
      )}>

        {/* Left Logo */}
        <div className="flex items-center gap-3 z-50">
          <Image src={iconImg} alt="GDG Logo" width={28} height={28} className="opacity-90" />
          <span className="font-display font-medium text-lg tracking-tight text-black">
            GDG Cloud Mumbai
          </span>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-md font-medium text-white/60 hover:text-black transition-colors"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-6">
          <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black/80 hover:scale-105 transition-all shadow-md">
            Join Chapter
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 p-2 text-black hover:text-black/70 transition-colors focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={clsx(
          "absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-xl border border-black/5 rounded-3xl text-black p-8 flex flex-col gap-6 md:hidden transition-all duration-500 shadow-2xl pointer-events-auto",
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        )}
        style={{ transformOrigin: 'top center' }}
      >
        {links.map((link) => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-lg font-medium text-black/70 hover:text-black transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link}
          </Link>
        ))}
        <div className="w-full h-px bg-black/5 my-2" />
        <button className="bg-black text-white px-6 py-3 rounded-full text-center font-semibold mt-2 w-full">
          Join Chapter
        </button>
      </div>
    </header>
  );
}
