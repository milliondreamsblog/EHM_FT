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

      <div className="relative h-56 overflow-hidden">
        <Link to={`/blogs/${blog._id}`} className="block w-full h-full">
          {imageUrl && !imageError ? (
            <img
              src={imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-gray-300">
              <ImageIcon size={48} />
              <p className="mt-2 text-xs font-semibold text-gray-400">
                Image Not Available
              </p>
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


      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm text-gray-500 mb-2">{formattedDate}</span>
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex-grow">
          <Link
            to={`/blogs/${blog._id}`}
            className="hover:text-green-600 transition-colors duration-300"
          >
            {blog.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {createSnippet(blog.content, 20)}
        </p>
        <div className="mt-auto">
          <Link
            to={`/blogs/${blog._id}`}
            className="font-semibold text-green-600 hover:text-green-800 transition-colors flex items-center"
          >
            Read More
            <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;  