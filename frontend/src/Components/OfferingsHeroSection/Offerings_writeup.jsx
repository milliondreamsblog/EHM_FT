import React, { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeader } from "../WhyChooseUs/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export default function AboutIntro() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-16 pb-0 bg-gradient-to-b from-teal-50 via-teal-100/40 to-teal-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-0 -translate-y-0">

          <p className="intro-p max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 leading-snug mt-0 mb-0 text-left">

            <span className="font-semibold text-slate-800">EHM</span> provides{" "}
            <span className="font-semibold text-emerald-600">
              integrated sustainability solutions
            </span>{" "}
            powered by science, technology, and systems thinking.
            <br />

            Our offerings span{" "}
            <span className="font-semibold text-emerald-600">
              Water-Positive Systems, Sustainability & ESG, Geophysical
              Exploration, and Climate Risk Management
            </span>{" "}
            — designed to help clients achieve long-term environmental and
            economic value.
            <br />

            We partner with{" "}
            <span className="font-semibold text-slate-800">
              cities, industries, and institutions
            </span>
            , supporting them throughout their sustainability journey — from{" "}
            <span className="font-semibold text-emerald-600">
              strategy and compliance
            </span>{" "}
            to{" "}
            <span className="font-semibold text-emerald-600">
              implementation and measurable impact
            </span>
            .
          </p>

        </div>
      </div>
    </section>
  );
}
