import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { INDUSTRY_DATA } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";

export function Industry() {
    return (
        <section id="industria" className="relative py-16 md:py-24 border-t border-white/10 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image src="/middle-bg.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
            </div>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                    <SectionHeader eyebrow={INDUSTRY_DATA.eyebrow} title={INDUSTRY_DATA.title} subtitle={INDUSTRY_DATA.subtitle} />
                    <RevealWrapper delay={0.1}>
                        <ul className="grid grid-cols-2 gap-3">
                            {INDUSTRY_DATA.items.map((item) => (
                                <li key={item} className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-black/70 px-4 py-3 text-sm font-medium text-white-dim">
                                    <ShieldCheck className="w-4 h-4 shrink-0 text-gold" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-sm text-gray leading-relaxed">{INDUSTRY_DATA.note}</p>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}
