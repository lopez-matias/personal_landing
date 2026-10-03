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
      const name = localize(project.name);
      const action = localize(project.action);
      return `
        <article class="project-window" data-project-kind="${project.kind}">
          <div class="window-titlebar">
            <span class="window-dots" aria-hidden="true"><i></i><i></i></span>
            <span>${project.slug}</span>
            <span class="project-status">${project.status}</span>
          </div>
          <a class="project-shot project-shot--${project.kind}" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="${action}: ${name}">
            <img src="${project.image}" alt="${localize(project.alt)}" width="${project.imageWidth}" height="${project.imageHeight}" loading="lazy" decoding="async">
          </a>
          <div class="project-body">
            <div class="project-heading"><h3>${name}</h3></div>
            <p class="code-comment">${localize(project.description)}</p>
            <div class="project-actions">
              <a href="${project.url}" target="_blank" rel="noopener noreferrer">${action} ↗</a>
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
