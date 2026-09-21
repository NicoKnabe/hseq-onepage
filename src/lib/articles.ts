// Centro de conocimiento QHSE. Artículos orientados a SEO y captación.
// Contenido factual y prudente: no afirmar obligaciones universales cuando dependen del tamaño o actividad.

export interface ArticleSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO
  readingMinutes: number;
  keywords: string[];
  sections: ArticleSection[];
  relatedService: string; // ancla en home
}

export const ARTICLES: Article[] = [
  {
    slug: "ds44-que-exige-a-tu-empresa",
    title: "DS 44/2024: qué exige realmente a tu empresa",
    description:
      "Guía práctica del Decreto Supremo 44 del Ministerio del Trabajo: qué cambió respecto al DS 40 y DS 54, qué debe demostrar una empresa y por dónde empezar.",
    category: "DS44",
    date: "2026-09-21",
    readingMinutes: 6,
    keywords: ["DS44", "implementación DS44", "asesoría DS44", "gestión preventiva"],
    relatedService: "/#ds44",
    sections: [
      {
        paragraphs: [
          "El Decreto Supremo 44 de 2024 del Ministerio del Trabajo y Previsión Social aprueba el Reglamento sobre Gestión Preventiva de los Riesgos Laborales. Entró en vigencia el 1 de febrero de 2025 y reemplaza a dos reglamentos que llevaban décadas operando: el DS 40 (prevención de riesgos profesionales) y el DS 54 (comités paritarios).",
          "El cambio de fondo no es documental. El DS 44 pasa de un enfoque de cumplimiento por piezas a un enfoque de gestión: la empresa debe identificar sus peligros, evaluar sus riesgos, implementar controles y ser capaz de demostrar que ese ciclo funciona y se mantiene en el tiempo.",
        ],
      },
      {
        heading: "Qué cambia en la práctica",
        list: [
          "La Información de los Riesgos Laborales (IRL, artículo 15 del DS 44) reemplaza a la antigua obligación de informar (ODI) del DS 40. Cada trabajador debe recibir, antes de iniciar sus labores, información sobre los riesgos de su cargo, las medidas preventivas y los métodos de trabajo correctos, determinados conforme a la matriz de riesgos y al programa preventivo, y debe quedar registro de ello.",
          "La gestión preventiva se estructura en torno a la identificación de peligros y evaluación de riesgos (MIPER), un programa de trabajo preventivo y el seguimiento de su ejecución.",
          "Se refuerza la participación de los trabajadores y el rol de los comités paritarios en las faenas donde corresponde constituirlos.",
          "La empresa debe poder mostrar evidencia: registros, matrices, capacitaciones, inspecciones y acciones correctivas.",
        ],
      },
      {
        heading: "Las obligaciones no son iguales para todas las empresas",
        paragraphs: [
          "Un punto que genera confusión: no todos los instrumentos son exigibles a todas las empresas por igual. Varias obligaciones dependen del número de trabajadores, del tipo de actividad y del nivel de riesgo. Por ejemplo, el comité paritario se constituye en faenas con más de 25 trabajadores y el departamento de prevención de riesgos aplica a empresas de mayor dotación.",
          "Por eso, antes de comprar un paquete de documentos, conviene determinar qué aplica realmente a tu empresa. Sobredocumentar cuesta dinero y no mejora la seguridad; subdocumentar expone a sanciones.",
        ],
      },
      {
        heading: "Por dónde empezar",
        list: [
          "Diagnóstico: revisar qué existe, qué está vigente y qué falta según el tamaño y actividad de la empresa.",
          "MIPER: levantar en terreno los peligros reales de cada puesto de trabajo.",
          "Programa preventivo: definir actividades, responsables y plazos.",
          "Información y capacitación: cumplir la IRL y formar por cargo, con registro.",
          "Seguimiento: inspecciones, indicadores y revisión periódica.",
        ],
      },
    ],
  },
  {
    slug: "miper-matriz-de-riesgos-como-hacerla-bien",
    title: "MIPER: cómo hacer una matriz de riesgos que sirva en terreno",
    description:
      "Qué es la matriz de identificación de peligros y evaluación de riesgos, por qué es la base de la gestión preventiva y los errores más comunes al elaborarla.",
    category: "MIPER",
    date: "2026-09-21",
    readingMinutes: 5,
    keywords: ["MIPER", "matriz de riesgos", "identificación de peligros", "evaluación de riesgos"],
    relatedService: "/#servicios",
    sections: [
      {
        paragraphs: [
          "La MIPER (matriz de identificación de peligros y evaluación de riesgos) es el documento que conecta la realidad operativa de una empresa con su sistema preventivo. De ella se desprenden los controles, los procedimientos, las capacitaciones y las inspecciones. Si la matriz está mal hecha, todo lo que viene después queda mal enfocado.",
        ],
      },
      {
        heading: "Qué debe contener",
        list: [
          "Procesos, actividades y tareas de cada área, incluyendo tareas no rutinarias y de emergencia.",
          "Peligros asociados a cada tarea: mecánicos, eléctricos, químicos, ergonómicos, psicosociales, entre otros.",
          "Evaluación del riesgo según una metodología definida (probabilidad y consecuencia, u otra equivalente).",
          "Controles existentes y controles propuestos, con responsable y plazo.",
          "Fecha de elaboración, participantes y periodicidad de revisión.",
        ],
      },
      {
        heading: "Errores frecuentes",
        list: [
          "Copiar una matriz genérica de otra empresa o de internet. La fiscalización y los mandantes lo detectan de inmediato.",
          "Elaborarla desde la oficina sin recorrer los puestos de trabajo ni conversar con quienes ejecutan las tareas.",
          "No actualizarla cuando cambian los procesos, equipos, insumos o instalaciones.",
          "Evaluar todo como riesgo bajo para no tener que implementar controles.",
          "No conectarla con la IRL: la información de riesgos que recibe cada trabajador debe salir de la matriz y del programa preventivo.",
        ],
      },
      {
        heading: "Cómo la trabajamos",
        paragraphs: [
          "La matriz se levanta en terreno con jefaturas y trabajadores, se valida con la gerencia y se entrega junto con el plan de controles priorizado. Luego se revisa en cada visita del plan mensual para mantenerla alineada con la operación real.",
        ],
      },
    ],
  },
  {
    slug: "prevencion-externa-cuando-conviene",
    title: "Prevención externa: cuándo conviene y cuándo no",
    description:
      "Cuándo una empresa puede externalizar su gestión preventiva, qué debe incluir un servicio de prevención externa y cómo compararlo con contratar un prevencionista interno.",
    category: "Prevención",
    date: "2026-09-21",
    readingMinutes: 5,
    keywords: ["prevención externa", "asesoría prevención de riesgos", "prevencionista externo", "prevención de riesgos para empresas"],
    relatedService: "/#prevencion-externa",
    sections: [
      {
        paragraphs: [
          "Muchas empresas pequeñas y medianas enfrentan el mismo dilema: la ley y los clientes exigen gestión preventiva, pero la carga de trabajo no justifica un prevencionista a jornada completa. La prevención externa resuelve exactamente ese escenario.",
        ],
      },
      {
        heading: "Cuándo conviene",
        list: [
          "La empresa tiene una dotación que no exige, por ley, un departamento de prevención propio.",
          "El riesgo de la actividad es bajo o medio y la carga preventiva es mensual, no diaria.",
          "Se necesita un profesional con experiencia que un sueldo de jornada completa no permitiría contratar.",
          "Existen exigencias de mandantes o clientes que requieren documentación al día y capacidad de respuesta.",
        ],
      },
      {
        heading: "Cuándo no conviene",
        list: [
          "Operaciones con riesgo alto y actividad continua que requieren presencia diaria en terreno.",
          "Empresas cuya dotación obliga a contar con departamento de prevención de riesgos propio. En ese caso la prevención externa puede complementar, no reemplazar.",
        ],
      },
      {
        heading: "Qué debe incluir un buen servicio",
        list: [
          "Visitas a terreno programadas, no solo trabajo remoto.",
          "Mantención de MIPER, programa preventivo, procedimientos y registros.",
          "Capacitaciones e inducciones con registro.",
          "Inspecciones con informe y seguimiento de cierre.",
          "Un informe mensual que la gerencia pueda leer en cinco minutos.",
          "Un canal directo para resolver dudas cuando aparecen.",
        ],
      },
    ],
  },
  {
    slug: "fiscalizacion-sst-como-prepararse",
    title: "Fiscalización en seguridad y salud: cómo prepararse antes de que llegue",
    description:
      "Quién fiscaliza la seguridad y salud en el trabajo en Chile, qué suele revisarse y cómo detectar brechas antes de una visita inspectiva.",
    category: "Fiscalización",
    date: "2026-09-21",
    readingMinutes: 5,
    keywords: ["fiscalización Dirección del Trabajo", "fiscalización seguridad laboral", "multas prevención de riesgos"],
    relatedService: "/#diagnostico",
    sections: [
      {
        paragraphs: [
          "En Chile, la seguridad y salud en el trabajo es fiscalizada principalmente por la Dirección del Trabajo y por las Secretarías Regionales Ministeriales de Salud, cada una en su ámbito. A ello se suman las auditorías y visitas de los organismos administradores de la Ley 16.744 y las revisiones de los propios mandantes.",
          "Una fiscalización rara vez avisa. La mejor preparación es tener la gestión preventiva funcionando y la evidencia ordenada, no armar carpetas de urgencia.",
        ],
      },
      {
        heading: "Qué suele revisarse",
        list: [
          "Reglamento interno de higiene y seguridad, cuando corresponde, y su entrega a los trabajadores.",
          "Información de los Riesgos Laborales (IRL) con registro por trabajador.",
          "Matriz de identificación de peligros y evaluación de riesgos.",
          "Programa de trabajo preventivo y su ejecución.",
          "Comité paritario, en faenas donde corresponde constituirlo.",
          "Elementos de protección personal: entrega, registro y uso.",
          "Condiciones de las instalaciones, señalización, vías de evacuación y plan de emergencia.",
          "Exámenes ocupacionales y vigilancia de salud según exposición.",
        ],
      },
      {
        heading: "Cómo anticiparse",
        paragraphs: [
          "Un diagnóstico preventivo externo replica la lógica de una fiscalización: revisa documentos, recorre las instalaciones, entrevista y contrasta con los requisitos aplicables a la empresa. La diferencia es que el resultado es un plan de acción, no una multa.",
        ],
      },
    ],
  },
  {
    slug: "acreditacion-de-contratistas-guia",
    title: "Acreditación de contratistas: guía para no quedar fuera de la faena",
    description:
      "Qué revisan los mandantes en un proceso de acreditación de contratistas, por qué las empresas reciben observaciones y cómo mantener la documentación bajo control.",
    category: "Acreditación",
    date: "2026-09-21",
    readingMinutes: 6,
    keywords: ["acreditación de contratistas", "acreditación minera", "documentación contratistas", "mandante"],
    relatedService: "/#acreditacion",
    sections: [
      {
        paragraphs: [
          "Cuando una empresa presta servicios dentro de la faena de otra, el mandante exige demostrar que cumple con la normativa laboral y de seguridad. Ese proceso, la acreditación de contratistas, es habitual en minería, energía, industria y construcción, y suele gestionarse a través de plataformas o áreas de contratos del mandante.",
        ],
      },
      {
        heading: "Qué se revisa habitualmente",
        list: [
          "Antecedentes de la empresa: constitución, vigencia, certificados de cumplimiento laboral y previsional.",
          "Documentación de seguridad y salud: reglamento interno, MIPER, programa preventivo, procedimientos de trabajo seguro, plan de emergencia.",
          "Antecedentes de cada trabajador: contrato, registro de IRL, exámenes, capacitaciones, entrega de EPP.",
          "Documentación de equipos y vehículos, cuando aplica.",
          "Cumplimiento de estándares propios del mandante, que pueden ser más exigentes que la ley.",
        ],
      },
      {
        heading: "Por qué las empresas reciben observaciones",
        list: [
          "Documentos vencidos que nadie detectó a tiempo.",
          "Procedimientos genéricos que no describen la tarea real.",
          "Diferencias entre la dotación declarada y la documentación cargada.",
          "Formatos que no cumplen el estándar específico del mandante.",
        ],
      },
      {
        heading: "Cómo mantener el control",
        paragraphs: [
          "La acreditación no es un evento, es un proceso continuo. Una matriz de vencimientos, un responsable claro y una revisión mensual evitan que cada renovación se convierta en una emergencia. QHSE apoya la preparación, la respuesta a observaciones y el seguimiento, sin prometer resultados que dependen del mandante.",
        ],
      },
    ],
  },
  {
    slug: "iso-45001-para-que-sirve",
    title: "ISO 45001: para qué sirve y qué relación tiene con el DS44",
    description:
      "Qué aporta ISO 45001 a una empresa que ya cumple la ley, cuándo tiene sentido certificarse y cómo se integra con ISO 9001 e ISO 14001.",
    category: "ISO",
    date: "2026-09-21",
    readingMinutes: 5,
    keywords: ["ISO 45001 Chile", "certificación ISO 45001", "sistema de gestión SST", "sistema integrado"],
    relatedService: "/#servicios",
    sections: [
      {
        paragraphs: [
          "ISO 45001 es la norma internacional para sistemas de gestión de seguridad y salud en el trabajo. No reemplaza la legislación chilena: la incluye como requisito y agrega una estructura de gestión reconocida en cualquier país.",
        ],
      },
      {
        heading: "Relación con el DS44",
        paragraphs: [
          "El DS 44 exige a las empresas gestionar preventivamente sus riesgos. ISO 45001 exige lo mismo, con un nivel de sistematización mayor: contexto de la organización, liderazgo, planificación, apoyo, operación, evaluación del desempeño y mejora. Una empresa que implementó bien el DS 44 tiene gran parte del camino avanzado hacia ISO 45001.",
        ],
      },
      {
        heading: "Cuándo conviene certificarse",
        list: [
          "Clientes, licitaciones o mandantes lo exigen o lo valoran en la evaluación.",
          "La empresa opera en varios países o para casas matrices internacionales.",
          "Se busca ordenar la gestión con un marco reconocido y auditado por un tercero.",
        ],
      },
      {
        heading: "Sistemas integrados",
        paragraphs: [
          "ISO 9001 (calidad), ISO 14001 (medio ambiente) e ISO 45001 comparten la misma estructura de alto nivel. Implementarlas como un sistema integrado reduce la carga documental, unifica auditorías y evita que cada norma viva en una carpeta distinta.",
        ],
      },
    ],
  },
  {
    slug: "obligaciones-basicas-sst-empleador-chile",
    title: "Seguridad y salud en el trabajo: obligaciones básicas de todo empleador en Chile",
    description:
      "Resumen de las obligaciones generales en seguridad y salud que aplican a cualquier empresa con trabajadores en Chile y cuáles dependen del tamaño o actividad.",
    category: "SST",
    date: "2026-09-21",
    readingMinutes: 5,
    keywords: ["seguridad y salud en el trabajo", "obligaciones del empleador", "Ley 16.744", "prevención de riesgos Chile"],
    relatedService: "/#diagnostico",
    sections: [
      {
        paragraphs: [
          "El deber general de protección del empleador está en el artículo 184 del Código del Trabajo: tomar todas las medidas necesarias para proteger eficazmente la vida y salud de los trabajadores. La Ley 16.744 y sus reglamentos, hoy encabezados por el DS 44/2024, detallan cómo se cumple ese deber.",
        ],
      },
      {
        heading: "Obligaciones que aplican de forma general",
        list: [
          "Estar adherido a un organismo administrador del seguro de la Ley 16.744 (mutualidad o ISL).",
          "Informar a cada trabajador, antes de iniciar sus labores, sobre los riesgos de su trabajo, las medidas preventivas y los métodos de trabajo correctos (IRL, artículo 15 del DS 44), con registro.",
          "Identificar peligros y evaluar riesgos de las actividades de la empresa.",
          "Proporcionar elementos de protección personal adecuados sin costo para el trabajador.",
          "Mantener condiciones sanitarias y ambientales básicas en los lugares de trabajo.",
          "Investigar y denunciar accidentes del trabajo y enfermedades profesionales.",
        ],
      },
      {
        heading: "Obligaciones que dependen del tamaño o la actividad",
        list: [
          "Comité paritario de higiene y seguridad: en faenas con más de 25 trabajadores.",
          "Departamento de prevención de riesgos: en empresas de mayor dotación según la normativa.",
          "Exámenes y vigilancia de salud ocupacional: según agentes de exposición presentes.",
          "Requisitos sectoriales adicionales: minería, construcción, transporte, sustancias peligrosas, entre otros.",
        ],
      },
      {
        heading: "El punto de partida",
        paragraphs: [
          "Determinar qué aplica a tu empresa y qué evidencia existe es el primer paso. Un diagnóstico preventivo entrega esa foto y un plan de acción con prioridades.",
        ],
      },
    ],
  },
  {
    slug: "gestion-ambiental-empresa-por-donde-empezar",
    title: "Gestión ambiental en la empresa: por dónde empezar",
    description:
      "Cómo identificar los aspectos ambientales de una operación, qué obligaciones suelen aplicar y cómo integrar la gestión ambiental con seguridad y calidad.",
    category: "Medio ambiente",
    date: "2026-09-21",
    readingMinutes: 4,
    keywords: ["gestión ambiental", "matriz de aspectos e impactos", "RETC", "ISO 14001"],
    relatedService: "/#servicios",
    sections: [
      {
        paragraphs: [
          "La gestión ambiental suele quedar postergada en empresas pequeñas y medianas hasta que un cliente, un mandante o una autoridad la exige. Empezar ordenadamente evita hacerlo bajo presión.",
        ],
      },
      {
        heading: "Primer paso: aspectos e impactos",
        paragraphs: [
          "Una matriz de aspectos e impactos ambientales identifica qué elementos de la operación interactúan con el ambiente: residuos, emisiones, consumo de agua y energía, uso de sustancias, ruido. A cada aspecto se le evalúa la significancia y se definen controles.",
        ],
      },
      {
        heading: "Obligaciones frecuentes",
        list: [
          "Manejo y disposición de residuos según su clasificación, con trazabilidad.",
          "Declaraciones en el Registro de Emisiones y Transferencias de Contaminantes (RETC), cuando la empresa está obligada a reportar.",
          "Almacenamiento y manejo de sustancias peligrosas según la normativa aplicable.",
          "Requisitos específicos de mandantes en faenas mineras o industriales.",
        ],
      },
      {
        heading: "Integración con el resto del sistema",
        paragraphs: [
          "Si la empresa ya gestiona seguridad y calidad, la gestión ambiental se integra sobre la misma estructura: requisitos legales, controles operacionales, registros y auditoría. Es el camino natural hacia ISO 14001 si en algún momento se requiere.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
