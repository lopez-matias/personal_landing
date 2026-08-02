# MatuDev landing

Landing profesional estática con estética **Retro Data System**, paleta azul técnica y cambio de idioma por JavaScript.

## Ejecutar en local

```powershell
python -m http.server 4173
```

Abrir:

- `http://localhost:4173/`
- `http://localhost:4173/privacy.html`
- `http://localhost:4173/404.html`
- `http://localhost:4173/gracias.html`

Con `python -m http.server` la función de Cloudflare no corre. En ese caso el formulario muestra fallback por correo/WhatsApp.

Para probar el sitio con Cloudflare Pages Functions:

```powershell
npm install
npm run dev:build
```

Wrangler sirve el proyecto con la función `/api/contact` incluida.

## Estructura

```text
.
├── index.html
├── privacy.html
├── 404.html
├── gracias.html
├── robots.txt
├── sitemap.xml
├── _headers
├── _redirects
├── package.json
├── wrangler.jsonc
├── scripts/
│   └── build-cloudflare.mjs
├── assets/
│   ├── css/
│   │   └── system.css
│   ├── js/
│   │   ├── i18n.js
│   │   └── system.js
│   └── img/
│       ├── favicon.svg
│       ├── icon.png
│       ├── og-system.svg
│       └── profile.jpeg
└── functions/
    └── api/
        └── contact.js
```

## Idiomas

El cambio español/inglés se maneja en:

```text
assets/js/i18n.js
```

Ese archivo contiene:

- Textos visibles de la landing.
- Metadatos principales (`title`, description, Open Graph y Twitter).
- Textos del formulario.
- Labels y atributos accesibles.

La preferencia se guarda en `localStorage` con la clave:

```text
matudev-language
```

## Tema

El tema claro/oscuro se maneja en:

```text
assets/js/system.js
```

La preferencia se guarda con:

```text
matudev-system-theme
```

Los colores están centralizados en `assets/css/system.css`, dentro de `:root` y `[data-theme="dark"]`.

## Formulario

El formulario envía un `POST` a:

```text
/api/contact
```

La función está en:

```text
functions/api/contact.js
```

Variables necesarias para envío real con Resend:

```text
RESEND_API_KEY=...
CONTACT_FROM_EMAIL=contacto@tu-dominio.com
CONTACT_TO_EMAIL=lopeznunezmati@gmail.com
```

Usar `.env.example` como referencia. Para desarrollo local con Wrangler, crear `.dev.vars` con esos valores. Para producción, cargarlos en Cloudflare Pages:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Si esas variables faltan, la función responde en modo desarrollo y el sitio muestra fallback. No se simula un envío real.

## Publicar en Cloudflare Pages

El proyecto está preparado para Cloudflare Pages con Functions.

Configuración recomendada en Cloudflare:

```text
Framework preset: None
Node.js version: 22
Build command: npm run build
Build output directory: dist
Root directory: /
```

En **Settings > Environment variables**, agregar como variable de build:

```text
NODE_VERSION=22
```

No usar `npx wrangler deploy` como comando de build dentro del proyecto de Pages. Ese comando corresponde al flujo de Workers/CLI y puede instalar la versión más nueva de Wrangler con una versión de Node incompatible. Para Pages conectado a Git, Cloudflare solo necesita:

```text
npm run build
```

Publicación por Wrangler:

```powershell
npm install
npm run deploy
```

Publicación preview:

```powershell
npm run deploy:preview
```

Archivos relevantes:

- `wrangler.jsonc`: define `pages_build_output_dir` en `dist`.
- `scripts/build-cloudflare.mjs`: copia solo los archivos públicos al directorio de salida.
- `functions/api/contact.js`: endpoint serverless del formulario.
- `_headers`: headers de seguridad y cache.
- `_redirects`: redirects básicos, incluyendo `www` hacia dominio raíz.

## Notas para GitHub privado

- No subir `.env`, `.dev.vars`, `.wrangler/` ni logs.
- `.gitignore` ya cubre archivos locales y temporales.
- No hay dependencias de Node ni build step.
- No hay prototipos ni assets exploratorios en la versión final.
