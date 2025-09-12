import React, { useState, useEffect } from "react";
import API from "../api/axios";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ContentCard from "../Common/Content/ContentCard";

const CaseStudyPage = () => {
    const [caseStudies, setCaseStudies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                setLoading(true);
                const response = await API.get('/casestudies');
                if (response.data.success) {
                    setCaseStudies(response.data.data);
                } else {
                    throw new Error(response.data.message || "Failed to fetch case studies");
                }
            } catch (err) {
                setError("Failed to load case studies. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchCaseStudies();
    }, []);

    return (
        <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-24 pb-12 min-h-screen">

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >

                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Sparkles className="text-emerald-500 animate-pulse" size={32} />
                            <motion.h1
                                animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="p-2 text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-sm"
                            >
                                Case Studies
                            </motion.h1>
                            <Sparkles className="text-teal-500 animate-pulse" size={32} />
                        </div>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mx-auto h-1 w-28 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                        />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg text-green-700 mt-8 max-w-2xl mx-auto"
                    >
                        Explore our successful projects and impactful results.
                    </motion.p>
                </div>
            </div>

            <div className="w-full max-w-6xl mx-auto relative z-10 mt-16">
                {loading && <div className="text-center text-lg text-gray-700">Loading case studies...</div>}
                {error && <div className="text-center text-red-500 font-semibold">{error}</div>}
                {!loading && !error && (
                    <div className="flex justify-center flex-wrap gap-8">
                        {caseStudies.length > 0 ? (
                            caseStudies.map((study, index) => (
                                <div key={study._id} className="w-full sm:w-80 md:w-96 lg:w-[calc(33.33%-2rem)]">
                                    <ContentCard item={study} basePath="casestudies" delay={index * 100} />
                                </div>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-lg text-gray-600">No case studies available yet.</p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default CaseStudyPage;