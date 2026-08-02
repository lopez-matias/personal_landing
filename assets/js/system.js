(function () {
  const themeKey = "matudev-system-theme";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelector("[data-nav-links]");
  const progress = document.querySelector("[data-progress]");
  const topBubble = document.querySelector(".top-bubble");
  const form = document.querySelector("[data-contact-form]");

  function storedTheme() {
    try {
      return localStorage.getItem(themeKey);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(themeKey, theme);
    } catch (error) {
      /* Storage can be unavailable in restricted browser modes. */
    }
  }

  function applyTheme(theme) {
    const next = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    saveTheme(next);
  }

  function initTheme() {
    applyTheme(storedTheme() || (prefersDark.matches ? "dark" : "light"));
    themeToggle?.addEventListener("click", () => {
      if (!reduceMotion.matches) {
        document.documentElement.classList.add("theme-switching");
        window.setTimeout(() => {
          document.documentElement.classList.remove("theme-switching");
        }, 320);
      }
      applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    });
  }

  function initNav() {
    const setToggleLabel = (open) => {
      if (!navToggle) return;
      const label = open ? navToggle.dataset.closeLabel : navToggle.dataset.openLabel;
      if (label) navToggle.setAttribute("aria-label", label);
    };

    navToggle?.addEventListener("click", () => {
      const open = Boolean(navLinks?.classList.toggle("is-open"));
      nav?.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      setToggleLabel(open);
    });

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        navLinks?.classList.remove("is-open");
        nav?.classList.remove("is-open");
        navToggle?.setAttribute("aria-expanded", "false");
        setToggleLabel(false);
      });
    });

    document.addEventListener("matudev:languagechange", () => {
      setToggleLabel(Boolean(navLinks?.classList.contains("is-open")));
    });
  }

  function initProgress() {
    if (!progress) return;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
      progress.style.width = `${value}%`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function initActiveNav() {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const links = Array.from(document.querySelectorAll("[data-nav-links] a[href^='#']"));
    if (!sections.length || !links.length) return;

    const update = () => {
      const current = sections.reduce((active, section) => (
        window.scrollY >= section.offsetTop - 150 ? section.id : active
      ), sections[0].id);

      links.forEach((link) => {
        const active = link.getAttribute("href") === `#${current}`;
        link.toggleAttribute("aria-current", active);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initReveal() {
    const items = Array.from(document.querySelectorAll(".reveal"));
    if (!items.length) return;
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
  }

  function initFloatingActions() {
    if (!topBubble) return;
    const mobile = window.matchMedia("(max-width: 620px)");
    const secondSection = document.querySelector("main section:nth-of-type(2)");

    const visibleFrom = () => {
      if (secondSection) return Math.max(80, secondSection.offsetTop - 120);
      return 180;
    };

    const update = () => {
      topBubble.classList.toggle("is-visible", mobile.matches && window.scrollY >= visibleFrom());
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    mobile.addEventListener?.("change", update);
  }

  function setError(field, message) {
    const id = field.getAttribute("aria-describedby")?.split(" ").find((value) => value.endsWith("-error"));
    const error = id ? document.getElementById(id) : null;
    field.setAttribute("aria-invalid", message ? "true" : "false");
    if (error) error.textContent = message || "";
  }

  function validateField(field, messages) {
    const value = String(field.value || "").trim();
    let message = "";
    if (field.type === "checkbox" && field.validity.valueMissing) message = messages.consent;
    else if (field.validity.valueMissing) message = messages.required;
    else if (field.type === "email" && field.validity.typeMismatch) message = messages.email;
    else if (field.minLength > 0 && value.length > 0 && value.length < field.minLength) {
      message = messages.min.replace("{count}", field.minLength);
    }
    setError(field, message);
    return !message;
  }

  function formPayload(formElement) {
    const data = new FormData(formElement);
    return {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      projectType: data.get("projectType"),
      message: data.get("message"),
      sourcePath: window.location.pathname,
      startedAt: data.get("startedAt")
    };
  }

  function initForm() {
    if (!form) return;
    const status = form.querySelector("[data-form-status]");
    const submit = form.querySelector("[data-submit]");
    const startedAt = form.querySelector("[name='startedAt']");
    const messages = {
      required: form.dataset.required,
      email: form.dataset.emailError,
      min: form.dataset.minError,
      consent: form.dataset.consentError,
      review: form.dataset.review,
      sending: form.dataset.sending,
      sent: form.dataset.sent,
      fallback: form.dataset.fallback,
      button: submit?.textContent || "Enviar"
    };

    if (startedAt) startedAt.value = String(Date.now());
    const fields = Array.from(form.querySelectorAll("input, select, textarea")).filter((field) => field.name !== "website");

    fields.forEach((field) => {
      field.addEventListener("blur", () => validateField(field, messages));
      field.addEventListener("input", () => {
        if (field.getAttribute("aria-invalid") === "true") validateField(field, messages);
      });
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const trap = form.querySelector("[name='website']");
      if (trap && trap.value.trim()) return;

      const valid = fields.map((field) => validateField(field, messages)).every(Boolean);
      if (!valid) {
        status.textContent = messages.review;
        status.className = "form-status";
        form.querySelector("[aria-invalid='true']")?.focus();
        return;
      }

      status.textContent = messages.sending;
      status.className = "form-status";
      if (submit) submit.disabled = true;

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formPayload(form))
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.ok === false) throw new Error(result.message || "contact_unavailable");

        status.textContent = result.emailSent === false ? messages.fallback : messages.sent;
        status.className = "form-status success";
        form.reset();
        if (startedAt) startedAt.value = String(Date.now());
      } catch (error) {
        status.textContent = messages.fallback;
        status.className = "form-status";
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNav();
    initProgress();
    initActiveNav();
    initReveal();
    initFloatingActions();
    initForm();
  });
})();
