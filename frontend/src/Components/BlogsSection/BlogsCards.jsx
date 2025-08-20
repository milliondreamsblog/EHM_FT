import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { Image as ImageIcon } from "lucide-react";
import API from "../../api/axios";

const BlogCard = ({ blog, delay }) => {
  const [imageError, setImageError] = useState(false);

  const createSnippet = (content, wordCount) => {
    if (!content) return "";
    const text = content.replace(/<[^>]*>?/gm, "");
    return text.split(" ").slice(0, wordCount).join(" ") + "...";
  };

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const imageUrl = blog.image
    ? `${API.defaults.baseURL}${blog.image.replace(/\\/g, "/")}`
    : null;

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.05}
      transitionSpeed={1500}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
    >
      <div
        className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div className="relative h-56 overflow-hidden bg-gray-100">
          <Link to={`/blogs/${blog._id}`} className="w-full h-full">
            {imageUrl && !imageError ? (
              <img
                src={imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-300">
                <ImageIcon size={48} />
                <p className="mt-2 text-xs font-semibold text-gray-400">
                  Image Not Available
                </p>
              </div>
            )}
          </Link>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
            <span>{formattedDate}</span>
            <Link
              to={`/blogs/author/${encodeURIComponent(blog.author)}`}
              className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full text-xs hover:bg-green-200 transition-colors"
            >
              {blog.author}
            </Link>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
            <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
          </h3>
          <p className="text-gray-600 text-sm flex-grow">
            {createSnippet(blog.content, 20)}
          </p>
          <div className="mt-4">
            <Link
              to={`/blogs/${blog._id}`}
              className="font-semibold text-green-600 hover:text-green-800 transition-colors flex items-center"
            >
              Read More{" "}
              <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default BlogCard;
