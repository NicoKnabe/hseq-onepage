import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Digital } from "@/components/Digital";

export const metadata: Metadata = {
  title: "Plataforma QHSE a medida: control documental y registros digitales",
  description:
    "Plataformas a medida para control documental QHSE con versiones, registros de terreno desde el celular, fichas de trabajadores con capacitaciones y EPP, acreditaciones con vencimientos e indicadores automáticos.",
  alternates: { canonical: "https://www.qhse.cl/plataforma" },
};

export default function PlataformaPage() {
  return (
    <PageShell
      eyebrow="Digitalización QHSE"
      title="Deja atrás las planillas"
      subtitle="Una sola herramienta para documentos, registros de terreno, personas y acreditaciones, construida sobre cómo ya trabaja tu empresa."
      ctaService="Plataforma digital"
    >
      <Digital />
    </PageShell>
  );
}
