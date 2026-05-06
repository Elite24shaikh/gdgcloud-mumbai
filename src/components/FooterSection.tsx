'use client';
import Image from 'next/image';
import iconImg from '@/assets/icon.png';
import mumbaiFooterImg from '@/assets/MumbaiFooter.jpg';
import mumbaiFooter2Img from '@/assets/Mumbai1.jpg';
import mumbaiFooter3Img from '@/assets/ft1.jpg';
import mumbaiFooter4Img from '@/assets/gatewayTAJ 1.png';
import igIcon from '@/assets/icons/igbg.png';
import twitterIcon from '@/assets/icons/imgX.png';
import linkedinIcon from '@/assets/icons/LinkedinImg.png';

export default function FooterSection() {
  return (
    <footer id="contact" className="bg-transparent py-10 px-4 md:px-10">
      {/* ── Main Card Container ── */}
      <div className="max-w-8xl mx-auto bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">

        {/* ── Top Info Section ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-20 pt-16 md:pt-24 pb-12">

          {/* Left Column: Brand & Subscribe */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-2xl p-2 shadow-sm border border-black/5">
                <Image src={iconImg} alt="GDG Logo" width={40} height={40} />
              </div>
              <span className="text-xl font-bold tracking-tight">GDG Cloud Mumbai</span>
            </div>

            <p className="text-sm text-black/60 leading-relaxed max-w-sm">
              Empowering the developer community in Mumbai with Google Cloud technologies.
              Join us for workshops, meetups, and networking.
            </p>

            {/* <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-14 pl-6 pr-32 bg-[#F8F9FA] rounded-full border border-black/5 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
              <button className="absolute right-1.5 top-1.5 h-11 px-6 bg-[#EA4335] hover:bg-[#D33828] text-white rounded-full text-sm font-semibold transition-all hover:shadow-lg">
                Subscribe
              </button>
            </div> */}
          </div>

          {/* Center Column: Quick Links */}
          <div className="flex flex-col gap-6 md:pl-20">
            <h4 className="text-sm font-bold uppercase tracking-widest text-black">Quick links</h4>
            <nav className="flex flex-col gap-4">
              {[
                { name: 'Home', href: '#' },
                { name: 'About Us', href: '#about' },
                { name: 'Events', href: '#events' },
                { name: 'Community', href: '#community' },
                { name: 'Team', href: '#team' },
              ].map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black/60 hover:text-black transition-colors text-sm font-medium w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column: Get in touch */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-black">Get in touch</h4>
            <div className="flex flex-col gap-4 text-sm text-black/60">
              {/* <div className="flex flex-col gap-1">
                <span className="text-black font-semibold">Address</span>
                <p>Google Mumbai, Bandra Kurla Complex,<br />Mumbai, Maharashtra 400051</p>
              </div> */}
              <div className="flex flex-col gap-1">
                <span className="text-black font-semibold">Email</span>
                <p>contact@gdgcloudmumbai.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Middle Banner Section ── */}
        <div className="px-6 md:px-10 pb-6">
          <div className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-[2rem] md:rounded-[3rem] overflow-hidden group">
            <Image
              src={mumbaiFooter2Img}
              alt="Mumbai Skyline"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="px-8 md:px-20 py-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-black/5">
          <p className="text-xs text-black/40 font-medium order-2 md:order-1">
            © 2026 GDG Cloud Mumbai. All rights reserved.
          </p>

          <div className="flex gap-5 order-1 md:order-2">
            {[
              { label: 'Twitter/X', href: 'https://x.com/gdgcloudmumbai', icon: twitterIcon },
              { label: 'LinkedIn', href: '#', icon: linkedinIcon },
              { label: 'Instagram', href: '#', icon: igIcon },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-all"
              >
                <Image
                  src={s.icon}
                  alt={s.label}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </a>
            ))}
          </div>

          <p className="text-xs text-black/40 font-medium order-3">
            Designed by GDG Mumbai Team
          </p>
        </div>
      </div>
    </footer>
  );
}
