import React from "react";
import { motion } from "framer-motion";
import ScrollRevealElements from "../../Animations/ScrollRevealElements";

const DNTSFlowchart = ({ flowStages, headingStyle }) => {
  return (
    <ScrollRevealElements className="mb-20" staggerAmount={0.3}>
      <motion.h3 className={`${headingStyle} text-center`}>
        How DNTS Works
      </motion.h3>

      {/* Desktop — horizontal flow */}
      <motion.div className="hidden md:flex items-stretch justify-center gap-0 max-w-5xl mx-auto">
        {flowStages.map((stage, i) => (
          <React.Fragment key={stage.id}>
            {/* Card */}
            <motion.div
              className={`relative flex flex-col rounded-2xl overflow-hidden shadow-lg ${stage.bg} flex-1 min-w-0 group hover:-translate-y-2 transition-transform duration-300`}
            >
              {/* Image top */}
              <div className="relative h-36 overflow-hidden">
                <img
                  loading="lazy"
                  src={stage.image}
                  alt={stage.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => (e.target.style.display = "none")}
                />
                {/* step number badge */}
                <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-white/90 shadow flex items-center justify-center">
                  <span className="text-xs font-black text-slate-700">{i + 1}</span>
                </div>
              </div>

              {/* Icon + text bottom */}
              <div className="p-4 flex flex-col items-center text-center gap-2">
                <div className={`w-10 h-10 rounded-full ${stage.iconBg} flex items-center justify-center`}>
                  <stage.IconComponent className={`w-5 h-5 ${stage.iconColor}`} strokeWidth={2} />
                </div>
                <p className="font-bold text-sm text-slate-700 leading-tight">{stage.label}</p>
                <p className="text-xs text-slate-500 leading-snug">{stage.sublabel}</p>
              </div>
            </motion.div>

            {/* Arrow connector */}
            {i < flowStages.length - 1 && (
              <div className="flex items-center flex-shrink-0 px-1">
                <svg className="w-7 h-7 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Mobile — vertical flow */}
      <div className="md:hidden max-w-sm mx-auto space-y-3">
        {flowStages.map((stage, i) => (
          <React.Fragment key={stage.id}>
            <motion.div
              className={`flex items-center gap-4 rounded-2xl overflow-hidden shadow-md ${stage.bg} p-3`}
            >
              {/* Small image */}
              <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  loading="lazy"
                  src={stage.image}
                  alt={stage.label}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.style.display = "none")}
                />
                <div className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white/90 shadow flex items-center justify-center">
                  <span className="text-[10px] font-black text-slate-700">{i + 1}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full ${stage.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <stage.IconComponent className={`w-4 h-4 ${stage.iconColor}`} strokeWidth={2} />
                  </div>
                  <p className="font-bold text-sm text-slate-700">{stage.label}</p>
                </div>
                <p className="text-xs text-slate-500 leading-snug">{stage.sublabel}</p>
              </div>
            </motion.div>

            {i < flowStages.length - 1 && (
              <div className="flex justify-center">
                <svg className="w-5 h-5 text-[#10b981] rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </ScrollRevealElements>
  );
};

export default DNTSFlowchart;
