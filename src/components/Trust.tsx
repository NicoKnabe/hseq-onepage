import Image from "next/image";
import { TRUST_DATA } from "@/lib/data";
import { RevealWrapper } from "./ui/RevealWrapper";
import { FireRentLogo } from "./ui/FireRentLogo";

export function Trust() {
    return (
        <section id="confianza" className="py-12 md:py-16 border-t border-line bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                <RevealWrapper delay={0.1}>
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
