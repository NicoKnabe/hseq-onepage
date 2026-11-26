"use client";

import { LazyMotion, domAnimation } from "framer-motion";

// Carga solo las funciones de animación que usa el sitio (entradas, scroll, gestos y salidas).
// strict: falla en desarrollo si algún componente usa `motion.*` en vez de `m.*`.
export function MotionProvider({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domAnimation} strict>
            {children}
        </LazyMotion>
    );
}
