import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { WhatsAppIcon } from "./ui/WhatsAppIcon";
import { RevealWrapper } from "./ui/RevealWrapper";
import { whatsappLink } from "@/lib/site";

// Estructura común de las páginas de detalle: encabezado con h1, contenido y cierre con contacto.
export function PageShell({
    eyebrow,
    title,
    subtitle,
    ctaService,
    children,
}: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaService: string;
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main>
                <header className="hero-grid border-b border-line pt-32 pb-14 md:pt-40 md:pb-20">
                    <RevealWrapper className="container mx-auto max-w-4xl px-4 md:px-6">
                        <Link href="/" className="text-sm font-medium text-muted hover:text-accent">← Inicio</Link>
                        <p className="eyebrow mt-6 mb-4">{eyebrow}</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ink">{title}</h1>
                        <p className="mt-5 max-w-2xl text-lg md:text-xl text-ink-dim leading-relaxed">{subtitle}</p>
                    </RevealWrapper>
                </header>

                {children}

                <section className="border-t border-line py-16 md:py-24">
                    <RevealWrapper className="container mx-auto max-w-3xl px-4 text-center md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">¿Conversamos sobre tu empresa?</h2>
                        <p className="mt-4 text-base md:text-lg text-ink-dim">La primera conversación no tiene costo. Respondemos en horario hábil.</p>
                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <Link href={`/?servicio=${encodeURIComponent(ctaService)}#contacto`} className="btn-primary group">
                                Solicitar evaluación
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                            </Link>
                            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                <WhatsAppIcon className="h-5 w-5 text-[#1DA851]" />
                                Hablar por WhatsApp
                            </a>
                        </div>
                    </RevealWrapper>
                </section>
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}
