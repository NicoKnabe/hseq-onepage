"use client";

import { motion, useScroll, useTransform, useReducedMotion, useMotionTemplate } from "framer-motion";
import Image from "next/image";

export function GlobalBackground() {
    const { scrollYProgress } = useScroll();
    const shouldReduceMotion = useReducedMotion();

    // Fade out Hero background around 25% to 40% of the page scroll
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4], [1, 1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);
    const heroGrayscale = useTransform(scrollYProgress, [0, 0.15], ["100%", "0%"]);
    const heroFilter = useMotionTemplate`grayscale(${heroGrayscale})`;

    // Fade in Middle background around 20% to 35%, fade out around 60% to 75%
    const middleOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.6, 0.75], [0, 1, 1, 0]);
    const middleY = useTransform(scrollYProgress, [0.2, 0.8], ["-10%", "10%"]);
    const middleScale = useTransform(scrollYProgress, [0.2, 0.8], [1.1, 1.2]);
    const middleGrayscale = useTransform(scrollYProgress, [0.25, 0.45], ["100%", "0%"]);
    const middleFilter = useMotionTemplate`grayscale(${middleGrayscale})`;

    // Fade in Footer background around 65% to 80%
    const footerOpacity = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);
    const footerY = useTransform(scrollYProgress, [0.6, 1], ["10%", "0%"]);
    const footerGrayscale = useTransform(scrollYProgress, [0.75, 0.9], ["100%", "0%"]);
    const footerFilter = useMotionTemplate`grayscale(${footerGrayscale})`;

    return (
        <div className="fixed inset-0 z-[-1] bg-black overflow-hidden pointer-events-none">
            {/* Hero Image */}
            <motion.div
                style={shouldReduceMotion ? { opacity: 1, scale: 1, filter: "grayscale(0%)" } : { opacity: heroOpacity, scale: heroScale, filter: heroFilter }}
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
                style={shouldReduceMotion ? { opacity: 0, y: 0, scale: 1, filter: "grayscale(0%)" } : { opacity: middleOpacity, y: middleY, scale: middleScale, filter: middleFilter }}
                className="absolute inset-0 origin-center"
            >
                <Image
                    src="/middle-bg.webp"
                    alt="Fondo Intermedio"
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Footer Image */}
            <motion.div
                style={shouldReduceMotion ? { opacity: 0, y: 0, filter: "grayscale(0%)" } : { opacity: footerOpacity, y: footerY, filter: footerFilter }}
                className="absolute inset-0 origin-bottom"
            >
                <Image
                    src="/footer-bg.jpeg"
                    alt="Fondo Patagonia"
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Base global overlay to ensure text readability while keeping images visible */}
            <div className="absolute inset-0 bg-black/75" />
        </div>
    );
}
