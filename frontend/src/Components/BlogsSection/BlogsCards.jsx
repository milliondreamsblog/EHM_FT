import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image as ImageIcon, ArrowRight, User } from "lucide-react";
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
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Reduced image height from h-56 to h-48 */}
      <div className="relative h-48 overflow-hidden">
        <Link to={`/blogs/${blog._id}`} className="block w-full h-full">
          {imageUrl && !imageError ? (
            <img
              src={imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-gray-300" />
            </div>
          )}
        </Link>
        <Link
          to={`/blogs/author/${encodeURIComponent(blog.author)}`}
          className="absolute top-4 right-4 z-10 bg-gradient-to-r from-gray-50 to-gray-200 text-gray-800 font-semibold px-3 py-1.5 rounded-full text-xs transition-all duration-300 ease-in-out flex items-center gap-1.5 shadow-sm hover:shadow-lg hover:from-emerald-400 hover:to-green-500 hover:text-white hover:scale-105"
        >
          <User className="w-3.5 h-3.5" />
          <span>{blog.author}</span>
        </Link>
      </div>

      {/* Reduced padding from p-6 to p-5 */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-sm text-gray-500 mb-2">{formattedDate}</span>
        {/* Reduced margin-bottom from mb-3 to mb-2 */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 flex-grow">
          <Link
            to={`/blogs/${blog._id}`}
            className="hover:text-green-600 transition-colors duration-300"
          >
            {blog.title}
          </Link>
        </h3>
        {/* Reduced snippet word count from 20 to 15 */}
        <p className="text-gray-600 text-sm mb-4">
          {createSnippet(blog.content, 15)}
        </p>
        <div className="mt-auto">
          <Link
            to={`/blogs/${blog._id}`}
            className="font-semibold text-green-600 inline-flex items-center gap-2 group-hover:text-green-800 transition-colors duration-300"
          >
            Read More
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;