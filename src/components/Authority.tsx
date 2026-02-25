"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AUTHORITY_DATA } from "@/lib/data";
import { BadgeCheck } from "lucide-react";

// Hook helper for counter (since framer-motion useSpring etc could be complex)
function useCounter(end: number, duration: number = 2) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const increment = end / (duration * 60); // Assuming 60fps
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 1000 / 60);
            return () => clearInterval(timer);
        }
    }, [inView, end, duration]);

    return { count, ref };
}

function StatItem({ stat }: { stat: typeof AUTHORITY_DATA.stats[0] }) {
    const { count, ref } = useCounter(stat.value);

    return (
        <div ref={ref} className="text-center p-6 bg-black-card rounded-2xl border border-gold/10 hover:-translate-y-1 hover:border-gold/30 transition-all duration-300 shadow-sm">
            <div className="text-4xl md:text-5xl font-extrabold text-gold mb-2 font-mono drop-shadow-md">
                {count}{stat.suffix}
            </div>
            <div className="text-sm md:text-base text-gray font-bold tracking-widest uppercase">
                {stat.label}
            </div>
        </div>
    );
}

export function Authority() {
    return (
        <section className="py-24 bg-black relative border-y border-gold/10">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            {AUTHORITY_DATA.consultant} <br />
                            <span className="text-gold text-2xl md:text-3xl mt-2 block font-normal tracking-wide">{AUTHORITY_DATA.title}</span>
                        </h2>

                        <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full mb-6" />

                        <ul className="space-y-4 pt-4">
                            {AUTHORITY_DATA.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-center text-white-dim text-lg">
                                    <BadgeCheck className="w-6 h-6 text-gold mr-4 shrink-0" aria-label="Check de Autoridad" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 gap-4 lg:gap-6"
                    >
                        {AUTHORITY_DATA.stats.map((stat, i) => (
                            <div key={i} className={i === 2 ? "col-span-2" : "col-span-1"}>
                                <StatItem stat={stat} />
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
