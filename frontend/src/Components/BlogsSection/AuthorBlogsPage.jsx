import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";
import BlogCard from "./BlogsCards";
import { motion } from "framer-motion";

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

const AuthorBlogsPage = () => {
  const { authorName } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthorBlogs = async () => {
      try {
        setLoading(true);
        const response = await API.get(`/blogs/author/${authorName}`);
        if (response.data.success) {
          setBlogs(response.data.data);
        } else {
          throw new Error(response.data.message);
        }
      } catch (err) {
        setError(err.message || "Failed to load author's blogs.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAuthorBlogs();
  }, [authorName]);

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-24 pb-12 relative overflow-hidden min-h-screen">
      <ParticleBackground />

      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 py-10"
        >
          <p className="text-lg text-emerald-600 font-semibold">Blogs by</p>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm">
            {decodeURIComponent(authorName)}
          </h1>
        </motion.div>

        <div>
          {loading && <p className="text-center text-lg">Loading blogs...</p>}
          {error && <p className="text-center text-red-500 text-lg font-semibold">{error}</p>}
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
                <p className="col-span-full text-center text-lg text-gray-600">
                  No blogs found for this author.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthorBlogsPage;