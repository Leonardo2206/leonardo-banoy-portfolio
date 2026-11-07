/**
 * Contenido central del portafolio.
 *
 * Regla editorial: aquí solo entra información comprobable en el GitHub,
 * LinkedIn, las demos públicas de Leonardo o los datos aportados directamente
 * por él. Las certificaciones y la experiencia profesional se registran tal
 * como fueron confirmadas, sin añadir emisores, métricas ni fechas que no se
 * hayan proporcionado.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  type: string;
  period: string;
  context: string;
  tagline: string;
  summary: string;
  overview: string;
  highlights: string[];
  stack: string[];
  demoUrl: string;
  codeUrl: string;
  image: string;
  imageAlt: string;
  verifiedOn: string;
  note?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface TrajectoryEntry {
  index: string;
  title: string;
  project: string;
  slug: string;
  description: string;
}

export interface AcademicEntry {
  program: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  note?: string;
}

export interface Certification {
  name: string;
  acronym: string;
  year: string;
  description?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const site = {
  title: "Leonardo Banoy — Tecnólogo en Desarrollo de Software",
  description:
    "Portafolio y CV de Leonardo Banoy, tecnólogo en desarrollo de software. Experiencia en soporte y automatización con GoHighLevel y proyectos full-stack con TypeScript, Node.js, Express, React, PostgreSQL y MongoDB.",
  cvPath: "/cv/leonardo-banoy-cv.pdf",
  cvFileName: "leonardo-banoy-cv.pdf",
  ogImage: "/og-image.png",
  lastVerified: "26 de octubre de 2026",
} as const;

export const profile = {
  name: "Leonardo Banoy",
  firstName: "Leonardo",
  lastName: "Banoy",
  legalName: "Leonardo Banoy López",
  initials: "LB",
  shortName: "Leonardo",
  role: "Tecnólogo en Desarrollo de Software",
  roleShort: "Software developer",
  location: "Villavicencio, Colombia",
  email: "leonardobanoy48@gmail.com",
  github: "https://github.com/Leonardo2206",
  githubHandle: "@Leonardo2206",
  linkedin: "https://www.linkedin.com/in/leonardo-banoy-lopez-68a92a2b0/",
  linkedinLabel: "in/leonardo-banoy-lopez",
  headline: "APIs claras. Datos consistentes. Productos que funcionan.",
  intro:
    "Soy tecnólogo en Desarrollo de Software y me enfoco en el backend: APIs REST, autenticación y modelado de datos. También construyo el frontend cuando el proyecto lo necesita.",
  bio: [
    "Tecnólogo en Desarrollo de Software (UNIMINUTO, 2026) y estudiante de Ingeniería de Software. Me interesa la parte que sostiene el producto: autenticación, permisos, validación y datos consistentes.",
    "En CopyAdopters trabajé en soporte y desarrollo digital con GoHighLevel: automatizaciones, formularios, embudos de venta y soporte técnico. En paralelo construí los tres proyectos de esta página, con código público, demo desplegada y documentación.",
    "Ahora profundizo en PostgreSQL, Prisma ORM, Docker, TypeScript avanzado y arquitectura backend.",
  ],
  principles: [
    {
      title: "Claridad primero",
      description:
        "Contratos explícitos, nombres legibles y una separación clara entre rutas, controladores, servicios y acceso a datos.",
    },
    {
      title: "Verificar lo importante",
      description:
        "En Libra, la API se prueba con Vitest y Supertest: autenticación, catálogo público, CRUD y validación de subidas.",
    },
    {
      title: "Documentar para ejecutar",
      description:
        "Los tres repositorios incluyen puesta en marcha, variables de entorno y notas de despliegue en sus README.",
    },
  ],
  facts: [
    { label: "Rol", value: "Tecnólogo en software" },
    { label: "Base", value: "Villavicencio, CO" },
    { label: "Experiencia", value: "Soporte y desarrollo · GHL" },
    { label: "Enfoque", value: "APIs REST + datos" },
    { label: "Disponibilidad", value: "Remoto · híbrido · presencial" },
  ],
} as const;

export const navItems: NavItem[] = [
  { id: "perfil", label: "Perfil" },
  { id: "proyectos", label: "Proyectos" },
  { id: "stack", label: "Stack" },
  { id: "formacion", label: "Formación" },
  { id: "experiencia", label: "Experiencia" },
  { id: "trayectoria", label: "Trayectoria" },
];

export const projects: Project[] = [
  {
    slug: "libra",
    name: "Libra",
    type: "Full-stack · Proyecto propio",
    period: "Desde octubre de 2026",
    context: "Proyecto individual",
    tagline: "Biblioteca digital con catálogo público y panel de administración.",
    summary:
      "API REST con Express 5 y PostgreSQL, frontend en React 19 y autenticación de administrador con JWT. Incluye migraciones SQL, validación con Zod, subida de portadas a Supabase Storage y pruebas con Vitest + Supertest.",
    overview:
      "Libra es el proyecto donde más he trabajado el backend de punta a punta. La aplicación separa la API y la web, usa TypeScript en ambos lados y mantiene dos superficies bien diferenciadas: un catálogo público de solo lectura y un panel privado para administrar libros, estados y portadas.",
    highlights: [
      "Catálogo público con búsqueda, filtros y paginación.",
      "Panel privado para crear, editar, publicar y retirar libros.",
      "JWT en cookie httpOnly, contraseñas con bcrypt y rate limiting.",
      "Migraciones SQL versionadas y validación de entrada con Zod.",
      "Portadas almacenadas en Supabase Storage con validación por firma y tamaño.",
      "Pruebas de API con Vitest + Supertest, sin depender de una base real.",
    ],
    stack: [
      "TypeScript",
      "Express 5",
      "PostgreSQL",
      "React 19",
      "Supabase",
      "JWT",
      "Zod",
      "Vitest",
    ],
    demoUrl: "https://crud-libros-express-ts.vercel.app/",
    codeUrl: "https://github.com/Leonardo2206/crud-libros-express-ts",
    image: "/projects/libra.jpg",
    imageAlt:
      "Captura real de Libra: portada de la biblioteca digital con libros destacados.",
    verifiedOn: "26 de octubre de 2026",
    note: "La demo pública permite explorar el catálogo. El panel de administración requiere credenciales.",
  },
  {
    slug: "ticket-system",
    name: "Ticket System",
    type: "Full-stack · API + SPA",
    period: "Febrero – agosto de 2026",
    context: "Proyecto individual",
    tagline: "Gestión de tickets con autenticación y permisos por rol.",
    summary:
      "Sistema full-stack con API REST en Express 5 y MongoDB. Define roles admin, agent y user, autenticación con JWT, validación con Zod y documentación Swagger en desarrollo.",
    overview:
      "Ticket System explora algo que va más allá del CRUD: quién puede hacer qué. La API distingue entre administradores, agentes y usuarios, y el frontend consume esos permisos con rutas protegidas. El backend está organizado por controladores, servicios, modelos y middlewares.",
    highlights: [
      "Registro y login con JWT; el rol se asigna en el servidor.",
      "Permisos diferenciados para admin, agent y user.",
      "CRUD de tickets con reglas de acceso por propietario y asignación.",
      "Validación con Zod y rate limiting en los endpoints de autenticación.",
      "Frontend en React + Tailwind con rutas protegidas y contexto de sesión.",
      "Documentación Swagger disponible en desarrollo.",
    ],
    stack: [
      "TypeScript",
      "Express 5",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Zod",
      "React",
      "Tailwind CSS",
    ],
    demoUrl: "https://ticket-system-backend-six.vercel.app/tickets",
    codeUrl: "https://github.com/Leonardo2206/ticket-system-backend",
    image: "/projects/ticket-system.jpg",
    imageAlt:
      "Captura real de Ticket System: formulario de inicio de sesión sobre fondo oscuro.",
    verifiedOn: "26 de octubre de 2026",
    note: "La demo abre en la pantalla de acceso. Para probar los flujos hay que crear una cuenta; no uses datos personales reales.",
  },
  {
    slug: "ecommerce-gym",
    name: "EcommerceGym",
    type: "Full-stack · Proyecto universitario",
    period: "Marzo – mayo de 2025",
    context: "Trabajo universitario individual",
    tagline: "Tienda de suplementos y equipamiento como exploración full-stack.",
    summary:
      "Proyecto full-stack con frontend en Next.js 15 y API REST en Express + MongoDB. Incluye catálogo, carrito, autenticación y panel de administración. El checkout es una demostración: no procesa pagos reales.",
    overview:
      "EcommerceGym fue un ejercicio para conectar un escaparate completo con una API propia. Hay catálogo, carrito, autenticación y un panel de administración. La parte de compra se queda en el terreno de la demostración: el flujo visual existe, pero no hay una pasarela de pago real conectada.",
    highlights: [
      "Catálogo y carrito construidos con Next.js 15 y React 19.",
      "API REST con Express, Mongoose y MongoDB.",
      "Autenticación con JWT y panel de administración.",
      "Interfaz responsive y despliegue separado de frontend y API.",
      "Checkout de demostración, sin pasarela de pago conectada.",
      "Documentación de endpoints con Swagger.",
    ],
    stack: [
      "Next.js",
      "React",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
      "Render",
    ],
    demoUrl: "https://ecommerce-frontend-nine-iota.vercel.app/",
    codeUrl: "https://github.com/Leonardo2206/EcommerceGym",
    image: "/projects/ecommerce-gym.jpg",
    imageAlt:
      "Captura real de EcommerceGym: catálogo de productos con precios y botones para agregar al carrito.",
    verifiedOn: "26 de octubre de 2026",
    note: "El checkout no procesa pagos reales. Es una demo de producto, no una tienda en producción.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Lenguajes",
    items: ["TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express 5",
      "REST",
      "JWT",
      "Zod",
      "bcrypt",
      "Vitest",
      "Supertest",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    label: "Datos",
    items: ["PostgreSQL", "Supabase", "MongoDB", "Mongoose"],
  },
  {
    label: "Herramientas",
    items: ["Git", "GitHub", "Vercel", "Render", "Swagger", "GoHighLevel"],
  },
];

export const learning = [
  "PostgreSQL",
  "Prisma ORM",
  "Docker",
  "TypeScript avanzado",
  "Arquitectura backend",
];

export const trajectory: TrajectoryEntry[] = [
  {
    index: "01",
    title: "Construir la API",
    project: "Libra",
    slug: "libra",
    description:
      "Express 5, PostgreSQL y migraciones SQL. Autenticación JWT, validación con Zod y pruebas con Vitest + Supertest. Aquí consolidé la parte del backend que más me interesa.",
  },
  {
    index: "02",
    title: "Modelar permisos",
    project: "Ticket System",
    slug: "ticket-system",
    description:
      "Roles admin, agent y user con reglas de acceso distintas. Aprendí que autorizar no es solo comprobar si hay sesión: hay que decidir qué puede hacer cada persona.",
  },
  {
    index: "03",
    title: "Conectar el producto",
    project: "EcommerceGym",
    slug: "ecommerce-gym",
    description:
      "Next.js, carrito y una API con MongoDB. Entendí el costo real de integrar un flujo de compra completo y dónde terminan los datos cuando no hay backend de pagos.",
  },
];

export const academic: AcademicEntry[] = [
  {
    program: "Ingeniería de Software",
    institution: "Corporación Universitaria Minuto de Dios (UNIMINUTO)",
    location: "Villavicencio, Colombia",
    period: "En curso",
    status: "Estudiante",
    note: "Continuidad de la formación en la misma universidad.",
  },
  {
    program: "Tecnólogo en Desarrollo de Software",
    institution: "Corporación Universitaria Minuto de Dios (UNIMINUTO)",
    location: "Villavicencio, Colombia",
    period: "2023 – 2026",
    status: "Graduado",
  },
];

export const certifications: Certification[] = [
  {
    name: "Full Stack Developer Certified Specialist",
    acronym: "FSDCS",
    year: "2025",
    description:
      "Certificación enfocada en desarrollo Full Stack con tecnologías frontend y backend.",
  },
  {
    name: "Back End Developer Certified Professional",
    acronym: "BDCP",
    year: "2025",
    description:
      "Certificación enfocada en desarrollo backend, APIs y arquitectura modular.",
  },
  {
    name: "Front End Developer Certified Associate",
    acronym: "FDCA",
    year: "2025",
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: "CopyAdopters",
    role: "Soporte y Desarrollo Digital (GHL)",
    location: "Villavicencio, Colombia",
    period: "Octubre 2025 – Enero 2026",
    summary:
      "Soporte técnico y automatización de procesos digitales con GoHighLevel.",
    highlights: [
      "Gestioné y configuré flujos automatizados, formularios y procesos digitales con GoHighLevel (GHL).",
      "Brindé soporte técnico en embudos de venta y automatizaciones para optimizar procesos internos.",
      "Apoyé la mejora de procesos mediante herramientas digitales y automatización.",
    ],
    stack: [
      "GoHighLevel",
      "Automatizaciones",
      "Formularios",
      "Embudos de venta",
      "Soporte técnico",
    ],
  },
];

export const contactCopy = {
  eyebrow: "Contacto",
  title: "Hablemos de desarrollo, datos o de lo que estés construyendo.",
  description:
    "Estoy disponible para oportunidades en desarrollo de software, colaboraciones o preguntas técnicas.",
  availability:
    "Remoto · híbrido · presencial — tiempo completo o medio tiempo",
} as const;

export const projectDisclaimer =
  "Los servicios gratuitos de Render pueden tardar unos segundos en despertar. Las demos se comprobaron por última vez el " +
  site.lastVerified +
  ".";
