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

Con `python -m http.server` la función serverless de Vercel no corre. En ese caso el formulario muestra fallback por correo/WhatsApp.

## Estructura

```text
.
├── index.html
├── privacy.html
├── 404.html
├── gracias.html
├── robots.txt
├── sitemap.xml
├── vercel.json
├── api/
│   └── contact.js
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
api/contact.js
```

Variables necesarias para envío real con Resend:

```text
RESEND_API_KEY=re_xxxxxxxxx
```

Valores configurados por defecto en `api/contact.js`:

```text
CONTACT_FROM_EMAIL=MatuDev <contacto@matudev.com>
CONTACT_TO_EMAIL=lopeznunezmati@gmail.com
```

Si querés cambiarlos sin tocar código, también podés cargarlos en Vercel como variables de entorno.

El proyecto usa el SDK oficial de Resend, declarado en `package.json`. Si vas a probar con Node/Vercel local, primero instala dependencias:

```powershell
npm install
```

Reemplaza `re_xxxxxxxxx` por tu API key real de Resend; no subas esa clave al repositorio.

Usar `.env.example` como referencia. Para producción, cargá al menos esta variable en Vercel como Environment Variable:

- `RESEND_API_KEY`

Opcionales:

- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Si esas variables faltan, la función responde en modo desarrollo y el sitio muestra fallback. No se simula un envío real.

## Publicar en Vercel

El proyecto está preparado para Vercel como sitio estático con una función serverless en `/api/contact`.

Configuración recomendada en Vercel:

```text
Framework preset: None
Build command: vacío
Output directory: vacío
Root directory: /
```

Archivos relevantes:

- `vercel.json`: headers de seguridad, cache y redirects simples.
- `api/contact.js`: endpoint serverless del formulario.
- `assets/`: CSS, JavaScript e imágenes.

## Notas para GitHub privado

- No subir `.env`, `.vercel/` ni logs.
- `.gitignore` ya cubre archivos locales y temporales.
- Hay una dependencia de Node para el SDK de Resend: `resend`.
- No hay build step.
- No hay prototipos ni assets exploratorios en la versión final.
