# Portafolio · Leonardo Banoy

CV y portafolio de una página para **Leonardo Banoy**, tecnólogo en Desarrollo de Software. El sitio reúne su experiencia en soporte y automatización digital con GoHighLevel, tres proyectos full-stack con código público y demos desplegadas, formación académica y certificaciones.

- Sitio oscuro, editorial y responsive.
- React 19 + Vite 8 + TypeScript.
- Contenido centralizado, sin API de GitHub en tiempo de ejecución.
- CV A4 de una página generado como PDF real, sin foto.
- Sin métricas, cargos, títulos ni testimonios inventados.

## Stack

| Capa | Tecnología |
| --- | --- |
| UI | React 19, TypeScript, CSS propio |
| Build | Vite 8 |
| Tipografía | IBM Plex Sans Variable + JetBrains Mono Variable (self-hosted) |
| Pruebas | Vitest + `react-dom/server` |
| Calidad | ESLint 10 + TypeScript |
| CV / OG | Microsoft Edge o Google Chrome en modo headless |

No hay framework de UI, backend, analítica ni peticiones a la API de GitHub desde el navegador.

## Cómo ejecutar

Requisitos: **Node.js ≥ 22.12** y npm.

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

### Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Typecheck + build de producción en `dist/` |
| `npm run preview` | Sirve el build en `http://localhost:4173` |
| `npm run typecheck` | Verifica TypeScript |
| `npm run lint` | ESLint sobre todo el proyecto |
| `npm run test` | Pruebas de datos y render estático |
| `npm run cv` | Genera el PDF del CV con Edge/Chrome headless |
| `npm run check:cv` | Comprueba que el PDF exista y sea válido |
| `npm run assets` | Regenera `og-image.png` y `apple-touch-icon.png` |
| `npm run check:dist` | Verifica assets, referencias del build y ausencia de secretos |
| `npm run verify` | Ejecuta typecheck, lint, tests, check:cv, build y check:dist |

`npm run cv` y `npm run assets` buscan Edge o Chrome. Si el navegador está en otra ruta:

```powershell
$env:EDGE_PATH="C:\ruta\a\msedge.exe"
npm run cv
```

## Contenido

Los datos verificables y el contenido de perfil, proyectos, stack, formación, experiencia y contacto viven en **`src/data/portfolio.ts`**. Los titulares de sección y el microcopy de interfaz se ajustan en los componentes de `src/components/`.

- `profile`: nombre público, nombre legal, rol, ubicación, correo, GitHub, LinkedIn, bio, principios y ficha rápida.
- `navItems`: navegación principal, con seis secciones más Contacto en el menú móvil.
- `projects`: los tres proyectos, periodo, contexto, stack, highlights, demos, repositorios, capturas y notas.
- `skillGroups`: herramientas usadas en los proyectos.
- `learning`: temas en profundización.
- `trajectory`: ruta técnica ligada a los proyectos.
- `academic`: formación académica confirmada (Tecnólogo graduado e Ingeniería en curso).
- `certifications`: FSDCS, BDCP y FDCA (2025), sin emisor ni credencial inventados.
- `experience`: experiencia profesional en CopyAdopters.
- `contactCopy`: copy y disponibilidad mostrados en Contacto.
- `site`: título, descripción, ruta del CV y fecha de verificación.

### Datos personales y disponibilidad

- Nombre público: **Leonardo Banoy**.
- Nombre legal usado en el CV: **Leonardo Banoy López**.
- Ubicación: Villavicencio, Colombia.
- Idiomas: español nativo.
- Disponibilidad: remoto, híbrido o presencial; tiempo completo o medio tiempo.
- El teléfono **+57 321 906 5254** aparece únicamente en el PDF del CV. No se publica en el HTML, el JSON-LD ni el contenido de la página.

## CV en PDF

El PDF incluido está en `public/cv/leonardo-banoy-cv.pdf` y se genera desde `scripts/cv.html`:

```bash
npm run cv
npm run check:cv
```

- Es una página A4, sin foto y sin fechas inventadas.
- Incluye teléfono, experiencia, formación, certificaciones, idiomas y disponibilidad.
- `src/hooks/useCvAvailable.ts` hace una petición `HEAD` y solo muestra los botones de descarga si el servidor entrega un PDF válido. Si el archivo falta, no hay enlace roto.
- Al cambiar datos del CV, edita `scripts/cv.html` y vuelve a ejecutar `npm run cv`.

## Assets

| Archivo | Origen |
| --- | --- |
| `public/images/leonardo.jpg` | Avatar público del perfil de GitHub |
| `public/projects/libra.jpg` | Captura real de la demo de Libra |
| `public/projects/ticket-system.jpg` | Captura real de la pantalla de acceso de Ticket System |
| `public/projects/ecommerce-gym.jpg` | Captura real del catálogo de EcommerceGym |
| `public/og-image.png` | Generado desde `scripts/og.html` |
| `public/apple-touch-icon.png` | Generado desde `scripts/icon.html` |
| `public/favicon.svg` | Monograma vectorial `LB` |

Las capturas se tomaron de los sitios desplegados el **26 de octubre de 2026**, no son mockups.

## Verificación

```bash
npm run verify
```

Ese comando comprueba:

1. TypeScript sin errores.
2. ESLint sin errores.
3. Datos verificables y render estático de todas las secciones.
4. PDF con cabecera `%PDF-`, tamaño mínimo y marcador `%%EOF`.
5. Build de producción.
6. Assets copiados, referencias de Vite resueltas y ausencia de marcadores de secretos en `dist/`.

También se revisó el layout a 320, 390, 768, 1024 y 1440 px, el menú móvil, el diálogo de proyectos con teclado y los contrastes de texto principales.

## Despliegue

El build es estático:

```bash
npm run build
```

- **Vercel / Netlify / Cloudflare Pages:** build `npm run build`, output `dist`.
- No hay rutas de cliente, así que no hacen falta rewrites SPA.
- El PDF y las imágenes se sirven desde `public/` y se copian a `dist/`.

### Antes de publicar

1. Confirmar el dominio definitivo y añadirlo en `index.html`:
   ```html
   <link rel="canonical" href="https://tu-dominio.com/" />
   ```
2. Convertir `og:image` y `twitter:image` a URLs absolutas.
3. Revisar que las demos sigan activas (Render puede tardar en despertar).
4. Verificar que el nombre público coincida en GitHub y LinkedIn.
5. Confirmar que el teléfono solo se publique dentro del PDF, como se decidió.

El canonical se omite a propósito hasta confirmar el dominio.

## Fuentes verificadas

- Perfil: <https://github.com/Leonardo2206/Leonardo2206>
- Libra: <https://github.com/Leonardo2206/crud-libros-express-ts> · [demo](https://crud-libros-express-ts.vercel.app/)
- Ticket System: <https://github.com/Leonardo2206/ticket-system-backend> · [demo](https://ticket-system-backend-six.vercel.app/tickets)
- EcommerceGym: <https://github.com/Leonardo2206/EcommerceGym> · [demo](https://ecommerce-frontend-nine-iota.vercel.app/)
- LinkedIn: <https://www.linkedin.com/in/leonardo-banoy-lopez-68a92a2b0/>

### Notas de honestidad técnica

- **Ticket System:** el README del repositorio menciona cookies HttpOnly, pero el cliente todavía guarda el token en `localStorage`. La ficha del sitio no afirma esa característica; solo describe JWT, roles, Zod y rate limiting.
- **EcommerceGym:** el checkout es visual y no persiste pedidos ni procesa pagos reales. El registro acepta un `role` enviado por el cliente y el valor por defecto es administrador; por eso el sitio no promociona esos flujos como listos para producción.
- **Experiencia:** CopyAdopters se describe como soporte y desarrollo digital con GHL; no se presenta como experiencia backend.
- **Certificaciones:** se listan por nombre, sigla y año. No se afirma un emisor ni una credencial verificable porque no se proporcionaron.
- **Métricas:** no se publican porcentajes de dominio, años de experiencia, número de usuarios ni testimonios.

## Estructura

```text
.
├─ public/
│  ├─ cv/leonardo-banoy-cv.pdf
│  ├─ images/leonardo.jpg
│  ├─ projects/*.jpg
│  ├─ favicon.svg
│  ├─ og-image.png
│  └─ apple-touch-icon.png
├─ scripts/
│  ├─ browser.mjs
│  ├─ cv.html
│  ├─ generate-cv.mjs
│  ├─ check-cv.mjs
│  ├─ og.html
│  ├─ icon.html
│  ├─ generate-assets.mjs
│  └─ check-dist.mjs
├─ src/
│  ├─ components/
│  ├─ data/portfolio.ts
│  ├─ hooks/useCvAvailable.ts
│  ├─ styles/
│  ├─ App.tsx
│  └─ main.tsx
└─ index.html
```

## Qué falta por completar

- [ ] Confirmar el dominio y activar canonical + OG absoluto.
- [ ] Verificar las demos una última vez antes de publicar.
- [ ] Revisar que el nombre público coincida en GitHub y LinkedIn.
- [ ] Decidir si se añade un enlace de credencial para las certificaciones.
