import React, { useState } from 'react';
import { Leaf, Building2, CloudRain, Radio, Map, GraduationCap, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OfferingsSection = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const offerings = [
    {
      id: 1,
      icon: Leaf,
      title: "Sustainability Assessment & Reporting",
      description: "EHM provides comprehensive sustainability assessments to evaluate environmental, social, and governance (ESG) performance. Our reporting solutions and customized Sustainability Dashboards help businesses and higher education institutions (HEIs) ensure regulatory compliance, enhance transparency, and align with global ESG frameworks and reporting standards.",
      points: [
        "ESG Performance Evaluation",
        "Sustainability & Impact Reporting",
        "GHG Accounting",
        "Compliance Audits & ISO Certifications"
      ],
      color: "from-emerald-500 to-teal-600",
      bgAccent: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      defaultBg: "bg-emerald-50/50",
      hoverBg: "group-hover:bg-white"
    },
    {
      id: 2,
      icon: Building2,
      title: "Sustainable Environmental Management",
      description: "EHM delivers end-to-end environmental management solutions that help organizations reduce resource use, improve waste and water efficiency, and adopt nature-based approaches for pollution control and ecosystem restoration. Our work combines technology, design, and on-ground implementation to create measurable environmental and economic value across industries and government organizations.",
      points: [
        "Project Planning & Monitoring",
        "Quality Control, Assessment & Audits",
        "Restoration of Waterbodies",
        "Sewage & Greywater Management"
      ],
      color: "from-blue-500 to-cyan-600",
      bgAccent: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      defaultBg: "bg-blue-50/50",
      hoverBg: "group-hover:bg-white"
    },
    {
      id: 3,
      icon: CloudRain,
      title: "Climate Risk Intelligence",
      description: "EHM offers consulting and advisory services in climate impact and sustainability assessment, using advanced AI and analytics to guide data-driven decisions. Our solutions provide detailed risk and impact analyses across time horizons. By integrating climate, environmental, and socio-economic data across sectors such as agriculture, water, and infrastructure, we help organizations and policymakers evaluate risks and plan effective adaptation strategies.",
      points: [
        "Climate Data & Matrices",
        "Urban Climate Risk Intelligence",
        "Climate Impact Assessment",
        "Climate Consulting Services"
      ],
      color: "from-violet-500 to-purple-600",
      bgAccent: "bg-violet-50",
      iconColor: "text-violet-600",
      borderColor: "border-violet-200",
      defaultBg: "bg-violet-50/50",
      hoverBg: "group-hover:bg-white"
    },
    {
      id: 4,
      icon: Radio,
      title: "Geophysical Investigation",
      description: "EHM specialises in geophysical investigations for subsurface exploration, leveraging well established geophysical methods and state of the art instrumentation. Depending upon the specific requirement of projects and site conditions, we integrate various methods and industry standard tools to deliver accurate and data-driven insights.",
      points: [
        "Mineral Exploration",
        "Engineering & Geotechnical Investigation",
        "Hydrological Investigation",
        "Archaeological Investigation"
      ],
      color: "from-orange-500 to-red-600",
      bgAccent: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
      defaultBg: "bg-orange-50/50",
      hoverBg: "group-hover:bg-white"
    },
    {
      id: 5,
      icon: Map,
      title: "Urban Planning & Management",
      description: "EHM provides strategic solutions for developing well-planned, inclusive, and resource-efficient urban centres. Through a data-driven and interdisciplinary approach, we help growing cities plan and manage infrastructure more effectively, improving liveability and building pathways toward resilient urban futures.",
      points: [
        "Water-Positive & Net-Zero Plan",
        "Climate-Resilient Action Plan",
        "Circular Green Campus Development",
        "GHG Accounting"
      ],
      color: "from-pink-500 to-rose-600",
      bgAccent: "bg-pink-50",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200",
      defaultBg: "bg-pink-50/50",
      hoverBg: "group-hover:bg-white"
    },
    {
      id: 6,
      icon: GraduationCap,
      title: "Training & Capacity Building",
      description: "EHM conducts training programs, workshops, and webinars on ESG, climate impact assessment, adaptation, AI, and geophysical applications. Designed for industry professionals, government officials, and municipal engineers, these sessions build institutional capacity, enhance data-driven decision-making, and embed sustainable practices through practical, hands-on learning.",
      points: [
        "Environmental, Social, and Governance (ESG)",
        "Water Reuse Management & Sustainability",
        "AI in Climate",
        "Geophysical Data Acquisition & Processing"
      ],
      color: "from-indigo-500 to-blue-600",
      bgAccent: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      defaultBg: "bg-indigo-50/50",
      hoverBg: "group-hover:bg-white"
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
                <div className={`relative h-full ${offering.defaultBg} ${offering.hoverBg} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border-2 ${offering.borderColor} border-opacity-0 hover:border-opacity-100 overflow-hidden`}>
                  
                  {/* Decorative pattern overlay */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-br ${offering.color}`} style={{
                      clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                    }}></div>
                  </div>
                  
                  {/* Icon Container with enhanced design */}
                  <div className="relative mb-6 z-10">
                    <div className={`inline-flex p-4 rounded-xl ${offering.bgAccent} border-2 ${offering.borderColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                      <Icon className={`w-7 h-7 ${offering.iconColor}`} />
                    </div>
                    {/* Glow effect on hover */}
                    <div className={`absolute top-0 left-0 w-16 h-16 bg-gradient-to-br ${offering.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold text-slate-900 mb-4 transition-colors duration-300`}>
                      {offering.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {offering.description}
                    </p>
                    
                    {/* Points List with better icons */}
                    {offering.points && (
                      <ul className="space-y-2.5 mb-6">
                        {offering.points.map((point, index) => (
                          <li key={index} className="flex items-start group/item">
                            <CheckCircle2 className={`w-4 h-4 ${offering.iconColor} mr-2.5 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200`} />
                            <span className="text-sm text-slate-700 leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Enhanced Learn More Button */}
                  <div className="relative z-20 mt-6">
                    <button 
                      onClick={() => {
                        if (offering.title === 'Sustainability Assessment & Reporting') {
                          navigate('/offerings/sustainability-assessment-reporting');
                        } else if (offering.title === 'Geophysical Investigation') {
                          navigate('/offerings/geophysical-investigation');
                        }
                      }}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg ${offering.iconColor} bg-transparent border-2 ${offering.borderColor} font-semibold text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group/btn`}
                    >
                      <span className="group-hover/btn:mr-1 transition-all duration-300">
                        Explore Service
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Animated bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${offering.color} w-0 group-hover:w-full transition-all duration-700 ease-out`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to transform your sustainability journey?</h3>
              <p className="text-slate-300">Let's collaborate to create lasting environmental and social impact.</p>
            </div>
            <button 
              onClick={() => navigate('/contact#form')}
              className="whitespace-nowrap px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
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