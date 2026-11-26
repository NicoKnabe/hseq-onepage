"use client";

import { motion, useReducedMotion } from "framer-motion";

export type IllustrationKind = "shield" | "folder" | "audit" | "phone";

// Ilustraciones de línea propias de QHSE: trazo grafito, detalle dorado, se dibujan al entrar en pantalla.
const ART: Record<IllustrationKind, { ink: string[]; gold: string[]; fill?: string }> = {
    shield: {
        fill: "M160 46 L218 66 V116 C218 150 192 172 160 184 C128 172 102 150 102 116 V66 Z",
        ink: [
            "M160 46 L218 66 V116 C218 150 192 172 160 184 C128 172 102 150 102 116 V66 Z",
            "M160 62 L204 77 V116 C204 141 185 158 160 168",
            "M60 206 H260",
            "M74 206 V186 H96 V206 M230 206 V176 H250 V206",
            "M240 176 V160 M236 160 H244",
        ],
        gold: ["M134 116 L152 134 L188 96"],
    },
    folder: {
        fill: "M84 70 H136 L150 84 H236 V188 H84 Z",
        ink: [
            "M84 70 H136 L150 84 H236 V188 H84 Z",
            "M84 100 H236",
            "M104 122 H186 M104 142 H200 M104 162 H170",
            "M60 206 H260",
            "M100 54 H150 L160 64",
        ],
        gold: ["M214 168 m-24 0 a24 24 0 1 0 48 0 a24 24 0 1 0 -48 0", "M203 168 L211 176 L226 160"],
    },
    audit: {
        fill: "M146 108 m-50 0 a50 50 0 1 0 100 0 a50 50 0 1 0 -100 0",
        ink: [
            "M146 108 m-50 0 a50 50 0 1 0 100 0 a50 50 0 1 0 -100 0",
            "M182 144 L226 188",
            "M218 180 L234 196",
            "M60 206 H120 M200 206 H260",
            "M118 82 A40 40 0 0 1 150 68",
        ],
        gold: ["M124 108 L140 124 L172 92"],
    },
    phone: {
        fill: "M118 34 H202 A14 14 0 0 1 216 48 V190 A14 14 0 0 1 202 204 H118 A14 14 0 0 1 104 190 V48 A14 14 0 0 1 118 34 Z",
        ink: [
            "M118 34 H202 A14 14 0 0 1 216 48 V190 A14 14 0 0 1 202 204 H118 A14 14 0 0 1 104 190 V48 A14 14 0 0 1 118 34 Z",
            "M148 46 H172",
            "M122 70 H136 M146 70 H198 M122 92 H136 M146 92 H190 M122 114 H136 M146 114 H178",
            "M60 206 H96 M224 206 H260",
            "M152 192 H168",
        ],
        gold: ["M124 170 L146 148 L162 158 L196 130", "M186 130 H196 V140"],
    },
};

export function Illustration({ kind, className }: { kind: IllustrationKind; className?: string }) {
    const reduce = useReducedMotion();
    const art = ART[kind];
    const draw = (delay: number) =>
        reduce
            ? {}
            : {
                  initial: { pathLength: 0, opacity: 0 },
                  whileInView: { pathLength: 1, opacity: 1 },
                  viewport: { once: true, amount: 0.4 },
                  transition: { pathLength: { duration: 1.4, delay, ease: "easeInOut" as const }, opacity: { duration: 0.2, delay } },
              };

    return (
        <svg viewBox="0 0 320 240" className={className} aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {art.fill && (
                <motion.path
                    d={art.fill}
                    fill="#f3ecd6"
                    stroke="none"
                    {...(reduce
                        ? {}
                        : {
                              initial: { opacity: 0 },
                              whileInView: { opacity: 0.7 },
                              viewport: { once: true, amount: 0.4 },
                              transition: { duration: 0.8, delay: 0.9 },
                          })}
                    opacity={reduce ? 0.7 : undefined}
                />
            )}
            {art.ink.map((d, i) => (
                <motion.path key={d} d={d} stroke="#2f3b48" strokeWidth={2.4} {...draw(i * 0.12)} />
            ))}
            {art.gold.map((d, i) => (
                <motion.path key={d} d={d} stroke="#8a6d12" strokeWidth={3} {...draw(0.9 + i * 0.2)} />
            ))}
        </svg>
    );
}
