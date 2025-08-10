import React from 'react'
import Team from '../Components/LandingPage/Team'
import { advisors, members } from '../Data/Data'
import ChooseUs from '../Components/About/ChooseUS'
import Hero from '../Components/About/Hero'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 ">
        <Hero/>
            <Team title = "Our Team" members = {members}/>
          <Team title="Our Advisors" members={advisors}/>
       {/* <ChooseUs/> */}
  </div>
  )
}

export default About