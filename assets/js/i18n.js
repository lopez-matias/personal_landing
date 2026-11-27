(function () {
  const english = {
    skipLink: "Skip to content",
    navAria: "Main navigation",
    brandAria: "MatuDev, back to start",
    themeAria: "Change theme",
    menuOpenAria: "Open menu",
    menuCloseAria: "Close menu",
    navServices: "Services",
    navProcess: "How I work",
    navProjects: "Projects",
    navExperience: "Experience",
    navContact: "Book a call",
    heroTitle: "Less manual work for your small business.",
    heroLead:
      "I automate repetitive tasks, connect the systems that don't talk to each other yet and add AI where it really saves hours. I work remotely with small and mid-sized companies in Uruguay, Argentina and Chile.",
    heroPrimary: "Book a 30-minute call",
    heroSecondary: "Message me on WhatsApp",
    heroLocation: "Montevideo, Uruguay. The first call is free.",
    heroBubble: "Which task do you repeat every day?",
    heroVisualAlt: "Pixel-art portrait of Matías López",
    heroCaption: "Matías López, developer",
    servicesTitle: "What I can solve",
    servicesLead:
      "Three problems I often see in small companies, and how I tackle them.",
    service1Title: "Process automation",
    service1Problem:
      "Someone spends hours copying data into spreadsheets, building reports or sending the same emails.",
    service1Text:
      "I build workflows that do that work on their own and alert you when something fails. You review the result, not the process.",
    service2Title: "Systems integration",
    service2Problem:
      "Online stock doesn't match the store, and orders get entered twice.",
    service2Text:
      "I connect your ERP, online store, CRM and invoicing so they share the same data, with no manual entry in between.",
    service3Title: "Applied artificial intelligence",
    service3Problem:
      "The same customer questions, receipts read one by one, unsorted inboxes.",
    service3Text:
      "I implement assistants and document readers connected to your data. They can run in the cloud or on your own server when information can't leave the company.",
    processTitle: "How I work",
    processLead:
      "Before a single line of code, you know what you'll get, when, and how much it costs.",
    step1Title: "30-minute call",
    step1Text:
      "Tell me which process takes the most time today. Free and with no commitment.",
    step2Title: "Fixed proposal",
    step2Text: "You get scope, timeline and a fixed price before we start.",
    step3Title: "Delivery in stages",
    step3Text:
      "Short iterations, so you see something working from the first week.",
    step4Title: "Monthly support, if you need it",
    step4Text:
      "Maintenance, adjustments and new automations for a fixed monthly fee.",
    projectsTitle: "Projects",
    projectsLead:
      "Systems I built for inventory, sales management, internal operations and finance. All of them have a live demo.",
    experienceStackTitle: "Experience",
    experienceStackLead:
      "What I apply with clients is what I do every day at real companies: databases, ERP, ETL and integrations.",
    experienceDate1: "2026 – present",
    experienceRole1: "BI Analyst / DBA",
    experienceText1:
      "Database, data warehouse and SSAS cube maintenance and optimization. ETL on Linux, API integrations, reporting and internal tools.",
    experienceRole2: "Data / BI Analyst",
    experienceText2:
      "Reporting, data analysis and automation with Python, Power Automate and VBA.",
    experienceRole3: "ERP Developer / DBA",
    experienceText3:
      "ERP implementation and optimization for stock, invoicing and inventory. Database design.",
    stackTitle: "Tools",
    aboutLinkedin: "See full profile on LinkedIn ↗",
    roleLine: "Automation, integrations and AI for small businesses",
    contactTitle: "Tell me what you want to automate",
    contactLead:
      "Two or three lines are enough: what you do by hand today and which systems you use. I'll reply to set up the call.",
    formName: "Name and company",
    formMessage: "Which process would you like to improve?",
    formPlaceholder:
      "E.g.: we manually enter web orders into the invoicing system.",
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
      "Matías López — Automation, integrations and AI for small businesses | MatuDev",
      "Matías López, freelance developer in Montevideo. I automate processes, integrate systems and implement AI for small businesses in Uruguay, Argentina and Chile.",
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
