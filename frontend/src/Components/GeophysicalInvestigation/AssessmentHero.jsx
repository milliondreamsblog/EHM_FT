import React from 'react';

export default function GeophysicalHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0f3460] overflow-hidden pt-20 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(0,255,157,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(52,152,219,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,255,157,0.1)_0%,transparent_70%)] animate-float"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(52,152,219,0.1)_0%,transparent_70%)] animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fadeInLeft space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(0,255,157,0.1)] border border-[rgba(0,255,157,0.3)] rounded-full">
              <span className="text-xl">🌍</span>
              <span className="text-[#00ff9d] text-xs font-semibold tracking-wide">ADVANCED SUBSURFACE INTELLIGENCE</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15]">
              <span className="bg-gradient-to-r from-[#00ff9d] via-[#3498db] to-[#9b59b6] bg-clip-text text-transparent">
                Geophysical Investigation
              </span>
            </h1>

            <p className="text-xl lg:text-2xl font-medium text-white/90 leading-tight">
              Delivering Precise, Data-Driven Insights for Smarter Subsurface Exploration
            </p>
            
            <p className="text-base text-white/70 leading-relaxed max-w-xl">
              We enable clients to reduce exploration uncertainty and make strategically informed investment decisions. Through advanced geophysical modeling and data integration, we translate complex datasets into actionable intelligence for mineral, hydrological, and infrastructure domains.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00ff9d] to-[#00d084] text-[#0a1628] font-bold text-lg rounded-xl shadow-[0_10px_40px_rgba(0,255,157,0.3)] hover:shadow-[0_15px_50px_rgba(0,255,157,0.5)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative text-2xl">💬</span>
                <span className="relative">Talk to Our Expert</span>
              </button>
              
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
                <span className="text-2xl">📊</span>
                <span>View Case Studies</span>
              </button>
            </div>
          </div>

          {/* Right Content - Interactive Seismic Wave Visualization */}
          <div className="animate-fadeInRight relative">
            <div className="relative">
              {/* Main Visualization Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                
                {/* Seismic Wave Graph */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="text-white font-bold text-2xl">Seismic Wave Analysis</div>
                      <div className="text-white/60 text-sm mt-1">Real-time subsurface mapping</div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#00ff9d]/20 rounded-full">
                      <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse"></div>
                      <span className="text-[#00ff9d] text-xs font-semibold">LIVE</span>
                    </div>
                  </div>

                  {/* Wave Visualization */}
                  <div className="relative h-64 bg-gradient-to-br from-[#0a1628]/50 to-[#1a2942]/50 rounded-2xl p-6 border border-white/10">
                    <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <g opacity="0.2">
                        <line x1="0" y1="50" x2="400" y2="50" stroke="#fff" strokeWidth="0.5" strokeDasharray="2,2"/>
                        <line x1="0" y1="100" x2="400" y2="100" stroke="#fff" strokeWidth="0.5" strokeDasharray="2,2"/>
                        <line x1="0" y1="150" x2="400" y2="150" stroke="#fff" strokeWidth="0.5" strokeDasharray="2,2"/>
                      </g>
                      
                      {/* P-Wave (Primary) */}
                      <path
                        d="M0,100 Q50,60 100,100 T200,100 T300,100 T400,100"
                        fill="none"
                        stroke="url(#gradient1)"
                        strokeWidth="3"
                        className="animate-draw"
                      />
                      
                      {/* S-Wave (Secondary) */}
                      <path
                        d="M0,100 Q50,130 100,100 T200,100 T300,100 T400,100"
                        fill="none"
                        stroke="url(#gradient2)"
                        strokeWidth="3"
                        className="animate-draw-delayed"
                      />
                      
                      {/* Surface Wave */}
                      <path
                        d="M0,100 Q40,80 80,100 Q120,120 160,100 Q200,80 240,100 Q280,120 320,100 Q360,80 400,100"
                        fill="none"
                        stroke="url(#gradient3)"
                        strokeWidth="2"
                        className="animate-draw-delayed-2"
                      />
                      
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00ff9d" stopOpacity="0.3"/>
                          <stop offset="50%" stopColor="#00ff9d" stopOpacity="1"/>
                          <stop offset="100%" stopColor="#00ff9d" stopOpacity="0.3"/>
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3498db" stopOpacity="0.3"/>
                          <stop offset="50%" stopColor="#3498db" stopOpacity="1"/>
                          <stop offset="100%" stopColor="#3498db" stopOpacity="0.3"/>
                        </linearGradient>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#9b59b6" stopOpacity="0.3"/>
                          <stop offset="50%" stopColor="#9b59b6" stopOpacity="1"/>
                          <stop offset="100%" stopColor="#9b59b6" stopOpacity="0.3"/>
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Wave Labels */}
                    <div className="absolute top-4 left-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#00ff9d]"></div>
                        <span className="text-white/80 text-xs">P-Wave</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#3498db]"></div>
                        <span className="text-white/80 text-xs">S-Wave</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#9b59b6]"></div>
                        <span className="text-white/80 text-xs">Surface Wave</span>
                      </div>
                    </div>
                  </div>

                  {/* Data Points */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-[#00ff9d]/20 to-[#00ff9d]/5 rounded-xl p-4 border border-[#00ff9d]/30">
                      <div className="text-[#00ff9d] text-2xl font-bold">5.2km/s</div>
                      <div className="text-white/60 text-xs mt-1">Velocity</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#3498db]/20 to-[#3498db]/5 rounded-xl p-4 border border-[#3498db]/30">
                      <div className="text-[#3498db] text-2xl font-bold">245m</div>
                      <div className="text-white/60 text-xs mt-1">Depth</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#9b59b6]/20 to-[#9b59b6]/5 rounded-xl p-4 border border-[#9b59b6]/30">
                      <div className="text-[#9b59b6] text-2xl font-bold">98.7%</div>
                      <div className="text-white/60 text-xs mt-1">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes draw {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }

        .animate-float {
          animation: float 20s infinite ease-in-out;
        }

        .animate-float-delayed {
          animation: float 20s infinite ease-in-out 5s;
        }

        .animate-draw {
          animation: draw 2s ease-out infinite;
        }

        .animate-draw-delayed {
          animation: draw 2s ease-out 0.3s infinite;
        }

        .animate-draw-delayed-2 {
          animation: draw 2s ease-out 0.6s infinite;
        }
      `}</style>
    </section>
  );
}