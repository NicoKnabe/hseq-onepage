import Link from "next/link";
import { Check } from "lucide-react";
import { PLANS_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";

export function Plans() {
    return (
        <section id="prevencion-externa" className="py-16 md:py-24 border-t border-white/10 bg-black-light">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader eyebrow={PLANS_DATA.eyebrow} title={PLANS_DATA.title} subtitle={PLANS_DATA.subtitle} align="center" />

                <div className="mt-10 md:mt-14 grid gap-5 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
                    {PLANS_DATA.plans.map((plan, i) => (
                        <RevealWrapper key={plan.id} delay={i * 0.08} className="h-full">
                            <article
                                className={cn(
                                    "relative flex h-full flex-col rounded-2xl border p-6 md:p-8 bg-black-card",
                                    plan.highlighted ? "border-gold/70 shadow-[0_0_0_1px_rgba(212,175,55,0.25)]" : "border-white/10"
                                )}
                            >
                                {plan.highlighted && (
                                    <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black">
                                        Más solicitado
                                    </span>
                                )}
                                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                                <p className="mt-2 text-sm text-white-dim leading-relaxed">{plan.tagline}</p>

                                <div className="mt-5 space-y-3 text-sm">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-gray">Para quién</p>
                                        <p className="text-white-dim">{plan.forWho}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-gray">Qué resuelve</p>
                                        <p className="text-white-dim">{plan.solves}</p>
                                    </div>
                                </div>

                                <ul className="mt-6 space-y-2.5 flex-1">
                                    {plan.includes.map((f) => (
                                        <li key={f} className="flex items-start gap-2.5 text-sm text-white-dim">
                                            <Check className="mt-0.5 w-4 h-4 shrink-0 text-gold" aria-hidden="true" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-sm">
                                    <div>
                                        <dt className="text-xs uppercase tracking-widest text-gray">Frecuencia</dt>
                                        <dd className="text-white-dim">{plan.frequency}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs uppercase tracking-widest text-gray">Modalidad</dt>
                                        <dd className="text-white-dim">{plan.modality}</dd>
                                    </div>
                                    {plan.hours && (
                                        <div className="col-span-2">
                                            <dt className="text-xs uppercase tracking-widest text-gray">Dedicación de referencia</dt>
                                            <dd className="text-white-dim">{plan.hours}</dd>
                                        </div>
                                    )}
                                </dl>

                                <div className="mt-5">
                                    <p className="text-xl font-bold text-white">{plan.price ?? "Valor a cotizar"}</p>
                                    {!plan.price && <p className="text-xs text-gray">Según dotación, sedes y nivel de riesgo.</p>}
                                </div>

                                <Link
                                    href={`/?plan=${plan.id}#contacto`}
                                    className={cn("mt-5 w-full", plan.highlighted ? "btn-primary" : "btn-secondary")}
                                >
                                    {plan.cta}
                                </Link>
                            </article>
                        </RevealWrapper>
                    ))}
                </div>

                <RevealWrapper delay={0.2} className="mt-8 max-w-3xl mx-auto text-center">
                    <p className="text-sm text-gray">{PLANS_DATA.note}</p>
                </RevealWrapper>
            </div>
        </section>
    );
}
