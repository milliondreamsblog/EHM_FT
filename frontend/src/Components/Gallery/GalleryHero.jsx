import { useState } from "react";
import VideoG from "./VideoG";
import Vid from '../Gallery/Vid'

const GalleryHero = () => {
  const [showAll, setShowAll] = useState(false);

  const data = [
    { image: "/Demo/31th1.JPG" },
    { image: "/Demo/31th2.JPG" },
    { image: "/Demo/31th3.jpeg" },
    { image: "/Demo/31th4.JPG" },
    { image: "/Demo/31th5.jpeg" },
    { image: "/Demo/31th6.JPG" },
    { image: "/Demo/31th7.jpeg" },
    { image: "/Demo/31th8.jpeg" },
    { image: "/Demo/31th9.jpeg" },
    { image: "/Demo/31th9.jpg" },
    { image: "/Demo/31th10.jpeg" },
    { image: "/Demo/31th11.JPG" },
    { image: "/Demo/31th12.JPG" },
    { image: "/Demo/31th13.JPG" },
    { image: "/Demo/31th14.jpeg" },
    { image: "/Demo/31th15.jpeg" },
    { image: "/Demo/31th16.jpeg" },
    { image: "/Demo/31th17.jpeg" },
    { image: "/Demo/31th18.jpeg" },
    { image: "/Demo/31th19.jpeg" },
    { image: "/Demo/31th20.jpeg" },
    { image: "/Demo/31th21.jpeg" },
    { image: "/Demo/31th22.jpeg" },
    { image: "/Demo/31th23.JPG" },
    { image: "/Demo/31th24.JPG" },
    { image: "/Demo/31th25.jpeg" },
    { image: "/Demo/31th26.jpeg" },
    { image: "/Demo/31th27.jpeg" },
    { image: "/Demo/31th28.jpg" },
    { image: "/Demo/31th29.jpeg" },
    { image: "/Demo/31th30.jpeg" },
    { image: "/Demo/31th31.jpeg" },
    { image: "/Demo/pic4.jpeg" },
    { image: "/Demo/pic23.jpeg" },
    { image: "/Demo/pic2.jpeg" },
    { image: "/Demo/pic5.jpeg" },
    { image: "/Demo/pic11.jpg" },
    { image: "/Demo/pic3.jpeg" },
    { image: "/Demo/pic7.jpg" },
    { image: "/Demo/pic21.jpeg" },
    { image: "/Demo/pic12.jpg" },
    { image: "/Demo/pic14.jpeg" },
    { image: "/Demo/pic15.jpeg" },
    { image: "/Demo/pic16.jpeg" },
    { image: "/Demo/pic17.jpeg" },
    { image: "/Demo/pic18.jpeg" },
    { image: "/Demo/pic19.jpeg" },
    { image: "/Demo/pic20.jpeg" },
    { image: "/Demo/pic25.jpeg" },
    { image: "/Demo/pic6.jpg" },
    { image: "/Demo/pic8.png" },
    { image: "/Demo/pic9.JPG" },
    { image: "/Demo/pic10.JPG" },
    { image: "/Demo/pic13.jpg" },
    { image: "/Demo/pic22.jpeg" },
    { image: "/Demo/pic1.jpeg" },
   
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
        <Vid/>
      </div>

      <VideoG/>
    </section>
  );
};

export default GalleryHero;
