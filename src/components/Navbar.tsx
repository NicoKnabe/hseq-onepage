"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Servicios", href: "#servicios" },
    { label: "Planes", href: "#planes" },
    { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gold/10"
        >
            <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group cursor-pointer">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black-card border border-gold/30 group-hover:border-gold/60 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                        <span className="font-extrabold text-xl sm:text-2xl text-gold tracking-tighter">NK</span>
                    </div>
                    <span className="hidden sm:block font-bold text-white tracking-wide text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                        NICOLÁS KNABE
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-white-dim hover:text-gold transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        className="text-sm font-semibold px-5 py-2.5 rounded-md bg-gold text-black hover:bg-gold-light transition-colors"
                    >
                        Agendar Reunión
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-white hover:text-gold transition-colors"
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-t border-gold/10"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-medium text-white-dim hover:text-gold transition-colors py-2 border-b border-white/5 last:border-0"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contacto"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 text-center text-sm font-semibold px-5 py-3 rounded-md bg-gold text-black hover:bg-gold-light transition-colors"
                            >
                                Agendar Reunión
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
