import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Marquee from "react-fast-marquee";

const THUMBNAILS = [
  { src: "/Demo/pic4.jpeg", alt: "Friends smiling outdoors" },
  { src: "/Demo/pic5.jpeg", alt: "Family picnic moment" },
  { src: "/Demo/pic1.jpeg", alt: "Portrait of a child" },
  { src: "/Demo/pic2.jpeg", alt: "Street market view" },
  { src: "/Demo/pic3.jpeg", alt: "People walking on a beach" },
  { src: "/Demo/pic6.jpg", alt: "Group selfie" },
  { src: "/Demo/pic7.jpg", alt: "Festival celebration" },
  { src: "/Demo/pic8.png", alt: "Smiling couple" },
  { src: "/Demo/pic9.JPG", alt: "Traditional dance" },
  { src: "/Demo/pic10.JPG", alt: "City night lights" },
  { src: "/Demo/pic25.jpeg", alt: "Friends hiking" },
  { src: "/Demo/pic12.jpg", alt: "Wedding moment" },
  { src: "/Demo/pic13.jpg", alt: "School kids playing" },
  { src: "/Demo/pic14.jpeg", alt: "Village scene" },
  { src: "/Demo/pic15.jpeg", alt: "Cultural event" },
  { src: "/Demo/pic16.jpeg", alt: "Couple walking" },
  { src: "/Demo/pic17.jpeg", alt: "Concert crowd" },
  { src: "/Demo/pic18.jpeg", alt: "Family trip" },
  { src: "/Demo/pic19.jpeg", alt: "Smiling senior" },
  { src: "/Demo/pic20.jpeg", alt: "Friends at sunset" },
];

export default function FullscreenGallery() {
  const [heroIndex, setHeroIndex] = useState(0);

  const prevImage = () => {
    setHeroIndex((prev) => (prev === 0 ? THUMBNAILS.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setHeroIndex((prev) => (prev === THUMBNAILS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative  w-full min-h-screen flex flex-col "
      aria-label="Fullscreen image gallery"
    >
      
      <h1 className="mt-16 mb-12 text-center text-7xl md:text-8xl font-extrabold tracking-tight text-green-100 max-w-4xl mx-auto leading-tight">
        <span className="block mb-4 text-5xl font-light text-blue-400">
          Real People, Real Moments
        </span>
        <span className="block text-orange-300 font-semibold mt-2 px-4">
          Capturing the Heartbeat of Everyday Lives
        </span>
      </h1>

    
      <div className="relative flex-grow w-full mx-auto max-h-[80vh] h-[80vh]">
        <img
          src={THUMBNAILS[heroIndex].src}
          alt={THUMBNAILS[heroIndex].alt}
          className="w-full h-full object-cover shadow-2xl rounded-lg"
        />

       
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      </div>
     
      <div className="w-full bg-orange-200 py-4 overflow-hidden">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={false}
          loop={0} // infinite loop
        >
          <span className="text-4xl font-extrabold text-white tracking-widest mx-12">
            Uniting People • Preserving Nature • Powering a Sustainable Future
          </span>
          <span className="text-4xl font-extrabold text-white tracking-widest mx-12">
            Sustainability in Action • Clean Energy • Smart Cities • A Future We Can All Share
          </span>
        </Marquee>
      </div>

    </section>
  );
}
