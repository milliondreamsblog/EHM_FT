import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollRevealElements from "../Animations/ScrollRevealElements";
import SectionHeading from "../../Common/SectionHeading";


const cardData = [

  {
    id : "p25",
    title: "ESG Module Development for MSMEs and Training of Trainers (ToT) Workshop",
    description:
      ".",
    logo:
      "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901263/ESG_Course_Modules_TOT_for_MSME_fcduho.jpg",
  },
    {
    id : "p4",
    title: "Design of Natural STPs (0.5 MLD, 1.25 MLD, 1.50 MLD, and 3.50 MLD) – Gajwel City, Telangana",
    description:
      ".",
    logo:
      "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901211/Designing_Constructed_Wetland_ggm9s5.jpg",
  },
    {
    id : "p19",
    title: "Electrical Resistivity Tomography (ERT) Survey",
    description:
      ".",
    logo:
      "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901212/Electrical_Resistivity_Tomography_te2a4b.jpg",
  },
      {
    id : "p22",
    title: "Sustainable Management Plan for Antia Waterbody, Jhansi",
    description:
      ".",
    logo:"/Projects/img12.png",
  },
    {
      id : "p24",
    title: "AI-Driven Governance for Legislators Workshop at Vidhan Sabha, Lucknow",
    description:
      ".",
    logo:"/Projects/img11.jpg",
  },
    {
    id : "p14",
    title: "Environmental Audit of CSIR-NEERI Kolkata Zonal Centre West Bengal",
    description:
      ".",
    logo:
      "https://res.cloudinary.com/dlpluej6w/image/upload/v1756901211/Environmental_Audit_oeafkp.jpg",
  },

];

const Testimonials = () => {
  const scrollRef = useRef(null);

  // scroll by visible container width
  const scrollLeft = () => {
    if (!scrollRef.current) return;
    const sc = scrollRef.current;
    const visibleWidth = sc.clientWidth;
    sc.scrollBy({ left: -visibleWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    const sc = scrollRef.current;
    const visibleWidth = sc.clientWidth;
    sc.scrollBy({ left: visibleWidth, behavior: "smooth" });
  };

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto">
        <ScrollRevealElements className="text-center mb-12" staggerAmount={0.5}>
          <SectionHeading>Completed Projects</SectionHeading>
        </ScrollRevealElements>

        <motion.div
          className="relative max-w-[90rem] mx-auto px-4 md:px-6 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            aria-label="Previous projects"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 text-gray-800 shadow-lg hover:scale-105 transform"
            style={{ marginLeft: "-1.25rem" }}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            aria-label="Next projects"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 text-gray-800 shadow-lg hover:scale-105 transform"
            style={{ marginRight: "-1.25rem" }}
          >
            <ChevronRight size={18} />
          </button>

          {/* Carousel scroller */}
          <div className="px-6">
            <div
              ref={scrollRef}
              className="carousel-scroller flex gap-[1.5rem] overflow-x-auto scroll-smooth snap-x snap-mandatory py-4"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {cardData.map((card, idx) => (
                <motion.div
                  key={idx}
                  className="carousel-card snap-start rounded-xl shadow-lg overflow-hidden bg-gray-100 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  <div className="relative h-72 lg:h-80">
                    <img
                      src={card.logo}
                      alt={card.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform -translate-y-[10%]">
                      <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                        {card.description}
                      </p>
                    </div>
                    <Link
                      to={`/projects#${card.id}`}
                      className="absolute bottom-4 right-4 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full backdrop-blur-sm shadow-md"
                    >
                      Explore →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Styles: compute widths so exactly N cards fit visible area */}
      <style>{`
        :root { --gap: 1.5rem; } /* 24px gap (gap-6) */

        /* base: 1 card per view (mobile) */
        .carousel-scroller { gap: var(--gap); }
        .carousel-card {
          flex: 0 0 calc((100% - 0px) / 1); /* 1 per view */
          max-width: calc((100% - 0px) / 1);
        }

        /* sm: 2 cards per view */
        @media (min-width: 640px) {
          .carousel-card {
            flex: 0 0 calc((100% - var(--gap)) / 2);
            max-width: calc((100% - var(--gap)) / 2);
          }
        }

        /* lg and up: 3 cards per view (no partials) */
        @media (min-width: 1024px) {
          .carousel-card {
            flex: 0 0 calc((100% - (var(--gap) * 2)) / 3);
            max-width: calc((100% - (var(--gap) * 2)) / 3);
          }
        }

        /* hide native scrollbar */
        .carousel-scroller::-webkit-scrollbar { display: none; }
        .carousel-scroller { -ms-overflow-style: none; scrollbar-width: none; }

        /* small visual tweaks */
        .carousel-card { border-radius: 0.75rem; overflow: hidden; }
        .carousel-card img { display: block; }

        /* highlight anim (if used) */
        @keyframes highlight {
          0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.5); }
          70% { box-shadow: 0 0 0 15px rgba(59,130,246,0); }
          100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
        }
        .highlight-project { animation: highlight 2s ease-out; }
      `}</style>
    </div>
  );
};

export default Testimonials;
