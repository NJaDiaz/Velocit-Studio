
export const site = {
  name: "Velocit Studio",
  tagline: "Desarrollo de sitios y aplicaciones web",
  description:
    "Velocit Studio diseña y desarrolla sitios web y aplicaciones a medida, rápidos, modernos y optimizados para convertir. Sitios corporativos, e-commerce y software a medida.",
  url: "https://www.velocitstudio.com",
  locale: "es-AR",

  whatsappNumber: "5492664617753",
  whatsappDefaultMessage:
    "¡Hola Velocit Studio! Quiero cotizar un sitio web o una app.",

  email: "velocitstudio@gmail.com", 
  phoneDisplay: "+54 9 266 461-7753",
  location: "San Luis, Argentina",

  social: {
    instagram: "https://instagram.com/velocitstudio", 
    linkedin: "https://linkedin.com/company/velocitstudio",
    github: "https://github.com/velocitstudio",
  },
} as const;

export function buildWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message ?? site.whatsappDefaultMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}


export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Stripe",
  "Vercel",
  "WordPress",
  "Shopify",
];


export type Service = {
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    title: "Sitios institucionales",
    description:
      "Sitios corporativos rápidos y bien estructurados que comunican confianza y convierten visitas en clientes.",
    tags: ["SEO técnico", "CMS editable", "Multi-idioma"],
  },
  {
    title: "Landing pages",
    description:
      "Páginas de aterrizaje enfocadas en una sola acción, pensadas para campañas de ads y lanzamientos.",
    tags: ["A/B testing", "Alta conversión", "Carga < 1s"],
  },
  {
    title: "E-commerce",
    description:
      "Tiendas online con checkout optimizado, pagos locales e internacionales, y panel de gestión simple.",
    tags: ["Mercado Pago", "Stripe", "Stock & envíos"],
  },
  {
    title: "Aplicaciones web a medida",
    description:
      "Plataformas y paneles internos hechos a medida para automatizar procesos y escalar tu operación.",
    tags: ["Dashboards", "APIs propias", "Multi-usuario"],
  },
  {
    title: "Migración & performance",
    description:
      "Migramos sitios lentos o desactualizados a stacks modernos, mejorando velocidad y posicionamiento.",
    tags: ["Core Web Vitals", "Sin downtime", "+SEO"],
  },
  {
    title: "Mantenimiento & soporte",
    description:
      "Monitoreo, actualizaciones, backups y soporte continuo para que tu sitio nunca se detenga.",
    tags: ["Uptime 24/7", "Backups", "Soporte directo"],
  },
];


export type ProcessStep = {
  time: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    time: "Día 0",
    title: "Kickoff & relevamiento",
    description:
      "Llamada de 30 minutos para entender tu negocio, objetivos y referencias visuales.",
  },
  {
    time: "Día 1–3",
    title: "Propuesta & diseño",
    description:
      "Armamos la arquitectura del sitio y un diseño navegable para que apruebes antes de programar.",
  },
  {
    time: "Día 4–10",
    title: "Desarrollo",
    description:
      "Construimos el sitio con código limpio, contenido real y todas las integraciones acordadas.",
  },
  {
    time: "Día 11–12",
    title: "QA & velocidad",
    description:
      "Probamos en todos los dispositivos y optimizamos cada milisegundo de carga.",
  },
  {
    time: "Día 13–14",
    title: "Lanzamiento",
    description:
      "Publicamos en tu dominio, te capacitamos para editarlo y queda listo para crecer.",
  },
];


export const pricingConfig = {
  fallbackUsdToArs: 1480,
};


export type Plan = {
  name: string;
  priceUsd: number;
  priceFrom?: boolean;
  priceNote: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    priceUsd: 300,
    priceNote: "pago único",
    description: "Ideal para profesionales y negocios que recién arrancan online.",
    features: [
      "Landing page de 1 página",
      "Diseño responsive a medida",
      "Formulario de contacto",
      "Botón de WhatsApp integrado",
      "SEO básico on-page",
      "1 ronda de revisiones",
      "Entrega en 5 días hábiles",
    ],
    ctaLabel: "Empezar Starter",
  },
  {
    name: "Profesional",
    priceUsd: 600,
    priceNote: "pago único",
    description: "El plan más elegido por pymes que necesitan presencia completa.",
    features: [
      "Sitio de hasta 6 secciones/páginas",
      "Diseño 100% a medida",
      "Panel para editar contenido",
      "Blog o sección de novedades",
      "SEO técnico + Google Analytics",
      "Integración con redes y mapas",
      "3 rondas de revisiones",
      "Entrega en 10–14 días hábiles",
    ],
    highlighted: true,
    ctaLabel: "Empezar Profesional",
  },
  {
    name: "Empresarial",
    priceUsd: 1000,
    priceFrom: true,
    priceNote: "según alcance",
    description: "Tiendas online y aplicaciones web a medida con lógica propia.",
    features: [
      "E-commerce o app web a medida",
      "Pasarela de pagos integrada",
      "Base de datos y panel de administración",
      "Roles de usuario y permisos",
      "Integraciones con APIs externas",
      "Plan de performance y escalabilidad",
      "Soporte prioritario 60 días",
    ],
    ctaLabel: "Hablar de mi proyecto",
  },
];

export const maintenancePlans: Plan[] = [
  {
    name: "Mantenimiento Básico",
    priceUsd: 25,
    priceNote: "/mes",
    description: "Para que tu sitio siga online, seguro y actualizado.",
    features: [
      "Hosting + dominio gestionado",
      "Backups automáticos semanales",
      "Actualizaciones de seguridad",
      "Monitoreo de disponibilidad 24/7",
    ],
    ctaLabel: "Sumar mantenimiento",
  },
  {
    name: "Mantenimiento Pro",
    priceUsd: 60,
    priceNote: "/mes",
    description: "Mantenimiento + mejoras continuas de contenido y performance.",
    features: [
      "Todo lo de Básico",
      "2 horas de cambios de contenido al mes",
      "Reporte mensual de velocidad y SEO",
      "Soporte prioritario por WhatsApp",
    ],
    highlighted: true,
    ctaLabel: "Sumar mantenimiento Pro",
  },
];


export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Maximiliano R.",
    role: "Fundador, HomeViviendas",
    quote:
      "Nos entregaron el sitio antes de lo prometido y va de una manera fluida. Seguimos trabajando con ellos en el mantenimiento mensual.",
  },
  {
    name: "Franco O.",
    role: "Dueño, La Tribuna Online",
    quote:
      "Lo que más valoro es la comunicación: cada etapa fue clara, con fechas reales y un sitio que finalmente carga rápido en el celular.",
  },
  {
    name: "Sofía G.",
    role: "Dueña, Zen Pilates",
    quote:
      "Pasamos de una web vieja a una plataforma con turnos online en dos semanas. El equipo entendió el negocio, no solo el diseño.",
  },
];

export const projectTypeOptions = [
  "Landing page",
  "Sitio institucional",
  "E-commerce",
  "Aplicación a medida",
  "Otro",
];

export const budgetOptions = [
  "Menos de USD 500",
  "USD 500 – 1.000",
  "USD 1.000 – 2.000",
  "Más de USD 2.000",
  "Todavía no estoy seguro",
];

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: "¿Cuánto tarda el desarrollo de mi sitio?",
    answer:
      "Una landing page suele estar lista en 5 días hábiles, un sitio Profesional en 10 a 14 días, y una app o e-commerce a medida entre 4 y 8 semanas según el alcance.",
  },
  {
    question: "¿El hosting y el dominio están incluidos?",
    answer:
      "El desarrollo no incluye hosting ni dominio, pero te ayudamos a configurarlos. Si preferís no ocuparte de nada técnico, nuestros planes de mantenimiento incluyen hosting administrado.",
  },
  {
    question: "¿Puedo editar el contenido yo mismo después?",
    answer:
      "Sí. En los planes Profesional y Empresarial incluimos un panel simple para editar textos, imágenes y novedades sin tocar código.",
  },
  {
    question: "¿Cómo es la forma de pago?",
    answer:
      "Trabajamos con un 50% para comenzar el proyecto y el 50% restante contra entrega. Para proyectos a medida podemos definir pagos por etapas.",
  },
  {
    question: "¿Qué pasa si necesito cambios después del lanzamiento?",
    answer:
      "Todos los planes incluyen una ventana de soporte post-lanzamiento. Para cambios continuos, recomendamos sumar un plan de mantenimiento mensual.",
  },
];
