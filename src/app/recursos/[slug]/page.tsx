import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ARTICLES, getArticle } from "@/lib/articles";
import { SITE, whatsappLink } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `${SITE.url}/recursos/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.description, type: "article", url, publishedTime: article.date, locale: "es_CL" },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    inLanguage: "es-CL",
    author: { "@type": "Person", name: SITE.consultant, url: SITE.linkedin },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/recursos/${article.slug}`,
  };

  const others = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="pt-28 md:pt-36 pb-16 md:pb-24">
        <article className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Link href="/recursos" className="inline-flex items-center gap-2 text-sm text-gray hover:text-gold transition-colors">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Centro de conocimiento
          </Link>
          <p className="eyebrow mt-6">{article.category}</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">{article.title}</h1>
          <p className="mt-4 text-lg text-white-dim leading-relaxed">{article.description}</p>
          <p className="mt-4 text-xs text-gray">
            {SITE.consultant} · {new Date(`${article.date}T12:00:00`).toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" })} · {article.readingMinutes} min de lectura
          </p>

          <div className="mt-10 space-y-8">
            {article.sections.map((s, i) => (
              <section key={i}>
                {s.heading && <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">{s.heading}</h2>}
                {s.paragraphs?.map((p, j) => (
                  <p key={j} className="text-base text-white-dim leading-relaxed mb-4">{p}</p>
                ))}
                {s.list && (
                  <ul className="space-y-2.5">
                    {s.list.map((li, j) => (
                      <li key={j} className="flex gap-3 text-base text-white-dim leading-relaxed">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-gold/40 bg-gradient-to-br from-graphite to-black p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">¿Necesitas implementar esto en tu empresa?</h2>
            <p className="mt-2 text-white-dim">Cuéntanos tu situación y te decimos por dónde empezar. La primera conversación no tiene costo.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="w-5 h-5" /> Hablar con QHSE
              </a>
              <Link href={article.relatedService} className="btn-secondary">
                Ver servicio relacionado <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray">Seguir leyendo</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/recursos/${o.slug}`} className="card block h-full p-4 group">
                    <span className="eyebrow">{o.category}</span>
                    <p className="mt-1 text-sm font-semibold text-white group-hover:text-gold transition-colors leading-snug">{o.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
