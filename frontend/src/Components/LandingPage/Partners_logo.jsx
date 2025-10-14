import React from 'react';
import { partners } from "../../Data/Data";
import ScrollRevealElements from '../Animations/ScrollRevealElements';
import SectionHeading from '../../Common/SectionHeading';

/**
 * Partners section converted to a full-bleed duplicated-track marquee
 * to match the 'The Leaders We Work With' section.
 */
const PartnersLogo = () => {
  const duration = 20; // match leaders marquee speed

  return (
    <section className="relative w-full overflow-hidden bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollRevealElements staggerAmount={0.1} className="relative z-10">
          <SectionHeading>Partners</SectionHeading>
        </ScrollRevealElements>
      </div>

      <div className="w-full mx-0 px-0">
        <div className="relative overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track-partners {
              display: flex;
              gap: 1.5rem; /* ensures consistent breathing space */
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
              height: 33.333%; /* One-third of container height */
              display: flex;
              align-items: flex-end;
              justify-content: center;
              padding-bottom: 0.75rem;
              background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.8) 0%,
                rgba(0, 0, 0, 0.4) 70%,
                rgba(0, 0, 0, 0) 100%
              );
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
              animation: marquee ${duration}s linear infinite;
            }
            .marquee-wrap-partners:hover { animation-play-state: paused; }
          `}</style>

          <div className="marquee-wrap-partners">
            <div className="marquee-track-partners px-6 py-6">
              {partners.map((partner, idx) => (
                  <a
                    key={`p-a-${idx}`}
                    href={`#/partners/${partner}`}
                    className="relative group flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 w-[12rem] h-[12rem] sm:w-[14rem] sm:h-[14rem] md:w-[16rem] md:h-[16rem]"
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <div className="partner-logo-container">
                        <img
                          src={`/Partners/${partner}.png`}
                          alt={partner}
                          draggable={false}
                          className={`partner-logo ${partner === 'Technopark IIT Kanpur' ? 'partner-technopark' : ''}`}
                        />
                        <div className="partner-name">{partner}</div>
                      </div>
                    </div>
                  </a>
                ))}
            </div>

            <div className="marquee-track-partners px-6 py-6">
              {partners.map((partner, idx) => (
                  <a
                    key={`p-b-${idx}`}
                    href={`#/partners/${partner}`}
                    className="relative group flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 w-[12rem] h-[12rem] sm:w-[14rem] sm:h-[14rem] md:w-[16rem] md:h-[16rem]"
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <div className="partner-logo-container">
                        <img
                          src={`/Partners/${partner}.png`}
                          alt={partner}
                          draggable={false}
                          className={`partner-logo ${partner === 'Technopark IIT Kanpur' ? 'partner-technopark' : ''}`}
                        />
                        <div className="partner-name">{partner}</div>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersLogo;