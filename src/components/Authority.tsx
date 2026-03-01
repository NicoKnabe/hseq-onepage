"use client";

import { motion } from "framer-motion";
import { AUTHORITY_DATA } from "@/lib/data";
import { BadgeCheck } from "lucide-react";
import CountUp from "react-countup";

function StatItem({ stat }: { stat: typeof AUTHORITY_DATA.stats[0] }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-black-card rounded-2xl border border-gold/10 transition-all duration-300 shadow-sm hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10"
        >
            <div className="text-4xl md:text-5xl font-extrabold text-gold mb-2 font-mono drop-shadow-md">
                <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    useEasing={true}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                />
                {stat.suffix}
            </div>
            <div className="text-sm md:text-base text-gray font-bold tracking-widest uppercase">
                {stat.label}
            </div>
        </motion.div>
    );
}

export function Authority() {
    return (
        <section className="py-16 md:py-24 bg-black relative border-y border-gold/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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
                        initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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
