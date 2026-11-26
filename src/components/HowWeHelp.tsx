"use client";

import { useRef } from "react";
import Link from "next/link";
import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { HELP_DATA } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { Illustration, type IllustrationKind } from "./ui/Illustration";

type Area = (typeof HELP_DATA.areas)[number];

// Cuatro tarjetas que se apilan al hacer scroll; las de atrás se achican levemente.
export function HowWeHelp() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
    const n = HELP_DATA.areas.length;

    return (
        <section id="servicios" className="py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader eyebrow={HELP_DATA.eyebrow} title={HELP_DATA.title} subtitle={HELP_DATA.subtitle} />

                <div ref={ref} className="mt-12 md:mt-16">
                    {HELP_DATA.areas.map((area, i) => (
                        <Card key={area.id} area={area} index={i} total={n} progress={scrollYProgress} />
                    ))}
                </div>

                <p className="mt-10 text-center text-sm text-muted">
                    ¿Buscas algo puntual como MIPER, plan de emergencia o investigación de incidentes?{" "}
                    <Link href="/servicios" className="font-semibold text-accent hover:text-accent-strong">
                        Ver los 26 servicios
                    </Link>
                </p>
            </div>
        </section>
    );
}

function Card({ area, index, total, progress }: { area: Area; index: number; total: number; progress: MotionValue<number> }) {
    const reduce = useReducedMotion();
    const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - 1 - index) * 0.035]);

    return (
        <div className="sticky mb-6 md:mb-[10vh] last:mb-0" style={{ top: `calc(88px + ${index * 22}px)` }}>
            <m.article
                style={reduce ? undefined : { scale }}
                className="origin-top will-change-transform grid overflow-hidden rounded-3xl border border-line bg-white shadow-[0_24px_60px_-40px_rgba(31,38,46,0.45)] md:grid-cols-2"
            >
                <div className="flex flex-col p-6 sm:p-8 md:p-10 lg:p-12">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">{area.name}</h3>
                    <p className="mt-3 text-base md:text-lg text-ink-dim leading-relaxed">{area.claim}</p>
                    <ul className="mt-6 grid gap-2.5">
                        {area.points.map((p) => (
                            <li key={p} className="flex items-start gap-2.5 text-sm md:text-base text-ink-dim">
                                <Check className="mt-0.5 h-4 w-4 md:h-5 md:w-5 shrink-0 text-accent" aria-hidden="true" />
                                {p}
                            </li>
                        ))}
                    </ul>
                    <Link href={area.link.href} className="group mt-8 inline-flex items-center gap-2 text-sm md:text-base font-semibold text-accent hover:text-accent-strong">
                        {area.link.text}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                </div>
                <div className="hero-grid relative flex items-center justify-center border-t border-line bg-surface p-6 md:border-l md:border-t-0">
                    <Illustration kind={area.illustration as IllustrationKind} className="h-40 w-auto sm:h-52 md:h-64 lg:h-72" />
                </div>
            </m.article>
        </div>
    );
}
