import Image from 'next/image';
import iconImg from '@/assets/icon.png';

export default function FooterSection() {
  return (
    <footer id="faq" className="pt-32 pb-8 px-6 md:px-12 bg-transparent text-black flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* CTA */}
        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight mb-8">
          Ready to build with us?
        </h2>
        <p className="text-black/60 mb-12 max-w-2xl text-lg lg:text-xl font-light">
          Join the largest community of developers in Mumbai & Pune. Connect, learn, and grow your career with GDG Cloud.
        </p>
        <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform mb-40 shadow-xl">
          Become a Member
        </button>

        {/* GDG LOGO & BIG LETTERS */}
        <div className="w-full flex flex-col items-center relative">
          <div className="absolute -top-24 bg-white p-4 rounded-full shadow-sm border border-black/5">
            <Image src={iconImg} alt="GDG Logo" width={80} height={80} className="" />
          </div>
          <h1 className="text-[13vw] leading-none font-bold tracking-tighter text-black whitespace-nowrap opacity-100 w-full text-center mix-blend-difference mt-10">
            GDG CLOUD MUMBAI
          </h1>
        </div>
        
        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-black/10 text-black/40 text-sm font-medium">
          <p>© 2026 GDG Cloud Mumbai & Pune. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-black transition-colors uppercase tracking-wider text-xs">Twitter</a>
            <a href="#" className="hover:text-black transition-colors uppercase tracking-wider text-xs">LinkedIn</a>
            <a href="#" className="hover:text-black transition-colors uppercase tracking-wider text-xs">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
