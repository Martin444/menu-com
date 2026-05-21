# UI/UX Audit — Menucom Landing

> Estado: `Fase 2 completada — Layout global, Container y SEO`  
> Fecha: 2026-05-21  
> Última actualización: 2026-05-21  
> Alcance: Landing page (`/`), rutas secundarias (`/about-service`, `/tyc`, `/contact`, `/dev-contact`) y componentes compartidos.

---

## 1. Estado actual

La landing fue refactorizada desde una estructura monolítica hacia una arquitectura modular basada en **SvelteKit** con CSS manual, tokens globales, responsive mobile-first y un layout compartido que envuelve todas las rutas.

### Estructura actual post-refactor
```
src/
├── routes/
│   ├── +layout.svelte          ← Navbar + <main> + Footer en todas las rutas
│   ├── +error.svelte           ← Página 404 con identidad de marca
│   ├── +page.svelte            ← Landing
│   ├── about-service/
│   ├── contact/
│   ├── dev-contact/
│   └── tyc/
├── features/
│   └── home/
│       ├── Home.svelte         ← Orquestador (Hero + Banner)
│       ├── sections/
│       │   ├── Navbar.svelte   ← Responsive con menú hamburguesa
│       │   ├── HeroSection.svelte
│       │   ├── BannerImage.svelte
│       │   └── Footer.svelte   ← Footer con columnas y marca
│       └── components/
│           └── Button.svelte   ← Unificado: primary / secondary / ghost
├── lib/
│   └── components/
│       └── Container.svelte    ← Wrapper reutilizable sm/md/lg
└── styles/
    └── global.css              ← Reset + tokens + @font-face
```

---

## 2. Problemas resueltos

### Responsive
| # | Problema | Estado |
|---|----------|--------|
| 2.1 | Layout absoluto en mobile (`position: absolute` + `z-index: -1`) | ✅ Eliminado. Banner se oculta en mobile; el layout usa grid limpio. |
| 2.2 | Alturas fijas `100vh` | ✅ Reemplazado por `min-height: 100dvh` en Hero y layout. |
| 2.3 | Breakpoint único | ✅ Mobile-first con breakpoints en `768px` y `1024px`. |
| 2.4 | Elementos ocultos sin alternativa (`.item-hidden`) | ✅ Eliminado. Menú hamburguesa recupera el CTA "Registrate". |
| 2.5 | Texto blanco sobre imagen sin fondo garantizado | ✅ Resuelto: en mobile el texto es oscuro sobre fondo blanco. |
| 2.6 | Media query por altura | ✅ Eliminada. Ya no fuerza `height: 800px`. |

### Arquitectura
| # | Problema | Estado |
|---|----------|--------|
| 3.1 | Sin layout compartido | ✅ `+layout.svelte` envuelve Navbar, `<main>` y Footer en **todas** las rutas. |
| 3.2 | Sin sistema de diseño | ✅ Tokens CSS globales en `:root` (colores, fuentes, spacing, radius). |
| 3.3 | Componentes no reutilizables | ✅ `Home.svelte` descompuesto en `Navbar`, `HeroSection`, `BannerImage`, `Footer`. |
| 3.4 | Rutas de imágenes inconsistentes | ✅ Corregidas a absolutas (`/img/...`). |
| 3.5 | CSS duplicado en páginas de contenido | ✅ `Container.svelte` centraliza `max-width` + `padding` reutilizable. |

### UX / a11y
| # | Problema | Estado |
|---|----------|--------|
| 4.1 | Imágenes sin `alt` | ✅ Agregados descriptivos en logo, screens y banner. |
| 4.2 | Dropdown "Company" inerte | ✅ Eliminado del markup. |
| 4.3 | Páginas huérfanas y 404 | ✅ Creado `+error.svelte`; `/contact` completado con contenido y CTA. |
| 4.4 | Footer mínimo | ✅ Reestructurado con logo, tagline, columnas de navegación y copyright. |
| 4.5 | Contraste insuficiente | ✅ Resuelto al eliminar el gradiente verde sobre imagen en mobile. |
| 4.6 | Sin landmarks semánticos | ✅ `<header>` en Navbar, `<main>` en layout, `<footer>` en Footer. |
| 4.7 | Sin navegación en rutas secundarias | ✅ Navbar y Footer ahora están en `+layout.svelte`. |
| 4.8 | Sin metadatos SEO | ✅ `<svelte:head>` con título y description en todas las rutas. |

---

## 3. Checklist de implementación

### Fase 1 — Fundamentos
- [x] Crear `+layout.svelte` con CSS global, fuentes y navegación/pie compartidos.
- [x] Crear sistema de tokens CSS (`:root`) en `src/styles/global.css`.
- [x] Refactorizar `Home.svelte`: extraer `Navbar`, `HeroSection`, `BannerImage`.
- [x] Unificar `ButtonPrimary` + `ButtonSecundary` en `Button.svelte`.
- [x] Reescribir CSS responsive **mobile-first** (breakpoints: 768px, 1024px).
- [x] Implementar menú hamburguesa funcional en mobile; recuperar CTA "Registrate".
- [x] Corregir rutas de imágenes a absolutas (`/img/...`).
- [x] Agregar `alt` descriptivos y landmarks semánticos (`<nav>`, `<main>`, `<footer>`).
- [x] Crear `+error.svelte` para manejo de 404.
- [x] Completar `/contact`.
- [x] Mejorar `Footer.svelte`: estructura de columnas, logo de marca y agrupación de links.

### Fase 2 — Layout y consistencia
- [x] Mover `Navbar` y `Footer` a `+layout.svelte` para todas las rutas.
- [x] Crear `Container.svelte` con variantes `sm` / `md` / `lg`.
- [x] Aplicar `Container` a `/about-service`, `/tyc`, `/dev-contact`, `/contact`.
- [x] Agregar `<svelte:head>` con título y meta description en todas las rutas.

---

## 4. Próximos pasos — Fase 3

### 4.1 Limpiar rutas vacías
Existen directorios sin contenido útil:
- `src/routes/about/` — devuelve 404.
- `src/routes/sverdle/how-to-play/` — devuelve 404.

**Acción:** Eliminar estos directorios o agregar redirecciones (`+page.js` con `redirect`).

### 4.2 Performance
- **Preload de fuentes:** Agregar `<link rel="preload">` para `Sansation_Bold.ttf` y `Sansation_Regular.ttf` en `app.html`.
- **Lazy loading de imágenes:** El banner de la tienda (`renderStore.jpeg`) carga inmediatamente aunque esté fuera del viewport en mobile. Usar `loading="lazy"` donde aplique.

### 4.3 Accesibilidad adicional
- Verificar contraste de los enlaces del footer sobre fondo negro (ratio WCAG AA).
- Agregar `aria-current="page"` en el link activo del navbar cuando corresponda.
- Asegurar foco visible en el menú hamburguesa y los botones (outline al navegar con teclado).

### 4.4 Microinteracciones
- Animaciones de entrada suaves en el hero (fade-in escalonado de título, descripción y CTA).
- Hover states más expresivos en cards o secciones futuras.

---

## 5. Notas

- No modificar lógica de negocio ni URLs externas (`menucom-dashboard.netlify.app`).
- Mantener compatibilidad con `@sveltejs/adapter-auto` y el build actual de Vite.
- Priorizar cambios que impacten directamente en la experiencia mobile.
- El build de producción (`npm run build`) se valida exitosamente tras cada cambio.
