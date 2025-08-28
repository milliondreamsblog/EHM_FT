import React, { useEffect } from 'react';
import bgShape from '/bg-shape.png';
import { Sparkles } from 'lucide-react';

const Team = ({ title, members }) => {

  useEffect(() => {
    const cards = document.querySelectorAll('.team-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
    });
  }, [members]);

  return (
    <div id="team" className="relative py-12 flex flex-col items-center justify-center font-sans">
      {/* Title Section */}
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


      <div className="flex justify-center flex-wrap gap-8 w-full max-w-6xl mx-auto px-4 sm:px-0">
        {members && members.map((member, index) => (

          <div key={index} className="w-full sm:w-64">
            {/* Card */}
            <div
              className="team-card group relative bg-white rounded-3xl p-4 w-full h-full flex flex-col shadow-lg hover:shadow-2xl hover:shadow-green-200/50 text-center overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 opacity-0 animate-fadeInUp"
              style={{ animationFillMode: 'forwards' }}
            >
              <div
                className="absolute -top-5 -left-5 w-full h-full rounded-3xl opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-6 pointer-events-none"
                style={{ backgroundImage: `url(${bgShape})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '120%', height: '120%' }}
              ></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col flex-grow">
                {/* Image */}
                <div className="mb-3">
                  <img
                    className="w-28 h-28 object-cover rounded-full border-4 border-green-500 mx-auto shadow-md transition-transform duration-300 group-hover:scale-110"
                    src={member.img}
                    alt={member.name}
                  />
                </div>
                {/* Name */}
                <h3 className="text-lg font-bold text-green-800 mb-1">
                  {member.name}
                </h3>
                {/* Title */}
                <h4 className="text-sm text-gray-700 leading-relaxed flex-grow">
                  {member.title}<br />
                  {member.degree && <span className="text-xs text-gray-600">({member.degree})</span>}
                </h4>
                {/* Social Links */}
                <div className="mt-4 flex justify-center gap-4 text-xl text-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.social && (
                    <div className="cursor-pointer hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform">
                      <a href={member.social} target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }
      `}</style>
    </div>
  );
};

export default Team;