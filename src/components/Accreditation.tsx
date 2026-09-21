import Link from "next/link";
import { ArrowRight, FileCheck2 } from "lucide-react";
import { ACCREDITATION_DATA } from "@/lib/data";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";

export function Accreditation() {
    return (
        <section id="acreditacion" className="py-16 md:py-24 border-t border-line">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <SectionHeader eyebrow={ACCREDITATION_DATA.eyebrow} title={ACCREDITATION_DATA.title} subtitle={ACCREDITATION_DATA.subtitle} />
                        <RevealWrapper delay={0.1}>
                            <p className="mt-6 text-sm text-muted leading-relaxed">
                                El resultado de una acreditación lo decide el mandante. Nuestro trabajo es que tu empresa llegue con la documentación completa, vigente y respaldada, y que cada observación se responda a tiempo.
                            </p>
                            <Link href={ACCREDITATION_DATA.cta.href} className="btn-primary mt-8 w-full sm:w-auto">
                                {ACCREDITATION_DATA.cta.text}
                                <ArrowRight className="w-5 h-5" aria-hidden="true" />
                            </Link>
                        </RevealWrapper>
                    </div>

                    <RevealWrapper delay={0.15}>
                        <ul className="grid gap-3 sm:grid-cols-2">
                            {ACCREDITATION_DATA.items.map((item) => (
                                <li key={item} className="card flex items-center gap-3 px-4 py-3.5">
                                    <FileCheck2 className="w-5 h-5 shrink-0 text-accent" aria-hidden="true" />
                                    <span className="text-sm font-medium text-ink-dim">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}
