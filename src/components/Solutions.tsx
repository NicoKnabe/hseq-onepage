import { SOLUTIONS_DATA } from "@/lib/data";
import { RevealWrapper } from "./ui/RevealWrapper";
import { SolutionsTabs } from "./ui/SolutionsTabs";

export function Solutions() {
    return (
        <section id="servicios" className="min-h-[90vh] flex flex-col justify-center py-24 md:py-32 bg-transparent relative border-b border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <RevealWrapper>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">
                            {SOLUTIONS_DATA.sectionTitle}
                        </h2>
                    </RevealWrapper>
                    <RevealWrapper delay={0.1}>
                        <p className="text-lg text-white-dim max-w-2xl mx-auto drop-shadow-sm">
                            {SOLUTIONS_DATA.sectionSubtitle}
                        </p>
                    </RevealWrapper>
                </div>

                <SolutionsTabs />
            </div>
        </section>
    );
}

