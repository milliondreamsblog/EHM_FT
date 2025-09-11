import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import API from "../../api/axios"; // Adjust this import path if needed
import { ArrowLeft, Image as ImageIcon } from "lucide-react";

/**
 * A reusable page for displaying a single content item 
 * @param {string} basePath
 * @param {string} contentName 
 */
const SingleContentPage = ({ basePath, contentName }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                setLoading(true);
                const response = await API.get(`/${basePath}/${id}`);
                if (response.data.success) {
                    setItem(response.data.data);
                } else {
                    throw new Error(response.data.message || `${contentName} not found`);
                }
            } catch (err) {
                setError(err.message || `Could not find the ${contentName.toLowerCase()}.`);
            } finally {
                setLoading(false);
            }
        };
        fetchItem();
    }, [id, basePath, contentName]);

    if (loading) return <div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>;
    if (error) return <div className="min-h-screen flex items-center justify-center"><p className="text-red-500 font-semibold">{error}</p></div>;
    if (!item) return null;

    const formattedDate = new Date(item.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    const imageUrl = item.image ? item.image : null;

    return (
        <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-24 pb-20 min-h-screen">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <article>
                    <div className="text-center mb-8">
                        <Link
                            to={`/${basePath}/author/${encodeURIComponent(item.author)}`}
                            className="inline-block bg-green-100 text-green-800 font-semibold px-4 py-1 rounded-full text-sm hover:bg-green-200 transition-colors mb-4"
                        >
                            {item.author}
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">{item.title}</h1>
                        <p className="mt-4 text-md text-gray-500">{formattedDate}</p>
                    </div>
                    <div className="w-full aspect-video rounded-2xl shadow-xl my-8 bg-gray-100 flex items-center justify-center overflow-hidden">
                        {imageUrl && !imageError ? (
                            <img src={imageUrl} alt={item.title} className="w-full h-full object-cover" onError={() => setImageError(true)} />
                        ) : (
                            <div className="flex flex-col items-center text-gray-300">
                                <ImageIcon size={64} />
                                <p className="mt-2 font-semibold text-gray-400">Image Not Available</p>
                            </div>
                        )}
                    </div>
                    <div
                        className="prose prose-lg lg:prose-xl max-w-none mx-auto mt-8 text-gray-700"
                        dangerouslySetInnerHTML={{ __html: item.content }}
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
        </section>
    );
};

export default SingleContentPage;