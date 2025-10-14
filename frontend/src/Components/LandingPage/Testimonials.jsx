import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollRevealElements from '../Animations/ScrollRevealElements';
import SectionHeading from '../../Common/SectionHeading';

const cardData = [
  {
    title: 'Electrical Resistivity Tomography (ERT) Survey',
    description: 'Estimation of coal reserves, identification of galleries, coal seam voids, and water-filled zones in an abandoned coal mine.',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1756901212/Electrical_Resistivity_Tomography_te2a4b.jpg',
  },
  {
    title: 'ESG Course Modules & TOT for MSME',
    description: 'Develop course curriculum and organize Train the Trainer programs for RAMP Programme, a World Bank assisted project.',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1756901263/ESG_Course_Modules_TOT_for_MSME_fcduho.jpg',
  },
  {
    title: 'Audit of Kanpur Smart City Projects',
    description: 'Audit and quality check of various projects executed under smart city mission in Kanpur, starting from the DPR phase till the completion of the project.',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1756901226/Kanpur_Smart_City_Audit_r4memd.png',
  },
  {
    title: 'Audit of Jhansi Smart City Projects',
    description: 'Audit and quality check of various projects executed under smart city mission in Jhansi, starting from the DPR phase till the completion of the project.',
    logo: 'https://placehold.co/600x400/FF6347/FFFFFF?text=Jhansi+Smart+City',
  },
  {
    title: 'Restoration of Waterbody',
    description: 'Design and commissioning of bioremediation floating wetland.',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1756901253/Restoration_of_Waterbody_hrs3eq.jpg',
  },
  {
    title: 'Social Impact Assessment',
    description: 'Social impact assessment of various projects of tourism, water, health, sports, park category executed under smart city mission.',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1756901244/social_Impact_tybcom.jpg',
  },
  {
    title: 'Agra Project',
    description: 'Designing and Project Management of 80 KLD Decentralized Effluent Treatment Plant.',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1756901211/Designing_Constructed_Wetland_ggm9s5.jpg',
  },
  {
    title: 'Designing Constructed Wetland',
    description: 'Design of a 0.5 MLD STP based on decentralized nature based treatment technique.',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1756901211/Designing_Constructed_Wetland_ggm9s5.jpg',
  },
  {
    title: 'Restoration of Adiyur lake, Tirupathur',
    description: 'Restoration of lake by treating and reuse the adjacent drain carrying the graywater.',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1756901237/Restoration_of_Adiyur_lake_Tirupathur_mepq3b.jpg',
  },
  {
    title: 'Grey Water Management',
    description: 'Treatment of grey water generated inside the premises of the leather industry.',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1756901213/Grey_Water_Management_orkst3.jpg',
  },
  {
    title: 'Environmental Audit',
    description: 'Analyzing the Energy/water usage and waste generation of the building to optimize/reduce the operations as per the SDGs guidelines.',
    logo: 'https://res.cloudinary.com/dlpluej6w/image/upload/v1756901211/Environmental_Audit_oeafkp.jpg',
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const containerWidth = scrollContainer.clientWidth;

      // current page index (0-based)
      const currentScroll = scrollContainer.scrollLeft;
      const currentPage = Math.floor(currentScroll / containerWidth);
      const targetPage = Math.max(0, currentPage - 1);
      const targetScroll = targetPage * containerWidth;

      scrollContainer.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const containerWidth = scrollContainer.clientWidth;
      const maxScroll = scrollContainer.scrollWidth - containerWidth;

      const currentScroll = scrollContainer.scrollLeft;
      const currentPage = Math.floor(currentScroll / containerWidth);
      const targetPage = Math.min(Math.ceil(scrollContainer.scrollWidth / containerWidth) - 1, currentPage + 1);
      const targetScroll = targetPage * containerWidth;

      scrollContainer.scrollTo({
        left: Math.min(maxScroll, targetScroll),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto">
        <ScrollRevealElements className="text-center mb-12" staggerAmount={0.5}>
          <SectionHeading>Completed Projects</SectionHeading>
        </ScrollRevealElements>

        <motion.div
          className="relative max-w-[90rem] mx-auto px-4 md:px-12 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Navigation Arrows - Only visible on container hover */}
          {/* Navigation buttons: absolute left/right with responsive offsets (closer to images) */}
          <button
            onClick={scrollLeft}
            aria-label="Previous projects"
            className="flex absolute left-2 sm:left-3 md:left-4 lg:left-5 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/90 text-gray-800 hover:bg-white transition-all duration-300 backdrop-blur-sm shadow-lg transform hover:scale-105 pointer-events-auto opacity-100"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollRight}
            aria-label="Next projects"
            className="flex absolute right-2 sm:right-3 md:right-4 lg:right-5 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/90 text-gray-800 hover:bg-white transition-all duration-300 backdrop-blur-sm shadow-lg transform hover:scale-105 pointer-events-auto opacity-100"
          >
            <ChevronRight size={20} />
          </button>

          {/* Projects Carousel */}
          <div className="px-4 -mx-4">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto py-4 no-scrollbar snap-x snap-mandatory"
              style={{
                scrollBehavior: 'smooth',
                scrollSnapType: 'x mandatory'
              }}
            >
              {cardData.map((card, idx) => (
                <motion.div 
                  key={idx}
                  className="carousel-card relative rounded-xl shadow-lg hover:shadow-xl aspect-square overflow-hidden group/card transition-all duration-300 hover:-translate-y-1 snap-start snap-always"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="h-full overflow-hidden">
                    <img 
                      src={card.logo}
                      alt={`Project ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover/card:from-black/80 transition-opacity duration-300"></div>
                    
                    {/* Project Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-lg font-bold mb-2 transition-transform duration-300 transform group-hover/card:-translate-y-1">{card.title}</h3>
                      <p className="text-sm opacity-0 group-hover/card:opacity-100 transition-all duration-300 line-clamp-3 mb-12 transform translate-y-4 group-hover/card:translate-y-0">
                        {card.description}
                      </p>

                      {/* Explore Button - Bottom right corner */}
                      <Link
                        to={`/projects#${card.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="absolute bottom-6 right-6 px-5 py-2 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full 
                          backdrop-blur-sm shadow-lg transform transition-all duration-300 opacity-0 group-hover/card:opacity-100 
                          hover:scale-105 border border-white/20 hover:border-white/40 hover:shadow-xl"
                        onClick={(e) => {
                          // Allow the navigation to happen
                          setTimeout(() => {
                            const element = document.getElementById(card.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              // Add a brief highlight effect
                              element.classList.add('highlight-project');
                              setTimeout(() => element.classList.remove('highlight-project'), 2000);
                            }
                          }, 100);
                        }}
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .scroll-snap-x { scroll-snap-type: x mandatory; }
        .scroll-snap-start { scroll-snap-align: start; }

        /* Carousel card sizing: exact 3/2/1 layout */
        .carousel-card { flex: 0 0 100%; max-width: 100%; }
        @media (min-width: 640px) { /* sm: 2 per view */
          .carousel-card { flex: 0 0 50%; max-width: 50%; }
        }
        @media (min-width: 1024px) { /* lg: 3 per view */
          .carousel-card { flex: 0 0 33.3333%; max-width: 33.3333%; }
        }

        /* Make group-hover opacity utility work for our inline style (ensure arrows show) */
        .group:hover .group-hover\\:opacity-100 { opacity: 1 !important; }

        @keyframes highlight {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5); }
          70% { box-shadow: 0 0 0 15px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }

        .highlight-project {
          animation: highlight 2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;