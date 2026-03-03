"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SOLUTIONS_DATA } from "@/lib/data";
import { CheckCircle2, Shield, FileText, Globe } from "lucide-react";

export function SolutionsTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const solutionIcons = [FileText, Globe, Shield];
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Tabs Sidebar */}
            <motion.div
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="lg:col-span-4 space-y-3"
            >
                {SOLUTIONS_DATA.solutions.map((solution, index) => {
                    const Icon = solutionIcons[index % 3];
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 text-left cursor-pointer border ${activeTab === index
                                ? "bg-black-card border-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                                : "bg-transparent border-transparent hover:bg-black-card/50 hover:border-gold/20"
                                }`}
                        >
                            <div
                                className={`p-3 rounded-lg mr-4 transition-colors ${activeTab === index
                                    ? "bg-gold/10 text-gold"
                                    : "bg-black-card text-gray"
                                    }`}
                            >
                                <Icon className="w-6 h-6" aria-label={`Icono de ${solution.title}`} />
                            </div>
                            <span
                                className={`font-semibold text-lg ${activeTab === index ? "text-gold" : "text-white-dim"
                                    }`}
                            >
                                {solution.title}
                            </span>
                        </button>
                    );
                })}
            </motion.div>

            {/* Active Tab Content */}
            <motion.div
                key={activeTab}
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                animate={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="lg:col-span-8 bg-black-card border border-gold/10 rounded-2xl p-8 lg:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[100px]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 pr-12 relative z-10">
                    {SOLUTIONS_DATA.solutions[activeTab].title}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4 relative z-10">
                    {SOLUTIONS_DATA.solutions[activeTab].points.map((point, idx) => (
                        <li key={idx} className="flex items-start text-white-dim">
                            <CheckCircle2 className="w-5 h-5 text-gold mr-3 mt-1 shrink-0" aria-label="Icono check de solución" />
                            <span className="leading-relaxed">{point}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}
