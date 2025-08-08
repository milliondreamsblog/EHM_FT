import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen w-full relative pt-20 flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 top-0">
        <img 
          src="/im.jpg" 
          alt="Office workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/70 via-green-50/60 to-teal-50/70"></div>
      </div>
      
      {/* Animated birds - positioned with safe margins */}
      {[1, 2, 3, 4].map((bird) => (
        <div 
          key={bird}
          className={`absolute text-emerald-500/70 ${bird % 2 === 0 ? 'animate-float-reverse' : 'animate-float'}`}
          style={{
            top: `${20 + bird * 15}%`,  // Adjusted to start below navbar
            left: `${bird * 20}%`,
            fontSize: `${1.5 + bird * 0.2}rem`,
            animationDuration: `${15 + bird * 3}s`
          }}
        >
          <svg width="1em" height="1em" viewBox="0 0 24 16">
            <path 
              d="M2 8 C6 4, 10 4, 12 8 C14 4, 18 4, 22 8" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
      
      {/* Content container - with top padding to avoid navbar */}
      <div className="relative z-10 max-w-2xl mx-auto text-center px-6 py-16 space-y-6 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 shadow-lg mt-12">
        <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-white/30 mb-6">
          <span className="text-sm font-medium text-emerald-600 tracking-wider">CONTACT US</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          Let's Create <span className="text-emerald-600">Together</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Reach out to start a conversation about your vision. 
          <br className="hidden md:block" /> Our team is ready to bring ideas to life.
        </p>
      </div>
      
      {/* Decorative scroll indicator - positioned safely */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce w-8 h-8 border-r-2 border-b-2 border-emerald-500/80 rotate-45"></div>
      </div>
      
      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
          25% { transform: translateX(5vw) translateY(-3vh) rotate(2deg); }
          50% { transform: translateX(10vw) translateY(0) rotate(0deg); }
          75% { transform: translateX(5vw) translateY(3vh) rotate(-2deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
          25% { transform: translateX(-5vw) translateY(-3vh) rotate(-2deg); }
          50% { transform: translateX(-10vw) translateY(0) rotate(0deg); }
          75% { transform: translateX(-5vw) translateY(3vh) rotate(2deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-float-reverse {
          animation: float-reverse linear infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-10px) rotate(45deg); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;