import React from 'react';
import { companies } from "../../Data/Data";
import ScrollRevealElements from '../Animations/ScrollRevealElements';
import SectionHeading from '../../Common/SectionHeading';

/**
 * Full-bleed marquee carousel implemented with duplicated track CSS animation.
 * This produces a seamless, gap-free infinite scroll. Hover to pause.
 */
const Logo = () => {
  // animation duration (seconds) - adjust to control speed
  const duration = 20;

  return (
    <section className="relative w-full overflow-hidden bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollRevealElements staggerAmount={0.1} className="relative z-10">
          <SectionHeading>The Leaders We Work With</SectionHeading>
        </ScrollRevealElements>
      </div>

      {/* Marquee (full-bleed) */}
      <div className="w-full mx-0 px-0">
        <div className="relative overflow-hidden">
          {/* Inline style for keyframes duration */}
          <style>{`
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
              animation: marquee ${duration}s linear infinite;
            }
            .marquee-wrap:hover { animation-play-state: paused; }
          `}</style>

          <div className="marquee-wrap">
            {/* First copy */}
            <div className="marquee-track px-6 py-6">
              {companies.map((company, idx) => (
                <a
                  key={`a-${idx}`}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
                >
                  <div className="flex items-center justify-center h-24 md:h-32 lg:h-40 w-auto">
                    <img src={`/Client/${company.name}.png`} alt={company.name} className="h-20 md:h-32 lg:h-40 w-auto object-contain" draggable={false} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-2 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium text-center">{company.name}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Second copy (duplicate for seamless loop) */}
            <div className="marquee-track px-6 py-6">
              {companies.map((company, idx) => (
                <a
                  key={`b-${idx}`}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
                >
                  <div className="flex items-center justify-center h-24 md:h-32 lg:h-40 w-auto">
                    <img src={`/Client/${company.name}.png`} alt={company.name} className="h-20 md:h-32 lg:h-40 w-auto object-contain" draggable={false} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-2 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium text-center">{company.name}</p>
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

export default Logo;