import React, { useState, useRef, useEffect } from 'react';

const VideoHeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play prevented:", error);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative  w-full bg-black overflow-hidden p-4 md:p-6 lg:p-16" style={{ height: '40vh' }}>
      <div className='relative z-10 flex justify-center items-center text-7xl'>
        <h1>Videos</h1>
      </div>
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/y.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
     

     
      <div className="absolute bottom-4 right-4 flex items-center space-x-3">
        <button
          onClick={toggleMute}
          className="w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
      </div>


    
    </div>
  );
};

export default VideoHeroSection;