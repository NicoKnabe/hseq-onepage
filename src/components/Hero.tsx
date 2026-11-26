"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { m, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_DATA } from "@/lib/data";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

const EASE = [0.22, 1, 0.36, 1] as const;
const CIRC = 2 * Math.PI * 36;

export function Hero() {
    const ref = useRef<HTMLElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const stageY = useTransform(scrollYProgress, [0, 1], [0, -160]);
    const stageScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Luz que sigue al cursor e inclinación del panel.
    const mx = useMotionValue(70);
    const my = useMotionValue(40);
    const rx = useSpring(0, { stiffness: 120, damping: 18 });
    const ry = useSpring(0, { stiffness: 120, damping: 18 });
    const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}% ${my}%, rgba(138,109,18,0.10), transparent 70%)`;

    function onMove(e: React.PointerEvent) {
        if (reduce || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        mx.set(x * 100);
        my.set(y * 100);
        ry.set((x - 0.5) * 10);
        rx.set((0.5 - y) * 8);
    }
    function onLeave() {
        rx.set(0);
        ry.set(0);
    }

    const words = HERO_DATA.title.split(" ");

    return (
        <section
            ref={ref}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            className="hero-grid relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-20 md:pt-28"
        >
            <m.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />

            <div className="container relative mx-auto px-4 md:px-6">
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
                    <m.div className="lg:col-span-6" style={reduce ? undefined : { y: textY, opacity: fade }}>
                        <m.p
                            className="eyebrow mb-5"
                            initial={reduce ? false : { opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: EASE }}
                        >
                            {HERO_DATA.eyebrow}
                        </m.p>
                        <h1 className="text-[2.5rem] leading-[1.04] sm:text-5xl md:text-6xl font-bold text-ink tracking-tight">
                            {words.map((w, i) => (
                                <m.span
                                    key={i}
                                    className="inline-block"
                                    initial={reduce ? false : { opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.55, delay: 0.05 + i * 0.04, ease: EASE }}
                                >
                                    {w}
                                    {i < words.length - 1 && " "}
                                </m.span>
                            ))}
                        </h1>
                        <m.div
                            initial={reduce ? false : { y: 12 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                        >
                            <p className="mt-6 max-w-xl text-base sm:text-lg md:text-xl text-ink-dim leading-relaxed">{HERO_DATA.subtitle}</p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                                <Link href={HERO_DATA.primaryCta.href} className="btn-primary group w-full sm:w-auto">
                                    {HERO_DATA.primaryCta.text}
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                </Link>
                                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                                    <WhatsAppIcon className="w-5 h-5 text-[#1DA851]" />
                                    {HERO_DATA.secondaryCta.text}
                                </a>
                            </div>
                            <p className="mt-6 text-sm text-muted">{HERO_DATA.tagline}</p>
                        </m.div>
                    </m.div>

                    <m.div
                        className="relative lg:col-span-6 [perspective:1000px]"
                        style={reduce ? undefined : { y: stageY, scale: stageScale }}
                        initial={reduce ? false : { opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
                    >
                        <CompliancePanel rx={rx} ry={ry} reduce={!!reduce} />
                    </m.div>
                </div>
            </div>

            <m.a
                href="#clientes"
                aria-label="Bajar a la siguiente sección"
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium text-muted md:flex"
                style={reduce ? undefined : { opacity: fade }}
            >
                Desliza
                <span className="scroll-cue block h-8 w-px bg-gradient-to-b from-accent to-transparent" />
            </m.a>
        </section>
    );
}

type Spring = ReturnType<typeof useSpring>;

function CompliancePanel({ rx, ry, reduce }: { rx: Spring; ry: Spring; reduce: boolean }) {
    const { panel } = HERO_DATA;
    const total = panel.items.length;
    // Estado inicial completo (render del servidor y movimiento reducido); el ciclo arranca en el cliente.
    const [done, setDone] = useState(total);

    useEffect(() => {
        if (reduce) return;
        let n = 0;
        let t: ReturnType<typeof setTimeout>;
        const tick = () => {
            if (n < total) {
                n += 1;
                setDone(n);
                t = setTimeout(tick, 1100);
            } else {
                t = setTimeout(() => {
                    n = 0;
                    setDone(0);
                    t = setTimeout(tick, 900);
                }, 3400);
            }
        };
        // Vuelve a «pendiente» antes de que el panel termine de aparecer y luego recorre los requisitos.
        t = setTimeout(() => {
            setDone(0);
            t = setTimeout(tick, 1200);
        }, 0);
        return () => clearTimeout(t);
    }, [reduce, total]);

    const pct = Math.round(40 + (done / total) * 60);
    const complete = done === total;

    return (
        <div className="relative mx-auto max-w-lg">
            {panel.chips.map((c, i) => (
                <span
                    key={c}
                    aria-hidden="true"
                    className={cn(
                        "hero-chip absolute z-10 hidden rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-brand shadow-[0_10px_24px_-14px_rgba(31,38,46,0.5)] sm:block",
                        i === 0 && "-top-4 left-6 font-mono",
                        i === 1 && "top-[19%] -right-5 font-mono",
                        i === 2 && "-bottom-4 left-[22%]"
                    )}
                    style={{ animationDelay: `${-i * 2}s` }}
                >
                    {c}
                </span>
            ))}

            <m.div
                style={{ rotateX: rx, rotateY: ry }}
                className="rounded-2xl border border-line bg-white p-5 md:p-6 shadow-[0_30px_70px_-35px_rgba(31,38,46,0.45)]"
                role="img"
                aria-label="Ejemplo ilustrativo de un panel de cumplimiento que pasa los requisitos de pendiente a al día"
            >
                <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-semibold text-ink">{panel.title}</p>
                    <p className="text-xs text-muted">{panel.note}</p>
                </div>

                <div className="mt-5 flex items-center gap-5">
                    <svg viewBox="0 0 84 84" className="h-20 w-20 shrink-0 md:h-24 md:w-24" aria-hidden="true">
                        <circle cx="42" cy="42" r="36" fill="none" stroke="#ecece8" strokeWidth="9" />
                        <circle
                            cx="42"
                            cy="42"
                            r="36"
                            fill="none"
                            strokeWidth="9"
                            strokeLinecap="round"
                            transform="rotate(-90 42 42)"
                            strokeDasharray={CIRC}
                            strokeDashoffset={CIRC * (1 - pct / 100)}
                            className={cn("transition-[stroke-dashoffset,stroke] duration-700 ease-out", complete ? "stroke-ok" : "stroke-warn")}
                        />
                    </svg>
                    <div>
                        <p className="text-4xl font-bold tracking-tight text-ink tabular-nums">{pct}%</p>
                        <p className="text-sm text-muted">{panel.metric}</p>
                    </div>
                </div>

                <ul className="mt-5 grid gap-2">
                    {panel.items.map((item, i) => {
                        const ok = i < done;
                        return (
                            <li key={item} className="flex items-center justify-between gap-3 rounded-lg border border-line/70 px-3.5 py-2.5 text-sm text-ink">
                                <span>{item}</span>
                                <span
                                    className={cn(
                                        "whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors duration-500",
                                        ok ? "bg-ok-soft text-ok" : "bg-warn-soft text-warn"
                                    )}
                                >
                                    {ok ? "Al día" : "Pendiente"}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </m.div>
        </div>
    );
}
