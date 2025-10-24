import React, { useState, useEffect, Suspense, lazy } from "react";
import ServicesSection from "../Components/LandingPage/ServiceSection";
import RiskAssessment from "../Components/Risk Assessment/RiskAssessment";
import RiskQuestionnaire from "../Components/Risk Assessment/RiskQuestionnaire";
import HelpSection from "../Components/HelpSection";
import WaterbodyRestoration from "../Components/WaterbodyRestoration";
import EhmOffering from "../Components/OfferingsHeroSection/Offerings_writeup";
import Offerings_ShowAll from "../Components/OfferingsHeroSection/Offerings_ShowAll";

// Lazy load components with React.lazy for better performance
const OfferingsHero = lazy(() => import("../Components/OfferingsHeroSection/OfferingsHero"));
const CalculusIqOffering = lazy(() => import("../Components/OfferingsHeroSection/CalculusIqOffering"));
const OfferingAssesment = lazy(() => import("../Components/OfferingsHeroSection/OfferingAssesment"));

// Loading component
const LoadingSpinner = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const ServicePage = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Remove any potential scroll locks when component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    if (!isMounted) {
        return <LoadingSpinner />;
    }

    return (
        <div className="min-h-screen bg-white">
            <style jsx global>{`
                html, body {
                    overflow-x: hidden;
                    margin: 0;
                    padding: 0;
                }
                #root {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
            `}</style>

            <Suspense fallback={<LoadingSpinner />}>
                <OfferingsHero />
                <div className="bg-gradient-to-br from-green-50 to-teal-50">
                    <EhmOffering/>
                    <Offerings_ShowAll/>
                    <ServicesSection/>
                    <RiskAssessment/>
                    <RiskQuestionnaire/>
                    <Suspense fallback={null}>
                        <CalculusIqOffering />
                        <OfferingAssesment/>
                    </Suspense>
                    <HelpSection/>
                    <WaterbodyRestoration />
                </div>
            </Suspense>
        </div>
    )
}

export default ServicePage;