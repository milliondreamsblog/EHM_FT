import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Team = ({ title, members, limit }) => {
  useEffect(() => {

    const cards = document.querySelectorAll('.team-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
    });
  }, [members, limit]);

  const membersToDisplay = limit ? members.slice(0, limit) : members;

  return (
    <div id="team" className="relative py-12 flex flex-col items-center justify-center font-sans">
      {/* Title Section  */}
      <div className="text-center mb-12 py-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Sparkles className="text-teal-500 animate-pulse" size={40} />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
            {title}
          </h1>
          <Sparkles className="text-emerald-500 animate-pulse" size={40} />
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
      </div>

      {/* Team Cards */}
      <div className="flex justify-center flex-wrap gap-8 w-full max-w-6xl mx-auto px-4 sm:px-0">
        {membersToDisplay && membersToDisplay.map((member, index) => (
          <div
            key={index}
            className="team-card group relative w-full sm:w-64 h-[280px] overflow-hidden rounded-3xl 
                       bg-gradient-to-br from-teal-500 to-emerald-600
                       shadow-lg transition-all duration-500 ease-out 
                       hover:-translate-y-3 hover:shadow-2xl 
                       opacity-0 animate-fadeInUp"
            style={{ animationFillMode: 'forwards' }}
          >
            {/* Floating Background Blobs */}
            <div className="absolute inset-0 z-0 opacity-100 transition-opacity duration-500 group-hover:opacity-0">
              <div className="absolute top-5 -left-8 h-20 w-20 rounded-full bg-white/10 animate-float-1"></div>
              <div className="absolute top-24 right-5 h-12 w-12 rounded-full bg-white/10 animate-float-2"></div>
              <div className="absolute bottom-5 left-10 h-8 w-8 rounded-full bg-white/10 animate-float-3"></div>
            </div>

            {/* Main Card Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center">
              <img
                className="h-32 w-32 rounded-full border-4 border-white/80 object-cover shadow-lg transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-2"
                src={member.img}
                alt={member.name}
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="circular-overlay absolute inset-0 z-20 flex flex-col items-center justify-center 
                         bg-black/70 backdrop-blur-lg p-6 text-center">
              <div className="text-center opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:delay-200">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <h4 className="tracking-wider text-sm font-semibold text-emerald-300">
                  {member.title}
                </h4>
                <p className="mb-4 text-xs text-gray-300">
                  {member.degree}
                </p>

                {/* Social Links */}
                <div className="flex justify-center">
                  {member.social && (
                    <a
                      href={member.social}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300 text-white transition-transform duration-300 hover:scale-110 hover:bg-emerald-500/20"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button to About Page */}
      <div className="mt-16 text-center">
        {limit && members.length > limit && (
          <Link
            to="/about"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 ease-out hover:from-teal-600 hover:to-emerald-700 hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            <span>Meet The Entire Team</span>
            <svg
              className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        )}
      </div>


      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }

        @keyframes float-1 {
            0%, 100% { transform: translateY(0) rotate(0); }
            50% { transform: translateY(-15px) rotate(12deg); }
        }
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }

        @keyframes float-2 {
            0%, 100% { transform: translateY(0) rotate(0); }
            50% { transform: translateY(-10px) rotate(-8deg); }
        }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite reverse; }
        
        @keyframes float-3 {
            0%, 100% { transform: translateY(0) rotate(0); }
            50% { transform: translateY(12px) rotate(10deg); }
        }
        .animate-float-3 { animation: float-3 9s ease-in-out infinite; }

        .circular-overlay {
          clip-path: circle(0% at 50% 100%);
          transition: clip-path 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .group:hover .circular-overlay {
          clip-path: circle(150% at 50% 100%);
        }
      `}</style>
    </div>
  );
};

export default Team;