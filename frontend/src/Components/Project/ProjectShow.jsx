import React, { useState, useMemo } from 'react';
import { MapPin, Building, Calendar, ChevronDown, ChevronUp, ExternalLink, Share2, Bookmark, Eye, Award, Target, Zap, Sparkles, Users } from 'lucide-react';

// Mock images for demonstration. In a real app, you'd import these.
// Replaced local paths with web-accessible placeholders.
const pic1 = "../src/assets/Projects/Electrical Resistivity Tomography.jpeg";
const pic2 = "../src/assets/Projects/ESG Course Modules & TOT for MSME.jpg";
const pic3 = "../src/assets/Projects/CSJMU Sustainability Report.jpeg";
const pic4 = "../src/assets/Projects/Sustainable Management Plan, Antia Taal.jpg";
const pic5 = "../src/assets/Projects/Kanpur Smart City Audit.png";
const pic6 = "../src/assets/Projects/Restoration of Waterbody.jpg";
const pic7 = "../src/assets/Projects/social Impact.jpg";
const pic8 = "../src/assets/Projects/Designing Constructed Wetland .jpg";
const pic9 = "../src/assets/Projects/Designing Constructed Wetland .jpg";
const pic10 = "../src/assets/Projects/Restoration of Adiyur lake, Tirupathur.jpeg";
const pic11 = "../src/assets/Projects/Grey Water Management.jpeg";
const pic12 = "../src/assets/Projects/Environmental Audit.jpg";


const ProjectCard = ({
  image,
  title,
  agency,
  duration,
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

  // Toggles the expanded view for more details
  const toggleExpanded = (e) => {
    e.stopPropagation(); // Prevents the main card's onClick from firing
    setIsExpanded(!isExpanded);
  };

  // Toggles the bookmark state
  const handleBookmark = (e) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  // Handles sharing the project link
  const handleShare = (e) => {
    e.stopPropagation();
    // Using document.execCommand for compatibility within iFrames
    const dummyInput = document.createElement('input');
    document.body.appendChild(dummyInput);
    dummyInput.value = window.location.href; // In a real app, this would be the project-specific URL
    dummyInput.select();
    document.execCommand('copy');
    document.body.removeChild(dummyInput);
    // A visual confirmation would be better in a real app, but this works for now.
    console.log('Link copied to clipboard!');
    // You could also trigger the parent's showMessage function here if passed as a prop.
  };

  return (
    <div
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] cursor-pointer border border-gray-100 mb-6 ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Project Image with Enhanced Overlay */}
      <div className="relative overflow-hidden h-56">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
          alt={title}
          loading="lazy"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; }}
        />
        
        {/* Gradient Overlays for better text visibility and style */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border shadow-lg transition-all duration-300 group-hover:scale-110 ${
            status === 'Completed' ? 'bg-green-100/90 text-green-800 border-green-200' :
            status === 'Ongoing' ? 'bg-blue-100/90 text-blue-800 border-blue-200' :
            status === 'Upcoming' ? 'bg-yellow-100/90 text-yellow-800 border-yellow-200' :
            'bg-gray-100/90 text-gray-800 border-gray-200'
          }`}>
            {status}
          </span>
        </div>
        
        {/* Project Type Badge */}
        {projectType && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-teal-100/90 text-teal-800 backdrop-blur-md border border-teal-200 shadow-lg transition-all duration-300 group-hover:scale-110">
              {projectType}
            </span>
          </div>
        )}

        {/* Action Buttons that appear on hover */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <button
            onClick={handleBookmark}
            aria-label="Bookmark project"
            className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 ${
              isBookmarked 
                ? 'bg-yellow-100/90 text-yellow-600 border border-yellow-200' 
                : 'bg-white/90 text-gray-600 border border-gray-200 hover:bg-yellow-100/90 hover:text-yellow-600'
            }`}
          >
            <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
          </button>
          <button
            onClick={handleShare}
            aria-label="Share project"
            className="p-2 rounded-full bg-white/90 text-gray-600 border border-gray-200 backdrop-blur-md hover:bg-teal-100/90 hover:text-teal-600 transition-all duration-300 hover:scale-110"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Title and Location overlay at the bottom of the image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg leading-tight">
            {title}
          </h3>
          {location && (
            <div className="flex items-center text-white/90 text-xs">
              <MapPin className="w-3 h-3 mr-1" />
              {location}
            </div>
          )}
        </div>
      </div>

      {/* Main Card Content Area */}
      <div className="p-4 md:p-5 space-y-4">
        
        {/* Project Overview/Description */}
        {description && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-teal-600" />
              <h4 className="text-base font-bold text-gray-800">Overview</h4>
            </div>
            <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${
              isExpanded ? '' : 'line-clamp-3'
            }`}>
              {description}
            </p>
            {/* Show "Read More" button only if description is long enough to be clamped */}
            {description.length > 120 && (
              <button
                onClick={toggleExpanded}
                className="flex items-center gap-1 text-teal-600 hover:text-teal-700 font-medium text-xs transition-colors duration-300"
              >
                {isExpanded ? (
                  <>Show Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>Read More <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            )}
          </div>
        )}

        {/* Collapsible Section for Additional Details */}
        {(technologies?.length > 0 || outcomes?.length > 0) && (
          <div className="border-t border-gray-100 pt-3">
            <button
              onClick={toggleExpanded}
              className="flex items-center justify-between w-full p-2.5 bg-gray-50 hover:bg-teal-50 rounded-lg transition-all duration-300 group/btn"
            >
              <span className="font-bold text-sm text-gray-800 flex items-center gap-2">
                <Target className="w-4 h-4 text-teal-600" />
                Technical Details & Outcomes
              </span>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-500 group-hover/btn:text-teal-600 transition-colors" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 group-hover/btn:text-teal-600 transition-colors" />
              )}
            </button>
            
            {isExpanded && (
              <div className="mt-3 space-y-4 animate-fadeIn">
                {/* Technologies Used Section */}
                {technologies && technologies.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="font-bold text-teal-700 text-sm flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2.5 py-1.5 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-800 text-xs rounded-md font-medium border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Key Outcomes Section */}
                {outcomes && outcomes.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="font-bold text-green-700 text-sm flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Key Outcomes
                    </h5>
                    <div className="space-y-1.5">
                      {outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start gap-2 p-2 bg-green-50/50 rounded-lg hover:bg-green-50 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-gray-700 text-xs leading-relaxed">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Call-to-Action Section */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <span className="text-teal-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300">
              <Eye className="w-4 h-4" />
              View Details
            </span>
          </div>
          
          <button 
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            className="opacity-0 group-hover:opacity-100 px-3 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5 font-medium text-sm"
          >
            Open
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Border and Glow effects on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400 rounded-3xl transition-all duration-500 pointer-events-none"></div>
      <div className="absolute inset-0 -z-10 bg-teal-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-95 group-hover:scale-105"></div>
    </div>
  );
};

// Main App Component
const App = () => {
  const sampleProjects = [
    { image: pic1, title: "Electrical Resistivity Tomography (ERT) Survey", agency: "Thriveni Sainik Mining Private Limited", location: "Jharkhand", duration: "Ongoing", status: "Ongoing", projectType: "Survey", technologies: ["ERT", "Geophysical Surveying"], description: "Estimation of coal reserves, identification of galleries, coal seam voids, and water-filled zones in an abandoned coal mine.", outcomes: ["Detailed subsurface mapping", "Resource estimation"] },
    { image: pic2, title: "ESG Course Modules & TOT for MSME", agency: "UPSIC, Kanpur", location: "Kanpur, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Training", technologies: ["ESG Frameworks", "Curriculum Design"], description: "Develop course curriculum and organize Train the Trainer programs for RAMP Programme, a World Bank assisted project.", outcomes: ["Trained trainers", "Developed ESG curriculum"] },
    { image: pic3, title: "Sustainability Report", agency: "CSJM University, Kanpur", location: "Kanpur, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Environmental", technologies: ["UNSDG Framework", "GHG Accounting"], description: "Sustainability reporting using UNSDG framework, GHG emission accounting, and identifying interventions as per ESG framework to achieve Net-zero goals.", outcomes: ["Published sustainability report", "Net-zero roadmap"] },
    { image: pic4, title: "Sustainable Management Plan, Antia Taal", agency: "Jhansi Nagar Nigam, Jhansi", location: "Jhansi, Uttar Pradesh", duration: "Ongoing", status: "Ongoing", projectType: "Environmental", technologies: ["Water Management", "Financial Analysis"], description: "Assessing the technical feasibility of treated water and financial sustainability of the project.", outcomes: ["Feasibility report", "Sustainability plan"] },
    { image: pic5, title: "Audit of Smart City Projects", agency: "Jhansi and Kanpur Smart City Limited", location: "Jhansi & Kanpur", duration: "Completed", status: "Completed", projectType: "Audit", technologies: ["Project Auditing", "Quality Assurance"], description: "Audit and quality check of various projects executed under smart city mission starting from the DPR phase till the completion of the project.", outcomes: ["Comprehensive audit report", "Quality assessment"] },
    { image: pic6, title: "Restoration of Waterbody", agency: "CSJM University, Kanpur", location: "Kanpur, Uttar Pradesh", duration: "Ongoing", status: "Ongoing", projectType: "Environmental", technologies: ["Bioremediation", "Floating Wetlands"], description: "Design and commissioning of bioremediation floating wetland.", outcomes: ["Improved water quality", "Restored ecosystem"] },
    { image: pic7, title: "Social Impact Assessment", agency: "Jhansi Smart City Limited", location: "Jhansi, Uttar Pradesh", duration: "Completed", status: "Completed", projectType: "Audit", technologies: ["Social Impact Analysis"], description: "Social impact assessment of various projects of tourism, water, health, sports, park category executed under smart city mission.", outcomes: ["SIA report", "Community feedback analysis"] },
    { image: pic8, title: "Agra Project", agency: "CENGG Engineers & Ongoing Consultants (P) Ltd", location: "Industrial Area Foundry Nagar, Agra", duration: "Ongoing", status: "Ongoing", projectType: "Infrastructure", technologies: ["Effluent Treatment", "Project Management"], description: "Designing and Project Management of 80 KLD Decentralized Effluent Treatment Plant.", outcomes: ["Plant Design Completed", "Project Management Plan in Place"] },
    { image: pic9, title: "Designing Constructed Wetland", agency: "Neev Enviro Consultants", location: "Rajouri, J&K", duration: "Completed", status: "Completed", projectType: "Infrastructure", technologies: ["Constructed Wetlands", "Nature Based Treatment"], description: "Design of a 0.5 MLD STP based on decentralized nature based treatment technique.", outcomes: ["Designed STP plan"] },
    { image: pic10, title: "Restoration of Adiyur lake, Tirupathur", agency: "Tirupathur Municipal Corporation, Tamilnadu", location: "Tirupathur, Tamilnadu", duration: "Ongoing", status: "Ongoing", projectType: "Environmental", technologies: ["Lake Restoration", "Wastewater Treatment"], description: "Restoration of lake by treating and reuse the adjacent drain carrying the graywater.", outcomes: ["Restored lake ecosystem"] },
    { image: pic11, title: "Grey Water Management", agency: "Prachi Leather, Kanpur", location: "Leather Park, Kanpur", duration: "Completed", status: "Completed", projectType: "Infrastructure", technologies: ["Grey Water Treatment"], description: "Treatment of grey water generated inside the premises of the leather industry.", outcomes: ["Water recycling system"] },
    { image: pic12, title: "Environmental Audit", agency: "Kolkata Zonal Lab, CSIR-NEERI, Kolkata", location: "Kolkata, West Bengal", duration: "Completed", status: "Completed", projectType: "Audit", technologies: ["Environmental Auditing", "SDG Analysis"], description: "Analyzing the Energy/water usage and waste generation of the building to optimize/reduce the operations as per the SDGs guidelines.", outcomes: ["Audit report with recommendations"] }
  ];

  const [message, setMessage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All Projects');

  // Memoize the filtered projects array to prevent recalculation on every render
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All Projects') {
      return sampleProjects;
    }
    return sampleProjects.filter(project => project.projectType === activeFilter);
  }, [activeFilter, sampleProjects]);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000); // Hide after 3 seconds
  };

  const filterOptions = ['All Projects', 'Environmental', 'Smart City', 'Energy', 'Infrastructure', 'Audit', 'Survey', 'Training'];

  return (

    <div className="min-h-screen font-sans relative overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-teal-50/30">
        {/* Custom CSS for animations and grid layout */}
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(60px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(180deg); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(-90deg); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-15px) scale(1.1); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease forwards;
            opacity: 0;
          }
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; animation-delay: 2s; }
          .animate-float-slow { animation: float-slow 12s ease-in-out infinite; animation-delay: 4s; }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          /* New Grid Layout */
          .projects-grid {
            display: grid;
            gap: 1.5rem;
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
          @media (min-width: 768px) {
            .projects-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
          @media (min-width: 1280px) {
            .projects-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }
        `}</style>
      
      {/* Decorative Background Elements */}

    <div className="min-h-screen relative overflow-hidden ">
      {/* Enhanced Background */}

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-5"
          style={{ backgroundImage: `url(https://placehold.co/1920x1080/F0F9FF/334155?text=Background)` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-teal-50/80 to-blue-50/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-green-100/20"></div>
      </div>

      {/* Floating Animated Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-12 h-12 bg-teal-200/30 rounded-full blur-sm animate-float"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-green-200/40 rounded-full blur-sm animate-float-delayed"></div>
        <div className="absolute bottom-60 left-1/4 w-6 h-6 bg-blue-200/50 rounded-full blur-sm animate-float"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-teal-100/20 rounded-full blur-md animate-float-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-16">
        {/* Page Header */}
       <div className="text-center mb-4 py-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Sparkles className="text-teal-500 animate-pulse" size={40} />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
                Projects
              </h1>
              <Sparkles className="text-emerald-500 animate-pulse" size={40} />
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
          </div>

        {/* Filter Buttons Section */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-3">
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
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${activeFilter}-${index}`} // Use a key that changes with the filter to re-trigger animations
                {...project}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => showMessage(`Opening project: ${project.title}`)}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl"></div>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
              {[
                { number: "25+", label: "Projects Completed", icon: Award },
                { number: "15+", label: "Happy Clients", icon: Users },
                { number: "4+", label: "Years Experience", icon: Calendar },
                { number: "99%", label: "Success Rate", icon: Target }
              ].map(({ number, label, icon: Icon }, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
                  <Icon className="w-8 h-8 text-teal-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-teal-600 mb-1">{number}</div>
                  <div className="text-sm text-gray-600 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
       {/* Floating Message Box for notifications */}
       {message && (
         <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fadeIn">
           {message}
         </div>
       )}
    </div>
  );
};

export default App;
