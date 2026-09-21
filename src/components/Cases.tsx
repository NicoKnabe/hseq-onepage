import { CASES_DATA } from "@/lib/data";
import { whatsappLink } from "@/lib/site";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function Cases() {
    const hasCases = CASES_DATA.cases.length > 0;
    return (
        <section id="experiencia" className="py-16 md:py-24 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader eyebrow={CASES_DATA.eyebrow} title={CASES_DATA.title} subtitle={CASES_DATA.subtitle} />

                {hasCases ? (
                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {CASES_DATA.cases.map((c, i) => (
                            <RevealWrapper key={`${c.client}-${i}`} delay={i * 0.06}>
                                <article className="card h-full p-6">
                                    <p className="eyebrow">{c.sector}</p>
                                    <h3 className="mt-2 text-xl font-bold text-white">{c.client}</h3>
                                    <dl className="mt-4 space-y-3 text-sm">
                                        {[
                                            ["Problema", c.problem],
                                            ["Servicio", c.service],
                                            ["Solución", c.solution],
                                            ["Resultado", c.result],
                                        ].map(([k, v]) => (
                                            <div key={k}>
                                                <dt className="text-xs uppercase tracking-widest text-gray">{k}</dt>
                                                <dd className="text-white-dim leading-relaxed">{v}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </article>
                            </RevealWrapper>
                        ))}
                    </div>
                ) : (
                    <RevealWrapper delay={0.1} className="mt-10 rounded-xl border border-dashed border-white/20 p-8 text-center">
                        <p className="text-white-dim max-w-xl mx-auto">{CASES_DATA.emptyState}</p>
                        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-6">
                            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                            Hablar con un especialista
                        </a>
                    </RevealWrapper>
                )}
            </div>
        </section>
    );
}
