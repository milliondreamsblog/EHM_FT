import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { ChevronsRight, ChevronsDown, CloudHail, Plane, RefreshCcwDot, Droplets, CheckCircle, ShieldCheck, Sparkles, Bolt } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollRevealElements from '../Components/Animations/ScrollRevealElements';

const WaterbodyRestoration = () => {
    const [activeNode, setActiveNode] = useState(null);
    const [hoveredStage, setHoveredStage] = useState(null);
    const [hoveredProject, setHoveredProject] = useState('laxmi');

    const factors = [
        { id: 'f1', name: 'Storm water drain', image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1759495219/storm_water_pypduf.png' },
        { id: 'f2', name: 'Dairy waste', image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1759495221/dirty_waste_ddepg9.png' },
        { id: 'f3', name: 'Encroachment', image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1759494869/enchroament_thds8y.png' },
        { id: 'f4', name: 'Industry waste', image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1759495220/industry_waste_vqrhjj.png' },
        { id: 'f5', name: 'Untreated sewage', image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1759495218/undertreated_sewage_m5kzx4.png' },
        { id: 'f6', name: 'Solid waste dumping', image: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1759495220/solide_waste_z8gxjc.png' },
    ];

    const impacts = [
        { id: 'i1', name: 'Increase in flood risk', IconComponent: CloudHail },
        { id: 'i2', name: 'Loss of groundwater recharge', IconComponent: RefreshCcwDot },
        { id: 'i3', name: 'Loss of tourism & Livelihood', IconComponent: Plane },
    ];

    const headingStyle = "text-2xl font-bold text-slate-700 mb-8 tracking-wide";

    const caseStudy = {
        title: "Antia Talab, Jhansi",
        intro: "The restoration of Antia Talab in Jhansi, a vital project under the Smart City Mission, aimed at revitalizing a severely degraded waterbody.",
        restorationPoints: [
            "Multiple issues such as solid waste, excessive hyacinth, silting, and wastewater discharge.",
            "Restoration of Antia Talab was undertaken as part of the Smart City Mission.",
            "The work focused on achieving both environmental and financial sustainability."
        ],
        beforeImages: [
            "https://res.cloudinary.com/dlpluej6w/image/upload/v1757626449/After_Key_challenges_ybebnd.jpg",
            "https://res.cloudinary.com/dlpluej6w/image/upload/v1759498047/before1_ujmsxk.png"
        ],
        afterImages: [
            "https://res.cloudinary.com/dlpluej6w/image/upload/v1757626457/Atiya_Taal-Restoration_-_Thumbnail_pys5pw.png",
            "https://res.cloudinary.com/dlpluej6w/image/upload/v1757626454/After_solution_uetssl.jpg"
        ]
    };

    const benefitsData = [
        {
            title: "Environment",
            items: [
                "Groundwater recharge",
                "Microclimate Regulation",
                "Habitat & Biodiversity",
                "Flood & storm water management",
            ],
        },
        {
            title: "Social",
            items: [
                "Recreational activities",
                "Livelihood opportunities",
                "Cultural & Religious connect",
            ],
        },
        {
            title: "Governance",
            items: [
                "Job creation",
                "Revenue generation",
                "Tourist Hotspots",
                "Quality life for citizens",
            ],
        },
    ];


    const projectsData = {
        laxmi: {
            title: "Laxmi Taal, Jhansi (Ongoing)",
            description: "Preparation of DPR for Sustainable Management of Laxmi Taal Water Body.",
            details: "Waterbody Area - 33.012 ha",
            image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759503658/laxmi_tal_gslimj.png"
        },
        csjm: {
            title: "CSJM University Campus",
            description: "Design & commissioning of bioremediation Floating islands in the newly developed waterbody inside CSJM university campus.",
            details: "",
            image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901253/Restoration_of_Waterbody_hrs3eq.jpg"
        }
    };

    const approachData = [
        {
            title: "Solution",
            image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759504270/treated_dvs58w.webp",
            points: ["Treated water", "Treated water through Nature based solutions", "Solid waste management"]
        },
        {
            title: "Biodiversity",
            image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759504274/biodiversity_hjuewi.png",
            points: ["Biodiversity restoration", "Increase in Green cover"]
        },
        {
            title: "Awareness",
            image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759504271/awareness_mdw91a.jpg",
            points: ["Awareness", "Show casting to school and college kids"]
        },
        {
            title: "Public Engagement",
            image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759504276/public-engagement_j2xm8v.jpg",
            points: ["Public engagement", "Recreational Parks", "Livelihood"]
        }
    ];


    return (
        <div>
            <style>{`
                @keyframes bounceHorizontal {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(10px); }
                }
                @keyframes bounceVertical {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(10px); }
                }
                .animate-bounce-horizontal { animation: bounceHorizontal 2s infinite; }
                .animate-bounce-vertical { animation: bounceVertical 2s infinite; }
                .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-50vh) translateX(20px);
  }
  100% {
    transform: translateY(-120vh) translateX(-20px);
  }
}

.animate-float {
  animation: float linear infinite;
}
            `}</style>
            <div>
                {/* Header */}
                <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#7dbea8] to-[#98d8dc] p-4 md:p-8 overflow-hidden'>


                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                        {[...Array(20)].map((_, i) => {
                            const size = Math.random() * 80 + 20;
                            const style = {
                                width: `${size}px`,
                                height: `${size}px`,
                                left: `${Math.random() * 100}%`,
                                animationDuration: `${Math.random() * 15 + 10}s`,
                                animationDelay: `-${Math.random() * 25}s`,
                                opacity: Math.random() * 0.4 + 0.1,
                            };
                            return <div key={i} className="absolute bottom-[-150px] bg-white/30 rounded-full animate-float" style={style}></div>;
                        })}
                    </div>


                    <ScrollRevealElements
                        className='relative z-10 text-center mb-20 md:mb-40'
                        staggerAmount={0.5}
                    >
                        <motion.div className='flex justify-center mb-4'>

                            <Player
                                autoplay
                                loop
                                src="/lottie-assets/Recycle-Process-Animetion/animations/175a9a37-546c-4c9a-9f82-4c1bf51fb1ac.json"
                                className="w-36 h-36 lg:w-48 lg:h-48 lg:translate-y-5"
                            />
                        </motion.div>
                        <motion.h1
                            className='relative z-10 text-4xl sm:text-5xl md:text-7xl font-extrabold text-white uppercase tracking-wider'
                        >
                            <span className='text-[#02ffe6]'>Restoration </span>of<br /> Waterbody <span className='text-[#02ffe6]'>Ecosystem </span>
                        </motion.h1>
                    </ScrollRevealElements>

                    <div className='absolute bottom-0 left-0 w-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#ffffff" fillOpacity="0.3" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                        <div className='absolute bottom-0 left-0 w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#ffffff" fillOpacity="0.5" d="M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,250.7C672,267,768,245,864,213.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>

                    {/* Scroll-down */}
                    <div className="absolute bottom-6 md:bottom-10 left-[calc(50%-0.5rem)] md:left-1/2 -translate-x-1/2 animate-bounce">
                        <div
                            className="w-8 h-8 md:w-11 md:h-11 border-r-2 border-b-2 md:border-r-4 md:border-b-4 border-emerald-500/80 rotate-45">
                        </div>
                    </div>
                </section>

                {/* MAJOR FACTORS & IMPACTS */}
                <section className="bg-gradient-to-b from-[#dbf1f2] to-[#ededed] py-20 px-4">
                    <ScrollRevealElements
                        className="container mx-auto flex flex-col lg:flex-row items-center justify-around gap-10"
                        staggerAmount={0.5}
                    >
                        {/* Factors  */}
                        <motion.div className="flex flex-col items-center lg:w-[450px]">
                            <h3 className={headingStyle}>Major Factors</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
                                {factors.map((factor) => (
                                    <div key={factor.id} onMouseEnter={() => setActiveNode(factor.id)} onMouseLeave={() => setActiveNode(null)} className="flex flex-col items-center text-center cursor-pointer group">
                                        <div className={`relative w-28 h-28 p-1 rounded-full bg-[#0f101071] shadow-lg transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-xl ${activeNode === factor.id ? 'ring-2 ring-[#10b981]' : 'ring-1 ring-gray-200'}`}>
                                            <img src={factor.image} alt={factor.name} className="rounded-full w-full h-full object-cover" />
                                        </div>
                                        <p className="mt-3 font-semibold text-gray-700 text-sm w-28">{factor.name}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Arrow */}
                        <motion.div className="text-[#10b981] my-4 lg:my-0 flex-shrink-0">
                            <ChevronsDown size={60} className="block lg:hidden animate-bounce-vertical" />
                            <ChevronsRight size={80} className="hidden lg:block animate-bounce-horizontal" />
                        </motion.div>

                        {/* Polluted */}
                        <motion.div className="flex flex-col items-center">
                            <h3 className={headingStyle}>Polluted Waterbody</h3>
                            <div onMouseEnter={() => setActiveNode('center')} onMouseLeave={() => setActiveNode(null)} className={`relative group rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl ${activeNode === 'center' ? 'ring-2 ring-[#10b981]' : 'ring-1 ring-gray-200'}`}>
                                <img src="https://res.cloudinary.com/dlpluej6w/image/upload/v1759494835/g_polluten_rzolfa.png" alt="Polluted Waterbody" className="rounded-xl w-64 h-48 md:w-80 md:h-60 object-cover" onError={(e) => e.target.src = 'https://placehold.co/400x300/a0aec0/ffffff?text=Polluted+Water'} />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                                    <p className="text-white font-bold text-2xl text-center">Polluted Waterbody</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Arrow */}
                        <motion.div className="text-[#10b981] my-4 lg:my-0 flex-shrink-0">
                            <ChevronsDown size={60} className="block lg:hidden animate-bounce-vertical" />
                            <ChevronsRight size={80} className="hidden lg:block animate-bounce-horizontal" />
                        </motion.div>

                        {/* Impacts  */}
                        <motion.div className="flex flex-col items-center lg:w-[350px]">
                            <h3 className={headingStyle}>Impacts</h3>
                            <div className="flex flex-col gap-6 w-full px-4 lg:px-0">
                                {impacts.map(({ id, name, IconComponent }) => (
                                    <div
                                        key={id}
                                        onMouseEnter={() => setActiveNode(id)}
                                        onMouseLeave={() => setActiveNode(null)}
                                        className={`flex items-center w-full gap-4 p-4 rounded-xl bg-[#ffffff88] shadow-md transition-all duration-300 ease-in-out cursor-pointer group hover:shadow-xl hover:-translate-y-1 hover:bg-slate-50 ${activeNode === id ? 'ring-2 ring-[#10b981] shadow-lg' : 'ring-1 ring-gray-200'}`}>
                                        <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full transition-colors duration-300 ${activeNode === id ? 'bg-[#10b98118]' : 'bg-gray-100 group-hover:bg-red-50'}`}>
                                            <IconComponent className={`w-6 h-6 transition-colors duration-300 ${activeNode === id ? 'text-[#10b981]' : 'text-gray-600'}`} />
                                        </div>
                                        <p className="font-semibold text-gray-800 text-left leading-tight">{name}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </ScrollRevealElements>
                </section>

                {/*CASE STUDY*/}
                <section className="bg-[#e2e9e4] pt-16 pb-20 px-4">
                    <div className="container mx-auto">

                        {/* upper */}
                        <div >
                            <div className="w-full max-w-7xl mx-auto ">
                                <ScrollRevealElements
                                    className="text-center mb-12 md:mb-16"
                                    staggerAmount={0.5}
                                >

                                    <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800">
                                        Case Study: <span className="text-[#10b981]">{caseStudy.title}</span>
                                    </motion.h2>
                                    <motion.p className="text-slate-500 mt-4 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                                        {caseStudy.intro}
                                    </motion.p>
                                </ScrollRevealElements>

                                <motion.div

                                    className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-2xl bg-gray-50 min-h-[450px]"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    {/* before */}
                                    <div

                                        className={`relative transition-all duration-500 ease-in-out ${hoveredStage === 'before' ? 'lg:w-[50%]' : 'lg:w-[25%]'} ${hoveredStage === 'after' ? 'lg:w-[25%]' : ''} flex-grow`}
                                        onMouseEnter={() => setHoveredStage('before')}
                                        onMouseLeave={() => setHoveredStage(null)}
                                    >
                                        {hoveredStage === 'before' ? (

                                            <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
                                                {caseStudy.beforeImages.map((src, idx) => (
                                                    <div key={idx} className="h-full min-h-[200px] lg:min-h-0 w-full bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
                                                ))}
                                            </div>
                                        ) : (

                                            <div className="relative w-full h-full bg-red-800 p-6 md:p-8">
                                                <img src={caseStudy.beforeImages[0]} alt="Polluted water" className="absolute inset-0 w-full h-full object-cover opacity-20" />

                                                <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-white ">Before</h3>
                                            </div>
                                        )}
                                    </div>

                                    {/*mddle */}
                                    <div className={`relative flex flex-col p-6 md:p-8 transition-all duration-500 ease-in-out ${hoveredStage === null ? 'lg:w-[50%]' : 'lg:w-[25%]'} flex-grow bg-slate-100 text-slate-800 justify-center items-start`}>
                                        <div className="w-full text-center">

                                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#10b981]">Restoration Journey</h3>
                                            <ul className="space-y-4 max-w-md mx-auto text-left">
                                                {caseStudy.restorationPoints.map((point, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <Droplets className="h-5 w-5 text-[#10b981] mr-3 mt-1 flex-shrink-0" />
                                                        <span className="text-slate-600">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* after  */}
                                    <div
                                        className={`relative transition-all duration-500 ease-in-out ${hoveredStage === 'after' ? 'lg:w-[50%]' : 'lg:w-[25%]'} ${hoveredStage === 'before' ? 'lg:w-[25%]' : ''} flex-grow`}
                                        onMouseEnter={() => setHoveredStage('after')}
                                        onMouseLeave={() => setHoveredStage(null)}
                                    >
                                        {hoveredStage === 'after' ? (

                                            <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
                                                {caseStudy.afterImages.map((src, idx) => (
                                                    <div key={idx} className="h-full min-h-[200px] lg:min-h-0 w-full bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
                                                ))}
                                            </div>
                                        ) : (

                                            <div className="relative w-full h-full bg-green-800 p-6 md:p-8 flex justify-end items-start">
                                                <img src={caseStudy.afterImages[0]} alt="Restored water" className="absolute inset-0 w-full h-full object-cover opacity-20" />

                                                <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-white">After</h3>
                                            </div>
                                        )}
                                    </div>

                                </motion.div>
                            </div>
                        </div>

                        {/* lower */}
                        <div>
                            {/* Benefits */}
                            <motion.div
                                className="text-center mt-28 mb-16"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                                    Benefits of <span className="text-[#10b981]">Restoration</span>
                                </h2>
                            </motion.div>


                            <ScrollRevealElements
                                className="hidden lg:flex justify-center items-start gap-12 relative py-12"
                                staggerAmount={0.5}
                            >
                                {benefitsData.map((item, index) => {
                                    let Icon;
                                    switch (item.title.toLowerCase()) {
                                        case "environment": Icon = Sparkles; break;
                                        case "social": Icon = ShieldCheck; break;
                                        case "governance": Icon = Bolt; break;
                                        default: Icon = CheckCircle;
                                    }
                                    const isLast = index === benefitsData.length - 1;
                                    return (
                                        <motion.div key={index} className="relative flex flex-col items-center group">

                                            {!isLast && (
                                                <div className="absolute top-10 left-full h-1 w-16 bg-[#10b981]"></div>
                                            )}

                                            <div className="relative p-4 bg-white rounded-full border-4 border-[#10b981] z-10 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
                                                <Icon className="w-8 h-8 text-[#10b981]" />
                                            </div>
                                            {/* Card */}
                                            <div className="mt-6 w-64 bg-white p-6 rounded-2xl shadow-lg border border-slate-200 text-center transition-transform duration-300 group-hover:translate-y-[-4px] group-hover:shadow-2xl">
                                                <h4 className="font-bold text-lg text-slate-700">{item.title}</h4>
                                                <ul className="mt-2 text-sm text-left text-slate-500 space-y-1">
                                                    {item.items.map((point, pIdx) => (
                                                        <li key={pIdx} className="flex items-start">
                                                            <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-[#10b981] flex-shrink-0" />
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </ScrollRevealElements>

                            {/* mobile responsive for the benift */}
                            <div className="lg:hidden relative max-w-xl mx-auto mt-12">
                                <div className="absolute left-8 top-0 h-full w-0.5 bg-[#10b981]"></div>
                                <ScrollRevealElements
                                    className="space-y-16"
                                    staggerAmount={0.5}
                                >
                                    {benefitsData.map((item, index) => {
                                        let Icon;
                                        switch (item.title.toLowerCase()) {
                                            case "environment": Icon = Sparkles; break;
                                            case "social": Icon = ShieldCheck; break;
                                            case "governance": Icon = Bolt; break;
                                            default: Icon = CheckCircle;
                                        }
                                        return (
                                            <motion.div key={index} className="relative pl-20 group">
                                                <div className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-white border-4 border-[#10b981] shadow-md transition-transform duration-300 group-hover:scale-110">
                                                    <Icon className="h-8 w-8 text-[#10b981]" />
                                                </div>
                                                <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                                    <h4 className="font-bold text-lg text-slate-700 mb-2">{item.title}</h4>
                                                    <ul className="space-y-1">
                                                        {item.items.map((point, pIdx) => (
                                                            <li key={pIdx} className="flex items-start text-slate-600">
                                                                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-[#10b981] flex-shrink-0" />
                                                                <span>{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </ScrollRevealElements>
                            </div>
                        </div>


                        {/*button */}
                        <motion.div
                            className="text-center mt-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                        >
                            <a href="/resources/casestudies" className="inline-block bg-[#10b981] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#0a7c56] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                View Full Case Study
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/*  OTHER PROJECTS & APPROACH  */}
                <section className="bg-[#f6f6f6] pt-20 pb-20 px-4">
                    <div className="container mx-auto">

                        {/* upper */}
                        <div>

                            <motion.div
                                className="text-center mb-8 md:mb-12"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800">
                                    Other <span className="text-[#10b981]">Projects</span>
                                </h2>
                            </motion.div>


                            <motion.div
                                className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-gray-100 min-h-[300px] md:min-h-[400px] border-2 border-[#3a3a3a0f]"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {['laxmi', 'csjm'].map(key => (
                                    <div
                                        key={key}
                                        onMouseEnter={() => setHoveredProject(key)}
                                        onMouseLeave={() => setHoveredProject(null)}
                                        className={`group relative overflow-hidden transition-all duration-500 ease-in-out flex-grow cursor-pointer h-[350px] sm:h-[400px] md:h-auto ${hoveredProject === key ? 'md:w-2/3' : 'md:w-1/3'}`}
                                    >

                                        <img
                                            src={projectsData[key].image}
                                            alt={projectsData[key].title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />

                                        <div className={`absolute inset-0 z-10 transition-colors duration-300 ${hoveredProject && hoveredProject !== key ? 'bg-black/60' : 'bg-black/0'}`} />

                                        <div className="relative z-20 h-full w-full flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white bg-gradient-to-t from-black/55 to-transparent">
                                            <h3 className="text-xl text-[#26ffb7] sm:text-2xl font-bold">{projectsData[key].title}</h3>

                                            <div className="transition-all duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100">
                                                <div className="mt-2 sm:mt-4">
                                                    <p className="text-sm sm:text-base text-slate-200">{projectsData[key].description}</p>
                                                    {projectsData[key].details && (
                                                        <p className="mt-2 text-sm sm:text-base font-semibold">{projectsData[key].details}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* lower */}
                        <div>
                            {/*  approach */}
                            <motion.div
                                className="text-center mt-28 mb-16"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                                    Our <span className="text-[#10b981]">Approach</span>
                                </h2>
                            </motion.div>

                            {/* desktop responsive view*/}
                            <div className="hidden lg:flex justify-between items-start relative py-4 mx-auto">
                                <svg className="absolute -top-20 left-0 w-full h-full z-0" preserveAspectRatio="none" viewBox="0 0 1152 300">
                                    <path
                                        d="M 52 100 C 218 100, 218 196, 384 196 C 550 196, 584 100, 768 100 C 934 100, 934 196, 1100 196"
                                        stroke="#10b981"
                                        strokeWidth="4"
                                        fill="none"
                                        strokeDasharray="10,10"
                                    />
                                </svg>
                                <ScrollRevealElements
                                    className="w-full flex justify-between items-start"
                                    staggerAmount={0.5}
                                >
                                    {approachData.map((item, index) => {
                                        const isOdd = index % 2 !== 0;
                                        return (
                                            <motion.div key={index} className="relative flex flex-col items-center z-10 group">
                                                <div className={`relative p-2 bg-slate-50 rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl ${isOdd ? 'mt-28' : ''}`}>
                                                    <img src={item.image} alt={item.title} className="w-20 h-20 rounded-full object-cover" />
                                                </div>
                                                <div className={`mt-6 w-64 bg-white p-6 rounded-2xl shadow-lg border border-slate-200 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl`}>
                                                    <h4 className="font-bold text-lg text-slate-700">{item.title}</h4>
                                                    <ul className="mt-2 text-sm text-left text-slate-500 space-y-1">
                                                        {item.points.map((point, pIdx) => (
                                                            <li key={pIdx} className="flex items-start">
                                                                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-[#10b981] flex-shrink-0" />
                                                                <span>{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </ScrollRevealElements>
                            </div>

                            {/* mobile responsive viw*/}
                            <div className="lg:hidden relative max-w-xl mx-auto mt-12">
                                <div className="absolute left-12 top-0 h-full w-0.5 bg-[#10b981]"></div>
                                <ScrollRevealElements
                                    className="space-y-16"
                                    staggerAmount={0.5}
                                >
                                    {approachData.map((item, index) => (
                                        <motion.div key={index} className="relative pl-28 group">
                                            <div className="absolute left-12 top-1/2 -translate-y-1/2 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
                                                <img src={item.image} alt={item.title} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
                                            </div>
                                            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                                <h4 className="font-bold text-lg text-slate-700">{item.title}</h4>
                                                <ul className="mt-2 text-sm text-left text-slate-500 space-y-1">
                                                    {item.points.map((point, pIdx) => (
                                                        <li key={pIdx} className="flex items-start">
                                                            <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-[#10b981] flex-shrink-0" />
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ))}
                                </ScrollRevealElements>
                            </div>

                            {/* button */}
                            <motion.div
                                className="text-center mt-20"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                            >
                                <a
                                    href="/projects"
                                    className="inline-block bg-[#10b981] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#0d8e63] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    View More Projects
                                </a>
                            </motion.div>
                        </div>


                    </div>
                </section>


            </div>
        </div>
    );
}




export default WaterbodyRestoration;




