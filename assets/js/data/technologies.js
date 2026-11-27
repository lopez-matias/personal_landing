// level: "daily" = used in production work, "learning" = currently training
export const technologyGroups = [
  {
    number: "01",
    label: { es: "INTEGRACIÓN Y APIS", en: "INTEGRATION & APIS" },
    items: [
      ["REST APIs / Webhooks", "daily"],
      ["Python · FastAPI", "daily"],
      ["Java · Spring Boot", "daily"],
      ["JavaScript · Node.js", "daily"],
      ["MercadoLibre / Tiendanube / Shopify APIs", "learning"],
      ["MuleSoft Anypoint", "learning"],
    ],
  },
  {
    number: "02",
    label: { es: "AUTOMATIZACIÓN Y ETL", en: "AUTOMATION & ETL" },
    items: [
      ["n8n", "daily"],
      ["Make", "daily"],
      ["Power Automate", "daily"],
      ["Pentaho Data Integration", "daily"],
      ["SSIS", "daily"],
      ["Apache Airflow", "daily"],
      ["Zapier", "learning"],
    ],
  },
  {
    number: "03",
    label: { es: "IA APLICADA", en: "APPLIED AI" },
    items: [
      ["OpenAI API", "daily"],
      ["Claude API", "daily"],
      ["Ollama · modelos locales", "daily"],
      ["RAG / búsqueda semántica", "learning"],
      ["Extracción de documentos (OCR + LLM)", "learning"],
      ["LangChain", "learning"],
    ],
  },
  {
    number: "04",
    label: { es: "DATOS Y BI", en: "DATA & BI" },
    items: [
      ["SQL Server", "daily"],
      ["PostgreSQL", "daily"],
      ["MySQL", "daily"],
      ["SSAS · cubos OLAP", "daily"],
      ["Power BI · DAX", "daily"],
      ["dbt", "learning"],
    ],
  },
  {
    number: "05",
    label: { es: "INFRAESTRUCTURA", en: "INFRASTRUCTURE" },
    items: [
      ["Docker", "daily"],
      ["Linux · cron · bash", "daily"],
      ["Git · GitHub Actions", "daily"],
      ["Vercel", "daily"],
      ["Azure", "learning"],
      ["AWS", "learning"],
    ],
  },
  {
    number: "06",
    label: { es: "CRM Y ECOSISTEMAS", en: "CRM & ECOSYSTEMS" },
    items: [
      ["ERP (stock, facturación, inventario)", "daily"],
      ["Google Workspace / Sheets API", "daily"],
      ["WhatsApp Business API", "learning"],
      ["Salesforce", "learning"],
      ["Odoo", "learning"],
    ],
  },
];
