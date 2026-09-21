import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HERO_DATA } from "@/lib/data";
import { whatsappLink } from "@/lib/site";
import { RevealWrapper } from "./ui/RevealWrapper";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function Hero() {
    return (
        <section className="pt-24 pb-14 md:pt-36 md:pb-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
                    <div className="lg:col-span-7">
                        <RevealWrapper>
                            <p className="eyebrow mb-5">{HERO_DATA.eyebrow}</p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-[1.05] tracking-tight">
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

                        <RevealWrapper delay={0.45} className="mt-10 md:mt-12">
                            <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-muted">
                                {HERO_DATA.tagline}
                            </p>
                        </RevealWrapper>
                    </div>

                    <RevealWrapper delay={0.2} className="lg:col-span-5">
                        <figure className="relative">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
                                <Image
                                    src="/fotos/charla-seguridad-faena.webp"
                                    alt="Charla de seguridad con trabajadores en faena"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                />
                            </div>
                            <figcaption className="mt-3 text-xs text-muted">
                                Charla de seguridad en terreno.
                            </figcaption>
                        </figure>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}
