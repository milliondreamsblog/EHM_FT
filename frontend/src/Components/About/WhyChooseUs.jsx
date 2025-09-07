


import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const DiversifiedExpertiseIcon = () => (
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="1.5">
            <path d="M12 14l-8-4 8-4 8 4-8 4z"></path><path d="M4 14v4l8 4 8-4v-4"></path><path d="M20 10V6l-8-4-8 4v4l8 4 8-4z"></path>
        </svg>
    </div>
);
const PhilosophyIcon = () => (
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="1.5">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 2a10 10 0 00-9.95 9.13M22 12a10 10 0 01-9.13 9.95"></path>
        </svg>
    </div>
);
const ApproachIcon = () => (
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="1.5">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>
        </svg>
    </div>
);

const WhyChooseUsSection = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const titleBlock = ".title-block";
        const cards = gsap.utils.toArray(".feature-card");

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                pin: true,
                scrub: 1,
                start: "top top",
                end: "+=2000",
            }
        });


        gsap.set(titleBlock, { xPercent: -50, yPercent: -50, top: "50%", left: "50%" });
        gsap.set(cards, { position: 'absolute', top: 0, opacity: 0, y: 50, scale: 0.9 });


        timeline
            .fromTo(titleBlock,
                { opacity: 1, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" }
            )
            .to(titleBlock, {
                left: "25%",
                duration: 0.5,
                ease: "power2.inOut"
            }, "+=0.25")
            // Card 1 Appears
            .to(cards[0], { opacity: 1, y: 0, scale: 1, duration: 0.5 }, "-=0.5")
            .to({}, { duration: 0.5 }) // Hold

            .to(cards[0], { opacity: 0, y: -50, scale: 0.9, duration: 0.5 }, "swap2")
            .to(cards[1], { opacity: 1, y: 0, scale: 1, duration: 0.5 }, "swap2")
            .to({}, { duration: 0.5 }) // Hold

            .to(cards[1], { opacity: 0, y: -50, scale: 0.9, duration: 0.5 }, "swap3")
            .to(cards[2], { opacity: 1, y: 0, scale: 1, duration: 0.5 }, "swap3")
            .to({}, { duration: 0.5 });

    }, { scope: container });

    return (
        <section ref={container} className="w-full h-screen relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-full z-0">
                <img
                    src="https://res.cloudinary.com/dlpluej6w/image/upload/v1757114594/forest-wallpaper-3840x2160-trees-vibrant-3326_wp7uji.jpg"
                    alt="Dark abstract background with flowing green light trails"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>


            <div className="relative z-10 h-full max-w-6xl mx-auto px-8">


                <div className="title-block absolute w-full max-w-md lg:max-w-lg">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6 lg:whitespace-nowrap">Why Choose Us ?</h2>
                    <p className="text-lg text-gray-200 drop-shadow-md">
                        As a sustainability and deep-tech startup founded by IIT alumni, we are dedicated to providing innovative solutions aligned with global goals.
                    </p>
                </div>


                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full lg:w-2/5 h-[45vh] lg:h-[45vh]">

                    <div className="feature-card absolute inset-0">

                        <div className="h-full w-full flex flex-col justify-end rounded-3xl p-8 md:p-10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl border border-white/25 shadow-2xl">
                            <div className="relative z-10">
                                <div className="mb-4"><DiversifiedExpertiseIcon /></div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Diversified Expertise</h3>
                                <p className="text-gray-200">Our foundation by IIT alumni gives us a unique edge in deep-tech solutions, spanning Climate Risk, Geophysical Exploration, and Water Management.</p>
                            </div>
                        </div>
                    </div>

                    <div className="feature-card absolute inset-0">
                        <div className="h-full w-full flex flex-col justify-end rounded-3xl p-8 md:p-10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl border border-white/25 shadow-2xl">
                            <div className="relative z-10">
                                <div className="mb-4"><PhilosophyIcon /></div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Philosophy</h3>
                                <p className="text-gray-200">Our core mission is to achieve environmental sustainability through a dedicated eco-centric approach, providing practical solutions within the UN's SDG framework.</p>
                            </div>
                        </div>
                    </div>

                    <div className="feature-card absolute inset-0">
                        <div className="h-full w-full flex flex-col justify-end rounded-3xl p-8 md:p-10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl border border-white/25 shadow-2xl">
                            <div className="relative z-10">
                                <div className="mb-4"><ApproachIcon /></div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Approach</h3>
                                <p className="text-gray-200">We utilize data-driven tools like our customized Sustainability Dashboard to deliver comprehensive ESG assessments and ensure regulatory compliance (BRSR).</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;