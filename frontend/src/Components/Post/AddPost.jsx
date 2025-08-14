import React, { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    author: '',
    content: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    
    setIsLoading(true);
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('title', blogData.title);
    formData.append('author', blogData.author);
    formData.append('content', blogData.content);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.post('/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.data.success) {
        setSuccess('Blog published successfully!');
        // Reset form
        setBlogData({
          title: '',
          author: '',
          content: ''
        });
        setImageFile(null);
        // Clear file input
        if (e.target.elements.image) {
          e.target.elements.image.value = '';
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to publish blog');
      console.error('Blog creation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Blog Post</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Title *
          </label>
          <input
            type="text"
            name="title"
            value={blogData.title}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Author *
          </label>
          <input
            type="text"
            name="author"
            value={blogData.author}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Content *
          </label>
          <textarea
            name="content"
            value={blogData.content}
            onChange={handleInputChange}
            required
            rows={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Featured Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          <p className="mt-1 text-sm text-gray-500">
            Upload a high-quality image (optional)
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`px-4 py-2 rounded-md text-white ${isLoading ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isLoading ? 'Publishing...' : 'Publish Blog'}
        </button>
      </form>
    </div>
  );
};

export default AddPost;