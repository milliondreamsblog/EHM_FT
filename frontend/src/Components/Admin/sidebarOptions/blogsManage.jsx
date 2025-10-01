import React, { useState, useEffect } from "react";
import API from "../../../api/axios";

//feedback Banner component
function FeedbackBanner({ type, message, onClose }) {
  useEffect(() => {

    if (type === 'success' || type === 'error') {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [type, onClose]);

  const baseClasses = "p-4 mb-4 rounded-lg flex items-center gap-3";
  const styles = {
    loading: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
  };

  const icons = {
    loading: <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>,
    success: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>,
    error: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>,
  };

  return (
    <div className={`${baseClasses} ${styles[type]}`}>
      {icons[type]}
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-auto -mx-1.5 -my-1.5 p-1.5 rounded-lg hover:bg-opacity-20 hover:bg-current">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>
    </div>
  );
}


export default function BlogsManage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState({ show: false, type: "", message: "" });

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isFullViewOpen, setIsFullViewOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  const [formData, setFormData] = useState({ title: "", author: "", content: "", image: null });
  const [selectedBlog, setSelectedBlog] = useState(null);

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

  useEffect(() => { fetchBlogs(); }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const processContent = (text) => {
    if (!text) return "";
    const imageUrlRegex = /(https?:\/\/[^\s]+?\.(?:jpg|jpeg|png|gif|svg|webp))/gi;
    return text.split('\n').map(line => {
      if (line.trim().match(imageUrlRegex)?.[0] === line.trim()) {
        return `<img src="${line.trim()}" alt="Blog content image" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1em 0;" />`;
      } else if (line.trim() !== "") {
        return `<p>${line.trim()}</p>`;
      }
      return '';
    }).join('');
  };

  const handleUpload = async () => {
    if (!formData.title || !formData.author || !formData.content) {
      alert("Please fill all required fields.");
      return;
    }
    setIsUploadModalOpen(false);
    setFeedback({ show: true, type: 'loading', message: 'Uploading blog...' });
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("author", formData.author);
      data.append("content", processContent(formData.content));
      if (formData.image) data.append("image", formData.image);

      await API.post("/admin/blogs", data);
      setFeedback({ show: true, type: 'success', message: 'Blog uploaded successfully!' });
      fetchBlogs();
    } catch (err) {
      setFeedback({ show: true, type: 'error', message: 'Upload failed. Please try again.' });
    } finally {
      setFormData({ title: "", author: "", content: "", image: null });
    }
  };

  const handleEdit = async () => {
    if (!formData.title || !formData.author || !formData.content) {
      alert("Please fill all required fields.");
      return;
    }
    setIsEditModalOpen(false);
    setFeedback({ show: true, type: 'loading', message: 'Updating blog...' });
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("author", formData.author);
      data.append("content", processContent(formData.content));
      if (formData.image instanceof File) data.append("image", formData.image);

      await API.put(`/admin/blogs/${selectedBlog._id}`, data);
      setFeedback({ show: true, type: 'success', message: 'Blog updated successfully!' });
      fetchBlogs();
    } catch (err) {
      setFeedback({ show: true, type: 'error', message: 'Update failed. Please try again.' });
    } finally {
      setSelectedBlog(null);
      setFormData({ title: "", author: "", content: "", image: null });
    }
  };

  const handleDelete = async () => {
    setIsDeleteConfirmOpen(false);
    setFeedback({ show: true, type: 'loading', message: 'Deleting blog...' });
    try {
      await API.delete(`/admin/blogs/${selectedBlog._id}`);
      setFeedback({ show: true, type: 'success', message: 'Blog deleted successfully!' });
      fetchBlogs();
    } catch (err) {
      setFeedback({ show: true, type: 'error', message: 'Deletion failed. Please try again.' });
    } finally {
      setSelectedBlog(null);
    }
  };

  const openEditModal = (blog) => {
    setSelectedBlog(blog);
    const plainTextContent = blog.content
      .replace(/<img[^>]*>/g, match => `\n${match.match(/src="([^"]*)"/)?.[1] || ''}\n`)
      .replace(/<\/p>/g, "\n")
      .replace(/<[^>]*>/g, "")
      .trim();
    setFormData({ title: blog.title, author: blog.author, content: plainTextContent, image: blog.image });
    setIsEditModalOpen(true);
  };

  const createSnippet = (html, len = 100) => html?.replace(/<[^>]*>?/gm, " ").slice(0, len).trim() + "...";
  const formatDate = (dateStr) => new Date(dateStr).toLocaleString();

  return (
    <div>
      {/*  Feedback Banner at the top  */}
      {feedback.show && <FeedbackBanner type={feedback.type} message={feedback.message} onClose={() => setFeedback({ show: false, type: '', message: '' })} />}

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#35582a] underline">Manage Blogs</h2>
        <button onClick={() => setIsUploadModalOpen(true)} className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-colors">
          Upload Blog
        </button>
      </div>

      {loading ? (<p>Loading blogs...</p>) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto" style={{ maxHeight: "70vh" }}>
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              {blog.image ? (<img src={blog.image} alt={blog.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform" />) : (<div className="w-full h-40 flex items-center justify-center bg-gray-100"><span className="text-gray-400 text-lg">No Image</span></div>)}
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{formatDate(blog.createdAt)}</p>
                <h3 className="text-lg font-semibold text-green-900 cursor-pointer hover:underline" onClick={() => { setSelectedBlog(blog); setIsFullViewOpen(true); }}>{blog.title}</h3>
                <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mt-1">{blog.author}</span>
                <p className="text-gray-700 mt-2">{createSnippet(blog.content)}</p>
                <div className="flex gap-4 mt-4 border-t pt-3">
                  <button onClick={() => openEditModal(blog)} className="font-semibold text-blue-600 hover:text-blue-800">Edit</button>
                  <button onClick={() => { setSelectedBlog(blog); setIsDeleteConfirmOpen(true); }} className="font-semibold text-red-600 hover:text-red-800">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modals */}
      {isUploadModalOpen && (<Modal title="Upload Blog" onClose={() => setIsUploadModalOpen(false)} onSubmit={handleUpload}><ContentForm formData={formData} handleChange={handleChange} contentType="Blog" /></Modal>)}
      {isEditModalOpen && (<Modal title="Edit Blog" onClose={() => setIsEditModalOpen(false)} onSubmit={handleEdit}><ContentForm formData={formData} handleChange={handleChange} contentType="Blog" /></Modal>)}
      {isFullViewOpen && selectedBlog && (
        <Modal title={selectedBlog.title} onClose={() => setIsFullViewOpen(false)} hideSubmit>
          <div className="max-h-[70vh] overflow-y-auto pr-4">
            <p className="text-sm text-gray-500 mb-2">{formatDate(selectedBlog.createdAt)}</p>
            <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-4">{selectedBlog.author}</span>
            {selectedBlog.image && <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-60 object-cover mb-4 rounded-lg shadow-md" />}
            <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
          </div>
        </Modal>
      )}
      {isDeleteConfirmOpen && (<Modal title="Confirm Delete" onClose={() => setIsDeleteConfirmOpen(false)} onSubmit={handleDelete}><p>Are you sure you want to delete this blog?</p></Modal>)}
    </div>
  );
}

function Modal({ title, children, onClose, onSubmit, hideSubmit }) {
  return (<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"><div className="bg-white rounded-xl p-6 sm:p-8 w-full max-w-2xl shadow-2xl m-4"><h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2><div>{children}</div><div className="mt-8 flex justify-end gap-4"><button onClick={onClose} className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300">Cancel</button>{!hideSubmit && (<button onClick={onSubmit} className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">Confirm</button>)}</div></div></div>);
}

function ContentForm({ formData, handleChange, contentType }) {
  const removeImage = () => handleChange({ target: { name: "image", value: null, files: null } });
  return (
    <form className="space-y-6">
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Title</label><input type="text" name="title" placeholder={`Enter ${contentType} title`} value={formData.title} onChange={handleChange} className="text-black bg-gray-200 w-full border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Author</label><input type="text" name="author" placeholder="Author's name" value={formData.author} onChange={handleChange} className="text-black bg-gray-200 w-full border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-green-500" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">Content</label><textarea name="content" placeholder={`Write your ${contentType} content...`} value={formData.content} onChange={handleChange} rows="8" className="text-black bg-gray-200 w-full border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-green-500"></textarea></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1">{contentType} Image</label>{formData.image ? (<div className="flex items-center gap-3 mt-2"><p className="text-sm text-gray-700 bg-green-100 px-3 py-1 rounded-full">{typeof formData.image === "string" ? formData.image.split("/").pop() : formData.image.name}</p><button type="button" onClick={removeImage} className="text-red-500 font-bold hover:text-red-700 text-xl" title="Remove image">&times;</button></div>) : (<input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200" />)}</div>
    </form>
  );
}