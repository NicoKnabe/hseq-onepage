"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function GlowCard({ children, className, index = 0 }: { children: ReactNode; className?: string; index?: number }) {
    const shouldReduceMotion = useReducedMotion();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Strict requirement: Optimize with useSpring
    const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

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
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            className={`group relative overflow-hidden ${className || ""}`}
        >
            {/* Optimized Glow Effect using useSpring and useMotionTemplate */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            350px circle at ${smoothX}px ${smoothY}px,
                            rgba(212, 175, 55, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />
            {children}
        </motion.div>
    );
}
