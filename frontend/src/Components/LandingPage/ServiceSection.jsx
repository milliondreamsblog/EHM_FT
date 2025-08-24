import React from 'react';
import ServiceCard from './ServiceCard';

import islandImage from '../../assets/bioremediation-floating-island.jpeg';
import services2 from '../../assets/services2.jpg';
import services3 from '../../assets/services3.png';
import services4 from '../../assets/services4.png';

import servicesBg from '../../assets/services-bg.gif'; 
import Logo from './Logo';
import { Sparkles } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-12 px-6 max-w-screen-xl mx-auto">
      
        <div className="text-center mb-12 py-8">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <Sparkles className="text-teal-500 animate-pulse" size={40} />
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
                        OFFERINGS 
                      </h1>
                      <Sparkles className="text-emerald-500 animate-pulse" size={40} />
                    </div>
                    <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
                  </div>
      
      <ServiceCard
  title="Sustainability Assessment & Reporting"
  description="EHM provides comprehensive sustainability assessments to evaluate an organization’s environmental, social and governance (ESG) performance. Our reporting solutions, customised Sustainability Dashboard help businesses ensure regulatory compliance, enhance transparency and align with global sustainability standards."
  imageUrl={islandImage}
  fileUrl="/docs/bioremediation-case-study.pdf"
  bullets={[
    "ESG Performance Evaluation",
    "Sustainability & Impact Reporting (BRSR, Integrated Reporting, GRI, SASB, CDP)",
    "GHG Accounting & Climate Risk Assessment Dashboard",
    "Compliance Audits & ISO Certifications",
  ]}
/>

      <ServiceCard
  title="Sustainable Environmental Management"
  description="EHM provides sustainable environmental solutions to enhance resource efficiency, promote environmental stewardship and support sustainable practices across various sectors. Our approach integrates cutting-edge technologies and nature-based solutions (NBS) to ensure long-term environmental and economic benefits."
  imageUrl={services3}
  fileUrl="/docs/bioremediation-case-study.pdf"
  bullets={[
    "Project Planning & Monitoring",
    "Restoration of Waterbodies",
    "Quality Control, Assessment & Audits",
    "Sewage & Greywater Management",
    "Decentralized Natural Treatment Systems (DNTS)",
    "Treated Water Reuse & Management",
  ]}
/>


      <ServiceCard
  title="Geophysical Investigation"
  description="EHM specialises in geophysical investigations for subsurface
exploration, leveraging well established geophysical methods and
state of the art instrumentation. Depending upon the specific
requirement of projects and site conditions, we integrate various
methods and industry standard tools to deliver accurate and
data-driven insights."
  imageUrl={services2}
  fileUrl="/docs/bioremediation-case-study.pdf"
  bullets={[
    "Mineral Exploration",
    "Engineering & Geotechnical Investigation",
    "Mining Exploration",
    "Environmental Investigation",
    "Hydrological Investigation",
    "Archaeological Investigation",
  ]}
/>


      <ServiceCard
  title="Urban Planning & Management"
  description="EHM provides strategic solutions to develop sustainable, resilient
and well-planned urban spaces. With a data-driven,
interdisciplinary approach. EHM helps cities, transition toward
circular, resource-efficient and climate-resilient urban centers,
aligning national urban development frameworks."
  imageUrl={services3}
  fileUrl="/docs/bioremediation-case-study.pdf"
  bullets={[
    "Water-Positive & Net-Zero Plan",
    "Climate-Resilient Action Plan",
    "Master Drainage Plan",
    "Circular Green Campus Development",
    "City Sewerage Plan",
    "Resource Efficiency Action Plan",
    "Lake Front Development",
    "GHG Accounting",
  ]}
/>


      <ServiceCard
  title="Climate Risk Intelligence"
  description="We offers advanced, research-driven AI solutions in climate risk
intelligence, delivering high-resolution risk assessments and cropspecific yield projections across historical, current, and future
timelines. Leveraging vast datasets on climate, agriculture, and
socio-demographics, we empower businesses and policymakers
to anticipate and mitigate climate risks with precision."
  imageUrl={services3}
  fileUrl="/docs/bioremediation-case-study.pdf"
  bullets={[
    "Agriculture Risk Intelligence (AgRI.ai)",
    "Climate Data Portal",
    "Urban Climate Risk Intelligence (CityAdapt.ai)",
    "Climate Consulting Servicest",
  ]}
/>


      <ServiceCard
  title="Training & Capacity Building"
  description="EHM provides comprehensive training programs, workshops,
hands-on sessions and webinars designed to enhance the skills
and knowledge of industry professionals, government officials and
municipal engineers. Our goal is to build capacity, increase
awareness and integrate sustainability into operations through
practical learning and innovative tools."
  imageUrl={services4}
  fileUrl="/docs/bioremediation-case-study.pdf"
  bullets={[
    "Environmental, Social, and Governance (ESG)",
    "Industry 4.0, IoT & Automation",
    "Environmental & Water Management",
    "AI & Machine Learning",
    "Regulatory Compliance Training",
    "Geophysical Data Acquisition & Processing",
  ]}
/>


    </section>
  );
};

export default ServicesSection;
