import { projects } from "./data/projects.js";
import { technologyGroups } from "./data/technologies.js";

function language() {
  return document.documentElement.lang.startsWith("en") ? "en" : "es";
}

function localize(value) {
  return typeof value === "object" ? value[language()] : value;
}

function renderProjects() {
  const container = document.querySelector("[data-projects]");
  if (!container) return;

  container.innerHTML = projects
    .map((project) => {
      const spanish = language() === "es";
      const action = spanish ? "Ver código" : "View code";
      const technologiesLabel = spanish ? "Tecnologías" : "Technologies";
      const problemLabel = spanish ? "Qué resuelve" : "What it solves";
      return `
        <article class="project-window">
          <div class="window-titlebar">
            <span class="window-dots" aria-hidden="true"><i></i><i></i></span>
            <span>${project.slug}.app</span>
            <span class="project-status">${project.status}</span>
          </div>
          <a class="project-shot" href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="${action}: ${project.name}">
            <img src="${project.image}" alt="${localize(project.alt)}" width="1440" height="1000" loading="lazy" decoding="async">
          </a>
          <div class="project-body">
            <div class="project-heading"><h3>${project.name}</h3></div>
            <p class="project-problem code-comment"><strong>${problemLabel}:</strong> ${localize(project.problem)}</p>
            <p class="code-comment">${localize(project.description)}</p>
            <ul class="tag-list" aria-label="${technologiesLabel}">
              ${project.technologies.map((technology) => `<li>${technology}</li>`).join("")}
            </ul>
            <div class="project-actions">
              <a href="${project.github}" target="_blank" rel="noopener noreferrer">${action} ↗</a>
            </div>
          </div>
        </article>`;
    })
    .join("");
}

function renderTechnologyGroups() {
  const container = document.querySelector("[data-technologies]");
  if (!container) return;
  container.innerHTML = technologyGroups
    .map(
      (group) => `
      <article class="stack-row">
        <div class="stack-label"><span>${group.number}</span><h3>${localize(group.label)}</h3></div>
        <ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>`,
    )
    .join("");
}

function renderAll() {
  renderProjects();
  renderTechnologyGroups();
}

document.addEventListener("matudev:languagechange", renderAll);

if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", renderAll);
else renderAll();
