import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { RxArrowRight, RxArrowLeft } from "react-icons/rx";
import { imagesPartOne, imagesPartTwo } from "../../Data/Footprint";


const allImages = [...imagesPartOne, ...imagesPartTwo];

const FootPrint = () => {

  const [modalImage, setModalImage] = useState(null);
  const swiperRef = useRef(null);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white overflow-hidden py-8 md:py-16 px-2 sm:px-6">
      <div className="flex flex-col gap-3 mb-8 items-center">
        <h1 className="text-green-900 text-3xl md:text-4xl font-semibold text-center">
          EHM FootPrint<span className="text-red-500">.</span>
        </h1>
        <p className="text-base max-w-md text-blue-800 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
     {/* Slider */}
      <div className="w-full max-w-4xl px-4 relative group">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 }, // sm
            1024: { slidesPerView: 3, spaceBetween: 24 }, // lg
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
          {allImages.map((image) => (
            <SwiperSlide key={image.src} className="flex items-center justify-center">
              <div
                className="relative group w-full aspect-square max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-100 cursor-pointer"
                onClick={() => setModalImage(image.src)}
              >
                <div className="absolute inset-0 z-10 bg-transparent group-hover:bg-green-600 group-hover:opacity-60 transition-all duration-300 pointer-events-none" />
                <img
                  src={image.src}
                  alt="project"
                  className="w-full h-full object-cover relative z-20 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-medium flex items-center gap-2 transition-opacity duration-300">
                    View Project <RxArrowRight className="w-6 h-6" />
                  </span>
                </div>
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
        {/* Hide default Swiper arrows */}
        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        `}</style>
      </div>
     
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
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
    </div>
  );
};

export default FootPrint;