import Link from "next/link";
import { FOOTER_DATA, NAV_LINKS } from "@/lib/data";
import { SITE, whatsappLink } from "@/lib/site";

export function Footer() {
    return (
        <footer className="border-t border-line bg-white pt-12 pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center px-2.5 h-9 rounded-md bg-brand">
                                <span className="font-extrabold text-lg text-white tracking-tighter">QHSE</span>
                            </span>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-ink/70">Consultoría Especializada</span>
                        </div>
                        <p className="mt-4 text-sm text-muted leading-relaxed max-w-sm">{FOOTER_DATA.description}</p>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-ink/70">Navegación</p>
                        <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                            {[...NAV_LINKS, { label: "Guías", href: "/recursos" }].map((l) => (
                                <li key={l.href}><Link href={l.href} className="text-ink-dim hover:text-accent transition-colors">{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-ink/70">Contacto</p>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-ink-dim hover:text-accent transition-colors">WhatsApp {SITE.phoneDisplay}</a></li>
                            <li><a href={`mailto:${SITE.email}`} className="text-ink-dim hover:text-accent transition-colors">{SITE.email}</a></li>
                            <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-dim hover:text-accent transition-colors">LinkedIn</a></li>
                            <li><a href={SITE.brochure} download="QHSE-Brochure-2026.pdf" className="text-ink-dim hover:text-accent transition-colors">Brochure comercial (PDF)</a></li>
                            <li className="text-muted">{SITE.location}</li>
                            <li className="text-muted">Cobertura nacional</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t border-line pt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-muted">
                    <p>{FOOTER_DATA.copyright}</p>
                    <p>{FOOTER_DATA.legal}</p>
                </div>
            </div>
        </footer>
    );
}
