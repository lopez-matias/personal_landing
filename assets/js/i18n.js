(function () {
  const storageKey = "matudev-language";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const english = {
    metaTitle: "MatuDev | Data, databases, ETL, Power BI and integrations",
    metaDescription: "I organize, process and connect data through databases, ETL, integrations, automations and clear reports for teams and organizations.",
    ogLocale: "en_US",
    ogTitle: "MatuDev | Data with meaning",
    ogDescription: "Databases, ETL, integrations, automations and reports for scattered information.",
    twitterTitle: "MatuDev | Data with meaning",
    twitterDescription: "I organize, process and connect data to turn scattered information into clear systems.",
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
    navProcess: "Process",
    navAbout: "About",
    navContact: "Contact",
    heroKicker: "FROM CLEAN DATA TO CORRECT DECISIONS",
    heroTitle: "Simple solutions for daily problems",
    heroCta: "Let's talk",
    heroSecondary: "How we work",
    heroLogAria: "Data processing log",
    heroLog1: "capture sources: files, logs, APIs, SQL",
    heroLog2: "organize tables, rules and relationships",
    heroLog3: "process with SQL, ETL and Python",
    heroLog4: "connect systems and automate tasks",
    heroLog5: "publish reports, alerts and dashboards",
    servicesTitle: "Custom-built solutions",
    servicesLead: "Technology matters, but the problem comes first: duplicated data, manual tasks, reports that are hard to trust or systems that do not communicate.",
    service1Title: "BI & Power BI",
    service1Text: "When each report shows different numbers, decision-making becomes a risk. We centralize your data, define reliable indicators and create clear dashboards to turn scattered information into safe decisions.",
    service2Title: "Databases",
    service2Text: "When data grows without structure, slow queries, duplicates and high maintenance costs appear. We design, administer and optimize databases and SQL queries to ensure performance, order and scalability.",
    service3Title: "ETL and processing",
    service3Text: "When manual processes take time and create errors, we automate data integration and transformation with ETL, scripts and jobs from files, APIs or databases.",
    service4Title: "Integrations and APIs",
    service4Text: "When tools do not connect, information is duplicated or isolated. We integrate sources, APIs and systems to centralize data and keep it synchronized.",
    service5Title: "Data consulting",
    service5Text: "When the problem is not the tool, we analyze sources, rules, reports and processes to identify which data matters and define a realistic solution.",
    service6Title: "Automations",
    service6Text: "When repetitive tasks consume time, we automate checks, alerts, loads and scheduled processes to reduce errors and manual work.",
    processTitle: "Clear processes",
    processLead: "Scope, timing and cost depend on data volume, information quality, urgency, complexity, integrations, work hours and maintenance.",
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
    aboutP1: "I help transform scattered information and complicated processes into clear solutions that make daily work easier and support better decisions.",
    aboutP2: "First I try to understand how you work, which tasks consume the most time and where errors usually appear. From there, I build a practical, easy-to-use solution prepared to adapt to new needs.",
    profilesAria: "Profiles and contact",
    emailLabel: "Mail",
    faqTitle: "Before starting, you may want to know this",
    faqIntro: "Some answers about the services, the way of working and how to begin.",
    faq1Q: "What kind of problems can you help me solve?",
    faq1A: "I can help you organize information, improve reports, automate tasks, connect tools and create solutions that simplify daily work.",
    faq2Q: "Do I need to know exactly which solution I want?",
    faq2A: "No. First we review the problem, how you currently work and what result you need. From there, we define a clear and realistic solution.",
    faq3Q: "Can you improve something that is already built?",
    faq3A: "Yes. I can review existing reports, databases, automations and processes to detect errors and improve how they work.",
    faq4Q: "Do you work only with Power BI?",
    faq4A: "No. The tool is chosen according to the problem and the project's needs. I also work with databases, files, APIs and other solutions.",
    faq5Q: "How are cost and timing calculated?",
    faq5A: "They depend on scope, available information, required integrations and solution complexity. Everything is defined before starting.",
    faq6Q: "What do you need to begin?",
    faq6A: "A brief description of the problem, some examples and the result you expect. With that we can evaluate the project and define the next steps.",
    contactTitle: "Contact us with all the information about your problem and we will help you.",
    contactLead: "It can be a report that does not match, a slow database, a manual process, a pending integration or an idea that still needs technical shape.",
    formName: "Name",
    formCompany: "Company",
    formOptional: "optional",
    formEmail: "Email",
    formProjectType: "Project type",
    formSelect: "Select an option",
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
    privacyProcessText: "The form is prepared to be sent through a Cloudflare Pages Function. The email provider is configured through environment variables and can be replaced without exposing secrets in the repository.",
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
