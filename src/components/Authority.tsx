import { AUTHORITY_DATA } from "@/lib/data";
import { BadgeCheck } from "lucide-react";
import { RevealWrapper } from "./ui/RevealWrapper";
import { StatItem } from "./ui/StatItem";

export function Authority() {
    return (
        <section className="py-16 md:py-24 bg-transparent relative border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    <RevealWrapper className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            {AUTHORITY_DATA.consultant} <br />
                            <span className="text-gold text-2xl md:text-3xl mt-2 block font-normal tracking-wide">{AUTHORITY_DATA.title}</span>
                        </h2>

                        <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full mb-6" />

                        <ul className="space-y-4 pt-4">
                            {AUTHORITY_DATA.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-center text-white-dim text-lg">
                                    <BadgeCheck className="w-6 h-6 text-gold mr-4 shrink-0" aria-label="Check de Autoridad" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </RevealWrapper>

                    <RevealWrapper delay={0.15} className="grid grid-cols-2 gap-4 lg:gap-6">
                        {AUTHORITY_DATA.stats.map((stat, i) => (
                            <div key={i} className={i === 2 ? "col-span-2" : "col-span-1"}>
                                <StatItem stat={stat} />
                            </div>
                        ))}
                    </RevealWrapper>

                </div>
            </div>
        </section>
    );
}

