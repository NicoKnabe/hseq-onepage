"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_DATA } from "@/lib/data";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 300]);

    return (
        <section className="relative overflow-hidden bg-black pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-56 lg:pb-32">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 origin-top"
            >
                <Image
                    src="/hero-bg.jpeg"
                    alt="Paisaje de la Cordillera de los Andes"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            {/* Dark Overlay for AAA Contrast */}
            <div className="absolute inset-0 z-0 bg-black/80" />

            {/* Background Glow */}
            <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_50%)]" />
            <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.04),transparent_50%)]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 inline-block"
                    >
                        <span className="text-gold tracking-widest uppercase text-sm font-bold border border-gold/30 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                            Consultoría QHSE Especializada
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8 drop-shadow-lg"
                    >
                        {HERO_DATA.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="text-lg md:text-xl text-white-dim mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                    >
                        {HERO_DATA.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.a
                            href={HERO_DATA.primaryButton.href}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-black bg-gradient-to-r from-gold-dark to-gold rounded-lg shadow-[0_8px_25px_rgba(212,175,55,0.4)] transition-colors group"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 flex items-center">
                                {HERO_DATA.primaryButton.text}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-label="Flecha derecha" />
                            </span>
                        </motion.a>

                        <motion.a
                            href={HERO_DATA.secondaryButton.href}
                            download
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(212,175,55,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-gold border border-gold/30 rounded-lg transition-colors duration-300"
                        >
                            <Download className="mr-2 w-5 h-5" aria-label="Icono de descarga" />
                            {HERO_DATA.secondaryButton.text}
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient Transition to next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
}
