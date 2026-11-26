import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { DS44 } from "@/components/DS44";
import { Diagnostic } from "@/components/Diagnostic";

export const metadata: Metadata = {
  title: "DS 44/2024: implementación y diagnóstico de cumplimiento para tu empresa",
  description:
    "Qué exige el DS 44/2024 del Ministerio del Trabajo, vigente desde el 1 de febrero de 2025, y cómo implementarlo por etapas: diagnóstico, MIPER, programa preventivo, IRL, documentación y seguimiento. Diagnóstico desde $99.000.",
  alternates: { canonical: "https://www.qhse.cl/ds44" },
};

export default function DS44Page() {
  return (
    <PageShell
      eyebrow="DS 44/2024 · Ministerio del Trabajo"
      title="Cómo preparar tu empresa para el DS 44"
      subtitle="El nuevo reglamento exige demostrar que la gestión preventiva funciona. Te mostramos el camino por etapas y por dónde partir."
      ctaService="DS44"
    >
      <DS44 />
      <Diagnostic />
    </PageShell>
  );
}
