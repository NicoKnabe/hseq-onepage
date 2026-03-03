"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
    href: string;
    children: ReactNode;
    className?: string;
    download?: boolean;
    primary?: boolean;
}

export function AnimatedButton({ href, children, className, download, primary }: AnimatedButtonProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.a
            href={href}
            download={download}
            whileHover={shouldReduceMotion ? {} : (primary ? { scale: 1.05 } : { scale: 1.05, backgroundColor: "rgba(212,175,55,0.1)" })}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className={className}
        >
            {children}
        </motion.a>
    );
}
