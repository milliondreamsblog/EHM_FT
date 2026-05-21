import React, { useState } from "react";
import {
  CloudHail,
  Plane,
  RefreshCcwDot,
} from "lucide-react";
import WaterbodyHero from "../Components/Resources/WaterRestoration/WaterbodyHero";
import WaterbodyFactorsImpacts from "../Components/Resources/WaterRestoration/WaterbodyFactorsImpacts";
import WaterbodyCaseStudy from "../Components/Resources/WaterRestoration/WaterbodyCaseStudy";
import WaterbodyBenefits from "../Components/Resources/WaterRestoration/WaterbodyBenefits";
import WaterbodyProjects from "../Components/Resources/WaterRestoration/WaterbodyProjects";
import WaterbodyApproach from "../Components/Resources/WaterRestoration/WaterbodyApproach";

const WaterbodyRestoration = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [hoveredStage, setHoveredStage] = useState(null);
  const [hoveredProject, setHoveredProject] = useState("laxmi");

  const factors = [
    {
      id: "f1",
      name: "Storm water drain",
      image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759495219/storm_water_pypduf.webp",
    },
    {
      id: "f2",
      name: "Dairy waste",
      image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759495221/dirty_waste_ddepg9.webp",
    },
    {
      id: "f3",
      name: "Encroachment",
      image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759494869/enchroament_thds8y.webp",
    },
    {
      id: "f4",
      name: "Industry waste",
      image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759495220/industry_waste_vqrhjj.webp",
    },
    {
      id: "f5",
      name: "Untreated sewage",
      image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759495218/undertreated_sewage_m5kzx4.webp",
    },
    {
      id: "f6",
      name: "Solid waste dumping",
      image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759495220/solide_waste_z8gxjc.webp",
    },
  ];

  const impacts = [
    { id: "i1", name: "Increase in flood risk", IconComponent: CloudHail },
    {
      id: "i2",
      name: "Loss of groundwater recharge",
      IconComponent: RefreshCcwDot,
    },
    { id: "i3", name: "Loss of tourism & Livelihood", IconComponent: Plane },
  ];

  const caseStudy = {
    title: "Antia Talab, Jhansi",
    intro: "The restoration of Antia Talab in Jhansi, a vital project under the Smart City Mission, aimed at revitalizing a severely degraded waterbody.",
    restorationPoints: [
      "Multiple issues such as solid waste, excessive hyacinth, silting, and wastewater discharge.",
      "Restoration of Antia Talab was undertaken as part of the Smart City Mission.",
      "The work focused on achieving both environmental and financial sustainability.",
    ],
    beforeImages: [
      "https://res.cloudinary.com/dlpluej6w/image/upload/v1757626449/After_Key_challenges_ybebnd.webp",
      "https://res.cloudinary.com/dlpluej6w/image/upload/v1759498047/before1_ujmsxk.webp",
    ],
    afterImages: [
      "https://res.cloudinary.com/dlpluej6w/image/upload/v1757626457/Atiya_Taal-Restoration_-_Thumbnail_pys5pw.webp",
      "https://res.cloudinary.com/dlpluej6w/image/upload/v1757626454/After_solution_uetssl.webp",
    ],
  };

  const benefitsData = [
    {
      title: "Environment",
      items: [
        "Groundwater recharge",
        "Microclimate Regulation",
        "Habitat & Biodiversity",
        "Flood & storm water management",
      ],
    },
    {
      title: "Social",
      items: [
        "Recreational activities",
        "Livelihood opportunities",
        "Cultural & Religious connect",
      ],
    },
    {
      title: "Governance",
      items: [
        "Job creation",
        "Revenue generation",
        "Tourist Hotspots",
        "Quality life for citizens",
      ],
    },
  ];

  const projectsData = {
    laxmi: {
      title: "Laxmi Taal, Jhansi (Ongoing)",
      description: "Preparation of DPR for Sustainable Management of Laxmi Taal Water Body.",
      details: "Waterbody Area - 33.012 ha",
      image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759503658/laxmi_tal_gslimj.webp",
    },
    csjm: {
      title: "CSJM University Campus",
      description: "Design & commissioning of bioremediation Floating islands in the newly developed waterbody inside CSJM university campus.",
      details: "",
      image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901253/Restoration_of_Waterbody_hrs3eq.webp",
    },
  };

  const approachData = [
    {
      title: "Solution",
      image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759504270/treated_dvs58w.webp",
      points: ["Treated water", "Treated water through Nature based solutions", "Solid waste management"],
    },
    {
      title: "Biodiversity",
      image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759504274/biodiversity_hjuewi.webp",
      points: ["Biodiversity restoration", "Increase in Green cover"],
    },
    {
      title: "Awareness",
      image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759504271/awareness_mdw91a.webp",
      points: ["Awareness", "Show casting to school and college kids"],
    },
    {
      title: "Public Engagement",
      image: "https://res.cloudinary.com/dlpluej6w/image/upload/v1759504276/public-engagement_j2xm8v.webp",
      points: ["Public engagement", "Recreational Parks", "Livelihood"],
    },
  ];

  const headingStyle = "text-2xl font-bold text-slate-700 mb-8 tracking-wide";

  return (
    <div>
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
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-50vh) translateX(20px); }
          100% { transform: translateY(-120vh) translateX(-20px); }
        }
        .animate-float { animation: float linear infinite; }
      `}</style>

      <WaterbodyHero />

      <WaterbodyFactorsImpacts
        factors={factors}
        impacts={impacts}
        activeNode={activeNode}
        setActiveNode={setActiveNode}
        headingStyle={headingStyle}
      />

      <WaterbodyCaseStudy
        caseStudy={caseStudy}
        hoveredStage={hoveredStage}
        setHoveredStage={setHoveredStage}
      />

      <WaterbodyBenefits benefitsData={benefitsData} />

      <WaterbodyApproach approachData={approachData} />
      <WaterbodyProjects
        projectsData={projectsData}
        hoveredProject={hoveredProject}
        setHoveredProject={setHoveredProject}
      />

    </div>
  );
};

export default WaterbodyRestoration;
