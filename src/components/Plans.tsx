"use client";

import { motion } from "framer-motion";
import { PLANS_DATA } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function Plans() {
    return (
        <section id="planes" className="py-24 bg-black border-b border-gold/10 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.02),transparent_100%)]" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
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
                    {PLANS_DATA.plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`relative bg-black-card rounded-2xl p-8 lg:p-10 border transition-all duration-300 hover:-translate-y-2 flex flex-col ${plan.highlighted
                                    ? "border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                                    : "border-gold/10 hover:border-gold/30 hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)]"
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
                                <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                                <p className="text-white-dim text-sm h-10">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-white-dim">
                                        <CheckCircle2 className={`w-5 h-5 mr-3 shrink-0 ${plan.highlighted ? "text-gold" : "text-gray"}`} />
                                        <span className="text-sm leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={plan.buttonHref}
                                className={`block w-full text-center py-4 px-2 rounded-lg font-bold transition-all duration-300 ${plan.highlighted
                                        ? "bg-gradient-to-r from-gold-dark to-gold text-black hover:from-gold hover:to-gold-light shadow-[0_8px_20px_rgba(212,175,55,0.3)] hover:-translate-y-1"
                                        : "bg-black text-gold border border-gold/30 hover:bg-gold/10"
                                    }`}
                            >
                                {plan.buttonText}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
