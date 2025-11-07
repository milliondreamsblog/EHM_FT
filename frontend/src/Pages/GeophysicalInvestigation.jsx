import React from 'react'
import AssessmentHero from '../Components/GeophysicalInvestigation/AssessmentHero'
import DashBoardBrief from '../Components/GeophysicalInvestigation/DashBoardBrief'
import FeatureProject from '../Components/GeophysicalInvestigation/FeatureProject'
import SurveyMethods from '../Components/GeophysicalInvestigation/SurveyMethods'
import SubHeading from '../Components/GeophysicalInvestigation/SubHeading'
const GeophysicalInvestigation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 ">
      <AssessmentHero />
      <DashBoardBrief />
      <SubHeading/>
      <SurveyMethods/> 
      <FeatureProject/>

    </div>
  )
}

export default GeophysicalInvestigation