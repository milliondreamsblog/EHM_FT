import React, { useState } from "react";
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
} from "lucide-react";
import SectionHeading from "../../Common/SectionHeading";

const features = [
  { 
    icon: BarChart3, 
    category: "Performance Tracking", 
    description: "Real-time monitoring of energy, water, waste, and emission metrics with automated updates.", 
    color: "from-emerald-500 to-teal-400",
    size: "large"
  },
  { 
    icon: Brain, 
    category: "AI Insight Engine", 
    description: "AI Insight Engine delivers data-driven recommendations to optimize your business decisions. It offers performance benchmarking to help you measure and improve efficiency. The platform also provides sustainability-focused chat support, guiding eco-friendly practices. Together, these features empower smarter, greener growth.", 
    color: "from-fuchsia-500 to-purple-500",
    size: "large"
  },
  { 
    icon: Cpu, 
    category: "Carbon & Resource Accounting", 
    description: "Scope 1, 2 & 3 carbon footprint measurement with energy efficiency analysis.", 
    color: "from-blue-500 to-cyan-400",
    size: "medium"
  },
  { 
    icon: Globe2, 
    category: "SDG & ESG Mapping", 
    description: "Auto-maps initiatives to UNSDG and ESG disclosure indicators.", 
    color: "from-violet-500 to-purple-400",
    size: "medium"
  },
  { 
    icon: Award, 
    category: "Ranking Support", 
    description: "Generate performance data for NAAC, NIRF, QS, and THE Impact Rankings.", 
    color: "from-amber-500 to-orange-400",
    size: "small"
  },
  { 
    icon: BookOpen, 
    category: "Literacy Assessment", 
    description: "Assess and visualize sustainability literacy levels among stakeholders.", 
    color: "from-pink-500 to-rose-400",
    size: "small"
  },
  { 
    icon: ClipboardList, 
    category: "Policy Tracker", 
    description: "Track progress of sustainability policies and action plans.", 
    color: "from-indigo-500 to-blue-500",
    size: "small"
  },
  { 
    icon: CalendarHeart, 
    category: "Event Reporting", 
    description: "Auto-log sustainability events and community initiatives.", 
    color: "from-green-500 to-emerald-400",
    size: "small"
  },
  { 
    icon: ShieldCheck, 
    category: "Certification Readiness", 
    description: "Track compliance for ISO 14001, Water Positive certifications.", 
    color: "from-teal-500 to-cyan-400",
    size: "medium"
  },
];

const DashboardFeaturesBento = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Light Radiant Mixed Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-blue-50/30 via-violet-50/30 via-pink-50/20 to-amber-50/30" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-emerald-200/20 via-teal-200/15 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-violet-200/20 via-purple-200/15 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-br from-blue-200/20 via-cyan-200/15 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '9s', animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-gradient-to-br from-pink-200/15 via-rose-200/10 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '11s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/2 w-[400px] h-[400px] bg-gradient-to-br from-amber-200/15 via-orange-200/10 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '7s', animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
          {/* Large Card 1 - Spans 2 columns and 2 rows */}
          <div
            className="md:col-span-2 md:row-span-2 group relative bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-[0_8px_30px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_40px_rgba(2,6,23,0.1)] transition-all duration-500 overflow-hidden"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${features[0].color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${features[0].color} text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{features[0].category}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{features[0].description}</p>
            </div>
          </div>

          {/* Medium Cards */}
          {[2, 3].map((idx) => (
            <div
              key={idx}
              className="md:col-span-2 group relative bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-white/30 shadow-[0_8px_30px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_40px_rgba(2,6,23,0.1)] transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${features[idx].color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10 flex items-start gap-4">
                <div className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${features[idx].color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(features[idx].icon, { className: "w-7 h-7" })}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{features[idx].category}</h3>
                  <p className="text-slate-600 leading-relaxed">{features[idx].description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Small Cards - First Row */}
          {[4, 5].map((idx) => (
            <div
              key={idx}
              className="md:col-span-1 group relative bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-white/30 shadow-[0_8px_30px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_40px_rgba(2,6,23,0.1)] transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${features[idx].color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${features[idx].color} text-white mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  {React.createElement(features[idx].icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{features[idx].category}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{features[idx].description}</p>
              </div>
            </div>
          ))}

          {/* Large Card 2 - Spans 2 columns and 2 rows */}
          <div
            className="md:col-span-2 md:row-span-2 group relative bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-[0_8px_30px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_40px_rgba(2,6,23,0.1)] transition-all duration-500 overflow-hidden"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${features[1].color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${features[1].color} text-white mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{features[1].category}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{features[1].description}</p>
            </div>
          </div>

          {/* Small Cards - Second Row */}
          {[6, 7].map((idx) => (
            <div
              key={idx}
              className="md:col-span-1 group relative bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-white/30 shadow-[0_8px_30px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_40px_rgba(2,6,23,0.1)] transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${features[idx].color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${features[idx].color} text-white mb-4 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                  {React.createElement(features[idx].icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{features[idx].category}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{features[idx].description}</p>
              </div>
            </div>
          ))}

          {/* Bottom Medium Card */}
          <div
            className="md:col-span-4 group relative bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-white/30 shadow-[0_8px_30px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_40px_rgba(2,6,23,0.1)] transition-all duration-500 overflow-hidden"
            onMouseEnter={() => setHoveredIndex(8)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${features[8].color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className="relative z-10 flex items-center gap-6">
              <div className={`flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${features[8].color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{features[8].category}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{features[8].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardFeaturesBento;