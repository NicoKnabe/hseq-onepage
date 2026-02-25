"use client";

import { motion } from "framer-motion";
import { PLANS_DATA } from "@/lib/data";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Plans() {
    return (
        <section className="py-24 bg-gray-900 border-t border-gray-800 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        {PLANS_DATA.sectionTitle}
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
                    {PLANS_DATA.plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={cn(
                                "relative bg-gray-800/80 rounded-3xl p-8 border backdrop-blur-sm flex flex-col",
                                plan.isPopular
                                    ? "border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.15)] transform lg:-translate-y-4"
                                    : "border-gray-700"
                            )}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-gray-900 font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
                                    Recomendado
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-gray-300">
                                            <Check className="w-5 h-5 text-cyan-400 mr-3 shrink-0 mt-0.5" />
                                            <span className="leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto">
                                <a
                                    href="#contacto"
                                    className={cn(
                                        "block w-full py-4 text-center font-semibold rounded-xl transition-all duration-200",
                                        plan.isPopular
                                            ? "bg-cyan-400 text-gray-900 hover:bg-cyan-300"
                                            : "bg-gray-700 text-white hover:bg-gray-600"
                                    )}
                                >
                                    Consultar Cobertura
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
