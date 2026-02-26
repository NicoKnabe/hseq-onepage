"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOLUTIONS_DATA } from "@/lib/data";
import { CheckCircle2, Shield, FileText, Globe } from "lucide-react";

export function Solutions() {
    const [activeTab, setActiveTab] = useState(0);
    const solutionIcons = [FileText, Globe, Shield];

    return (
        <section className="py-16 md:py-24 bg-black relative border-b border-gold/10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03),transparent_70%)]" />
            {/* Background decoration */}
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        {SOLUTIONS_DATA.sectionTitle}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-white-dim max-w-2xl mx-auto"
                    >
                        {SOLUTIONS_DATA.sectionSubtitle}
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Tabs Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 space-y-3"
                    >
                        {SOLUTIONS_DATA.solutions.map((solution, index) => {
                            const Icon = solutionIcons[index % 3];
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 text-left cursor-pointer border ${activeTab === index
                                        ? "bg-black-card border-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                                        : "bg-transparent border-transparent hover:bg-black-card/50 hover:border-gold/20"
                                        }`}
                                >
                                    <div
                                        className={`p-3 rounded-lg mr-4 transition-colors ${activeTab === index
                                            ? "bg-gold/10 text-gold"
                                            : "bg-black-card text-gray"
                                            }`}
                                    >
                                        <Icon className="w-6 h-6" aria-label={`Icono de ${solution.title}`} />
                                    </div>
                                    <span
                                        className={`font-semibold text-lg ${activeTab === index ? "text-gold" : "text-white-dim"
                                            }`}
                                    >
                                        {solution.title}
                                    </span>
                                </button>
                            );
                        })}
                    </motion.div>

                    {/* Active Tab Content */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-8 bg-black-card border border-gold/10 rounded-2xl p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[100px]" />
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 pr-12 relative z-10">
                            {SOLUTIONS_DATA.solutions[activeTab].title}
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-4 relative z-10">
                            {SOLUTIONS_DATA.solutions[activeTab].points.map((point, idx) => (
                                <li key={idx} className="flex items-start text-white-dim">
                                    <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 shrink-0" aria-label="Icono check de solución" />
                                    <span className="leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
