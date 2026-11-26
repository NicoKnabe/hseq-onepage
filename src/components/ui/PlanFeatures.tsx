"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const VISIBLE = 5;

function Item({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-2.5 text-sm text-ink-dim">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            {text}
        </li>
    );
}

// Lista de un plan: cinco puntos a la vista y el resto desplegable.
export function PlanFeatures({ items }: { items: string[] }) {
    const [open, setOpen] = useState(false);
    const id = useId();
    const rest = items.slice(VISIBLE);

    return (
        <div className="mt-6 flex-1 border-t border-line pt-5">
            <ul className="space-y-2.5">
                {items.slice(0, VISIBLE).map((f) => (
                    <Item key={f} text={f} />
                ))}
            </ul>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.ul
                        id={id}
                        key="rest"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-2.5 overflow-hidden pt-2.5"
                    >
                        {rest.map((f) => (
                            <Item key={f} text={f} />
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
            {rest.length > 0 && (
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls={id}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-strong"
                >
                    {open ? "Ver menos" : `Ver todo lo incluido (+${rest.length})`}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} aria-hidden="true" />
                </button>
            )}
        </div>
    );
}
