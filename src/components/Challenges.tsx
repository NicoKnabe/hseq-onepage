"use client";

import { motion } from "framer-motion";
import { CHALLENGES_DATA } from "@/lib/data";
import { AlertCircle } from "lucide-react";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export function Challenges() {
    return (
        <section className="py-24 bg-gray-900 border-b border-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        {CHALLENGES_DATA.sectionTitle}
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CHALLENGES_DATA.challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors duration-300 border border-gray-600 group-hover:border-cyan-500/30">
                                <AlertCircle className="w-6 h-6 text-gray-300 group-hover:text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {challenge.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {challenge.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
