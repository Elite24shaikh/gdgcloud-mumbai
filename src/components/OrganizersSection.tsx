'use client';

import Image from 'next/image';
import Plasma from './Plasma';
import vinitImg from '@/assets/Team/Vinit Surve.webp';
import abdullahImg from '@/assets/Team/abdullah.webp';
import yashImg from '@/assets/Team/yash-agrawal.webp';
import niharikaImg from '@/assets/Team/nikbr.png';
import abhishekImg from '@/assets/Team/abkbr.png';
import rushabhImg from '@/assets/Team/rubhbr.png';

const teamAndVolunteers = [
  {
    name: 'Vinit Surve',
    role: 'ORGANIZER & LEAD',
    description: 'Driving the community vision and operations with a passion for developer ecosystem growth.',
    image: vinitImg,
  },
  {
    name: 'Abdullah Shaikh',
    role: 'TECHNICAL LEAD',
    description: 'The wizard architecting scalable cloud solutions and bridging the gap between code and infrastructure.',
    image: abdullahImg,
  },
  {
    name: 'Yash Agrawal',
    role: 'COMMUNITY MANAGER',
    description: 'Ensuring every member finds their place in our thriving ecosystem through impactful engagement.',
    image: yashImg,
  },
  {
    name: 'Durgesh Keshri',
    role: 'EVENT OPERATIONS',
    description: 'The reason our hackathons and workshops launch flawlessly. He never misses a logistical beat.',
    image: null,
  },
];

// Reusable Plasma text card
function PlasmaCard({ member }: { member: typeof teamAndVolunteers[number] }) {
  return (
    <div className="group relative bg-white rounded-[2rem] p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow overflow-hidden min-h-[200px] flex flex-col justify-between">
      {/* Plasma background — revealed on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <Plasma color="#9441e1" speed={0.6} opacity={0.8} />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3">
        <span className="text-[9px] font-bold tracking-[0.15em] text-gray-400 group-hover:text-purple-200 uppercase transition-colors duration-500">
          [ {member.role} ]
        </span>
        <h4 className="text-lg font-bold uppercase tracking-wide text-gray-900 group-hover:text-white transition-colors duration-500">
          {member.name}
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed font-light italic group-hover:text-purple-100 transition-colors duration-500">
          &quot;{member.description}&quot;
        </p>
      </div>
    </div>
  );
}

export default function OrganizersSection() {
  return (
    <section id="team" className="py-32 px-6 md:px-12 bg-transparent text-black transition-colors duration-1000">

      {/* ── Organizers showcase grid ── */}
      <div className="max-w-6xl mx-auto w-full relative mb-32">
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="font-serif text-5xl md:text-6xl text-gray-900 leading-tight">
            Ideas Flow Freely from <br />
            <span className="italic">Creative Thinkers</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Niharika — tall */}
          <div className="flex flex-col">
            <div className="bg-[#f2f2f2] rounded-[1.5rem] p-8 relative overflow-hidden h-full min-h-[664px] shadow-sm hover:shadow-lg group transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-[#2a2422] to-[#6d4030] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <div className="relative z-20">
                <h4 className="font-serif font-bold text-3xl text-gray-900 group-hover:text-white transition-colors duration-500">Niharika Dhanik</h4>
                <p className="text-sm text-gray-500 group-hover:text-white/70 uppercase tracking-wider mt-2 mb-6 transition-colors duration-500">Organizer</p>
                <p className="text-base text-gray-600 group-hover:text-white/80 leading-relaxed font-light transition-colors duration-500">
                  Leading initiatives with creativity and a strong focus on community building and inclusive growth.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-full h-[70%] z-10">
                <Image src={niharikaImg} alt="Niharika Dhanik" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6d4030] via-[#6d4030]/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Column 2: Rushabh + placeholder */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#f2f2f2] rounded-[1.5rem] p-6 relative overflow-hidden h-[320px] shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative z-20">
                <h4 className="font-serif font-bold text-2xl text-gray-900">Rushabh Mahale</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Organizer</p>
              </div>
              <div className="absolute bottom-0 right-0 w-full h-[80%] z-10">
                <Image src={rushabhImg} alt="Rushabh Mahale" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="bg-[#f2f2f2] rounded-[1.5rem] p-6 relative overflow-hidden h-[320px] shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative z-20">
                <h4 className="font-serif font-bold text-2xl text-gray-900">John Doe</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Creative Director</p>
              </div>
              <div className="absolute bottom-0 right-0 w-full h-[80%] flex items-end justify-center pb-8 z-10">
                <div className="text-7xl opacity-20 group-hover:scale-110 transition-transform duration-500">👤</div>
              </div>
            </div>
          </div>

          {/* Column 3: Abhishek — tall */}
          <div className="flex flex-col">
            <div className="bg-[#f2f2f2] rounded-[1.5rem] p-8 relative overflow-hidden h-full min-h-[664px] shadow-sm hover:shadow-lg group transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] to-[#0f172a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <div className="relative z-20">
                <h4 className="font-serif font-bold text-3xl text-gray-900 group-hover:text-white transition-colors duration-500">Abhishek Sharma</h4>
                <p className="text-sm text-gray-500 group-hover:text-white/70 uppercase tracking-wider mt-2 mb-6 transition-colors duration-500">Core Team</p>
                <p className="text-base text-gray-600 group-hover:text-white/80 leading-relaxed font-light transition-colors duration-500">
                  Driving technical excellence and ensuring flawless execution of developer programs.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-full h-[70%] z-10">
                <Image src={abhishekImg} alt="Abhishek Sharma" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Core Team grid ── */}
      <div className="max-w-7xl mx-auto w-full relative pt-20 border-t border-black/5">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">[ TEAM &amp; VOLUNTEERS ]</span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">[ 04 ]</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">The Core Team</h3>
            <p className="text-gray-400 font-light text-lg">The passionate individuals supporting the community.</p>
          </div>
          <a href="#" className="text-[10px] font-bold tracking-[0.2em] text-orange-600 uppercase hover:text-orange-700 transition-colors">
            [ JOIN US ]
          </a>
        </div>

        {/* 4-column masonry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

          {/* Col 1: Image → Text */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[3/4] bg-[#f0f0f0] rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-sm">
              {teamAndVolunteers[0].image && (
                <Image src={teamAndVolunteers[0].image} alt={teamAndVolunteers[0].name} fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              )}
            </div>
            <PlasmaCard member={teamAndVolunteers[0]} />
          </div>

          {/* Col 2: Text → Image */}
          <div className="flex flex-col gap-4">
            <PlasmaCard member={teamAndVolunteers[1]} />
            <div className="w-full aspect-[3/4] bg-[#f5f5f5] rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-sm">
              {teamAndVolunteers[1].image && (
                <Image src={teamAndVolunteers[1].image} alt={teamAndVolunteers[1].name} fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              )}
            </div>
          </div>

          {/* Col 3: Image → Text */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[3/4] bg-[#eaeaea] rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-sm">
              {teamAndVolunteers[2].image && (
                <Image src={teamAndVolunteers[2].image} alt={teamAndVolunteers[2].name} fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              )}
            </div>
            <PlasmaCard member={teamAndVolunteers[2]} />
          </div>

          {/* Col 4: Text → Image */}
          <div className="flex flex-col gap-4">
            <PlasmaCard member={teamAndVolunteers[3]} />
            <div className="w-full aspect-[3/4] bg-[#f2f2f2] rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-sm flex items-center justify-center">
              {teamAndVolunteers[3].image ? (
                <Image src={teamAndVolunteers[3].image} alt={teamAndVolunteers[3].name} fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="text-5xl opacity-20">👤</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
