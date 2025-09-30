import HeroSection from "../Components/LandingPage/HeroSection";
import FootPrint from "../Components/LandingPage/FootPrint";
import Testimonials from "../Components/LandingPage/Testimonials";
// import Product from "../Components/LandingPage/Product";
import Team from "../Components/LandingPage/Team";
import Logo from "../Components/LandingPage/Logo";
import Partners_logo from "../Components/LandingPage/Partners_logo";

// import ServiceSection from "../Components/LandingPage/ServiceSection";
// import ProductSection from "../Components/ProductSection/ProductSection";
import { members } from "../Data/Data";
import ServicePage from "./Services";
import ServiceSection from "../Components/LandingPage/ServiceSection";
import { TestimonialsSection } from "../Components/LandingPage/testimonials1";
import EhmBrief from "../Components/LandingPage/EhmBrief";

// Scroll animation wrapper
import ScrollReveal from "../Components/Animations/ScrollReveal";
import Resource from "../Components/LandingPage/Resource";
import LatestBlogs from "../Components/LandingPage/LatestBlogs";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#ededed] ">
      <HeroSection />



      <Logo />


      {/* <ServicePage /> */}


      <EhmBrief />



      <ServiceSection />

      {/* <ServicePage /> */}

      {/* <ServiceSection />

import ServiceSection from "../Components/LandingPage/ServiceSection";
import { members } from "../Data/Data";




const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
           
                <HeroSection />
             
                  {/* <Hero/> */}
      {/* <Service /> */}
      {/* <ServiceSection />

                <ProductSection /> */}

      {/* <Service /> */}
      {/* <ServiceSection /> */}
      {/* <ProductSection /> */}
      {/* <Product /> */}

      <Team title="Our Team" members={members} limit={3} />



      <Partners_logo />



      <Testimonials />



      <TestimonialsSection />





      <Resource />




      <LatestBlogs />



      <FootPrint />




    </div>
  );
};

export default HomePage;
