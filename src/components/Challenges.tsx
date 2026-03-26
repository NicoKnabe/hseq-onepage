import { CHALLENGES_DATA } from "@/lib/data";
import { AlertCircle } from "lucide-react";
import { GlowCard } from "./ui/GlowCard";
import { RevealWrapper } from "./ui/RevealWrapper";

function ChallengeCard({ challenge, index }: { challenge: typeof CHALLENGES_DATA.challenges[0]; index: number }) {
    return (
        <GlowCard
            index={index}
            className="bg-black-card border border-gold/10 p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10"
        >
            <div className="relative z-10 w-14 h-14 bg-gold/5 rounded-xl flex items-center justify-center mb-6 border border-gold/10 transition-colors duration-300 group-hover:bg-gold/15 group-hover:border-gold/30">
                <AlertCircle className="w-7 h-7 text-white-dim transition-colors duration-300 group-hover:text-gold" aria-label="Icono alerta de desafío" />
            </div>

            <h3 className="relative z-10 text-xl font-bold text-gold mb-4 drop-shadow-sm">
                {challenge.title}
            </h3>

            <p className="relative z-10 text-white-dim leading-relaxed text-base">
                {challenge.description}
            </p>
        </GlowCard>
    );
}

export function Challenges() {
    return (
        <section id="retos" className="min-h-[90vh] flex flex-col justify-center py-24 md:py-32 bg-transparent border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_60%)] z-0 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <RevealWrapper>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
                            {CHALLENGES_DATA.sectionTitle}
                        </h2>
                    </RevealWrapper>
                    <RevealWrapper delay={0.2}>
                        <div className="w-20 h-1 bg-gradient-to-r from-gold-dark to-gold mx-auto rounded-full" />
                    </RevealWrapper>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CHALLENGES_DATA.challenges.map((challenge, index) => (
                        <ChallengeCard key={index} challenge={challenge} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

