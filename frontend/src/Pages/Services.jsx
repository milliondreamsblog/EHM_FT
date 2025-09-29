import React from "react";
import ServicesSection from "../Components/LandingPage/ServiceSection";
import OfferingsHero from "../Components/OfferingsHeroSection/OfferingsHero";

const ServicePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
            <OfferingsHero />
            <ServicesSection />

        </div>
    )
}

export default ServicePage;