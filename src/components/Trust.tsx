import Image from "next/image";
import { TRUST_DATA } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";
import { FireRentLogo } from "./ui/FireRentLogo";

export function Trust() {
    return (
        <section id="confianza" className="py-16 md:py-24 border-t border-line bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader eyebrow={TRUST_DATA.eyebrow} title={TRUST_DATA.title} />

                <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {TRUST_DATA.facts.map((f, i) => (
                        <RevealWrapper key={f.label} delay={i * 0.05}>
                            <div className="card h-full p-5">
                                <dt className="text-xs uppercase tracking-widest text-accent">{f.label}</dt>
                                <dd className="mt-2 text-base font-medium text-ink leading-snug">{f.value}</dd>
                            </div>
                        </RevealWrapper>
                    ))}
                </dl>

                <RevealWrapper delay={0.2} className="mt-14">
                    <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted">{TRUST_DATA.clientsTitle}</p>
                    <ul className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6">
                        {TRUST_DATA.clients.map((c) => (
                            <li key={c.name}>
                                <a
                                    href={c.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Sitio de ${c.name}`}
                                    className="flex h-20 w-40 md:h-24 md:w-52 items-center justify-center rounded-xl border border-line bg-white px-5 transition-colors hover:border-accent/50"
                                >
                                    {c.logo ? (
                                        <Image
                                            src={c.logo}
                                            alt={c.name}
                                            width={200}
                                            height={90}
                                            className="max-h-12 md:max-h-16 w-auto object-contain"
                                            unoptimized={c.logo.endsWith(".svg")}
                                        />
                                    ) : (
                                        <FireRentLogo className="h-8 md:h-10 w-auto" />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </RevealWrapper>
            </div>
        </section>
    );
}
