import React from 'react'
import Team from '../Components/LandingPage/Team'

import { members, advisors, experts } from '../Data/Data'
import Hero from '../Components/About/Hero'
import ChooseUs from '../Components/About/ChooseUS'

import WhoWeAre from '../Components/About/WhoWeAre'

import { WhyChooseSection } from '../Components/WhyChooseUs/WhyChooseSection'
import { Title } from '../Components/Title'
import WhyChooseUs from '../Components/About/WhyChooseUs'
import CertifiedLogo from '../Components/LandingPage/certified_logo'


const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 ">
      <Hero />


      <WhoWeAre />


      <WhyChooseSection title='Focus Area' />


      <WhyChooseUs />


      <CertifiedLogo/>


      <Team title="Our Team" members={members} />


      <Team title="Our Advisors" members={advisors} />


      <Team title="Our Experts" members={experts} />

    </div>
  )
}

export default About