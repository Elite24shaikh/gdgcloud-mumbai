export default function CommunitySection() {
  return (
    <section id="community" className="py-32 px-6 md:px-12 bg-transparent text-white transition-colors duration-1000">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400 mb-4">Community</h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">Insights, Photos & Videos</h3>
            <p className="text-white/60 max-w-2xl font-light text-lg mt-6">Over 10,000 developers connected through innovative workshops, hackathons, and collaborative learning experiences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 aspect-video bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[#1a1a1a] group-hover:scale-105 transition-transform duration-700 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <div className="relative z-20">
              <span className="text-white/80 text-xs font-semibold tracking-wider uppercase mb-3 block">Video Recap</span>
              <h4 className="text-white text-3xl font-medium">Build & Grow Express Journey</h4>
            </div>
          </div>
          <div className="aspect-square md:aspect-auto bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
             <div className="absolute inset-0 bg-[#222] group-hover:scale-105 transition-transform duration-700 z-0" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
             <div className="relative z-20">
              <span className="text-white/80 text-xs font-semibold tracking-wider uppercase mb-3 block">Photo Gallery</span>
              <h4 className="text-white text-2xl font-medium">Study Jams</h4>
            </div>
          </div>
          <div className="aspect-square md:aspect-auto bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
             <div className="absolute inset-0 bg-[#222] group-hover:scale-105 transition-transform duration-700 z-0" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
             <div className="relative z-20">
              <span className="text-white/80 text-xs font-semibold tracking-wider uppercase mb-3 block">Insight</span>
              <h4 className="text-white text-2xl font-medium">AI Impact Summit</h4>
            </div>
          </div>
          <div className="md:col-span-2 aspect-video bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[#1a1a1a] group-hover:scale-105 transition-transform duration-700 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <div className="relative z-20">
              <span className="text-white/80 text-xs font-semibold tracking-wider uppercase mb-3 block">Article</span>
              <h4 className="text-white text-3xl font-medium">How to win Hackathons</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
