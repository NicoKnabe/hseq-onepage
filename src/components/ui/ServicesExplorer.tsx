"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { ServiceCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ServicesExplorer({ categories }: { categories: ServiceCategory[] }) {
    const [activeCat, setActiveCat] = useState(categories[0].id);
    const [open, setOpen] = useState<string | null>(null);
    const category = categories.find((c) => c.id === activeCat) ?? categories[0];

    return (
        <div className="mt-10 md:mt-14">
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap" role="tablist" aria-label="Categorías de servicios">
                {categories.map((c) => (
                    <button
                        key={c.id}
                        role="tab"
                        aria-selected={c.id === activeCat}
                        onClick={() => { setActiveCat(c.id); setOpen(null); }}
                        className={cn(
                            "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                            c.id === activeCat ? "border-accent bg-accent text-white" : "border-line text-ink-dim hover:border-accent/50 hover:text-ink"
                        )}
                    >
                        {c.name}
                    </button>
                ))}
            </div>

            <p className="mt-4 text-sm text-muted">{category.short}</p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
                {category.services.map((s) => {
                    const isOpen = open === s.id;
                    return (
                        <div key={s.id} className={cn("card", isOpen && "border-accent/50")}>
                            <button
                                onClick={() => setOpen(isOpen ? null : s.id)}
                                aria-expanded={isOpen}
                                className="flex w-full items-start justify-between gap-4 p-5 text-left"
                            >
                                <div>
                                    <h3 className="text-base font-semibold text-ink">{s.name}</h3>
                                    <p className="mt-1 text-sm text-muted leading-relaxed">{s.problem}</p>
                                </div>
                                <ChevronDown className={cn("mt-1 w-5 h-5 shrink-0 text-accent transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
                            </button>
                            {isOpen && (
                                <div className="border-t border-line px-5 pb-5 pt-4 space-y-4 text-sm">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-muted mb-1.5">Qué incluye</p>
                                        <ul className="flex flex-wrap gap-2">
                                            {s.includes.map((i) => (
                                                <li key={i} className="rounded-md border border-line bg-white px-2.5 py-1 text-ink-dim">{i}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-muted mb-1">Quién lo necesita</p>
                                        <p className="text-ink-dim">{s.who}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-muted mb-1">Cómo se trabaja</p>
                                        <p className="text-ink-dim">{s.how}</p>
                                    </div>
                                    <Link href={`/?servicio=${encodeURIComponent(s.name)}#contacto`} className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-strong">
                                        Consultar por {s.name}
                                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
