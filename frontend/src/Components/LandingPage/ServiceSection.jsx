import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
  const [activeScreen, setActiveScreen] = useState(null);
  const [currentDataIndex, setCurrentDataIndex] = useState(0);

  
  const platformsConfig = [
    {
      brandName: "ehmconsultancy",
      brandColor: "teal",
      title: " Sustainability Assessment & Reporting",
      displayMode: "imageOnly",
      mainVisual: {
        src: "/offering/8.png",
        alt: "Agricultural Risk Intelligence Platform"
      },
      description: " EHM provides comprehensive sustainability assessments to evaluate an organization’s environmental, social and governance (ESG) performance. Our reporting solutions, customised Sustainability Dashboard help businesses ensure regulatory compliance, enhance transparency and align with global sustainability standards.",
     
    },
    {
      brandName: "ehmconsultancy",
      brandColor: "blue",
      title: " Sustainable Environmental Management",
      displayMode: "imageOnly",
      mainVisual: {
        src: "/offering/4.png",
        alt: "Urban Climate Resilience Platform"
      },
      description: "EHM provides sustainable environmental solutions to enhanceresource efficiency, promote environmental stewardship and support sustainable practices across various sectors. Our approach integrates cutting-edge technologies and nature-based solutions (NBS) to ensure long-term environmental and economic benefits.",
      
    },
    {
      brandName: "ehmconsultancy",
      brandColor: "orange",
      title: " Geophysical Investigation",
      displayMode: "imageOnly",
      mainVisual: {
        src: "/offering/5.jpg",
        alt: "Energy Management Platform"
      },
      description: " EHM specialises in geophysical investigations for subsurface exploration, leveraging well established geophysical methods and state of the art instrumentation. Depending upon the specific requirement of projects and site conditions, we integrate various methods and industry standard tools to deliver accurate and data-driven insights.",

    },
    {
      brandName: "ehmconsultancy",
      brandColor: "cyan",
      title: "Urban Planning & Management",
      displayMode: "imageOnly",
      mainVisual: {
        src: "/offering/6.png",
        alt: "Water Management Platform"
      },
      description: " EHM provides strategic solutions to develop sustainable, resilient and well-planned urban spaces. With a data-driven, interdisciplinary approach. EHM helps cities, transition toward circular, resource-efficient and climate-resilient urban centers, aligning national urban development frameworks.",
      
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
     
      setCurrentDataIndex(prev => (prev + 1) % platformsConfig.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [platformsConfig.length]);

  const getColorClasses = (color) => ({
    primary: `bg-${color}-600`,
    primaryHover: `hover:bg-${color}-700`,
    text: `text-${color}-600`,
    textLight: `text-${color}-100`,
    border: `border-${color}-600`,
    borderHover: `hover:border-${color}-700`
  });

  const renderPlatformCard = (config, index) => {
    const colors = getColorClasses(config.brandColor);

    return (
      <div
        key={index}
       >
        <div className="bg-gray-100 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gray-200 px-4 py-3 flex items-center space-x-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 bg-white rounded px-3 py-1 mx-4">
              <span className="text-xs text-gray-500">https://</span>
              <span className="text-xs text-gray-700">{config.brandName.toLowerCase()}.com</span>
            </div>
            <div className="w-4 h-4 bg-gray-400 rounded"></div>
          </div>

          <div className="relative bg-black min-h-[400px] flex items-center justify-center overflow-hidden">
            <img
              src={config.mainVisual.src}
              alt={config.mainVisual.alt}
              className="w-full h-full object-cover "
              onError={(e) => {
                e.target.src =
                  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="%23000000"/><text x="400" y="200" text-anchor="middle" dy="0.3em" font-family="Arial, sans-serif" font-size="24" fill="%23ffffff">PUT YOUR IMAGE HERE</text></svg>';
              }}
            />

           
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            {config.title}
          </h2>
          <p className="text-gray-600 mb-6 font-sans leading-relaxed">
            {config.description}
          </p>
          <div className="flex space-x-4">
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
              <Link to="/offerings">Learn more</Link>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Fixed 2 cards per row layout
  const getGridClasses = () => {
    return "grid-cols-1 lg:grid-cols-2";
  };

  return (
    <div className=" min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">

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

        <div className={`grid ${getGridClasses()} gap-12`}>
          {platformsConfig.map((config, index) => renderPlatformCard(config, index))}
        </div>

        
      </div>
    </div>
  );
};

export default ServiceSection;