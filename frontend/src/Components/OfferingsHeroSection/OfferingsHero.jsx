import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const OfferingsHero = () => {
    return (
        <div className="w-full font-sans overflow-hidden">


            {/* CIRCLES */}

            <section className="relative p-40 sm:p-20 md:p-40 overflow-hidden bg-gradient-to-r from-[#c2e7d8] ">
                {/* Background Circles */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                    {/* Outer Circle */}
                    <div className="w-[70vw] h-[1100px] rounded-full border-2 border-black/20 bg-gradient-to-r from-[#c2e7d8]  flex items-center justify-center">
                        {/* Inner Circle */}
                        <div className="w-[85%] h-[85%] rounded-full border-2 border-black/20 bg-gradient-to-r from-[#c2e7d8] "></div>
                    </div>
                </div>

                {/* Top & bottom gradients */}
                <div className="absolute top-10 left-0 w-full h-[70%] bg-gradient-to-b from-[#c2e7d8]" />

                <div className="absolute -bottom-10 left-0 w-full h-[70%] bg-gradient-to-t from-[#c2e7d8]" />

                {/* Hero Content */}
                <div className="max-w-3xl mx-auto text-center relative z-10 pt-20">
                    <p className="text-sm text-emerald-800 mb-4">
                        *Updated accordingly to v4.2 from Verra AFOLU Non-Permanence Risk tool
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6 pb-10">
                        Easy and Intuitive risk analysis for your projects
                    </h1>
                    <button className="bg-emerald-500 text-white font-semibold px-10 py-3 rounded-lg shadow-md hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105">
                        Request a Demo of Risk Analysis Tool
                    </button>
                </div>
            </section>


            {/* Upper Section */}
            <section className="relative pb-60 md:pt-1 md:pb-60 overflow-hidden">


                <div className="absolute inset-0 z-0 overflow-hidden">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 1440 800"
                        preserveAspectRatio="xMidYMid slice"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.07" />
                            </filter>
                        </defs>

                        {/* Background Color Layers */}
                        <rect width="1440" height="800" fill="#c2e7d8" />

                        {/* Top layer  */}
                        <path
                            d="M-10 330 C 400 450, 850 300, 1450 400 V 800 H -10 Z"
                            fill="#E3F2EF"
                        />

                        {/* Middle layer */}
                        <path
                            d="M-10 450 C 450 600, 850 400, 1450 520 V 800 H -10 Z"
                            fill="#F8FAFC"
                        />
                    </svg>
                </div>





                {/* Content */}
                <div className="container mx-auto px-4 relative z-10 -top-28">


                    {/* Floating UI Elements */}
                    <div className="relative mt-16 md:mt-20 h-[500px] hidden md:block translate-y-36">
                        {/* Card 1*/}
                        <div className="absolute top-[4%] left-1/2 -translate-x-[98%] bg-white p-3 rounded-xl shadow-[0_10px_20px_rgba(0,_0,_0,_0.2)] w-auto h-auto z-10 border border-gray-100">
                            <div className="flex items-center gap-2 py-2 px-2 text-sm text-gray-600 font-semibold">
                                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
                                Project Management
                            </div>
                            <ul className="mt-1 text-sm text-gray-700 space-y-1 px-1">
                                <li className="bg-emerald-500 text-white font-semibold py-2.5 px-3 rounded-lg">Query 1</li>
                                <li className="py-2.5 px-3">Query 2</li>
                                <li className="py-2.5 px-3">Mitigation</li>
                            </ul>
                            <div className="flex items-center gap-2 py-2 px-2 text-sm text-gray-600 font-semibold mt-4">
                                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
                                Financial Viability
                            </div>
                            <ul className="mt-1 text-sm text-gray-700 space-y-1 px-1">
                                <li className="py-2.5 px-3 leading-tight">Projects Payback Period & Percent of funding</li>
                                <li className="py-2.5 px-3">Mitigation</li>
                            </ul>
                            <div className="flex items-center gap-2 py-2 px-2 text-sm text-gray-400 font-semibold mt-4">
                                <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
                                Operational Risk
                            </div>
                            <ul className="mt-1 text-sm text-gray-700 space-y-1 px-1">
                                <li className="py-2.5 px-3">Query</li>
                                <li className="py-2.5 px-3">Mitigation</li>
                            </ul>
                        </div>
                        {/* Card 2*/}
                        <div className="absolute top-[5%] left-1/2 translate-x-[5%] bg-white  rounded-xl shadow-[0_10px_20px_rgba(0,_0,_0,_0.2)] w-auto  z-30 border border-gray-100">
                            <img src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756386634/EHM-APP/jegdhviut447yjgbcers.png" alt="External Risk" className="rounded-t-lg h-48 w-full object-cover" />
                            <div className="flex justify-between items-center mt-2 px-2 py-1">
                                <h3 className="font-bold text-gray-800 text-base">External Risk</h3>
                                <span className="text-base font-semibold text-gray-500 flex items-center">64% <span className="text-gray-400 ml-2 text-xl">&gt;</span></span>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="absolute top-[70%] left-1/2 -translate-x-[80%] bg-white  rounded-xl shadow-[0_10px_20px_rgba(0,_0,_0,_0.2)] w-auto z-20 border border-gray-100">
                            <img src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756388167/Screenshot_1st_u2ghdl.png" alt="Natural Risk" className="rounded-t-lg h-44 w-full object-cover" />
                            <div className="flex justify-between items-center px-2 py-1">
                                <h3 className="font-bold text-gray-800 text-base">Natural Risk</h3>
                                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">Score 17</span>
                            </div>
                        </div>
                        {/* Card 4*/}
                        <div className="absolute z-20 top-[50%] left-1/2 -translate-x-[40%] bg-white p-5 rounded-xl shadow-[0_10px_20px_rgba(0,_0,_0,_0.2)] w-auto border border-gray-100">
                            <p className="font-semibold text-gray-400 text-xs mb-1">Project Management</p>
                            <h3 className="font-semibold text-sm text-gray-800 mb-4 leading-snug">Does the project have an adaptive management plan in place that includes a monitoring plan?*</h3>
                            <div className="flex gap-4">
                                <button className="flex-1 bg-white text-gray-600 text-sm py-2 rounded-lg border border-gray-300  transition-colors">Yes</button>
                                <button className="flex-1 bg-white text-gray-600 text-sm py-2 rounded-lg border border-gray-300  transition-colors">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lower Section */}
            <section className="bg-gradient-to-b from-[#f8fafc] to-[#ffffff] py-2 md:py-2 relative">
                <span className="absolute bottom-4 left-20 text-gray-100 text-8xl font-serif select-none">∫dx</span>
                <span className="absolute bottom-4 right-20 text-gray-100 text-5xl font-serif select-none">dx</span>

                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-700">
                            Doing away with tedious Verra AFOLU documentation and updates, this tool will help you undertake the non-permanence risk analysis with <span className="text-emerald-600">easy navigation and clean UI</span>
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white border-2 border-green-200 rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center gap-6 relative">
                        <div className="w-full md:w-1/3 h-48 md:h-full">
                            <img
                                src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756388925/EHM-APP/rnifglwnnstvedixsrrb.png"
                                alt="Forest"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex-1 text-left">
                            <p className="text-xs font-semibold text-gray-500 mb-2">August 28, 2025</p>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Water Stewardship in India: A Call for Collective Action</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                In India, the spectre of water scarcity looms large, menacing cities and villages alike. With...
                            </p>
                            <a href="/resources/blogs" className="font-semibold text-emerald-600 inline-flex items-center gap-1 group">
                                Read more
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default OfferingsHero;
