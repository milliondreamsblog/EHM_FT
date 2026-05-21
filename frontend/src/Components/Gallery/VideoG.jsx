import React, { useState } from "react";
import { Play } from "lucide-react";

// Import videos
import Video1 from "../../assets/Updated Video and Thumbnail/YouTube all video/CSJMU Sustainability Report 2024- 25.mp4";
import Video2 from "../../assets/Updated Video and Thumbnail/YouTube all video/EHM- CSJMU Water- Positive Campus.mp4";
import Video3 from "../../assets/Updated Video and Thumbnail/YouTube all video/Centralised STPs vs DECENTRALISED NATURAL TREATMENT SYSTEM (DNTS).mp4";
import Video4 from "../../assets/Updated Video and Thumbnail/YouTube all video/DECENTRALIZED NATURAL TREATMENT SYSTEM (DNTS).mp4";
import Video5 from "../../assets/Updated Video and Thumbnail/YouTube all video/EHM - ESG VIDEO.mp4";
import Video6 from "../../assets/Updated Video and Thumbnail/YouTube all video/Water Positive Campus.mp4";
import Video7 from "../../assets/Updated Video and Thumbnail/YouTube all video/Water Positive.mp4";

// Import thumbnails
import Thumb1 from "../../assets/Updated Video and Thumbnail/EHM- CSJMU Sustainability report 2024-25 - YOUTUBE THUMBNAILS  (1).webp";
import Thumb2 from "../../assets/Updated Video and Thumbnail/EHM- CSJMU UNIVERSITY WATER POSITIVE CAMPUS - YOUTUBE THUMBNAILS.webp";
import Thumb3 from "../../assets/Updated Video and Thumbnail/EHM- Centralised STPs vs DNTS- Youtube Thumbnail.webp";
import Thumb4 from "../../assets/Updated Video and Thumbnail/EHM- DNTS - YOUTUBE THUMBNAILS.webp";
import Thumb5 from "../../assets/Updated Video and Thumbnail/EHM- ESG - YOUTUBE THUMBNAILS .webp";
import Thumb6 from "../../assets/Updated Video and Thumbnail/EHM- WATER POSITIVE CAMPUS - YOUTUBE THUMBNAILS  (1).webp";
import Thumb7 from "../../assets/Updated Video and Thumbnail/EHM- WATER POSITIVE- YOUTUBE THUMBNAILS  (1).webp";

const VideoG = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const videos = [
    {
      title: "CSJMU Sustainability Report 2024-25",
      video: Video1,
      thumbnail: Thumb1,
    },
    {
      title: "CSJMU Water-Positive Campus",
      video: Video2,
      thumbnail: Thumb2,
    },
    {
      title: "Centralised STPs vs DNTS",
      video: Video3,
      thumbnail: Thumb3,
    },
    {
      title: "Decentralized Natural Treatment System (DNTS)",
      video: Video4,
      thumbnail: Thumb4,
    },
    {
      title: "ESG Overview",
      video: Video5,
      thumbnail: Thumb5,
    },
    {
      title: "Water Positive Campus",
      video: Video6,
      thumbnail: Thumb6,
    },
    {
      title: "Water Positive",
      video: Video7,
      thumbnail: Thumb7,
    },
  ];

  const handlePlay = (index) => {
    setPlayingIndex(index);
  };

  const handleClose = () => {
    setPlayingIndex(null);
  };

  return (
    <div className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-4">
          Our Videos
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our collection of videos showcasing sustainability initiatives, campus projects, and environmental solutions.
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => handlePlay(index)}
            >
              {/* Thumbnail Container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-green-500/20">
                <div className="relative aspect-video">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500">
                      <Play className="w-7 h-7 text-green-700 group-hover:text-white ml-1 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-green-600 transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {playingIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player */}
            <video preload="none" src={videos[playingIndex].video}
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            />

            {/* Video Title */}
            <h3 className="mt-4 text-xl font-semibold text-white text-center">
              {videos[playingIndex].title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoG;
