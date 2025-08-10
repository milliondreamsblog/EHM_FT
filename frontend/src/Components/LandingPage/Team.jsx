import React, { useEffect } from 'react';


import bgShape from '/bg-shape.png';
import { Sparkles } from 'lucide-react';


const Team = ({title , members}) => {

  useEffect(() => {
    const cards = document.querySelectorAll('.team-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <div className="relative min-h-screen py-12  flex flex-col items-center justify-center font-sans">
  
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

    
      <div className="flex justify-center flex-wrap gap-10 w-full max-w-6xl px-5">
        {members.map((member, index) => (
          <div
            key={index}
            className="team-card group relative bg-white rounded-3xl p-6 w-80 shadow-lg hover:shadow-2xl hover:shadow-green-200/50 text-center overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-105 opacity-0 animate-fadeInUp"
            style={{ animationFillMode: 'forwards' }}
          >
         
            <div 
              className="absolute -top-5 -left-5 w-full h-full rounded-3xl opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-6 pointer-events-none"
              style={{
                backgroundImage: `url(${bgShape})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '120%',
                height: '120%'
              }}
            ></div>

          
            <div className="relative z-10 mb-4">
              <img
                className="w-40 h-40 object-cover rounded-full border-4 border-green-500 mx-auto shadow-md transition-transform duration-300 group-hover:scale-110"
                src={member.img}
                alt={member.name}
              />
            </div>

           
            <h3 className="relative z-10 text-xl font-bold text-green-800 mb-2">
              {member.name}
            </h3>

          
            <h4 className="relative z-10 text-base text-gray-700 mb-4 leading-relaxed">
              {member.title}<br />
              <span className="text-sm text-gray-600">({member.degree})</span>
            </h4>

          
            <div className="relative z-10 flex justify-center gap-4 text-xl text-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="cursor-pointer hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="cursor-pointer hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform">
              <a hre="" alt="">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.030-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                </svg>
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Team;