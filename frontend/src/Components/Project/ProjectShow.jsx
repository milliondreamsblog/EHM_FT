import { useState } from 'react';
import { MapPin, Building, Users, Calendar, ChevronDown, ChevronUp, ExternalLink, Share2, Bookmark, Eye, Award, Target, Zap, Sparkles } from 'lucide-react';

// Mock images for demonstration
import pic1 from '../../assets/pic1.jpg';
import pic2 from '../../assets/pic2.jpg';
import pic3 from '../../assets/pic3.jpg';
import pic4 from '../../assets/pic4.jpg';

const ProjectCard = ({
  image,
  title,
  nature,
  agency,
  size,
  duration,
  description,
  status = "Completed",
  location,
  budget,
  projectType,
  technologies,
  outcomes,
  gallery = [],
  className = "",
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
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-3 hover:scale-[1.02] cursor-pointer border border-gray-100 ${className}`}
      onClick={onClick}
    >
      {/* Project Image with Enhanced Overlay */}
      <div className="relative h-64 sm:h-56 md:h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
          alt={title}
          loading="lazy"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Enhanced Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md border shadow-lg transition-all duration-300 group-hover:scale-110 ${
            status === 'Completed' ? 'bg-green-100/90 text-green-800 border-green-200' :
            status === 'Ongoing' ? 'bg-blue-100/90 text-blue-800 border-blue-200' :
            status === 'Upcoming' ? 'bg-yellow-100/90 text-yellow-800 border-yellow-200' :
            'bg-gray-100/90 text-gray-800 border-gray-200'
          }`}>
            {status}
          </span>
        </div>
        
        {/* Enhanced Project Type Badge */}
        {projectType && (
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 rounded-full text-sm font-bold bg-teal-100/90 text-teal-800 backdrop-blur-md border border-teal-200 shadow-lg transition-all duration-300 group-hover:scale-110">
              {projectType}
            </span>
          </div>
        )}

        {/* Action Buttons Overlay */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <button
            onClick={handleBookmark}
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
            className="p-2 rounded-full bg-white/90 text-gray-600 border border-gray-200 backdrop-blur-md hover:bg-teal-100/90 hover:text-teal-600 transition-all duration-300 hover:scale-110"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-lg leading-tight">
            {title}
          </h3>
          {location && (
            <div className="flex items-center text-white/90 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          )}
        </div>
      </div>

      {/* Card Content with Enhanced Structure */}
      <div className="p-6 sm:p-5 md:p-6 space-y-6">
        
        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          {agency && (
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors duration-300">
              <Building className="w-5 h-5 text-teal-600 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Agency</p>
                <p className="text-sm font-semibold text-gray-800 truncate">{agency}</p>
              </div>
            </div>
          )}
          
          {duration && (
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors duration-300">
              <Calendar className="w-5 h-5 text-teal-600 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Duration</p>
                <p className="text-sm font-semibold text-gray-800 truncate">{duration}</p>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Description Section */}
        {description && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-teal-600" />
              <h4 className="text-lg font-bold text-gray-800">Overview</h4>
            </div>
            <p className={`text-gray-700 leading-relaxed transition-all duration-300 ${
              isExpanded ? '' : 'line-clamp-3'
            }`}>
              {description}
            </p>
            {description.length > 150 && (
              <button
                onClick={toggleExpanded}
                className="flex items-center gap-1 text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors duration-300"
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {/* Collapsible Additional Details */}
        <div className="space-y-4">
          {/* Key Details - Always Visible */}
          <div className="grid grid-cols-1 gap-3">
            {nature && (
              <div className="flex items-start gap-3 p-3 bg-teal-50/50 rounded-lg">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="min-w-0">
                  <span className="font-bold text-teal-700 text-sm uppercase tracking-wide">Nature: </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{nature}</span>
                </div>
              </div>
            )}
            
            {(size || budget) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {size && (
                  <div className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-lg">
                    <Users className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-blue-700 text-sm uppercase tracking-wide">Size: </span>
                      <span className="text-gray-700 text-sm">{size}</span>
                    </div>
                  </div>
                )}
                
                {budget && (
                  <div className="flex items-start gap-3 p-3 bg-green-50/50 rounded-lg">
                    <Zap className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-green-700 text-sm uppercase tracking-wide">Budget: </span>
                      <span className="text-gray-700 text-sm">{budget}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Collapsible Advanced Details */}
          {(technologies?.length > 0 || outcomes?.length > 0) && (
            <div className="border-t border-gray-100 pt-4">
              <button
                onClick={toggleExpanded}
                className="flex items-center justify-between w-full p-3 bg-gray-50 hover:bg-teal-50 rounded-lg transition-all duration-300 group/btn"
              >
                <span className="font-bold text-gray-800 flex items-center gap-2">
                  <Target className="w-5 h-5 text-teal-600" />
                  Technical Details & Outcomes
                </span>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 group-hover/btn:text-teal-600 transition-colors" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 group-hover/btn:text-teal-600 transition-colors" />
                )}
              </button>
              
              {isExpanded && (
                <div className="mt-4 space-y-6 animate-fadeIn">
                  {/* Technologies */}
                  {technologies && technologies.length > 0 && (
                    <div className="space-y-3">
                      <h5 className="font-bold text-teal-700 text-base flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-2 bg-gradient-to-r from-teal-50 to-blue-50 text-teal-800 text-sm rounded-lg font-medium border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Key Outcomes */}
                  {outcomes && outcomes.length > 0 && (
                    <div className="space-y-3">
                      <h5 className="font-bold text-green-700 text-base flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Key Outcomes
                      </h5>
                      <div className="space-y-2">
                        {outcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-green-50/50 rounded-lg hover:bg-green-50 transition-colors duration-300">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm leading-relaxed">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Enhanced CTA Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <span className="text-teal-600 font-bold flex items-center gap-2 hover:gap-3 transition-all duration-300">
              <Eye className="w-4 h-4" />
              View Full Details
            </span>
          </div>
          
          <button 
            onClick={onClick}
            className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2 font-medium"
          >
            Open Project
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Enhanced Card Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400 rounded-3xl transition-all duration-500 pointer-events-none"></div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-teal-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-95 group-hover:scale-105"></div>

      {/* Custom CSS for line clamping */}
      <style jsx>{`
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
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

// Enhanced ProjectShow component
const ProjectShow = () => {
  const sampleProjects = [
    {
      image: pic1,
      title: "Electrical Resistivity Tomography (ERT) Survey",
      nature: "Estimation of coal reserves, identification of galeries, coal seam, voids, water filed zones in an abandoned coal mine in Jharkhand",
      agency: "",
      location: "Jharkhand, India",
      budget: "",
      status: "Completed",
      projectType: "Environmental",
      technologies: [],
      description: "This project involved conducting an Electrical Resistivity Tomography (ERT) survey to estimate coal reserves and identify geological features such as galleries, coal seams, voids, and water-filled zones in an abandoned coal mine in Jharkhand. The survey provided valuable insights for potential rehabilitation and safety assessments.",
      outcomes: [
        "Accurate estimation of remaining coal reserves",
        "Detailed mapping of underground structures and hazards",
        "Identification of water accumulation zones",
        "Recommendations for safe mine rehabilitation",
        "Comprehensive report for stakeholders"
      ]
    },
    {
      image: pic2,
      title: "Smart Water Management System",
      nature: "IoT-enabled water distribution and quality monitoring system with predictive analytics",
      agency: "",
      location: "Lucknow, Uttar Pradesh",
      size: "",
      duration: "",
      budget: "",
      status: "Completed",
      projectType: "Smart City",
      technologies: ["IoT Sensors Network", "Big Data Analytics", "Mobile Applications", "Cloud Computing", "Machine Learning"],
      description: "Implementation of comprehensive smart water management system featuring real-time monitoring, automated distribution control, predictive maintenance, and quality assessment capabilities across the entire city infrastructure.",
      outcomes: [
        "40% reduction in water wastage through smart monitoring",
        "Real-time water quality tracking and alerts",
        "Automated leak detection and prevention system",
        "Improved citizen satisfaction through mobile app interface"
      ]
    },
    {
      image: pic3,
      title: "Renewable Energy Hub",
      nature: "Integrated solar and wind energy installation with smart grid connectivity and storage solutions",
      agency: "",
      location: "Kanpur, Uttar Pradesh",
      size: "",
      duration: "",
      budget: "",
      status: "Completed",
      projectType: "Renewable Energy",
      technologies: ["High-Efficiency Solar Panels", "Wind Turbine Systems", "Smart Grid Integration", "Battery Storage Solutions", "Energy Management Software"],
      description: "Development of state-of-the-art integrated renewable energy facility combining solar photovoltaic and wind power generation with smart grid connectivity, advanced energy storage solutions, and intelligent distribution management systems.",
      outcomes: [
        "Target: 50 MW clean energy generation capacity",
        "Enhanced grid stability and reliability",
        "Significant carbon footprint reduction for the region",
        "Job creation and local economic development"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden ">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage: `url(${pic4})`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-teal-50/80 to-blue-50/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-green-100/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-12 h-12 bg-teal-200/30 rounded-full blur-sm animate-float"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-green-200/40 rounded-full blur-sm animate-float-delayed"></div>
        <div className="absolute bottom-60 left-1/4 w-6 h-6 bg-blue-200/50 rounded-full blur-sm animate-float"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-teal-100/20 rounded-full blur-md animate-float-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-16">
        {/* Enhanced Header */}
       <div  className="text-center mb-4 py-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Sparkles className="text-teal-500 animate-pulse" size={40} />
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Projects
                </h1>
                <Sparkles className="text-emerald-500 animate-pulse" size={40} />
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
            </div>

        {/* Enhanced Filter Section */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {['All Projects', 'Environmental', 'Smart City', 'Energy', 'Infrastructure'].map((filter, index) => (
              <button
                key={filter}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm ${
                  index === 0 
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {sampleProjects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => alert(`Opening detailed view for ${project.title}`)}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl"></div>
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
              {[
                { number: "25+", label: "Projects Completed", icon: Award },
                { number: "15+", label: "Happy Clients", icon: Users },
                { number: "4+", label: "Years Experience", icon: Calendar },
                { number: "99%", label: "Success Rate", icon: Target }
              ].map(({ number, label, icon: Icon }, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
                  <Icon className="w-8 h-8 text-teal-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-bold text-teal-600 mb-2">{number}</div>
                  <div className="text-gray-600 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(-90deg);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ProjectShow;