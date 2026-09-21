// Datos de contacto y configuración global del sitio.
// Todo valor comercial (precios, horas) es editable desde src/lib/data.ts.

export const SITE = {
  name: "QHSE Consultoría Especializada",
  url: "https://www.qhse.cl",
  consultant: "Nicolás Knabe Alcaino",
  phoneDisplay: "+56 9 5098 9084",
  phoneE164: "56950989084",
  email: "nknabe@qhse.cl",
  linkedin: "https://www.linkedin.com/in/nicolasknabeqhse",
  location: "Viña del Mar, Chile",
  coverage: "Cobertura nacional. Visitas a terreno en Región de Valparaíso y Región Metropolitana; otras regiones según proyecto.",
  brochure: "/brochure.pdf",
};

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, quiero consultar por un diagnóstico preventivo para mi empresa.";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${SITE.phoneE164}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${SITE.email}?${params.toString()}`;
}
