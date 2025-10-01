import React, { useState, useEffect } from "react";
import API from "../../../api/axios";

export default function ArticleManage() {
  const [articles, setArticle] = useState([]);
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

  const [selectedArticle, setSelectedArticle] = useState(null);

  // Fetch all blogs (user route)
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await API.get("/blogs");
      setArticle(res.data.data || []);
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
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Upload blog
  const handleUpload = async () => {
    if (!formData.title || !formData.author || !formData.content) {
      alert("Please fill all required fields.");
      return;
    }
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("author", formData.author);
      data.append("content", formData.content);
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
      data.append("title", formData.title);
      data.append("author", formData.author);
      data.append("content", formData.content);
      if (formData.image instanceof File) data.append("image", formData.image);

      await API.put(`/admin/article/${selectedArticle._id}`, data);
      setIsEditModalOpen(false);
      setSelectedArticle(null);
      setFormData({ title: "", author: "", content: "", image: null });
      fetchArticle();
      alert("Article edited successfully!");
    } catch (err) {
      console.error("Error editing Article:", err);
    }
  };

  // Delete article
  const handleDelete = async () => {
    try {
      await API.delete(`/admin/article/${selectedBlog._id}`);
      setIsDeleteConfirmOpen(false);
      setSelectedArticle(null);
      fetchArticle();
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  // Open edit modal with article data
  const openEditModal = (blog) => {
    setSelectedArticle(blog);
    setFormData({
      title: article.title,
      author: article.author,
      content: article.content,
      image: article.image,
    });
    setIsEditModalOpen(true);
  };

  // Card date format
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString();
  };

  return (
    <div>
      {/* Upload Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#35582a] underline">
          Manage Articles
        </h2>
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Upload Article
        </button>
      </div>
      {/* Blog Cards */}

      {loading ? (
        <p>Loading Article...</p>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto "
          style={{ maxHeight: "70vh" }}
        >
          {articles.map((article) => (
            <div
              key={article._id}
              className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
            >
              {article.image ? (
                <img
                  src={API.defaults.baseURL + article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-gray-100">
                  <span className="text-gray-400 text-lg">No Image</span>
                </div>
              )}
              <div className="p-4">
                {/* ...existing card content... */}
                <p className="text-sm text-gray-500 mb-1">
                  {formatDate(article.createdAt)}
                </p>
                <h3
                  className="text-lg font-semibold text-green-900 cursor-pointer hover:underline"
                  onClick={() => {
                    setSelectedArticle(article);
                    setIsFullViewOpen(true);
                  }}
                >
                  {article.title}
                </h3>
                <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mt-1 cursor-pointer">
                  {article.author}
                </span>
                <p className="text-gray-700 mt-2">
                  {article.content.slice(0, 100)}...
                </p>
                <button
                  onClick={() => {
                    setSelectedArticle(article);
                    setIsFullViewOpen(true);
                  }}
                  className="text-green-600 mt-2 inline-block"
                >
                  Read More »
                </button>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => openEditModal(blog)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedArticle(article);
                      setIsDeleteConfirmOpen(true);
                    }}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <Modal
          title="Upload Article"
          onClose={() => {
            setIsUploadModalOpen(false);
            setFormData({ title: "", author: "", content: "", image: null });
          }}
          onSubmit={handleUpload}
        >
          <ArticleForm formData={formData} handleChange={handleChange} />
        </Modal>
      )}
      {/* Edit Modal */}
      {isEditModalOpen && (
        <Modal
          title="Edit Article"
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedArticle(null);
            setFormData({ title: "", author: "", content: "", image: null });
          }}
          onSubmit={handleEdit}
        >
          <ArticleForm formData={formData} handleChange={handleChange} />
        </Modal>
      )}
      {/* Full View Modal */}
      {isFullViewOpen && selectedBlog && (
        <Modal
          title={selectedArticle.title}
          onClose={() => setIsFullViewOpen(false)}
          hideSubmit
        >
          <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
            <p className="text-sm text-gray-500 mb-2">
              {formatDate(selectedArticle.createdAt)}
            </p>
            <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-4">
              {selectedArticle.author}
            </span>
            {selectedArticle.image ? (
              <img
                src={API.defaults.baseURL + selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-60 object-cover mb-4"
              />
            ) : (
              <div className="w-full h-60 flex items-center justify-center bg-gray-100 mb-4">
                <span className="text-gray-400 text-lg">No Image</span>
              </div>
            )}
            <p className="whitespace-pre-line text-black">
              {selectedArticle.content}
            </p>
          </div>
        </Modal>
      )}
      {/* Delete Confirmation */}
      {isDeleteConfirmOpen && (
        <Modal
          title="Confirm Delete"
          onClose={() => setIsDeleteConfirmOpen(false)}
          onSubmit={handleDelete}
        >
          <p className="text-black">
            Are you sure you want to delete this Article?
          </p>
        </Modal>
      )}
    </div>
  );
}

//Modal Component
function Modal({ title, children, onClose, onSubmit, hideSubmit }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-3xl shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-black underline">{title}</h2>
        {children}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          {!hideSubmit && (
            <button
              onClick={onSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Blog Form Component
function ArticleForm({ formData, handleChange }) {
  const removeImage = () => {
    handleChange({ target: { name: "image", files: [] } });
  };

  return (
    <form className="space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded text-black"
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded text-black"
      />
      <textarea
        name="content"
        placeholder="Content"
        value={formData.content}
        onChange={handleChange}
        rows="5"
        className="w-full border px-3 py-2 rounded text-black"
      ></textarea>

      {/* File upload */}
      <div className="flex items-center gap-3">
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full"
        />
        {formData.image && (
          <div className="flex items-center gap-2 bg-gray-400 px-2 py-1 rounded">
            <span className="text-sm truncate max-w-[150px]">
              {formData.image.name || formData.image}
            </span>
            <button
              type="button"
              onClick={removeImage}
              className="text-gray-500 font-bold hover:text-red-700"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
