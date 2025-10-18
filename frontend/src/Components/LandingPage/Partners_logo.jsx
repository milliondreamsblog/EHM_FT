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
    <section className="relative w-full py-16 overflow-hidden">
      {/* Layered gradients in background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-100 to-white pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-teal-200/70 to-white/95 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100/60 via-teal-200/40 to-teal-100/60 pointer-events-none" />

      {/* Top & bottom fade overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/95 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <ScrollRevealElements staggerAmount={0.1} className="relative z-10">
          <SectionHeading>Partners</SectionHeading>
        </ScrollRevealElements>
      </div>

      <div className="w-full mx-0 px-0 relative z-20 overflow-hidden">
        <div className="relative">
          <style
            dangerouslySetInnerHTML={{
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

                .partner-card {
                  width: 12rem;
                  height: 12rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding: 0;
                  background: none !important;
                  box-shadow: none !important;
                  border: none !important;
                  border-radius: 0;
                  transition: transform 300ms;
                  cursor: pointer;
                }

                .partner-card:hover {
                  transform: scale(1.05) translateY(-5px);
                }

                .partner-logo-container {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: none !important;
                  border-radius: 0;
                  overflow: visible;
                  box-shadow: none !important;
                }

                .partner-logo {
                  width: 70%;
                  height: 70%;
                  object-fit: contain;
                  background: transparent !important;
                  border-radius: 0;
                  filter: drop-shadow(0 4px 24px rgba(44, 62, 80, 0.22));
                  transition: filter 0.4s;
                  padding: 0;
                }

                .partner-logo.technopark-logo {
                  width: 100%;
                  height: 100%;
                }

                .group:hover .partner-logo {
                  filter: drop-shadow(0 8px 32px rgba(44, 62, 80, 0.33));
                }

                .partner-name {
                  display: none;
                }

                .marquee-wrap-partners {
                  display: flex;
                  width: 200%;
                  animation: marquee 20s linear infinite;
                  will-change: transform;
                  transform: translateZ(0);
                  backface-visibility: hidden;
                  overflow: hidden;
                }

                html, body {
                  overflow-x: hidden;
                  overflow-y: auto;
                  height: 100%;
                  background: white;
                }

                /* Remove faint horizontal line issue */
                .marquee-wrap-partners,
                .marquee-track-partners,
                .partner-card,
                .partner-logo-container {
                  background: transparent !important;
                  border: none !important;
                  outline: none !important;
                }

                .marquee-wrap-partners:hover { 
                  animation-play-state: paused; 
                }

                @media (min-width: 640px) {
                  .partner-card { width: 14rem; height: 14rem; }
                }

                @media (min-width: 1024px) {
                  .partner-card { width: 16rem; height: 16rem; }
                }
              `,
            }}
          />

          <div className="marquee-wrap-partners">
            <div className="marquee-track-partners px-6 py-6">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  onClick={(e) => handlePartnerClick(e, partner)}
                  className="partner-card relative group flex-shrink-0 flex items-center justify-center"
                >
                  <div className="partner-logo-container">
                    <img
                      src={`/Partners/${partner}.png`}
                      alt={partner}
                      draggable={false}
                      className={`partner-logo ${
                        partner === 'Technopark IIT Kanpur' ? 'technopark-logo' : ''
                      }`}
                      style={{ background: 'transparent' }}
                    />
                    <div className="partner-name">{partner}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="marquee-track-partners px-6 py-6">
              {partners.map((partner, idx) => (
                <div
                  key={idx + 100}
                  onClick={(e) => handlePartnerClick(e, partner)}
                  className="partner-card relative group flex-shrink-0 flex items-center justify-center"
                >
                  <div className="partner-logo-container">
                    <img
                      src={`/Partners/${partner}.png`}
                      alt={partner}
                      draggable={false}
                      className={`partner-logo ${
                        partner === 'Technopark IIT Kanpur' ? 'technopark-logo' : ''
                      }`}
                      style={{ background: 'transparent' }}
                    />
                    <div className="partner-name">{partner}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersLogo;
