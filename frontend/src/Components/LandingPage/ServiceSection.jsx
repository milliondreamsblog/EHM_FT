import { Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollRevealElements from "../Animations/ScrollRevealElements";
import SectionHeading from "../../Common/SectionHeading";
import { Link } from "react-router-dom";

import ClimateRiskImg from "../../assets/offering/Updated - CLIMATE RISK.webp";
import GeophysicalImg from "../../assets/offering/Updated - Geophysical .webp";
import SustainabilityImg from "../../assets/offering/Updated - Sustainability & ESG.webp";
import EnvManagementImg from "../../assets/offering/Updated - Sustainable Environmental Management .webp";

const data = [
  {
    title: "Sustainability Assessment & Reporting",
    paragraph:
      "Supporting ESG disclosure, performance tracking, and SDG-aligned sustainability reporting for organizations and HEIs",
    image: SustainabilityImg,
  },
  {
    title: "Sustainable Environmental Management",
    paragraph:
      "EHM’s work in this domain spans nature-based wastewater treatment, ecosystem restoration, environmental audits, and sustainability monitoring",
    image: EnvManagementImg,
  },
  {
    title: "Climate Risk Intelligence",
    paragraph:
      "Using AI and analytics to assess risks, model impacts, and guide adaptation strategies.",
    image: ClimateRiskImg,
  },
  {
    title: "Geophysical Investigation",
    paragraph:
      "Conducting subsurface and hydrogeological surveys for resource mapping and environmental planning.",
    image: GeophysicalImg,
  },
  {
    title: "Urban Planning & Management",
    paragraph:
      "Designing data-driven, inclusive, and climate-resilient urban systems through smart planning, water restoration, and sustainable infrastructure",
    image: "/offering/4.webp",
  },
  {
    title: "Training & Capacity Building",
    paragraph:
      "Professional training on ESG, climate, AI, and geophysical applications.",
    image: "/offering/product5.webp",
  },
];

const ServiceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center p-8 
                 bg-gradient-to-b from-teal-50 via-teal-100/40 to-teal-50"
    >
      <ScrollRevealElements
        className="text-center mb-12 py-8"
        staggerAmount={0.6}
      >
        <SectionHeading>Offerings</SectionHeading>
      </ScrollRevealElements>

      <ScrollRevealElements
        className="flex flex-col justify-center items-center gap-8 w-full max-w-[1600px] mx-auto px-4"
        staggerAmount={0.3}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {data.map((item, index) => {
            const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={index}
                  className="relative bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden cursor-pointer h-80 transition-all duration-500 ease-in-out hover:shadow-3xl w-full"
                  style={{ backgroundImage: `url(${item.image})` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Subtle overlay that only covers bottom part */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1/2 transition-all duration-500 ease-in-out ${isHovered
                      ? "bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                      : "bg-gradient-to-t from-black/60 via-black/30 to-transparent"
                      }`}
                    style={{ zIndex: 0 }}
                  ></div>

                  {/* Card content always above any overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <h2
                      className={`font-bold mb-2 transition-all duration-500 ${isHovered ? "text-2xl" : "text-lg"
                        }`}
                      style={{
                        color: "#fff",
                        textShadow:
                          "0 3px 15px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.7)",
                        position: "relative",
                        zIndex: 20,
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className={`text-base text-gray-200 mb-4 transition-all duration-500 overflow-hidden ${isHovered
                        ? "opacity-100 max-h-24"
                        : "opacity-0 max-h-0"
                        }`}
                    >
                      {item.paragraph}
                    </p>
                    <Link to={
                      item.title === 'Sustainability Assessment & Reporting' ? '/offerings/sustainability-assessment-reporting' :
                        item.title === 'Geophysical Investigation' ? '/offerings/geophysical-investigation' :
                          '/offerings'
                    }>
                      <button
                        className={`bg-white text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-gray-100 transition-all duration-300 ${isHovered
                          ? "opacity-100 translate-y-0"
                          : "opacity-90 translate-y-1"
                          }`}
                      >
                        Explore
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>

                  {/* Top-right icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-all duration-300 z-20">
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "rotate-[-90deg]" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </ScrollRevealElements>
    </div>
  );
};

export default ServiceSection;
