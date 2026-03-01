"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function GlobalBackground() {
    const { scrollYProgress } = useScroll();

    // Fade out Hero background around 25% to 40% of the page scroll
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4], [1, 1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);

    // Fade in Middle background around 20% to 35%, fade out around 60% to 75%
    const middleOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.6, 0.75], [0, 1, 1, 0]);
    const middleY = useTransform(scrollYProgress, [0.2, 0.8], ["-10%", "10%"]);
    const middleScale = useTransform(scrollYProgress, [0.2, 0.8], [1.1, 1.2]);

    // Fade in Footer background around 65% to 80%
    const footerOpacity = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);
    const footerY = useTransform(scrollYProgress, [0.6, 1], ["10%", "0%"]);

    return (
        <div className="fixed inset-0 z-[-1] bg-black overflow-hidden pointer-events-none">
            {/* Hero Image */}
            <motion.div
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="absolute inset-0 origin-center"
            >
                <Image
                    src="/hero-bg.jpeg"
                    alt="Fondo Los Andes"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            {/* Middle Image */}
            <motion.div
                style={{ opacity: middleOpacity, y: middleY, scale: middleScale }}
                className="absolute inset-0 origin-center"
            >
                <Image
                    src="/middle-bg.jpeg"
                    alt="Fondo Intermedio"
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Footer Image */}
            <motion.div
                style={{ opacity: footerOpacity, y: footerY }}
                className="absolute inset-0 origin-bottom"
            >
                <Image
                    src="/footer-bg.jpeg"
                    alt="Fondo Patagonia"
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Base global black overlay to ensure text readability is AAA everywhere */}
            <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/60" />
        </div>
    );
}
