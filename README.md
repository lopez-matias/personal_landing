# MatuDev

Portfolio personal de Matías López. Presenta proyectos y capacidades en backend, aplicaciones web, datos e integraciones con un sistema visual monocromático y acentos azul marino.

## Stack del sitio

- HTML semántico.
- CSS nativo, responsive y sin frameworks visuales.
- JavaScript ES modules para contenido dinámico.
- Función serverless de Vercel para el formulario.
- Resend como proveedor de correo.
- ESLint, Prettier, Node Test Runner y Playwright Core para calidad.

No hay un framework de frontend ni un proceso de compilación de assets. Esta decisión mantiene el sitio rápido, legible y fácil de modificar.

## Estructura

```text
.
├── index.html                    # Landing principal y metadata SEO
├── privacy.html                  # Política de privacidad
├── gracias.html                  # Estado de contacto recibido
├── 404.html                      # Página no encontrada
├── api/
│   └── contact.js                # Endpoint serverless del formulario
├── assets/
│   ├── css/
│   │   └── system.css            # Sistema visual y responsive
│   ├── img/                      # Screenshots, SVG y favicons
│   └── js/
│       ├── app.js                # Render de proyectos y tecnologías
│       ├── i18n.js               # Español / inglés
│       ├── system.js             # Navegación, tema y formulario
│       └── data/
│           ├── projects.js
│           └── technologies.js
├── scripts/
│   ├── build.mjs                 # Genera public/ para Vercel
│   ├── validate.mjs              # Validación del build estático
│   └── visual-check.mjs          # QA responsive automatizado
├── tests/                        # Tests de datos y del endpoint de contacto
├── eslint.config.js
├── vercel.json
├── robots.txt
└── sitemap.xml
```

## Instalación

Requiere Node.js 20.19 o superior y Python disponible en el PATH para el servidor estático de desarrollo.

```powershell
npm install
```

## Desarrollo

```powershell
npm run dev
```

Abrí `http://127.0.0.1:4173`.

La versión en español vive en la URL principal y sus textos se editan directamente en los archivos HTML. La versión en inglés se abre con `?lang=en` y sus traducciones son las únicas almacenadas en `assets/js/i18n.js`. Las banderas cambian entre ambas versiones y mantienen el idioma en las páginas auxiliares.

El servidor estático local no ejecuta `/api/contact`. En ese entorno el formulario muestra el fallback de contacto previsto. Para probar la función serverless completa se puede usar Vercel CLI con las variables de entorno configuradas.

## Calidad y build

```powershell
npm run lint
npm test
npm run build
npm run qa:visual
```

- `lint`: ejecuta ESLint y comprueba formato con Prettier.
- `test`: valida datos de contenido y el comportamiento básico del endpoint.
- `build`: valida el proyecto y genera `public/` con los archivos estáticos que Vercel publica. La función `api/contact.js` se despliega por separado como función serverless.
- `qa:visual`: usa Microsoft Edge instalado localmente para revisar 375, 430, 768, 1024 y 1440 px, interacción básica, imágenes y overflow horizontal. Las capturas temporales se guardan en `.artifacts/`, que no se publica.

Para aplicar formato:

```powershell
npm run format
```

## Formulario y variables de entorno

El formulario envía JSON mediante `POST /api/contact`. La función valida los datos, escapa el HTML, aplica honeypot y limitación básica por IP, registra resultados sin guardar el contenido del mensaje y utiliza Resend cuando existe una API key.

Copiá `.env.example` a tu configuración local o cargá estas variables en Vercel:

```text
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_FROM_EMAIL=MatuDev <contacto@matudev.com>
CONTACT_TO_EMAIL=correo@destino.com
```

- `RESEND_API_KEY` es necesaria para el envío real.
- `CONTACT_FROM_EMAIL` y `CONTACT_TO_EMAIL` son opcionales porque existe una configuración por defecto.
- El dominio usado en `CONTACT_FROM_EMAIL` debe estar verificado en Resend antes del despliegue.
- Nunca subas `.env` ni claves reales al repositorio.

Si `RESEND_API_KEY` no está configurada, el endpoint responde en modo desarrollo y el frontend muestra la alternativa por correo. Ese comportamiento es intencional.

## Cómo agregar o editar proyectos

Los proyectos viven en `assets/js/data/projects.js`. Cada objeto sigue esta forma:

```js
{
  name: "Nombre",
  slug: "nombre",
  description: { es: "Descripción", en: "Description" },
  problem: { es: "Problema", en: "Problem" },
  technologies: ["Python", "FastAPI"],
  github: "https://github.com/...",
  demo: "",
  image: "assets/img/proyecto.png",
  alt: { es: "Texto alternativo", en: "Alt text" },
  status: "PORTFOLIO"
}
```

Estados admitidos: `LIVE`, `PORTFOLIO`, `BUILDING` y `EXPERIMENT`.

No publiques proyectos futuros como terminados: el estado, los enlaces y la descripción deben corresponder a contenido verificable.

## Contenido editable

- Stack: `assets/js/data/technologies.js`.
- Textos estáticos y traducciones: `assets/js/i18n.js` y `index.html`.

## SEO

La home incluye canonical, Open Graph, Twitter Cards y JSON-LD. `robots.txt` y `sitemap.xml` apuntan a `https://www.matudev.com`, que es el host canónico al que redirige el dominio publicado.

La imagen social está en `assets/img/og-system.png`. La computadora optimizada del hero está en `assets/img/hero-computer.webp` y sus versiones de favicon en `assets/img/favicon-computer.png` y `assets/img/apple-touch-computer.png`.

## Deployment

El repositorio está preparado para Vercel:

```text
Framework preset: None
Build command: vacío
Output directory: vacío
Root directory: /
```

`vercel.json` conserva los headers de seguridad, la política de caché para assets, el `no-store` de la API y las URLs limpias sin extensión `.html`. La configuración de dominio se administra en el proyecto de Vercel, no en este repositorio.
