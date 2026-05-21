import Team from '../Components/LandingPage/Team';
import { members, advisors, experts } from '../Data/Data';
import HeroNew from '../Components/About/Hero';
import WhoWeAre from '../Components/About/WhoWeAre';
import Awards from '../Components/About/Awards';
import WhyChooseUs from '../Components/About/WhyChooseUs';
import CertifiedLogo from '../Components/LandingPage/certified_logo';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 ">
      <HeroNew />
      {/*<Hero />*/}
      {/*<HeroSection2 /> */}


      {<WhoWeAre />}


      {/*<WhyChooseSection title='Focus Area' />*/}


      {<WhyChooseUs />}
      {/* <Mission /> */}


      <CertifiedLogo />


      <Team title="Our Team" members={members} />


      <Team title="Our Advisors" members={advisors} />


      <Team title="Our Experts" members={experts} />

      <Awards />

    </div>
  )
}

export default About
