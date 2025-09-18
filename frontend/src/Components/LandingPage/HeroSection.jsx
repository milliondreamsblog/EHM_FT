import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';

const IMAGE_ASSETS = {
  hill1: '/ParallexHeroImages/hill1.png',
  hill2: '/ParallexHeroImages/hill2.png',
  hill3: '/ParallexHeroImages/hill3.png',
  hill4: '/ParallexHeroImages/hill4.png',
  hill5: '/ParallexHeroImages/hill5.png',
  leaf: '/ParallexHeroImages/leaf.png',
  plant: '/ParallexHeroImages/plant.png',
  tree: '/ParallexHeroImages/tree.png',
};

// responsive
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < breakpoint);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);
  return isMobile;
};

const ParallaxImage = ({ src, alt, y, x, zIndex, ...props }) => (
  <motion.img
    src={src}
    alt={alt}
    style={{ y, x, zIndex, willChange: 'transform' }}
    className="absolute bottom-0 left-0 w-full object-cover pointer-events-none"
    {...props}
  />
);

const HeroSection = () => {
  const isMobile = useIsMobile();
  const targetRef = useRef(null);
  const h1Ref = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
      });


      tl.from('.underline-anim', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.7,
        ease: 'power2.inOut',
        stagger: 0.2,
      })

        .to('.underline-anim', {
          scaleX: 0,
          transformOrigin: 'right',
          duration: 0.7,
          ease: 'power2.inOut',
          stagger: 0.2,
        }, '+=1');
    }, h1Ref);


    return () => ctx.revert();
  }, []);


  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
    enabled: !isMobile,
  });

 
  const textYTarget = useTransform(scrollYProgress, [0, 0.2, 0.7], ['0%', '50%', '500%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const hill1YTarget = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const hill2YTarget = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const hill3YTarget = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const treeYTarget = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const hill4YTarget = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);
  const hill4XTarget = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const hill5YTarget = useTransform(scrollYProgress, [0, 1], ['0%', '2%']);
  const hill5XTarget = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const leafYTarget = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const leafXTarget = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

 
  const springConfig = { damping: 50, stiffness: 400 };
  const textY = useSpring(isMobile ? '0%' : textYTarget, springConfig);
  const hill1Y = useSpring(isMobile ? '0%' : hill1YTarget, springConfig);
  const hill2Y = useSpring(isMobile ? '0%' : hill2YTarget, springConfig);
  const hill3Y = useSpring(isMobile ? '0%' : hill3YTarget, springConfig);
  const treeY = useSpring(isMobile ? '0%' : treeYTarget, springConfig);
  const hill4Y = useSpring(isMobile ? '0%' : hill4YTarget, springConfig);
  const hill4X = useSpring(isMobile ? '0%' : hill4XTarget, springConfig);
  const hill5Y = useSpring(isMobile ? '0%' : hill5YTarget, springConfig);
  const hill5X = useSpring(isMobile ? '0%' : hill5XTarget, springConfig);
  const leafY = useSpring(isMobile ? '0%' : leafYTarget, springConfig);
  const leafX = useSpring(isMobile ? '0%' : leafXTarget, springConfig);

  return (
    <section
      ref={targetRef}
      id="home"
      className="relative h-screen w-full overflow-hidden bg-[#f0f9ff]"
    >
      <ParallaxImage src={IMAGE_ASSETS.hill1} alt="Background hill 1" y={hill1Y} zIndex={10} />
      <ParallaxImage src={IMAGE_ASSETS.hill2} alt="Background hill 2" y={hill2Y} zIndex={11} />
      <ParallaxImage src={IMAGE_ASSETS.hill3} alt="Background hill 3" y={hill3Y} zIndex={12} />
      <ParallaxImage src={IMAGE_ASSETS.tree} alt="Tree" y={treeY} zIndex={13} />
      <ParallaxImage src={IMAGE_ASSETS.hill4} alt="Foreground hill 4" y={hill4Y} x={hill4X} zIndex={14} />
      <div className="absolute top-0 left-0 h-full w-full bg-black/20 z-20"></div>
      <ParallaxImage
        src={IMAGE_ASSETS.leaf}
        alt="Foreground leaf"
        y={leafY}
        x={leafX}
        zIndex={15}
        className="absolute top-0 left-0 w-[50vw] sm:w-[40vw] lg:w-[30vw] object-contain pointer-events-none"
      />

      <motion.div
        style={{ y: textY, opacity: isMobile ? 1 : textOpacity, willChange: 'transform, opacity' }}
        className="relative z-20 flex h-full flex-col items-center justify-center text-center -translate-y-28 md:-translate-y-40"
      >
        <div className='flex flex-col items-center -translate-y-19'>

          <h1
            ref={h1Ref}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase leading-tight tracking-wider text-white"

          >
            <span className="relative inline-block pb-2">
              Sustainability
              <span className="underline-anim absolute bottom-0 left-0 h-1.5 w-full bg-white" />
            </span>
            <br />
            <span className="relative inline-block pb-2">
              Through Eco-Centric
              <span className="underline-anim absolute bottom-0 left-0 h-1.5 w-full bg-white" />
            </span>
            <br />
            <span className="relative inline-block pb-2">
              Approach
              <span className="underline-anim absolute bottom-0 left-0 h-1.5 w-full bg-white" />
            </span>
          </h1>
          <p
            className="mt-4 mb-8 text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-white max-w-[90%]"
          >
            <span className="text-green-200">TRANSFORM</span> YOUR BUSINESS WITH <span className="text-green-200">SUSTAINABLE</span> INNOVATION
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center rounded-lg bg-white px-6 py-2 md:px-8 md:py-3 font-medium text-[#004f3e] shadow-lg transition-colors duration-300 hover:bg-[#004f3e] hover:text-white"
            >
              Book a Call
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border-2 border-white bg-white/20 px-6 py-2 md:px-8 md:py-3 font-medium text-white shadow-lg backdrop-blur-sm transition-colors duration-300 hover:bg-white/30"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>

      <ParallaxImage src={IMAGE_ASSETS.hill5} alt="Foreground hill 5" y={hill5Y} x={hill5X} zIndex={30} />
      <ParallaxImage src={IMAGE_ASSETS.plant} alt="Foreground plants" zIndex={40} />
    </section>
  );
};

export default HeroSection;