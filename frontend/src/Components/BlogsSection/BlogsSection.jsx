import React, { useState, useEffect, useRef } from "react";
import API from "../../api/axios";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import BlogCard from "./BlogsCards";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const particles = [];
    const particleCount = 50;
    const greenColors = [
      "rgba(34, 197, 94, 0.6)", "rgba(22, 163, 74, 0.5)", "rgba(21, 128, 61, 0.4)",
      "rgba(134, 239, 172, 0.7)", "rgba(74, 222, 128, 0.6)",
    ];
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = greenColors[Math.floor(Math.random() * greenColors.length)];
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await API.get(`/blogs`);
        if (response.data.success) {
          setBlogs(response.data.data);
        } else {
          throw new Error(response.data.message || "Failed to fetch blogs");
        }
        setError(null);
      } catch (err) {
        setError("Failed to load blogs. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-24 pb-12 relative overflow-hidden min-h-screen py-16">
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Sparkles className="text-emerald-500 animate-pulse" size={32} />
              <motion.h1
                animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="p-2 text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-sm"
              >
                Our Blogs
              </motion.h1>
              <Sparkles className="text-teal-500 animate-pulse" size={32} />
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mx-auto h-1 w-28 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-green-700 mt-8 max-w-2xl mx-auto"
          >
            Insights, stories, and updates from the world of environmental sustainability.
          </motion.p>
        </div>
      </div>

      {/* Blog Cards: Changed to Flexbox for centering */}
      <div className="w-full max-w-6xl mx-auto relative z-10 mt-8">
        {loading && <div className="text-center text-lg text-gray-700">Loading blogs...</div>}
        {error && <div className="text-center text-red-500 text-lg font-semibold">{error}</div>}
        {!loading && !error && (
          <div className="flex justify-center flex-wrap gap-8">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                // Card Wrapper for width control
                <div key={blog._id} className="w-full sm:w-80 md:w-96 lg:w-[calc(33.33%-2rem)]">
                  <BlogCard blog={blog} delay={index * 100} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-lg text-gray-600">
                No blogs posted yet. Check back soon!
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;