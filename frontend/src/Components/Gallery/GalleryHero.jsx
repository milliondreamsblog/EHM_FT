import { useState } from "react";
import VideoG from "./VideoG";
import Vid from "../Gallery/Vid";

const GalleryHero = () => {
  const [showAll, setShowAll] = useState(false);

  const data = [
    { image: "/Demo/31th1.webp" },
    { image: "/Demo/31th2.webp" },
    { image: "/Demo/31th3.webp" },
    { image: "/Demo/31th4.webp" },
    { image: "/Demo/31th5.webp" },
    { image: "/Demo/31th6.webp" },
    { image: "/Demo/31th7.webp" },
    { image: "/Demo/31th8.webp" },
    { image: "/Demo/31th9.webp" },
    { image: "/Demo/31th9.webp" },
    { image: "/Demo/31th10.webp" },
    { image: "/Demo/31th11.webp" },
    { image: "/Demo/31th12.webp" },
    { image: "/Demo/31th13.webp" },
    { image: "/Demo/31th14.webp" },
    { image: "/Demo/31th15.webp" },
    { image: "/Demo/31th16.webp" },
    { image: "/Demo/31th17.webp" },
    { image: "/Demo/31th19.webp" },
    { image: "/Demo/31th20.webp" },
    { image: "/Demo/31th21.webp" },
    { image: "/Demo/31th22.webp" },
    { image: "/Demo/31th23.webp" },
    { image: "/Demo/31th24.webp" },
    { image: "/Demo/31th25.webp" },
    { image: "/Demo/31th26.webp" },
    { image: "/Demo/31th27.webp" },
    { image: "/Demo/31th28.webp" },
    { image: "/Demo/31th29.webp" },
    { image: "/Demo/31th30.webp" },
    { image: "/Demo/31th31.webp" },
    { image: "/Demo/pic4.webp" },
    { image: "/Demo/pic23.webp" },
    { image: "/Demo/pic2.webp" },
    { image: "/Demo/pic5.webp" },
    { image: "/Demo/pic11.webp" },
    { image: "/Demo/pic3.webp" },
    { image: "/Demo/pic7.webp" },
    { image: "/Demo/pic21.webp" },
    { image: "/Demo/pic12.webp" },
    { image: "/Demo/pic14.webp" },
    { image: "/Demo/pic15.webp" },
    { image: "/Demo/pic16.webp" },
    { image: "/Demo/pic17.webp" },
    { image: "/Demo/pic18.webp" },
    { image: "/Demo/pic19.webp" },
    { image: "/Demo/pic20.webp" },
    { image: "/Demo/pic25.webp" },
    { image: "/Demo/pic6.webp" },
    { image: "/Demo/pic8.webp" },
    { image: "/Demo/pic9.webp" },
    { image: "/Demo/pic10.webp" },
    { image: "/Demo/pic13.webp" },
    { image: "/Demo/pic22.webp" },
    { image: "/Demo/pic1.webp" },
  ];

  const visibleData = showAll ? data : data.slice(0, 8);

  return (
    <section className="min-h-screen w-full py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-green-50 to-green-100">
      {/* <h1 className="mt-6 mb-12 text-center text-7xl md:text-8xl font-extrabold tracking-tight text-green-100 max-w-4xl mx-auto leading-tight">
        <span className="block mb-4 text-5xl font-light text-teal-500">
          Real People, Real Moments
        </span>
        <span className="block text-teal-500 font-semibold mt-2 px-4">
          Capturing the Heartbeat of Everyday Lives
        </span>
      </h1> */}

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {visibleData.map((item, i) => (
          <div key={i} className="rounded-xl overflow-hidden aspect-square">
            <img 
              loading={i < 4 ? "eager" : "lazy"} 
              fetchpriority={i < 4 ? "high" : "auto"} 
              src={item.image}
              alt={`Gallery ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            View More
          </button>
        </div>
      )}
      <div className="-mx-20 mt-8 px-0">
        <Vid />
      </div>

      <VideoG />
    </section>
  );
};

export default GalleryHero;
