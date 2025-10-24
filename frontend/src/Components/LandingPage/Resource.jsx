import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Common/SectionHeading";
import { Link } from "react-router-dom";

const Resource = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [debugInfo, setDebugInfo] = useState({});

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
  ]; // ✅ properly closed array

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Update debug info
      setDebugInfo({
        rectTop: Math.round(rect.top),
        rectHeight: Math.round(rect.height),
        windowHeight: windowHeight,
        scrollY: Math.round(scrollY),
      });

      // Simple calculation: use middle of viewport as trigger point
      const viewportMiddle = windowHeight / 2;
      const sectionStart = rect.top;
      const sectionEnd = rect.bottom;

      // Check if section is in view
      if (sectionEnd < 0 || sectionStart > windowHeight) return;

      // Distance scrolled into section
      const scrolledIntoSection = windowHeight - sectionStart;

      // Total scrollable distance in section
      const totalScrollable = rect.height;

      // Progress as percentage (0–1)
      let progress = scrolledIntoSection / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      // Determine index
      const newIndex = Math.min(
        Math.floor(progress * resources.length),
        resources.length - 1
      );

      if (newIndex !== activeIndex && newIndex >= 0) {
        setActiveIndex(newIndex);
      }
    };

    // Multiple scroll listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    // Also check parent containers for scroll
    const checkParentScroll = () => {
      let parent = sectionRef.current?.parentElement;
      let attempts = 0;
      while (parent && attempts < 5) {
        parent.addEventListener("scroll", handleScroll, { passive: true });
        parent = parent.parentElement;
        attempts++;
      }
    };
    checkParentScroll();

    // Initial call
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex, resources.length]);

  // Manual navigation
  const goToSlide = (index) => setActiveIndex(index);

  // Keyboard navigation (for testing)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setActiveIndex((prev) => Math.min(prev + 1, resources.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [resources.length]);

  return (
    <section
      id="resources"
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-teal-50 via-teal-100/40 to-teal-50"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center py-12">
        <div className="w-full max-w-7xl mx-auto px-8">
          <motion.div
            className="text-center mb-12 py-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Resources</SectionHeading>
          </motion.div>

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
                  <Link to={resource.link}>
                    <button className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:bg-green-700 transition-all duration-300 text-base">
                      {resource.buttonText}
                    </button>
                  </Link>
                </div>

                <div className="w-1/2 flex justify-center relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="rounded-lg shadow-xl object-cover w-[70%] h-[315px]"
                    loading="lazy"
                  />

                  {/* Vertical indicator */}
                  <div
                    className="absolute right-0 top-0 flex flex-col gap-2"
                    style={{
                      height: "315px",
                      justifyContent: "space-between",
                    }}
                  >
                    {resources.map((res, i) => (
                      <button
                        key={res.id}
                        onClick={() => goToSlide(i)}
                        className={`w-1.5 rounded-full transition-all duration-300 flex-1 ${
                          activeIndex === i
                            ? "bg-green-600 shadow-lg scale-110"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to ${res.title}`}
                        title={res.title}
                      />
                    ))}
                  </div>
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
