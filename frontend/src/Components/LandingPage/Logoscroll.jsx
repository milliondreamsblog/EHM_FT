import Marquee from "react-fast-marquee";
import { companies } from "../../Data/Data";
import SectionHeading from "../../Common/SectionHeading";

const baseCircleSize = 108;
const circleSize = Math.round(baseCircleSize * 1.2); // 130px
const circleSpacing = 140;
const snakeWaveHeight = 30;
const snakeStroke = 7;

const globalStyles = `
.logo-marquee-track {
  display: flex;
  align-items: center;
  gap: ${circleSpacing - circleSize}px;
  height: ${circleSize}px;
}
.logo-item {
  flex: 0 0 auto;
  width: ${circleSize}px;
  height: ${circleSize}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
  will-change: transform, box-shadow;
  overflow: visible;
  background: transparent !important;
  box-shadow: none !important;
  cursor: pointer;
}
.logo-item:focus-visible { 
  outline: 2px solid #0ea5e9;
  outline-offset: 2px;
  border-radius: 50%;
}
.logo-item:hover {
  transform: scale(1.12);
  z-index: 2;
}
.company-logo {
  width: 84%;
  height: 84%;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 8px 24px 0 #0ea5e960, 0 2px 6px #00000020;
  background: transparent !important;
  user-select: none;
  z-index: 1;
  transition: box-shadow 0.3s ease, filter 0.3s ease;
}
.logo-item:hover .company-logo,
.logo-item:focus-visible .company-logo {
  box-shadow: 0 16px 40px #0ea5e980, 0 4px 12px #0ea5e940;
  filter: brightness(1.05);
}
`;


const LogoScroll = () => {
  const handleCompanyClick = (e, company) => {
    e.preventDefault();
    window.open(company.url, "_blank", "noopener,noreferrer");
  };

  const svgWidth = companies.length * circleSpacing + circleSpacing;
  const svgHeight = circleSize + 2 * snakeWaveHeight;

  const getSnakePath = () => {
    let path = `M ${circleSpacing / 2},${svgHeight / 2}`;
    for (let i = 0; i < companies.length; i++) {
      const x1 = circleSpacing / 2 + i * circleSpacing;
      const x2 = x1 + circleSpacing / 2;
      const y1 =
        i % 2 === 0
          ? svgHeight / 2 - snakeWaveHeight
          : svgHeight / 2 + snakeWaveHeight;
      path += ` Q ${x1},${y1} ${x2},${svgHeight / 2}`;
    }
    return path;
  };

  return (
    <section className="relative -mt-8 pb-0 bg-gradient-to-b from-white via-teal-50 to-white overflow-hidden">
      <style>{globalStyles}</style>
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      <div className="relative text-center z-20 pt-0 pb-4">
        <SectionHeading>The Leaders We Work With</SectionHeading>
      </div>
      <div
        className="relative w-full flex items-center z-10"
        style={{ minHeight: `${circleSize + 2 * snakeWaveHeight}px` }}
      >
        {/* SVG blue line - stroke="#0ea5e9" is commented out */}
        <svg
          width={svgWidth}
          height={svgHeight}
          style={{ position: "absolute", left: "0", transform: "none", zIndex: 0, pointerEvents: "none" }}
        >
          <path
            d={getSnakePath()}
            strokeWidth={snakeStroke}
            fill="none"
            style={{ filter: "drop-shadow(0 4px 8px #0ea5e930)" }}
          />
        </svg>
        <div style={{ width: "100%", position: "relative", zIndex: 1 }}>
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            direction="left"
            className="py-6"
          >
            <div className="logo-marquee-track">
              {companies.map((company, idx) => (
                <div
                  key={idx}
                  onClick={(e) => handleCompanyClick(e, company)}
                  className="logo-item"
                  tabIndex={0}
                  role="button"
                  aria-label={`Visit ${company.name} website`}
                >
                  <img loading="lazy" src={`/Client/${company.name}.webp`}
                    alt={company.name}
                    draggable={false}
                    className="company-logo"
                  />
                </div>
              ))}
            </div>
            <div className="logo-marquee-track">
              {companies.map((company, idx) => (
                <div
                  key={`duplicate-${idx}`}
                  onClick={(e) => handleCompanyClick(e, company)}
                  className="logo-item"
                  tabIndex={0}
                  role="button"
                  aria-label={`Visit ${company.name} website`}
                >
                  <img loading="lazy" src={`/Client/${company.name}.webp`}
                    alt={company.name}
                    draggable={false}
                    className="company-logo"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default LogoScroll;
