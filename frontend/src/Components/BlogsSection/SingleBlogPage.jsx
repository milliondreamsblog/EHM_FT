import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import API from "../../api/axios";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";


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
      "rgba(34, 197, 94, 0.6)",
      "rgba(22, 163, 74, 0.5)",
      "rgba(21, 128, 61, 0.4)",
      "rgba(134, 239, 172, 0.7)",
      "rgba(74, 222, 128, 0.6)",
    ];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color =
          greenColors[Math.floor(Math.random() * greenColors.length)];
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

const SingleBlogPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await API.get(`/blogs/${blogId}`);
        if (response.data.success) {
          setBlog(response.data.data);
        } else {
          throw new Error(response.data.message || "Blog not found");
        }
      } catch (err) {
        setError(err.message || "Could not find the blog post.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [blogId]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  if (!blog) return null;

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const imageUrl = blog.image
    ? `${API.defaults.baseURL}${blog.image.replace(/\\/g, "/")}`
    : null;

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-24 pb-20 relative overflow-hidden min-h-screen">
      <ParticleBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <article>
          <div className="text-center mb-8">
            <Link
              to={`/blogs/author/${encodeURIComponent(blog.author)}`}
              className="inline-block bg-green-100 text-green-800 font-semibold px-4 py-1 rounded-full text-sm hover:bg-green-200 transition-colors mb-4"
            >
              {blog.author}
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              {blog.title}
            </h1>
            <p className="mt-4 text-md text-gray-500">{formattedDate}</p>
          </div>

          <div className="w-full aspect-video rounded-2xl shadow-xl my-8 bg-gray-100 flex items-center justify-center overflow-hidden">
            {imageUrl && !imageError ? (
              <img
                src={imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex flex-col items-center text-gray-300">
                <ImageIcon size={64} />
                <p className="mt-2 font-semibold text-gray-400">
                  Image Not Available
                </p>
              </div>
            )}
          </div>

          <div
            className="prose prose-lg lg:prose-xl max-w-none mx-auto mt-8 text-gray-700 blog-content-view"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <div className="mt-12">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-800 transition-colors"
            >
              <ArrowLeft size={20} />
              Back
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SingleBlogPage;