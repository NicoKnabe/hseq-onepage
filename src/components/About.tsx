import Image from "next/image";
import { Download, Linkedin } from "lucide-react";
import { ABOUT_DATA } from "@/lib/data";
import { SITE } from "@/lib/site";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";

export function About() {
    return (
        <section id="nosotros" className="py-16 md:py-24 border-t border-line">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
                    <div className="lg:col-span-2">
                        <SectionHeader eyebrow={ABOUT_DATA.eyebrow} title={ABOUT_DATA.title} />
                        <RevealWrapper delay={0.1} className="mt-8 card p-6">
                            <div className="flex items-center gap-5">
                                <div className="relative h-28 w-28 md:h-32 md:w-32 shrink-0 overflow-hidden rounded-xl border border-line">
                                    <Image
                                        src="/fotos/nicolas-knabe.webp"
                                        alt="Nicolás Knabe Alcaino, consultor QHSE"
                                        fill
                                        sizes="128px"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-ink">{ABOUT_DATA.name}</p>
                                    <p className="mt-1 text-sm text-accent">{ABOUT_DATA.role}</p>
                                </div>
                            </div>
                            <p className="mt-5 text-sm text-ink-dim leading-relaxed">{ABOUT_DATA.intro}</p>
                            <a
                                href={SITE.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center gap-2 rounded-md border border-line-strong bg-white px-4 py-2.5 text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
                            >
                                <Linkedin className="w-4 h-4" aria-hidden="true" />
                                linkedin.com/in/nicolasknabe-qhse
                            </a>
                            <a
                                href={SITE.brochure}
                                download="QHSE-Brochure-2026.pdf"
                                className="mt-3 ml-0 sm:ml-2 inline-flex items-center gap-2 rounded-md border border-line-strong bg-white px-4 py-2.5 text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors"
                            >
                                <Download className="w-4 h-4" aria-hidden="true" />
                                Descargar brochure (PDF)
                            </a>
                        </RevealWrapper>
                    </div>

                    <div className="lg:col-span-3 grid gap-4 sm:grid-cols-2">
                        {ABOUT_DATA.blocks.map((b, i) => (
                            <RevealWrapper key={b.title} delay={i * 0.06}>
                                <div className="h-full border-l-2 border-accent/50 pl-4 py-1">
                                    <h3 className="text-base font-semibold text-ink">{b.title}</h3>
                                    <p className="mt-2 text-sm text-ink-dim leading-relaxed">{b.text}</p>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
