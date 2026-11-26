"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<string | null>(null);
    const pathname = usePathname();
    const { scrollY, scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

    // Se esconde al bajar y vuelve al subir. Umbral de 8 px para ignorar el rebote del scroll en iOS
    // y solo cambiar el estado cuando realmente cambia (evita renders en cada cuadro).
    const anchor = useRef(0);
    const flags = useRef({ hidden: false, scrolled: false });
    useMotionValueEvent(scrollY, "change", (y) => {
        const isScrolled = y > 24;
        if (isScrolled !== flags.current.scrolled) {
            flags.current.scrolled = isScrolled;
            setScrolled(isScrolled);
        }
        const delta = y - anchor.current;
        if (Math.abs(delta) < 8) return;
        anchor.current = y;
        const shouldHide = y > 160 && delta > 0 && !isOpen;
        if (shouldHide !== flags.current.hidden) {
            flags.current.hidden = shouldHide;
            setHidden(shouldHide);
        }
    });

    // Sección activa en la home.
    useEffect(() => {
        if (pathname !== "/") return;
        const ids = NAV_LINKS.map((l) => l.href.split("#")[1]).filter(Boolean);
        const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-45% 0px -50% 0px" }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [pathname]);

    return (
        <m.header
            initial={false}
            animate={{ y: hidden ? "-100%" : "0%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 will-change-transform transition-[background-color,border-color] duration-300",
                scrolled || isOpen ? "bg-white/95 lg:bg-white/85 lg:backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 h-16 md:h-[72px] flex items-center justify-between gap-4">
                <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="QHSE, inicio">
                    <span className="flex items-center justify-center px-2.5 h-9 rounded-md bg-brand">
                        <span className="font-extrabold text-lg text-white tracking-tighter">QHSE</span>
                    </span>
                    <span className="hidden sm:block text-[11px] font-semibold uppercase tracking-wider text-ink/70">
                        Consultoría Especializada
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
                    {NAV_LINKS.map((link) => {
                        const id = link.href.split("#")[1];
                        const isActive = pathname === "/" && active === id;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={isActive ? "true" : undefined}
                                className={cn(
                                    "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300",
                                    isActive ? "bg-surface-2 text-ink" : "text-ink-dim hover:text-accent"
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink-dim hover:text-[#1DA851] transition-colors inline-flex items-center gap-2">
                        <WhatsAppIcon className="w-4 h-4" />
                        WhatsApp
                    </a>
                    <Link href="/?servicio=Diagn%C3%B3stico#contacto" className="btn-primary !py-2.5 !px-5 !text-sm">
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

            <m.div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-accent" style={{ scaleX: progress }} />

            {isOpen && (
                <div className="lg:hidden bg-white border-t border-line">
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
                            <Link href="/?servicio=Diagn%C3%B3stico#contacto" onClick={() => setIsOpen(false)} className="btn-primary !py-3 !text-sm">
                                Solicitar diagnóstico
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </m.header>
    );
}
