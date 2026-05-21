import React from 'react'
import SEO from '../Components/Common/SEO'
import AssessmentHero from '../Components/SustainabilityAssessment/AssessmentHero'
import DashBoardBrief from '../Components/SustainabilityAssessment/DashBoardBrief'
import DashboardFeatures from '../Components/SustainabilityAssessment/DashboardFeatures'
import ImplementationPlanSection from '../Components/SustainabilityAssessment/ImplementationPlanSection'
import SubscriptionPlans from '../Components/SustainabilityAssessment/SubscriptionPlans'
import FeatureProject from '../Components/SustainabilityAssessment/FeatureProject'


const SustainabilityAssessment = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="STARC Platform | AI-Driven Sustainability Assessment & ESG Reporting"
        description="Future-proof your institution with STARC—an AI-driven sustainability intelligence platform for comprehensive ESG compliance, carbon footprinting, and reporting."
        keywords="STARC, ESG reporting, sustainability assessment, carbon footprinting, sustainability intelligence, EHM Consultancy"
        canonical="/offerings/sustainability-assessment-reporting"
      />
      <AssessmentHero />
      <DashBoardBrief />
      <DashboardFeatures/>
      <ImplementationPlanSection/>  
      <SubscriptionPlans/>  
      <FeatureProject/>
    </div>
  )
}

export default SustainabilityAssessment