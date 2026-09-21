import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "@/lib/articles";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";

export function Knowledge({ limit = 4 }: { limit?: number }) {
    const articles = ARTICLES.slice(0, limit);
    return (
        <section id="recursos" className="py-16 md:py-24 border-t border-white/10 bg-black-light">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <SectionHeader
                        eyebrow="Autoridad técnica"
                        title="Centro de conocimiento QHSE"
                        subtitle="Guías prácticas sobre DS44, MIPER, prevención, fiscalización, acreditación e ISO, escritas para quien tiene que tomar decisiones."
                    />
                    <Link href="/recursos" className="btn-secondary shrink-0 self-start md:self-auto">
                        Ver todos los artículos
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {articles.map((a, i) => (
                        <RevealWrapper key={a.slug} delay={i * 0.06}>
                            <Link href={`/recursos/${a.slug}`} className="card group flex h-full flex-col p-5">
                                <span className="eyebrow">{a.category}</span>
                                <h3 className="mt-2 flex-1 text-base font-semibold leading-snug text-white group-hover:text-gold transition-colors">{a.title}</h3>
                                <span className="mt-4 text-xs text-gray">{a.readingMinutes} min de lectura</span>
                            </Link>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
