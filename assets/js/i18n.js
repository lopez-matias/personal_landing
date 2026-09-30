(function () {
  const english = {
    skipLink: "Skip to content",
    navAria: "Main navigation",
    brandAria: "MatuDev, back to start",
    themeAria: "Change theme",
    menuOpenAria: "Open menu",
    menuCloseAria: "Close menu",
    navProjects: "Projects",
    navServices: "Services",
    navStack: "Technologies",
    navAbout: "About",
    navContact: "Contact",
    heroKicker: "SOFTWARE · BACKEND · DATA.",
    heroTitle: "Hi, I’m<br><span>Matías.</span>",
    heroLead:
      "I build software, automations and integrations that turn complex processes into clear, useful tools.",
    heroPrimary: "View projects",
    heroSecondary: "Let’s talk",
    heroVisualAlt: "Retro computer with a code terminal",
    quickAria: "Profile links",
    quickTitle: "PROFILES",
    projectsTitle: "my projects",
    servicesTitle: "how I can help",
    service1Title: "Backend",
    service1Text:
      "APIs, application logic and services connected to databases.",
    service2Title: "Software / Web Apps",
    service2Text: "Applications and web tools adapted to real processes.",
    service3Title: "Data",
    service3Text: "SQL, ETL, reporting, indicators and BI.",
    service4Title: "Integrations",
    service4Text: "Systems, APIs, files and automation working together.",
    stackTitle: "technologies",
    aboutTitle: "how I work.",
    aboutP1: "Before choosing a technology, I try to understand the process.",
    aboutP2:
      "I work across backend, web applications and databases. I combine professional experience with my Computer Engineering studies in Uruguay to build clear, maintainable and useful solutions.",
    aboutLinkedin: "LinkedIn ↗",
    experienceAria: "Work experience",
    experienceRole1: "Business Intelligence Analyst / DBA",
    experienceRole2: "Data Analyst / Business Intelligence",
    experienceRole3: "ERP Developer / DBA",
    roleLine: "Software · Backend · Web · Data",
    contactTitle: "tell me about your idea.",
    contactLead:
      "If you need to build a tool, connect systems, automate a process or work with your data, tell me about the problem. I’ll reply by email with clear next steps.",
    formName: "Name",
    formMessage: "Message",
    formPlaceholder: "Tell me what you need to build, improve or connect.",
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
      "MatuDev — Software Development, Data & Integrations",
      "Software development, web applications, APIs, databases, automation and integrations with Python, JavaScript, Java and SQL.",
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
