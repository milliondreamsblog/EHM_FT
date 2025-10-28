import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../../Common/SectionHeading";

const steps = [
  {
    step: 1,
    title: "Assess",
    description: "Analyze ESG baselines, policies, and data systems to identify reporting gaps.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    step: 2,
    title: "Design",
    description: "Define KPIs, dashboard architecture, and reporting structure aligned with client goals.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    step: 3,
    title: "Implement",
    description: "Integrate digital tools, train internal teams, and deploy data visualization systems.",
    color: "from-violet-500 to-purple-400",
  },
  {
    step: 4,
    title: "Report & Improve",
    description: "Prepare sustainability reports and dashboards with year-on-year performance benchmarking.",
    color: "from-amber-500 to-orange-400",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ImplementationPlanSection = () => {
  return (
    <section className="relative py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeading>
          <span className="block">Implementation</span>
          <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
            Approach
          </span>
        </SectionHeading>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-16">
          EHM's consulting approach bridges strategy, analytics, and execution — ensuring each client achieves measurable progress in sustainability performance and reporting maturity.
        </p>

        {/* Steps Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Gradient Connecting Line for desktop */}
          <div className="hidden md:block absolute top-[5rem] left-0 right-0 h-1 z-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-orange-400 rounded-full" />

          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              className="relative flex flex-col items-center text-center z-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Step circle */}
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg`}
              >
                {s.step}
              </div>

              {/* Step content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                {s.description}
              </p>

              {/* Optional arrow between steps for mobile */}
              {idx < steps.length - 1 && (
                <div className="md:hidden mt-6">
                  <ArrowRight className="w-6 h-6 text-slate-400 mx-auto" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationPlanSection;
