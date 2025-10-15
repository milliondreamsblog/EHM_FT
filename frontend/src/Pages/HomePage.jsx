// src/Pages/HomePage.jsx

import React from 'react';

import LogoScroll from "../Components/LandingPage/Logoscroll";
import HeroSection from "../Components/LandingPage/HeroSection";
import FootPrint from "../Components/LandingPage/FootPrint";
import Testimonials from "../Components/LandingPage/Testimonials";
import Team from "../Components/LandingPage/Team";
import Logo from "../Components/LandingPage/Logo";
import Partners_logo from "../Components/LandingPage/Partners_logo";
import { members } from "../Data/Data";
import ServiceSection from "../Components/LandingPage/ServiceSection";
import { TestimonialsSection } from "../Components/LandingPage/testimonials1";
import EhmBrief from "../Components/LandingPage/EhmBrief";
import Resource from "../Components/LandingPage/Resource";
import NewsLetter from "../Components/LandingPage/NewsLetter";
import Feature from "../Components/LandingPage/Feature";
import LatestBlogSection from "../Components/LandingPage/LatestBlogSection";
import HeroSection2 from '../Components/LandingPage/HeroSection2';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#ededed]">
      <HeroSection2 />
      {/* <HeroSection /> */}

      {/* About EHM */}
      <EhmBrief />

      {/* Offerings */}
      <ServiceSection />

      {/* Completed Projects / Logo Scroll */}
      <LogoScroll />

      {/* ✅ Testimonials now come before Partners */}
      <Testimonials />

      {/* Partners logo moved below Testimonials */}
      <Partners_logo />

      {/* Resources and Footprint sections */}
      <Resource />
      <FootPrint />
    </div>
  );
};

export default HomePage;
