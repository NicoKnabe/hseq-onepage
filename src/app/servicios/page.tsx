import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Accreditation } from "@/components/Accreditation";
import { ServicesExplorer } from "@/components/ui/ServicesExplorer";
import { SERVICES_DATA } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios QHSE: prevención de riesgos, DS44, MIPER, ISO y acreditación",
  description:
    "26 servicios de prevención de riesgos, implementación DS44, MIPER, capacitación, auditorías, ISO 9001, 14001 y 45001, medio ambiente, acreditación de contratistas y digitalización QHSE para empresas en Chile.",
  alternates: { canonical: "https://www.qhse.cl/servicios" },
};

export default function ServiciosPage() {
  return (
    <PageShell eyebrow={SERVICES_DATA.eyebrow} title={SERVICES_DATA.title} subtitle={SERVICES_DATA.subtitle} ctaService="Otro">
      <section className="bg-surface py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <ServicesExplorer categories={SERVICES_DATA.categories} />
        </div>
      </section>
      <Accreditation />
    </PageShell>
  );
}
