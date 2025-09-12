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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <HeroSection />


      <ScrollReveal>
        <Logo />
      </ScrollReveal>

      {/* <ServicePage /> */}

      <ScrollReveal>
        <EhmBrief />
      </ScrollReveal>

      <ScrollReveal>
        <ServiceSection />
      </ScrollReveal>
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
      <ScrollReveal>
        <Team title="Our Team" members={members} limit={3} />
      </ScrollReveal>

      <ScrollReveal>
        <Partners_logo />
      </ScrollReveal>

      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      


      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <FootPrint />
      </ScrollReveal>

      

    </div>
  );
};

export default HomePage;
