import HeroSection from "../Components/LandingPage/HeroSection";
import FootPrint from "../Components/LandingPage/FootPrint";
import Testimonials from "../Components/LandingPage/Testimonials";
// import Product from "../Components/LandingPage/Product";
import Team from "../Components/LandingPage/Team";
import Logo from "../Components/LandingPage/Logo";

// import ServiceSection from "../Components/LandingPage/ServiceSection";
// import ProductSection from "../Components/ProductSection/ProductSection";
import { members } from "../Data/Data";
import ServicePage from "./Services";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <HeroSection />

      <ServicePage />
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
      <Team title="Our Team" members={members} />
      <Testimonials />
      <FootPrint />
      <Logo />
    </div>
  );
};

export default HomePage;
