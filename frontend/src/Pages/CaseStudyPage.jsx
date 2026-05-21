import React, { useState, useEffect } from "react";
import API from "../api/axios";
import { motion } from "framer-motion";
import ContentCard from "../Common/Content/ContentCard";
import SectionHeading from "../Common/SectionHeading";
import { ArrowRight, User, Calendar, Search, FileText, Wrench, BarChart2, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

// ── Reusable case-study card (Image 1 Style) ────────────────────────────────
const StaticCaseCard = ({
    image, imageAlt, date, title, snippet, linkTo, delay = 0
}) => {
    return (
        <div
            className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="relative h-48 overflow-hidden bg-gray-100">
                <Link to={linkTo} className="block w-full h-full">
                    {image ? (
                        <img
                            loading="lazy"
                            src={image}
                            alt={imageAlt}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <ImageIcon className="w-12 h-12 text-gray-300" />
                        </div>
                    )}
                </Link>
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-gray-50 to-gray-200 text-gray-800 font-semibold px-3 py-1.5 rounded-full text-xs transition-all duration-300 flex items-center gap-1.5 shadow-sm">
                    <User className="w-3.5 h-3.5" />
                    <span>EHM</span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <span className="text-sm text-gray-500 mb-2">{date}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex-grow uppercase">
                    <Link
                        to={linkTo}
                        className="hover:text-green-600 transition-colors duration-300"
                    >
                        {title}
                    </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    {snippet}
                </p>
                <div className="mt-auto">
                    <Link
                        to={linkTo}
                        className="font-semibold text-green-600 inline-flex items-center gap-2 group-hover:text-green-800 transition-colors duration-300"
                    >
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

// ── Page ───────────────────────────────────────────────────────────────────
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

            {/* ── Page heading ─────────────────────────────────────────── */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <SectionHeading>Case Studies</SectionHeading>
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

            {/* ── Cards grid ───────────────────────────────────────────── */}
            <div className="w-full max-w-6xl mx-auto relative z-10 mt-16 px-4">
                {loading && <div className="text-center text-lg text-gray-700 mb-8">Loading case studies...</div>}

                <div className="flex justify-center flex-wrap gap-8">

                    {/* ── Dynamic Database Case Studies ── */}
                    {caseStudies.length > 0 ? caseStudies.map((study, index) => {
                        const formattedDate = new Date(study.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        });
                        
                        const textOnly = study.content ? study.content.replace(/<[^>]*>?/gm, "") : "";
                        const snippet = textOnly.split(" ").slice(0, 15).join(" ") + "...";

                        // Keep custom route for Antia Talab if it exists
                        const link = study.title.toLowerCase().includes("antia talab")
                            ? "/waterbody-restoration"
                            : `/casestudies/${study._id}`;

                        return (
                            <div key={study._id} className="w-full sm:w-80 md:w-[380px]">
                                <StaticCaseCard
                                    delay={index * 100}
                                    date={formattedDate}
                                    title={study.title}
                                    snippet={snippet}
                                    image={study.image}
                                    imageAlt={study.title}
                                    linkTo={link}
                                />
                            </div>
                        );
                    }) : (
                        <p className="col-span-full text-center text-lg text-gray-600">No case studies available.</p>
                    )}


                </div>
            </div>
        </section>
    );
};

export default CaseStudyPage;