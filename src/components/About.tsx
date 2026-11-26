"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Download, Linkedin, MapPin } from "lucide-react";
import { ABOUT_DATA, CREDENTIALS } from "@/lib/data";
import { SITE } from "@/lib/site";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";

export function About() {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <section id="nosotros" className="border-t border-line bg-surface py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                    <RevealWrapper className="lg:col-span-4">
                        <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden rounded-3xl border border-line bg-white">
                            <motion.div className="absolute inset-[-6%]" style={reduce ? undefined : { y }}>
                                <Image
                                    src="/fotos/nicolas-knabe.webp"
                                    alt="Nicolás Knabe Alcaino, consultor QHSE"
                                    fill
                                    sizes="360px"
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </RevealWrapper>

                    <div className="lg:col-span-8">
                        <SectionHeader eyebrow={ABOUT_DATA.eyebrow} title={ABOUT_DATA.title} />
                        <RevealWrapper delay={0.1}>
                            <p className="mt-6 text-xl font-bold text-ink">{ABOUT_DATA.name}</p>
                            <p className="mt-1 text-sm font-medium text-accent">{ABOUT_DATA.role}</p>
                            <p className="mt-5 max-w-2xl text-base md:text-lg text-ink-dim leading-relaxed">{ABOUT_DATA.intro}</p>

                            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                                {CREDENTIALS.map((c) => (
                                    <li key={c} className="rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink">
                                        {c}
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 flex items-start gap-2 text-sm text-muted">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                                {SITE.coverage}
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary !py-2.5 !text-sm">
                                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                                    LinkedIn
                                </a>
                                <a href={SITE.brochure} download="QHSE-Brochure-2026.pdf" className="btn-secondary !py-2.5 !text-sm">
                                    <Download className="h-4 w-4" aria-hidden="true" />
                                    Descargar brochure (PDF)
                                </a>
                            </div>
                        </RevealWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}
