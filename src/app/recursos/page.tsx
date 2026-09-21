import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Centro de conocimiento QHSE: DS44, MIPER, prevención y acreditación",
  description:
    "Guías prácticas sobre DS44, MIPER, prevención externa, fiscalización, acreditación de contratistas, ISO 45001 y gestión ambiental para empresas en Chile.",
  alternates: { canonical: "https://www.qhse.cl/recursos" },
};

export default function RecursosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            as="h1"
            eyebrow="Recursos"
            title="Centro de conocimiento QHSE"
            subtitle="Artículos técnicos, escritos con criterio y sin promesas: lo que una empresa necesita saber antes de decidir."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a) => (
              <Link key={a.slug} href={`/recursos/${a.slug}`} className="card group flex h-full flex-col p-6">
                <span className="eyebrow">{a.category}</span>
                <h2 className="mt-2 text-lg font-semibold leading-snug text-ink group-hover:text-accent transition-colors">{a.title}</h2>
                <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{a.description}</p>
                <span className="mt-4 text-xs text-muted">{a.readingMinutes} min de lectura</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
