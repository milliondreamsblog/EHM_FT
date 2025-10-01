import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DiversifiedExpertiseIcon = () => (
  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="white"
      strokeWidth="1.5"
    >
      <path d="M12 14l-8-4 8-4 8 4-8 4z"></path>
      <path d="M4 14v4l8 4 8-4v-4"></path>
      <path d="M20 10V6l-8-4-8 4v4l8 4 8-4z"></path>
    </svg>
  </div>
);

const PhilosophyIcon = () => (
  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="white"
      strokeWidth="1.5"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="M12 2a10 10 0 00-9.95 9.13M22 12a10 10 0 01-9.13 9.95"></path>
    </svg>
  </div>
);

const ApproachIcon = () => (
  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="white"
      strokeWidth="1.5"
    >
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
      <path d="M13 13l6 6"></path>
    </svg>
  </div>
);

const WhyChooseUsSection = () => {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth < 768) {
      // 📱 Mobile: just fade cards in order
      gsap.utils.toArray(".feature-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });
    } else {
      // pinned animation
      const titleBlock = ".title-block";
      const cards = gsap.utils.toArray(".feature-card");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=1200",
        },
      });

      gsap.set(titleBlock, {
        xPercent: -50,
        yPercent: -50,
        top: "50%",
        left: "50%",
      });
      gsap.set(cards, {
        position: "absolute",
        top: 0,
        opacity: 0,
        y: 50,
        scale: 0.9,
      });

      timeline
        .fromTo(
          titleBlock,
          { opacity: 1, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" }
        )
        .to(titleBlock, {
          left: "25%",
          duration: 0.5,
          ease: "power2.inOut",
        }, "+=0.25")
        .to(cards[0], { opacity: 1, y: 0, scale: 1, duration: 0.5 }, "-=0.5")
        .to({}, { duration: 0.5 })
        .to(cards[0], { opacity: 0, y: -50, scale: 0.9, duration: 0.5 }, "swap2")
        .to(cards[1], { opacity: 1, y: 0, scale: 1, duration: 0.5 }, "swap2")
        .to({}, { duration: 0.5 })
        .to(cards[1], { opacity: 0, y: -50, scale: 0.9, duration: 0.5 }, "swap3")
        .to(cards[2], { opacity: 1, y: 0, scale: 1, duration: 0.5 }, "swap3")
        .to({}, { duration: 0.5 });
    }
  }, []);

  return (
    <section
      ref={container}
      className="w-full min-h-screen relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="https://res.cloudinary.com/dlpluej6w/image/upload/v1757114594/forest-wallpaper-3840x2160-trees-vibrant-3326_wp7uji.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-24 top-1/3">
        {/* Title */}
        <div className="title-block text-center lg:absolute lg:text-left lg:top-1/2 lg:-translate-y-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Why Choose Us ?
          </h2>
          <p className="text-base sm:text-lg text-gray-200 drop-shadow-md max-w-xl mx-auto lg:mx-0">
            As a sustainability and deep-tech startup founded by IIT alumni, we
            are dedicated to providing innovative solutions aligned with global
            goals.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 space-y-8 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:w-2/5 lg:space-y-0 lg:h-[45vh]">
          {/* Card 1 */}
          <div className="feature-card relative">
            <div className="h-full min-h-[300px] sm:min-h-[350px] lg:h-full flex flex-col justify-end rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl border border-white/25 shadow-2xl">
              <div>
                <div className="mb-4">
                  <DiversifiedExpertiseIcon />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Diversified Expertise
                </h3>
                <p className="text-gray-200">
                  Our foundation by IIT alumni gives us a unique edge in
                  deep-tech solutions, spanning Climate Risk, Geophysical
                  Exploration, and Water Management.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="feature-card relative">
            <div className="h-full min-h-[300px] sm:min-h-[350px] lg:h-full flex flex-col justify-end rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl border border-white/25 shadow-2xl">
              <div>
                <div className="mb-4">
                  <PhilosophyIcon />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Our Philosophy
                </h3>
                <p className="text-gray-200">
                  Our core mission is to achieve environmental sustainability
                  through a dedicated eco-centric approach, providing practical
                  solutions within the UN's SDG framework.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="feature-card relative">
            <div className="h-full min-h-[300px] sm:min-h-[350px] lg:h-full flex flex-col justify-end rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl border border-white/25 shadow-2xl">
              <div>
                <div className="mb-4">
                  <ApproachIcon />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Our Approach
                </h3>
                <p className="text-gray-200">
                  We utilize data-driven tools like our customized Sustainability
                  Dashboard to deliver comprehensive ESG assessments and ensure
                  regulatory compliance (BRSR).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
