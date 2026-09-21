import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROBLEMS_DATA } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";

export function Problems() {
    return (
        <section id="problemas" className="py-16 md:py-24 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader title={PROBLEMS_DATA.title} subtitle={PROBLEMS_DATA.subtitle} />

                <div className="mt-10 md:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {PROBLEMS_DATA.items.map((item, i) => (
                        <RevealWrapper key={item.id} delay={i * 0.06}>
                            <Link href={item.href} className="card group flex h-full flex-col p-6">
                                <span className="eyebrow">{item.label}</span>
                                <p className="mt-3 flex-1 text-lg font-medium leading-snug text-white">
                                    &ldquo;{item.quote}&rdquo;
                                </p>
                                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                                    {item.cta}
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                </span>
                            </Link>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
