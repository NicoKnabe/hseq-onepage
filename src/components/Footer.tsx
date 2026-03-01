"use client";

import { motion } from "framer-motion";
import { FOOTER_DATA } from "@/lib/data";
import { MapPin, Mail, Sparkles } from "lucide-react";

// WhatsApp Custom Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
);

export function Footer() {
    return (
        <footer id="contacto" className="bg-transparent pt-16 md:pt-24 pb-12 relative overflow-hidden">
            <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-10">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-24 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-black/60 backdrop-blur-md border border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                                <span className="font-extrabold text-2xl text-gold tracking-tighter drop-shadow-sm">NK</span>
                            </div>
                            <h3 className="text-2xl font-bold tracking-wide text-white drop-shadow-md">NICOLÁS KNABE</h3>
                        </div>

                        <p className="text-white-dim mb-8 max-w-md leading-relaxed text-lg drop-shadow-md">
                            {FOOTER_DATA.description}
                        </p>

                        <div className="flex flex-col space-y-4">
                            <a
                                href={`mailto:${FOOTER_DATA.contact.email}`}
                                className="inline-flex items-center text-gold hover:text-gold-light transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center mr-4 group-hover:bg-gold/20 transition-colors border border-gold/30">
                                    <Mail className="w-5 h-5" aria-label="Icono correo electrónico" />
                                </div>
                                <span className="font-semibold text-lg drop-shadow-md">{FOOTER_DATA.contact.email}</span>
                            </a>

                            <div className="inline-flex items-center text-white-dim">
                                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center mr-4 border border-gold/20">
                                    <MapPin className="w-5 h-5 text-gray" aria-label="Icono ubicación" />
                                </div>
                                <span className="drop-shadow-md">{FOOTER_DATA.contact.location}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-black/60 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-gold/20 shadow-xl"
                    >
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center drop-shadow-sm">
                            <Sparkles className="w-5 h-5 text-gold mr-2" aria-label="Icono destellos" />
                            Inicia tu Evaluación
                        </h4>
                        <p className="text-white-dim mb-8 pb-4 border-b border-gold/20 drop-shadow-sm">
                            Contáctanos hoy para realizar un diagnóstico inicial gratuito y establecer la hoja de ruta QHSE para tu empresa.
                        </p>
                        <motion.a
                            href="https://wa.me/56950989084?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20un%20diagn%C3%B3stico%20inicial%20gratuito."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-6 flex items-center justify-center w-full py-4 bg-gradient-to-r from-gold-dark to-gold text-black font-bold rounded-lg shadow-[0_8px_20px_rgba(212,175,55,0.25)] transition-all relative overflow-hidden group"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 flex items-center">
                                <WhatsAppIcon className="w-5 h-5 mr-2" aria-label="Icono WhatsApp" />
                                Solicitar Diagnóstico
                            </span>
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="pt-8 border-t border-gold/20 flex flex-col md:flex-row items-center justify-between text-gray text-sm drop-shadow-md"
                >
                    <p>{FOOTER_DATA.copyright}</p>
                    <p className="mt-2 md:mt-0 font-medium">Consultoría QHSE Especializada</p>
                </motion.div>
            </div>
        </footer>
    );
}
