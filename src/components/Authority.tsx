import { AUTHORITY_DATA } from "@/lib/data";
import { BadgeCheck } from "lucide-react";
import { RevealWrapper } from "./ui/RevealWrapper";
import { StatItem } from "./ui/StatItem";
import { GlowCard } from "./ui/GlowCard";

export function Authority() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center py-20 md:py-32 bg-transparent relative border-y border-white/5 overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <RevealWrapper className="text-center max-w-4xl mx-auto mb-16 md:mb-24 space-y-6">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                        {AUTHORITY_DATA.consultant}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full my-8" />
                    <p className="text-gold text-2xl md:text-3xl font-light tracking-wide">
                        {AUTHORITY_DATA.title}
                    </p>
                </RevealWrapper>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
                    {AUTHORITY_DATA.highlights.map((highlight, index) => (
                        <GlowCard key={index} index={index} className="bg-black-card/60 backdrop-blur-sm border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gold/20 transition-colors">
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center mb-6 border border-gold/10 shadow-inner">
                                    <BadgeCheck className="w-8 h-8 text-gold" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-light text-white tracking-wide">{highlight}</h3>
                            </div>
                        </GlowCard>
                    ))}
                </div>

                <RevealWrapper delay={0.3} className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {AUTHORITY_DATA.stats.map((stat, i) => (
                        <div key={i} className="col-span-1">
                            <StatItem stat={stat} />
                        </div>
                    ))}
                </RevealWrapper>
            </div>
        </section>
    );
}

