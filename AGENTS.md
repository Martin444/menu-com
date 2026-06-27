# Menucom Landing — Project Context

## Overview
Landing page for **Menucom**, a digital platform for restaurant menu management and orders. Static SvelteKit site with CTAs redirecting to external dashboard app (`https://menucom-dashboard.netlify.app`).

## Tech Stack
- **Runtime**: Node.js >=18.13
- **Framework**: SvelteKit 2.5.27 (Svelte 4.2.19)
- **Build**: Vite 5.4.5
- **Adapter**: `@sveltejs/adapter-netlify` (SSR + static on Netlify)
- **CSS**: Hand-written scoped CSS with custom properties (`--principal-color: #3D72FD`, `--secondary-color: #CEDCFE`)
- **Font**: Self-hosted Sansation (static/fonts/)
- **Language**: JavaScript (+ TypeScript on some pages)

## Directory Structure
```
src/
├── app.html                    # HTML shell (lang="en", preload-data="hover")
├── app.d.ts                    # App namespace (empty)
├── features/
│   └── home/
│       ├── Home.svelte         # Main landing component
│       ├── components/
│       │   ├── Button.svelte          # Primary/secondary CTA button
│       │   ├── CatalogCard.svelte     # Card for public catalog display
│       │   └── MerchantCard.svelte    # Card for merchant display
│       └── sections/
│           ├── BannerImage.svelte     # Hero side banner
│           ├── FeaturedMerchants.svelte # Grid of featured merchants
│           ├── Footer.svelte          # Nav links (about-service, tyc, dev-contact)
│           ├── HeroSection.svelte     # Main hero with CTA
│           ├── Navbar.svelte          # Top nav with login/register
│           ├── OwnerCatalogs.svelte   # Grid of catalogs by owner
│           ├── PlatformStats.svelte   # Global platform statistics
│           └── PopularCatalogs.svelte # Grid of popular public catalogs
├── lib/
│   └── services/
│       ├── http.client.js       # Generic HTTP client (timeout, retries, backoff)
│       ├── catalog.service.js   # Legacy public catalog endpoints (/catalogs/public/*)
│       └── merchant.service.js  # Landing page endpoints (/public/*)
└── routes/
    ├── +page.svelte             # / → renders Home.svelte
    ├── about-service/+page.svelte  # /about-service — "Sobre el Servicio"
    ├── contact/+page.svelte        # /contact — stub (h1 only)
    ├── dev-contact/+page.svelte    # /dev-contact — developer email
    ├── tyc/+page.svelte            # /tyc — Terms & Conditions
    ├── about/                      # (empty — 404)
    └── sverdle/how-to-play/        # (empty — 404)
static/
├── favicon.png, robots.txt
├── fonts/Sansation_*.ttf       # 6 font files (Regular, Bold, Light, Italic, Bold Italic, Light Italic)
└── img/
    ├── assets/renderStore.jpeg  # Banner image
    ├── assets/screens.png       # Dashboard mockup
    └── logos/logomenucom_1.png  # Primary logo
```

## Routes
| Route | File | Description |
|-------|------|-------------|
| `/` | `+page.svelte` | Landing page — imports `Home.svelte` |
| `/about-service` | `about-service/+page.svelte` | Service description (Spanish) |
| `/contact` | `contact/+page.svelte` | Placeholder ("Esto es contactos") |
| `/dev-contact` | `dev-contact/+page.svelte` | Developer email |
| `/tyc` | `tyc/+page.svelte` | Terms & Conditions (Spanish) |

No `+layout.svelte`, no `+error.svelte`, no server endpoints, no load functions, no stores.

## Key Components
- **Home.svelte**: Header (logo + login button), hero section, image banner, catalog sections, footer. External redirects via `window.location.href`.
- **Button**: Primary/secondary CTA button variants
- **CatalogCard**: Card displaying catalog cover, title, description, owner info and view count
- **MerchantCard**: Card displaying merchant cover, avatar, business name, description, tags and stats
- **PopularCatalogs**: Section fetching and displaying popular public catalogs via API
- **OwnerCatalogs**: Section fetching and displaying catalogs by a specific owner ID
- **FeaturedMerchants**: Section fetching and displaying featured merchants for hero section
- **PlatformStats**: Section fetching and displaying global platform statistics for social proof
- **Footer**: Nav links to about-service, tyc, dev-contact

## API Integration
- **Public Catalog API**: `src/lib/services/catalog.service.js` consumes the public catalog endpoints from the Menucom API.
- **Base URL**: Configurable via `VITE_API_URL` env variable (defaults to production API). See `.env.example`.
- **HTTP Client**: `src/lib/services/http.client.js` wraps `fetch` with:
  - `AbortController` timeout (default 10s)
  - Exponential backoff retries (default 2 retries)
  - Consistent error handling (parses JSON error bodies when available)
- **Endpoints used**:
  - `GET /catalogs/public/search` — Fetches popular catalogs (sorted by viewCount DESC, limit 20)
  - `GET /catalogs/public/owner/:ownerId` — Fetches catalogs by owner
  - `GET /catalogs/public/:slug` — Fetches single catalog detail (available in service, not yet used in UI)
- **Current integration**: PopularCatalogs section is mounted in Home.svelte. OwnerCatalogs is commented out until a specific owner ID is configured.

## Landing Page API (new)
- **Landing Page API**: `src/lib/services/merchant.service.js` consumes the new landing page endpoints.
- **Endpoints available**:
  - `GET /public/merchants` — Paginated list of professional merchants with public catalogs
  - `GET /public/merchants/featured` — Featured merchants for hero section
  - `GET /public/merchants/:slug` — Full public merchant profile with catalogs and items
  - `GET /public/merchants/:slug/catalogs` — Lightweight merchant catalogs only
  - `GET /public/categories` — Business categories/types with counts
  - `GET /public/stats` — Global platform statistics for social proof
  - `GET /public/search` — Unified search across merchants, catalogs and items
  - `GET /public/trending` — Trending catalogs and merchants by period
- **Current integration**: FeaturedMerchants and PlatformStats sections are mounted in Home.svelte. Other endpoints available for future sections.

## External URLs (hardcoded)
- Login: `https://menucom-dashboard.netlify.app/#/login`
- Register: `https://menucom-dashboard.netlify.app/#/registrate`

## NPM Scripts
| Command | Script |
|---------|--------|
| `npm run dev` | `vite dev` |
| `npm run build` | `vite build` |
| `npm run preview` | `vite preview` |
| `npm run check` | `svelte-kit sync && svelte-check --tsconfig ./jsconfig.json` |

## Conventions
- Feature-based folder structure under `src/features/`
- `src/lib/` contains API service clients (e.g. `catalog.service.js`)
- Hand-written CSS with custom properties (no Tailwind/PostCSS)
- Responsive breakpoint at 768px
- No TypeScript strict mode on Home.svelte (plain `<script>`); other pages use `<script lang="ts">`

## Known Issues
1. ~~**Netlify deploy**: `netlify.toml` sets `publish = "dist"` but SvelteKit outputs to default build dir — may mismatch.~~ **Fixed**: Migrated to `@sveltejs/adapter-netlify` and removed incorrect `publish` directive.
2. **Broken image path**: `Home.svelte` imports static assets via `../../../static/img/...` — should use root-relative `/img/...`.
3. **Unused deps**: `svelte-routing`, `@fontsource/fira-mono`, `@neoconfetti/svelte` installed but never used.
4. **Empty routes**: `/about` and `/sverdle/how-to-play` will 404.
5. **No error page**: Missing `+error.svelte`.
6. **Machine artifacts**: Files with `-DESKTOP-AQ5AGA6` suffix are machine-generated and shouldn't be committed.
7. **No tests**: No testing framework configured.

## Branches
- `main` (default), `develop`, `master`, `qa` (current), `qa-DESKTOP-AQ5AGA6`

---

## Alineación con la Misión: Profesionalización del Emprendedor

> Misión global: **Convertir a los Emprendedores en profesionales**

### Rol de la Landing en la Misión

La landing page es la **carta de presentación de Menucom** y la principal herramienta de **adquisición de emprendedores**. Es donde un potencial emprendedor decide si Menucom lo va a profesionalizar o no.

### Lo que ya aportamos a la misión
- ✅ Hero con propuesta de valor clara ("Crea tu tienda online en minutos")
- ✅ Comerciantes destacados (prueba social de profesionales usando la plataforma)
- ✅ Stats globales de plataforma (comerciantes, productos, pedidos)
- ✅ Catálogos populares (muestra de contenido activo)
- ✅ CTA directo a registro/login

### Lo que falta para alinear mejor con la misión

| Gap | Impacto en misión | Prioridad |
|-----|-------------------|-----------|
| **Perfiles completos de comercios** en lugar de solo cards minimalistas | Un emprendedor ve modelos a seguir | 🔴 Alta |
| **Sección "Casos de éxito"** con métricas reales (antes/después) | Demuestra que la plataforma sí profesionaliza | 🔴 Alta |
| **Comparativa de planes** FREE vs PREMIUM vs ENTERPRISE visible | El emprendedor entiende el valor de profesionalizarse | 🔴 Alta |
| **Sección educativa / Blog** con guías para emprendedores | Menucom no solo da herramientas, también conocimiento | 🟡 Media |
| **Testimonios / Reseñas** de emprendedores usando la plataforma | Poderosa prueba social | 🟡 Media |
| **Tour interactivo** o video demostrativo del dashboard | El emprendedor se imagina usando la herramienta | 🟡 Media |

### Reglas para nuevas features en la landing

```javascript
// CHECKLIST: ¿Esta feature atrae emprendedores que quieren profesionalizarse?
// 1. ¿Muestra el valor de la plataforma?
// 2. ¿Genera deseo de pertenecer a la comunidad?
// 3. ¿Da confianza de que Menucom sí profesionaliza?
// 4. ¿Comunica claramente los beneficios de cada plan?
```

### Impacto Cross-Project
| Feature | API | Catalog PWA | Dashboard | Landing |
|---------|-----|------------|-----------|---------|
| BusinessProfile (display) | Public endpoints | — | — | Perfil completo |
| Reseñas (widget) | Public endpoints | — | — | Testimonios |
| Casos de éxito | Endpoint específico | — | — | Sección dedicada |
| Comparativa planes | — | — | — | Tabla comparativa |
| Blog/Guías | CMS endpoints | — | — | Sección educativa |

### Documentos relacionados
- `docs/MISSION-ALIGNMENT.md` — Análisis completo de misión (cross-project)
