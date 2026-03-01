"use client";

import { motion } from "framer-motion";
import { PLANS_DATA } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

interface PlanData {
    name: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    buttonText: string;
    buttonHref: string;
}

export function Plans() {
    return (
        <section id="planes" className="py-16 md:py-24 bg-transparent border-b border-white/5 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02),transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm"
                    >
                        {PLANS_DATA.sectionTitle}
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {(PLANS_DATA.plans as PlanData[]).map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
                            className={`relative bg-black-card rounded-2xl p-8 lg:p-10 border transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl flex flex-col ${plan.highlighted
                                ? "border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:shadow-[rgba(212,175,55,0.25)]"
                                : "border-gold/10 hover:border-gold/30 hover:shadow-[rgba(212,175,55,0.15)]"
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
                                    <span className="bg-gradient-to-r from-gold-dark to-gold text-black text-xs md:text-sm font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg">
                                        Recomendado
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">{plan.name}</h3>
                                <p className="text-white-dim text-sm min-h-[2.5rem]">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-white-dim">
                                        <CheckCircle2 className={`w-5 h-5 mr-3 shrink-0 ${plan.highlighted ? "text-gold" : "text-gray"}`} aria-label="Icono check de servicio" />
                                        <span className="text-sm leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={plan.buttonHref}
                                className={`block w-full text-center py-4 px-2 rounded-lg font-bold transition-all duration-300 relative overflow-hidden group ${plan.highlighted
                                    ? "bg-gradient-to-r from-gold-dark to-gold text-black shadow-[0_8px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.4)]"
                                    : "bg-black text-gold border border-gold/30 hover:bg-gold/10"
                                    }`}
                            >
                                {plan.highlighted && <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />}
                                <span className={`relative z-10 ${plan.highlighted ? "text-black" : "text-gold"}`}>{plan.buttonText}</span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
