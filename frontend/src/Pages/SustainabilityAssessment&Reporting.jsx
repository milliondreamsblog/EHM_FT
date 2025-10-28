import React from 'react'
import AssessmentHero from '../Components/SustainabilityAssessment/AssessmentHero'
import DashBoardBrief from '../Components/SustainabilityAssessment/DashBoardBrief'
import DashboardFeatures from '../Components/SustainabilityAssessment/DashboardFeatures'
import ImplementationPlanSection from '../Components/SustainabilityAssessment/ImplementationPlanSection'
import SubscriptionPlans from '../Components/SustainabilityAssessment/SubscriptionPlans'


const SustainabilityAssessment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 ">
      <AssessmentHero />
      <DashBoardBrief />
      <DashboardFeatures/>
      <ImplementationPlanSection/>  
      <SubscriptionPlans/>  

    </div>
  )
}

export default SustainabilityAssessment