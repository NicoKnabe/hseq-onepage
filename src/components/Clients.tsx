"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CLIENTS_DATA } from "@/lib/data";
import { RevealWrapper } from "./ui/RevealWrapper";

export function Clients() {
    const shouldReduceMotion = useReducedMotion();
    const loop = [...CLIENTS_DATA.clients, ...CLIENTS_DATA.clients];

    return (
        <section className="py-16 md:py-24 bg-transparent relative border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <RevealWrapper className="text-center max-w-3xl mx-auto mb-10 md:mb-14 space-y-3">
                    <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold/80">
                        {CLIENTS_DATA.eyebrow}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        {CLIENTS_DATA.sectionTitle}
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full" />
                </RevealWrapper>
            </div>

            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

                <motion.div
                    className="flex gap-10 md:gap-20 items-center w-max"
                    animate={
                        shouldReduceMotion
                            ? { x: 0 }
                            : { x: ["0%", "-50%"] }
                    }
                    transition={
                        shouldReduceMotion
                            ? undefined
                            : { ease: "linear", duration: 32, repeat: Infinity }
                    }
                >
                    {loop.map((c, i) => (
                        <a
                            key={`${c.name}-${i}`}
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={c.name}
                            aria-label={`Sitio de ${c.name}`}
                            className="group shrink-0 flex items-center justify-center h-20 md:h-28 w-40 md:w-56 px-4 rounded-xl bg-black-card/40 border border-white/5 hover:border-gold/30 transition-colors"
                        >
                            <Image
                                src={c.logo}
                                alt={c.name}
                                width={220}
                                height={100}
                                className="max-h-14 md:max-h-20 w-auto object-contain opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                                unoptimized={c.logo.endsWith(".svg")}
                            />
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
