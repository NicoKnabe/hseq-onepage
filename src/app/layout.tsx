import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow_Condensed } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
// Solo para el wordmark de FireRent en la sección de clientes.
const barlow = Barlow_Condensed({ variable: "--font-barlow", subsets: ["latin"], weight: "900", style: "italic" });

const TITLE = "Prevención de Riesgos para PYMES y Empresas | Prevencionista Externo, DS44 y Acreditación | QHSE Chile";
const DESCRIPTION =
  "Prevencionista externo para PYMES y empresas en Chile. Diagnóstico preventivo desde $99.000 y planes mensuales de gestión preventiva desde $249.000: cumplimiento DS44, matriz de riesgos, acreditación de contratistas, auditorías e ISO. Atención directa con un profesional.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: "%s | QHSE Consultoría Especializada",
  },
  description: DESCRIPTION,
  keywords: [
    "prevención de riesgos Chile",
    "prevención de riesgos para empresas",
    "prevención de riesgos PYME",
    "prevencionista externo",
    "prevención de riesgos externa",
    "asesoría prevención de riesgos",
    "cumplimiento DS44",
    "acreditación de empresas",
    "asesoría QHSE",
    "auditoría ISO",
    "gestión preventiva",
    "DS44",
    "implementación DS44",
    "asesoría DS44",
    "MIPER",
    "acreditación de contratistas",
    "acreditación minera",
    "consultoría QHSE",
    "ISO 45001 Chile",
    "seguridad y salud en el trabajo",
  ],
  alternates: { canonical: SITE.url },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "es_CL",
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "QHSE Consultoría Especializada: prevención de riesgos en terreno" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/og-image.jpg`,
  description: DESCRIPTION,
  founder: { "@type": "Person", name: SITE.consultant, sameAs: SITE.linkedin },
  address: { "@type": "PostalAddress", addressLocality: "Viña del Mar", addressRegion: "Valparaíso", addressCountry: "CL" },
  areaServed: { "@type": "Country", name: "Chile" },
  telephone: `+${SITE.phoneE164}`,
  email: SITE.email,
  sameAs: [SITE.linkedin],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${SITE.phoneE164}`,
    contactType: "sales",
    areaServed: "CL",
    availableLanguage: "Spanish",
  },
  serviceType: [
    "Prevención de riesgos",
    "Prevención externa",
    "Implementación DS 44/2024",
    "MIPER",
    "Acreditación de contratistas",
    "Auditorías internas ISO",
    "ISO 9001, ISO 14001, ISO 45001",
    "Gestión ambiental",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${barlow.variable} antialiased min-h-screen bg-white text-ink`}>
        {children}
      </body>
    </html>
  );
}
