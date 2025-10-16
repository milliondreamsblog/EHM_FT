import React, { useRef } from "react";
// import { Player } from "@lottiefiles/react-lottie-player";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeader } from "../WhyChooseUs/SectionHeader";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



gsap.registerPlugin(ScrollTrigger);

  // Data separation: Define the purpose cards data
  const purposeData = [
    {
      id: 1,
      title: "Our Expertise",
      description:
        "Founded by IIT alumni, we excel in deep-tech across Climate Risk, Geophysical Exploration, and Water Management—empowering businesses with reliable IT solutions to thrive in the digital era.",
      lottieSrc: "https://lottie.host/ee7ee08e-12f5-46d6-9f9c-ae0596c7b02d/wawsYz6ew6.lottie",
    },
    {
      id: 2,
      title: "Our Philosophy",
      description:
        "Our core mission is to achieve environmental sustainability through a dedicated eco-centric approach, providing practical solutions within the UN's SDG framework.",
      lottieSrc: "https://lottie.host/68a6f114-e3dd-4b39-8a9d-59a53cb19074/KFgACO7RCb.lottie",
    },
    {
      id: 3,
      title: "Our Approach",
      description:
        "We utilize data-driven tools like our customized Sustainability Dashboard to deliver comprehensive ESG assessments and ensure regulatory compliance (BRSR).",
      lottieSrc: "https://lottie.host/45c78a2b-83b8-4019-b7bd-b5b4adabbeee/TkllICNioR.lottie"
      ,
    },
  ];


function PurposeCard({ lottieSrc, title, description }) {
  return (
    <div className="purpose-card group relative overflow-hidden bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border border-slate-200 flex flex-col items-center text-center transition-all duration-300 ease-in-out">
      {/* Background circles */}
      <div className="h-[10em] w-[10em] sm:h-[12em] sm:w-[12em] bg-[#19a289] rounded-full absolute bottom-full -left-[6em] scale-[850%] z-[-1] duration-[400ms]" />
      <div className="h-[8em] w-[8em] sm:h-[10em] sm:w-[10em] bg-[#138c76] rounded-full absolute bottom-full -left-[5em] scale-[650%] z-[-1] duration-[400ms]" />
      <div className="h-[6em] w-[6em] sm:h-[8em] sm:w-[8em] bg-[#0d6d5b] rounded-full absolute bottom-full -left-[4em] scale-[500%] z-[-1] duration-[400ms] " />
      <div className="h-[4em] w-[4em] sm:h-[6em] sm:w-[6em] bg-[#08493e] rounded-full absolute bottom-full -left-[3em] scale-[400%] z-[-1] duration-[400ms]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <DotLottieReact
          autoplay
          loop
          src={lottieSrc}
          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
        />
        <h2 className="text-2xl sm:text-3xl font-bold  mt-4 mb-3 text-white transition-colors duration-200">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg  leading-relaxed text-white transition-colors duration-200">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Mission() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.set([".intro-p", ".purpose-card"], { autoAlpha: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(".intro-title .word", {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        ease: "power3.out",
        duration: 1,
      })
        .to(
          ".intro-p",
          {
            autoAlpha: 1,
            y: 0,
            ease: "power2.inOut",
            duration: 0.8,
          },
          "<0.2"
        )
        .to(
          ".purpose-card",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.2,
            ease: "power3.inOut",
            duration: 1,
          },
          "<0.1"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="about-section py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-100 text-slate-800 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-6 lg:mb-6 -translate-y-8 sm:-translate-y-12 md:-translate-y-16">
          <div className="intro-title">
            <SectionHeader title="Why Choose us" subtitle="" />
          </div>
        </div>

        {/* Cards - Now using mapped data and reusable component */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 -translate-y-8 sm:-translate-y-12 md:-translate-y-16">
          {purposeData.map((card) => (
            <PurposeCard
              key={card.id}
              lottieSrc={card.lottieSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}