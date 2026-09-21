import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HERO_DATA } from "@/lib/data";
import { whatsappLink } from "@/lib/site";
import { RevealWrapper } from "./ui/RevealWrapper";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-28 min-h-[85vh] flex items-center">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/hero-bg.jpeg"
                    alt="Planta industrial"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/85 to-white" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl">
                    <RevealWrapper>
                        <p className="eyebrow mb-5">{HERO_DATA.eyebrow}</p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-ink leading-[1.05] tracking-tight">
                            {HERO_DATA.title}
                        </h1>
                    </RevealWrapper>

                    <RevealWrapper delay={0.15} className="mt-6 md:mt-8 max-w-2xl">
                        <p className="text-base sm:text-lg md:text-xl text-ink-dim leading-relaxed">
                            {HERO_DATA.subtitle}
                        </p>
                    </RevealWrapper>

                    <RevealWrapper delay={0.3} className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Link href={HERO_DATA.primaryCta.href} className="btn-primary w-full sm:w-auto">
                            {HERO_DATA.primaryCta.text}
                            <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </Link>
                        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                            <WhatsAppIcon className="w-5 h-5 text-[#1DA851]" />
                            {HERO_DATA.secondaryCta.text}
                        </a>
                    </RevealWrapper>

                    <RevealWrapper delay={0.45} className="mt-10 md:mt-14">
                        <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-muted">
                            {HERO_DATA.tagline}
                        </p>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}
