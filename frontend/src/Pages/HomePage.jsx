// src/Pages/HomePage.jsx

import React from 'react';


import LogoScroll from "../Components/LandingPage/Logoscroll"
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
import ContactSection from "../Components/LandingPage/CTA"
import HeroSection2 from '../Components/LandingPage/HeroSection2';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#ededed]">

      <HeroSection2 />
      {/* <HeroSection /> */}
      <LogoScroll/>
      {/* <Logo /> */}
      
      <EhmBrief />
      <ServiceSection />
      <ContactSection /> 
      <Partners_logo />
      <Testimonials />
     
      {/* <TestimonialsSection /> */}
      {/* <NewsLetter /> */}
      <Resource />
      {/* <LatestBlogSection /> */}
      
      <FootPrint />
      {/* <Feature /> */}
    </div>
  );
};

export default HomePage;