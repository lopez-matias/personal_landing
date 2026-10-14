<div align="center">

# MatuDev — Personal Portfolio

**Software Development · Backend · Data Engineering**

My personal portfolio, showcasing software projects, technical experience, and work across backend development, databases, and data engineering.

[![Website](https://img.shields.io/badge/Website-matudev.com-111827?style=for-the-badge&logo=vercel&logoColor=white)](https://www.matudev.com/)
[![GitHub](https://img.shields.io/badge/GitHub-lopez--matias-181717?style=for-the-badge&logo=github)](https://github.com/lopez-matias)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mat%C3%ADas_L%C3%B3pez-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lopez-matias/)

**[Explore the live website →](https://www.matudev.com/)**

</div>

---

## About

**MatuDev** is my personal website and professional portfolio. It brings together selected projects, experience, technical specialties, and contact information in a lightweight, responsive interface available in English and Spanish.

I made this repository public to **share how the portfolio is built and provide inspiration** for developers creating their own personal websites. Feel free to explore the structure, design decisions, and implementation.

## Features

- Responsive layout for desktop and mobile devices.
- Light and dark themes, with the visitor's preference saved locally.
- English and Spanish content.
- Dedicated sections for projects, specialties, experience, tech stack, and contact.
- Contact form backed by a Vercel serverless function and **Resend**.
- Form validation, a honeypot field, and basic request rate limiting.
- SEO metadata, Open Graph tags, a sitemap, and `robots.txt`.
- Privacy policy, thank-you page, and custom 404 page.
- Automated tests, code-quality checks, and a visual QA script.

## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | HTML5, CSS3, JavaScript |
| Runtime and tooling | Node.js 24, npm |
| Contact API | JavaScript, Vercel Serverless Functions |
| Email delivery | Resend |
| Code quality and testing | ESLint, Prettier, Node.js Test Runner, Playwright Core |
| Hosting | Vercel |

> The frontend is built with native web technologies—no React, Next.js, or SPA framework is required.

## Project Structure

```text
personal_landing/
├── api/
│   └── contact.js          # Serverless contact endpoint
├── assets/                 # CSS, JavaScript, images, and other assets
├── scripts/
│   ├── build.mjs           # Generates the public/ output directory
│   ├── validate.mjs        # Runs pre-build validation
│   └── visual-check.mjs    # Visual QA checks
├── tests/                  # Contact and content tests
├── index.html              # Main page
├── privacy.html            # Privacy policy
├── gracias.html            # Contact confirmation page
├── 404.html                # Custom error page
├── robots.txt              # Search engine crawling instructions
├── sitemap.xml             # Sitemap
├── .env.example            # Environment variable reference
├── package.json            # Dependencies and npm scripts
└── vercel.json             # Deployment and HTTP header configuration
```

## Getting Started

**Requirements:** Node.js 24.x, npm, and Python 3 for the included static development server.

```bash
# Clone the repository
git clone https://github.com/lopez-matias/personal_landing.git
cd personal_landing

# Install dependencies
npm ci

# Start the local static server
npm run dev
```

Open **http://localhost:4173** in your browser.

> `npm run dev` starts a Python static HTTP server. It does **not** run the `api/contact.js` serverless function. Testing actual email delivery requires an environment that supports Vercel Functions and the corresponding environment variables.

## Environment Variables

The contact endpoint uses the following variables:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Private API key for Resend |
| `CONTACT_FROM_EMAIL` | Sender address configured and verified in Resend |
| `CONTACT_TO_EMAIL` | Inbox that receives contact submissions |

See `.env.example` for the expected variables. Add your own values in your Vercel project's **Environment Variables** settings. Never commit credentials or personal secrets.

Without `RESEND_API_KEY`, the endpoint can return a development-mode response without sending an email.

**If you adapt this project, replace the original domain, contact details, social links, branding, and email configuration with your own.**

## Available Commands

```bash
npm run dev           # Start a local static server on port 4173
npm run build         # Validate and generate public/
npm run lint          # Run ESLint and verify formatting
npm run format        # Format files with Prettier
npm run format:check  # Check formatting without making changes
npm test              # Run automated tests
npm run qa:visual     # Run visual QA checks
```

## Deployment

This project is configured for **Vercel**.

1. Import the GitHub repository into Vercel.
2. Configure the environment variables needed by the contact form.
3. Set the build command to `npm run build` and the output directory to `public`.
4. Deploy and optionally connect a custom domain.

`vercel.json` configures the output directory, URL handling, and HTTP security and cache headers.

**Live site:** [www.matudev.com](https://www.matudev.com/)

## Inspiration and Reuse

This repository is public so other developers can learn from the implementation and take inspiration for their own portfolios. Explore the layout, styling, bilingual content, deployment setup, and contact form as references for your own work.

If you build something inspired by MatuDev, a link back to the original project is appreciated.

> **License note:** Public visibility does not automatically grant permission to copy, modify, or redistribute source code. Check for an explicit license before reusing code beyond what applicable law permits.

## Author

**Matías López** — Software Developer | Backend & Data

I build applications, APIs, integrations, and data-driven solutions designed around real-world needs.

[Portfolio](https://www.matudev.com/) · [GitHub](https://github.com/lopez-matias) · [LinkedIn](https://www.linkedin.com/in/lopez-matias/)

---

<div align="center">
  <sub>Developed and maintained by Matías López · MatuDev</sub>
</div>
