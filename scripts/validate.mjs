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
  "assets/css/pixel.css",
  "assets/fonts/matupixel.woff",
  "assets/img/avatar-pixel.png",
  "assets/img/favicon-pixel.png",
  "assets/img/apple-touch-pixel.png",
  "assets/img/og-pixel.png",
  "assets/img/favicon-computer.png",
  "assets/img/apple-touch-computer.png",
  "assets/img/flag-es.svg",
  "assets/img/flag-us.svg",
  "assets/img/og-system.png",
];

await Promise.all(requiredFiles.map((file) => access(file)));
if (!projects.length) throw new Error("At least one project is required.");
if (
  projects.some(
    (project) =>
      !project.name ||
      !project.slug ||
      !project.category?.es ||
      !project.category?.en ||
      !project.status?.es ||
      !project.status?.en ||
      !project.demoUrl ||
      !project.image ||
      !project.imageWidth ||
      !project.imageHeight ||
      !project.alt?.es ||
      !project.alt?.en ||
      !project.description?.es ||
      !project.description?.en ||
      !Array.isArray(project.technologies) ||
      !project.technologies.length,
  )
) {
  throw new Error("Every project needs complete bilingual content and links.");
}

await Promise.all(projects.map((project) => access(project.image)));

console.log(
  `Static build validation passed: ${projects.length} projects, ${requiredFiles.length} required files.`,
);
