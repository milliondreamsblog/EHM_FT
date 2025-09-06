import React from 'react'
import Team from '../Components/LandingPage/Team'

import { members, advisors, experts } from '../Data/Data'
import Hero from '../Components/About/Hero'
import ChooseUs from '../Components/About/ChooseUS'
import Description from '../Components/About/Description'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 ">
      <Hero />
       
       <Description />

      <Team title="Our Team" members={members} />


      <Team title="Our Advisors" members={advisors} />


      <Team title="Our Experts" members={experts} />

    </div>
  )
}

export default About