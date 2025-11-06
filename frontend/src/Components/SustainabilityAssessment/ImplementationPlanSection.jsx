import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Assess & Strategize",
    points: [
      "Identify ESG Gaps",
      "Define KPIs",
      "Set Sustainability Goals"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
  },
  {
    step: 2,
    title: "Design & Integrate",
    points: [
      "Develop Dashboards",
      "solutions in water, energy, and resource efficiency",
      "Reporting structure"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop",
  },
  {
    step: 3,
    title: "Report & Improve",
    points: [
      "Benchmark performance",
      "Deliver reporting",
      "Deploy visualization systems"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
  },
];

const ScrollRevealElements = ({ children, className, staggerAmount }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerAmount,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function ImplementationPlanSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Gradient background with fade to white */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/40 to-white"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div>
          {/* Header matching DashboardFeatures style */}
          <div className="text-center mb-16">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center my-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block relative">
                  Implementation{' '}
                  <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                    Approach
                  </span>
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '100%', opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="block h-[3px] bg-purple-600 mt-2"
                  ></motion.span>
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '25%', opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="block h-[2px] bg-purple-300 mx-auto mt-1"
                  ></motion.span>
                </h2>
                <motion.p 
                  className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  EHM's consulting approach bridges strategy, analytics, and execution — ensuring each client achieves measurable progress in sustainability performance and reporting maturity.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Desktop view */}
          <div className="hidden lg:flex justify-between items-start relative py-4 mx-auto">
            <svg className="absolute top-12 left-0 w-full h-full z-0" preserveAspectRatio="none" viewBox="0 0 900 300">
              <path
                d="M 50 100 C 200 100, 200 196, 450 196 C 700 196, 700 100, 850 100"
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
              {steps.map((item, index) => {
                const isOdd = index % 2 !== 0;
                return (
                  <motion.div key={index} className="relative flex flex-col items-center z-10 group">
                    <div className={`relative p-2 bg-white rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl ${isOdd ? 'mt-28' : ''}`}>
                      <img src={item.image} alt={item.title} className="w-20 h-20 rounded-full object-cover" />
                    </div>
                    <div className={`mt-6 w-64 bg-white p-6 rounded-2xl shadow-lg border border-slate-200 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl`}>
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

          {/* Mobile view */}
          <div className="lg:hidden relative max-w-xl mx-auto mt-12">
            <div className="absolute left-12 top-0 h-full w-0.5 bg-[#10b981]"></div>
            <ScrollRevealElements
              className="space-y-16"
              staggerAmount={0.5}
            >
              {steps.map((item, index) => (
                <motion.div key={index} className="relative pl-28 group">
                  <div className="absolute left-12 top-1/2 -translate-y-1/2 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
                    <img src={item.image} alt={item.title} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
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
        </div>
      </div>
    </section>
  );
}