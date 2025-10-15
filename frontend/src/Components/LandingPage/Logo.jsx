import React from 'react';
import { companies } from "../../Data/Data";
import ScrollRevealElements from '../Animations/ScrollRevealElements';
import SectionHeading from '../../Common/SectionHeading';

const Logo = () => {
  const handleCompanyClick = (e, company) => {
    e.preventDefault();
    window.location.href = company.url;
  };

  return (
    <section className="relative w-full overflow-hidden py-16">
      {/* Multiple layered gradients for deep fading effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-100 to-white" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-teal-200/70 to-white/95" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90" />
      
      {/* Diagonal gradient layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100/60 via-teal-200/40 to-teal-100/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/50 via-teal-150/30 to-teal-50/50" />
      
      {/* Strong top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
      
      {/* Strong bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <ScrollRevealElements staggerAmount={0.1} className="relative z-10">
          <SectionHeading>The Leaders We Work With</SectionHeading>
        </ScrollRevealElements>
      </div>

      <div className="w-full mx-0 px-0 relative z-20">
        <div className="relative overflow-hidden">
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track {
                display: flex;
                gap: 1.5rem;
                width: max-content;
                align-items: center;
              }
              .marquee-wrap {
                display: flex;
                width: 200%;
                animation: marquee 20s linear infinite;
              }
              .marquee-wrap:hover { 
                animation-play-state: paused; 
              }
            `
          }} />

          <div className="marquee-wrap">
            <div className="marquee-track px-6 py-6">
              {companies.map(function(company, idx) {
                return (
                  <div
                    key={idx}
                    onClick={function(e) { handleCompanyClick(e, company); }}
                    className="group flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center justify-center h-24 md:h-32 lg:h-40 w-auto">
                      <img src={'/Client/' + company.name + '.png'} alt={company.name} className="h-20 md:h-32 lg:h-40 w-auto object-contain" draggable={false} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-2 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium text-center">{company.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="marquee-track px-6 py-6">
              {companies.map(function(company, idx) {
                return (
                  <div
                    key={idx + 100}
                    onClick={function(e) { handleCompanyClick(e, company); }}
                    className="group flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center justify-center h-24 md:h-32 lg:h-40 w-auto">
                      <img src={'/Client/' + company.name + '.png'} alt={company.name} className="h-20 md:h-32 lg:h-40 w-auto object-contain" draggable={false} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-2 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium text-center">{company.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logo;