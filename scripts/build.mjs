import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath, URL } from "node:url";

import "./validate.mjs";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const outputDirectory = fileURLToPath(new URL("../public/", import.meta.url));
const staticEntries = [
  "index.html",
  "privacy.html",
  "gracias.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "assets",
];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

await Promise.all(
  staticEntries.map((entry) =>
    cp(`${projectRoot}${entry}`, `${outputDirectory}${entry}`, {
      recursive: true,
    }),
  ),
);

console.log(
  `Vercel output generated in public/: ${staticEntries.length} entries.`,
);
