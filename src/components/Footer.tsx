"use client";

import { motion } from "framer-motion";
import { FOOTER_DATA } from "@/lib/data";
import { MapPin, Mail, Sparkles, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer id="contacto" className="bg-black pt-24 pb-12 border-t border-gold/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.05),transparent_70%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-black-card border border-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                <span className="font-extrabold text-2xl text-gold tracking-tighter">NK</span>
                            </div>
                            <h3 className="text-2xl font-bold tracking-wide text-white">NICOLÁS KNABE</h3>
                        </div>

                        <p className="text-white-dim mb-8 max-w-md leading-relaxed text-lg">
                            {FOOTER_DATA.description}
                        </p>

                        <div className="flex flex-col space-y-4">
                            <a
                                href={`mailto:${FOOTER_DATA.contact.email}`}
                                className="inline-flex items-center text-gold hover:text-gold-light transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mr-4 group-hover:bg-gold/20 transition-colors border border-gold/20">
                                    <Mail className="w-5 h-5" aria-label="Icono correo electrónico" />
                                </div>
                                <span className="font-semibold text-lg">{FOOTER_DATA.contact.email}</span>
                            </a>

                            <div className="inline-flex items-center text-white-dim">
                                <div className="w-10 h-10 rounded-full bg-black-card flex items-center justify-center mr-4 border border-gold/10">
                                    <MapPin className="w-5 h-5 text-gray" aria-label="Icono ubicación" />
                                </div>
                                <span>{FOOTER_DATA.contact.location}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-black-card/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-gold/10"
                    >
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                            <Sparkles className="w-5 h-5 text-gold mr-2" aria-label="Icono destellos" />
                            Inicia tu Evaluación
                        </h4>
                        <p className="text-white-dim mb-8 pb-4 border-b border-gold/10">
                            Contáctanos hoy para realizar un diagnóstico inicial gratuito y establecer la hoja de ruta QHSE para tu empresa.
                        </p>
                        <a
                            href="https://wa.me/56950989084?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20un%20diagn%C3%B3stico%20inicial%20gratuito."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 flex items-center justify-center w-full py-4 bg-gradient-to-r from-gold-dark to-gold text-black font-bold rounded-lg hover:from-gold hover:to-gold-light transition-all duration-300 shadow-[0_8px_20px_rgba(212,175,55,0.25)] hover:-translate-y-1"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" aria-label="Icono WhatsApp" />
                            Solicitar Diagnóstico
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between text-gray text-sm"
                >
                    <p>{FOOTER_DATA.copyright}</p>
                    <p className="mt-2 md:mt-0 font-medium">Consultoría QHSE Especializada</p>
                </motion.div>
            </div>
        </footer>
    );
}
