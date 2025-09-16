import React, { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeader } from "../WhyChooseUs/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
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
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 -translate-y-8 sm:-translate-y-12 md:-translate-y-16">
          <div className="intro-title">
            <SectionHeader title="Who We Are" subtitle="" />
          </div>
          <p className="intro-p max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mt-4">
            EHM is a sustainability and deep tech startup founded by IIT alumni,
            offering services and solutions aligned with the Sustainable
            Development Goals (SDGs). We assist industries, government
            organizations and HEI’s in enhancing their ESG practices, meeting
            regulatory requirements, managing climate risks, and implementing
            sustainability strategies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 -translate-y-8 sm:-translate-y-12 md:-translate-y-16">
          {/* Vision Card */}
          <div className="purpose-card group relative overflow-hidden bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border border-slate-200 flex flex-col items-center text-center transition-all duration-300 ease-in-out">
            {/* Background circles */}
            <div className="h-[10em] w-[10em] sm:h-[12em] sm:w-[12em] bg-[#19a289] rounded-full absolute bottom-full -left-[6em] group-hover:scale-[850%] z-[-1] duration-[400ms]" />
            <div className="h-[8em] w-[8em] sm:h-[10em] sm:w-[10em] bg-[#138c76] rounded-full absolute bottom-full -left-[5em] group-hover:scale-[650%] z-[-1] duration-[400ms]" />
            <div className="h-[6em] w-[6em] sm:h-[8em] sm:w-[8em] bg-[#0d6d5b] rounded-full absolute bottom-full -left-[4em] group-hover:scale-[500%] z-[-1] duration-[400ms]" />
            <div className="h-[4em] w-[4em] sm:h-[6em] sm:w-[6em] bg-[#08493e] rounded-full absolute bottom-full -left-[3em] group-hover:scale-[400%] z-[-1] duration-[400ms]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <Player
                autoplay
                loop
                src="/lottie-assets/vision-animation/animations/10e621af-4237-47b1-a332-563b013787cd.json"
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-4 mb-3 group-hover:text-white transition-colors duration-200">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed group-hover:text-white transition-colors duration-200">
                To be the most trusted and preferred partner for businesses
                seeking innovative and reliable IT solutions, empowering them to
                achieve their goals and thrive in the digital age.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="purpose-card group relative overflow-hidden bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border border-slate-200 flex flex-col items-center text-center transition-all duration-300 ease-in-out">
            {/* Background circles */}
            <div className="h-[10em] w-[10em] sm:h-[12em] sm:w-[12em] bg-[#19a289] rounded-full absolute bottom-full -left-[6em] group-hover:scale-[850%] z-[-1] duration-[400ms]" />
            <div className="h-[8em] w-[8em] sm:h-[10em] sm:w-[10em] bg-[#138c76] rounded-full absolute bottom-full -left-[5em] group-hover:scale-[650%] z-[-1] duration-[400ms]" />
            <div className="h-[6em] w-[6em] sm:h-[8em] sm:w-[8em] bg-[#0d6d5b] rounded-full absolute bottom-full -left-[4em] group-hover:scale-[500%] z-[-1] duration-[400ms]" />
            <div className="h-[4em] w-[4em] sm:h-[6em] sm:w-[6em] bg-[#08493e] rounded-full absolute bottom-full -left-[3em] group-hover:scale-[400%] z-[-1] duration-[400ms]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <Player
                autoplay
                loop
                src="/lottie-assets/paper-airplane-animation/animations/975d33bb-bc2f-413a-bcdf-0ab3647629ca.json"
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-4 mb-3 group-hover:text-white transition-colors duration-200">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed group-hover:text-white transition-colors duration-200">
                To deliver exceptional IT services and solutions through a
                customer-centric approach, fostering a culture of continuous
                improvement, and leveraging cutting-edge technology to drive
                business success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
