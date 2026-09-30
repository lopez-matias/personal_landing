export const projects = [
  {
    name: "StockFlow",
    slug: "stockflow",
    description: {
      es: "Sistema de inventario para centralizar productos, ubicaciones, existencias y movimientos.",
      en: "Inventory system for centralizing products, locations, stock levels and movements.",
    },
    problem: {
      es: "Control operativo de inventario y alertas de stock.",
      en: "Operational inventory control and stock alerts.",
    },
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    github: "https://github.com/lopez-matias/inventory_system",
    demo: "",
    image: "assets/img/stockflow-dashboard.png",
    alt: {
      es: "Dashboard de StockFlow con inventario, movimientos y alertas de stock",
      en: "StockFlow dashboard with inventory, movements and stock alerts",
    },
    status: "PORTFOLIO",
  },
  {
    name: "OrangeFlow",
    slug: "orangeflow",
    description: {
      es: "Gestor de solicitudes internas con responsables, prioridades, estados e historial.",
      en: "Internal request manager with assignees, priorities, statuses and history.",
    },
    problem: {
      es: "Organización y seguimiento de procesos internos.",
      en: "Organization and tracking of internal processes.",
    },
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/lopez-matias/taskflow-admin",
    demo: "",
    image: "assets/img/orangeflow-dashboard.png",
    alt: {
      es: "Dashboard de OrangeFlow con solicitudes y actividad del equipo",
      en: "OrangeFlow dashboard with requests and team activity",
    },
    status: "PORTFOLIO",
  },
  {
    name: "Pulso PyME",
    slug: "pulso-pyme",
    description: {
      es: "Plataforma de reporting que valida ventas desde archivos y centraliza indicadores.",
      en: "Reporting platform that validates sales files and centralizes indicators.",
    },
    problem: {
      es: "Importación, control y análisis de información comercial.",
      en: "Import, validation and analysis of commercial information.",
    },
    technologies: ["Python", "Pandas", "PostgreSQL", "Reporting"],
    github: "https://github.com/lopez-matias/comercial-reportings",
    demo: "",
    image: "assets/img/reporting-dashboard.png",
    alt: {
      es: "Dashboard de Pulso PyME con indicadores y evolución de ventas",
      en: "Pulso PyME dashboard with indicators and sales trends",
    },
    status: "PORTFOLIO",
  },
  {
    name: "NODO",
    slug: "nodo",
    description: {
      es: "Sistema para administrar clientes, productos, pedidos, pagos y métricas comerciales.",
      en: "System for managing customers, products, orders, payments and business metrics.",
    },
    problem: {
      es: "Una vista operativa para la gestión comercial diaria.",
      en: "One operational view for day-to-day commercial management.",
    },
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    github: "https://github.com/lopez-matias/order_management",
    demo: "",
    image: "assets/img/nodo-dashboard.png",
    alt: {
      es: "Dashboard de NODO con ventas, pedidos, clientes y pagos",
      en: "NODO dashboard with sales, orders, customers and payments",
    },
    status: "PORTFOLIO",
  },
];
