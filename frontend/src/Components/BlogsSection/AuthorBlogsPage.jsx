import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";
import BlogCard from "./BlogsCards";

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
    <section className="bg-gray-50 pt-24 pb-12 min-h-screen">
      <div className="text-center mb-12 py-10">
        <p className="text-green-600 font-semibold">Author</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          {decodeURIComponent(authorName)}
        </h1>
      </div>

      <div className="px-6 max-w-screen-xl mx-auto">
        {loading && <p className="text-center text-lg">Loading blogs...</p>}
        {error && (
          <p className="text-center text-red-500 text-lg font-semibold">
            {error}
          </p>
        )}
        {!loading && !error && (
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <BlogCard key={blog._id} blog={blog} delay={index * 100} />
              ))
            ) : (
              <p className="col-span-full text-center text-lg text-gray-600">
                No blogs found for this author.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AuthorBlogsPage;
