import React, { useEffect, useRef } from "react";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";

const FEATURES = [
  { label: "AI Sustainability BOT", color: "#00ff9d" },
  { label: "GHG Accounting", color: "#3498db" },
  { label: "UNSDG Matrices", color: "#e4d00a" },
  { label: "Centralized Tracking", color: "#00ff9d" },
  { label: "API Integration", color: "#3498db" },
  { label: "MFA Security", color: "#e4d00a" },
];

const SDG_PILLS = [
  "SDG 3 — Good Health",
  "SDG 4 — Quality Education",
  "SDG 7 — Clean Energy",
  "SDG 13 — Climate Action",
  "SDG 17 — Partnerships",
];

const StarcHero = () => {
  const navigate = useNavigate();
  const pieRef = useRef(null);
  const barRef = useRef(null);
  const pieChart = useRef(null);
  const barChart = useRef(null);

  useEffect(() => {
    if (pieRef.current) {
      pieChart.current?.destroy();
      pieChart.current = new Chart(pieRef.current, {
        type: "doughnut",
        data: {
          labels: ["Rooftop Solar On-grid", "Solar Street Lights", "Biogas Generation", "Non-Renewable"],
          datasets: [
            {
              data: [40, 36, 24, 60],
              backgroundColor: ["#00ff9d", "#e4d00a", "#3498db", "#9b59b6"],
              borderColor: "rgba(255,255,255,0.05)",
              borderWidth: 2,
              hoverBorderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "62%",
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: { label: (c) => " " + c.label + ": " + c.parsed + "%" },
            },
          },
        },
      });
    }

    if (barRef.current) {
      barChart.current?.destroy();
      barChart.current = new Chart(barRef.current, {
        type: "bar",
        data: {
          labels: ["2022-23", "2023-24", "2024-25"],
          datasets: [
            {
              label: "Scope 1",
              data: [180, 120, 60.86],
              backgroundColor: "rgba(52,152,219,0.85)",
              borderRadius: 4,
            },
            {
              label: "Scope 2",
              data: [3400, 1800, 1285.55],
              backgroundColor: "rgba(228,208,10,0.85)",
              borderRadius: 4,
            },
            {
              label: "Total tCO₂e",
              data: [3580, 1920, 1346.41],
              backgroundColor: "rgba(0,255,157,0.85)",
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: {
              ticks: { color: "rgba(255,255,255,0.5)", font: { size: 10 } },
              grid: { color: "rgba(255,255,255,0.05)" },
              border: { color: "rgba(255,255,255,0.05)" },
            },
            y: {
              ticks: {
                color: "rgba(255,255,255,0.5)",
                font: { size: 10 },
                callback: (v) => v + " t",
              },
              grid: { color: "rgba(255,255,255,0.05)" },
              border: { color: "rgba(255,255,255,0.05)" },
            },
          },
        },
      });
    }

    return () => {
      pieChart.current?.destroy();
      barChart.current?.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0f3460] overflow-hidden pt-20 py-16">

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(0,255,157,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(52,152,219,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,255,157,0.07)_0%,transparent_70%)] animate-float"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(52,152,219,0.07)_0%,transparent_70%)] animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT CONTENT ── */}
          <div className="space-y-6 animate-fadeInLeft">

            {/* ESG badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{ backgroundColor: "rgba(0,255,157,0.1)", borderColor: "rgba(0,255,157,0.3)" }}>
              <span className="text-xs font-semibold tracking-wide uppercase text-[#00ff9d]">
                🌱 ESG Insight and Sustainability Intelligence
              </span>
            </div>

            {/* Brand wordmark */}
            <div className="mb-2">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-white tracking-tight">S</span>
                <span className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#00ff9d] via-[#3498db] to-[#9b59b6] bg-clip-text text-transparent">TARC</span>
              </div>
              <p className="text-[10px] font-semibold tracking-wider text-white/40 uppercase mt-1">
                Sustainability Tracking, Assessment & Reporting for Campus
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold leading-tight text-white max-w-2xl">
              Empowering Institutions and Organizations Through Data-Driven Sustainability
            </h1>

            {/* Description */}
            <p className="text-base text-white/60 leading-relaxed max-w-xl">
              STARC empowers higher education institutions and industries to assess, manage, and communicate sustainability performance through data-driven ESG reporting, dashboards, and compliance frameworks.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {FEATURES.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderColor: "rgba(255,255,255,0.1)"
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: f.color }} />
                  {f.label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => window.location.href = "/contact/starc"}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00ff9d] to-[#00d084] text-[#0a1628] font-bold text-lg rounded-xl shadow-[0_10px_40px_rgba(0,255,157,0.3)] hover:shadow-[0_15px_50px_rgba(0,255,157,0.5)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <Calendar className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Book a Demo</span>
              </button>

              <button
                onClick={() => navigate("/resources/casestudies")}
                className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-lg rounded-xl border text-white transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)" }}
              >
                📊 View Case Studies
              </button>
            </div>
          </div>
          {/* ── END LEFT CONTENT ── */}

          {/* ── RIGHT: Dark Dashboard Card ── */}
          <div className="animate-fadeInRight relative">
            <div className="relative rounded-3xl p-6 border overflow-hidden shadow-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                borderColor: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(20px)"
              }}>

              {/* Dashboard header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="font-bold text-white text-base">ESG Performance Dashboard</p>
                  <p className="text-[11px] text-white/40 mt-0.5">Real-time sustainability metrics — CSJMU Campus</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-semibold"
                  style={{ color: "#00ff9d", backgroundColor: "rgba(0,255,157,0.1)", borderColor: "rgba(0,255,157,0.3)" }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#00ff9d" }} />
                  LIVE
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { val: "92%", label: "ESG Compliance", color: "#00ff9d" },
                  { val: "62%", label: "Emission Reduction", color: "#3498db" },
                  { val: "78%", label: "Sustainability Score", color: "#9b59b6" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3.5 text-center border"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.08)" }}>
                    <div className="text-2xl font-bold leading-none" style={{ color: s.color }}>{s.val}</div>
                    <div className="text-[10px] text-white/40 mt-1 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="rounded-xl p-3.5 border"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
                  <p className="text-[11px] text-white/50 font-medium mb-2.5">Energy Mix Distribution</p>
                  <div className="relative w-full h-36">
                    <canvas ref={pieRef} aria-label="Doughnut chart" role="img" />
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2.5">
                    {[
                      { label: "Rooftop Solar 40%", color: "#00ff9d" },
                      { label: "Street Lights 36%", color: "#e4d00a" },
                      { label: "Biogas 24%", color: "#3498db" },
                      { label: "Non-Renewable 60%", color: "#9b59b6" },
                    ].map((l) => (
                      <span key={l.label} className="flex items-center gap-1 text-[10px] text-white/40">
                        <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: l.color }} />
                        {l.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-3.5 border"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
                  <p className="text-[11px] text-white/50 font-medium mb-2.5">GHG Emissions Trend (tCO₂e)</p>
                  <div className="relative w-full h-36">
                    <canvas ref={barRef} aria-label="Grouped bar chart" role="img" />
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2.5">
                    {[
                      { label: "Scope 1", color: "rgba(52,152,219,0.85)" },
                      { label: "Scope 2", color: "rgba(228,208,10,0.85)" },
                      { label: "Total tCO₂e", color: "rgba(0,255,157,0.85)" },
                    ].map((l) => (
                      <span key={l.label} className="flex items-center gap-1 text-[10px] text-white/40">
                        <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: l.color }} />
                        {l.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-white/40 mb-1.5">
                  <span>Overall sustainability progress</span>
                  <span className="font-semibold text-[#00ff9d]">78%</span>
                </div>
                <div className="h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "78%", background: "linear-gradient(90deg, #00ff9d, #3498db)" }}
                  />
                </div>
              </div>

              {/* SDG pills */}
              <div className="flex flex-wrap gap-2">
                {SDG_PILLS.map((pill) => (
                  <span key={pill} className="text-[10px] text-white/40 px-2.5 py-1 rounded-md border"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* ── END RIGHT CONTENT ── */}

        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-fadeInLeft  { animation: fadeInLeft  0.8s ease-out; }
        .animate-fadeInRight { animation: fadeInRight 0.8s ease-out; }
        .animate-float { animation: float 20s infinite ease-in-out; }
        .animate-float-delayed { animation: float 20s infinite ease-in-out 5s; }
      `}</style>
    </section>
  );
};

export default StarcHero;