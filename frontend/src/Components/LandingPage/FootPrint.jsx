import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { RxArrowRight, RxArrowLeft } from "react-icons/rx";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollRevealElements from '../Animations/ScrollRevealElements';

import API from "../../api/axios";
import KnowMoreButton from "./KnowMoreButton";
import ProjectModal from "./ProjectModal";
import "./FootPrint.css";
import { Navigate, useNavigate } from "react-router-dom";

const FootPrint = () => {
  const navigate = useNavigate();
  const [footprints, setFootprints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchFootprints = async () => {
      try {
        setLoading(true);
        const res = await API.get("/footprints");
        setFootprints(res.data.data || []);
      } catch (err) {
        console.error("Error fetching footprints:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFootprints();
  }, []);

  const handleKnowMoreClick = (footprint) => {
    setSelectedProject({
      src: footprint.image,
      title: footprint.title || "EHM Project",
      description:
        footprint.description ||
        "An innovative EHM project showcasing sustainable development and environmental conservation.",
      impact:
        footprint.impact ||
        "Significant positive impact on local environment and community development.",
      technologies:
        footprint.technologies ||
        "Advanced sustainable technologies and eco-friendly materials.",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden py-4 sm:py-8 md:py-10 lg:py-16 bg-white">

      <ScrollRevealElements
        className="flex flex-col gap-3 mb-8 items-center"
        staggerAmount={0.5}
      >
        <motion.div className="text-center mb-12 py-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="text-teal-500 animate-pulse" size={32} />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
             FootPrint
            </h1>
            <Sparkles className="text-emerald-500 animate-pulse" size={32} />
          </div>
          <div className="w-20 sm:w-28 md:w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
        </motion.div>
      </ScrollRevealElements>


      <motion.div
        className="w-full max-w-[90%] sm:max-w-[95%] md:max-w-[69rem] mx-auto relative group"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
            1280: { slidesPerView: 4, spaceBetween: 32 },
            1536: { slidesPerView: 5, spaceBetween: 36 },
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          grabCursor={true}
          modules={[Pagination, Navigation]}
          className="w-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {loading ? (
            <SwiperSlide className="flex items-center justify-center text-gray-500">
              Loading Footprints...
            </SwiperSlide>
          ) : (
            footprints.map((footprint, index) => (
              <SwiperSlide
                key={footprint._id}
                className="flex items-center justify-center"
              >
                <div
                  className="project-card relative w-full aspect-square mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-100 cursor-pointer"
                  onClick={() => setModalImage(footprint.image)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setModalImage(footprint.image);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View project image ${index + 1}`}
                >
                  <img
                    src={footprint.image}
                    alt={`EHM project ${index + 1}`}
                    className="project-image w-full h-full object-cover transition-all duration-300"
                  />
                  <div className="know-more-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300">
                    <div className="know-more-button-container opacity-0 transform translate-y-2 sm:translate-y-4 transition-all duration-300">
                      <KnowMoreButton
                        onClick={(e) => {
                          e.stopPropagation();
                          handleKnowMoreClick(footprint);
                        }}
                        className="bg-white text-green-600 hover:bg-green-50 border-2 border-white hover:border-green-200 shadow-xl know-more-button"
                      >
                        Open
                      </KnowMoreButton>
                    </div>
                  </div>
                  <div className="card-shadow absolute inset-0 rounded-lg shadow-lg transition-all duration-300" />
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
        

        {/* Navigation Buttons */}
        <button
          className="custom-swiper-prev absolute top-1/2 left-2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity bg-green-600 hover:bg-green-700 text-white rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
          type="button"
        >
          <RxArrowLeft className="w-5 sm:w-6 h-5 sm:h-6" /> 
        </button>
        <button
          className="custom-swiper-next absolute top-1/2 right-2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity bg-green-600 hover:bg-green-700 text-white rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
          type="button"
        >
          <RxArrowRight className="w-5 sm:w-6 h-5 sm:h-6" />
        </button>

        
      </motion.div>

      {/* Modal Image Preview */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm modal-backdrop"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-80 transition"
              onClick={() => setModalImage(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Large preview"
              className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] rounded-lg shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      )}



      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />

            <div className="know-more-button-container opacity-100 transform translate-y-2 py-4 sm:translate-y-4 transition-all duration-300">
                      <KnowMoreButton
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/resources/gallery`);
                        }}
                        className="bg-black text-green-600 hover:bg-green-50 border-2 border-white hover:border-green-200 shadow-xl know-more-button"
                      >
                        Gallary
                      </KnowMoreButton>
          </div>
    </div>
  );
};

export default FootPrint;