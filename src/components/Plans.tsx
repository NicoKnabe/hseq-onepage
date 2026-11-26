import Link from "next/link";
import { MapPin } from "lucide-react";
import { PLANS_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./ui/SectionHeader";
import { PlanFeatures } from "./ui/PlanFeatures";
import { RevealWrapper } from "./ui/RevealWrapper";

export function Plans() {
    const custom = PLANS_DATA.custom;
    return (
        <section id="prevencion-externa" className="py-20 md:py-28 border-t border-line">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader eyebrow={PLANS_DATA.eyebrow} title={PLANS_DATA.title} subtitle={PLANS_DATA.subtitle} align="center" className="mb-10 md:mb-14" />

                <div className="grid gap-5 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
                    {PLANS_DATA.plans.map((plan, i) => (
                        <RevealWrapper key={plan.id} delay={i * 0.08} className="h-full">
                            <article
                                className={cn(
                                    "relative flex h-full flex-col rounded-2xl border bg-white p-6 md:p-7",
                                    plan.highlighted ? "border-accent shadow-[0_0_0_2px_rgba(138,109,18,0.25),0_24px_50px_-30px_rgba(31,38,46,0.35)] lg:-my-3 lg:py-10" : "border-line"
                                )}
                            >
                                {plan.badge && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                                        {plan.badge}
                                    </span>
                                )}
                                <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
                                <p className="mt-2 flex items-baseline gap-1.5">
                                    <span className={cn("font-bold tracking-tight text-ink", plan.highlighted ? "text-4xl" : "text-3xl")}>{plan.price}</span>
                                    <span className="text-sm text-muted">{plan.priceSuffix}</span>
                                </p>
                                <p className="mt-3 text-sm text-ink-dim leading-relaxed">{plan.tagline}</p>

                                <Link
                                    href={`/?plan=${plan.id}#contacto`}
                                    className={cn("mt-5 w-full", plan.highlighted ? "btn-primary" : "btn-secondary")}
                                >
                                    {plan.cta}
                                </Link>

                                <PlanFeatures items={plan.includes} />

                                <p className="mt-5 flex items-start gap-2 border-t border-line pt-4 text-xs text-muted">
                                    <MapPin className="mt-0.5 w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                                    {plan.visits}
                                </p>
                            </article>
                        </RevealWrapper>
                    ))}
                </div>

                <RevealWrapper delay={0.2} id="plan-a-medida" className="mt-6 max-w-6xl mx-auto scroll-mt-24">
                    <article className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 md:flex-row md:items-center md:justify-between md:p-7">
                        <div>
                            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                <span className="text-lg font-bold text-ink">{custom.name}</span>
                                <span className="font-mono text-base font-semibold text-ink">{custom.price}</span>
                                <span className="text-sm text-muted">{custom.priceSuffix}</span>
                            </p>
                            <p className="mt-1 text-sm text-ink-dim leading-relaxed">
                                Para varios centros de trabajo, contratistas de grandes mandantes, minería y servicios industriales.
                            </p>
                        </div>
                        <Link href={`/?plan=${custom.id}#contacto`} className="btn-secondary whitespace-nowrap">
                            {custom.cta}
                        </Link>
                    </article>
                </RevealWrapper>

                <RevealWrapper delay={0.25} className="mt-6 max-w-3xl mx-auto text-center space-y-1.5">
                    <p className="text-xs text-muted leading-relaxed">{PLANS_DATA.pricingNote}</p>
                    <p className="text-xs text-muted leading-relaxed">{PLANS_DATA.billingNote}</p>
                </RevealWrapper>
            </div>
        </section>
    );
}
