import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../api/axios';
import { ArrowRight } from 'lucide-react';

const LatestBlogCard = ({ item }) => {
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const createSnippet = (content = '', length = 100) => {
        const plainText = content.replace(/<[^>]*>/g, '');
        if (plainText.length <= length) return plainText;
        return plainText.substring(0, length) + '...';
    };

    if (!item || !item._id) {
        return null;
    }


    const imageUrl = item.image;

    return (
        <Link to={`/blogs/${item._id}`} className="flex flex-col bg-white rounded-xl overflow-hidden group w-full max-w-sm transform transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-2xl">
            <div className="w-full h-48 overflow-hidden">
                <img
                    src={imageUrl || 'https://placehold.co/600x400/a0aec0/ffffff?text=Blog+Image'}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/a0aec0/ffffff?text=Image+Not+Found' }}
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {item.author || 'Insights'}
                    </span>
                    <p className="text-sm text-gray-500">{formatDate(item.createdAt)}</p>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 flex-grow">
                    {createSnippet(item.content)}
                </p>
                <div className="mt-auto">
                    <span className="font-semibold text-emerald-600 inline-flex items-center text-sm">
                        Read more
                        <ArrowRight className="ml-1.5 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                </div>
            </div>
        </Link>
    );
};


const LatestBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLatestBlogs = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await API.get('/blogs');
                if (response.data.success) {
                    const sortedBlogs = response.data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    setBlogs(sortedBlogs.slice(0, 2));
                } else {
                    throw new Error(response.data.message || "Failed to fetch blogs");
                }
            } catch (err) {
                setError("Failed to load blogs. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchLatestBlogs();
    }, []);

    return (
        <section className="bg-gray-50 py-16 sm-py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start lg:items-center">
                    <div className="w-full lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                            Latest Blogs
                        </h2>
                        <Link
                            to="/resources/blogs"
                            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 text-white font-semibold rounded-md shadow-md hover:bg-emerald-600 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Read More Blogs
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                    <div className="w-full lg:w-2/3">
                        {loading && <div className="text-center text-gray-700">Loading latest blogs...</div>}
                        {error && <div className="text-center text-red-500 font-semibold">{error}</div>}
                        {!loading && !error && (
                            <div className="flex flex-col sm:flex-row justify-center gap-8">
                                {blogs.length > 0 ? (
                                    blogs.map((blog) => (
                                        <LatestBlogCard key={blog._id} item={blog} />
                                    ))
                                ) : (
                                    <p className="text-center text-gray-600">No recent blogs found.</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;