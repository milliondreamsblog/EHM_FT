import React, { useState } from 'react';
import { Leaf, Building2, CloudRain, Radio, Map, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

const OfferingsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const offerings = [
    {
      id: 1,
      icon: Leaf,
      title: "Sustainability Assessment & Reporting",
      description: "Comprehensive ESG performance evaluation with customized dashboards. We help businesses and HEIs ensure regulatory compliance, enhance transparency, and align with global frameworks.",
      color: "from-emerald-500 to-teal-600",
      bgAccent: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      id: 2,
      icon: Building2,
      title: "Sustainable Environmental Management",
      description: "End-to-end solutions reducing resource use and improving waste efficiency. We combine technology, design, and implementation to create measurable environmental and economic value.",
      color: "from-blue-500 to-cyan-600",
      bgAccent: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 3,
      icon: CloudRain,
      title: "Climate Impact & Sustainability Assessment",
      description: "Advanced AI-driven consulting for climate risk analysis. We integrate multi-sector data to help organizations evaluate risks and plan effective adaptation strategies.",
      color: "from-violet-500 to-purple-600",
      bgAccent: "bg-violet-50",
      iconColor: "text-violet-600"
    },
    {
      id: 4,
      icon: Radio,
      title: "Geophysical Investigation",
      description: "Specialized subsurface exploration using state-of-the-art instrumentation. We integrate various methods and industry tools to deliver accurate, data-driven insights.",
      color: "from-orange-500 to-red-600",
      bgAccent: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      id: 5,
      icon: Map,
      title: "Urban Planning & Management",
      description: "Strategic solutions for inclusive, resource-efficient urban centres. Our data-driven approach helps cities plan infrastructure effectively and build resilient urban futures.",
      color: "from-pink-500 to-rose-600",
      bgAccent: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      id: 6,
      icon: GraduationCap,
      title: "Training & Capacity Building",
      description: "Comprehensive programs on ESG, climate assessment, AI, and geophysical applications. We build institutional capacity through practical, hands-on learning for professionals.",
      color: "from-indigo-500 to-blue-600",
      bgAccent: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700 tracking-wide">OUR EXPERTISE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Transforming Vision Into
            <span className="block mt-2 bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              Sustainable Reality
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions combining cutting-edge technology, deep expertise, and innovative approaches to drive meaningful environmental and social impact.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            return (
              <div
                key={offering.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(offering.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`inline-flex p-4 rounded-2xl ${offering.bgAccent} group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-8 h-8 ${offering.iconColor}`} />
                    </div>
                    {/* Animated Corner Accent */}
                    <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${offering.color} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
                    {offering.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {offering.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold group/link">
                    <span className={`${offering.iconColor} group-hover/link:translate-x-1 transition-transform duration-300`}>
                      Explore Service
                    </span>
                    <ArrowRight className={`w-4 h-4 ${offering.iconColor} group-hover/link:translate-x-2 transition-transform duration-300`} />
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${offering.color} w-0 group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl shadow-2xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to transform your sustainability journey?</h3>
              <p className="text-slate-300">Let's collaborate to create lasting environmental and social impact.</p>
            </div>
            <button className="whitespace-nowrap px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;