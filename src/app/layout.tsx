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
  title: "Consultoría QHSE y Prevención de Riesgos | Nicolás Knabe",
  description: "Asegure la continuidad operativa de su empresa. Especialista en acreditación minera (SIGO), auditorías trinorma ISO y actualización DS 44 en todo Chile.",
  openGraph: {
    title: "Consultoría QHSE y Prevención de Riesgos | Nicolás Knabe",
    description: "Asegure la continuidad operativa de su empresa. Especialista en acreditación minera (SIGO), auditorías trinorma ISO y actualización DS 44 en todo Chile.",
    type: "website",
    locale: "es_CL"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
