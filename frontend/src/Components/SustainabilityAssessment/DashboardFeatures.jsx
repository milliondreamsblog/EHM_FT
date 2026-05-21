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
  Lock,
  Radio,
  Code2,
} from "lucide-react";
import SectionHeading from "../../Common/SectionHeading";

const features = [
  {
    icon: Brain,
    category: "AI Sustainability BOT",
    description:
      "An intelligent sustainability assistant offering query-based and flow-based chat support. Provides data-driven recommendations, performance benchmarking, and ESG guidance to optimize decisions and accelerate green growth.",
    color: "bg-[#3B66BC]",
    size: "large",
  },
  {
    icon: BarChart3,
    category: "Sustainability Dashboard",
    description:
      "Real-time monitoring of energy, water, waste, and emission metrics with automated updates. Visualize your campus sustainability performance with twice-yearly dashboard updates under the Premium plan.",
    color: "bg-[#4B7635]",
    size: "large",
  },
  {
    icon: Globe2,
    category: "UNSDG Matrices & Indicators",
    description:
      "Auto-maps your institution's initiatives to UN Sustainable Development Goals and ESG disclosure indicators for seamless reporting.",
    color: "bg-[#4B7635]",
    size: "medium",
  },
  {
    icon: Cpu,
    category: "GHG Accounting",
    description:
      "Scope 1, Scope 2 & Scope 3 greenhouse gas emission measurement with energy efficiency analysis and carbon footprint reporting.",
    color: "bg-[#E59518]",
    size: "medium",
  },
  {
    icon: Lock,
    category: "Multi-Factor Authentication",
    description:
      "Secure login with MFA to protect institutional sustainability data and ensure role-based access control.",
    color: "bg-[#0F6E56]",
    size: "small",
  },
  {
    icon: Radio,
    category: "Centralized Tracking",
    description:
      "Track sustainability policies, action plans, and events from a single platform with automated progress logging.",
    color: "bg-[#3B66BC]",
    size: "small",
  },
  {
    icon: Award,
    category: "Ranking Support",
    description:
      "Generate performance data for NAAC, NIRF, QS, and THE Impact Rankings with ready-to-submit sustainability reports.",
    color: "bg-[#E59518]",
    size: "small",
  },
  {
    icon: BookOpen,
    category: "Sustainability Literacy Test",
    description:
      "Pre and post-assessment tools to measure and visualize sustainability knowledge among campus stakeholders.",
    color: "bg-[#4B7635]",
    size: "small",
  },
  {
    icon: Code2,
    category: "API Integration & Certification Readiness",
    description:
      "Seamlessly connect with external systems via API integration. Track compliance progress toward ISO 14001, Water Positive, and other sustainability certifications — with facilitation support as per requirement.",
    color: "bg-[#0F6E56]",
    size: "wide",
  },
];

const DashboardFeaturesBento = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-12 px-6 overflow-hidden">
      {/* Layered teal gradient — brand bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-100 to-white" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-teal-200/70 to-white/95" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90" />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100/60 via-teal-200/40 to-teal-100/60" />
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/50 via-teal-100/30 to-teal-50/50" />
      {/* Top & bottom white fades */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Header */}
        <SectionHeading>
          <span className="block text-slate-800">Dashboard</span>
          <span className="text-[#4B7635]">Features & Plug-ins</span>
        </SectionHeading>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-8">
          Intelligent integrations and insights that transform sustainability
          data into strategic, measurable outcomes.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">

          {/* Large Card 1 - AI Sustainability BOT */}
          <div
            className="md:col-span-2 md:row-span-2 group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative z-10">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${features[0].color} text-white mb-6 transform group-hover:scale-105 transition-transform duration-300`}
              >
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {features[0].category}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {features[0].description}
              </p>
            </div>
          </div>

          {/* Medium Cards - UNSDG & GHG */}
          {[2, 3].map((idx) => (
            <div
              key={idx}
              className="md:col-span-2 group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative z-10 flex items-start gap-4">
                <div
                  className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl ${features[idx].color} text-white transform group-hover:scale-105 transition-transform duration-300`}
                >
                  {React.createElement(features[idx].icon, {
                    className: "w-7 h-7",
                  })}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {features[idx].category}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {features[idx].description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Small Cards - First Row: MFA, Centralized Tracking */}
          {[4, 5].map((idx) => (
            <div
              key={idx}
              className="md:col-span-1 group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${features[idx].color} text-white mb-4 transform group-hover:scale-105 transition-transform duration-300`}
                >
                  {React.createElement(features[idx].icon, {
                    className: "w-6 h-6",
                  })}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {features[idx].category}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {features[idx].description}
                </p>
              </div>
            </div>
          ))}

          {/* Large Card 2 - Sustainability Dashboard */}
          <div
            className="md:col-span-2 md:row-span-2 group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative z-10">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${features[1].color} text-white mb-6 transform group-hover:scale-105 transition-transform duration-300`}
              >
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {features[1].category}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Small Cards - Second Row: Ranking, Literacy */}
          {[6, 7].map((idx) => (
            <div
              key={idx}
              className="md:col-span-1 group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${features[idx].color} text-white mb-4 transform group-hover:scale-105 transition-transform duration-300`}
                >
                  {React.createElement(features[idx].icon, {
                    className: "w-6 h-6",
                  })}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {features[idx].category}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {features[idx].description}
                </p>
              </div>
            </div>
          ))}

          {/* Bottom Wide Card - API Integration & Certification */}
          <div
            className="md:col-span-4 group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500"
            onMouseEnter={() => setHoveredIndex(8)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative z-10 flex items-center gap-6">
              <div
                className={`flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-xl ${features[8].color} text-white transform group-hover:scale-105 transition-transform duration-300`}
              >
                <Code2 className="w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {features[8].category}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {features[8].description}
                </p>
              </div>
              <div className="flex-shrink-0 hidden md:flex gap-3">
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-center">
                  <div className="text-xs text-slate-500 mb-1">Standard</div>
                  <div className="text-sm font-semibold text-slate-700">Scope 1 & 2</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-center">
                  <div className="text-xs text-slate-500 mb-1">Premium</div>
                  <div className="text-sm font-semibold text-slate-700">Scope 1, 2 & 3</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardFeaturesBento;
