import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { RxArrowRight, RxArrowLeft } from "react-icons/rx";
import { imagesPartOne, imagesPartTwo } from "../../Data/Footprint";
import KnowMoreButton from "./KnowMoreButton";
import ProjectModal from "./ProjectModal";
import "./FootPrint.css";
import { Sparkles } from "lucide-react";

const allImages = [...imagesPartOne, ...imagesPartTwo];

const FootPrint = () => {
  const [modalImage, setModalImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const swiperRef = useRef(null);

  const handleKnowMoreClick = (image) => {
    setSelectedProject({
      src: image.src,
      title: image.title || 'EHM Project',
      description: image.description || 'An innovative EHM project showcasing sustainable development and environmental conservation.',
      impact: image.impact || 'Significant positive impact on local environment and community development.',
      technologies: image.technologies || 'Advanced sustainable technologies and eco-friendly materials.'
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden py-8 md:py-16 px-2 sm:px-6">
      <div className="flex flex-col gap-3 mb-8 items-center">
        <div className="text-center mb-12 py-8">
                 <div className="flex items-center justify-center gap-4 mb-6">
                   <Sparkles className="text-teal-500 animate-pulse" size={40} />
                   <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
                     EHM FootPrint
                   </h1>
                   <Sparkles className="text-emerald-500 animate-pulse" size={40} />
                 </div>
                 <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mx-auto"></div>
               </div>
      </div>
      
      {/* Slider */}
      <div className="w-full max-w-4xl px-4 relative group">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 }, 
            1024: { slidesPerView: 3, spaceBetween: 24 }, 
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.custom-swiper-next',
            prevEl: '.custom-swiper-prev',
          }}
          grabCursor={true}
          modules={[Pagination, Navigation]}
          className="w-full"
          onSwiper={swiper => (swiperRef.current = swiper)}
        >
          {allImages.map((image, index) => (
            <SwiperSlide key={image.src} className="flex items-center justify-center">
              <div
                className="project-card relative w-full aspect-square max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-100 cursor-pointer"
                onClick={() => setModalImage(image.src)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setModalImage(image.src);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View project image ${index + 1}`}
              >
             
                <img
                  src={image.src}
                  alt={`EHM project ${index + 1}`}
                  className="project-image w-full h-full object-cover transition-all duration-300"
                />
                
              
                <div className="know-more-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300">
                  <div className="know-more-button-container opacity-0 transform translate-y-4 transition-all duration-300">
                    <KnowMoreButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleKnowMoreClick(image);
                      }}
                      className="bg-white text-green-600 hover:bg-green-50 border-2 border-white hover:border-green-200 shadow-xl know-more-button"
                    >
                      Know More
                    </KnowMoreButton>
                  </div>
                </div>

               
                <div className="card-shadow absolute inset-0 rounded-lg shadow-lg transition-all duration-300" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
     
        <button
          className="custom-swiper-prev absolute top-1/2 left-2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity bg-green-600 hover:bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
          type="button"
        >
          <RxArrowLeft className="w-6 h-6" />
        </button>
        <button
          className="custom-swiper-next absolute top-1/2 right-2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity bg-green-600 hover:bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
          type="button"
        >
          <RxArrowRight className="w-6 h-6" />
        </button>
     
        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        `}</style>
      </div>
     
     
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm modal-backdrop"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-2xl w-full mx-4"
            onClick={e => e.stopPropagation()}
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
              className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      )}

     
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default FootPrint;