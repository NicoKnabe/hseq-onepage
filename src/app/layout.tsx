import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qhse.cl"),
  title: "Consultoría QHSE y Prevención de Riesgos | Nicolás Knabe",
  description: "Asegure la continuidad operativa de su empresa. Especialista en acreditación minera (SIGO), auditorías trinorma ISO y actualización DS 44 en todo Chile.",
  keywords: ["Consultoría QHSE", "Prevención de Riesgos", "Acreditación minera", "SIGO", "Auditorías trinorma ISO", "Software QHSE", "SGSST", "Evaluación de riesgos"],
  alternates: {
    canonical: "https://www.qhse.cl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Consultoría QHSE y Prevención de Riesgos | Nicolás Knabe",
    description: "Asegure la continuidad operativa de su empresa. Especialista en acreditación minera (SIGO), auditorías trinorma ISO y actualización DS 44 en todo Chile.",
    type: "website",
    locale: "es_CL",
    url: "https://www.qhse.cl",
    siteName: "Consultoría QHSE - Nicolás Knabe",
    images: [
      {
        url: "/hero-bg.jpeg",
        width: 1200,
        height: 630,
        alt: "Consultoría QHSE y Prevención de Riesgos - Nicolás Knabe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría QHSE y Prevención de Riesgos | Nicolás Knabe",
    description: "Asegure la continuidad operativa de su empresa. Especialista en acreditación minera (SIGO), auditorías trinorma ISO y actualización DS 44 en todo Chile.",
    images: ["/hero-bg.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Nicolás Knabe - Consultoría QHSE",
  "url": "https://www.qhse.cl",
  "image": "https://www.qhse.cl/hero-bg.jpeg",
  "description": "Consultoría especializada en QHSE, prevención de riesgos, acreditación minera y auditorías trinorma ISO en Chile.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CL",
  },
  "areaServed": {
    "@type": "Country",
    "name": "Chile",
  },
  "priceRange": "$$",
  "telephone": "+56950989084",
  "email": "nknabe@qhse.cl",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+56950989084",
    "contactType": "customer service",
    "areaServed": "CL",
    "availableLanguage": "Spanish",
  },
  "serviceType": [
    "Consultoría QHSE",
    "Prevención de Riesgos",
    "Acreditación minera SIGO",
    "Auditorías trinorma ISO",
    "Implementación DS 44/2024",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}

