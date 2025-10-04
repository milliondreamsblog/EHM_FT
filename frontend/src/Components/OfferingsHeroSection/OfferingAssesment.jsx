import React, { useState, useEffect } from 'react';

// Custom hook for managing dark mode state and persistence
const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  
  // Toggles between 'light' and 'dark'
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Effect to apply the theme class to the root element and save to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Effect to set the initial theme based on localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  return [theme, toggleTheme];
};


// --- SVG Icon Components ---

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const CheckCircleIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const RadioButtonUncheckedIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 5a1 1 0 112 0v2a1 1 0 11-2 0V5zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm1 5a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
    </svg>
);


// --- UI Components ---

const Header = ({ toggleTheme, theme }) => (
  <header className="absolute top-0 right-0 p-6 z-50">
    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors">
      {theme === 'light' ? 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg> :
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      }
    </button>
  </header>
);

const ProgressBar = ({ label, value, color, score }) => (
    <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600 w-1/2">{label}</span>
        <div className="w-full bg-gray-200 rounded-full h-2">
            <div className={`${color} h-2 rounded-full`} style={{ width: `${value}%` }}></div>
        </div>
        <span className="font-bold text-gray-900 text-sm">{score}</span>
    </div>
);

// --- Main App Component ---

export default function OfferingAssesment() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <Header toggleTheme={toggleTheme} theme={theme} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Main Title Section */}
        <div className="text-center">
          <p className="text-emerald-500 font-semibold text-lg">Features</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Actionable Insights for Developers
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Track project health, get detailed risk reports, and manage assessments with ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Progress Tracking */}
          <div className="bg-white rounded-xl shadow-lg p-8 transition hover:transform hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm font-medium text-gray-500">Track, Navigate, Assess</p>
            <div className="mt-6 flex flex-col items-center">
              <div className="bg-gray-50 rounded-lg shadow-xl p-6 w-full max-w-sm">
                <div className="relative">
                  <img alt="Green renewable energy project" className="rounded-md w-full h-48 object-cover" src="https://placehold.co/600x400/10B981/FFFFFF?text=Project+View&font=inter"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-md"></div>
                </div>
                <h2 className="text-xl font-semibold mt-4 text-gray-900">Project - Renewable Energy Initiative</h2>
                <p className="text-sm text-gray-500 mt-1">International</p>
                <a href="#" className="mt-6 flex items-center justify-between bg-gray-100 rounded-lg p-3 hover:bg-gray-200 transition-colors">
                  <span className="font-semibold text-gray-700">Continue Assessment</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-emerald-500">56%</span>
                    <div className="bg-gray-200 p-1 rounded-full text-gray-600">
                      <ChevronRightIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <h3 className="mt-8 text-2xl font-bold text-center text-gray-900">Track Progress & Navigate Risk</h3>
          </div>

          {/* Column 2: Detailed Reporting */}
          <div className="bg-emerald-500 rounded-xl shadow-lg p-8 flex flex-col justify-center items-center transition hover:transform hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm font-medium text-white opacity-80 mb-6">Detailed Report</p>
            <div className="relative w-full max-w-sm h-96 group">
              {/* Card 1 (Back) */}
              <div className="bg-white rounded-lg shadow-xl p-6 absolute w-full transition-transform duration-500 ease-in-out group-hover:rotate-0 transform -rotate-3">
                 <div className="flex justify-between items-start">
                    <h4 className="text-lg font-bold text-gray-900">Initial Assessment</h4>
                    <div className="text-right">
                        <p className="text-sm font-bold text-red-500">3.1 Average (C-)</p>
                        <p className="text-xs text-gray-400 mt-1">Needs Improvement</p>
                    </div>
                 </div>
                 <div className="mt-4 space-y-3">
                    <ProgressBar label="Project Longevity" value={70} color="bg-green-500" score="7" />
                    <ProgressBar label="Opportunity Cost" value={50} color="bg-yellow-500" score="5" />
                    <ProgressBar label="Financial Viability" value={50} color="bg-yellow-500" score="5" />
                    <ProgressBar label="Project Management" value={20} color="bg-red-500" score="2" />
                 </div>
              </div>
              {/* Card 2 (Front) */}
              <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-2xl p-6 absolute w-full transition-transform duration-500 ease-in-out group-hover:rotate-0 group-hover:-translate-y-2 transform rotate-3">
                 <div className="flex justify-between items-start">
                    <h4 className="text-lg font-bold text-gray-900">Revised Assessment</h4>
                    <div className="text-right">
                        <p className="text-sm font-bold text-green-500">4.2 Average (A+)</p>
                        <p className="text-xs text-gray-400 mt-1">Excellent</p>
                    </div>
                 </div>
                 <div className="mt-4 space-y-3">
                    <ProgressBar label="Compliance" value={85} color="bg-blue-500" score="8.5" />
                    <ProgressBar label="Sustainability" value={75} color="bg-green-500" score="7.5" />
                    <ProgressBar label="Stakeholder Impact" value={60} color="bg-yellow-500" score="6" />
                 </div>
                 <div className="mt-6 border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-medium text-green-600">Risk Assessment Passed</h4>
                 </div>
              </div>
            </div>
            <h3 className="mt-8 text-2xl font-bold text-center text-white">Compare Reports Side-by-Side</h3>
          </div>
        </div>

        {/* Bottom Section: Seamless Navigation */}
        <div className="mt-10 bg-white rounded-xl shadow-lg p-8 lg:p-12 transition hover:transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-gray-500">Intuitive & Frictionless</p>
              <h3 className="mt-2 text-3xl font-bold text-gray-900">A Low-Stress Experience</h3>
              <p className="mt-4 text-gray-600">Our guided assessment makes it simple to address every requirement, with clear progress indicators along the way.</p>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-100 p-6 rounded-xl shadow-inner w-full max-w-sm border border-gray-200">
                  <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-sm font-medium"><CheckCircleIcon className="text-emerald-500" /><span>Project Management</span></div>
                      <div className="flex items-center space-x-3 text-sm font-medium"><CheckCircleIcon className="text-emerald-500" /><span>Land Tenure & Impacts</span></div>
                      <div className="flex items-center space-x-3 text-sm font-medium text-emerald-500">
                          <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-emerald-500"><div className="w-2 h-2 rounded-full bg-emerald-500"></div></div>
                          <span>Mitigation</span>
                      </div>
                      <div className="pl-8 -mt-2">
                        <div className="bg-white rounded-lg px-4 py-2 font-medium w-fit text-sm text-gray-800">Query 3</div>
                      </div>
                      <div className="flex items-center space-x-3 text-sm font-medium text-gray-400"><RadioButtonUncheckedIcon /><span>Financial Viability</span></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

