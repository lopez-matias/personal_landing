(function () {
  const themeKey = "matudev-system-theme";
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navPanel = document.querySelector("[data-nav-links]");
  const form = document.querySelector("[data-contact-form]");

  function saveTheme(theme) {
    try {
      localStorage.setItem(themeKey, theme);
    } catch {
      // Storage may be unavailable in restricted browser modes.
    }
  }

  function applyTheme(theme) {
    const next = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "dark" ? "#0b0d10" : "#fbfbfa");
    saveTheme(next);
  }

  function initTheme() {
    applyTheme(document.documentElement.dataset.theme);
    themeToggle?.addEventListener("click", () => {
      applyTheme(
        document.documentElement.dataset.theme === "dark" ? "light" : "dark",
      );
    });
  }

  function setMenu(open) {
    navPanel?.classList.toggle("is-open", open);
    navToggle?.setAttribute("aria-expanded", String(open));
    if (navToggle) {
      const label = open
        ? navToggle.dataset.closeLabel
        : navToggle.dataset.openLabel;
      if (label) navToggle.setAttribute("aria-label", label);
    }
  }

  function initNav() {
    navToggle?.addEventListener("click", () =>
      setMenu(!navPanel?.classList.contains("is-open")),
    );
    navPanel
      ?.querySelectorAll('a[href^="#"]')
      .forEach((link) => link.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenu(false);
    });

    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const links = Array.from(
      document.querySelectorAll('.nav-links a[href^="#"]'),
    );
    if (!sections.length || !links.length) return;

    const updateActiveLink = () => {
      const current = sections.reduce(
        (active, section) =>
          window.scrollY >= section.offsetTop - 130 ? section.id : active,
        sections[0].id,
      );
      links.forEach((link) =>
        link.toggleAttribute("aria-current", link.hash === `#${current}`),
      );
    };
    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
  }

  function formMessages() {
    return {
      required: form.dataset.required,
      email: form.dataset.emailError,
      min: form.dataset.minError,
      review: form.dataset.review,
      sending: form.dataset.sending,
      sent: form.dataset.sent,
      fallback: form.dataset.fallback,
    };
  }

  function setError(field, message) {
    const errorId = field
      .getAttribute("aria-describedby")
      ?.split(" ")
      .find((value) => value.endsWith("-error"));
    const error = errorId ? document.getElementById(errorId) : null;
    field.setAttribute("aria-invalid", message ? "true" : "false");
    if (error) error.textContent = message || "";
  }

  function validateField(field) {
    const messages = formMessages();
    const value = String(field.value || "").trim();
    let message = "";
    if (field.validity.valueMissing) message = messages.required;
    else if (field.type === "email" && field.validity.typeMismatch)
      message = messages.email;
    else if (
      field.minLength > 0 &&
      value.length > 0 &&
      value.length < field.minLength
    ) {
      message = messages.min.replace("{count}", field.minLength);
    }
    setError(field, message);
    return !message;
  }

  function formPayload() {
    const data = new FormData(form);
    return {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      website: data.get("website"),
      sourcePath: window.location.pathname,
    };
  }

  function initForm() {
    if (!form) return;
    const status = form.querySelector("[data-form-status]");
    const submit = form.querySelector("[data-submit]");
    const fields = Array.from(
      form.querySelectorAll("input, select, textarea"),
    ).filter((field) => field.name !== "website" && field.type !== "hidden");

    fields.forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => {
        if (field.getAttribute("aria-invalid") === "true") validateField(field);
      });
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const trap = form.querySelector("[name='website']");
      if (trap?.value.trim()) return;
      const messages = formMessages();
      const valid = fields.map(validateField).every(Boolean);
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
          body: JSON.stringify(formPayload()),
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.ok === false)
          throw new Error(result.message || "contact_unavailable");
        status.textContent =
          result.emailSent === false ? messages.fallback : messages.sent;
        status.className = "form-status success";
        form.reset();
      } catch {
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
    initForm();
  });
})();
