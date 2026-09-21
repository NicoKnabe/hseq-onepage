import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { DIAGNOSTIC_DATA } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";

export function Diagnostic() {
    return (
        <section id="diagnostico" className="py-16 md:py-24 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <RevealWrapper className="rounded-2xl border border-gold/40 bg-gradient-to-br from-graphite to-black p-6 md:p-10 lg:p-14">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
                        <div>
                            <SectionHeader eyebrow={DIAGNOSTIC_DATA.eyebrow} title={DIAGNOSTIC_DATA.title} subtitle={DIAGNOSTIC_DATA.subtitle} />
                            <div className="mt-8 rounded-lg border border-white/10 bg-black/50 p-5">
                                <p className="text-xs uppercase tracking-widest text-gray">Inversión</p>
                                <p className="mt-1 text-2xl font-bold text-white">
                                    {DIAGNOSTIC_DATA.price ?? "Según alcance"}
                                </p>
                                <p className="mt-1 text-sm text-gray">{DIAGNOSTIC_DATA.priceNote}</p>
                                <p className="mt-1 text-sm text-gray">{DIAGNOSTIC_DATA.duration}</p>
                            </div>
                            <Link href={DIAGNOSTIC_DATA.cta.href} className="btn-primary mt-6 w-full sm:w-auto">
                                {DIAGNOSTIC_DATA.cta.text}
                                <ArrowRight className="w-5 h-5" aria-hidden="true" />
                            </Link>
                        </div>

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-4">Qué incluye</p>
                            <ul className="grid gap-3 sm:grid-cols-2">
                                {DIAGNOSTIC_DATA.includes.map((item) => (
                                    <li key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-black/40 px-4 py-3">
                                        <Check className="mt-0.5 w-4 h-4 shrink-0 text-gold" aria-hidden="true" />
                                        <span className="text-sm text-white-dim">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </RevealWrapper>
            </div>
        </section>
    );
}
