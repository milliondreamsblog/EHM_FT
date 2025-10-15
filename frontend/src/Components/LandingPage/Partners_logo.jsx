import React from 'react';
import { partners } from "../../Data/Data";
import ScrollRevealElements from '../Animations/ScrollRevealElements';
import SectionHeading from '../../Common/SectionHeading';

const PartnersLogo = () => {
  const handlePartnerClick = (e, partner) => {
    e.preventDefault();
    window.location.hash = '/partners/' + partner;
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
          <SectionHeading>Partners</SectionHeading>
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
              .marquee-track-partners {
                display: flex;
                gap: 1.5rem;
                width: max-content;
                align-items: center;
              }
              .partner-logo-container {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                border-radius: 0.5rem;
              }
              .partner-logo { 
                width: 100%;
                height: 100%;
                transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
                object-fit: cover;
                filter: brightness(1);
                padding: 1rem;
                object-position: center;
              }
              .group:hover .partner-logo { 
                transform: translateY(-0.25rem) scale(0.98);
                filter: brightness(0.95);
              }
              .partner-name {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 33.333%;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                padding-bottom: 0.75rem;
                background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 100%);
                color: white;
                font-size: 0.875rem;
                text-align: center;
                opacity: 0;
                transform: translateY(1rem);
                transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
                pointer-events: none;
                font-weight: 500;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
              }
              .group:hover .partner-name {
                transform: translateY(0);
                opacity: 1;
              }
              .partner-technopark { 
                object-fit: contain;
                padding: 1.5rem;
              }
              .marquee-wrap-partners {
                display: flex;
                width: 200%;
                animation: marquee 20s linear infinite;
              }
              .marquee-wrap-partners:hover { 
                animation-play-state: paused; 
              }
              .partner-card {
                width: 12rem;
                height: 12rem;
              }
              @media (min-width: 640px) {
                .partner-card {
                  width: 14rem;
                  height: 14rem;
                }
              }
              @media (min-width: 768px) {
                .partner-card {
                  width: 16rem;
                  height: 16rem;
                }
              }
            `
          }} />

          <div className="marquee-wrap-partners">
            <div className="marquee-track-partners px-6 py-6">
              {partners.map(function(partner, idx) {
                return (
                  <div
                    key={idx}
                    onClick={function(e) { handlePartnerClick(e, partner); }}
                    className="partner-card relative group flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <div className="partner-logo-container">
                        <img
                          src={'/Partners/' + partner + '.png'}
                          alt={partner}
                          draggable={false}
                          className={partner === 'Technopark IIT Kanpur' ? 'partner-logo partner-technopark' : 'partner-logo'}
                        />
                        <div className="partner-name">{partner}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="marquee-track-partners px-6 py-6">
              {partners.map(function(partner, idx) {
                return (
                  <div
                    key={idx + 100}
                    onClick={function(e) { handlePartnerClick(e, partner); }}
                    className="partner-card relative group flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 cursor-pointer"
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <div className="partner-logo-container">
                        <img
                          src={'/Partners/' + partner + '.png'}
                          alt={partner}
                          draggable={false}
                          className={partner === 'Technopark IIT Kanpur' ? 'partner-logo partner-technopark' : 'partner-logo'}
                        />
                        <div className="partner-name">{partner}</div>
                      </div>
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

export default PartnersLogo;