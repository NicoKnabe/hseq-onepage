"use client";

import { motion } from "framer-motion";

export function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gold/10"
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-black-card border border-gold/30 group-hover:border-gold/60 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                        <span className="font-extrabold text-2xl text-gold tracking-tighter">NK</span>
                    </div>
                    <span className="hidden sm:block font-bold text-white tracking-wide text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                        NICOLÁS KNABE
                    </span>
                </div>

                <div className="flex items-center">
                    <a
                        href="#contacto"
                        className="text-sm font-semibold px-5 py-2.5 rounded-md bg-gold text-black hover:bg-gold-light transition-colors"
                    >
                        Contacto
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
