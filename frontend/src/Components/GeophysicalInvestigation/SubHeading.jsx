import React, { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-50px' // Add some margin to make it feel more natural
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-advance animation with progress - only starts when visible
  useEffect(() => {
    if (!isVisible) return; // Don't start animation until section is visible

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
  }, [activeIndex, isVisible]);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Mineral Exploration",
      description: "Geophysical methods are integral to modern mineral exploration, providing non-invasive and cost-effective solutions for mapping subsurface geology and identifying potential resource zones. At EHM, we recognize the essential role minerals play in national economic development and focus on delivering value-driven site assessments. By employing advanced geophysical techniques and proven methodologies, we systematically map and delineate prospective mineral zones, empowering our clients to make informed decisions and maximize the profitability of their mining projects through targeted exploration strategies.",
      imagePlaceholder: "/offering/MineralExploration.png"
    },
    {
      id: 2,
      number: "02",
      title: "Engineering and Geotechnical Services",
      description: "We provide comprehensive geophysical services including detailed characterization of foundations beneath critical structures, mapping of the bedrock surface, and nondestructive evaluation of engineered infrastructures such as bridges, buildings, and dams. Our expertise extends to pipeline leakage detection, cavity identification, utility mapping, and subsurface settlement studies. These services deliver precise subsurface insights essential for informed engineering decisions, risk mitigation, and ensuring structural safety and integrity.",
      imagePlaceholder: "/offering/EngineeringGeotechnicalservices.png"
    },
    {
      id: 3,
      number: "03",
      title: "Hydrological Investigation",
      description: "We specialize in identifying optimal sites for water-well drilling, detailed mapping of the water table, and locating critical fracture zones to enhance groundwater extraction. Our services include comprehensive groundwater quality assessments, as well as advanced mapping and monitoring of contamination plumes and artificial recharge zones. These offerings enable sustainable water resource management and ensure the protection and efficient utilization of subsurface water resources.",
      imagePlaceholder: "/offering/HydrologicalInvestigation.png"
    },
    {
      id: 4,
      number: "04",
      title: "Archaeological Investigation",
      description: "We offer specialized geophysical services for the detection and assessment of archaeological sites, supporting cultural resource management with precision and care. Our expertise includes locating historic and prehistoric graves, hearths, and burial pits, mapping building foundations, and identifying buried artifacts. Using advanced, non-invasive geophysical techniques such as ground-penetrating radar, magnetometry, and electrical resistivity imaging, we provide detailed subsurface insights that aid in site preservation, guide archaeological investigations, and minimize disturbance to culturally significant areas.",
      imagePlaceholder: "/offering/ArchaeologicalInvestigation.png"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
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
          <div className="relative lg:sticky lg:top-12 h-[500px] lg:h-[500px] -mt-4">
            {/* Floating Label - Moved to top */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-teal-100 z-20">
              <p className="text-xl font-bold text-teal-600 whitespace-nowrap">
                {services[activeIndex].title}
              </p>
            </div>

            <div className="relative w-full h-full mt-8">
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
                    
                    {/* Main Image */}
                    <div className="relative w-full h-full bg-gradient-to-br from-teal-50/50 via-cyan-50/50 to-blue-50/50 flex items-center justify-center overflow-hidden">
                      {/* Decorative grid pattern */}
                      <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: 'radial-gradient(circle, #0d9488 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                      }}></div>
                      
                      {/* Image container with better sizing */}
                      <div className="relative z-10 w-[85%] h-[85%] flex items-center justify-center">
                        <img 
                          src={service.imagePlaceholder} 
                          alt={service.title}
                          className="max-w-full max-h-full object-contain drop-shadow-2xl"
                        />
                      </div>
                      
                      {/* Enhanced decorative elements */}
                      <div className="absolute top-12 right-12 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-12 left-12 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl"></div>
                      
                      {/* Corner accents */}
                      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-teal-200/50 rounded-tl-2xl"></div>
                      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyan-200/50 rounded-br-2xl"></div>
                    </div>
                    
                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/5 via-transparent to-transparent pointer-events-none"></div>
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