"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { CHALLENGES_DATA } from "@/lib/data";
import { AlertCircle } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

function ChallengeCard({ challenge }: { challenge: typeof CHALLENGES_DATA.challenges[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            variants={cardVariants}
            onMouseMove={handleMouseMove}
            className="group relative bg-black-card border border-gold/10 rounded-2xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10 overflow-hidden"
        >
            {/* Glow Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            350px circle at ${mouseX}px ${mouseY}px,
                            rgba(212, 175, 55, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 w-14 h-14 bg-gold/5 rounded-xl flex items-center justify-center mb-6 border border-gold/10 transition-colors duration-300 group-hover:bg-gold/15 group-hover:border-gold/30">
                <AlertCircle className="w-7 h-7 text-white-dim transition-colors duration-300 group-hover:text-gold" aria-label="Icono alerta de desafío" />
            </div>

            <h3 className="relative z-10 text-xl font-bold text-gold mb-4 drop-shadow-sm">
                {challenge.title}
            </h3>

            <p className="relative z-10 text-white-dim leading-relaxed text-base">
                {challenge.description}
            </p>
        </motion.div>
    );
}

export function Challenges() {
    return (
        <section className="py-16 md:py-32 bg-transparent relative border-b border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_60%)] z-0" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md"
                    >
                        {CHALLENGES_DATA.sectionTitle}
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-gold-dark to-gold mx-auto rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {CHALLENGES_DATA.challenges.map((challenge, index) => (
                        <ChallengeCard key={index} challenge={challenge} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
