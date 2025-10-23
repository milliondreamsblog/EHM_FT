import React from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  ["Sustainability Assessment", "& Reporting"],
  ["Sustainable Environmental", "Management"],
  ["Climate Impact &", "Sustainability Assessment"],
  ["Geophysical", "Investigation"],
  ["Urban Planning", "& Management"],
  ["Training &", "Capacity Building"]
];

const heroW = 740;
const heroH = 650;
const cx = heroW * 0.78;
const cy = heroH / 2;
const circleR = 170;
const labelR = 195;

export default function OfferingsHero() {
  // Additional vertical offset for first label to move it up
  const specialLabelYOffset = -20;
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-visible"
      style={{
        background: "linear-gradient(135deg, #004d40 0%, #00796b 60%, #004d40 100%)"
      }}
    >
      {/* Heading on the left with tagline */}
      <div className="absolute left-8 top-1/3 z-30 flex flex-col justify-center transform -translate-y-1/2 max-w-xs">
        <h1
          className="text-[#b1dedc] font-extrabold text-5xl leading-tight tracking-tight drop-shadow-lg mb-2"
          style={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textShadow:
              "0 3px 10px rgba(0, 0, 0, 0.35), 0 0 15px rgba(255, 193, 48, 0.9)",
          }}
        >
          Our Services & Offerings
        </h1>
        <p
          className="text-[#d0e8e2] font-semibold text-lg leading-snug max-w-xs drop-shadow-md"
          style={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textShadow: "0 1px 5px rgba(0,0,0,0.25)"
          }}
        >
          Delivering innovative solutions tailored for your success.
        </p>
      </div>

      <svg
        width={heroW}
        height={heroH}
        viewBox={`0 0 ${heroW} ${heroH}`}
        className="block relative"
        style={{ minWidth: heroW, minHeight: heroH, overflow: "visible" }}
      >
        <defs>
          <linearGradient id="orangeloop" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffb347" />
            <stop offset="60%" stopColor="#ff7e29" />
            <stop offset="100%" stopColor="#ff4e2b" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="14" result="blurred" />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="textGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="2"
              floodColor="#ffc87c"
              floodOpacity="0.8"
            />
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="5"
              floodColor="#ff9e3b"
              floodOpacity="0.4"
            />
          </filter>
        </defs>

        {/* Background Glow */}
        <circle
          cx={cx}
          cy={cy}
          r={circleR + 90}
          fill="url(#orangeloop)"
          opacity="0.15"
          filter="url(#glow)"
        />

        {/* Outer ring */}
        <circle
          cx={cx}
          cy={cy}
          r={circleR}
          stroke="#b1dedc55"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Rotating arc segment */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={circleR - 40}
          stroke="url(#orangeloop)"
          strokeWidth="15"
          fill="none"
          strokeDasharray={`${Math.PI * (circleR - 40) * 0.37} ${
            Math.PI * (circleR - 40) * 1.63
          }`}
          filter="url(#glow)"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          initial={{ rotate: 0 }}
          transition={{ repeat: Infinity, duration: 21, ease: "linear" }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
          opacity={0.92}
        />

        {/* Central flower logo */}
        <g transform={`translate(${cx},${cy})`}>
          {[...Array(6)].map((_, i) => {
            const angle = (i / 6) * 2 * Math.PI;
            return (
              <g key={i} transform={`rotate(${(angle * 180) / Math.PI})`}>
                <rect
                  x={-12}
                  y={-48}
                  width={24}
                  height={48}
                  rx={7}
                  fill="url(#orangeloop)"
                  opacity="0.93"
                  filter="url(#glow)"
                />
              </g>
            );
          })}
        </g>

        {/* Dots and multiline labels on circumference using tspans */}
        {SECTIONS.map(([line1, line2], i) => {
          const angle = ((i / SECTIONS.length) * 2 * Math.PI) - (Math.PI / 2);
          const dotX = cx + circleR * Math.cos(angle);
          // Apply vertical offset on first label
          const dotYOffset = i === 0 ? specialLabelYOffset : 0;
          const dotY = cy + circleR * Math.sin(angle) + dotYOffset;

          const labelX = cx + labelR * Math.cos(angle);
          const labelY = cy + labelR * Math.sin(angle) + dotYOffset;
          let anchor = "middle";
          if (Math.cos(angle) > 0.1) anchor = "start";
          else if (Math.cos(angle) < -0.1) anchor = "end";

          return (
            <g key={line1 + line2}>
              <circle cx={dotX} cy={i === 0 ? dotY + 15 : dotY} r="10" fill="#ff7e29" filter="url(#glow)" />
              <text
                x={labelX}
                y={i === 0 ? labelY - 15 : labelY}  // Move only the first label up by 15px
                textAnchor={anchor}
                alignmentBaseline="middle"
                fontFamily="inherit"
                fontWeight={700}
                fontSize="20"
                fill="#b1dedc"
                filter="url(#textGlow)"
                pointerEvents="auto"
              >
                <tspan x={labelX} dy="0">
                  {line1}
                </tspan>
                <tspan x={labelX} dy="1.2em">
                  {line2}
                </tspan>
              </text>
            </g>
          );
        })}
      </svg>
    </section>
  );
}
