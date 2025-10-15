import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { RxChevronRight, RxChevronLeft } from "react-icons/rx";
import { motion } from "framer-motion";
import ScrollRevealElements from "../Animations/ScrollRevealElements";
import SectionHeading from "../../Common/SectionHeading";
import API from "../../api/axios";
import KnowMoreButton from "./KnowMoreButton";
import ProjectModal from "./ProjectModal";
import "./FootPrint.css";
import { useNavigate } from "react-router-dom";

const FootPrint = () => {
  const navigate = useNavigate();
  const [footprints, setFootprints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  // Fetch Footprints
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

  // Ensure navigation buttons re-initialize
  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      swiper.params.navigation.prevEl = ".custom-swiper-prev";
      swiper.params.navigation.nextEl = ".custom-swiper-next";
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [footprints]);

  const handleImageClick = (footprint) => {
    setModalImage(footprint.image);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-visible py-10 bg-white relative">
      <ScrollRevealElements className="flex flex-col gap-3 mb-8 items-center" staggerAmount={0.5}>
        <motion.div className="text-center mb-12 py-8">
          <SectionHeading>EHM FootPrint</SectionHeading>
        </motion.div>
      </ScrollRevealElements>

      <motion.div
        className="w-full max-w-[90%] sm:max-w-[95%] md:max-w-[69rem] mx-auto relative px-12 sm:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Swiper Carousel */}
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
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
          }}
          navigation={true}
          grabCursor={true}
          speed={700}
          modules={[Pagination, Navigation]}
          className="w-full"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
        >
          {loading ? (
            <SwiperSlide className="flex items-center justify-center text-gray-500">
              Loading Footprints...
            </SwiperSlide>
          ) : (
            footprints.map((footprint, index) => (
              <SwiperSlide key={footprint._id} className="flex items-center justify-center">
                <div
                  className="project-card relative w-full aspect-square mx-auto overflow-hidden rounded-2xl shadow-lg bg-gray-100 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => handleImageClick(footprint)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleImageClick(footprint);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View project image ${index + 1}`}
                >
                  <img
                    src={footprint.image}
                    alt={`EHM project ${index + 1}`}
                    className="project-image w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  />
                  <div className="card-shadow absolute inset-0 rounded-2xl shadow-inner transition-all duration-300" />
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>

        {/* Pagination Dots */}
        <div className="custom-pagination flex justify-center mt-6 space-x-3"></div>

        {/* Neutral Navigation Buttons */}
        <button
          className={`custom-swiper-prev absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 z-30 transition-all duration-300 
          bg-white/80 backdrop-blur-md text-gray-700 border border-gray-300 
          rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-2xl 
          focus:outline-none focus:ring-4 focus:ring-gray-200/50 
          ${isBeginning ? "opacity-40 cursor-not-allowed" : "hover:scale-110"}`}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
          type="button"
        >
          <RxChevronLeft className="w-7 h-7 font-bold" />
        </button>

        <button
          className={`custom-swiper-next absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 z-30 transition-all duration-300 
          bg-white/80 backdrop-blur-md text-gray-700 border border-gray-300 
          rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-2xl 
          focus:outline-none focus:ring-4 focus:ring-gray-200/50 
          ${isEnd ? "opacity-40 cursor-not-allowed" : "hover:scale-110"}`}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
          type="button"
        >
          <RxChevronRight className="w-7 h-7 font-bold" />
        </button>
      </motion.div>

      {/* Modal Image Preview */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
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
              className="w-full h-auto max-h-[75vh] rounded-lg shadow-2xl border-4 border-white"
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

      {/* Know More Button */}
      <div className="know-more-button-container opacity-100 transform translate-y-2 py-4 sm:translate-y-4 transition-all duration-300">
        <KnowMoreButton
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/resources/gallery`);
          }}
          className="bg-black text-green-600 hover:bg-green-50 border-2 border-white hover:border-green-200 shadow-xl"
        >
          Gallery
        </KnowMoreButton>
      </div>
    </div>
  );
};

export default FootPrint;