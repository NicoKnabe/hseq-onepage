"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-line">
            <div className="container mx-auto px-4 md:px-6 h-16 md:h-[72px] flex items-center justify-between gap-4">
                <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="QHSE, inicio">
                    <span className="flex items-center justify-center px-2.5 h-9 rounded-md bg-brand">
                        <span className="font-extrabold text-lg text-white tracking-tighter">QHSE</span>
                    </span>
                    <span className="hidden sm:block text-[11px] font-semibold uppercase tracking-wider text-ink/70">
                        Consultoría Especializada
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-6" aria-label="Principal">
                    {NAV_LINKS.map((link) => (
                        <Link key={link.href} href={link.href} className="text-sm font-medium text-ink-dim hover:text-accent transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink-dim hover:text-[#1DA851] transition-colors inline-flex items-center gap-2">
                        <WhatsAppIcon className="w-4 h-4" />
                        WhatsApp
                    </a>
                    <Link href="/#contacto" className="btn-primary !py-2.5 !px-5 !text-sm">
                        Solicitar diagnóstico
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-ink hover:text-accent transition-colors"
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {isOpen && (
                <div className="lg:hidden bg-white backdrop-blur-lg border-t border-line">
                    <nav className="container mx-auto px-4 py-4 flex flex-col" aria-label="Principal móvil">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-ink-dim hover:text-accent transition-colors py-3 border-b border-line"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="grid grid-cols-2 gap-3 mt-4">
                            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp !py-3 !text-sm" onClick={() => setIsOpen(false)}>
                                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                            </a>
                            <Link href="/#contacto" onClick={() => setIsOpen(false)} className="btn-primary !py-3 !text-sm">
                                Solicitar diagnóstico
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
