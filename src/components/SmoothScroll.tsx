"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Anclas antiguas de la home que ahora viven en páginas propias (correos, brochure, rutina de prospección).
const LEGACY_HASHES: Record<string, string> = {
    ds44: "/ds44",
    plataforma: "/plataforma",
    acreditacion: "/servicios#acreditacion",
};

const NAV_OFFSET = -72;

export function SmoothScroll() {
    useEffect(() => {
        const redirectLegacy = () => {
            const target = LEGACY_HASHES[window.location.hash.slice(1)];
            if (window.location.pathname !== "/" || !target) return false;
            const [path, anchor] = target.split("#");
            window.location.replace(path + window.location.search + (anchor ? `#${anchor}` : ""));
            return true;
        };
        if (redirectLegacy()) return;
        window.addEventListener("hashchange", redirectLegacy);
        const hash = window.location.hash.slice(1);

        if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) {
            return () => window.removeEventListener("hashchange", redirectLegacy);
        }

        const lenis = new Lenis({ autoRaf: true, lerp: 0.1 });

        // Enlaces a anclas de la misma página: desplazamiento suave con Lenis en vez del salto de Next.
        const onClick = (e: MouseEvent) => {
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            const a = (e.target as HTMLElement).closest("a");
            if (!a || a.target === "_blank" || !a.hash) return;
            const url = new URL(a.href, window.location.href);
            if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;
            const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
            if (!el) return;
            e.preventDefault();
            // Next sincroniza useSearchParams con pushState: el formulario recibe ?servicio= y ?plan=.
            history.pushState(null, "", url.pathname + url.search + url.hash);
            lenis.scrollTo(el, { offset: NAV_OFFSET });
        };
        document.addEventListener("click", onClick, true);

        if (hash) {
            const el = document.getElementById(hash);
            if (el) setTimeout(() => lenis.scrollTo(el, { offset: NAV_OFFSET, immediate: true }), 50);
        }

        return () => {
            document.removeEventListener("click", onClick, true);
            window.removeEventListener("hashchange", redirectLegacy);
            lenis.destroy();
        };
    }, []);

    return null;
}
