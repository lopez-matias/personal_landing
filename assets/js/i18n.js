(function () {
  const storageKey = "matudev-language";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const english = {
    metaTitle: "MatuDev | Software and data for businesses",
    metaDescription: "Internal systems, databases, reporting and integrations built to solve concrete problems for small and medium-sized businesses.",
    ogLocale: "en_US",
    ogTitle: "MatuDev | Software and data for businesses",
    ogDescription: "Internal systems, databases, reporting and integrations to improve business processes.",
    twitterTitle: "MatuDev | Software and data for businesses",
    twitterDescription: "I build software and data solutions for concrete business needs.",
    privacyMetaTitle: "Privacy policy | MatuDev",
    privacyMetaDescription: "Privacy policy for the MatuDev contact form.",
    thanksMetaTitle: "Thanks for your inquiry | MatuDev",
    thanksMetaDescription: "Thanks for contacting MatuDev.",
    notFoundMetaTitle: "Page not found | MatuDev",
    notFoundMetaDescription: "The requested page does not exist on MatuDev.",
    skipLink: "Skip to content",
    navAria: "Main navigation",
    brandAria: "MatuDev, back to start",
    preferencesAria: "Preferences",
    themeAria: "Change theme",
    langAria: "View site in Spanish",
    langButton: "ES",
    menuOpenAria: "Open menu",
    menuCloseAria: "Close menu",
    navHome: "Home",
    navServices: "Services",
    navProjects: "Projects",
    navProcess: "Process",
    navAbout: "About",
    navContact: "Contact",
    heroKicker: "SOFTWARE · DATABASES · REPORTING",
    heroTitle: "Software and data to improve how your business works",
    heroLead: "I build internal systems, database solutions and reports to replace manual processes, centralize information and solve concrete business needs.",
    heroCta: "Tell me your problem",
    heroSecondary: "View projects",
    heroLogAria: "Data processing log",
    heroLog1: "understand the process and expected result",
    heroLog2: "model data, rules and permissions",
    heroLog3: "build the system and its integrations",
    heroLog4: "validate with real use cases",
    heroLog5: "deliver, document and support",
    servicesTitle: "Solutions for real business problems",
    servicesLead: "The tool comes after understanding the process, the people who use it and the result you need.",
    service1Title: "Software development",
    service1Text: "Internal systems and custom applications to manage inventory, orders, customers, requests and other operational processes.",
    service2Title: "Databases",
    service2Text: "Data models, SQL queries, inconsistency fixes and optimization for organized, maintainable information.",
    service3Title: "Reporting and BI",
    service3Text: "Dashboards, indicators and consolidated information so different areas can analyze and decide with the same data.",
    service4Title: "Integrations and processes",
    service4Text: "Connections between systems, APIs, files and databases to reduce manual work and improve information flow.",
    service5Title: "Data consulting",
    service5Text: "When the problem is not the tool, we analyze sources, rules, reports and processes to identify which data matters and define a realistic solution.",
    service6Title: "Automations",
    service6Text: "When repetitive tasks consume time, we automate checks, alerts, loads and scheduled processes to reduce errors and manual work.",
    projectsTitle: "Systems that show how I work",
    projectsLead: "Four complete projects built with demonstration data to represent common business problems.",
    project1Aria: "View StockFlow on GitHub",
    project1Alt: "StockFlow inventory control dashboard",
    project1Type: "INVENTORY · SOFTWARE · POSTGRESQL",
    project1Text: "A system that centralizes products, warehouses, stock levels and inventory movements with business rules and stock alerts.",
    project2Aria: "View OrangeFlow on GitHub",
    project2Alt: "OrangeFlow internal request dashboard",
    project2Type: "INTERNAL PROCESSES · REQUESTS",
    project2Text: "A platform for managing internal requests, assignees, priorities, statuses, comments and change history.",
    project3Type: "DATA · REPORTING · CSV IMPORT",
    project3Text: "A reporting platform that validates sales from CSV files, centralizes the data and enables analysis through indicators, filters and exports.",
    project3PointsAria: "Main features",
    project3Point1: "Data validation and import",
    project3Point2: "Dashboard and business filters",
    project3Point3: "Report export",
    project4Aria: "View NODO on GitHub",
    project4Alt: "NODO business management dashboard",
    project4Type: "CUSTOMERS · ORDERS · PAYMENTS",
    project4Text: "A business system for managing customers, products, orders, historical prices, payments and business metrics.",
    projectLink: "View project on GitHub →",
    projectsNote: "All projects use fictional data and are published as portfolio demonstrations.",
    processTitle: "A clear process from start to finish",
    processLead: "First we clarify the expected result. Then we define scope, timing and cost before any work begins.",
    process1Title: "Diagnose",
    process1Text: "We analyze the problem, current processes, available sources and the result you need.",
    process2Title: "Design",
    process2Text: "We define a clear, realistic solution adapted to your tools, data and way of working.",
    process3Title: "Build",
    process3Text: "We develop the models, processes, integrations, automations or reports required.",
    process4Title: "Validate",
    process4Text: "We test results, review errors and confirm that the solution answers the real problem.",
    process5Title: "Implement",
    process5Text: "We deliver the documented solution and explain how to use, maintain and extend it.",
    profileAlt: "Photo of Matias Lopez",
    aboutTitle: "Hi, I am Matias.",
    aboutP1: "I work professionally in Business Intelligence and database administration, and I build systems focused on solving concrete operational problems.",
    aboutP2: "My experience combines business, data and software. This allows me to understand the process before coding and deliver practical, documented and maintainable solutions. I also study Computer Engineering at Universidad de la República.",
    profilesAria: "Profiles and contact",
    emailLabel: "Mail",
    faqTitle: "Before starting, you may want to know this",
    faqIntro: "Some answers about the services, the way of working and how to begin.",
    faq1Q: "What kind of problems can you help me solve?",
    faq1A: "I can build or improve internal systems, databases, reports, integrations and processes that currently depend on manual work or disconnected tools.",
    faq2Q: "Do I need to know exactly which solution I want?",
    faq2A: "No. First we review the problem, how you currently work and what result you need. From there, we define a clear and realistic solution.",
    faq3Q: "Can you improve something that is already built?",
    faq3A: "Yes. I can review existing reports, databases, automations and processes to detect errors and improve how they work.",
    faq4Q: "Do you work with one specific technology?",
    faq4A: "Technology is chosen according to the problem and the project's needs. I work with web software, databases, files, APIs, automations and reporting tools.",
    faq5Q: "How are cost and timing calculated?",
    faq5A: "They depend on scope, available information, required integrations and solution complexity. Everything is defined before starting.",
    faq6Q: "What do you need to begin?",
    faq6A: "A brief description of the problem, some examples and the result you expect. With that we can evaluate the project and define the next steps.",
    contactTitle: "Tell me what you need to improve.",
    contactLead: "It can be an internal system, an inconsistent report, a slow database, a manual task or two tools you need to connect. I will reply with the next steps.",
    formName: "Name",
    formCompany: "Company",
    formOptional: "optional",
    formEmail: "Email",
    formProjectType: "Project type",
    formSelect: "Select an option",
    projectSoftware: "Internal system or application",
    projectReports: "Reports or dashboards",
    projectDatabase: "Database",
    projectEtl: "ETL or processing",
    projectApi: "Integration or API",
    projectAutomation: "Automation",
    projectConsulting: "Consulting",
    projectUnknown: "I am not sure yet",
    projectOther: "Other",
    formMessage: "Problem description",
    formPlaceholder: "Tell me what data you have, which task takes too long or which report you need to improve.",
    formConsent: "I agree that matudev may use this data to answer my inquiry.",
    privacyLink: "View privacy",
    formSubmit: "Send inquiry",
    formRequired: "Complete this field so I can understand the inquiry.",
    formEmailError: "Enter a valid email so I can reply.",
    formMinError: "Write at least {count} characters to give me context.",
    formConsentError: "I need your consent to answer the inquiry.",
    formReview: "Review the marked fields before sending.",
    formSending: "Sending inquiry...",
    formSent: "Message received. I will reply by email.",
    formFallback: "Automatic sending is not configured or did not respond. You can email me at lopeznunezmati@gmail.com or use WhatsApp.",
    footerText: "systemAdmin:~",
    footerNavAria: "Secondary navigation",
    privacy: "Privacy",
    whatsappLabel: "WhatsApp",
    whatsappAria: "Write on WhatsApp",
    backTopAria: "Back to top",
    backHome: "Back to home",
    writeEmail: "Write by email",
    goHome: "Go home",
    contactMatudev: "Contact matudev",
    privacyKicker: "MATUDEV / PRIVACY",
    privacyTitle: "Policy",
    privacyLead: "This policy explains how data sent through the contact form is used.",
    privacyUpdated: "Last update: August 1, 2026.",
    privacyDataTitle: "Requested data",
    privacyDataText: "The form may request name, email, optional company, project type, problem description and consent to answer the inquiry.",
    privacyUseTitle: "Use of information",
    privacyUseText: "The data is used only to answer inquiries, understand project context and prepare a technical or commercial response.",
    privacyProcessTitle: "Form processing",
    privacyProcessText: "The form is prepared to be sent through a Vercel serverless function. The email provider is configured through environment variables and can be replaced without exposing secrets in the repository.",
    privacyFallbackTitle: "Contact fallback",
    privacyFallbackText: "If automatic sending is not configured or fails, you can write directly to my <a href=\"mailto:lopeznunezmati@gmail.com\">Mail</a> or through <a href=\"https://wa.me/59898445531\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
    privacyDeleteTitle: "Deletion",
    privacyDeleteText: "You can request deletion of your inquiry by replying to the same email thread or sending a new request by email.",
    thanksKicker: "INQUIRY / RECEIVED",
    thanksTitle: "Thanks. I already have your message.",
    thanksLead: "I will reply by email. If automatic sending was not available, you can also write directly using the buttons below.",
    notFoundKicker: "ERROR / ROUTE NOT FOUND",
    notFoundTitle: "This screen does not exist.",
    notFoundLead: "The URL was moved or is not available. You can go back home or write to me if you were looking for project information."
  };

  const sourceCopy = {};

  function getSavedLang() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(storageKey, lang);
    } catch (error) {
      /* Local storage can be unavailable in restricted browser modes. */
    }
  }

  function readMeta(selector) {
    return document.querySelector(selector)?.getAttribute("content") || "";
  }

  function writeMeta(selector, value) {
    document.querySelector(selector)?.setAttribute("content", value);
  }

  function pagePrefix() {
    const page = window.location.pathname.split("/").pop();
    if (page === "privacy.html") return "privacy";
    if (page === "gracias.html") return "thanks";
    if (page === "404.html") return "notFound";
    return "";
  }

  function captureSourceCopy() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const textKey = element.dataset.i18n;
      if (textKey && sourceCopy[textKey] === undefined) {
        sourceCopy[textKey] = element.textContent;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const textKey = element.dataset.i18nHtml;
      if (textKey && sourceCopy[textKey] === undefined) {
        sourceCopy[textKey] = element.innerHTML;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(";").forEach((mapping) => {
        const [attribute, textKey] = mapping.split(":").map((item) => item.trim());
        if (attribute && textKey && sourceCopy[textKey] === undefined) {
          sourceCopy[textKey] = element.getAttribute(attribute) || "";
        }
      });
    });

    Object.assign(sourceCopy, {
      metaTitle: document.title,
      metaDescription: readMeta("meta[name='description']"),
      ogLocale: readMeta("meta[property='og:locale']"),
      ogTitle: readMeta("meta[property='og:title']"),
      ogDescription: readMeta("meta[property='og:description']"),
      twitterTitle: readMeta("meta[name='twitter:title']"),
      twitterDescription: readMeta("meta[name='twitter:description']")
    });
  }

  function setMeta(data) {
    const prefix = pagePrefix();
    const title = prefix ? data[`${prefix}MetaTitle`] : "";
    const description = prefix ? data[`${prefix}MetaDescription`] : "";

    document.title = title || data.metaTitle;
    writeMeta("meta[name='description']", description || data.metaDescription);
    writeMeta("meta[property='og:locale']", data.ogLocale);
    writeMeta("meta[property='og:title']", data.ogTitle);
    writeMeta("meta[property='og:description']", data.ogDescription);
    writeMeta("meta[name='twitter:title']", data.twitterTitle);
    writeMeta("meta[name='twitter:description']", data.twitterDescription);
  }

  function applyText(data) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = data[element.dataset.i18n];
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = data[element.dataset.i18nHtml];
      if (typeof value === "string") element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(";").forEach((mapping) => {
        const [attribute, textKey] = mapping.split(":").map((item) => item.trim());
        const value = data[textKey];
        if (attribute && typeof value === "string") element.setAttribute(attribute, value);
      });
    });
  }

  function applyLang(lang) {
    const next = lang === "en" ? "en" : "es";
    const data = next === "en" ? english : sourceCopy;

    document.documentElement.lang = next === "en" ? "en" : "es-UY";
    applyText(data);
    setMeta(data);
    saveLang(next);
    document.dispatchEvent(new CustomEvent("matudev:languagechange", { detail: { lang: next } }));
  }

  function runLanguageTransition() {
    if (reduceMotion.matches) return;

    document.documentElement.classList.add("language-switching");
    window.setTimeout(() => {
      document.documentElement.classList.remove("language-switching");
    }, 300);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    const initial = urlLang === "en" || urlLang === "es" ? urlLang : (getSavedLang() || "es");

    captureSourceCopy();
    applyLang(initial);

    document.querySelector("[data-lang-toggle]")?.addEventListener("click", () => {
      runLanguageTransition();
      applyLang(document.documentElement.lang.startsWith("en") ? "es" : "en");
    });
  });
})();
