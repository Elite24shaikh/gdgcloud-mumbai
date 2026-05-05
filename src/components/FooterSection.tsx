'use client';
import Image from 'next/image';
import iconImg from '@/assets/icon.png';

export default function FooterSection() {
  return (
    <footer id="contact" className="bg-transparent text-black overflow-hidden transition-colors duration-1000">

      {/* ── Upper content area ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 flex flex-col md:flex-row justify-between gap-16">

        {/* Left: nav links */}
        <nav className="flex flex-col gap-2 text-sm text-black/50">
          {['Home', 'Events', 'Community', 'Team', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="hover:text-black transition-colors font-medium">
              {link}
            </a>
          ))}
        </nav>

        {/* Center: follow us */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">Follow us</span>
          <p className="text-sm text-black/60">contact@gdgcloudmumbai.com</p>
          <div className="flex gap-3 mt-2">
            {[
              { label: 'Twitter/X', href: 'https://x.com/gdgcloudmumbai', icon: '𝕏' },
              { label: 'LinkedIn', href: '#', icon: 'in' },
              { label: 'Instagram', href: '#', icon: '▣' },
              { label: 'YouTube', href: '#', icon: '▶' },
            ].map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: address */}
        <div className="flex flex-col items-end text-right text-sm text-black/50 gap-1">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40 mb-2">Based in</span>
          <span>Mumbai,</span>
          <span>Maharashtra,</span>
          <span>India 🇮🇳</span>
        </div>
      </div>

      {/* ── Bottom bar (copyright) ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center border-t border-black/10 text-black/35 text-xs gap-4">
        <span>© 2026 GDG Cloud Mumbai. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-black transition-colors uppercase tracking-wider">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors uppercase tracking-wider">Terms &amp; Conditions</a>
        </div>
      </div>

      {/* ── Brand display block ── */}
      <div className="w-full flex flex-col items-center pt-10 pb-0 relative select-none">
        {/* Icon above */}
        <div className="mb-6 bg-white rounded-full p-3 shadow-sm border border-black/8">
          <Image src={iconImg} alt="GDG Logo" width={56} height={56} />
        </div>

        {/* "GDG Cloud" — medium weight label */}
        <p className="text-base md:text-lg font-medium tracking-[0.25em] uppercase text-black/50 mb-2">
          GDG Cloud
        </p>

        {/* "MUMBAI" — giant display text flush to bottom */}
        <h1
          className="font-black uppercase leading-none tracking-tighter text-black w-full text-center"
          style={{ fontSize: 'clamp(4rem, 18vw, 18rem)', lineHeight: 0.88 }}
        >
          MUMBAI
        </h1>
      </div>
    </footer>
  );
}
