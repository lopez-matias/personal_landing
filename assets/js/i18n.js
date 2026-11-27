(function () {
  const english = {
    skipLink: "Skip to content",
    navAria: "Main navigation",
    brandAria: "MatuDev, back to start",
    themeAria: "Change theme",
    menuOpenAria: "Open menu",
    menuCloseAria: "Close menu",
    navServices: "Services",
    navPlans: "Plans",
    navProjects: "Project",
    navExperience: "Experience",
    navContact: "Book a call",
    heroTitle: "Stop doing by hand what a computer can do on its own.",
    heroLead:
      "I automate tasks, connect your systems and add artificial intelligence so your business grows without more manual work.",
    heroPrimary: "Book a free call",
    heroSecondary: "See plans",
    heroLocation:
      "From Montevideo, for small businesses in Uruguay, Argentina and Chile.",
    heroBubble: "Which task do you repeat every day?",
    heroVisualAlt: "Pixel-art portrait of Matías López",
    heroCaption: "Matías López, developer",
    servicesTitle: "What I can solve",
    service1Title: "Automation",
    service1Text:
      "Reports, data entry and emails that a person handles today run on their own.",
    service2Title: "Systems integration",
    service2Text:
      "Your online store, stock and invoicing share the same data, with nothing entered twice.",
    service3Title: "Artificial intelligence",
    service3Text:
      "Assistants that answer your customers and read documents for you.",
    plansTitle: "Plans",
    plansLead:
      "To give you an idea before we talk. The final price is set after the call, with scope and timeline in writing.",
    plan1Title: "Assessment",
    plan1Price: "Free",
    plan1Text:
      "A 30-minute call. We pick one process and I tell you whether it's worth automating and what it would cost.",
    plan1Time: "30 minutes",
    plan2Title: "Express automation",
    plan2Price: "from US$ 350",
    plan2Text:
      "One automated process: a report that arrives on its own, order entry, or alerts when something fails.",
    plan2Time: "1 to 2 weeks",
    plan3Title: "Management dashboard",
    plan3Price: "from US$ 500",
    plan3Text:
      "Sales, stock and cash in a Power BI dashboard that updates itself every day.",
    plan3Time: "2 to 3 weeks",
    plan4Title: "Integration",
    plan4Price: "from US$ 800",
    plan4Text:
      "We connect two systems: online store with stock, sales with invoicing, or spreadsheets with your management system.",
    plan4Time: "2 to 4 weeks",
    plan5Title: "AI assistant",
    plan5Price: "from US$ 900",
    plan5Text:
      "Answers customer questions on WhatsApp or your website, using your real product and price information.",
    plan5Time: "2 to 4 weeks",
    plan6Title: "Monthly support",
    plan6Price: "from US$ 150/month",
    plan6Text:
      "Maintenance, adjustments and new improvements with hours included every month. No minimum term.",
    plan6Time: "Month to month",
    plansNote:
      "Prices in US dollars, taxes not included. You can pay in Uruguayan, Argentine or Chilean pesos.",
    processTitle: "How I work",
    step1Title: "Call",
    step1Text: "Tell me what takes you the most time today.",
    step2Title: "Proposal",
    step2Text: "Scope, timeline and a fixed price.",
    step3Title: "Delivery",
    step3Text: "Progress you can see every week.",
    step4Title: "Support",
    step4Text: "If you need it, month to month.",
    projectsTitle: "Project",
    experienceStackTitle: "Experience",
    experienceStackLead:
      "4+ years working with data, management systems and integrations at real companies.",
    experienceDate1: "2026 – present",
    experienceRole1: "Retail · Supermarkets",
    experienceText1: "Databases, reports and integrations.",
    experienceRole2: "Industry",
    experienceText2: "Reporting and automation of administrative tasks.",
    experienceRole3: "Retail and business management",
    experienceText3: "Stock and invoicing systems.",
    stackTitle: "Tools I work with",
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

  // Clicking an in-page link (#planes) also fires popstate. Only re-apply the
  // language when it actually changed; otherwise the reading-position restore
  // would undo the anchor jump and the menu would look like it does nothing.
  window.addEventListener("popstate", () => {
    const englishVersion = isEnglish();
    if (englishVersion === document.documentElement.lang.startsWith("en"))
      return;
    applyLanguage(englishVersion, true);
  });
})();
