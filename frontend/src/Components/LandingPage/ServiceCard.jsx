import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({ title, description, imageUrl, fileUrl, delay = 0 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      {/* Card */}
      <div
        className="group relative flex flex-col lg:flex-row items-center gap-8 py-10 px-6 m-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-lime-500"

        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={delay}
      >
        {/* Left Content */}
        <div className="flex-1 relative z-10">
          <h2 className="text-3xl font-extrabold mb-4 text-black">
            {title}
          </h2>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            {description}
          </p>
          {fileUrl && (
            <a
              href={fileUrl}
              download
              className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg ring-2 ring-lime-300 hover:ring-lime-600 animate-pulse"

            >
              Learn More
            </a>
          )}
        </div>

        {/* Right Image */}
        <div
          className="flex-1 max-w-sm w-full cursor-pointer relative z-10"
          data-aos="zoom-in-up"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={imageUrl}
            alt="Zoomed"
            className="max-w-3xl w-full rounded-xl shadow-2xl scale-100"
          />
        </div>
      )}
    </>
  );
};

export default ServiceCard;
