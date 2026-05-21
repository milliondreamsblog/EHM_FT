import React, { useState } from "react";
import {
  CheckCircle,
  Leaf,
  Factory,
  School,
  Building2,
  Home,
  ShoppingBag,
  Zap,
  Wind,
  Filter,
  Waves,
  FlaskConical,
  Sprout,
  Droplets,
} from "lucide-react";
import SEO from "../Components/Common/SEO";
import DNTSHero from "../Components/Resources/DNTS/DNTSHero";
import DNTSFlowchart from "../Components/Resources/DNTS/DNTSFlowchart";
import DNTSFeatures from "../Components/Resources/DNTS/DNTSFeatures";
import DNTSCaseStudy from "../Components/Resources/DNTS/DNTSCaseStudy";
import DNTSInfo from "../Components/Resources/DNTS/DNTSInfo";
import DNTSProjects from "../Components/Resources/DNTS/DNTSProjects";
import DNTSApproach from "../Components/Resources/DNTS/DNTSApproach";

const DNTSPage = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [hoveredStage, setHoveredStage] = useState(null);
  const [hoveredProject, setHoveredProject] = useState("tirupathur");

  const flowStages = [
    {
      id: "inlet",
      label: "Inlet Water",
      sublabel: "Raw sewage / wastewater enters the system",
      bg: "bg-blue-50 border-2 border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      IconComponent: Waves,
      image: "/DNTS/flow-inlet.webp",
    },
    {
      id: "aabr",
      label: "AABR",
      sublabel: "Accelerated Anaerobic Baffle Reactor — removes organic load",
      bg: "bg-indigo-50 border-2 border-indigo-200",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-500",
      IconComponent: FlaskConical,
      image: "/DNTS/flow-aabr.webp",
    },
    {
      id: "wetland",
      label: "Constructed Wetland",
      sublabel: "Root-zone phytoremediation by hormonal plants",
      bg: "bg-green-50 border-2 border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      IconComponent: Sprout,
      image: "/DNTS/flow-wetland.webp",
    },
    {
      id: "treated",
      label: "Treated Water",
      sublabel: "Compliant clean water ready for reuse",
      bg: "bg-teal-50 border-2 border-teal-200",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-500",
      IconComponent: Droplets,
      image: "/DNTS/flow-treated.webp",
    },
  ];

  const features = [
    {
      id: "feat1", name: "Nature-based treatment", IconComponent: Leaf,
      image: "/DNTS/feat-nature.webp",
    },
    {
      id: "feat2", name: "Treatment at the source", IconComponent: Filter,
      image: "/DNTS/feat-source.webp",
    },
    {
      id: "feat3", name: "No foul odor", IconComponent: Wind,
      image: "/DNTS/feat-odor.webp",
    },
    {
      id: "feat4", name: "Low O & M expenses", IconComponent: Zap,
      image: "/DNTS/feat-cost.webp",
    },
    {
      id: "feat5", name: "No skilled manpower required during O&M", IconComponent: CheckCircle,
      image: "/DNTS/feat-manpower.webp",
    },
    {
      id: "feat6", name: "Smaller carbon footprint", IconComponent: Leaf,
      image: "/DNTS/feat-carbon.webp",
    },
  ];

  const suitedFor = [
    { id: "s1", name: "Universities/Colleges/Schools", IconComponent: School },
    { id: "s2", name: "Office buildings", IconComponent: Building2 },
    { id: "s3", name: "Housing/Residential societies", IconComponent: Home },
    { id: "s4", name: "Industries", IconComponent: Factory },
    { id: "s5", name: "Commercial establishment", IconComponent: ShoppingBag },
  ];

  const caseStudy = {
    title: "Prachi Leathers",
    intro: "A DNTS unit was installed at Prachi Leathers to treat industrial effluent on-site using constructed wetlands and an AABR system, achieving compliant treated water output and eliminating untreated discharge.",
    restorationPoints: [
      "Untreated industrial effluent was being directly discharged, causing severe local contamination.",
      "A DNTS unit combining AABR and constructed wetland technology was designed and commissioned on-site.",
      "The system achieved treated water output at the outlet, meeting compliance standards with no skilled O&M required.",
    ],
    beforeImages: ["/DNTS/prachi-before.webp", "/DNTS/treat-water-ec.webp"],
    afterImages: ["/DNTS/prachi-after.webp", "/DNTS/odor-system-main.webp"],
  };

  const dntsInfoData = [
    {
      title: "What is DNTS?",
      items: [
        "Gravity based, natural and self-sustainable root-based technology",
        "Treats and reuses sewage and wastewater on-site",
        "Flexible alternative to large sewage treatment plants",
      ],
    },
    {
      title: "How it works",
      items: [
        "Filtration through root-zone media",
        "Sedimentation of suspended solids",
        "Nutrient-uptake by hormonal plants",
        "Microbial degradation of pollutants",
      ],
    },
    {
      title: "Key Advantage",
      items: [
        "No civil infrastructure at scale",
        "Zero electricity required",
        "Self-sustaining once established",
        "Deployable at any site size",
      ],
    },
  ];

  const projectsData = {
    tirupathur: {
      title: "Tirupathur Municipal Corporation",
      description: "DNTS installation for Tirupathur Municipal Corporation, Tamilnadu.",
      details: "Capacity: 227 KLD",
      image: "/DNTS/tirupathur.webp",
    },
    gajwel: {
      title: "Gajwel City, Hyderabad",
      description: "Multiple DNTS units at Gajwel, Telangana in collaboration with Nav Enviro Consultants, Hyderabad.",
      details: "0.5 MLD, 1.25 MLD, 1.50 MLD & 3.50 MLD",
      image: "/DNTS/gajwel.webp",
    },
  };

  const approachData = [
    {
      title: "Treatment",
      image: "/DNTS/approach-treatment.webp",
      points: ["Treated water via Nature-Based Solutions", "AABR + Constructed Wetland system", "Zero electricity consumption"],
    },
    {
      title: "Sustainability",
      image: "/DNTS/approach-sustainability.webp",
      points: ["Self-sustaining root-zone system", "Gravity-driven — no pumps needed", "Minimal maintenance costs"],
    },
    {
      title: "Awareness",
      image: "/DNTS/approach-awareness.webp",
      points: ["Community education programs", "School & college showcasing", "Site visits and demonstrations"],
    },
    {
      title: "Deployment",
      image: "/DNTS/approach-deployment.webp",
      points: ["Scalable for any institution size", "Rapid on-site commissioning", "Replicable across industries"],
    },
  ];

  const headingStyle = "text-2xl font-bold text-slate-700 mb-8 tracking-wide";

  return (
    <div>
      <SEO
        title="DNTS - Decentralized Natural Treatment System"
        description="EHM's Decentralized Natural Treatment System (DNTS) is a gravity-based, self-sustainable, nature-based wastewater treatment solution at the source."
        keywords="DNTS, nature based wastewater treatment, sewage treatment, decentralized treatment system, EHM, water management"
        canonical="/resources/dnts"
      />
      <style>{`
        @keyframes bounceHorizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        @keyframes bounceVertical {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-bounce-horizontal { animation: bounceHorizontal 2s infinite; }
        .animate-bounce-vertical { animation: bounceVertical 2s infinite; }
        @keyframes float {
          0%   { transform: translateY(0) translateX(0); }
          50%  { transform: translateY(-50vh) translateX(20px); }
          100% { transform: translateY(-120vh) translateX(-20px); }
        }
        .animate-float { animation: float linear infinite; }
      `}</style>

      <DNTSHero />

      <section className="bg-gradient-to-b from-[#dbf1f2] to-[#ededed] py-20 px-4">
        <div className="container mx-auto">
          {/* <DNTSFlowchart flowStages={flowStages} headingStyle={headingStyle} /> */}
          {/* the above section is incomplete from my side so im not using it */}
          <DNTSFeatures
            features={features}
            suitedFor={suitedFor}
            activeNode={activeNode}
            setActiveNode={setActiveNode}
            headingStyle={headingStyle}
            centerImage="/DNTS/7.webp"
          />
        </div>
      </section>

      <DNTSCaseStudy
        caseStudy={caseStudy}
        hoveredStage={hoveredStage}
        setHoveredStage={setHoveredStage}
      />

      <DNTSInfo dntsInfoData={dntsInfoData} />

      <DNTSApproach approachData={approachData} />

      <DNTSProjects
        projectsData={projectsData}
        hoveredProject={hoveredProject}
        setHoveredProject={setHoveredProject}
      />

    </div>
  );
};

export default DNTSPage;
