(function () {
  const english = {
    skipLink: "Skip to content",
    navAria: "Main navigation",
    brandAria: "Matías López, back to start",
    themeAria: "Change theme",
    menuOpenAria: "Open menu",
    menuCloseAria: "Close menu",
    navProjects: "Demos",
    navServices: "Services",
    navProcess: "How I work",
    navExperience: "Experience",
    navContact: "Contact",
    heroKicker: "INTEGRATIONS · AUTOMATION · AI",
    heroTitle: "<span>Matías López</span><br>I connect your systems.",
    heroLead:
      "I automate repetitive work for small and mid-sized businesses in Uruguay, Argentina and Chile, so your team stops copying data between spreadsheets, systems and WhatsApp.",
    heroPrimary: "Free assessment",
    heroSecondary: "View services",
    heroLocation:
      "Montevideo, Uruguay · Remote work with Uruguay, Argentina and Chile",
    heroVisualAlt: "Retro computer with a code terminal",
    projectsTitle: "live demos.",
    projectsLead:
      "Systems I built that you can try right now with sample data. They work as a starting point to adapt to your business.",
    servicesTitle: "services.",
    servicesLead:
      "Three ways to take manual work off your team. Fixed price, defined timeline and an optional monthly plan to keep it running.",
    service1Title: "Systems integration",
    service1Text:
      "I get your systems talking: online store, MercadoLibre, ERP, invoicing, spreadsheets and supplier APIs, with stock, prices and orders in sync.",
    service1Price: "from USD 800 · 2–4 weeks",
    service2Title: "Process automation",
    service2Text:
      "Reports that arrive on their own, sales and payment reconciliation, alerts for low stock or failed processes, and automatic loading of orders and spreadsheets.",
    service2Price: "from USD 350 · 1–2 weeks",
    service3Title: "Applied AI",
    service3Text:
      "Assistants that answer with your real catalog and prices, reading invoices and delivery notes from PDFs, and sorting emails or complaints. Always with a person reviewing.",
    service3Price: "from USD 900 · 2–4 weeks",
    processTitle: "how I work.",
    processLead: "We start with a concrete process, not with the technology.",
    process1Title: "Free assessment",
    process1Text:
      "30 minutes on a video call. We walk through one process and see what is worth automating first.",
    process2Title: "Proposal in 48 h",
    process2Text:
      "One page with the solution, timeline, fixed price and the hours you will save each month.",
    process3Title: "Implementation",
    process3Text:
      "I build it, test it with your data and leave it running. 50% upfront and 50% on delivery.",
    process4Title: "Monthly plan",
    process4Text:
      "Optional: monitoring, fixes and improvements so it keeps working as you grow.",
    plan1Name: "BASIC",
    plan1Price: "USD 150/month",
    plan1Text: "Monitoring, bug fixes and up to 2 h of adjustments.",
    plan2Name: "PRO",
    plan2Price: "USD 350/month",
    plan2Text:
      "Everything in Basic, 6 h of improvements and a reply within 24 business hours.",
    plan3Name: "TECH PARTNER",
    plan3Price: "USD 700/month",
    plan3Text:
      "15 h per month, one new automation per month and a monthly meeting.",
    plansNote:
      "Prices in USD, before taxes. Every proposal is adjusted to the real scope of your process.",
    stackTitle: "technical stack.",
    stackLead:
      "Tools I use to build, integrate and operate software and data solutions.",
    experienceTitle: "professional experience.",
    experienceRole1: "BI Analyst / DBA",
    experienceText1:
      "Database, data warehouse and SSAS cube optimization and maintenance. ETL development on Linux, reporting, BI and internal tools.",
    experienceRole2: "Data Analyst / BI",
    experienceText2:
      "Reporting, data analysis and automation development with Python, Power Automate and VBA.",
    experienceRole3: "ERP Developer / DBA",
    experienceText3:
      "ERP implementation and optimization for stock, billing and inventory. Database design and optimization.",
    experienceStackTitle: "experience & stack.",
    experienceStackLead:
      "Over 4 years working with data, ERPs and integrations in retail and distribution, and the tools I use.",
    aboutLinkedin: "View LinkedIn ↗",
    roleLine: "Integrations · Automation · AI",
    contactTitle: "book your assessment.",
    contactLead:
      "Tell me which process takes the most time and which systems you use. I reply within 24 business hours to set up 30 minutes at no cost.",
    formName: "Name",
    formMessage: "Message",
    formPlaceholder:
      "E.g. we enter online store orders into our management system by hand, about 10 h per week.",
    formPrivacyNote: "Your data is used only to reply to this message.",
    privacyLink: "Privacy",
    formSubmit: "Send message",
    formRequired: "Complete this field so I can understand the inquiry.",
    formEmailError: "Enter a valid email so I can reply.",
    formMinError: "Write at least {count} characters to give me context.",
    formReview: "Review the marked fields before sending.",
    formSending: "Sending message...",
    formSent: "Message received. I will reply by email.",
    formFallback:
      "Automatic sending is unavailable. You can email me at lopeznunezmati@gmail.com.",
    footerNavAria: "Secondary navigation",
    backTopAria: "Back to top",
    whatsappAria: "Write on WhatsApp",
    whatsappLabel: "WhatsApp",
    backHome: "Back to home",
    writeEmail: "Write by email",
    goHome: "Go home",
    privacyKicker: "MATUDEV / PRIVACY",
    privacyTitle: "Policy",
    privacyLead:
      "This policy explains how data sent through the contact form is used.",
    privacyUpdated: "Last update: September 30, 2026.",
    privacyDataTitle: "Requested data",
    privacyDataText: "The form requests a name, email and message.",
    privacyUseTitle: "Use of information",
    privacyUseText:
      "The data is used only to answer inquiries, understand project context and prepare a technical or commercial response.",
    privacyProcessTitle: "Form processing",
    privacyProcessText:
      "The form is sent through a Vercel serverless function. The email provider is configured with environment variables. The IP address may be processed temporarily to limit abusive submissions, but it is not added to the message or exposed in the repository.",
    privacyFallbackTitle: "Contact alternatives",
    privacyFallbackText:
      'If automatic sending is unavailable, email me directly at <a href="mailto:lopeznunezmati@gmail.com">lopeznunezmati@gmail.com</a> or contact me via <a href="https://wa.me/59898445531" target="_blank" rel="noopener noreferrer">WhatsApp</a>.',
    privacyDeleteTitle: "Deletion",
    privacyDeleteText:
      "You may request deletion of your inquiry by replying to the same email thread or sending a new request.",
    thanksKicker: "INQUIRY / RECEIVED",
    thanksTitle: "Thanks. I have your message.",
    thanksLead:
      "I will reply by email. If automatic sending was unavailable, you can also contact me directly using the options below.",
    notFoundKicker: "ERROR / ROUTE NOT FOUND",
    notFoundTitle: "This screen does not exist.",
    notFoundLead:
      "The URL was moved or is unavailable. Go back home or contact me if you were looking for project information.",
  };

  const englishMetadata = {
    home: [
      "Matías López — Integrations, automation and AI for SMBs",
      "Matías López connects systems, automates processes and implements AI for small and mid-sized businesses in Uruguay, Argentina and Chile. Free 30-minute assessment.",
    ],
    privacy: [
      "Privacy policy | MatuDev",
      "Privacy policy for the MatuDev contact form.",
    ],
    thanks: [
      "Thanks for your inquiry | MatuDev",
      "Thanks for contacting MatuDev.",
    ],
    notFound: [
      "Page not found | MatuDev",
      "The requested page does not exist on MatuDev.",
    ],
  };

  const spanishContent = {
    text: [],
    html: [],
    attributes: [],
    title: "",
    metadata: [],
  };

  const metadataSelectors = [
    'meta[name="description"]',
    'meta[property="og:title"]',
    'meta[property="og:description"]',
    'meta[name="twitter:title"]',
    'meta[name="twitter:description"]',
    'meta[property="og:locale"]',
  ];

  function currentPage() {
    const path = window.location.pathname;
    if (path.includes("privacy")) return "privacy";
    if (path.includes("gracias")) return "thanks";
    if (path.includes("404")) return "notFound";
    return "home";
  }

  function isEnglish() {
    return (
      new window.URLSearchParams(window.location.search).get("lang") === "en"
    );
  }

  function captureSpanishContent() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      spanishContent.text.push([element, element.textContent]);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      spanishContent.html.push([element, element.innerHTML]);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(";").forEach((mapping) => {
        const [attribute] = mapping.split(":");
        if (attribute) {
          spanishContent.attributes.push([
            element,
            attribute,
            element.getAttribute(attribute),
          ]);
        }
      });
    });

    spanishContent.title = document.title;
    spanishContent.metadata = metadataSelectors
      .map((selector) => document.querySelector(selector))
      .filter(Boolean)
      .map((element) => [element, element.getAttribute("content")]);
  }

  function translateToEnglish() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = english[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = english[element.dataset.i18nHtml];
      if (value !== undefined) element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(";").forEach((mapping) => {
        const [attribute, key] = mapping.split(":");
        if (attribute && english[key] !== undefined)
          element.setAttribute(attribute, english[key]);
      });
    });

    const [title, description] = englishMetadata[currentPage()];
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute("content", "en_US");
  }

  function restoreSpanishContent() {
    spanishContent.text.forEach(([element, value]) => {
      element.textContent = value;
    });
    spanishContent.html.forEach(([element, value]) => {
      element.innerHTML = value;
    });
    spanishContent.attributes.forEach(([element, attribute, value]) => {
      if (value === null) element.removeAttribute(attribute);
      else element.setAttribute(attribute, value);
    });

    document.title = spanishContent.title;
    spanishContent.metadata.forEach(([element, value]) => {
      if (value === null) element.removeAttribute("content");
      else element.setAttribute("content", value);
    });
  }

  function preserveLanguage(englishVersion) {
    document.querySelectorAll("[data-preserve-language]").forEach((link) => {
      const url = new window.URL(
        link.getAttribute("href"),
        window.location.href,
      );
      if (englishVersion) url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      link.href = `${url.pathname}${url.search}${url.hash}`;
    });
  }

  function configureLanguageSwitch(englishVersion) {
    const link = document.querySelector("[data-language-switch]");
    const flag = link?.querySelector("[data-language-flag]");
    if (!link || !flag) return;

    const url = new window.URL(window.location.href);

    if (englishVersion) {
      url.searchParams.delete("lang");
      link.setAttribute("aria-label", "Versión en español");
      flag.src = "assets/img/flag-es.svg";
    } else {
      url.searchParams.set("lang", "en");
      link.setAttribute("aria-label", "English version");
      flag.src = "assets/img/flag-us.svg";
    }

    link.href = `${url.pathname}${url.search}${url.hash}`;
  }

  function applyLanguage(englishVersion, preserveReadingPosition = false) {
    const anchorLine = Math.min(120, window.innerHeight / 4);
    const anchor = preserveReadingPosition
      ? [...document.querySelectorAll("section[id]")]
          .filter(
            (section) => section.getBoundingClientRect().top <= anchorLine,
          )
          .sort(
            (first, second) =>
              second.getBoundingClientRect().top -
              first.getBoundingClientRect().top,
          )[0]
      : null;
    const anchorTop = anchor?.getBoundingClientRect().top;

    document.documentElement.lang = englishVersion ? "en" : "es-UY";
    if (englishVersion) translateToEnglish();
    else restoreSpanishContent();

    configureLanguageSwitch(englishVersion);
    preserveLanguage(englishVersion);
    document.dispatchEvent(
      new CustomEvent("matudev:languagechange", {
        detail: { language: englishVersion ? "en" : "es" },
      }),
    );

    if (anchor && anchorTop !== undefined) {
      const restorePosition = () => {
        if (!anchor.isConnected) return;
        const documentElement = document.documentElement;
        const previousScrollBehavior = documentElement.style.scrollBehavior;
        documentElement.style.scrollBehavior = "auto";
        window.scrollTo(
          0,
          window.scrollY + anchor.getBoundingClientRect().top - anchorTop,
        );
        documentElement.style.scrollBehavior = previousScrollBehavior;
      };
      restorePosition();
      window.requestAnimationFrame(restorePosition);
    }
  }

  function enableLanguageSwitch() {
    const link = document.querySelector("[data-language-switch]");
    if (!link) return;

    link.addEventListener("click", (event) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;

      event.preventDefault();
      const englishVersion = !isEnglish();
      const url = new window.URL(window.location.href);
      if (englishVersion) url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      window.history.pushState(
        { matudevLanguage: englishVersion ? "en" : "es" },
        "",
        `${url.pathname}${url.search}${url.hash}`,
      );
      applyLanguage(englishVersion, true);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    captureSpanishContent();
    enableLanguageSwitch();
    applyLanguage(isEnglish());
  });

  window.addEventListener("popstate", () => applyLanguage(isEnglish(), true));
})();
