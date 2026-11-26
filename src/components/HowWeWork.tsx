"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { METHOD_DATA } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";

// Tres pasos unidos por una línea dorada que se llena con el scroll, junto al loop del video motion QHSE.
export function HowWeWork() {
    const ref = useRef<HTMLOListElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
    const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

    // El video solo corre en pantalla y nunca con movimiento reducido.
    useEffect(() => {
        const v = videoRef.current;
        if (!v || reduce) return;
        const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.25 });
        io.observe(v);
        return () => io.disconnect();
    }, [reduce]);

    return (
        <section id="metodo" className="border-t border-line bg-surface py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader eyebrow={METHOD_DATA.eyebrow} title={METHOD_DATA.title} />

                <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-6">
                        <ol ref={ref} className="relative grid gap-10 pl-10 md:pl-14">
                            <span aria-hidden="true" className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-[2px] bg-line" />
                            <motion.span
                                aria-hidden="true"
                                className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-[2px] origin-top bg-accent"
                                style={{ scaleY: reduce ? 1 : fill }}
                            />
                            {METHOD_DATA.steps.map((s, i) => (
                                <motion.li
                                    key={s.name}
                                    id={i === 0 ? "diagnostico" : undefined}
                                    className="relative scroll-mt-28"
                                    initial={reduce ? false : { opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                                >
                                        <span
                                            aria-hidden="true"
                                            className="absolute -left-10 md:-left-14 top-1 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border-2 border-accent bg-white"
                                        >
                                            <span className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-accent" />
                                        </span>
                                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-ink">{s.name}</h3>
                                            <p className="text-sm text-muted">
                                                <span className="font-mono font-semibold text-ink">{s.price}</span> {s.note}
                                            </p>
                                        </div>
                                        <p className="mt-2 max-w-lg text-base text-ink-dim leading-relaxed">{s.text}</p>
                                </motion.li>
                            ))}
                        </ol>

                        <RevealWrapper delay={0.2} className="mt-10 pl-10 md:pl-14">
                            <p className="max-w-lg text-sm text-muted leading-relaxed">{METHOD_DATA.condition}</p>
                            <Link href={METHOD_DATA.cta.href} className="btn-primary group mt-6 w-full sm:w-auto">
                                {METHOD_DATA.cta.text}
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                            </Link>
                        </RevealWrapper>
                    </div>

                    <RevealWrapper delay={0.15} className="lg:col-span-6">
                        <figure className="lg:sticky lg:top-28">
                            <div className="overflow-hidden rounded-2xl border border-line bg-[#0f1419] p-1.5 shadow-[0_30px_70px_-40px_rgba(31,38,46,0.6)]">
                                <video
                                    ref={videoRef}
                                    src={METHOD_DATA.video.src}
                                    poster={METHOD_DATA.video.poster}
                                    muted
                                    loop
                                    playsInline
                                    preload="none"
                                    aria-hidden="true"
                                    className="block aspect-video w-full rounded-xl"
                                />
                            </div>
                            <figcaption className="mt-3 text-xs text-muted">De la operación desordenada a un sistema conectado.</figcaption>
                        </figure>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}
