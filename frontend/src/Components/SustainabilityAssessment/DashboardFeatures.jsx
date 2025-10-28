import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Common/SectionHeading";
import {
  BarChart3,
  Cpu,
  Globe2,
  Award,
  BookOpen,
  ClipboardList,
  CalendarHeart,
  ShieldCheck,
  Brain,
  LayoutDashboard,
} from "lucide-react";

const features = [
  { icon: BarChart3, category: "Performance Tracking", description: "Real-time monitoring of energy, water, waste, and emission metrics with automated updates.", color: "from-emerald-500 to-teal-400" },
  { icon: Cpu, category: "Carbon & Resource Accounting", description: "Scope 1, 2 & 3 carbon footprint measurement, energy efficiency analysis, and water balance tracking.", color: "from-blue-500 to-cyan-400" },
  { icon: Globe2, category: "SDG & ESG Mapping", description: "Auto-maps campus or organization initiatives to UNSDG and ESG disclosure indicators (BRSR, GRI).", color: "from-violet-500 to-purple-400" },
  { icon: Award, category: "Ranking & Accreditation Support", description: "Integrated module to generate performance data for NAAC, NIRF, QS, and THE Impact Rankings.", color: "from-amber-500 to-orange-400" },
  { icon: BookOpen, category: "Sustainability Literacy Assessment (Plugin)", description: "Embedded survey tool to assess and visualize literacy levels among students, employees, and stakeholders.", color: "from-pink-500 to-rose-400" },
  { icon: ClipboardList, category: "Policy & Initiative Tracker", description: "Tracks progress of sustainability policies, targets, and action plans across departments or divisions.", color: "from-indigo-500 to-blue-500" },
  { icon: CalendarHeart, category: "Event & Activity Reporting", description: "Auto-log and categorize sustainability events, outreach programs, and community initiatives for annual reports.", color: "from-green-500 to-emerald-400" },
  { icon: ShieldCheck, category: "Certification Readiness", description: "Tracks compliance readiness for certifications like ISO 14001, Water Positive, and Green Campus.", color: "from-teal-500 to-cyan-400" },
  { icon: Brain, category: "AI-Enabled Insight Engine (Advanced)", description: "Provides data-driven recommendations, performance benchmarking, and sustainability chat support.", color: "from-fuchsia-500 to-purple-500" },
  { icon: LayoutDashboard, category: "Dashboard Integration", description: "Custom embedding on institutional websites with admin and public access panels.", color: "from-slate-500 to-slate-700" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const DashboardFeaturesGrid = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-emerald-50 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeading>
          <span className="block">Dashboard</span>
          <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
            Features & Plug-ins
          </span>
        </SectionHeading>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-16">
          Intelligent integrations and insights that transform sustainability data into strategic, measurable outcomes.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.article
                key={idx}
                className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-[0_8px_30px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_40px_rgba(2,6,23,0.08)] transition-transform transform hover:-translate-y-1"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="inline-flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feat.color} text-white`}
                  >
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900">{feat.category}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{feat.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DashboardFeaturesGrid;
