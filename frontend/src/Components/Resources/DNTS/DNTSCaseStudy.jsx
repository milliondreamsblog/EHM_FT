import React from "react";
import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
import ScrollRevealElements from "../../Animations/ScrollRevealElements";

const DNTSCaseStudy = ({ caseStudy, hoveredStage, setHoveredStage }) => {
  return (
    <section className="bg-[#e2e9e4] pt-16 pb-20 px-4">
      <div className="container mx-auto">
        <ScrollRevealElements className="text-center mb-12 md:mb-16" staggerAmount={0.5}>
          <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800">
            Case Study:{" "}
            <span className="text-[#10b981]">{caseStudy.title}</span>
          </motion.h2>
          <motion.p className="text-slate-500 mt-4 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            {caseStudy.intro}
          </motion.p>
        </ScrollRevealElements>

        {/* Before / Middle / After panel */}
        <motion.div
          className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl bg-white min-h-[500px] border border-slate-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Before Section */}
          <div
            className={`relative transition-all duration-500 ease-in-out border-b lg:border-b-0 lg:border-r border-slate-100 ${hoveredStage === "before" ? "lg:w-[50%] flex-grow" : "lg:w-[25%]"
              } ${hoveredStage === "after" ? "lg:w-[20%]" : ""}`}
            onMouseEnter={() => setHoveredStage("before")}
            onMouseLeave={() => setHoveredStage(null)}
          >
            <div className="h-full min-h-[250px] lg:min-h-0 relative overflow-hidden group">
              <img
                loading="lazy"
                src={caseStudy.beforeImages[0]}
                alt="Before"
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hoveredStage === "before" ? "scale-110" : "scale-100"
                  }`}
              />
              <div className={`absolute inset-0 bg-red-900/60 transition-opacity duration-500 ${hoveredStage === "before" ? "opacity-30" : "opacity-80"
                }`} />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <div className={`transition-all duration-500 ${hoveredStage === "before" ? "scale-110" : "scale-100"}`}>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter drop-shadow-lg">Before</h3>
                  {hoveredStage === "before" && (
                    <p className="text-white/90 text-xs font-bold mt-2 uppercase tracking-widest animate-fade-in">Initial Contamination</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section (Content) */}
          <div
            className={`relative flex flex-col p-8 lg:p-12 transition-all duration-500 ease-in-out ${hoveredStage === null ? "lg:w-[50%]" : "lg:w-[30%]"
              } flex-grow bg-slate-50 justify-center items-start overflow-hidden`}
          >
            <div className="w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-[#10b981]" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-800 uppercase tracking-tight">
                  The Journey
                </h3>
              </div>
              <ul className="space-y-6">
                {caseStudy.restorationPoints.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-[#10b981] mr-4 flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:scale-150 transition-transform" />
                    <span className="text-slate-600 font-medium leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After Section */}
          <div
            className={`relative transition-all duration-500 ease-in-out border-t lg:border-t-0 lg:border-l border-slate-100 ${hoveredStage === "after" ? "lg:w-[50%] flex-grow" : "lg:w-[25%]"
              } ${hoveredStage === "before" ? "lg:w-[20%]" : ""}`}
            onMouseEnter={() => setHoveredStage("after")}
            onMouseLeave={() => setHoveredStage(null)}
          >
            <div className="h-full min-h-[250px] lg:min-h-0 relative overflow-hidden group">
              <img
                loading="lazy"
                src={caseStudy.afterImages[0]}
                alt="After"
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hoveredStage === "after" ? "scale-110" : "scale-100"
                  }`}
              />
              <div className={`absolute inset-0 bg-emerald-900/60 transition-opacity duration-500 ${hoveredStage === "after" ? "opacity-30" : "opacity-80"
                }`} />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <div className={`transition-all duration-500 ${hoveredStage === "after" ? "scale-110" : "scale-100"}`}>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter drop-shadow-lg">After</h3>
                  {hoveredStage === "after" && (
                    <p className="text-white/90 text-xs font-bold mt-2 uppercase tracking-widest animate-fade-in">System Success</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <a
            href="/resources/casestudies"
            className="inline-block bg-[#10b981] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#0a7c56] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Full Case Study
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DNTSCaseStudy;
