import React from "react";
import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
import ScrollRevealElements from "../../Animations/ScrollRevealElements";

const WaterbodyCaseStudy = ({ caseStudy, hoveredStage, setHoveredStage }) => {
  return (
    <section className="bg-[#e2e9e4] pt-16 pb-20 px-4">
      <div className="container mx-auto">
        <div className="w-full max-w-7xl mx-auto ">
          <ScrollRevealElements className="text-center mb-12 md:mb-16" staggerAmount={0.5}>
            <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800">
              Case Study: <span className="text-[#10b981]">{caseStudy.title}</span>
            </motion.h2>
            <motion.p className="text-slate-500 mt-4 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              {caseStudy.intro}
            </motion.p>
          </ScrollRevealElements>

          <motion.div
            className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-2xl bg-gray-50 min-h-[450px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* before */}
            <div
              className={`relative transition-all duration-500 ease-in-out ${
                hoveredStage === "before" ? "lg:w-[50%]" : "lg:w-[25%]"
              } ${hoveredStage === "after" ? "lg:w-[25%]" : ""} flex-grow`}
              onMouseEnter={() => setHoveredStage("before")}
              onMouseLeave={() => setHoveredStage(null)}
            >
              {hoveredStage === "before" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
                  {caseStudy.beforeImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="h-full min-h-[200px] lg:min-h-0 w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  ))}
                </div>
              ) : (
                <div className="relative w-full h-full bg-red-800 p-6 md:p-8">
                  <img
                    loading="lazy"
                    src={caseStudy.beforeImages[0]}
                    alt="Polluted water"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                  <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-white ">
                    Before
                  </h3>
                </div>
              )}
            </div>

            {/* middle */}
            <div
              className={`relative flex flex-col p-6 md:p-8 transition-all duration-500 ease-in-out ${
                hoveredStage === null ? "lg:w-[50%]" : "lg:w-[25%]"
              } flex-grow bg-slate-100 text-slate-800 justify-center items-start`}
            >
              <div className="w-full text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#10b981]">
                  Restoration Journey
                </h3>
                <ul className="space-y-4 max-w-md mx-auto text-left">
                  {caseStudy.restorationPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <Droplets className="h-5 w-5 text-[#10b981] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* after  */}
            <div
              className={`relative transition-all duration-500 ease-in-out ${
                hoveredStage === "after" ? "lg:w-[50%]" : "lg:w-[25%]"
              } ${hoveredStage === "before" ? "lg:w-[25%]" : ""} flex-grow`}
              onMouseEnter={() => setHoveredStage("after")}
              onMouseLeave={() => setHoveredStage(null)}
            >
              {hoveredStage === "after" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
                  {caseStudy.afterImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="h-full min-h-[200px] lg:min-h-0 w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  ))}
                </div>
              ) : (
                <div className="relative w-full h-full bg-green-800 p-6 md:p-8 flex justify-end items-start">
                  <img
                    loading="lazy"
                    src={caseStudy.afterImages[0]}
                    alt="Restored water"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                  <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-white">After</h3>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        
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

export default WaterbodyCaseStudy;
