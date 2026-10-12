import { projects } from "./data/projects.js?v=20261011-4";
import { technologyGroups } from "./data/technologies.js?v=20261011-4";

function language() {
  return document.documentElement.lang.startsWith("en") ? "en" : "es";
}

function localize(value) {
  return typeof value === "object" ? value[language()] : value;
}

function externalLink(url, className, label, projectName) {
  return `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label}: ${projectName}">${label}<span aria-hidden="true">↗</span></a>`;
}

function renderProjects() {
  const container = document.querySelector("[data-projects]");
  if (!container) return;

  const labels =
    language() === "en"
      ? { demo: "Live demo", source: "Source code" }
      : { demo: "Ver demo", source: "Código fuente" };

  container.innerHTML = projects
    .map(
      (project, index) => `
        <article class="project-card reveal" data-project-kind="${project.sourceUrl ? "demo" : "production"}">
          <a class="project-media" href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" aria-label="${labels.demo}: ${project.name}">
            <img src="${project.image}" alt="${localize(project.alt)}" width="${project.imageWidth}" height="${project.imageHeight}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
            <span class="project-index" aria-hidden="true">0${index + 1}</span>
          </a>
          <div class="project-content">
            <div class="project-meta"><span>${localize(project.category)}</span><span class="project-status">${localize(project.status)}</span></div>
            <h3>${project.name}</h3>
            <p>${localize(project.description)}</p>
            <ul class="project-tech" aria-label="${language() === "en" ? "Technologies" : "Tecnologías"}">
              ${project.technologies.map((technology) => `<li>${technology}</li>`).join("")}
            </ul>
            ${project.note ? `<p class="project-note"><span aria-hidden="true">//</span> ${localize(project.note)}</p>` : ""}
            <div class="project-actions">
              ${externalLink(project.demoUrl, "button button-dark", labels.demo, project.name)}
              ${project.sourceUrl ? externalLink(project.sourceUrl, "button button-quiet", labels.source, project.name) : ""}
            </div>
          </div>
        </article>`,
    )
    .join("");
}

function renderTechnologyGroups() {
  const container = document.querySelector("[data-technologies]");
  if (!container) return;
  container.innerHTML = technologyGroups
    .map(
      (group) => `
      <article class="stack-group reveal">
        <header><span>${group.number}</span><h3>${localize(group.label)}</h3></header>
        <div class="stack-logo-wrap">
          <img src="${group.image}" alt="${group.alt}" loading="lazy" decoding="async" />
        </div>
      </article>`,
    )
    .join("");
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;
  if (
    !window.IntersectionObserver ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );
  elements.forEach((element) => observer.observe(element));
}

function renderAll() {
  renderProjects();
  renderTechnologyGroups();
  initReveal();
}

document.addEventListener("matudev:languagechange", renderAll);

if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", renderAll);
else renderAll();
