import { mkdir } from "node:fs/promises";
import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath:
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  headless: true,
});

const viewports = [
  { width: 375, height: 812 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1440, height: 1000 },
];
const results = [];

async function assertEnglishCopy(page) {
  const expected = [
    ['.nav-links a[href="#proyectos"]', "Projects"],
    ["#stack-title", "technologies"],
    ["#about-title", "how I work."],
    [".experience-item:nth-child(3) h3", "ERP Developer / DBA"],
    ["#contact-title", "tell me about your idea."],
  ];

  for (const [selector, text] of expected) {
    if ((await page.locator(selector).textContent())?.trim() !== text) {
      throw new Error(`English copy did not render for ${selector}.`);
    }
  }
}

await mkdir(".artifacts", { recursive: true });

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  const response = await page.goto("http://127.0.0.1:4173", {
    waitUntil: "networkidle",
  });
  await page.waitForSelector("[data-projects] .project-window");

  if (viewport.width <= 820) {
    await page.click("[data-nav-toggle]");
    const menuOpen = await page
      .locator("[data-nav-links]")
      .evaluate((element) => element.classList.contains("is-open"));
    if (!menuOpen)
      throw new Error(`Mobile navigation did not open at ${viewport.width}px.`);
    await page
      .locator("[data-language-switch]")
      .evaluate((element) => element.click());
    await page.waitForLoadState("networkidle");
    if ((await page.locator("html").getAttribute("lang")) !== "en") {
      throw new Error("English version did not load.");
    }
    await assertEnglishCopy(page);
    if (
      !(
        await page.locator("[data-language-flag]").getAttribute("src")
      )?.endsWith("flag-es.svg")
    )
      throw new Error("English version did not offer the Spanish flag.");
    await page.click("[data-language-switch]");
    await page.waitForLoadState("networkidle");
    if (
      (await page.locator('.nav-links a[href="#proyectos"]').textContent())
        ?.trim()
        .toLocaleLowerCase("es") !== "proyectos"
    )
      throw new Error("Spanish navigation copy did not render.");
    if (
      !(
        await page.locator("[data-language-flag]").getAttribute("src")
      )?.endsWith("flag-us.svg")
    )
      throw new Error("Spanish version did not offer the US flag.");
    await page.click("[data-nav-toggle]");
  } else {
    await page.click("[data-language-switch]");
    await page.waitForLoadState("networkidle");
    if ((await page.locator("html").getAttribute("lang")) !== "en") {
      throw new Error("English version did not load.");
    }
    await assertEnglishCopy(page);
    if (
      !(
        await page.locator("[data-language-flag]").getAttribute("src")
      )?.endsWith("flag-es.svg")
    )
      throw new Error("English version did not offer the Spanish flag.");
    await page.click("[data-language-switch]");
    await page.waitForLoadState("networkidle");
    if (
      (await page.locator('.nav-links a[href="#proyectos"]').textContent())
        ?.trim()
        .toLocaleLowerCase("es") !== "proyectos"
    )
      throw new Error("Spanish navigation copy did not render.");
    if (
      !(
        await page.locator("[data-language-flag]").getAttribute("src")
      )?.endsWith("flag-us.svg")
    )
      throw new Error("Spanish version did not offer the US flag.");
  }

  if (viewport.width > 820) {
    await page.locator("#stack").scrollIntoViewIfNeeded();
    const positionBeforeLanguageChange = await page.evaluate(() => {
      const section = document
        .elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)
        ?.closest("section[id], main[id]");
      return { id: section?.id, top: section?.getBoundingClientRect().top };
    });
    await page
      .locator("[data-language-switch]")
      .evaluate((element) => element.click());
    await page.waitForTimeout(50);
    const positionAfterLanguageChange = await page.evaluate((id) => {
      const section = document.getElementById(id);
      return {
        id: section?.id,
        top: section?.getBoundingClientRect().top,
      };
    }, positionBeforeLanguageChange.id);
    if (
      positionAfterLanguageChange.id !== positionBeforeLanguageChange.id ||
      Math.abs(
        positionAfterLanguageChange.top - positionBeforeLanguageChange.top,
      ) > 2
    )
      throw new Error(
        `Changing language moved the reader to another position: ${JSON.stringify({ before: positionBeforeLanguageChange, after: positionAfterLanguageChange })}.`,
      );
    await page
      .locator("[data-language-switch]")
      .evaluate((element) => element.click());
    await page.locator("#inicio").scrollIntoViewIfNeeded();
  }

  if ((await page.locator(".project-window").count()) !== 4)
    throw new Error("Expected four project cards.");

  if (viewport.width <= 820) await page.click("[data-nav-toggle]");
  await page.click("[data-theme-toggle]");
  if ((await page.locator("html").getAttribute("data-theme")) !== "dark")
    throw new Error("Theme icon did not activate dark mode.");
  if ((await page.locator("[data-theme-toggle]").textContent()).includes("BW"))
    throw new Error("Theme control still exposes the old BW/WB label.");
  await page.click("[data-theme-toggle]");
  if (viewport.width <= 820) await page.click("[data-nav-toggle]");

  for (const image of await page.locator('img[loading="lazy"]').all()) {
    await image.scrollIntoViewIfNeeded();
  }
  await page.waitForLoadState("networkidle");
  await page.locator("#inicio").scrollIntoViewIfNeeded();
  await page.locator(".projects-grid").evaluate((element) => {
    element.scrollLeft = 0;
  });

  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    title: document.title,
    sections: document.querySelectorAll("main section").length,
    imagesLoaded: Array.from(document.images).every(
      (image) => image.complete && image.naturalWidth > 0,
    ),
    quickLinksBottom: document
      .querySelector(".quick-section")
      ?.getBoundingClientRect().bottom,
    aboutColumns: Array.from(
      document.querySelector(".about-layout")?.children || [],
    ).map((element) => ({
      width: element.getBoundingClientRect().width,
      height: element.getBoundingClientRect().height,
    })),
    contactColumns: Array.from(
      document.querySelector(".contact-layout")?.children || [],
    ).map((element) => ({
      width: element.getBoundingClientRect().width,
      height: element.getBoundingClientRect().height,
    })),
    shellCenterOffset: (() => {
      const shell = document.querySelector(".hero .shell");
      const rect = shell?.getBoundingClientRect();
      return rect
        ? Math.abs(rect.left - (window.innerWidth - rect.width) / 2)
        : null;
    })(),
    experienceCount: document.querySelectorAll(".experience-item").length,
    experienceRoleSize: Number.parseFloat(
      window.getComputedStyle(document.querySelector(".experience-item h3"))
        .fontSize,
    ),
    experienceCompanySize: Number.parseFloat(
      window.getComputedStyle(document.querySelector(".experience-company"))
        .fontSize,
    ),
    navCenterOffset: (() => {
      const rect = document
        .querySelector(".nav-links")
        ?.getBoundingClientRect();
      return rect
        ? Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2)
        : null;
    })(),
    heroComputerWidth: document
      .querySelector(".hero-computer")
      ?.getBoundingClientRect().width,
    heroTitleComputerOverlap: (() => {
      const title = document
        .querySelector("#hero-title")
        ?.getBoundingClientRect();
      const computer = document
        .querySelector(".hero-computer")
        ?.getBoundingClientRect();
      if (!title || !computer) return false;
      return (
        Math.min(title.bottom, computer.bottom) >
        Math.max(title.top, computer.top)
      );
    })(),
    projectCardWidth: document
      .querySelector(".project-window")
      ?.getBoundingClientRect().width,
    projectsScrollable: (() => {
      const track = document.querySelector(".projects-grid");
      return track ? track.scrollWidth > track.clientWidth : false;
    })(),
    languageFlags: document.querySelectorAll(".flag-link").length,
    technologyGroups: document.querySelectorAll(".stack-row").length,
    codeComments: document.querySelectorAll(".code-comment").length,
    commentMarker: window.getComputedStyle(
      document.querySelector(".code-comment"),
      "::before",
    ).content,
    utilityFont: window.getComputedStyle(
      document.querySelector(".section-label"),
    ).fontFamily,
  }));

  if (metrics.scrollWidth > metrics.clientWidth + 1) {
    throw new Error(
      `Horizontal overflow at ${viewport.width}px: ${metrics.scrollWidth}px > ${metrics.clientWidth}px.`,
    );
  }
  if (!metrics.imagesLoaded)
    throw new Error(`An image failed to load at ${viewport.width}px.`);
  if (metrics.shellCenterOffset > 1)
    throw new Error(`Main content is not centered at ${viewport.width}px.`);
  if (metrics.experienceCount !== 3)
    throw new Error("Expected three professional experience entries.");
  if (metrics.experienceRoleSize <= metrics.experienceCompanySize)
    throw new Error("Experience role must be larger than the company name.");
  if (metrics.languageFlags !== 1)
    throw new Error("Expected one contextual flag language control.");
  if (metrics.technologyGroups !== 6)
    throw new Error("The technology groups are incomplete.");
  if (metrics.codeComments < 16 || !metrics.commentMarker.includes("//"))
    throw new Error("Explanatory copy is not rendered as code comments.");
  if (/Courier|monospace/i.test(metrics.utilityFont))
    throw new Error("The old monospaced typography is still active.");
  if (metrics.projectCardWidth > 321 || !metrics.projectsScrollable)
    throw new Error(
      `Project cards are not compact/scrollable at ${viewport.width}px: width=${metrics.projectCardWidth}, scrollable=${metrics.projectsScrollable}.`,
    );
  if (viewport.width > 820 && metrics.navCenterOffset > 1)
    throw new Error("Desktop navigation sections are not truly centered.");
  const maxComputerWidth =
    viewport.width <= 560 ? 150 : viewport.width <= 820 ? 365 : 425;
  if (metrics.heroComputerWidth > maxComputerWidth)
    throw new Error(`Hero computer is too large at ${viewport.width}px.`);
  if (viewport.width <= 560 && !metrics.heroTitleComputerOverlap)
    throw new Error(
      "The mobile hero computer is not aligned beside the title.",
    );
  if (
    viewport.width === 1440 &&
    metrics.quickLinksBottom > viewport.height + 1
  ) {
    throw new Error("Hero and quick links do not fit in the desktop viewport.");
  }
  if (viewport.width > 820) {
    for (const [name, columns] of [
      ["About", metrics.aboutColumns],
      ["Contact", metrics.contactColumns],
    ]) {
      if (Math.abs(columns[0].width - columns[1].width) > 1)
        throw new Error(`${name} columns are not symmetrical.`);
      if (Math.abs(columns[0].height - columns[1].height) > 1)
        throw new Error(`${name} columns do not have equal height.`);
    }
  }
  if (errors.length)
    throw new Error(
      `Browser errors at ${viewport.width}px: ${errors.join(" | ")}`,
    );

  if (viewport.width === 1440) {
    await page.screenshot({
      path: ".artifacts/matudev-home.png",
      fullPage: false,
    });
    await page.locator("#proyectos").screenshot({
      path: ".artifacts/matudev-projects.png",
    });
    await page.locator("#sobre-mi").screenshot({
      path: ".artifacts/matudev-about.png",
    });
  }
  if (viewport.width === 375) {
    await page.screenshot({
      path: ".artifacts/matudev-mobile.png",
      fullPage: true,
    });
  }

  results.push({
    viewport: `${viewport.width}x${viewport.height}`,
    status: response?.status(),
    ...metrics,
  });
  await page.close();
}

for (const route of [
  "privacy.html",
  "privacy.html?lang=en",
  "gracias.html",
  "gracias.html?lang=en",
  "404.html",
  "404.html?lang=en",
]) {
  const page = await browser.newPage({
    viewport: { width: 1024, height: 768 },
  });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto(`http://127.0.0.1:4173/${route}`, {
    waitUntil: "networkidle",
  });
  await page.waitForSelector("main h1");
  if (route.startsWith("404.html")) {
    if (await page.locator("a[href*='wa.me']").count())
      throw new Error("The 404 page still contains a WhatsApp link.");
    if ((await page.locator(".simple-actions a").count()) !== 4)
      throw new Error(
        "The 404 page must show Home, Email, LinkedIn and GitHub.",
      );
  }
  const routeMetrics = await page.evaluate(() => {
    const content = document.querySelector(".simple-content");
    const rect = content?.getBoundingClientRect();
    return {
      overflow:
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth + 1,
      centerOffset: rect
        ? Math.abs(rect.left - (window.innerWidth - rect.width) / 2)
        : null,
    };
  });
  if (routeMetrics.overflow)
    throw new Error(`Horizontal overflow on ${route}.`);
  if (routeMetrics.centerOffset > 1)
    throw new Error(`Content is not centered on ${route}.`);
  if (errors.length)
    throw new Error(`Browser errors on ${route}: ${errors.join(" | ")}`);
  results.push({
    route,
    status: response?.status(),
    heading: await page.locator("main h1").innerText(),
  });
  await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
