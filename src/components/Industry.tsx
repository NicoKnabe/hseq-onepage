import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { INDUSTRY_DATA } from "@/lib/data";
import { RevealWrapper } from "./ui/RevealWrapper";

export function Industry() {
    return (
        <section id="industria" className="py-16 md:py-24 bg-ink text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
                    <div className="lg:col-span-5">
                        <RevealWrapper>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b84a] mb-3">{INDUSTRY_DATA.eyebrow}</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white">{INDUSTRY_DATA.title}</h2>
                            <p className="mt-4 text-base md:text-lg text-white/75 leading-relaxed">{INDUSTRY_DATA.subtitle}</p>
                        </RevealWrapper>
                        <RevealWrapper delay={0.1}>
                            <ul className="mt-8 grid grid-cols-2 gap-2.5">
                                {INDUSTRY_DATA.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm font-medium text-white/90">
                                        <ShieldCheck className="w-4 h-4 shrink-0 text-[#d9b84a]" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-5 text-sm text-white/60 leading-relaxed">{INDUSTRY_DATA.note}</p>
                        </RevealWrapper>
                    </div>

                    <RevealWrapper delay={0.15} className="lg:col-span-7">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                            <Image
                                src="/fotos/operador-faena-minera.webp"
                                alt="Operador con equipo de protección personal en faena minera"
                                fill
                                sizes="(max-width: 1024px) 100vw, 55vw"
                                className="object-cover"
                            />
                        </div>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}
