"use client";

import { motion } from "framer-motion";
import { HERO_DATA } from "@/lib/data";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gray-900 pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,116,144,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.05),transparent_50%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8"
                    >
                        {HERO_DATA.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        {HERO_DATA.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href={HERO_DATA.primaryButton.href}
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-gray-900 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors duration-200"
                        >
                            {HERO_DATA.primaryButton.text}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>

                        <a
                            href={HERO_DATA.secondaryButton.href}
                            download
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                        >
                            <Download className="mr-2 w-5 h-5" />
                            {HERO_DATA.secondaryButton.text}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
