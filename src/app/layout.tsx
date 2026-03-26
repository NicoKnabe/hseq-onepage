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
  openGraph: {
    title: "Consultoría QHSE y Prevención de Riesgos | Nicolás Knabe",
    description: "Asegure la continuidad operativa de su empresa. Especialista en acreditación minera (SIGO), auditorías trinorma ISO y actualización DS 44 en todo Chile.",
    type: "website",
    locale: "es_CL",
    url: "https://www.qhse.cl",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría QHSE y Prevención de Riesgos | Nicolás Knabe",
    description: "Asegure la continuidad operativa de su empresa. Especialista en acreditación minera (SIGO), auditorías trinorma ISO y actualización DS 44 en todo Chile.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Nicolás Knabe - Consultoría QHSE",
  "url": "https://www.qhse.cl",
  "description": "Consultoría especializada en QHSE, prevención de riesgos, acreditación minera y auditorías trinorma ISO en Chile.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CL",
  },
  "areaServed": "Chile",
  "telephone": "+56950989084",
  "email": "nknabe@qhse.cl",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+56950989084",
    "contactType": "customer service",
  },
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
        className={`group ${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}

