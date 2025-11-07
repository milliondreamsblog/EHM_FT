import React, { useState } from 'react';

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [progress, setProgress] = useState(0);

  // Auto-advance animation with progress
  React.useEffect(() => {
    const duration = 5000; // 5 seconds per section
    const intervalTime = 50; // Update every 50ms for smooth animation
    
    setProgress(0); // Reset progress when section changes
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (intervalTime / duration) * 100;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, intervalTime);

    const sectionInterval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % 4);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(sectionInterval);
    };
  }, [activeIndex]);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Mineral Exploration",
      description: "Geophysical methods are integral to modern mineral exploration, providing non-invasive and cost-effective solutions for mapping subsurface geology and identifying potential resource zones. At EHM, we recognize the essential role minerals play in national economic development and focus on delivering value-driven site assessments. By employing advanced geophysical techniques and proven methodologies, we systematically map and delineate prospective mineral zones, empowering our clients to make informed decisions and maximize the profitability of their mining projects through targeted exploration strategies.",
      imagePlaceholder: "Mineral Exploration Image"
    },
    {
      id: 2,
      number: "02",
      title: "Engineering and Geotechnical Services",
      description: "We provide comprehensive geophysical services including detailed characterization of foundations beneath critical structures, mapping of the bedrock surface, and nondestructive evaluation of engineered infrastructures such as bridges, buildings, and dams. Our expertise extends to pipeline leakage detection, cavity identification, utility mapping, and subsurface settlement studies. These services deliver precise subsurface insights essential for informed engineering decisions, risk mitigation, and ensuring structural safety and integrity.",
      imagePlaceholder: "Engineering Services Image"
    },
    {
      id: 3,
      number: "03",
      title: "Hydrological Investigation",
      description: "We specialize in identifying optimal sites for water-well drilling, detailed mapping of the water table, and locating critical fracture zones to enhance groundwater extraction. Our services include comprehensive groundwater quality assessments, as well as advanced mapping and monitoring of contamination plumes and artificial recharge zones. These offerings enable sustainable water resource management and ensure the protection and efficient utilization of subsurface water resources.",
      imagePlaceholder: "Hydrological Investigation Image"
    },
    {
      id: 4,
      number: "04",
      title: "Archaeological Investigation",
      description: "We offer specialized geophysical services for the detection and assessment of archaeological sites, supporting cultural resource management with precision and care. Our expertise includes locating historic and prehistoric graves, hearths, and burial pits, mapping building foundations, and identifying buried artifacts. Using advanced, non-invasive geophysical techniques such as ground-penetrating radar, magnetometry, and electrical resistivity imaging, we provide detailed subsurface insights that aid in site preservation, guide archaeological investigations, and minimize disturbance to culturally significant areas.",
      imagePlaceholder: "Archaeological Investigation Image"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Panel - Content */}
          <div className="space-y-8">
            {/* Service List */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer transition-all duration-500 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg transition-all duration-500 ${
                        activeIndex === index 
                          ? 'bg-teal-600 text-white scale-110' 
                          : 'bg-teal-100 text-teal-600'
                      }`}>
                        {service.number}
                      </span>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${
                        activeIndex === index ? 'text-teal-600' : 'text-slate-700'
                      }`}>
                        {service.title}
                      </h3>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-500 ${
                          activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-slate-600 leading-relaxed pr-4">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Line */}
                  <div className="ml-16 mt-4">
                    <div className="h-1 bg-teal-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-100 ${
                          activeIndex === index ? '' : 'w-0'
                        }`}
                        style={{
                          width: activeIndex === index ? `${progress}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Image Display */}
          <div className="relative lg:sticky lg:top-24 h-[500px] lg:h-[600px]">
            <div className="relative w-full h-full">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    activeIndex === index 
                      ? 'opacity-100 scale-100 rotate-0' 
                      : activeIndex > index
                      ? 'opacity-0 scale-95 -rotate-3 translate-x-8'
                      : 'opacity-0 scale-95 rotate-3 -translate-x-8'
                  }`}
                  style={{
                    transitionDelay: activeIndex === index ? '100ms' : '0ms'
                  }}
                >
                  {/* Image Container with Fancy Border */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400 opacity-20 blur-xl"></div>
                    
                    {/* Main Image Placeholder */}
                    <div className="relative w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                      {/* Placeholder Content */}
                      <div className="text-center space-y-4 p-8">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-3xl font-bold text-white">{service.number}</span>
                        </div>
                        <p className="text-slate-500 font-medium text-lg">
                          {service.imagePlaceholder}
                        </p>
                        <p className="text-slate-400 text-sm max-w-xs mx-auto">
                          Replace with actual service image
                        </p>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-8 right-8 w-32 h-32 bg-teal-300/20 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-8 left-8 w-40 h-40 bg-cyan-300/20 rounded-full blur-2xl"></div>
                    </div>
                    
                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Floating Label */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-teal-100">
                    <p className="text-sm font-semibold text-teal-600 whitespace-nowrap">
                      {service.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeIndex === index 
                      ? 'w-8 h-3 bg-teal-600' 
                      : 'w-3 h-3 bg-teal-200 hover:bg-teal-300'
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesSection;