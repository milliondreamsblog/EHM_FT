import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
  IconSearch,
  IconWorld,
  IconCommand,
  IconCaretLeftFilled,
  IconCaretDownFilled,
} from "@tabler/icons-react";

// Utility function for conditional class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// The main App component is now a wrapper for the MacbookScroll animation
export default function CalculusIqOffering() {
  return (
    <>
      <style>{`
        :root {
          --primary-color: #79B491;
        }
        body {
            font-family: 'Inter', sans-serif;
        }
      `}</style>
      {/* Set a white background for the entire section */}
      <div className="w-full overflow-hidden bg-white">
        <MacbookScroll
          title={
            <div className="space-y-6 text-left text-black">
                <div className="inline-block bg-emerald-100 text-emerald-800 text-sm font-medium px-4 py-2 rounded-full">Product</div>
                <h1 className="text-black font-medium text-4xl leading-snug">
                  Introducing
                  <br />
                  <span className="font-extrabold text-6xl">Calculus IQ</span>
                </h1>
                <p className="text-xl text-gray-500 max-w-md">
                  The Calculus IQ by Calculus Carbon is a self-serve evaluation tool for a sustainable project developer.
                </p>
            </div>
          }
          badge={
            <a href="#" className="inline-flex items-center px-6 py-3 bg-[var(--primary-color)] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-colors">
                Explore product
                <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          }
          src={`https://lh3.googleusercontent.com/aida-public/AB6AXuDGOUWfPCuBGFf57pwNuxvvOurTBG9SHyxAz-wxEH42WV2WuUQY9EKFG16WtWJ5oLq5T1NxXGLbK17hdsNSAG5cWHoE0GOBi98QBQeiJNcU9VuxDRTgpihfBrcUd-x-nvUlpr3yz7rdJeoW9CKe4jujvk43lbRi0j26XCdwfhc8GJ_2of13EEwGflchF7LfOPLkqujGFeJRDPTBP3hxPD04La9o260V8HFNuFohMzoxY8L2SO6-dgBzlAwEqgRen6V2GUP9l3YRbIY`}
          showGradient={true}
        />
      </div>
    </>
  );
}


// --- All components for the Macbook Scroll animation are included below ---

const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, 1.5]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, 1.5]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    // The ref is on the scrollable container. min-h provides the scroll length.
    <div ref={ref} className="w-full min-h-[150vh]">
      {/* This container sticks to the top and holds the layout */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* This container centers the content and creates the two columns */}
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-8 px-8">
          {/* Left Column: Text */}
          <motion.div
            style={{
              translateY: textTransform,
              opacity: textOpacity,
            }}
            className="w-1/2"
          >
            {title}
          </motion.div>

          {/* Right Column: Laptop */}
          <div className="relative flex h-full w-1/2 items-center justify-center [perspective:800px]">
            {/* This inner div scales the entire laptop to fit its column */}
            <div className="transform scale-[0.6] lg:scale-75">
              <Lid
                src={src}
                scaleX={scaleX}
                scaleY={scaleY}
                rotate={rotate}
                translate={translate}
              />
              {/* Base area */}
              <div className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]">
                {/* above keyboard bar */}
                <div className="relative h-10 w-full">
                  <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
                </div>
                <div className="relative flex">
                  <div className="mx-auto h-full w-[10%] overflow-hidden">
                    <SpeakerGrid />
                  </div>
                  <div className="mx-auto h-full w-[80%]">
                    <Keypad />
                  </div>
                  <div className="mx-auto h-full w-[10%] overflow-hidden">
                    <SpeakerGrid />
                  </div>
                </div>
                <Trackpad />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
                {showGradient && (
                  <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                )}
                {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px #171717 inset",
          }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
        >
          <span className="text-white">
            <AceternityLogo />
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div className="absolute inset-0 rounded-lg bg-[#272729]" />
        <img
          src={src}
          alt="macbook screen"
          className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
        />
      </motion.div>
    </div>
  );
};

const Trackpad = () => {
  return (
    <div
      className="mx-auto my-1 h-32 w-[40%] rounded-xl"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

const Keypad = () => {
    return (
        <div className="mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#050505] p-1 [will-change:transform]">
            {/* Rows of keys */}
            <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">{[...Array(14)].map((_, i) => <KBtn key={`f-key-${i}`} />)}</div>
            <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">{[...Array(14)].map((_, i) => <KBtn key={`num-key-${i}`} />)}</div>
            <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">{[...Array(14)].map((_, i) => <KBtn key={`q-key-${i}`} />)}</div>
            <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">{[...Array(13)].map((_, i) => <KBtn key={`a-key-${i}`} />)}</div>
            <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">{[...Array(13)].map((_, i) => <KBtn key={`z-key-${i}`} />)}</div>
            <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">{[...Array(8)].map((_, i) => <KBtn key={`space-key-${i}`} />)}</div>
        </div>
    );
};

const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}) => {
  return (
    <div
      className={cn(
        "[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white",
      )}
    >
      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]",
          className,
        )}
        style={{
          boxShadow:
            "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-[5px] text-neutral-200",
            childrenClassName,
            backlit && "text-white",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const SpeakerGrid = () => {
  return (
    <div
      className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    ></div>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

