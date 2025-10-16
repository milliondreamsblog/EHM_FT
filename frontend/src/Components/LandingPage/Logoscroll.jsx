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
  /* No card or background */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.25s cubic-bezier(.19,1,.22,1), box-shadow 0.2s;
  will-change: transform, box-shadow;
  overflow: visible;
  background: transparent !important;
  box-shadow: none !important;
}
.logo-item:focus-visible { outline: none; }
.logo-item:hover,
.logo-item:focus-visible {
  transform: scale(1.08);
  z-index: 2;
}
.company-logo {
  width: 84%;
  height: 84%;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 10px 32px 0 #0ea5e980, 0 2px 8px #00000030;
  background: transparent !important;
  user-select: none;
  z-index: 1;
  transition: box-shadow 0.28s;
}
.logo-item:hover .company-logo,
.logo-item:focus-visible .company-logo {
  box-shadow: 0 18px 48px #38bdf8b3, 0 4px 14px #0ea5e988;
}
.company-name {
  position: absolute;
  left: 50%;
  bottom: 11%;
  width: 91%;
  min-width: 5px;
  max-width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: normal;
  word-break: break-word;
  text-align: center;
  transform: translate(-50%, 120%);
  opacity: 0;
  font-size: 0.46rem;
  font-weight: 700;
  color: #222;
  /* No background, no card, just text */
  background: none !important;
  box-shadow: none !important;
  border-radius: none !important;
  padding: 0.14em 0.10em;
  letter-spacing: 0.01em;
  user-select: none;
  line-height: 1.12;
  max-height: 2.38em;
  overflow: hidden;
  z-index: 3;
  transition:
    opacity 0.23s cubic-bezier(.19,1,.22,1),
    transform 0.3s cubic-bezier(.19,1,.22,1),
    font-size 0.23s cubic-bezier(.19,1,.22,1);
}
.logo-item:hover .company-name,
.logo-item:focus-visible .company-name {
  opacity: 1;
  transform: translate(-50%, 10%);
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
    <section className="relative py-20 bg-gradient-to-b from-white via-teal-50 to-white overflow-hidden">
      <style>{globalStyles}</style>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/70 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent z-10" />
      <div className="relative container mx-auto text-center z-20 mb-10">
        <SectionHeading>The Leaders We Work With</SectionHeading>
      </div>
      <div
        className="relative w-full flex justify-center items-center z-10"
        style={{ minHeight: `${circleSize + 2 * snakeWaveHeight}px` }}
      >
        <svg
          width={svgWidth}
          height={svgHeight}
          style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", zIndex: 0, pointerEvents: "none" }}
        >
          <path
            d={getSnakePath()}
            stroke="#0ea5e9"
            strokeWidth={snakeStroke}
            fill="none"
            style={{ filter: "drop-shadow(0 6px 12px #0ea5e944)" }}
          />
        </svg>
        <div style={{ width: svgWidth, position: "relative", zIndex: 1 }}>
          <Marquee
            gradient={false}
            speed={36}
            pauseOnHover={true}
            direction="left"
            className="py-4"
          >
            <div className="logo-marquee-track">
              {companies.map((company, idx) => (
                <div
                  key={idx}
                  onClick={(e) => handleCompanyClick(e, company)}
                  className="logo-item"
                  tabIndex={0}
                >
                  <img
                    src={`/Client/${company.name}.png`}
                    alt={company.name}
                    draggable={false}
                    className="company-logo"
                  />
                  <span className="company-name">{company.name}</span>
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
