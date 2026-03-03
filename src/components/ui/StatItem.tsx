"use client";

import { motion, useReducedMotion } from "framer-motion";
import CountUp from "react-countup";
import { AUTHORITY_DATA } from "@/lib/data";

export function StatItem({ stat }: { stat: typeof AUTHORITY_DATA.stats[0] }) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            className="text-center p-6 bg-black-card rounded-2xl border border-gold/10 transition-all duration-300 shadow-sm hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10 h-full flex flex-col justify-center"
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
