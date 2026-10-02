import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { projects } from "../assets/js/data/projects.js";
import { technologyGroups } from "../assets/js/data/technologies.js";

test("project slugs are unique and required fields are present", () => {
  assert.equal(
    new Set(projects.map((project) => project.slug)).size,
    projects.length,
  );
  projects.forEach((project) => {
    assert.ok(project.name.es);
    assert.ok(project.name.en);
    assert.match(project.url, /^https:\/\//);
    assert.ok(project.description.es);
    assert.ok(project.description.en);
    assert.ok(project.action.es);
    assert.ok(project.action.en);
  });
  assert.equal(projects.length, 2);
  assert.equal(projects[0].url, "https://cuentaclara.matudev.com");
  assert.match(projects[1].url, /^https:\/\/github\.com\/lopez-matias/);
});

test("the technology stack is organized by working area", () => {
  assert.deepEqual(
    technologyGroups.map((group) => group.label.en),
    ["BACKEND", "FRONTEND", "DATA & BI", "DATABASES", "AUTOMATION", "TOOLS"],
  );
});

test("Spanish copy stays editable in HTML and JavaScript only stores English", () => {
  const html = readFileSync("index.html", "utf8");
  const translations = readFileSync("assets/js/i18n.js", "utf8");
  assert.match(html, /Hola, soy/);
  assert.doesNotMatch(translations, /\bes\s*:/);
  assert.match(translations, /const english =/);
});

test("every translated HTML key has an English value", () => {
  const pages = ["index.html", "privacy.html", "gracias.html", "404.html"];
  const translations = readFileSync("assets/js/i18n.js", "utf8");
  const keys = new Set();

  pages.forEach((page) => {
    const html = readFileSync(page, "utf8");
    for (const match of html.matchAll(/data-i18n(?:-html)?="([^"]+)"/g)) {
      keys.add(match[1]);
    }
    for (const match of html.matchAll(/data-i18n-attr="([^"]+)"/g)) {
      match[1].split(";").forEach((mapping) => keys.add(mapping.split(":")[1]));
    }
  });

  keys.forEach((key) => {
    assert.match(translations, new RegExp(`\\b${key}:`), `Missing ${key}`);
  });

  const englishBlock = translations.match(
    /const english = \{([\s\S]*?)\n  \};\n\n  const englishMetadata/,
  )?.[1];
  assert.ok(englishBlock, "English translation configuration was not found");
  const configuredKeys = new Set(
    [...englishBlock.matchAll(/^    ([A-Za-z]\w*):/gm)].map(
      (match) => match[1],
    ),
  );
  assert.deepEqual(
    [...configuredKeys].sort(),
    [...keys].sort(),
    "English configuration must not retain entries for deleted HTML content",
  );
});

test("each page exposes one contextual language flag", () => {
  ["index.html", "privacy.html", "gracias.html", "404.html"].forEach((page) => {
    const html = readFileSync(page, "utf8");
    assert.equal((html.match(/data-language-switch/g) || []).length, 1);
    assert.match(html, /assets\/img\/flag-us\.svg/);
  });
});
