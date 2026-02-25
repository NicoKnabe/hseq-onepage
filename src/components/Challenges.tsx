"use client";

import { motion } from "framer-motion";
import { CHALLENGES_DATA } from "@/lib/data";
import { AlertCircle } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Challenges() {
    return (
        <section className="py-24 bg-black border-b border-gold/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        {CHALLENGES_DATA.sectionTitle}
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-gold-dark to-gold mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {CHALLENGES_DATA.challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-black-card border border-gold/10 rounded-2xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl hover:shadow-[rgba(212,175,55,0.2)] group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="w-14 h-14 bg-gold/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/15 group-hover:text-gold transition-colors duration-300 border border-gold/10 group-hover:border-gold/30">
                                <AlertCircle className="w-7 h-7 text-white-dim group-hover:text-gold transition-colors duration-300" aria-label="Icono alerta de desafío" />
                            </div>
                            <h3 className="text-xl font-bold text-gold mb-4">
                                {challenge.title}
                            </h3>
                            <p className="text-white-dim leading-relaxed text-base">
                                {challenge.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
