(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const header = document.querySelector('[data-header]');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const langToggle = document.querySelector('[data-lang-toggle]');
  const langFlag = document.querySelector('[data-lang-flag]');
  const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])';
  const storage = {
    lang: 'matudev-lang',
    theme: 'matudev-theme'
  };
  const sourceText = {
    text: new Map(),
    attr: new Map()
  };
  let currentLang = getStoredValue(storage.lang) === 'en' ? 'en' : 'es';
  let currentTheme = getStoredValue(storage.theme) || (prefersDark.matches ? 'dark' : 'light');
  let lastFocusedElement = null;
  let submitting = false;

  document.documentElement.dataset.theme = currentTheme === 'dark' ? 'dark' : 'light';

  const translations = {
    en: {
      skipLink: 'Skip to content',
      navAria: 'Main navigation',
      brandAria: 'MatuDev, back to home',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      navHome: 'Home',
      navServices: 'Services',
      navProcess: 'Process',
      navAbout: 'About',
      navContact: 'Contact',
      preferencesAria: 'Preferences',
      themeToggle: 'Change theme',
      langToggle: 'View site in Spanish',
      navTalk: "Let's talk",
      heroEyebrow: 'Data, automation and internal solutions',
      heroTitle: 'I solve everyday business problems with simple, well-built technology.',
      heroLead: 'I help organize data, automate repetitive work and build internal tools so your business runs with less friction and more clarity.',
      heroStripAria: 'Available services',
      stripAutomation: 'Automations that save time',
      stripDashboards: 'Dashboards for better decisions',
      stripDatabases: 'More organized databases',
      stripApps: 'Connected internal tools',
      heroScroll: 'Go to services',
      visualProblemTitle: 'Problem',
      visualProblemText: 'Manual reports, repeated files and tasks that consume hours.',
      visualSolutionTitle: 'Solution',
      visualSolutionText: 'Connected data, scheduled processes and clear dashboards.',
      visualResultTitle: 'Outcome',
      visualResultText: 'Less manual work and better decisions.',
      trustEyebrow: 'Trust from the first conversation',
      trustTitle: 'Solutions designed so data can be used, explained and maintained.',
      trustListAria: 'Trust indicators',
      trustItem1: 'Clear diagnosis',
      trustItem2: 'Direct communication',
      trustItem3: 'Result-oriented work',
      trustItem4: 'Traceable processes',
      trustItem5: 'Maintainable solutions',
      servicesEyebrow: 'Services',
      servicesTitle: 'Concrete services to organize information, automate work and connect systems.',
      servicesIntro: 'Every solution starts from the operational problem: less manual work, more reliable data and tools the team can use without friction.',
      resultLabel: 'Outcome',
      techAria: 'Technologies',
      service1Title: 'Process Automation and ETL',
      service1Description: 'I automate repetitive tasks, data loading and report generation through scheduled, controlled processes designed to handle errors. Solutions can connect files, databases, APIs and business tools.',
      service1Result: 'Less manual work, lower risk of error and scheduled, traceable processes.',
      service1Cta: 'Automate a process',
      service2Title: 'Business Intelligence and Dashboards',
      service2Description: 'I design and optimize Business Intelligence solutions that transform operational information into useful business indicators. I work with data modeling, dashboards, metrics, permissions, publishing and analytical environment maintenance.',
      service2Result: 'Centralized information, clear indicators and reliable dashboards for decision-making.',
      service2Cta: 'Improve my reports',
      service3Title: 'Databases and Analytical Models',
      service3Description: 'I analyze and improve database queries, structures and processes to reduce execution times, organize historical information and maintain more stable analytical solutions. I also work with Analysis Services models and cubes.',
      service3Result: 'More efficient queries, more stable loading processes and more maintainable data models.',
      service3Cta: 'Review my database',
      service4Title: 'Internal Applications and Integrations',
      service4Description: 'I build internal tools, APIs and integrations designed to centralize information, connect systems and replace processes that currently depend on spreadsheets, emails or manual tasks.',
      service4Result: 'Centralized information, connected systems and simpler internal processes.',
      service4TechDatabases: 'Databases',
      service4Cta: 'Discuss an internal solution',
      processEyebrow: 'How to start',
      processTitle: 'A simple path from the problem to a usable solution.',
      process1Title: 'You explain the problem',
      process1Text: 'We review which task takes time, what information exists and what result you need to obtain.',
      process2Title: 'We define the scope',
      process2Text: 'We agree on priorities, data sources, deliverables and a clear way to validate that the solution works.',
      process3Title: 'I build and validate',
      process3Text: 'I work in short stages to show progress, adjust criteria and avoid surprises at the end.',
      process4Title: 'I deliver and support',
      process4Text: 'I leave the solution documented, ready to use and with a clear handoff for the team.',
      aboutImageAlt: 'Photo of Matias Lopez, data professional',
      aboutEyebrow: 'About me',
      aboutTitle: 'I am Matias, and I work with data, databases and automation to solve real problems.',
      aboutP1: 'I am a data analyst and database administrator, as well as a Computer Engineering student. I work at the intersection of data, technology and business, building solutions that turn scattered information and manual processes into clear, efficient and easy-to-use tools.',
      aboutP2: 'My experience combines diagnosis, technical judgment and direct communication. I can talk with business users, understand the full process and turn it into a maintainable, documented solution designed for daily use.',
      aboutHighlightsAria: 'Relevant experience',
      aboutHighlight1Title: 'Practical approach',
      aboutHighlight1Text: 'I understand the problem first, then choose the right technology.',
      aboutHighlight2Title: 'Sustainable work',
      aboutHighlight2Text: 'I deliver solutions that are clear to use, review and maintain.',
      aboutHighlight3Title: 'Clear communication',
      aboutHighlight3Text: 'I explain progress, decisions and limits without unnecessary complexity.',
      socialAria: 'Professional profiles',
      contactEyebrow: 'Contact',
      contactTitle: 'Do you have data or processes that could work better?',
      contactIntro: "Tell me briefly what you need and let's evaluate how to turn it into a clear, useful and sustainable solution.",
      contactChannelsAria: 'Contact channels',
      contactFormButton: 'Form',
      contactEmailPrefix: 'You can also write to',
      formName: 'Name',
      formCompany: 'Company',
      formOptional: 'optional',
      formEmail: 'Email',
      formProjectType: 'Project type',
      formSelect: 'Select an option',
      formNotSure: 'I am not sure',
      formMessage: 'Message',
      formHelp: 'Include the current process, available data and the result you expect.',
      formPrivacy: 'I agree that MatuDev may use this data to answer my inquiry.',
      formPrivacyLink: 'View privacy policy',
      formSubmit: 'Send inquiry',
      footerText: 'Data analysis, Power BI, SQL, automation and integrations to turn scattered information into clear decisions.',
      faqTitle: 'Frequently asked questions',
      faq1Q: 'What type of projects do you work on?',
      faq1A: 'I work with data, reports, databases, spreadsheets, automations or integrations that need to be organized to operate or make decisions better.',
      faq2Q: 'Can you improve something that already exists?',
      faq2A: 'Yes. It often makes sense to review what already exists, detect issues in the model, design, performance or maintenance, and improve from there.',
      faq3Q: 'How is project cost calculated?',
      faq3A: 'It depends on scope, data sources, process complexity, urgency and the level of support required.',
      footerNavAria: 'Secondary navigation',
      privacy: 'Privacy',
      backTop: 'Back to top',
      quickActionsAria: 'Quick actions',
      whatsappAria: 'Contact via WhatsApp'
    }
  };

  const runtimeMessages = {
    en: {
      msgRequiredConsent: 'I need your consent to answer the inquiry.',
      msgRequiredField: 'This field is required.',
      msgInvalidEmail: 'Enter a valid email.',
      msgMinLength: 'Enter at least {count} characters.',
      msgSent: 'Inquiry sent.',
      msgWait: 'Wait a few seconds and try again.',
      msgReview: 'Review the marked fields before sending.',
      msgSending: 'Sending inquiry...',
      msgSendingButton: 'Sending...'
    }
  };

  function getStoredValue(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function setStoredValue(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      /* Storage can be unavailable in some private browsing contexts. */
    }
  }

  function captureSourceLanguage() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (key && !sourceText.text.has(key)) {
        sourceText.text.set(key, element.textContent);
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
      const mappings = element.getAttribute('data-i18n-attr').split(';');
      mappings.forEach((mapping) => {
        const [attribute, key] = mapping.split(':').map((value) => value.trim());
        if (attribute && key && !sourceText.attr.has(key)) {
          sourceText.attr.set(key, element.getAttribute(attribute) || '');
        }
      });
    });
  }

  function t(key) {
    if (currentLang === 'en') {
      return translations.en[key] || sourceText.text.get(key) || sourceText.attr.get(key) || key;
    }

    return sourceText.text.get(key) || sourceText.attr.get(key) || key;
  }

  function getMessage(key) {
    const form = document.getElementById('formulario-contacto');
    if (currentLang === 'en') {
      return runtimeMessages.en[key] || form?.dataset[key] || key;
    }

    return form?.dataset[key] || key;
  }

  function getMenuCloseLabel() {
    return currentLang === 'en' ? translations.en.closeMenu : (navToggle?.dataset.menuCloseLabel || t('openMenu'));
  }

  function isDesktopNav() {
    return window.matchMedia('(min-width: 900px)').matches;
  }

  function applyTheme(theme) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = currentTheme;
    setStoredValue(storage.theme, currentTheme);
  }

  function transitionTheme(theme, trigger) {
    if (reduceMotion.matches || !document.startViewTransition) {
      document.documentElement.classList.add('theme-transition-fallback');
      applyTheme(theme);
      window.setTimeout(() => {
        document.documentElement.classList.remove('theme-transition-fallback');
      }, 280);
      return;
    }

    const rect = trigger?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.classList.add('theme-transition');
    const transition = document.startViewTransition(() => applyTheme(theme));

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 560,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });

    transition.finished.finally(() => {
      document.documentElement.classList.remove('theme-transition');
    });
  }

  function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'es';
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'es-UY';
    setStoredValue(storage.lang, currentLang);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (key) element.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
      const mappings = element.getAttribute('data-i18n-attr').split(';');
      mappings.forEach((mapping) => {
        const [attribute, key] = mapping.split(':').map((value) => value.trim());
        if (attribute && key) element.setAttribute(attribute, t(key));
      });
    });

    if (langFlag) {
      const targetEnglish = currentLang === 'es';
      langFlag.src = targetEnglish ? 'images/flag-us.svg' : 'images/flag-es.svg';
    }

    if (navToggle && navToggle.getAttribute('aria-expanded') === 'true') {
      navToggle.setAttribute('aria-label', getMenuCloseLabel());
    }
  }

  function transitionLanguage(lang) {
    if (reduceMotion.matches) {
      applyLanguage(lang);
      return;
    }

    if (document.startViewTransition) {
      document.documentElement.classList.add('language-transition');
      const transition = document.startViewTransition(() => applyLanguage(lang));

      transition.finished.finally(() => {
        document.documentElement.classList.remove('language-transition');
      });
      return;
    }

    document.documentElement.classList.remove('language-transition-fallback-in');
    document.documentElement.classList.add('language-transition-fallback-out');

    window.setTimeout(() => {
      applyLanguage(lang);
      document.documentElement.classList.remove('language-transition-fallback-out');
      document.documentElement.classList.add('language-transition-fallback-in');

      window.setTimeout(() => {
        document.documentElement.classList.remove('language-transition-fallback-in');
      }, 280);
    }, 150);
  }

  function getMenuFocusable() {
    if (!navMenu) return [];
    return Array.from(navMenu.querySelectorAll(focusableSelector)).filter((element) => element.offsetParent !== null);
  }

  function getMenuTrapItems() {
    return [navToggle, ...getMenuFocusable()].filter(Boolean);
  }

  function openMenu() {
    if (!navToggle || !navMenu || isDesktopNav()) return;
    lastFocusedElement = document.activeElement;
    navMenu.classList.add('is-open');
    document.body.classList.add('menu-open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', getMenuCloseLabel());
    const first = getMenuFocusable()[0];
    if (first) first.focus();
  }

  function closeMenu(restoreFocus) {
    if (!navToggle || !navMenu) return;
    navMenu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', t('openMenu'));
    if (restoreFocus && lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  function toggleMenu() {
    if (!navMenu) return;
    if (navMenu.classList.contains('is-open')) {
      closeMenu(true);
    } else {
      openMenu();
    }
  }

  function trapMenuFocus(event) {
    if (event.key !== 'Tab' || !navMenu || !navMenu.classList.contains('is-open') || isDesktopNav()) return;
    const focusable = getMenuTrapItems();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function initNavigation() {
    navToggle?.addEventListener('click', toggleMenu);
    navMenu?.addEventListener('click', (event) => event.stopPropagation());

    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        event.preventDefault();
        closeMenu(false);
        target.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
        if (target.id === 'formulario-contacto') {
          window.setTimeout(() => document.getElementById('name')?.focus(), reduceMotion.matches ? 0 : 260);
        }
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu(true);
      trapMenuFocus(event);
    });

    document.addEventListener('click', (event) => {
      if (!navMenu || !navToggle || !navMenu.classList.contains('is-open')) return;
      if (navMenu.contains(event.target) || navToggle.contains(event.target)) return;
      closeMenu(false);
    });

    window.addEventListener('resize', () => {
      if (isDesktopNav()) closeMenu(false);
    });
  }

  function initPreferences() {
    captureSourceLanguage();
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    themeToggle?.addEventListener('click', (event) => {
      transitionTheme(currentTheme === 'dark' ? 'light' : 'dark', event.currentTarget);
    });

    langToggle?.addEventListener('click', () => {
      transitionLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }

  function updateHeader() {
    header?.classList.toggle('is-scrolled', window.scrollY > 10);
  }

  function updateActiveNav() {
    if (!sections.length) return;
    const current = sections.reduce((active, section) => {
      return window.scrollY >= section.offsetTop - 140 ? section.id : active;
    }, sections[0].id);

    document.querySelectorAll('.nav-menu a[href^="#"]').forEach((link) => {
      const isActive = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function initReveal() {
    const items = Array.from(document.querySelectorAll('.reveal'));
    if (!items.length) return;

    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
  }

  function setError(control, message) {
    if (!control) return;
    const id = control.getAttribute('aria-describedby')?.split(' ').find((value) => value.endsWith('-error'));
    const error = id ? document.getElementById(id) : null;
    control.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (error) error.textContent = message || '';
  }

  function validateField(control) {
    if (!control || control.type === 'hidden') return true;
    const value = String(control.value || '').trim();
    let message = '';

    if (control.type === 'checkbox' && control.validity.valueMissing) {
      message = getMessage('msgRequiredConsent');
    } else if (control.validity.valueMissing) {
      message = getMessage('msgRequiredField');
    } else if (control.type === 'email' && control.validity.typeMismatch) {
      message = getMessage('msgInvalidEmail');
    } else if (control.minLength > 0 && value.length > 0 && value.length < control.minLength) {
      message = getMessage('msgMinLength').replace('{count}', control.minLength);
    }

    setError(control, message);
    return !message;
  }

  function initForm() {
    const form = document.getElementById('formulario-contacto');
    if (!form) return;

    const status = document.getElementById('form-status');
    const submit = form.querySelector('[data-submit]');
    const startedAt = document.getElementById('form-started-at');
    if (startedAt) startedAt.value = String(Date.now());

    const controls = Array.from(form.querySelectorAll('input, select, textarea')).filter((control) => control.name !== '_honey');

    controls.forEach((control) => {
      control.addEventListener('blur', () => validateField(control));
      control.addEventListener('input', () => {
        if (control.getAttribute('aria-invalid') === 'true') validateField(control);
      });
      control.addEventListener('change', () => validateField(control));
    });

    form.addEventListener('submit', (event) => {
      if (submitting) {
        event.preventDefault();
        return;
      }

      const honey = form.querySelector('input[name="_honey"]');
      if (honey && String(honey.value || '').trim() !== '') {
        event.preventDefault();
        form.reset();
        if (status) {
          status.textContent = getMessage('msgSent');
          status.className = 'form-status success';
        }
        return;
      }

      const elapsed = Date.now() - Number(startedAt?.value || Date.now());
      if (elapsed < 2500) {
        event.preventDefault();
        if (status) {
          status.textContent = getMessage('msgWait');
          status.className = 'form-status error';
        }
        if (startedAt) startedAt.value = String(Date.now() - 2500);
        return;
      }

      const results = controls.map(validateField);
      const valid = results.every(Boolean);
      if (!valid) {
        event.preventDefault();
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        firstInvalid?.focus();
        if (status) {
          status.textContent = getMessage('msgReview');
          status.className = 'form-status error';
        }
        return;
      }

      submitting = true;
      if (status) {
        status.textContent = getMessage('msgSending');
        status.className = 'form-status';
      }
      if (submit) {
        submit.disabled = true;
        submit.textContent = getMessage('msgSendingButton');
      }
    });
  }

  function initYear() {
    const year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  function initScrollHandlers() {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        updateHeader();
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }, { passive: true });
  }

  function initMobileContactVisibility() {
    const contact = document.getElementById('contacto');
    if (!contact || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        document.body.classList.toggle('contact-visible', entry.isIntersecting);
      });
    }, { threshold: 0.12 });

    observer.observe(contact);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initPreferences();
    initNavigation();
    initReveal();
    initForm();
    initYear();
    initScrollHandlers();
    initMobileContactVisibility();
    updateHeader();
    updateActiveNav();
  });
})();
