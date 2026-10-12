export const projects = [
  {
    name: "StockFlow",
    slug: "stockflow",
    category: {
      es: "GESTIÓN DE INVENTARIO",
      en: "INVENTORY MANAGEMENT",
    },
    status: { es: "DEMO", en: "DEMO" },
    image: "assets/img/stockflow-dashboard.png",
    imageWidth: 1440,
    imageHeight: 1000,
    alt: {
      es: "Panel principal del sistema de inventario StockFlow",
      en: "StockFlow inventory system dashboard",
    },
    description: {
      es: "Centraliza productos, ubicaciones, existencias, movimientos y transferencias en una interfaz operativa clara.",
      en: "Centralizes products, locations, stock, movements and transfers in a clear operational interface.",
    },
    note: {
      es: "Demo de portfolio con datos de prueba.",
      en: "Portfolio demo using sample data.",
    },
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "JavaScript"],
    demoUrl: "https://stockflow.matudev.com",
    sourceUrl: "https://github.com/lopez-matias/inventory_system",
  },
  {
    name: "NODO",
    slug: "nodo",
    category: { es: "GESTIÓN COMERCIAL", en: "COMMERCIAL MANAGEMENT" },
    status: { es: "DEMO", en: "DEMO" },
    image: "assets/img/nodo-dashboard.png",
    imageWidth: 1440,
    imageHeight: 1000,
    alt: {
      es: "Panel general del sistema de gestión comercial NODO",
      en: "NODO commercial management dashboard",
    },
    description: {
      es: "Organiza clientes, productos, pedidos, pagos y métricas de ventas dentro de un mismo flujo comercial.",
      en: "Organizes customers, products, orders, payments and sales metrics within one commercial workflow.",
    },
    note: {
      es: "Demo de portfolio con datos de prueba.",
      en: "Portfolio demo using sample data.",
    },
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "JavaScript"],
    demoUrl: "https://nodo.matudev.com",
    sourceUrl: "https://github.com/lopez-matias/order_management",
  },
  {
    name: "OrangeFlow",
    slug: "orangeflow",
    category: {
      es: "SOLICITUDES INTERNAS",
      en: "INTERNAL REQUESTS",
    },
    status: { es: "DEMO", en: "DEMO" },
    image: "assets/img/orangeflow-dashboard.png",
    imageWidth: 1440,
    imageHeight: 1200,
    alt: {
      es: "Panel de solicitudes internas de OrangeFlow",
      en: "OrangeFlow internal request dashboard",
    },
    description: {
      es: "Ordena solicitudes, prioridades, responsables, estados e historial de cambios para equipos internos.",
      en: "Organizes requests, priorities, owners, statuses and change history for internal teams.",
    },
    note: {
      es: "Demo de portfolio con datos de prueba.",
      en: "Portfolio demo using sample data.",
    },
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "JavaScript"],
    demoUrl: "https://taskflow.matudev.com",
    sourceUrl: "https://github.com/lopez-matias/taskflow-admin",
  },
  {
    name: "CuentaClara",
    slug: "cuentaclara",
    category: { es: "FINANZAS PERSONALES", en: "PERSONAL FINANCE" },
    status: { es: "EN PRODUCCIÓN", en: "LIVE" },
    image: "assets/img/cuentaclara-dashboard-v2.png",
    imageWidth: 1893,
    imageHeight: 831,
    alt: {
      es: "Panel de finanzas personales de CuentaClara",
      en: "CuentaClara personal finance dashboard",
    },
    description: {
      es: "Aplicación web para registrar movimientos y entender gastos, cuentas y finanzas personales.",
      en: "Web application for tracking transactions and understanding expenses, accounts and personal finances.",
    },
    technologies: ["Web App", "Responsive UI", "Data"],
    demoUrl: "https://cuentaclara.matudev.com",
  },
];
