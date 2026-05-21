import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ScrollRevealElements from "../../Animations/ScrollRevealElements";

const WaterbodyApproach = ({ approachData }) => {
  return (
    <section className="bg-[#f6f6f6] pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mt-28 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            Our <span className="text-[#10b981]">Approach</span>
          </h2>
        </motion.div>

        <div className="hidden lg:flex justify-between items-start relative py-4 mx-auto">
          <svg
            className="absolute -top-20 left-0 w-full h-full z-0"
            preserveAspectRatio="none"
            viewBox="0 0 1152 300"
          >
            <path
              d="M 52 100 C 218 100, 218 196, 384 196 C 550 196, 584 100, 768 100 C 934 100, 934 196, 1100 196"
              stroke="#10b981"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,10"
            />
          </svg>
          <ScrollRevealElements
            className="w-full flex justify-between items-start"
            staggerAmount={0.5}
          >
            {approachData.map((item, index) => {
              const isOdd = index % 2 !== 0;
              return (
                <motion.div key={index} className="relative flex flex-col items-center z-10 group">
                  <div
                    className={`relative p-2 bg-slate-50 rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl ${
                      isOdd ? "mt-28" : ""
                    }`}
                  >
                    <img
                      loading="lazy"
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="mt-6 w-64 bg-white p-6 rounded-2xl shadow-lg border border-slate-200 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                    <h4 className="font-bold text-lg text-slate-700">{item.title}</h4>
                    <ul className="mt-2 text-sm text-left text-slate-500 space-y-1">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-[#10b981] flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </ScrollRevealElements>
        </div>

        {/* Mobile */}
        <div className="lg:hidden relative max-w-xl mx-auto mt-12">
          <div className="absolute left-12 top-0 h-full w-0.5 bg-[#10b981]"></div>
          <ScrollRevealElements className="space-y-16" staggerAmount={0.5}>
            {approachData.map((item, index) => (
              <motion.div key={index} className="relative pl-28 group">
                <div className="absolute left-12 top-1/2 -translate-y-1/2 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <h4 className="font-bold text-lg text-slate-700">{item.title}</h4>
                  <ul className="mt-2 text-sm text-left text-slate-500 space-y-1">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-[#10b981] flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </ScrollRevealElements>
        </div>

        {/* button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <a
            href="/projects"
            className="inline-block bg-[#10b981] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#0d8e63] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WaterbodyApproach;
