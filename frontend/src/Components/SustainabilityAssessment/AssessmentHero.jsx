import React from "react";
import { Calendar, PhoneCall } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const SustainabilityHero = () => {
  const navigate = useNavigate();

  const handleViewCaseStudies = () => {
    navigate('/resources/casestudies');
  };
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0f3460] overflow-hidden pt-20 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.1)_0%,transparent_70%)] animate-float"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_70%)] animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fadeInLeft space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.3)] rounded-full">
              <span className="text-xl">🌱</span>
              <span className="text-cyan-400 text-xs font-semibold tracking-wide">ESG Insight and Sustainability Intelligence</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15]">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Sustainability Assessment & Reporting
              </span>
            </h1>

            <p className="text-xl lg:text-2xl font-medium text-white/90 leading-tight">
              Empowering Institutions and Organizations Through Data-Driven Sustainability
            </p>
            
            <p className="text-base text-white/70 leading-relaxed max-w-xl">
              EHM enables higher education institutions and industries to assess, manage, and communicate sustainability performance through data-driven ESG reporting, dashboards, and compliance frameworks.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/contact" 
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-[0_10px_40px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_50px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <Calendar className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Book a Demo</span>
              </a>
              
<button 
  onClick={handleViewCaseStudies}
  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
>
  <span className="text-2xl">📊</span>
  <span>View Case Studies</span>
</button>
            </div>
          </div>

          {/* Right Content - Dashboard Visualization */}
          <div className="animate-fadeInRight relative">
            <div className="relative">
              {/* Main Visualization Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                
                {/* ESG Dashboard */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="text-emerald-400 font-bold text-2xl">ESG Performance Dashboard</div>
                      <div className="text-white/60 text-sm mt-1">Real-time sustainability metrics</div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-400/20 rounded-full">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-cyan-400 text-xs font-semibold">LIVE</span>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1000&q=80"
                      alt="Campus and industrial sustainability"
                      className="object-cover w-full h-full opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent"></div>
                  </div>

                  {/* Data Points */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-xl p-4 border border-emerald-500/30">
                      <div className="text-emerald-400 text-2xl font-bold">92%</div>
                      <div className="text-white/60 text-xs mt-1">ESG Compliance</div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-xl p-4 border border-cyan-500/30">
                      <div className="text-cyan-400 text-2xl font-bold">34%</div>
                      <div className="text-white/60 text-xs mt-1">Emission Reduction</div>
                    </div>
                    <div className="bg-gradient-to-br from-violet-500/20 to-violet-500/5 rounded-xl p-4 border border-violet-500/30">
                      <div className="text-violet-400 text-2xl font-bold">78%</div>
                      <div className="text-white/60 text-xs mt-1">Sustainability Score</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-white/60">
                      <span>Overall Progress</span>
                      <span>78%</span>
                    </div>
                    <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: '78%' }}
                      ></div>
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
      `}</style>
    </section>
  );
};

export default SustainabilityHero;