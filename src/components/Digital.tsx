import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LayoutDashboard } from "lucide-react";
import { DIGITAL_DATA } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";

export function Digital() {
    const [main, ...rest] = DIGITAL_DATA.screenshots;
    return (
        <section id="plataforma" className="py-16 md:py-24 border-t border-line bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-5 lg:gap-16 items-start">
                    <div className="lg:col-span-2">
                        <SectionHeader eyebrow={DIGITAL_DATA.eyebrow} title={DIGITAL_DATA.title} subtitle={DIGITAL_DATA.subtitle} />
                        <RevealWrapper delay={0.1}>
                            <p className="mt-6 text-sm text-muted leading-relaxed">{DIGITAL_DATA.body}</p>
                            <ul className="mt-8 grid gap-3">
                                {DIGITAL_DATA.features.map((f) => (
                                    <li key={f.title} className="card px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <LayoutDashboard className="w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
                                            <span className="text-sm font-semibold text-ink">{f.title}</span>
                                        </div>
                                        <p className="mt-1 text-sm text-muted leading-relaxed">{f.text}</p>
                                    </li>
                                ))}
                            </ul>
                            <Link href={DIGITAL_DATA.cta.href} className="btn-primary mt-8 w-full sm:w-auto">
                                {DIGITAL_DATA.cta.text}
                                <ArrowRight className="w-5 h-5" aria-hidden="true" />
                            </Link>
                        </RevealWrapper>
                    </div>

                    <RevealWrapper delay={0.15} className="lg:col-span-3">
                        <figure className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
                            <Image
                                src={main.src}
                                alt={main.alt}
                                width={1600}
                                height={991}
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                className="w-full h-auto"
                            />
                            <figcaption className="px-4 py-2 text-xs text-muted border-t border-line">{main.caption}</figcaption>
                        </figure>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            {rest.map((s) => (
                                <figure key={s.src} className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
                                    <Image
                                        src={s.src}
                                        alt={s.alt}
                                        width={1600}
                                        height={1000}
                                        sizes="(max-width: 640px) 100vw, 30vw"
                                        className="w-full h-auto"
                                    />
                                    <figcaption className="px-4 py-2 text-xs text-muted border-t border-line">{s.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                        <p className="mt-3 text-xs text-muted">{DIGITAL_DATA.note}</p>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}
