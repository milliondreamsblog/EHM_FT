import React from "react";
import ServicesSection from "../Components/LandingPage/ServiceSection";
import RiskAssessment from "../Components/Risk Assessment/RiskAssessment";
import RiskQuestionnaire from "../Components/Risk Assessment/RiskQuestionnaire";
import HelpSection from "../Components/HelpSection";

const ServicePage = () => {
    return(
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50"> 
            <ServicesSection/>
            <RiskAssessment/>
            <RiskQuestionnaire/>
            <HelpSection/>
            
        </div>
    )
}

export default ServicePage;