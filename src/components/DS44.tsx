import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DS44_DATA } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";

export function DS44() {
    return (
        <section id="ds44" className="py-16 md:py-24 border-t border-line bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
                    <div className="lg:col-span-2">
                        <SectionHeader eyebrow={DS44_DATA.eyebrow} title={DS44_DATA.title} subtitle={DS44_DATA.subtitle} />
                        <RevealWrapper delay={0.1} className="mt-6">
                            <p className="text-sm md:text-base text-muted leading-relaxed">{DS44_DATA.context}</p>
                            <Link href={DS44_DATA.cta.href} className="btn-primary mt-8 w-full sm:w-auto">
                                {DS44_DATA.cta.text}
                                <ArrowRight className="w-5 h-5" aria-hidden="true" />
                            </Link>
                        </RevealWrapper>
                    </div>

                    <div className="lg:col-span-3">
                        <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                            {DS44_DATA.steps.map((step, i) => (
                                <RevealWrapper key={step.n} delay={i * 0.05}>
                                    <li className="card h-full p-5">
                                        <span className="font-mono text-sm font-bold text-accent">{step.n}</span>
                                        <h3 className="mt-2 text-base font-semibold text-ink">{step.title}</h3>
                                        <p className="mt-1 text-sm text-muted leading-relaxed">{step.desc}</p>
                                    </li>
                                </RevealWrapper>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
