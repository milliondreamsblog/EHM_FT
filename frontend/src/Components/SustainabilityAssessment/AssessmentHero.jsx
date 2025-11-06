import React from "react";
import { ArrowRight, Calendar, PhoneCall } from "lucide-react";

const SustainabilityHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 py-24 px-6">
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[50rem] h-[50rem] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[50rem] h-[50rem] bg-gradient-to-br from-violet-500/20 to-purple-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-500/15 to-indigo-500/15 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* --- LEFT CONTENT --- */}
        <div>
          {/* Updated: centered & larger label */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full">
              <span className="text-lg md:text-xl font-bold text-cyan-300 tracking-wide text-center">
                SUSTAINABILITY ASSESSMENT & REPORTING
              </span>
            </div>
          </div>

          {/* Updated: reduced headline font size */}
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-snug">
            Empowering Institutions and Organizations Through{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              ESG Insight and Sustainability Intelligence
            </span>
          </h1>

          <p className="text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed">
            EHM enables higher education institutions and industries to assess,
            manage, and communicate sustainability performance through
            data-driven ESG reporting, dashboards, and compliance frameworks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="/contact" 
              className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Book a Demo
            </a>
            {/*<button className="flex items-center gap-2 px-6 py-4 border-2 border-cyan-400 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
              <PhoneCall className="w-5 h-5" />
              Talk to Our Expert
            </button>*/}
          </div>
        </div>

        {/* --- RIGHT VISUALS --- */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1000&q=80"
              alt="Campus and industrial sustainability site"
              className="object-cover w-full h-[480px]"
            />

            {/* Dashboard overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-slate-100 rounded-2xl shadow-xl p-5 w-[85%]">
              <h4 className="text-sm font-semibold text-slate-700 mb-3">
                ESG Performance Dashboard
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-emerald-600">92%</p>
                  <p className="text-xs text-slate-500">ESG Compliance</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">34%</p>
                  <p className="text-xs text-slate-500">Emission Reduction</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-violet-600">78%</p>
                  <p className="text-xs text-slate-500">Sustainability Score</p>
                </div>
              </div>
              <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 w-[78%] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityHero;