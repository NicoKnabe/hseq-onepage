export const HERO_DATA = {
  title: "Consultoría QHSE y Cumplimiento Normativo",
  subtitle:
    "Garantice la continuidad de sus faenas y supere los estándares de la industria con una gestión preventiva implacable.",
  primaryButton: {
    text: "Agendar Reunión Técnica",
    href: "#contacto",
  },
  secondaryButton: {
    text: "📥 Descargar Brochure Comercial",
    href: "/brochure.pdf",
  },
};

export const AUTHORITY_DATA = {
  consultant: "Nicolás Knabe",
  title: "Consultoría QHSE Especializada",
  highlights: [
    "Auditor Líder Trinorma",
    "Cambridge University",
    "Experiencia Codelco SIGO",
  ],
  stats: [
    { value: 8, suffix: "+", label: "Años de Experiencia" },
    { value: 3, suffix: "", label: "Normas ISO Dominadas" },
    { value: 100, suffix: "%", label: "Aprobación en Faena" },
  ],
};

export const CHALLENGES_DATA = {
  sectionTitle: "El Desafío Operativo 2026",
  challenges: [
    {
      title: "Decreto Supremo N°44",
      description:
        "Gestión preventiva estricta y actualización constante para evitar paralizaciones.",
    },
    {
      title: "Filtro de Mandantes Mineros",
      description:
        "Superar los altos estándares de acreditación de Codelco, BHP y otros, garantizando ingreso sin demoras.",
    },
    {
      title: "Normas ISO (Trinorma)",
      description:
        "Implementación, auditorías y mantenimiento integral de ISO 9001, 14001 y 45001.",
    },
    {
      title: "Gestión Ambiental y RETC",
      description:
        "Cumplimiento riguroso de exigencias medioambientales, manejo de residuos y declaraciones.",
    },
  ],
};

export const SOLUTIONS_DATA = {
  sectionTitle: "Soluciones Estratégicas",
  sectionSubtitle: "Respuestas concretas frente a los riesgos regulatorios y operativos más críticos de la minería.",
  solutions: [
    {
      id: "acreditacion",
      title: "Acreditación Minera",
      points: ["Carpetas estándar", "Carpetas complejas", "Aprobación garantizada"],
    },
    {
      id: "sistemas",
      title: "Gestión ISO y Medio Ambiente",
      points: [
        "Auditorías Trinorma",
        "Matrices IAAS",
        "Declaraciones RETC",
      ],
    },
    {
      id: "cumplimiento",
      title: "Certeza Operativa",
      points: [
        "Actualización y Cumplimiento DS 44",
        "Matrices IPER",
        "Cero Hallazgos Documentales",
      ],
    },
  ],
};

export const PLANS_DATA = {
  sectionTitle: "Soporte Mensual: Un Sistema Vivo, no Documentos Estáticos",
  plans: [
    {
      name: "Esencial",
      description: "25 hrs/mes - $400.000. Cobertura fundamental para operaciones estándar.",
      features: [
        "Mantenimiento documental preventivo",
        "Soporte remoto horario hábil",
        "Actualizaciones normativas clave",
      ],
      highlighted: false,
      buttonText: "Consultar Plan",
      buttonHref: "#contacto"
    },
    {
      name: "Profesional",
      description: "35 hrs/mes - $750.000. Gestión integral enfocada en el sector industrial.",
      features: [
        "Acreditación Minera continua",
        "Auditorías internas preventivas",
        "Soporte prioritario 24/7",
        "Supervisión de Cumplimiento DS44",
      ],
      highlighted: true,
      buttonText: "Cotizar Profesional",
      buttonHref: "#contacto"
    },
    {
      name: "Enterprise",
      description: "44 hrs/mes - $1.400.000. Solución corporativa para operaciones de alta complejidad.",
      features: [
        "Gestión Trinorma (ISO) completa",
        "Representación directa ante mandantes",
        "Auditorías de tercera parte",
        "Asesoría técnica QHSE exclusiva",
      ],
      highlighted: false,
      buttonText: "Contactar a Ventas",
      buttonHref: "#contacto"
    },
  ],
};

export const CONTACT_DATA = {
  cta: "¿Listo para asegurar la Continuidad Operacional en 2026? Agende una evaluación técnica.",
  phone: "+56 9 5098 9084",
  email: "nknabe@qhse.cl",
  location: "Cobertura Nacional - Todo Chile",
  brochureLink: "/brochure.pdf",
};

export const FOOTER_DATA = {
  description: "Tranquilidad y respaldo frente a mandantes y fiscalización. Gestión QHSE de clase mundial para su empresa.",
  contact: {
    email: "nknabe@qhse.cl",
    location: "Cobertura Nacional - Todo Chile",
  },
  copyright: `© ${new Date().getFullYear()} Nicolás Knabe. Todos los derechos reservados.`,
};
