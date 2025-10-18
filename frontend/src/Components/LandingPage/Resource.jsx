import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Resource = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const resources = [
    {
      id: "r1",
      title: "Blogs",
      description:
        "We leverage our internal research capabilities alongside state-of-the-art academic insights to develop new capabilities for our partner clients.",
      buttonText: "Explore our blogs",
      link: "/resources/blogs",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    },
    {
      id: "r2",
      title: "Case Studies",
      description:
        "We provide detailed case studies on two to three significant advancements shaping the global sustainable finance landscape and its evolution.",
      buttonText: "Explore case studies",
      link: "/resources/casestudies",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
    {
      id: "r3",
      title: "Webinars",
      description:
        "We host a topical dialogue every month, bringing together an eclectic set of experts on the subject to share their insights with climate finance practitioners.",
      buttonText: "Explore webinars",
      link: "/resources/webinar",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in view
      if (rect.bottom < 0 || rect.top > windowHeight) return;

      // Calculate how far we've scrolled into the section
      const sectionHeight = rect.height;
      const viewportOffset = -rect.top;
      
      // Ensure we don't go below 0
      const scrollProgress = Math.max(0, viewportOffset);
      
      // Calculate the scrollable area
      const scrollableArea = sectionHeight - windowHeight;
      
      // Get progress as a percentage (0 to 1)
      let progress = 0;
      if (scrollableArea > 0) {
        progress = Math.min(scrollProgress / scrollableArea, 1);
      }
      
      // Map progress to resource index
      const segmentSize = 1 / resources.length;
      let newIndex = Math.floor(progress / segmentSize);
      
      // Clamp to valid range
      newIndex = Math.max(0, Math.min(resources.length - 1, newIndex));
      
      setActiveIndex(newIndex);
    };

    // Use both scroll and resize events
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [resources.length]);

  const scrollToIndex = (i) => {
    setActiveIndex(i);
  };

  return (
    <section
      id="resources"
      ref={sectionRef}
      className="relative w-full bg-white"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center py-12">
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Resources</h2>
          </div>

          <div className="relative h-[500px]">
            {resources.map((resource, idx) => (
              <motion.div
                key={resource.id}
                className="absolute inset-0 w-full h-full flex flex-row items-center justify-between gap-12 px-4"
                initial={false}
                animate={{
                  opacity: activeIndex === idx ? 1 : 0,
                  x: activeIndex === idx ? 0 : activeIndex > idx ? -50 : 50,
                  zIndex: activeIndex === idx ? 10 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ pointerEvents: activeIndex === idx ? "auto" : "none" }}
              >
                <div className="w-1/2 text-left pr-8">
                  <h3 className="text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-xl mb-8 leading-relaxed font-light">
                    {resource.description}
                  </p>
                  <a href={resource.link} className="inline-block">
                    <button className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:bg-green-700 transition-all duration-300 text-base">
                      {resource.buttonText}
                    </button>
                  </a>
                </div>

                <div className="w-1/2 flex justify-center relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="rounded-lg shadow-xl object-cover w-[70%] h-[315px]"
                    loading="lazy"
                  />
                  
                  {/* Vertical indicator - aligned with image */}
                  {activeIndex === idx && (
                    <div className="absolute right-0 top-0 flex flex-col gap-2" style={{ height: '315px', justifyContent: 'space-between' }}>
                      {resources.map((res, i) => (
                        <button
                          key={res.id}
                          onClick={() => scrollToIndex(i)}
                          className={`w-1.5 rounded-full transition-all duration-300 flex-1 ${
                            activeIndex === i
                              ? "bg-green-600 shadow-lg scale-110"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                          aria-label={`Go to ${res.title}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resource;