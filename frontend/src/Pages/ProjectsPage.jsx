import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MapPin, ChevronDown, ChevronUp, ExternalLink, Share2, Bookmark, Eye, Award, Target, Zap, Users, Calendar } from 'lucide-react';
import Logo from "../Components/LandingPage/Logo";
import { useLocation } from "react-router-dom";

// ProjectsPage.jsx - Complete Implementation
// All data, components, and logic consolidated in this file

// 1. DATA SECTION (Contains all 18 projects)
// =============================================================================
const projectImages = {
  lucknowlesgis: "/ProjectsImage/img1.jpg",
  guestlecture : "/ProjectsImage/nsut.jpg",
  climateRiskasses: "ProjectsImage/Climate Risk Assessment for Jhansi.png",
  nationalConferenceAISustainableCities: "/ProjectsImage/img1.jpg",
  annualSustainabilityReport202425CSJMUDashboard: "/ProjectsImage/Preparation of the Annual Sustainability Report 2024–25 and Development of the CSJMU Sustainability Dashboard – Kanpur.jpg",
  representationEcoEntrepreneurshipConclaveJagran: "/ProjectsImage/hi.jpeg",
  representationCSJMEntrepreneurshipConclaveJagran: "/ProjectsImage/Representation at CSJM-Entrepreneurship & Sustainability Conclave – Jagran Institute of Management, Kanpur.jpg",
  restorationCSJMUniversityCampusWaterbody: "ProjectsImage/Restoration of CSJM University Campus Waterbody.jpg",
  restorationKIMSPondPhase1: "ProjectsImage/Restoration of KIMS Pond – Phase I (10 Acres), Hyderabad, Telangana.png",
  socialImpactAssessmentJhansiSmartCity: "ProjectsImage/Susreporting.jpg",
  sustainabilityAssessmentReporting: "/ProjectsImage/Sustainability Assessment & Reporting.jpeg",
  thirdPartyAuditUpgradationBeautificationNanaraoPark: "ProjectsImage/Third party Audit of Upgradation and Beautification of Nanarao Park.jpg",
  thirdPartyAudit26MLDSTP: "ProjectsImage/Third-Party Audit of 26 MLD Sewage Treatment Plant (STP).jpg",
  thirdPartyAuditAtiyaTalabRestorationJhansi: "ProjectsImage/Third-Party Audit of Atiya Talab Restoration Project",
  thirdPartyAuditICCC: "ProjectsImage/Third-Party Audit of ICCC.jpg",
  thirdPartyAuditSolarPanelInstallationABDArea: "ProjectsImage/Third-Party Audit of Installation of Solar Panel on Govt. Buildings of ABD Area.png",
  thirdPartyAuditLaxmiTaalRedevelopmentJhansiPNG: "ProjectsImage/Third-Party Audit of Laxmi Taal Redevelopment Project- Jhansi Smart City, Uttar Pradesh.png",
  thirdPartyAuditLaxmiTaalRedevelopmentJhansiJPG: "ProjectsImage/Third-Party Audit of Laxmi Taal Redevelopment Project.jpg",
  thirdPartyAuditNarayanBaghParkRedevelopment: "ProjectsImage/Third-Party Audit of Narayan Bagh Park Redevelopment.jpg",
  thirdPartyAuditPaniwaliDharamshalaRestoration: "ProjectsImage/Third-Party Audit of Paniwali Dharamshala Restoration.jpg",
  thirdPartyAuditRainwaterHarvestingInitiative: "ProjectsImage/Third-Party Audit of Rainwater Harvesting Initiative.png",
  thirdPartyAuditSolidWasteManagementSystem: "ProjectsImage/Third-Party Audit of Solid Waste Management System.jpg",
  thirdPartyAuditUpgradationSwimmingPoolNanaraoPark: "ProjectsImage/Third-Party Audit of Upgradation of Swimming Pool At Nanarao Park.jpg",
  thirdPartyAuditWaterATMNetwork: "ProjectsImage/Third-Party Audit of Water ATM Network.jpg",
  ertSurvey: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901212/Electrical_Resistivity_Tomography_te2a4b.jpg",
  esgModules: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901263/ESG_Course_Modules_TOT_for_MSME_fcduho.jpg",
  csjmuReport: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901213/CSJMU_Sustainability_Report_be0pv3.jpg",
  antiaTaal: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901266/Sustainable_Management_Plan_Antia_Taal_zctqbx.jpg",
  laxmiTaal: "https://placehold.co/600x400/4682B4/FFFFFF?text=Laxmi+Taal",
  kanpurAudit: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901226/Kanpur_Smart_City_Audit_r4memd.png",
  jhansiAudit: "https://placehold.co/600x400/FF6347/FFFFFF?text=Jhansi+Smart+City",
  waterbodyRestoration: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901253/Restoration_of_Waterbody_hrs3eq.jpg",
  socialImpact: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901244/social_Impact_tybcom.jpg",
  constructedWetland: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901211/Designing_Constructed_Wetland_ggm9s5.jpg",
  adiyurLake: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901237/Restoration_of_Adiyur_lake_Tirupathur_mepq3b.jpg",
  greyWater: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901213/Grey_Water_Management_orkst3.jpg",
  environmentalAudit: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901211/Environmental_Audit_oeafkp.jpg",
  aiDevelopment: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901263/ESG_Course_Modules_TOT_for_MSME_fcduho.jpg",
};
const sampleProjects = [
  { id: "p1", image: projectImages.sustainabilityAssessmentReporting, title: "Annual Sustainability Report 2024–25", agency: "CSJM University, Kanpur", location: "Kanpur, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Sustainability Assessment & Reporting", description: "Prepared the Annual Sustainability Report 2024–25 for CSJM University, Kanpur, highlighting the institution’s initiatives on resource efficiency, campus-wide sustainability practices, assessment of Scope 1 and 2 emissions, and the formulation of the university’s net zero roadmap." },
  { id: "p2", image: projectImages.annualSustainabilityReport202425CSJMUDashboard, title: "Preparation of the Annual Sustainability Report 2025–26 and Development of the CSJMU Sustainability Dashboard", agency: "CSJM University, Kanpur", location: "Kanpur, Uttar Pradesh", duration: "Ongoing", status: "Ongoing", projectType: "Sustainability Assessment & Reporting", description: "Preparing the Annual Sustainability Report 2025–26 and developing the CSJMU Sustainability Dashboard to track the university’s sustainability performance. The project includes GHG emission assessment, evaluation of energy, water, and waste management, and progress mapping toward the Net Zero Roadmap and UN SDGs." },
  { id: "p3", image: projectImages.socialImpactAssessmentJhansiSmartCity, title: "Social Impact Assessment Report ", agency: "Jhansi Smart City Limited | Partner: IFACET, IIT Kanpur", location: "Jhansi, Uttar Pradesh", duration: "Ongoing", status: "Ongoing", projectType: "Sustainability Assessment & Reporting", description: "Ongoing project to prepare the Social Impact Report for Jhansi Smart City Limited, assessing community outcomes of 11 Smart City projects across water, health, education, parks, and surveillance. Implemented by EHM with IFACET–IIT Kanpur as the technical partner." },
  { id: "p4", image: projectImages.restorationKIMSPondPhase1, title: "Design of Phytorid STPs (0.5 MLD, 1.25 MLD, 1.50 MLD, and 3.50 MLD) ", agency: "Nav Enviro Consultants, Hyderabad", location: "Gajwel, Telangana", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Provided conceptual, process, and hydraulic design for Phytorid-based sewage treatment plants, along with detailed electromechanical layouts, RCC and structural drawings with design calculations, Bill of Quantities (BoQs), and a comprehensive Detailed Project Report (DPR)." },
  { id: "p5", image: projectImages.constructedWetland, title: "Design of 80 KLD Decentralized Nature-Based Sewage Treatment Plant ", agency: "Uttar Pradesh State Industrial Development Corporation (UPSIC) | Partner: CEMG Engineers & Consultants Pvt. Ltd.", location: "Foundry Nagar, Agra", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Designed an 80 KLD decentralized, nature-based sewage treatment system for the Foundry Nagar Industrial Area in Agra. The hybrid setup, combining anaerobic baffled reactors and constructed wetlands, enables efficient wastewater reuse and supports sustainable water management under the UPSIC initiative." },
  { id: "p6", image: projectImages.kanpurAudit, title: "Third-Party Audit of Atiya Talab Restoration Project", agency: "Jhansi Smart City Limited (JSCL) | Partner: IFACET, IIT Kanpur", location: "Jhansi, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Performed a third-party audit of the Atiya Talab Restoration Project to review technical design, cost estimates, and implementation progress. The project is vital for rejuvenating Jhansi’s urban water ecosystem, and the audit ensured compliance, financial accuracy, and quality execution under the Smart City Mission." },
  { id: "p7", image: projectImages.laxmiTaal, title: "Third-Party Audit of Laxmi Taal Redevelopment Project ", agency: "Jhansi Smart City Limited (JSCL) | Partner: IFACET, IIT Kanpur", location: "Jhansi, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Conducted a third-party audit of the Laxmi Taal Redevelopment Project to assess design, financial, and implementation quality. The project plays a key role in restoring the historic lake’s ecology and public utility, with the audit ensuring transparency, cost control, and adherence to Smart City Mission standards." },
  { id: "p8", image: projectImages.kanpurAudit, title: "Third-Party Audit of Narayan Bagh Park Redevelopment", agency: "Jhansi Smart City Limited (JSCL) | Partner: IFACET, IIT Kanpur", location: "Jhansi, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Conducted a third-party audit of the Narayan Bagh Park Redevelopment Project to evaluate design, execution, and financial compliance. The project enhances urban green space and citizen well-being, with the audit ensuring quality implementation and adherence to Smart City Mission guidelines." },
  { id: "p9", image: projectImages.constructedWetland, title: "Third-Party Audit of 26 MLD Sewage Treatment Plant (STP) ", agency: "Jhansi Smart City Limited (JSCL) | Partner: IFACET, IIT Kanpur", location: "Jhansi, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Conducted a third-party audit of the 26 MLD Sewage Treatment Plant designed to prevent untreated sewage discharge into the Pahuj River. The audit assessed design quality, cost accuracy, and on-site execution, ensuring compliance with Smart City Mission norms and supporting Jhansi’s goal of sustainable wastewater management and river rejuvenation." },
  { id: "p10", image: projectImages.thirdPartyAuditPaniwaliDharamshalaRestoration, title: "Third-Party Audit of Paniwali Dharamshala Restoration ", agency: "Jhansi Smart City Limited (JSCL) | Partner: IFACET, IIT Kanpur", location: "Jhansi, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Conducted a third-party audit of the Paniwali Dharamshala Restoration Project to review design, cost, and implementation quality. The project preserves Jhansi’s architectural heritage while converting the site into a multifunctional community space, with the audit ensuring transparency and compliance with Smart City Mission standards." },
  { id: "p11", image: projectImages.thirdPartyAuditRainwaterHarvestingInitiative, title: "Third-Party Audit of Rainwater Harvesting Initiative ", agency: "Jhansi Smart City Limited (JSCL) | Partner: IFACET, IIT Kanpur", location: "Jhansi, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Conducted a third-party audit of modular rainwater harvesting systems installed across 56 government buildings in Jhansi with a total capacity of 3.6 million litres. The project, designed to conserve over 7.98 crore litres of water annually, strengthens urban water sustainability and climate resilience. The audit ensured quality execution, financial accuracy, and alignment with Smart City Mission objectives." },
  { id: "p12", image: projectImages.thirdPartyAuditWaterATMNetwork, title: "Third-Party Audit of Water ATM Network", agency: "Jhansi Smart City Limited (JSCL) | Partner: IFACET, IIT Kanpur", location: "Jhansi, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Conducted a third-party audit of Jhansi’s city-wide Water ATM Network providing 24/7 safe, affordable drinking water through solar-powered, IoT-enabled kiosks. The audit ensured quality implementation, cost accuracy, and compliance with Smart City Mission objectives for sustainable urban water access." },
  { id: "p13", image: projectImages.thirdPartyAuditSolidWasteManagementSystem, title: "Third-Party Audit of Solid Waste Management System ", agency: "Jhansi Smart City Limited (JSCL) | Partner: IFACET, IIT Kanpur", location: "Jhansi, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Conducted a third-party audit of Jhansi’s smart solid waste management system for door-to-door segregated collection and transport. The audit verified cost, performance, and compliance with Smart City Mission standards, ensuring efficient and sustainable urban waste operations." },
  { id: "p14", image: projectImages.environmentalAudit, title: "Environmental Audit of CSIR-NEERI Kolkata Zonal Centre", agency: "CSIR-National Environmental Engineering Research Institute (NEERI), Kolkata Zonal Centre", location: "Kolkata, West Bengal", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Conducted an environmental audit of the CSIR-NEERI Kolkata Zonal Centre to assess water, energy, and waste management systems. The study identified key areas for resource efficiency, renewable energy adoption, and improved waste handling to strengthen sustainability across campus operations." },
  { id: "p15", image: projectImages.restorationKIMSPondPhase1, title: "Restoration of KIMS Pond ", agency: "Rootbridge Collab", location: "Hyderabad, Telangana", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Prepared a comprehensive restoration and rejuvenation plan for the 10-acre KIMS Pond in Hyderabad. The project focused on improving water quality, ecological balance, and stormwater management through nature-based solutions, sediment removal, and landscape enhancement, laying the groundwork for long-term sustainability and community benefit." },
  { id: "p16", image: projectImages.constructedWetland, title: "40 KLD Natural Treatment for Restoration of Punjabi Bagh Waterbody, Delhi", agency: "Rootbridge Collab", location: "Punjabi Bagh, Delhi", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Designed a 40 KLD decentralized wetland system to treat drain wastewater using natural, plant-based bioremediation. The project improved water quality, reduced pollutants by over 90%, and enhanced the landscape for long-term ecological and community benefits." },
  { id: "p17", image: projectImages.greyWater, title: "Greywater Treatment Plant Using Constructed Wetland Technology ", agency: "Prachi Leathers Pvt. Ltd., Kanpur | Partner: EHM Consultancy Pvt. Ltd", location: "Kanpur, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", description: "Designed a 20 KLD decentralized constructed wetland system to treat domestic wastewater at Prachi Leathers Pvt. Ltd. The plant uses natural, plant-based bioremediation to reduce key pollutants by over 90%, enabling safe reuse of treated water for gardening and other non-potable uses." },
  { id: "p18", image: projectImages.climateRiskasses, title: "Climate Risk Assessment for Jhansi", agency: "Jhansi Smart City Limited | Partner: IFACET, IIT Kanpur & ClimAgro Analytics", location: "Jhansi, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Climate Impact & Sustainability Assessment", description: "Assessed Jhansi’s exposure to heatwaves, flooding, and water stress using climate and socio-economic data. The study supports city-level resilience planning and adaptation strategies under the Smart City Mission." },
  { id: "p19", image: projectImages.ertSurvey, title: "Geophysical Survey (ERT Survey) at Brahmadiha Coal Mine (BCM)", agency: "Thriveni Sainik Mining Pvt. Ltd. | Partner: IIT Kanpur", location: "Giridih District, Jharkhand", duration: "Completed", status: "Completed", projectType: "Geophysical Investigation", description: "Conducted an Electrical Resistivity Tomography (ERT) survey to map subsurface variations up to ~80 m depth for identifying coal seams, voids, and water-logged zones. Close-grid 2D-ERT profiles and 3D modeling provided key insights on coal reserves, water accumulation, and structural features for efficient mine planning." },
  { id: "p20", image: projectImages.laxmiTaal, title: "DPR for Sustainable Management of Laxmi Taal Waterbody", agency: "Jhansi Smart City Limited (JSCL) | Partner: IFACET, IIT Kanpur", location: "Jhansi, Uttar Pradesh", duration: "Ongoing", status: "Ongoing", projectType: "Urban Planning & Management", description: "Ongoing restoration of the historic Laxmi Taal lake in Jhansi, focusing on nature-based wastewater treatment, underground storage, and IoT-enabled monitoring. The project promotes tourism, community engagement, and heritage-led revitalization through eco-landscaped park development." },
  { id: "p21", image: projectImages.waterbodyRestoration, title: "Restoration of CSJM University Campus Waterbody", agency: "CSJM University, Kanpur", location: "Kanpur, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Urban Planning & Management", description: "Designed and commissioned bioremediation floating islands in the newly developed waterbody at CSJM University, Kanpur. These man-made islands function as natural wetland systems, using hydroponically grown plants to enhance water quality through nutrient uptake and microbial activity." },
  { id: "p22", image: projectImages.antiaTaal, title: "Sustainable Management Plan for Antia Waterbody", agency: "Jhansi Nagar Nigam | Partner: IFACET, IIT Kanpur", location: "Jhansi, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Urban Planning & Management", description: "Developed a comprehensive rejuvenation plan for Antia Taal, Jhansi, focusing on ecological restoration, decentralized wastewater reuse, and ensuring long-term water sustainability through hydrological and financial planning under the city’s water-positive initiative." },
  { id: "p23", image: projectImages.adiyurLake, title: "Adiyur Lake Rejuvenation Using Wetland Technology", agency: "Tirupathur Municipal Corporation", location: "Tirupathur, Tamil Nadu", duration: "Completed", status: "Completed", projectType: "Urban Planning & Management", description: "Designed a decentralized wetland-based system at S. Pallipattu village, Tirupathur, to treat 227 KLD of greywater and improve Adiyur Lake’s water quality. The nature based treatment approach ensures low-cost treatment and promotes community-led water conservation." },
  { id: "p24", image: projectImages.lucknowlesgis, title: "AI-Driven Governance for Legislators ", agency: "Uttar Pradesh Legislative Assembly | Partner: EHM Consultancy Pvt. Ltd.", location: "Vidhan Sabha Lucknow, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Training & Capacity Building", description: "Conducted an AI-Driven Governance Workshop at the Uttar Pradesh Legislative Assembly attended by over 200 MLAs. The session demonstrated how Artificial Intelligence can improve legislative efficiency, data-driven decision-making, and transparent governance to support sustainable and inclusive development." },
  { id: "p25", image: projectImages.esgModules, title: "ESG Module Development for MSMEs and Training of Trainers (ToT) Workshop", agency: "UPSIC, Uttar Pradesh | Partner: E&ICT Academy, IIT Kanpur & KPMG", location: "Kanpur, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Training & Capacity Building", description: "As part of the World Bank–supported RAMP Programme, EHM developed an ESG training module and supported a ToT workshop with E&ICT Academy, IIT Kanpur, UPSIC, and KPMG. The initiative built ESG capacity among MSMEs in Uttar Pradesh, enabling sustainable growth, better financial access, and improved export competitiveness." },
  { id: "p26", image: projectImages.guestlecture, title: "Guest Lecture on Climate-Focused Startups ", agency: "Netaji Subhas University of Technology (NSUT), New Delhi | Speaker: Dr. Harshit Mishra, Founder – EHM", location: "New Delhi", duration: "Completed", status: "Completed", projectType: "Training & Capacity Building", description: "Dr. Harshit Mishra, Founder of EHM, delivered the opening lecture of the September–October Lecture Series at NSUT. He discussed building climate-focused startups and developing AI-driven climate risk intelligence solutions, highlighting the importance of climate data and the vast opportunities for young innovators in the climate-tech sector." },
  { id: "p27", image: projectImages.aiDevelopment, title: "Artificial Intelligence", agency: "Ministry of MSME, Government of India | Host: IIT Kanpur | Experts: Dr. Harshit Mishra & Dr. Utsav Mishra", location: "IIT Kanpur", duration: "Completed", status: "Completed", projectType: "Training & Capacity Building", description: "Dr. Harshit Mishra and Dr. Utsav Mishra delivered expert sessions under the Advanced Entrepreneurship and Skill Development Programme (ESDP) and Management Development Programme (MDP) supported by the Ministry of MSME, Government of India. The sessions highlighted the applications of Artificial Intelligence in entrepreneurship, innovation, and sustainable business development." },
  { id: "p28", image: projectImages.nationalConferenceAISustainableCities, title: "National Conference on Innovative AI Solutions for Sustainable Cities ", agency: "Association of Indian Universities (AIU), Kotak School of Sustainability – IIT Kanpur & CSJMU, Kanpur", location: "Kanpur, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Training & Capacity Building", description: "Organized a two-day national conference uniting experts from academia, government, and industry to discuss AI-driven approaches for sustainable and resilient urban development. Featuring keynotes, panels, and workshops on AI applications in urban governance and infrastructure, the event was jointly hosted by AIU, Kotak School of Sustainability–IIT Kanpur, and CSJMU, Kanpur." },
  { id: "p29", image: projectImages.representationEcoEntrepreneurshipConclaveJagran, title: "Representation at Eco-Entrepreneurship & Sustainability Conclave ", agency: "Jagran Institute of Management, Kanpur | Representative: Dr. Harshit Mishra, CSJMU Kanpur", location: "Kanpur, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Training & Capacity Building", description: "Represented Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur, at the Eco-Entrepreneurship & Sustainability Conclave hosted by Jagran Institute of Management. Dr. Harshit Mishra shared CSJMU’s sustainability initiatives, including smart water metering, solar energy use, and waste-to-wealth programs, emphasizing action-driven ESG practices and campus-wide sustainability culture." }
];

const filterOptions = [
  'All Projects',
  'Sustainability Assessment & Reporting',
  'Sustainable Environmental Management',
  'Climate Impact & Sustainability Assessment',
  'Geophysical Investigation',
  'Urban Planning & Management',
  'Training & Capacity Building'
];


// 2. ANIMATED COUNTER COMPONENT
// =============================================================================

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const endValue = parseInt(end);
          const startTime = Date.now();
          
          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * endValue);
            
            setCount(current);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              // Ensure we hit the exact end value
              setCount(endValue);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    const currentRef = counterRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
};


// 3. PROJECT CARD COMPONENT
// =============================================================================

const ProjectCard = ({
  image,
  title,
  description,
  status = "Completed",
  location,
  projectType,
  technologies,
  outcomes,
  className = "",
  style = {},
  onClick
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleExpanded = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    const dummyInput = document.createElement('input');
    document.body.appendChild(dummyInput);
    dummyInput.value = window.location.href;
    dummyInput.select();
    document.execCommand('copy');
    document.body.removeChild(dummyInput);
    console.log('Link copied to clipboard!');
  };

  const locationcard = useLocation();

  useEffect(() => {
    if (locationcard.hash) {
      const id = locationcard.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [locationcard]);

  return (
    <div
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] cursor-pointer border border-gray-100 mb-6 ${className}`}
      style={style}
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-56">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
          alt={title}
          loading="lazy"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border shadow-lg transition-all duration-300 group-hover:scale-110 ${
            status === 'Completed' ? 'bg-green-100/90 text-green-800 border-green-200' :
            status === 'Ongoing' ? 'bg-blue-100/90 text-blue-800 border-blue-200' :
            'bg-gray-100/90 text-gray-800 border-gray-200'
          }`}>
            {status}
          </span>
        </div>
        {projectType && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-teal-100/90 text-teal-800 backdrop-blur-md border border-teal-200 shadow-lg transition-all duration-300 group-hover:scale-110">
              {projectType}
            </span>
          </div>
        )}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <button onClick={handleBookmark} aria-label="Bookmark project" className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${isBookmarked ? 'bg-yellow-100/90 text-yellow-600 border border-yellow-200' : 'bg-white/90 text-gray-600 border border-gray-200 hover:bg-yellow-100/90 hover:text-yellow-600'}`}>
            <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
          </button>
          <button onClick={handleShare} aria-label="Share project" className="p-2 rounded-full bg-white/90 text-gray-600 border border-gray-200 backdrop-blur-md hover:bg-teal-100/90 hover:text-teal-600 transition-all duration-300 hover:scale-110">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl md:text-xl font-bold text-white mb-1 drop-shadow-lg leading-tight">{title}</h3>
          {location && <div className="flex items-center text-white/90 text-xs"><MapPin className="w-3 h-3 mr-1" />{location}</div>}
        </div>
      </div>
      <div className="p-4 md:p-5 space-y-4">
        {description && (
          <div className="space-y-2">
            <div className="flex items-center gap-2"><Eye className="w-4 h-4 text-teal-600" /><h4 className="text-base font-bold text-gray-800">Overview</h4></div>
            <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>{description}</p>
            {description.length > 120 && (
              <button onClick={toggleExpanded} className="flex items-center gap-1 text-teal-600 hover:text-teal-700 font-medium text-xs transition-colors duration-300">
                {isExpanded ? <>Show Less <ChevronUp className="w-4 h-4" /></> : <>Read More <ChevronDown className="w-4 h-4" /></>}
              </button>
            )}
          </div>
        )}
        {(technologies?.length > 0 || outcomes?.length > 0) && (
          <div className="border-t border-gray-100 pt-3">
            <button onClick={toggleExpanded} className="flex items-center justify-between w-full p-2.5 bg-gray-50 hover:bg-teal-50 rounded-lg transition-all duration-300 group/btn">
              <span className="font-bold text-sm text-gray-800 flex items-center gap-2"><Target className="w-4 h-4 text-teal-600" />Technical Details & Outcomes</span>
              {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-500 group-hover/btn:text-teal-600 transition-colors" /> : <ChevronDown className="w-5 h-5 text-gray-500 group-hover/btn:text-teal-600 transition-colors" />}
            </button>
            {isExpanded && (
              <div className="mt-3 space-y-4 animate-fadeIn">
                {technologies?.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="font-bold text-teal-700 text-sm flex items-center gap-2"><Zap className="w-4 h-4" />Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">{technologies.map((tech, index) => <span key={index} className="px-2.5 py-1.5 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-800 text-xs rounded-md font-medium border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:scale-105">{tech}</span>)}</div>
                  </div>
                )}
                {outcomes?.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="font-bold text-green-700 text-sm flex items-center gap-2"><Award className="w-4 h-4" />Key Outcomes</h5>
                    <div className="space-y-1.5">{outcomes.map((outcome, index) => <div key={index} className="flex items-start gap-2 p-2 bg-green-50/50 rounded-lg hover:bg-green-50 transition-colors duration-300"><div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div><span className="text-gray-700 text-xs leading-relaxed">{outcome}</span></div>)}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"><span className="text-teal-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300"><Eye className="w-4 h-4" />View Details</span></div>
          <button onClick={(e) => { e.stopPropagation(); onClick(); }} className="opacity-0 group-hover:opacity-100 px-3 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5 font-medium text-sm">Open<ExternalLink className="w-4 h-4" /></button>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400 rounded-3xl transition-all duration-500 pointer-events-none"></div>
      <div className="absolute inset-0 -z-10 bg-teal-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-95 group-hover:scale-105"></div>
    </div>
  );
};


// 4. MAIN PAGE COMPONENT
// =============================================================================

const ProjectsPage = () => {
  const [message, setMessage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All Projects') {
      return sampleProjects;
    }
    return sampleProjects.filter(project => project.projectType === activeFilter);
  }, [activeFilter]);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000);
  };

  const stats = [
    { number: "25", suffix: "+", label: "Projects Completed", icon: Award },
    { number: "15", suffix: "+", label: "Happy Clients", icon: Users },
    { number: "4", suffix: "+", label: "Years Experience", icon: Calendar },
    { number: "99", suffix: "%", label: "Success Rate", icon: Target }
  ];

  const locationcard2 = useLocation();
  const cardRefs2 = useRef({});

  useEffect(() => {
    const hash = locationcard2.hash?.slice(1);
    if (hash && cardRefs2.current[hash]) {
      const el = cardRefs2.current[hash];
      const yOffset = -250;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      el.classList.add("highlighted-card");

      const timeout = setTimeout(() => {
        el.classList.remove("highlighted-card");
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [locationcard2.hash]);

  return (
    <div className="min-h-screen font-sans relative overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-teal-50/30">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeInUp { animation: fadeInUp 1s ease forwards; opacity: 0; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.5s ease-in-out; }
        .projects-grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) { .projects-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (min-width: 1280px) { .projects-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .highlighted-card { box-shadow: 0 0 30px rgba(20, 184, 166, 0.6); animation: pulse 2s ease-in-out; }
        @keyframes pulse { 0%, 100% { box-shadow: 0 0 30px rgba(20, 184, 166, 0.6); } 50% { box-shadow: 0 0 50px rgba(20, 184, 166, 0.9); } }
      `}</style>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-teal-50/80 to-blue-50/70"></div>
      </div>
      
      <main className="relative z-10 py-16">
        <section className="max-w-7xl mx-auto px-4 mb-12 mt-12">
          {/* Filter Buttons at Top */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm text-sm ${
                  activeFilter === filter
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-white/90 text-gray-700 hover:bg-teal-50 hover:text-teal-700 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {/* Stats Section with Animated Counters */}
          <section className="max-w-6xl mx-auto px-4 mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl"></div>
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
                {stats.map(({ number, suffix, label, icon: Icon }, index) => (
                  <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
                    <Icon className="w-8 h-8 text-teal-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-teal-600 mb-1">
                      <AnimatedCounter end={number} suffix={suffix} />
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
        
        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                id={project.id}
                tabIndex={-1}
                ref={(el) => {
                  cardRefs2.current[project.id] = el;
                }}
                className="project-card-wrapper transition-shadow duration-300"
              >
                <ProjectCard
                  {...project}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => showMessage(`Opening ${project.title}...`)}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      
      {/* Toast Message */}
      {message && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fadeIn">
          {message}
        </div>
      )}

      
    </div>
  );
};

export default ProjectsPage;