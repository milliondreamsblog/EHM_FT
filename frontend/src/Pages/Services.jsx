import React from "react";
import OfferingAssesment from "../Components/OfferingsHeroSection/OfferingAssesment";
import CalculusIqOffering from "../Components/OfferingsHeroSection/CalculusIqOffering";
import ServicesSection from "../Components/LandingPage/ServiceSection";
import RiskAssessment from "../Components/Risk Assessment/RiskAssessment";
import RiskQuestionnaire from "../Components/Risk Assessment/RiskQuestionnaire";
import HelpSection from "../Components/HelpSection";
import OfferingsHero from "../Components/OfferingsHeroSection/OfferingsHero";

const ServicePage = () => {
    return(
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50"> 
            <OfferingsHero />
             
            <ServicesSection/>
            <RiskAssessment/>
            <RiskQuestionnaire/>
             <CalculusIqOffering />
            <OfferingAssesment/>
            <HelpSection/>
           
        </div>
    )
}

export default ServicePage;