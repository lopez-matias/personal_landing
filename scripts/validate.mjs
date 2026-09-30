import { access } from "node:fs/promises";
import { projects } from "../assets/js/data/projects.js";

const requiredFiles = [
  "index.html",
  "privacy.html",
  "404.html",
  "gracias.html",
  "robots.txt",
  "sitemap.xml",
  "vercel.json",
  "api/contact.js",
  "assets/css/system.css",
  "assets/img/hero-computer.webp",
  "assets/img/favicon-computer.png",
  "assets/img/apple-touch-computer.png",
  "assets/img/flag-es.svg",
  "assets/img/flag-us.svg",
  "assets/img/og-system.png",
];

await Promise.all(requiredFiles.map((file) => access(file)));
await Promise.all(projects.map((project) => access(project.image)));

if (!projects.length) throw new Error("At least one project is required.");
if (
  projects.some(
    (project) =>
      !project.name ||
      !project.slug ||
      !project.github ||
      !project.image ||
      !project.description?.es ||
      !project.description?.en ||
      !project.problem?.es ||
      !project.problem?.en ||
      !project.alt?.es ||
      !project.alt?.en,
  )
) {
  throw new Error("Every project needs a name, slug, GitHub URL and image.");
}

const validProjectStatuses = new Set([
  "LIVE",
  "PORTFOLIO",
  "BUILDING",
  "EXPERIMENT",
]);
if (projects.some((project) => !validProjectStatuses.has(project.status))) {
  throw new Error("A project has an unsupported status.");
}

console.log(
  `Static build validation passed: ${projects.length} projects, ${requiredFiles.length} required files.`,
);
