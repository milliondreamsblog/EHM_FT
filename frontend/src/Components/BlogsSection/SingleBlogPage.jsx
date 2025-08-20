import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import API from "../../api/axios";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";

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

  const formattedDate = new Date(blog.createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const imageUrl = blog.image
    ? `${API.defaults.baseURL}${blog.image.replace(/\\/g, "/")}`
    : null;

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
            className="prose prose-lg lg:prose-xl max-w-none mx-auto mt-8 text-gray-700"
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
    </div>
  );
};

export default SingleBlogPage;
