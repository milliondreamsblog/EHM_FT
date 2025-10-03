import React, { useState, useMemo } from 'react';
import { MapPin, ChevronDown, ChevronUp, ExternalLink, Share2, Bookmark, Eye, Award, Target, Zap, Users, Calendar } from 'lucide-react';

// ProjectsPage.jsx






// To resolve the persistent import errors, all necessary data and components have been consolidated into this single file.

// 1. DATA SECTION (Contains all 18 projects)
// =============================================================================
const projectImages = {
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
  { id: "p1", image: projectImages.ertSurvey, title: "Electrical Resistivity Tomography (ERT) Survey", agency: "Thriveni Sainik Mining Private Limited", location: "Jharkhand", duration: "Ongoing", status: "Ongoing", projectType: "Geophysical Investigation", technologies: ["ERT", "Geophysical Surveying"], description: "Estimation of coal reserves, identification of galleries, coal seam voids, and water-filled zones in an abandoned coal mine.", outcomes: ["Detailed subsurface mapping", "Resource estimation"] },
  { id: "p2", image: projectImages.esgModules, title: "ESG Course Modules & TOT for MSME", agency: "UPSIC, Kanpur", location: "Kanpur, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Training & Capacity Building", technologies: ["ESG Frameworks", "Curriculum Design"], description: "Develop course curriculum and organize Train the Trainer programs for RAMP Programme, a World Bank assisted project.", outcomes: ["Trained trainers", "Developed ESG curriculum"] },
  { id: "p3", image: projectImages.aiDevelopment, title: "Artificial Intelligence - Entrepreneurship Development", agency: "Ministry of MSME, GoI", location: "IIT Kanpur", duration: "Completed", status: "Completed", projectType: "Training & Capacity Building", technologies: ["AI", "Entrepreneurship", "Skill Development"], description: "Delivered sessions under the flagship training programme i.e. Advanced Entrepreneurship and Skill Development Programme (ESDP) and Management Development Programmes (MDP) supported by the Ministry of MSME, GoI. Expert: Dr. Utsav Mishra.", outcomes: ["Trained participants in Advanced ESDP & MDP."] },
  { id: "p4", image: projectImages.aiDevelopment, title: "Artificial Intelligence - Entrepreneurship Development", agency: "Ministry of MSME, GoI", location: "IIT Kanpur", duration: "Completed", status: "Completed", projectType: "Training & Capacity Building", technologies: ["AI", "Entrepreneurship", "Skill Development"], description: "Delivered sessions under the flagship training programme i.e. Advanced ESDP and MDP supported by the Ministry of MSME, GoI. Expert: Dr. Harshit Mishra.", outcomes: ["Trained participants in Advanced ESDP & MDP."] },
  { id: "p5", image: projectImages.aiDevelopment, title: "Artificial Intelligence - Entrepreneurship Development", agency: "Ministry of MSME, GoI", location: "IIT Kanpur", duration: "Completed", status: "Completed", projectType: "Training & Capacity Building", technologies: ["AI", "Entrepreneurship", "Skill Development"], description: "Delivered sessions under the flagship training programme i.e. Advanced ESDP and MDP supported by the Ministry of MSME, GoI. Expert: Dr. Harshit Mishra.", outcomes: ["Trained participants in Advanced ESDP & MDP."] },
  { id: "p6", image: projectImages.aiDevelopment, title: "Artificial Intelligence - Entrepreneurship Development", agency: "Ministry of MSME, GoI", location: "IIT Kanpur", duration: "Completed", status: "Completed", projectType: "Training & Capacity Building", technologies: ["AI", "Entrepreneurship", "Skill Development"], description: "Delivered sessions under the flagship training programme i.e. Advanced ESDP and MDP supported by the Ministry of MSME, GoI. Expert: Dr. Harshit Mishra.", outcomes: ["Trained participants in Advanced ESDP & MDP."] },
  { id: "p7", image: projectImages.csjmuReport, title: "Sustainability Report", agency: "CSJM University, Kanpur", location: "Kanpur, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Sustainability Assessment & Reporting", technologies: ["UNSDG Framework", "GHG Accounting"], description: "Sustainability reporting using UNSDG framework, GHG emission accounting, and identifying interventions as per ESG framework to achieve Net-zero goals.", outcomes: ["Published sustainability report", "Net-zero roadmap"] },
  { id: "p8", image: projectImages.antiaTaal, title: "Sustainable Management Plan, Antia Taal", agency: "Jhansi Nagar Nigam, Jhansi", location: "Jhansi, Uttar Pradesh", duration: "Ongoing", status: "Ongoing", projectType: "Urban Planning & Management", technologies: ["Water Management", "Financial Analysis"], description: "Assessing the technical feasibility of treated water and financial sustainability of the project.", outcomes: ["Feasibility report", "Sustainability plan"] },
  { id: "p9", image: projectImages.laxmiTaal, title: "Sustainable Management Plan, Laxmi Taal", agency: "JSCL, Jhansi", location: "Jhansi, Uttar Pradesh", duration: "Ongoing", status: "Ongoing", projectType: "Urban Planning & Management", technologies: ["DPR Preparation", "Water Body Management", "Sustainability Strategy"], description: "Preparation of a Detailed project report to ensure the sustainable management of Laxmi Taal waterbody spread over a 80-85 acres by building a comprehensive strategy for implementing ex-situ and in-situ interventions, maintaining water levels, and safeguarding the overall health and sustainability of the lake.", outcomes: ["Detailed Project Report", "Lake Health Safeguards"] },
  { id: "p10", image: projectImages.kanpurAudit, title: "Audit of Kanpur Smart City Projects", agency: "Kanpur Smart City Limited", location: "Kanpur", duration: "Completed", status: "Completed", projectType: "Urban Planning & Management", technologies: ["Project Auditing", "Quality Assurance"], description: "Audit and quality check of various projects executed under smart city mission in Kanpur, starting from the DPR phase till the completion of the project.", outcomes: ["Comprehensive audit report", "Quality assessment"] },
  { id: "p11", image: projectImages.jhansiAudit, title: "Audit of Jhansi Smart City Projects", agency: "Jhansi Smart City Limited", location: "Jhansi", duration: "Completed", status: "Completed", projectType: "Urban Planning & Management", technologies: ["Project Auditing", "Quality Assurance"], description: "Audit and quality check of various projects executed under smart city mission in Jhansi, starting from the DPR phase till the completion of the project.", outcomes: ["Comprehensive audit report", "Quality assessment"] },
  { id: "p12", image: projectImages.waterbodyRestoration, title: "Restoration of Waterbody", agency: "CSJM University, Kanpur", location: "Kanpur, Uttar Pradesh", duration: "Ongoing", status: "Ongoing", projectType: "Sustainable Environmental Management", technologies: ["Bioremediation", "Floating Wetlands"], description: "Design and commissioning of bioremediation floating wetland.", outcomes: ["Improved water quality", "Restored ecosystem"] },
  { id: "p13", image: projectImages.socialImpact, title: "Social Impact Assessment", agency: "Jhansi Smart City Limited", location: "Jhansi, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Sustainability Assessment & Reporting", technologies: ["Social Impact Analysis"], description: "Social impact assessment of various projects of tourism, water, health, sports, park category executed under smart city mission.", outcomes: ["SIA report", "Community feedback analysis"] },
  { id: "p14", image: projectImages.constructedWetland, title: "Agra Project", agency: "CENGG Engineers & Ongoing Consultants (P) Ltd", location: "Industrial Area Foundry Nagar, Agra", duration: "Ongoing", status: "Ongoing", projectType: "Sustainable Environmental Management", technologies: ["Effluent Treatment", "Project Management"], description: "Designing and Project Management of 80 KLD Decentralized Effluent Treatment Plant.", outcomes: ["Plant Design Completed", "Project Management Plan in Place"] },
  { id: "p15", image: projectImages.constructedWetland, title: "Designing Constructed Wetland", agency: "Neev Enviro Consultants", location: "Rajouri, J&K", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", technologies: ["Constructed Wetlands", "Nature Based Treatment"], description: "Design of a 0.5 MLD STP based on decentralized nature based treatment technique.", outcomes: ["Designed STP plan"] },
  { id: "p16", image: projectImages.adiyurLake, title: "Restoration of Adiyur lake, Tirupathur", agency: "Tirupathur Municipal Corporation, Tamilnadu", location: "Tirupathur, Tamilnadu", duration: "Ongoing", status: "Ongoing", projectType: "Sustainable Environmental Management", technologies: ["Lake Restoration", "Wastewater Treatment"], description: "Restoration of lake by treating and reuse the adjacent drain carrying the graywater.", outcomes: ["Restored lake ecosystem"] },
  { id: "p17", image: projectImages.greyWater, title: "Grey Water Management", agency: "Prachi Leather, Kanpur", location: "Leather Park, Kanpur", duration: "Completed", status: "Completed", projectType: "Sustainable Environmental Management", technologies: ["Grey Water Treatment"], description: "Treatment of grey water generated inside the premises of the leather industry.", outcomes: ["Water recycling system"] },
  { id: "p18", image: projectImages.environmentalAudit, title: "Environmental Audit", agency: "Kolkata Zonal Lab, CSIR-NEERI, Kolkata", location: "Kolkata, West Bengal", duration: "Completed", status: "Completed", projectType: "Sustainability Assessment & Reporting", technologies: ["Environmental Auditing", "SDG Analysis"], description: "Analyzing the Energy/water usage and waste generation of the building to optimize/reduce the operations as per the SDGs guidelines.", outcomes: ["Audit report with recommendations"] }
];

const filterOptions = [
  'All Projects',
  'Sustainability Assessment & Reporting',
  'Sustainable Environmental Management',
  'Geophysical Investigation',
  'Urban Planning & Management',
  'Training & Capacity Building'
];


// 2. REUSABLE CARD COMPONENT (formerly ProjectShow.jsx)
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
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg leading-tight">{title}</h3>
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

// 3. MAIN PAGE COMPONENT
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
    { number: "25+", label: "Projects Completed", icon: Award },
    { number: "15+", label: "Happy Clients", icon: Users },
    { number: "4+", label: "Years Experience", icon: Calendar },
    { number: "99%", label: "Success Rate", icon: Target }
  ];

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
      `}</style>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-teal-50/80 to-blue-50/70"></div>
      </div>
      <main className="relative z-10 py-16">
        <header className="text-center mb-4 py-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
            Projects
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto mt-6"></div>
        </header>
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm text-sm ${activeFilter === filter
                  ? 'bg-teal-600 text-white hover:bg-teal-700'
                  : 'bg-white/90 text-gray-700 hover:bg-teal-50 hover:text-teal-700 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => showMessage(`Opening project: ${project.title}`)}
              />
            ))}
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl"></div>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
              {stats.map(({ number, label, icon: Icon }, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
                  <Icon className="w-8 h-8 text-teal-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-teal-600 mb-1">{number}</div>
                  <div className="text-sm text-gray-600 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {message && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fadeIn">
          {message}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;

