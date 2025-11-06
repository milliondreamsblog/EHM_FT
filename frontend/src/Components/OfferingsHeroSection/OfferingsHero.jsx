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
  const specialLabelYOffset = -20;
  
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-visible pt-20"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
      }}
    >
      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-orange-500/8 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-yellow-500/8 blur-3xl rounded-full" />
      </div>

      {/* Heading on the left */}
      <div className="absolute left-16 top-1/2 z-30 flex flex-col justify-center transform -translate-y-1/2 max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-white font-bold text-7xl leading-tight mb-6"
            style={{
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
              textShadow: "0 4px 30px rgba(255, 159, 64, 0.4)"
            }}
          >
            Our Services &{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Offerings
            </span>
          </h1>
          
          <p
            className="text-slate-300 text-xl leading-relaxed max-w-lg mb-8"
            style={{
              fontFamily: "'Inter', 'Segoe UI', sans-serif"
            }}
          >
            Comprehensive sustainability solutions designed to empower organizations and drive measurable environmental impact.
          </p>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            >
              Explore Services
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.svg
        width={heroW}
        height={heroH}
        viewBox={`0 0 ${heroW} ${heroH}`}
        className="block relative"
        style={{ minWidth: heroW, minHeight: heroH, overflow: "visible" }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="warmGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#fbbf24" />
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
              stdDeviation="3"
              floodColor="#fb923c"
              floodOpacity="0.7"
            />
          </filter>
        </defs>

        {/* Background Glow */}
        <circle
          cx={cx}
          cy={cy}
          r={circleR + 90}
          fill="url(#warmGradient)"
          opacity="0.15"
          filter="url(#glow)"
        />

        {/* Outer ring */}
        <circle
          cx={cx}
          cy={cy}
          r={circleR}
          stroke="#ffffff15"
          strokeWidth="2"
          fill="none"
        />

        {/* Rotating arc segment */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={circleR - 40}
          stroke="url(#warmGradient)"
          strokeWidth="15"
          fill="none"
          strokeDasharray={`${Math.PI * (circleR - 40) * 0.38} ${
            Math.PI * (circleR - 40) * 1.62
          }`}
          filter="url(#glow)"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          initial={{ rotate: 0 }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
          opacity={0.95}
        />

        {/* Central flower logo */}
        <g transform={`translate(${cx},${cy})`}>
          {/* Outer petals */}
          {[...Array(6)].map((_, i) => {
            const angle = (i / 6) * 2 * Math.PI;
            return (
              <motion.g
                key={i}
                transform={`rotate(${(angle * 180) / Math.PI})`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
              >
                <rect
                  x={-12}
                  y={-50}
                  width={24}
                  height={50}
                  rx={7}
                  fill="url(#warmGradient)"
                  opacity="0.9"
                  filter="url(#glow)"
                />
              </motion.g>
            );
          })}
          
          {/* Center circle design */}
          <motion.circle
            r="28"
            fill="url(#warmGradient)"
            opacity="0.25"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          />
          <motion.circle
            r="20"
            fill="#1a1a2e"
            stroke="url(#warmGradient)"
            strokeWidth="2.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          />
          <motion.circle
            r="12"
            fill="url(#warmGradient)"
            opacity="0.8"
            filter="url(#glow)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          />
        </g>

        {/* Dots and multiline labels */}
        {SECTIONS.map(([line1, line2], i) => {
          const angle = ((i / SECTIONS.length) * 2 * Math.PI) - (Math.PI / 2);
          const dotX = cx + circleR * Math.cos(angle);
          const dotYOffset = i === 0 ? specialLabelYOffset : 0;
          const dotY = cy + circleR * Math.sin(angle) + dotYOffset;

          const labelX = cx + labelR * Math.cos(angle);
          const labelY = cy + labelR * Math.sin(angle) + dotYOffset;
          let anchor = "middle";
          if (Math.cos(angle) > 0.1) anchor = "start";
          else if (Math.cos(angle) < -0.1) anchor = "end";

          return (
            <motion.g
              key={line1 + line2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <circle
                cx={dotX}
                cy={i === 0 ? dotY + 15 : dotY}
                r="10"
                fill="#fb923c"
                filter="url(#glow)"
              />
              <text
                x={labelX}
                y={i === 0 ? labelY - 15 : labelY}
                textAnchor={anchor}
                alignmentBaseline="middle"
                fontFamily="'Inter', 'Segoe UI', sans-serif"
                fontWeight={700}
                fontSize="20"
                fill="#e5e7eb"
                filter="url(#textGlow)"
                pointerEvents="auto"
                style={{ cursor: "pointer" }}
              >
                <tspan x={labelX} dy="0">
                  {line1}
                </tspan>
                <tspan x={labelX} dy="1.2em">
                  {line2}
                </tspan>
              </text>
            </motion.g>
          );
        })}
      </motion.svg>
    </section>
  );
}