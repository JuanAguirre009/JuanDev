import projectCover from "../assets/hero.png";

export const PROJECTS = [
  {
    title: "Integracion ERP + CRM",
    category: "Backend",
    date: "2024",
    excerpt:
      "Integracion bidireccional entre plataformas empresariales para sincronizar datos criticos.",
    cover: projectCover,
    stack: ["PostgreSQL", "Python", "FastAPI"],
    href: "#",
    featured: false,
  },
  {
    title: "Busqueda Multifuente",
    category: "Backend",
    date: "2023",
    excerpt:
      "Pipeline de automatizacion para consultas en multiples sistemas con resultados unificados.",
    cover: projectCover,
    stack: ["PostgreSQL", "Python", "Pandas"],
    href: "#",
    featured: false,
  },
  {
    title: "Migracion ERP",
    category: "Fullstack",
    date: "2022",
    excerpt:
      "Proyecto de migracion y normalizacion de datos empresariales con visualizacion web.",
    cover: projectCover,
    stack: ["SQL", "React", "Node.js"],
    href: "#",
    featured: true,
  },
];
