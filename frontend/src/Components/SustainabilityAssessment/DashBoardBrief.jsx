import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../../Common/SectionHeading";

// EHM Brand Colors (from colors.pdf + brand kit)
// Primary Green  : #4B7635
// Primary Blue   : #3B66BC
// Brand BG       : #f0ffff (Azure)
// Teal accent    : #7dbea8 / teal-100 #ccfbf1 / teal-200 #99f6e4

const TABS = [
  {
    id: "energy",
    label: "Energy Management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    image: "/dashboard/energy.webp",
    color: "#4B7635",          // EHM Green
    accent: "rgba(75,118,53,0.10)",
    tag: "Environment",
    title: "Energy Consumption Trend",
    description:
      "Track monthly electricity vs. solar generation across campus. Monitor your energy mix — renewable vs. non-renewable — with real-time breakdowns and historical trends to drive efficiency.",
    stats: [
      { label: "Total Solar Generated", value: "935k kWh" },
      { label: "Avg Non-Renewable", value: "224k kWh" },
      { label: "Avg Renewable", value: "85k kWh" },
    ],
  },
  {
    id: "water",
    label: "Water Management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    image: "/dashboard/water.webp",
    color: "#3B66BC",          // EHM Blue
    accent: "rgba(59,102,188,0.10)",
    tag: "Environment",
    title: "Campus Water Overview",
    description:
      "Comprehensive tracking of water consumption, recirculation and conservation initiatives. Monitor total usage, intensity per sq. metre, and per capita figures with quarterly and yearly trend views.",
    stats: [
      { label: "Total Water Consumed", value: "511M L" },
      { label: "Water Usage Intensity", value: "472.91 L/m²" },
      { label: "Per Capita Consumption", value: "93.33 L/day" },
    ],
  },
  {
    id: "governance",
    label: "Governance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    image: "/dashboard/governance.webp",
    color: "#2d6a4f",          // Deep forest green (complementary)
    accent: "rgba(45,106,79,0.10)",
    tag: "Governance",
    title: "Digital Footprint & Governance",
    description:
      "Measure institutional governance impact through digital document processing, new programmes launched, and cross-sectoral dialogue events — spanning degrees, certifications, and marksheets.",
    stats: [
      { label: "Degrees Processed", value: "1,84,924" },
      { label: "Certifications", value: "16,278" },
      { label: "Cross-Sectoral Events", value: "119" },
    ],
  },
  {
    id: "ghg",
    label: "GHG Emissions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    image: "/dashboard/ghg.webp",
    color: "#1d4e89",          // Navy blue (on-brand)
    accent: "rgba(29,78,137,0.10)",
    tag: "Environment",
    title: "GHG Emissions & CO₂ Management",
    description:
      "Scope-wise emissions performance, reduction targets and national alignment for net-zero pathways. View year-on-year emission trends, carbon intensity per person and per sq. metre.",
    stats: [
      { label: "Total tCO₂e (2024-25)", value: "1,346.41" },
      { label: "tCO₂e / Person", value: "0.09" },
      { label: "tCO₂e / Sq.m", value: "0.0048" },
    ],
  },
];

const EhmBrief = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleTabChange = (idx) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };

  const tab = TABS[active];

  return (
    <section className="relative font-sans overflow-hidden py-8">

      {/* ── Background — mirrors homepage EhmBrief ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-100 to-white" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-teal-200/70 to-white/95" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90" />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100/60 via-teal-200/40 to-teal-100/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/50 via-teal-150/30 to-teal-50/50" />
      {/* Top & bottom white fades */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

      {/* ── Heading ── */}
      <div className="relative text-center w-full mx-auto pt-10 pb-6 sm:pt-14 sm:pb-8 z-20">
        <SectionHeading>See The Impact in Real Time</SectionHeading>
        <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto px-4">
          EHM's Sustainability Dashboard transforms ESG and operational data into live visual insights —
          from carbon emissions and energy use to SDG alignment and stakeholder engagement.
        </p>
      </div>

      {/* ── Tab Bar ── */}
      <div className="relative z-20 w-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 pb-4">
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => handleTabChange(i)}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-500 outline-none focus:outline-none overflow-hidden"
              style={{
                color: active === i ? "#fff" : "#6b7280",
                border: active === i ? `2px solid ${TABS[i].color}` : "2px solid #e5e7eb",
                transform: active === i ? "scale(1.05)" : "scale(1)",
                backdropFilter: "blur(8px)",
                background: active === i ? "transparent" : "rgba(255,255,255,0.7)",
              }}
            >
              {active === i && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 z-0"
                  style={{ background: TABS[i].color }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10" style={{ color: active === i ? "#fff" : TABS[i].color }}>{t.icon}</span>
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>

        {/* ── Main Showcase ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 xl:gap-10 items-center">

          {/* Screenshot panel — 3/5 */}
          <motion.div
            layout
            transition={{
              layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
            }}
            className="lg:col-span-3 relative overflow-hidden rounded-2xl shadow-2xl group"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={tab.id}
                className="w-full"
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                }}
                style={{ willChange: "transform, opacity" }}
              >
                <img
                  src={tab.image}
                  alt={tab.title}
                  loading="lazy"
                  className="w-full h-auto block shadow-sm"
                />
              </motion.div>
            </AnimatePresence>

            {/* Inner glow tint */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl z-10"
              style={{ boxShadow: `inset 0 0 40px ${tab.color}10` }}
            />
          </motion.div>

          {/* Info panel — 2/5 */}
          <div className="lg:col-span-2 relative">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={tab.id + "_info"}
                className="flex flex-col justify-between"
                initial={{ opacity: 0, x: direction * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -30 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Tag + heading + description */}
                <div>
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                    style={{
                      background: tab.accent,
                      color: tab.color,
                      border: `1px solid ${tab.color}30`,
                    }}
                  >
                    {tab.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                    {tab.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    {tab.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-1 gap-3">
                  {tab.stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      className="flex items-center justify-between rounded-xl px-4 py-3"
                      style={{
                        background: "rgba(255,255,255,0.7)",
                        border: `1px solid ${tab.color}25`,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <span className="text-xs text-gray-500 font-medium">{s.label}</span>
                      <span className="text-sm font-bold" style={{ color: tab.color }}>{s.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / dots / next — Moved outside AnimatePresence */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={() => handleTabChange((active - 1 + TABS.length) % TABS.length)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white"
                style={{
                  border: "1.5px solid #d1d5db",
                  color: "#9ca3af",
                  background: "rgba(255,255,255,0.6)",
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="flex gap-1.5 items-center">
                {TABS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleTabChange(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? "24px" : "8px",
                      height: "8px",
                      background: i === active ? tab.color : "#d1d5db",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => handleTabChange((active + 1) % TABS.length)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white"
                style={{
                  border: "1.5px solid #d1d5db",
                  color: "#9ca3af",
                  background: "rgba(255,255,255,0.6)",
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EhmBrief;
