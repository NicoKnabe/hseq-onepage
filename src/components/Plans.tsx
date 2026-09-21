import Link from "next/link";
import { Check, MapPin } from "lucide-react";
import { PLANS_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./ui/SectionHeader";
import { RevealWrapper } from "./ui/RevealWrapper";

export function Plans() {
    const custom = PLANS_DATA.custom;
    return (
        <section id="prevencion-externa" className="py-16 md:py-24 border-t border-line bg-surface">
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

                                <ul className="mt-6 space-y-2.5 flex-1 border-t border-line pt-5">
                                    {plan.includes.map((f) => (
                                        <li key={f} className="flex items-start gap-2.5 text-sm text-ink-dim">
                                            <Check className="mt-0.5 w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-5 flex items-start gap-2 border-t border-line pt-4 text-xs text-muted">
                                    <MapPin className="mt-0.5 w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                                    {plan.visits}
                                </p>
                            </article>
                        </RevealWrapper>
                    ))}
                </div>

                <RevealWrapper delay={0.2} id="plan-a-medida" className="mt-6 max-w-6xl mx-auto scroll-mt-24">
                    <article className="rounded-2xl border border-line bg-white p-6 md:p-7 grid gap-6 lg:grid-cols-[1fr_2fr_auto] lg:items-center">
                        <div>
                            <h3 className="text-xl font-bold text-ink">{custom.name}</h3>
                            <p className="mt-2 flex items-baseline gap-1.5">
                                <span className="text-3xl font-bold tracking-tight text-ink">{custom.price}</span>
                                <span className="text-sm text-muted">{custom.priceSuffix}</span>
                            </p>
                            <p className="mt-2 text-sm text-ink-dim leading-relaxed">{custom.tagline}</p>
                        </div>
                        <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                            {custom.forWho.map((f) => (
                                <li key={f} className="flex items-start gap-2 text-sm text-ink-dim">
                                    <Check className="mt-0.5 w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
                                    {f}
                                </li>
                            ))}
                        </ul>
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
