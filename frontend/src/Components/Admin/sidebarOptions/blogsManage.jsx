import React, { useState, useEffect } from "react";
import API from "../../../api/axios";

export default function BlogsManage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isFullViewOpen, setIsFullViewOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  // Form data
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    image: null,
  });

  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetch all blogs (user route)
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await API.get("/blogs");
      setBlogs(res.data.data || []);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files ? files[0] : null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  //function to convert content text to HTML, including image links
  const processBlogContent = (text) => {
    if (!text) return "";
    // Regular expression to find image URLs
    const imageUrlRegex = /(https?:\/\/[^\s]+?\.(?:jpg|jpeg|png|gif|svg|webp))/gi;

    return text
      .split('\n')
      .map(line => {
        // Check if the line is just an image URL
        if (line.trim().match(imageUrlRegex) && line.trim().match(imageUrlRegex)[0] === line.trim()) {
          // If it is, return an <img> tag
          return `<img src="${line.trim()}" alt="Blog content image" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1em 0;" />`;
        }
        // Otherwise, if the line is not empty, wrap it in a <p> tag
        else if (line.trim() !== "") {
          return `<p>${line.trim()}</p>`;
        }
        return ''; // Return an empty string for empty lines to avoid empty <p> tags
      })
      .join('');
  };

  // Upload blog
  const handleUpload = async () => {
    if (!formData.title || !formData.author || !formData.content) {
      alert("Please fill all required fields.");
      return;
    }
    try {
      const data = new FormData();

      const formattedContent = processBlogContent(formData.content);

      data.append("title", formData.title);
      data.append("author", formData.author);
      data.append("content", formattedContent);
      if (formData.image) data.append("image", formData.image);

      await API.post("/admin/blogs", data);
      setIsUploadModalOpen(false);
      setFormData({ title: "", author: "", content: "", image: null });
      fetchBlogs();
    } catch (err) {
      console.error("Error uploading blog:", err);
    }
  };

  // Edit blog
  const handleEdit = async () => {
    if (!formData.title || !formData.author || !formData.content) {
      alert("Please fill all required fields.");
      return;
    }
    try {
      const data = new FormData();

      const formattedContent = processBlogContent(formData.content);

      data.append("title", formData.title);
      data.append("author", formData.author);
      data.append("content", formattedContent);
      if (formData.image instanceof File) data.append("image", formData.image);

      await API.put(`/admin/blogs/${selectedBlog._id}`, data);
      setIsEditModalOpen(false);
      setSelectedBlog(null);
      setFormData({ title: "", author: "", content: "", image: null });
      fetchBlogs();
      alert("Blog edited successfully!");
    } catch (err) {
      console.error("Error editing blog:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/admin/blogs/${selectedBlog._id}`);
      setIsDeleteConfirmOpen(false);
      setSelectedBlog(null);
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  const openEditModal = (blog) => {
    setSelectedBlog(blog);

    const plainTextContent = blog.content
      .replace(/<img[^>]*>/g, (match) => {
        const srcMatch = match.match(/src="([^"]*)"/);
        return srcMatch ? `\n${srcMatch[1]}\n` : '';
      })
      .replace(/<\/p>/g, "\n")
      .replace(/<[^>]*>/g, "")
      .trim();

    setFormData({
      title: blog.title,
      author: blog.author,
      content: plainTextContent,
      image: blog.image,
    });
    setIsEditModalOpen(true);
  };

  const createSnippet = (htmlContent, length = 100) => {
    if (!htmlContent) return "";
    const text = htmlContent.replace(/<[^>]*>?/gm, " ");
    return text.slice(0, length).trim() + "...";
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString();
  };

  return (
    <div>
      {/* Upload Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#35582a] underline">
          Manage Blogs
        </h2>
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-colors"
        >
          Upload Blog
        </button>
      </div>
      {/* Blog Cards */}
      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto"
          style={{ maxHeight: "70vh" }}
        >
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {blog.image ? (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-gray-100">
                  <span className="text-gray-400 text-lg">No Image</span>
                </div>
              )}
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">
                  {formatDate(blog.createdAt)}
                </p>
                <h3
                  className="text-lg font-semibold text-green-900 cursor-pointer hover:underline"
                  onClick={() => {
                    setSelectedBlog(blog);
                    setIsFullViewOpen(true);
                  }}
                >
                  {blog.title}
                </h3>
                <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mt-1 cursor-pointer">
                  {blog.author}
                </span>
                <p className="text-gray-700 mt-2">
                  {createSnippet(blog.content)}
                </p>
                <button
                  onClick={() => {
                    setSelectedBlog(blog);
                    setIsFullViewOpen(true);
                  }}
                  className="text-green-600 mt-2 inline-block font-semibold hover:text-green-800"
                >
                  Read More »
                </button>
                <div className="flex gap-4 mt-4 border-t pt-3">
                  <button
                    onClick={() => openEditModal(blog)}
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedBlog(blog);
                      setIsDeleteConfirmOpen(true);
                    }}
                    className="font-semibold text-red-600 hover:text-red-800 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modals */}
      {isUploadModalOpen && (
        <Modal
          title="Upload Blog"
          onClose={() => {
            setIsUploadModalOpen(false);
            setFormData({ title: "", author: "", content: "", image: null });
          }}
          onSubmit={handleUpload}
        >
          <BlogForm formData={formData} handleChange={handleChange} />
        </Modal>
      )}
      {isEditModalOpen && (
        <Modal
          title="Edit Blog"
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedBlog(null);
            setFormData({ title: "", author: "", content: "", image: null });
          }}
          onSubmit={handleEdit}
        >
          <BlogForm formData={formData} handleChange={handleChange} />
        </Modal>
      )}
      {isFullViewOpen && selectedBlog && (
        <Modal
          title={selectedBlog.title}
          onClose={() => setIsFullViewOpen(false)}
          hideSubmit
        >
          <div className="max-h-[70vh] overflow-y-auto pr-4">
            <p className="text-sm text-gray-500 mb-2">
              {formatDate(selectedBlog.createdAt)}
            </p>
            <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-4">
              {selectedBlog.author}
            </span>
            {selectedBlog.image ? (
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-60 object-cover mb-4 rounded-lg shadow-md"
              />
            ) : (
              <div className="w-full h-60 flex items-center justify-center bg-gray-100 mb-4 rounded-lg">
                <span className="text-gray-400 text-lg">No Image</span>
              </div>
            )}

            <div
              className="prose lg:prose-xl max-w-none blog-content-view"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />
          </div>
        </Modal>
      )}
      {isDeleteConfirmOpen && (
        <Modal
          title="Confirm Delete"
          onClose={() => setIsDeleteConfirmOpen(false)}
          onSubmit={handleDelete}
        >
          <p className="text-gray-800">
            Are you sure you want to delete this blog?
          </p>
        </Modal>
      )}
    </div>
  );
}


// Reusable Modal Component
function Modal({ title, children, onClose, onSubmit, hideSubmit }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 sm:p-8 w-full max-w-2xl shadow-2xl m-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
        <div>{children}</div>
        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          {!hideSubmit && (
            <button
              onClick={onSubmit}
              className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Reusable Blog Form Component
function BlogForm({ formData, handleChange }) {
  const removeImage = () => {
    handleChange({ target: { name: "image", value: null, files: null } });
  };

  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="Enter blog title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-black"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Author
        </label>
        <input
          type="text"
          name="author"
          placeholder="Author's name"
          value={formData.author}
          onChange={handleChange}
          className="w-full border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-black"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          name="content"
          placeholder="Write your blog content here..."
          value={formData.content}
          onChange={handleChange}
          rows="8"
          className="w-full border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-black"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Blog Image
        </label>
        {formData.image ? (
          <div className="flex items-center gap-3 mt-2">
            <p className="text-sm text-gray-700 bg-green-100 px-3 py-1 rounded-full">
              {typeof formData.image === "string"
                ? formData.image.split("/").pop()
                : formData.image.name}
            </p>
            <button
              type="button"
              onClick={removeImage}
              className="text-red-500 font-bold hover:text-red-700 text-xl"
              title="Remove image"
            >
              &times;
            </button>
          </div>
        ) : (
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
          />
        )}
      </div>
    </form>
  );
}