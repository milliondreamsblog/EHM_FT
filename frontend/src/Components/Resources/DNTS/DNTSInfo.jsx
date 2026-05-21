import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Leaf, Filter, Zap } from "lucide-react";
import ScrollRevealElements from "../../Animations/ScrollRevealElements";

const DNTSInfo = ({ dntsInfoData }) => {
  const iconMap = [Leaf, Filter, Zap];

  return (
    <section className="bg-[#e2e9e4] pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            About <span className="text-[#10b981]">DNTS</span>
          </h2>
        </motion.div>

        {/* Desktop */}
        <ScrollRevealElements
          className="hidden lg:flex justify-center items-start gap-12 relative py-12"
          staggerAmount={0.5}
        >
          {dntsInfoData.map((item, index) => {
            const Icon = iconMap[index] || CheckCircle;
            const isLast = index === dntsInfoData.length - 1;
            return (
              <motion.div
                key={index}
                className="relative flex flex-col items-center group"
              >
                {!isLast && (
                  <div className="absolute top-10 left-full h-1 w-16 bg-[#10b981]" />
                )}
                <div className="relative p-4 bg-white rounded-full border-4 border-[#10b981] z-10 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  <Icon className="w-8 h-8 text-[#10b981]" />
                </div>
                <div className="mt-6 w-64 bg-white p-6 rounded-2xl shadow-lg border border-slate-200 text-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <h4 className="font-bold text-lg text-slate-700">{item.title}</h4>
                  <ul className="mt-2 text-sm text-left text-slate-500 space-y-1">
                    {item.items.map((point, pIdx) => (
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

        {/* Mobile */}
        <div className="lg:hidden relative max-w-xl mx-auto mt-12">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-[#10b981]" />
          <ScrollRevealElements className="space-y-16" staggerAmount={0.5}>
            {dntsInfoData.map((item, index) => {
              const Icon = iconMap[index] || CheckCircle;
              return (
                <motion.div key={index} className="relative pl-20 group">
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-white border-4 border-[#10b981] shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-[#10b981]" />
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200">
                    <h4 className="font-bold text-lg text-slate-700 mb-2">{item.title}</h4>
                    <ul className="space-y-1">
                      {item.items.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start text-slate-600">
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
      </div>
    </section>
  );
};

export default DNTSInfo;
