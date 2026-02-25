"use client";

import { motion } from "framer-motion";
import { FOOTER_DATA } from "@/lib/data";
import { MapPin, Mail, Sparkles } from "lucide-react";

// WhatsApp Custom Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

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
                            <WhatsAppIcon className="w-5 h-5 mr-2" aria-label="Icono WhatsApp" />
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
