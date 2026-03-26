import { HERO_DATA } from "@/lib/data";
import { ArrowRight, Download } from "lucide-react";
import { RevealWrapper } from "./ui/RevealWrapper";
import { AnimatedButton } from "./ui/AnimatedButton";

export function Hero() {
    return (
        <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-transparent pt-24 pb-16 md:pt-32 md:pb-20">
            {/* Background Glow */}
            <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_50%)]" />
            <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.04),transparent_50%)]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <RevealWrapper
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mb-8 inline-block"
                    >
                        <span className="text-gold tracking-widest uppercase text-sm font-bold border border-gold/30 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                            Consultoría QHSE Especializada
                        </span>
                    </RevealWrapper>

                    <RevealWrapper
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8 drop-shadow-lg"
                    >
                        <h1>
                            {HERO_DATA.title}
                        </h1>
                    </RevealWrapper>

                    <RevealWrapper
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        delay={0.3}
                        className="mb-12 max-w-3xl mx-auto"
                    >
                        <p className="text-lg md:text-xl text-white/95 leading-relaxed bg-black/20 backdrop-blur-sm border border-white/10 p-5 md:p-6 rounded-2xl shadow-lg">
                            {HERO_DATA.subtitle}
                        </p>
                    </RevealWrapper>

                    <RevealWrapper
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        delay={0.5}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <AnimatedButton
                            href={HERO_DATA.primaryButton.href}
                            primary
                            className="relative overflow-hidden inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-black bg-gradient-to-r from-gold-dark to-gold rounded-lg shadow-[0_8px_25px_rgba(212,175,55,0.4)] transition-colors group"
                        >
                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 flex items-center">
                                {HERO_DATA.primaryButton.text}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-label="Flecha derecha" />
                            </span>
                        </AnimatedButton>

                        <AnimatedButton
                            href={HERO_DATA.secondaryButton.href}
                            download
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-gold border border-gold/30 rounded-lg transition-colors duration-300"
                        >
                            <Download className="mr-2 w-5 h-5" aria-label="Icono de descarga" />
                            {HERO_DATA.secondaryButton.text}
                        </AnimatedButton>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    );
}

