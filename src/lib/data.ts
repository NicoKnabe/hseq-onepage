// Contenido comercial del sitio. Editar aquí copy, planes, precios y servicios.
// Regla: no incluir cifras, clientes, certificaciones ni resultados sin respaldo verificable.

export const NAV_LINKS = [
  { label: "Servicios", href: "/#servicios" },
  { label: "DS44", href: "/#ds44" },
  { label: "Prevención Externa", href: "/#prevencion-externa" },
  { label: "Acreditación", href: "/#acreditacion" },
  { label: "Recursos", href: "/recursos" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

export const HERO_DATA = {
  eyebrow: "Consultoría QHSE · Chile",
  title: "Prevención y cumplimiento normativo para empresas que necesitan hacer las cosas bien.",
  subtitle:
    "Implementamos y gestionamos la Seguridad y Salud en el Trabajo de tu empresa, desde el diagnóstico y cumplimiento DS44 hasta la gestión preventiva mensual, auditorías y procesos de acreditación.",
  primaryCta: { text: "Solicitar diagnóstico", href: "#contacto" },
  secondaryCta: { text: "Hablar con un especialista" },
  tagline: "Prevención externa · DS44 · Acreditación · SST · ISO · QHSE",
};

export const PROBLEMS_DATA = {
  title: "¿Qué necesitas resolver?",
  subtitle: "Elige el punto de partida que más se parece a tu situación.",
  items: [
    {
      id: "ds44",
      label: "DS44",
      quote: "Necesito saber si mi empresa está cumpliendo.",
      href: "#ds44",
      cta: "Evaluar cumplimiento",
    },
    {
      id: "prevencion",
      label: "Prevención externa",
      quote: "No necesito un prevencionista a tiempo completo, pero sí necesito gestión preventiva.",
      href: "#prevencion-externa",
      cta: "Ver planes",
    },
    {
      id: "documentacion",
      label: "Documentación",
      quote: "Tengo documentación atrasada, incompleta o desordenada.",
      href: "#diagnostico",
      cta: "Ordenar mi documentación",
    },
    {
      id: "acreditacion",
      label: "Acreditación",
      quote: "Necesito preparar mi empresa para acreditar ante un mandante.",
      href: "#acreditacion",
      cta: "Preparar acreditación",
    },
    {
      id: "fiscalizacion",
      label: "Fiscalización",
      quote: "Quiero detectar brechas antes de que aparezca una fiscalización.",
      href: "#diagnostico",
      cta: "Detectar brechas",
    },
    {
      id: "gestion",
      label: "Gestión QHSE",
      quote: "Necesito apoyo permanente en seguridad, salud, medio ambiente y sistemas de gestión.",
      href: "#servicios",
      cta: "Ver servicios",
    },
  ],
};

export const DS44_DATA = {
  eyebrow: "DS 44/2024 · Ministerio del Trabajo",
  title: "¿Tu empresa está realmente preparada para el DS44?",
  subtitle: "Más que tener documentos, una empresa necesita demostrar que su gestión preventiva funciona.",
  context:
    "El Decreto Supremo 44/2024 aprueba el nuevo Reglamento sobre Gestión Preventiva de los Riesgos Laborales, vigente desde el 1 de febrero de 2025. Reemplaza al DS 40 y al DS 54 y exige a las empresas gestionar sus riesgos de forma sistemática: identificarlos, evaluarlos, controlarlos y demostrar que ese control se mantiene en el tiempo. Las obligaciones concretas varían según el tamaño de la empresa, su actividad y su nivel de riesgo.",
  steps: [
    { n: "01", title: "Diagnóstico", desc: "Levantamiento del estado actual de la gestión preventiva." },
    { n: "02", title: "Identificación de brechas", desc: "Comparación contra requisitos aplicables a tu empresa." },
    { n: "03", title: "MIPER", desc: "Matriz de identificación de peligros y evaluación de riesgos." },
    { n: "04", title: "Programa preventivo", desc: "Actividades, responsables y plazos." },
    { n: "05", title: "Documentación", desc: "Procedimientos, reglamento interno, registros." },
    { n: "06", title: "Capacitación", desc: "Información de riesgos laborales (IRL) y formación por cargo." },
    { n: "07", title: "Implementación", desc: "Puesta en marcha de controles en terreno." },
    { n: "08", title: "Seguimiento", desc: "Indicadores, inspecciones y verificación." },
    { n: "09", title: "Mejora continua", desc: "Revisión periódica y ajuste del sistema." },
  ],
  cta: { text: "Evaluar mi cumplimiento", href: "#contacto" },
};

export const DIAGNOSTIC_DATA = {
  eyebrow: "Producto de entrada",
  title: "Diagnóstico Preventivo QHSE",
  subtitle:
    "Antes de contratar una asesoría permanente, identifica qué está funcionando, qué falta y cuáles son las principales brechas de tu empresa.",
  includes: [
    "Revisión documental",
    "Revisión preventiva en terreno",
    "Identificación de brechas",
    "Revisión MIPER",
    "Revisión de registros",
    "Revisión de cumplimiento legal",
    "Informe con hallazgos clasificados",
    "Plan de acción priorizado",
  ],
  // Precio configurable. null = "Valor según tamaño y complejidad de la empresa".
  price: null as string | null,
  priceNote: "Valor según dotación, número de sedes y complejidad de la operación.",
  duration: "Entrega del informe en plazo acordado tras la visita.",
  cta: { text: "Solicitar diagnóstico", href: "#contacto" },
};

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  forWho: string;
  solves: string;
  includes: string[];
  frequency: string;
  modality: string;
  hours: string | null; // Información secundaria. null para ocultar.
  price: string | null; // Editable. null = "Cotizar".
  highlighted: boolean;
  cta: string;
}

export const PLANS_DATA = {
  eyebrow: "Prevención externa",
  title: "Externaliza tu prevención",
  subtitle:
    "No todas las empresas necesitan contratar un prevencionista a tiempo completo. QHSE puede asumir la gestión preventiva que realmente necesita tu organización.",
  note: "Todos los planes incluyen informe mensual de avance y canal directo por WhatsApp y correo en horario hábil. Permanencia mínima sugerida: 3 meses.",
  plans: [
    {
      id: "esencial",
      name: "Esencial",
      tagline: "Para empresas que necesitan mantener su gestión preventiva ordenada.",
      forWho: "Pymes con riesgo bajo o medio que no requieren un prevencionista permanente.",
      solves: "Documentación al día, registros vigentes y respuesta ordenada ante una fiscalización.",
      includes: [
        "Mantención de documentación preventiva",
        "Actualización de registros obligatorios",
        "Revisión de vencimientos",
        "Alertas normativas relevantes",
        "Soporte remoto por WhatsApp y correo",
      ],
      frequency: "Visita mensual",
      modality: "Remoto + terreno",
      hours: null,
      price: null,
      highlighted: false,
      cta: "Consultar plan Esencial",
    },
    {
      id: "profesional",
      name: "Profesional",
      tagline: "Para empresas que necesitan acompañamiento técnico y gestión continua.",
      forWho: "Empresas medianas, contratistas y operaciones con exigencias de mandantes.",
      solves: "Gestión preventiva activa, con seguimiento y capacidad de responder ante clientes y autoridades.",
      includes: [
        "Todo lo del plan Esencial",
        "Programa preventivo y seguimiento de indicadores",
        "Inspecciones planificadas en terreno",
        "Charlas y capacitaciones por cargo",
        "Investigación de incidentes",
        "Apoyo en procesos de acreditación",
      ],
      frequency: "Visitas quincenales",
      modality: "Terreno + remoto",
      hours: null,
      price: null,
      highlighted: true,
      cta: "Cotizar plan Profesional",
    },
    {
      id: "integral",
      name: "Integral",
      tagline: "Para empresas con operaciones más complejas y mayores exigencias.",
      forWho: "Operaciones industriales, multi-sede o con sistemas de gestión ISO.",
      solves: "Gestión QHSE completa: seguridad, salud, medio ambiente y sistema de gestión integrado.",
      includes: [
        "Todo lo del plan Profesional",
        "Gestión de sistema integrado ISO 9001 / 14001 / 45001",
        "Auditorías internas",
        "Representación técnica ante mandantes",
        "Reporte ejecutivo para gerencia",
        "Cobertura multi-sede según alcance",
      ],
      frequency: "Presencia semanal",
      modality: "Terreno + remoto",
      hours: null,
      price: null,
      highlighted: false,
      cta: "Conversar plan Integral",
    },
  ] as Plan[],
};

export const ACCREDITATION_DATA = {
  eyebrow: "Acreditación de contratistas",
  title: "¿Necesitas acreditar tu empresa ante un mandante?",
  subtitle:
    "Te ayudamos a ordenar, preparar y mantener la documentación necesaria para enfrentar procesos de acreditación de contratistas.",
  items: [
    "Control documental",
    "Gestión de vencimientos",
    "Documentación SST",
    "Matrices de riesgo",
    "Procedimientos de trabajo",
    "Registros y evidencias",
    "Antecedentes de trabajadores",
    "Seguimiento del proceso",
    "Preparación ante observaciones",
  ],
  cta: { text: "Revisar mi documentación", href: "#contacto" },
};

export interface Service {
  id: string;
  name: string;
  problem: string;
  includes: string[];
  who: string;
  how: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  short: string;
  services: Service[];
}

export const SERVICES_DATA = {
  eyebrow: "Servicios",
  title: "Soluciones organizadas por lo que necesitas resolver",
  subtitle: "Cada servicio se puede contratar por separado o dentro de un plan mensual.",
  categories: [
    {
      id: "sst",
      name: "Seguridad y Salud",
      short: "Prevención de riesgos, DS44, MIPER, capacitación.",
      services: [
        {
          id: "prevencion",
          name: "Prevención de riesgos",
          problem: "La empresa no tiene gestión preventiva o depende de una persona sin dedicación real.",
          includes: ["Programa preventivo", "Inspecciones", "Charlas", "Registros", "Seguimiento"],
          who: "Cualquier empresa con trabajadores contratados.",
          how: "Diagnóstico inicial, plan de trabajo y ejecución mensual con informe.",
        },
        {
          id: "ds44",
          name: "Implementación DS44",
          problem: "No está claro qué exige el nuevo reglamento ni cómo demostrarlo.",
          includes: ["Diagnóstico de brechas", "MIPER", "Programa preventivo", "Documentación", "Capacitación"],
          who: "Empresas que deben adecuar su gestión al DS 44/2024.",
          how: "Proceso por etapas con entregables verificables en cada hito.",
        },
        {
          id: "miper",
          name: "MIPER",
          problem: "No existe matriz de riesgos o está desactualizada respecto a la operación real.",
          includes: ["Levantamiento en terreno", "Identificación de peligros", "Evaluación", "Controles", "Revisión periódica"],
          who: "Empresas de cualquier tamaño; es la base de la gestión preventiva.",
          how: "Trabajo en terreno con jefaturas y trabajadores, luego validación.",
        },
        {
          id: "inspecciones",
          name: "Inspecciones",
          problem: "Las condiciones de trabajo no se verifican de forma sistemática.",
          includes: ["Pautas de inspección", "Ejecución en terreno", "Informe con hallazgos", "Seguimiento de cierre"],
          who: "Empresas con faenas, bodegas, plantas u obras.",
          how: "Calendario de inspecciones y registro fotográfico con plan de cierre.",
        },
        {
          id: "procedimientos",
          name: "Procedimientos",
          problem: "Las tareas críticas se ejecutan sin instrucciones escritas ni difusión.",
          includes: ["Procedimientos de trabajo seguro", "Instructivos", "Difusión firmada", "Control de versiones"],
          who: "Empresas con tareas de riesgo o exigencias de mandantes.",
          how: "Redacción con el equipo que ejecuta la tarea y validación en terreno.",
        },
        {
          id: "incidentes",
          name: "Investigación de incidentes",
          problem: "Ocurren incidentes y no se determinan causas ni medidas efectivas.",
          includes: ["Investigación", "Análisis de causas", "Informe", "Medidas correctivas", "Seguimiento"],
          who: "Empresas con eventos recientes o exigencia legal de investigar.",
          how: "Metodología estructurada con entrevistas, evidencias y plan de acción.",
        },
        {
          id: "capacitacion",
          name: "Capacitación",
          problem: "Los trabajadores no conocen los riesgos de su cargo ni las medidas de control.",
          includes: ["Información de riesgos laborales (IRL)", "Inducciones", "Cursos específicos", "Evaluación", "Certificado"],
          who: "Todas las empresas; requisito legal para cada trabajador.",
          how: "Relatoría directa, presencial o por videollamada, con registro de asistencia.",
        },
        {
          id: "auditorias-sst",
          name: "Auditorías",
          problem: "No se sabe si el sistema preventivo funciona hasta que llega una fiscalización.",
          includes: ["Plan de auditoría", "Ejecución", "Hallazgos clasificados", "Plan de acción", "Reunión de cierre"],
          who: "Empresas que quieren anticiparse a fiscalizaciones o auditorías de clientes.",
          how: "Ejecutada por Auditor Líder certificado, con informe ejecutivo.",
        },
      ],
    },
    {
      id: "qhse",
      name: "Gestión QHSE",
      short: "ISO 9001, 14001, 45001, sistemas integrados.",
      services: [
        {
          id: "iso9001",
          name: "ISO 9001",
          problem: "Clientes o licitaciones exigen un sistema de gestión de calidad certificado.",
          includes: ["Diagnóstico", "Diseño del sistema", "Documentación", "Implementación", "Acompañamiento a certificación"],
          who: "Empresas que necesitan certificarse o mantener su certificación.",
          how: "Proyecto por hitos con carta Gantt y reuniones de seguimiento.",
        },
        {
          id: "iso14001",
          name: "ISO 14001",
          problem: "La gestión ambiental no está sistematizada ni alineada con requisitos legales.",
          includes: ["Aspectos e impactos", "Requisitos legales", "Controles operacionales", "Auditoría interna"],
          who: "Empresas con impacto ambiental relevante o exigencias de mandantes.",
          how: "Integración con el sistema existente para evitar duplicidad documental.",
        },
        {
          id: "iso45001",
          name: "ISO 45001",
          problem: "Se necesita un sistema de SST reconocido internacionalmente.",
          includes: ["Contexto y liderazgo", "Peligros y riesgos", "Controles", "Desempeño", "Auditoría interna"],
          who: "Empresas que quieren pasar de cumplir la ley a gestionar con estándar.",
          how: "Se construye sobre la gestión DS44 ya implementada.",
        },
        {
          id: "sgi",
          name: "Sistemas integrados",
          problem: "Tres normas gestionadas por separado generan triple carga documental.",
          includes: ["Diseño integrado", "Documentación única", "Matriz de requisitos", "Auditoría integrada"],
          who: "Empresas con más de una norma o que planean certificarse en varias.",
          how: "Reestructuración del sistema existente o implementación desde cero.",
        },
        {
          id: "auditorias-internas",
          name: "Auditorías internas",
          problem: "La norma exige auditorías internas y no hay auditor independiente disponible.",
          includes: ["Programa anual", "Ejecución", "Informe", "No conformidades", "Seguimiento"],
          who: "Empresas certificadas o en proceso de certificación.",
          how: "Auditor Líder externo, independiente de la operación.",
        },
        {
          id: "mejora",
          name: "Mejora continua",
          problem: "El sistema existe en papel pero no genera mejoras reales.",
          includes: ["Indicadores", "Revisión por la dirección", "Acciones correctivas", "Reporte ejecutivo"],
          who: "Empresas con sistema implementado que quieren resultados medibles.",
          how: "Ciclo mensual de revisión con la gerencia.",
        },
      ],
    },
    {
      id: "acreditacion",
      name: "Acreditación",
      short: "Preparación y control documental ante mandantes.",
      services: [
        {
          id: "prep-documental",
          name: "Preparación documental",
          problem: "El mandante exige documentación que la empresa no tiene o no encuentra.",
          includes: ["Levantamiento de requisitos", "Elaboración de documentos faltantes", "Carpeta ordenada"],
          who: "Contratistas y subcontratistas que ingresan a faenas de terceros.",
          how: "Checklist según el estándar del mandante y trabajo contra plazos.",
        },
        {
          id: "control-documental",
          name: "Control documental",
          problem: "Los documentos vencen y nadie lo detecta hasta que bloquean el ingreso.",
          includes: ["Matriz de vencimientos", "Alertas", "Renovaciones", "Antecedentes de trabajadores"],
          who: "Empresas con personal en faenas de mandantes.",
          how: "Control mensual dentro del plan de prevención externa.",
        },
        {
          id: "proceso-acreditacion",
          name: "Procesos de acreditación",
          problem: "La empresa recibe observaciones y no sabe cómo responderlas.",
          includes: ["Carga documental", "Respuesta a observaciones", "Coordinación con el mandante"],
          who: "Contratistas en proceso de acreditación o reacreditación.",
          how: "Acompañamiento hasta el cierre del proceso.",
        },
        {
          id: "seguimiento-acreditacion",
          name: "Seguimiento",
          problem: "Tras acreditar, la documentación se desordena y el proceso se repite cada año.",
          includes: ["Calendario de renovaciones", "Revisión periódica", "Reporte de estado"],
          who: "Empresas con contratos de largo plazo con mandantes.",
          how: "Seguimiento continuo dentro del plan mensual.",
        },
      ],
    },
    {
      id: "ambiente",
      name: "Medio Ambiente",
      short: "Aspectos ambientales, residuos, RETC.",
      services: [
        {
          id: "aspectos",
          name: "Matriz de aspectos e impactos ambientales",
          problem: "No están identificados los impactos ambientales de la operación.",
          includes: ["Levantamiento", "Evaluación de significancia", "Controles", "Requisitos legales asociados"],
          who: "Empresas con exigencias ambientales de clientes o autoridades.",
          how: "Trabajo en terreno y validación con la operación.",
        },
        {
          id: "residuos",
          name: "Gestión de residuos",
          problem: "Los residuos se manejan sin procedimiento ni trazabilidad.",
          includes: ["Procedimiento de manejo", "Registros", "Declaraciones aplicables"],
          who: "Empresas que generan residuos peligrosos o industriales.",
          how: "Diagnóstico, procedimiento y apoyo en declaraciones.",
        },
        {
          id: "retc",
          name: "Declaraciones RETC",
          problem: "La empresa debe declarar y no sabe qué, cuándo ni cómo.",
          includes: ["Identificación de obligaciones", "Preparación de información", "Apoyo en declaración"],
          who: "Empresas obligadas a reportar en el RETC.",
          how: "Calendario de declaraciones y apoyo en cada ventana.",
        },
      ],
    },
    {
      id: "estudios",
      name: "Estudios especializados",
      short: "Requisitos legales, emergencias, reportería.",
      services: [
        {
          id: "requisitos-legales",
          name: "Matriz de requisitos legales",
          problem: "No se sabe qué normativa aplica a la empresa ni cómo se está cumpliendo.",
          includes: ["Identificación de requisitos", "Evaluación de cumplimiento", "Plan de cierre"],
          who: "Empresas con sistema de gestión o exigencias de mandantes.",
          how: "Matriz por sede y actualización periódica.",
        },
        {
          id: "emergencias",
          name: "Plan de emergencia y evacuación",
          problem: "No existe plan de emergencia o no está adaptado a la sede.",
          includes: ["Plan por sede", "Vías de evacuación", "Roles", "Simulacro"],
          who: "Toda empresa con instalaciones y personal.",
          how: "Levantamiento en terreno y simulacro documentado.",
        },
        {
          id: "reporteria",
          name: "Reportería e indicadores",
          problem: "La gerencia no tiene visibilidad del desempeño QHSE.",
          includes: ["Indicadores", "Tablero", "Reporte ejecutivo mensual"],
          who: "Gerencias que necesitan tomar decisiones con datos.",
          how: "Definición de indicadores y reporte periódico.",
        },
      ],
    },
  ] as ServiceCategory[],
};

export const INDUSTRY_DATA = {
  eyebrow: "Minería e industria",
  title: "Capacidad para operaciones de alta exigencia",
  subtitle:
    "Experiencia en entornos donde el estándar lo fija el mandante: minería, industria, operaciones multinacionales y procesos de acreditación exigentes.",
  items: [
    "Acreditación de contratistas",
    "Gestión documental",
    "Estándares de mandantes",
    "Sistemas ISO",
    "Auditorías",
    "Gestión preventiva",
    "Medio ambiente",
    "Cumplimiento legal",
  ],
  note: "La misma metodología se adapta a la escala de cada empresa. Una pyme no paga por complejidad que no necesita.",
};

export const TRUST_DATA = {
  eyebrow: "Confianza",
  title: "Respaldo técnico verificable",
  facts: [
    { label: "Experiencia", value: "Más de 8 años en industrias exigentes" },
    { label: "Certificación", value: "Auditor Líder ISO 9001 / 14001 / 45001, Bureau Veritas" },
    { label: "Formación", value: "Dirección de Proyectos Complejos, University of Cambridge" },
    { label: "Sectores", value: "Minería, industria, ascensores, servicios, multinacionales" },
    { label: "Cobertura", value: "Chile, con experiencia en Perú, Colombia y Estados Unidos" },
    { label: "Metodología", value: "Diagnóstico, plan por hitos, entregables auditables, seguimiento" },
  ],
  clientsTitle: "Empresas que han confiado en QHSE",
  clients: [
    { name: "FireRent", href: "https://www.firerent.cl", logo: null },
    { name: "Astra Tech Ascensores", href: "https://www.astratechascensores.cl", logo: "/clients/astratech.png" },
    { name: "Knabe Group", href: "https://knabegroup.cl", logo: "/clients/knabe.svg" },
    { name: "ASI Group", href: "https://asi-group.com", logo: "/clients/asi-group.png" },
  ],
};


export const ABOUT_DATA = {
  eyebrow: "Nosotros",
  title: "Quién está detrás de QHSE",
  name: "Nicolás Knabe Alcaino",
  role: "Consultor QHSE · Auditor Líder ISO 9001 / 14001 / 45001",
  intro:
    "QHSE Consultoría Especializada es una consultora independiente dirigida por Nicolás Knabe Alcaino, con base en Viña del Mar y trabajo en todo Chile. La propuesta es simple: que cada empresa tenga una gestión preventiva que funcione en terreno, no solo en carpetas.",
  blocks: [
    {
      title: "Experiencia",
      text: "Más de 8 años en prevención de riesgos y sistemas de gestión en minería, industria, ascensores y operaciones multinacionales en Chile, Perú, Colombia y Estados Unidos.",
    },
    {
      title: "Formación",
      text: "Auditor Líder ISO 9001, 14001 y 45001 certificado por Bureau Veritas. Formación en Dirección de Proyectos Complejos por la University of Cambridge.",
    },
    {
      title: "Metodología",
      text: "Diagnóstico primero. Luego un plan por hitos con entregables que puedan auditarse, capacitación de las personas que ejecutan y seguimiento hasta que el sistema se sostiene solo.",
    },
    {
      title: "Forma de trabajo",
      text: "Trato directo con el consultor, sin intermediarios. Canal por WhatsApp y correo en horario hábil, visitas a terreno programadas e informe mensual de avance.",
    },
    {
      title: "Cobertura",
      text: "Visitas a terreno en Región de Valparaíso y Región Metropolitana. Otras regiones según proyecto. Trabajo remoto para revisión documental, capacitación y seguimiento.",
    },
  ],
};

export const CONTACT_DATA = {
  eyebrow: "Contacto",
  title: "Cuéntanos qué necesitas resolver",
  subtitle: "Respondemos en horario hábil. La primera conversación no tiene costo.",
  services: [
    "DS44",
    "Prevención externa",
    "Diagnóstico",
    "Acreditación",
    "Auditoría",
    "MIPER",
    "Capacitación",
    "ISO",
    "Medio ambiente",
    "Otro",
  ],
  regions: [
    "Arica y Parinacota",
    "Tarapacá",
    "Antofagasta",
    "Atacama",
    "Coquimbo",
    "Valparaíso",
    "Metropolitana",
    "O'Higgins",
    "Maule",
    "Ñuble",
    "Biobío",
    "La Araucanía",
    "Los Ríos",
    "Los Lagos",
    "Aysén",
    "Magallanes",
  ],
  workerRanges: ["1 a 10", "11 a 25", "26 a 50", "51 a 100", "101 a 250", "Más de 250"],
  cta: "Solicitar evaluación",
};

export const FOOTER_DATA = {
  description:
    "Consultoría en prevención de riesgos, cumplimiento DS44, acreditación de contratistas y sistemas de gestión ISO para empresas en Chile.",
  legal: "Servicios profesionales prestados por Nicolás Knabe Alcaino. Los valores se cotizan según el alcance de cada empresa.",
  copyright: `© ${new Date().getFullYear()} QHSE Consultoría Especializada. Todos los derechos reservados.`,
};
