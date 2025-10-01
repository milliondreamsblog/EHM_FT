import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";
import ContentCard from "./ContentCard";
import { motion } from "framer-motion";

/**
 * A reusable page for displaying all content from a single author.
 * @param {string} basePath 
 * @param {string} contentNamePlural 
 */
const AuthorContentPage = ({ basePath, contentNamePlural }) => {
    const { authorName } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAuthorItems = async () => {
            try {
                setLoading(true);
                const response = await API.get(`/${basePath}/author/${authorName}`);
                if (response.data.success) {
                    setItems(response.data.data);
                } else {
                    throw new Error(response.data.message);
                }
            } catch (err) {
                setError(err.message || `Failed to load author's ${contentNamePlural.toLowerCase()}.`);
            } finally {
                setLoading(false);
            }
        };
        fetchAuthorItems();
    }, [authorName, basePath, contentNamePlural]);

    return (

        <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-24 pb-12 min-h-screen">
            <div className="w-full max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 py-10"
                >
                    <p className="text-lg text-emerald-600 font-semibold">{contentNamePlural} by</p>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm">
                        {decodeURIComponent(authorName)}
                    </h1>
                </motion.div>
                <div>
                    {loading && <p className="text-center text-lg">Loading...</p>}
                    {error && <p className="text-center text-red-500 text-lg font-semibold">{error}</p>}
                    {!loading && !error && (
                        <div className="flex justify-center flex-wrap gap-8">
                            {items.length > 0 ? (
                                items.map((item, index) => (
                                    <div key={item._id} className="w-full sm:w-80 md:w-96 lg:w-[calc(33.33%-2rem)]">
                                        <ContentCard item={item} basePath={basePath} delay={index * 100} />
                                    </div>
                                ))
                            ) : (
                                <p className="col-span-full text-center text-lg text-gray-600">
                                    No content found for this author.
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AuthorContentPage;