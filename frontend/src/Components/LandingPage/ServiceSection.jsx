import { Sparkles } from "lucide-react";
import { useState } from "react";
// Assuming you have a Sparkles component, e.g., from an icon library
// import { Sparkles } from 'lucide-react'; // or similar

const data = [
  {
    title: "Sustainability Assessment & Reporting",
    paragraph: "EHM provides comprehensive sustainability assessments to evaluate an organization’s environmental, social and governance (ESG) performance. Our reporting solutions, customised Sustainability Dashboard help businesses ensure regulatory compliance, enhance transparency and align with global sustainability standards.",
    image: "/offering/img2.png"
  },
  {
    title: "Sustainable Environmental Management",
    paragraph: "EHM provides sustainable environmental solutions to enhanceresource efficiency, promote environmental stewardship and support sustainable practices across various sectors. Our approach integrates cutting-edge technologies and nature-based solutions (NBS) to ensure long-term environmental and economic benefits.",
    image: "/offering/4.png"
  },
  {
    title: "Geophysical Investigation",
    paragraph: "EHM specialises in geophysical investigations for subsurface exploration, leveraging well established geophysical methods and state of the art instrumentation. Depending upon the specific requirement of projects and site conditions, we integrate various methods and industry standard tools to deliver accurate and data-driven insights.",
    image: "/offering/img4.png"
  },
  {
    title: "Urban Planning & Management",
    paragraph: "EHM provides strategic solutions to develop sustainable, resilient and well-planned urban spaces. With a data-driven, interdisciplinary approach. EHM helps cities, transition toward circular, resource-efficient and climate-resilient urban centers, aligning national urban development frameworks.",
    image: "/offering/img3.png"
  },
   {
    title: "Urban Planning & Management",
    paragraph: "EHM provides strategic solutions to develop sustainable, resilient and well-planned urban spaces. With a data-driven, interdisciplinary approach. EHM helps cities, transition toward circular, resource-efficient and climate-resilient urban centers, aligning national urban development frameworks.",
    image: "/offering/img3.png"
  }
  
];




const ServiceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  


  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center  p-8">
   
      <div className="text-center mb-12 py-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Sparkles className="text-teal-500 animate-pulse" size={40} />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
           Offerings
          </h1>
          <Sparkles className="text-emerald-500 animate-pulse" size={40} />
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
      </div>
   
      <div className="flex gap-4 max-w-7xl mr-16 ">
        {data.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <div
              key={index}
              className={`relative bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out h-80 flex-shrink-0
                ${isHovered ? "w-80" : isOtherHovered ? "w-52" : "w-64"}
                hover:shadow-3xl`}
              style={{ backgroundImage: `url(${item.image})` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 transition-all duration-500 ease-in-out
                  ${isHovered ? "bg-gradient-to-t from-black/80 via-black/50 to-transparent" : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"}`}
              ></div>

              <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-all duration-300 z-10">
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "rotate-[-90deg]" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h2 className={`font-bold text-white mb-2 transition-all duration-500 ${
                  isHovered ? "text-2xl" : "text-lg"
                }`}>
                  {item.title}
                </h2>

                <p className={`text-sm text-gray-200 mb-4 transition-all duration-500 overflow-hidden ${
                  isHovered ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
                }`}>
                  {item.paragraph}
                </p>

                <button
                  className={`bg-white text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-gray-100 transition-all duration-300 ${
                    isHovered ? "opacity-100 translate-y-0" : "opacity-90 translate-y-1"
                  }`}
                >
                  Explore
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSection;