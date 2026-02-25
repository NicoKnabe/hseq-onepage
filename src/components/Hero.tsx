"use client";

import { motion } from "framer-motion";
import { HERO_DATA } from "@/lib/data";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-black pt-40 pb-20 lg:pt-56 lg:pb-32">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.04),transparent_50%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 inline-block"
                    >
                        <span className="text-gold tracking-widest uppercase text-sm font-bold border border-gold/30 px-4 py-1.5 rounded-full bg-gold/5">
                            Consultoría QHSE Especializada
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8"
                    >
                        {HERO_DATA.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="text-lg md:text-xl text-white-dim mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        {HERO_DATA.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href={HERO_DATA.primaryButton.href}
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-black bg-gradient-to-r from-gold-dark to-gold rounded-lg hover:from-gold hover:to-gold-light transition-all duration-300 shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:-translate-y-1"
                        >
                            {HERO_DATA.primaryButton.text}
                            <ArrowRight className="ml-2 w-5 h-5" aria-label="Flecha derecha" />
                        </a>

                        <a
                            href={HERO_DATA.secondaryButton.href}
                            download
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-gold border border-gold/30 rounded-lg hover:bg-gold/10 transition-colors duration-300"
                        >
                            <Download className="mr-2 w-5 h-5" aria-label="Icono de descarga" />
                            {HERO_DATA.secondaryButton.text}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
