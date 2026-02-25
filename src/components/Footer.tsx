"use client";

import { motion } from "framer-motion";
import { CONTACT_DATA } from "@/lib/data";
import { Phone, Mail, MapPin, Download } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#050812] border-t border-gray-800 pt-20 pb-10" id="contacto">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                            {CONTACT_DATA.cta}
                        </h2>
                        <div className="w-16 h-1 bg-cyan-400 rounded-full mb-8" />

                        <a
                            href={`mailto:${CONTACT_DATA.email}`}
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-cyan-400 rounded-xl hover:bg-cyan-300 transition-colors duration-200"
                        >
                            Contactar Ahora
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 flex flex-col justify-center"
                    >
                        <div className="flex items-center text-gray-300">
                            <Phone className="w-6 h-6 text-cyan-400 mr-4" />
                            <span className="text-lg">{CONTACT_DATA.phone}</span>
                        </div>

                        <div className="flex items-center text-gray-300">
                            <Mail className="w-6 h-6 text-cyan-400 mr-4" />
                            <span className="text-lg">{CONTACT_DATA.email}</span>
                        </div>

                        <div className="flex items-center text-gray-300">
                            <MapPin className="w-6 h-6 text-cyan-400 mr-4" />
                            <span className="text-lg">{CONTACT_DATA.location}</span>
                        </div>

                        <div className="pt-6 mt-6 border-t border-gray-800">
                            <a
                                href={CONTACT_DATA.brochureLink}
                                download
                                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                            >
                                <Download className="w-5 h-5 mr-2" />
                                Descargar Brochure Comercial PDF
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="text-center text-gray-600 text-sm border-t border-gray-900 pt-8">
                    &copy; {new Date().getFullYear()} KNABE GROUP Consulting. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
