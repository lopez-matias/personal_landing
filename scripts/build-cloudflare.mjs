import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const output = join(root, "dist");

const publicFiles = [
  "index.html",
  "privacy.html",
  "gracias.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "_headers",
  "_redirects"
];

const publicDirs = ["assets"];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

await Promise.all([
  ...publicFiles.map((file) => cp(join(root, file), join(output, file))),
  ...publicDirs.map((dir) => cp(join(root, dir), join(output, dir), { recursive: true }))
]);

console.log("Cloudflare Pages output ready in dist/");
