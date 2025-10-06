import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollRevealElements from '../Animations/ScrollRevealElements';

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth;
};

const OfferingsHero = () => {
    const width = useWindowWidth();
    const showOuterCircle = width >= 400;
    const showInnerCircle = width >= 750;

    return (
        <div className="w-full font-sans overflow-x-hidden">

            {/* CIRCLES  */}
            <section className="relative py-20 px-4 sm:py-28 md:py-40 overflow-hidden bg-gradient-to-r from-[#c2e7d8]">
                {showOuterCircle && (
                    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[180vw] sm:w-[140vw] md:w-[120vw] lg:w-[100vw] xl:w-[80vw] aspect-square rounded-full border-2 border-[#006a405f] bg-gradient-to-r from-[#c2e7d8] flex items-center justify-center">
                            {showInnerCircle && (
                                <div className="w-[85%] h-[85%] rounded-full border-2 border-[#006a406f] bg-gradient-to-r from-[#c2e7d8]"></div>
                            )}
                        </div>
                    </div>
                )}
                <div className="absolute top-10 left-0 w-full h-[70%] bg-gradient-to-b from-[#c2e7d8]" />
                <div className="absolute -bottom-10 left-0 w-full h-[70%] bg-gradient-to-t from-[#c2e7d8]" />

                <ScrollRevealElements
                    className="max-w-3xl mx-auto text-center relative z-10 pt-10 md:pt-20"
                    staggerAmount={0.5}
                >
                    <motion.p className="text-sm text-emerald-800 mb-4 px-4">
                        *Updated accordingly to v4.2 from Verra AFOLU Non-Permanence Risk tool
                    </motion.p>
                    <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6 pb-10">
                        Easy and Intuitive risk analysis for your projects
                    </motion.h1>
                    <motion.div>
                        <button className="bg-emerald-500 text-white font-semibold px-8 py-3 md:px-10 rounded-lg shadow-md hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105">
                            Request a Demo of Risk Analysis Tool
                        </button>
                    </motion.div>
                </ScrollRevealElements>
            </section>

            {/* Upper Section */}
            <section className="relative pt-10 pb-10 md:pt-1 md:pb-40 overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/*(<768px) */}
                    <svg
                        className="w-full h-full block md:hidden"
                        viewBox="0 0 1440 800"
                        preserveAspectRatio="xMidYMid slice"
                        fill="none"
                        xmlns="http://www.w3s.org/2000/svg"
                    >
                        <rect width="1440" height="800" fill="#c2e7d8" />
                        <path
                            d="M-10 600 C 1900 170, 1850 -80, 1450 140 V 800 H -10 Z"
                            fill="#E3F2EF"
                        />
                        <path
                            d="M-10 700 C 1850 220, 1950 -30, 1450 190 V 800 H -10 Z"
                            fill="#F8FAFC"
                        />
                    </svg>

                    {/*  (>=768px)  */}
                    <svg
                        className="w-full h-full hidden md:block"
                        viewBox="0 0 1440 800"
                        preserveAspectRatio="xMidYMid slice"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="1440" height="800" fill="#c2e7d8" />
                        <path
                            d="M-10 200 C 400 350, 850 100, 1450 320 V 800 H -10 Z"
                            fill="#E3F2EF"
                        />
                        <path
                            d="M-10 350 C 450 500, 850 200, 1450 450 V 800 H -10 Z"
                            fill="#F8FAFC"
                        />
                    </svg>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                    {/* Floating UI Elements */}
                    <div className="relative mt-12 h-[240px] sm:h-[370px] md:h-[450px] lg:h-[520px] flex justify-center items-start">
                        <div
                            className="absolute scale-[0.45] sm:scale-[0.7] md:scale-[0.85] lg:scale-100 transition-transform duration-300"
                            style={{ transformOrigin: 'top center' }}
                        >
                            <div className="relative w-[800px] h-[520px]">

                                {/* Card 1 */}
                                <div className="absolute top-[8%] left-1/2 -translate-x-[110%] z-10 w-72 bg-[#f4f4f4da] backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
                                    <h4 className="flex items-center gap-2 text-sm font-semibold text-emerald-700 mb-3">
                                        <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
                                        Project Management
                                    </h4>
                                    <ul className="text-sm text-gray-700 space-y-2">
                                        <li className="bg-emerald-500 text-white font-semibold py-2 px-3 rounded-lg shadow-sm">Query 1</li>
                                        <li className="py-2 px-3 hover:bg-gray-50 rounded-lg transition">Query 2</li>
                                        <li className="py-2 px-3 hover:bg-gray-50 rounded-lg transition">Mitigation</li>
                                    </ul>
                                    <h4 className="flex items-center gap-2 text-sm font-semibold text-emerald-700 mt-5 mb-3">
                                        <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
                                        Financial Viability
                                    </h4>
                                    <ul className="text-sm text-gray-700 space-y-2">
                                        <li className="py-2 px-3 leading-tight hover:bg-gray-50 rounded-lg transition">
                                            Projects Payback Period & Percent of funding
                                        </li>
                                        <li className="py-2 px-3 hover:bg-gray-50 rounded-lg transition">Mitigation</li>
                                    </ul>
                                </div>
                                {/* Card 2 */}
                                <div className="absolute top-[14%] left-1/2 translate-x-[5%] z-40 w-72 bg-[#f9f9f9ab] backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
                                    <img src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756386634/EHM-APP/jegdhviut447yjgbcers.png" alt="External Risk" className="h-40 w-full object-cover" />
                                    <div className="flex justify-between items-center p-4">
                                        <h3 className="font-bold text-gray-800 text-base">External Risk</h3>
                                        <span className="text-base font-semibold text-gray-500 flex items-center">
                                            64% <span className="text-gray-400 ml-1 text-lg">&gt;</span>
                                        </span>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="absolute top-[60%] left-1/2 -translate-x-[70%] z-20 w-72 bg-[#f9f9f900] backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
                                    <img src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756388167/Screenshot_1st_u2ghdl.png" alt="Natural Risk" className="h-40 w-full object-cover" />
                                    <div className="flex justify-between items-center p-4">
                                        <h3 className="font-bold text-gray-800 text-base">Natural Risk</h3>
                                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                                            Score 17
                                        </span>
                                    </div>
                                </div>
                                {/* Card 4 */}
                                <div className="absolute top-[40%] left-1/2 -translate-x-[30%] z-30 w-80 bg-[#f9f9f9ed] backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
                                    <p className="font-semibold text-gray-400 text-xs mb-1">Project Management</p>
                                    <h3 className="font-semibold text-sm text-gray-800 mb-4 leading-snug">
                                        Does the project have an adaptive management plan in place that includes a monitoring plan?*
                                    </h3>
                                    <div className="flex gap-3">
                                        <button className="flex-1 bg-emerald-500 text-white text-sm py-2 rounded-lg hover:bg-emerald-600 transition">Yes</button>
                                        <button className="flex-1 bg-gray-100 text-gray-700 text-sm py-2 rounded-lg hover:bg-gray-200 transition">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lower Section */}
            <section className="bg-gradient-to-b from-[#f8fafc] to-[#ffffff] py-12 md:py-20 relative">
                <span className="absolute bottom-4 left-4 md:left-20 text-gray-100 text-7xl md:text-8xl font-serif select-none">∫dx</span>
                <span className="absolute bottom-4 right-4 md:right-20 text-gray-100 text-4xl md:text-5xl font-serif select-none">dx</span>
                <div className="container mx-auto px-4">
                    <ScrollRevealElements
                        className="max-w-4xl mx-auto text-center mb-16"
                        staggerAmount={1}
                    >
                        <motion.h2 className="text-2xl md:text-3xl font-bold text-gray-700">
                            Doing away with tedious Verra AFOLU documentation and updates, this tool will help you undertake the non-permanence risk analysis with <span className="text-emerald-600">easy navigation and clean UI</span>
                        </motion.h2>
                    </ScrollRevealElements>
                    <motion.div
                        className="max-w-4xl mx-auto bg-white border-2 border-[#3f8c5b] rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="w-full md:w-1/3 h-48 md:h-full">
                            <img src="https://res.cloudinary.com/dlpluej6w/image/upload/v1756388925/EHM-APP/rnifglwnnstvedixsrrb.png" alt="Forest" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-xs font-semibold text-gray-500 mb-2">August 28, 2025</p>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Water Stewardship in India: A Call for Collective Action</h3>
                            <p className="text-sm text-gray-600 mb-4">In India, the spectre of water scarcity looms large...</p>
                            <a href="/resources/blogs" className="font-semibold text-emerald-600 inline-flex items-center gap-1 group">
                                Read more
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default OfferingsHero;