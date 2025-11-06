import React, { useState } from 'react';

export default function GeophysicalMethodsSection() {
  const [hoveredMethod, setHoveredMethod] = useState(null);

  const methods = [
    {
      id: 0,
      title: "Resistivity Survey",
      icon: "⚡",
      color: "#00ff9d",
      gradient: "from-[#00ff9d] to-[#00d084]",
      description: "Resistivity method used to determine the subsurface's resistivity distribution by making measurements on the ground surface. Resistivity data are rapidly collected with an automated multi-electrode resistivity meter. This method is widely applied in groundwater exploration, environmental site assessments, mineral prospecting, engineering investigations, and archaeological studies. By mapping variations in subsurface resistivity, it helps identify features such as aquifers, contaminated zones, bedrock depth, fractures, and buried objects, making it a valuable tool for non-invasive and detailed subsurface characterization."
    },
    {
      id: 1,
      title: "Gravity Survey",
      icon: "🌍",
      color: "#3498db",
      gradient: "from-[#3498db] to-[#2980b9]",
      description: "Gravity surveys, which measure subtle variations in the Earth's gravitational field, are widely used to map subsurface structures and identify areas where local masses differ in density from surrounding formations. Their main applications include exploring for mineral and hydrocarbon deposits, locating geologic features such as faults, cavities, or salt domes, and determining the thickness or characteristics of sedimentary basins. Additionally, gravity surveys assist in groundwater investigations, environmental studies, and civil engineering projects by providing crucial information about subsurface density variations, helping to guide exploration and inform construction or resource management decisions."
    },
    {
      id: 2,
      title: "Magnetic Survey",
      icon: "🧲",
      color: "#9b59b6",
      gradient: "from-[#9b59b6] to-[#8e44ad]",
      description: "Magnetic surveys are widely used in geophysics to measure variations in the Earth's magnetic field that arise from subsurface geology. They play a crucial role in mineral exploration by detecting deposits of iron ore and other minerals with distinct magnetic properties. In archaeology, magnetic surveys help locate buried artifacts, structures, or ancient features without excavation. This technique is also applied in environmental studies for mapping contaminated land, locating buried tanks or utilities, and in oil and gas exploration for basin and fault mapping. Overall, magnetic surveys provide a rapid, non-invasive approach to understanding subsurface conditions and guiding resource, environmental, or cultural investigations."
    },
    {
      id: 3,
      title: "GPR Survey",
      icon: "📡",
      color: "#e74c3c",
      gradient: "from-[#e74c3c] to-[#c0392b]",
      description: "Ground Penetrating Radar (GPR) is a powerful geophysical method that uses pulses of electromagnetic waves to image the subsurface, offering a quick, nonintrusive means of surveying beneath the ground. It is extensively used to locate and map underground utilities such as pipes and cables, assess the integrity and thickness of pavements and concrete structures, detect voids, fractures, or buried objects, and evaluate environmental or archaeological sites for hidden features. GPR's versatility and high-resolution capabilities make it invaluable for civil engineering, construction planning, forensic investigations, and environmental assessments where detailed, nondestructive subsurface information is required."
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#ccfbf1] via-[#99f6e4] to-[#5eead4] overflow-hidden">
      {/* Top Fade to White */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none"></div>
      
      {/* Bottom Fade to White */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>

      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ccfbf1]/50 via-[#99f6e4]/30 to-[#d1fae5]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#5eead4]/40 via-transparent to-[#a7f3d0]/60"></div>
        
        {/* Floating Orbs */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-overlay"
              style={{
                width: Math.random() * 300 + 100 + 'px',
                height: Math.random() * 300 + 100 + 'px',
                background: `radial-gradient(circle, ${methods[i % 4].color}50 0%, transparent 70%)`,
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 20 + 15}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Radial Gradient Spots */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#d1fae5]/20 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-[#ccfbf1]/15 via-transparent to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="text-gray-900">Geophysical </span>
            <span className="bg-gradient-to-r from-[#dc2626] via-[#ef4444] to-[#f87171] bg-clip-text text-transparent">Survey </span>
            <span className="text-gray-900">Methods</span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#dc2626] to-transparent rounded-full"></div>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="space-y-32">
          {methods.map((method, index) => (
            <div
              key={method.id}
              className="relative"
              onMouseEnter={() => setHoveredMethod(index)}
              onMouseLeave={() => setHoveredMethod(null)}
            >
              {/* Connecting Line */}
              {index !== methods.length - 1 && (
                <div 
                  className="absolute left-1/2 top-full h-32 w-0.5 -translate-x-1/2 bg-gradient-to-b from-gray-400/40 to-transparent"
                  style={{ top: '100%' }}
                />
              )}

              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}>
                  {/* Method Number */}
                  <div className="flex items-center gap-4">
                    <div 
                      className="text-8xl font-black bg-clip-text text-transparent opacity-60"
                      style={{ 
                        backgroundImage: `linear-gradient(135deg, ${method.color} 0%, ${method.color}40 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 4px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      0{index + 1}
                    </div>
                  </div>

                  {/* Title with Icon */}
                  <div className="flex items-center gap-4 group">
                    <div 
                      className="text-5xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                      style={{ filter: `drop-shadow(0 0 20px ${method.color}60)` }}
                    >
                      {method.icon}
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">
                      {method.title}
                    </h3>
                  </div>

                  {/* Accent Line */}
                  <div 
                    className="h-1 w-24 rounded-full transition-all duration-500"
                    style={{ 
                      background: `linear-gradient(90deg, ${method.color} 0%, transparent 100%)`,
                      width: hoveredMethod === index ? '200px' : '96px'
                    }}
                  />

                  {/* Description */}
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {method.description}
                  </p>
                </div>

                {/* Visual Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                  <div className="relative aspect-square">
                    {/* Rotating Border */}
                    <div 
                      className="absolute inset-0 rounded-full opacity-50 transition-all duration-1000"
                      style={{
                        background: `conic-gradient(from 0deg, ${method.color} 0%, transparent 50%, ${method.color} 100%)`,
                        transform: hoveredMethod === index ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                        filter: 'blur(20px)'
                      }}
                    />

                    {/* Inner Circle */}
                    <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-100/90 to-gray-200/80 backdrop-blur-xl border-2 border-gray-300/60 flex items-center justify-center shadow-2xl">
                      {/* Pulsing Rings */}
                      <div 
                        className="absolute inset-0 rounded-full border-2 animate-ping"
                        style={{ 
                          borderColor: `${method.color}60`,
                          animationDuration: '3s'
                        }}
                      />
                      <div 
                        className="absolute inset-4 rounded-full border-2 animate-ping"
                        style={{ 
                          borderColor: `${method.color}40`,
                          animationDuration: '3s',
                          animationDelay: '1s'
                        }}
                      />
                      
                      {/* Center Icon */}
                      <div 
                        className="text-9xl transform transition-all duration-500"
                        style={{
                          filter: `drop-shadow(0 0 40px ${method.color})`,
                          transform: hoveredMethod === index ? 'scale(1.2) rotate(360deg)' : 'scale(1) rotate(0deg)'
                        }}
                      >
                        {method.icon}
                      </div>
                    </div>

                    {/* Orbiting Dots */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: method.color,
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${i * 45}deg) translateX(180px) translateY(-50%)`,
                          boxShadow: `0 0 20px ${method.color}`,
                          animation: `orbit 10s linear infinite`,
                          animationDelay: `${i * 0.3}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -30px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(180px) translateY(-50%);
          }
          to {
            transform: rotate(360deg) translateX(180px) translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
}