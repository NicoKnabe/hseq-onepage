"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOLUTIONS_DATA } from "@/lib/data";
import { CheckCircle2, FileText, Shield, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = {
    acreditacion: FileText,
    sistemas: Globe,
    blindaje: Shield,
};

export function Solutions() {
    const [activeTab, setActiveTab] = useState(SOLUTIONS_DATA.categories[0].id);

    return (
        <section className="py-24 bg-[#0B1121] relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/20 blur-[120px] rounded-full point-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        {SOLUTIONS_DATA.sectionTitle}
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
                    {/* Tabs Menu */}
                    <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 lg:w-1/3 shrink-0 scrollbar-hide">
                        {SOLUTIONS_DATA.categories.map((category) => {
                            const Icon = ICONS[category.id as keyof typeof ICONS] || CheckCircle2;
                            const isActive = activeTab === category.id;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={cn(
                                        "flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all duration-200 whitespace-nowrap lg:whitespace-normal border",
                                        isActive
                                            ? "bg-gray-800 border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                                            : "bg-transparent border-transparent hover:bg-gray-800/50 text-gray-400 hover:text-gray-200"
                                    )}
                                >
                                    <Icon className={cn("w-6 h-6 shrink-0", isActive ? "text-cyan-400" : "text-gray-500")} />
                                    <span className={isActive ? "text-white font-semibold" : "font-medium"}>
                                        {category.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content */}
                    <div className="lg:w-2/3 bg-gray-800/50 border border-gray-700/50 rounded-3xl p-8 min-h-[300px] flex items-center backdrop-blur-sm">
                        <AnimatePresence mode="wait">
                            {SOLUTIONS_DATA.categories.map(
                                (category) =>
                                    activeTab === category.id && (
                                        <motion.div
                                            key={category.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-full"
                                        >
                                            <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-700 pb-4">
                                                {category.title}
                                            </h3>
                                            <ul className="space-y-4">
                                                {category.points.map((point, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.1 + 0.2 }}
                                                        className="flex items-center text-gray-300 text-lg"
                                                    >
                                                        <span className="w-2 h-2 rounded-full bg-cyan-400 mr-4 shrink-0" />
                                                        {point}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
