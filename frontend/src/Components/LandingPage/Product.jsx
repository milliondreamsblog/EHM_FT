import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles, ArrowRight, Users, Target, Award, Link } from "lucide-react";

const products = [
  {
    id: 1,
    title: "EcoFlow Water Treatment",
    subtitle: "Nature-Based Purification",
    description: "Revolutionary water treatment using natural processes and advanced biotechnology for sustainable communities.",
    features: ["95% Efficiency", "Zero Chemicals", "Self-Sustaining", "Eco-Friendly"],
    image: "/product/1-1.png",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    stats: { efficiency: "95%", impact: "Clean" },
    color: "emerald"
  },
  {
    id: 2,
    title: "AquaPositive Campus",
    subtitle: "Smart Water Management",
    description: "Intelligent campus-wide water systems that create more water than they consume through smart recycling.",
    features: ["AI Monitoring", "Rainwater Harvest", "Smart Recycling", "IoT Sensors"],
    image: "/product/image01.jpg",
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    stats: { efficiency: "80%", impact: "Positive" },
    color: "blue"
  },
  {
    id: 3,
    title: "GreenMetrics Pro",
    subtitle: "Sustainability Analytics",
    description: "Advanced ESG reporting and analytics platform that transforms environmental data into actionable insights.",
    features: ["Real-time Data", "ESG Compliance", "Custom Reports", "AI Insights"],
    image: "/product/image02.jpg",
    gradient: "from-violet-400 via-purple-500 to-pink-600",
    stats: { efficiency: "100%", impact: "Smart" },
    color: "violet"
  }
];

const FloatingParticle = ({ delay = 0, size = "small" }) => {
  const sizeClasses = {
    small: "w-0.5 h-0.5",
    medium: "w-1 h-1",
    large: "w-1.5 h-1.5"
  };
  
  const colors = [
    "bg-green-700/30",
    "bg-green-800/35", 
    "bg-green-900/30",
    "bg-emerald-700/30",
    "bg-emerald-800/35",
    "bg-emerald-900/30",
    "bg-teal-700/30",
    "bg-teal-800/35",
    "bg-slate-700/25",
    "bg-slate-800/30"
  ];
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <div 
      className={`absolute ${sizeClasses[size]} ${randomColor} rounded-full animate-pulse`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${2 + Math.random() * 4}s`
      }}
    />
  );
};

const AnimatedParticle = ({ delay = 0 }) => {
  const darkColors = [
    "bg-green-800/50",
    "bg-green-900/45",
    "bg-emerald-800/50",
    "bg-emerald-900/45",
    "bg-slate-700/40"
  ];
  
  const randomColor = darkColors[Math.floor(Math.random() * darkColors.length)];
  
  return (
    <div 
      className={`absolute w-0.5 h-0.5 ${randomColor} rounded-full`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    />
  );
};

const DarkParticle = ({ delay = 0 }) => {
  const sizes = ["w-1 h-1", "w-1.5 h-1.5", "w-2 h-2"];
  const darkestColors = [
    "bg-green-900/40",
    "bg-emerald-900/40", 
    "bg-slate-800/35",
    "bg-gray-800/35"
  ];
  
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  const randomColor = darkestColors[Math.floor(Math.random() * darkestColors.length)];
  
  return (
    <div 
      className={`absolute ${randomSize} ${randomColor} rounded-full`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `slowFloat ${5 + Math.random() * 6}s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    />
  );
};

const StatCard = ({ icon: Icon, label, value, delay = 0 }) => (
  <div 
    className="group bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-emerald-200/50 hover:border-emerald-300/70 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-4">
      <div className="p-3 bg-emerald-100/80 rounded-xl group-hover:bg-emerald-200/80 transition-all duration-300">
        <Icon size={24} className="text-emerald-600" />
      </div>
      <div>
        <div className="text-2xl font-bold text-emerald-800">{value}</div>
        <div className="text-emerald-600/80 text-sm">{label}</div>
      </div>
    </div>
  </div>
);

const FeatureTag = ({ feature, delay = 0 }) => (
  <div 
    className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-emerald-800 text-sm font-medium border border-emerald-200/60 hover:bg-white/80 hover:border-emerald-300/80 transition-all duration-300 cursor-pointer hover:scale-105 shadow-sm"
    style={{ animationDelay: `${delay}ms` }}
  >
    {feature}
  </div>
);

export default function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlay]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden relative">

      <div className="fixed inset-0 opacity-70">
        {[...Array(50)].map((_, i) => (
          <FloatingParticle 
            key={`particle-${i}`} 
            delay={i * 0.1} 
            size={i % 3 === 0 ? "large" : i % 2 === 0 ? "medium" : "small"} 
          />
        ))}
      </div>


      <div className="fixed inset-0 opacity-40">
        {[...Array(30)].map((_, i) => (
          <AnimatedParticle key={`anim-${i}`} delay={i * 0.2} />
        ))}
      </div>

     
      <div className="fixed inset-0 opacity-50">
        {[...Array(20)].map((_, i) => (
          <DarkParticle key={`dark-${i}`} delay={i * 0.3} />
        ))}
      </div>

     
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-12px) rotate(90deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
          75% { transform: translateY(-12px) rotate(270deg); }
        }
        
        @keyframes slowFloat {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-8px) translateX(4px) rotate(45deg); }
          50% { transform: translateY(-15px) translateX(-4px) rotate(90deg); }
          75% { transform: translateY(-8px) translateX(2px) rotate(135deg); }
        }
      `}</style>

    
      <div className={`relative z-10 text-center pt-20 pb-16 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="text-emerald-500 animate-pulse" size={32} />
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Our Products
          </h1>
          <Sparkles className="text-teal-500 animate-pulse" size={32} />
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-8"></div>
       
      </div>

    
      <div className="relative max-w-7xl mx-auto px-4 pb-20 z-10">
        <div 
          className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
          onMouseMove={handleMouseMove}
        >
          
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
              style={{
                transform: index === currentIndex ? 
                  `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)` : 
                  'translate(0, 0)'
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              {/* Removed the gradient overlay completely - images are now clearly visible */}
            </div>
          ))}

          {/* Content overlay with dark background for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

     
          <div className="absolute inset-0 flex items-center justify-between p-8 md:p-16">
          
            <div className="flex-1 max-w-2xl">
              <div className={`transform transition-all duration-700 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="text-white/80 text-lg font-medium mb-2 tracking-wide">
                  {currentProduct.subtitle}
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {currentProduct.title}
                </h2>
                <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md">
                  {currentProduct.description}
                </p>

              
                <div className="flex flex-wrap gap-3 mb-8">
                  {currentProduct.features.map((feature, index) => (
                    <div 
                      key={feature}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>    
          </div>
            </div>

         
            <div className="hidden lg:block">
              <div className="space-y-4">
                <div className="group bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-all duration-300">
                      <Target size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{currentProduct.stats.efficiency}</div>
                      <div className="text-white/80 text-sm">Efficiency</div>
                    </div>
                  </div>
                </div>
                <div className="group bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-all duration-300">
                      <Award size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{currentProduct.stats.impact}</div>
                      <div className="text-white/80 text-sm">Impact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
         
            <div className="flex gap-3">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

         
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-3 bg-black/30 backdrop-blur-sm rounded-full border border-white/30 hover:bg-black/50 transition-all duration-300"
            >
              {isAutoPlay ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
            </button>
          </div>

       
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 p-4 bg-black/30 backdrop-blur-sm rounded-full border border-white/30 hover:bg-black/50 transition-all duration-300 group"
          >
            <ChevronLeft size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 p-4 bg-black/30 backdrop-blur-sm rounded-full border border-white/30 hover:bg-black/50 transition-all duration-300 group"
          >
            <ChevronRight size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

     
        <div className="mt-8 bg-emerald-200/60 rounded-full h-2 overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / products.length) * 100}%` }}
          />
        </div>

      
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              onClick={() => goToSlide(index)}
              className={`relative h-64 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                index === currentIndex ? 'ring-4 ring-emerald-400 ring-opacity-50' : ''
              }`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white font-bold text-xl mb-2">{product.title}</h3>
                <p className="text-white/80 text-sm">{product.subtitle}</p>
              </div>
              {index === currentIndex && (
                <div className="absolute top-4 right-4 p-2 bg-emerald-400 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}