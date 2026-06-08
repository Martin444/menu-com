# Analytics — Firebase Analytics

## Resumen

La landing page de Menucom utiliza **Firebase Analytics** (Google Analytics para Firebase) para medir tráfico, engagement y conversiones.

## Configuración

Los datos de Firebase están hardcodeados en `src/lib/analytics/firebase.js`:

| Parámetro | Valor |
|-----------|-------|
| apiKey | `AIzaSyCIetD2sqddB9a0PyXP32BjWQEZ7fEp-Rw` |
| projectId | `menucom-ff087` |
| appId | `1:1053737382833:web:787bf4799cfe0063900390` |
| measurementId | `G-G0RD42N6XR` |

## Arquitectura

```
src/lib/analytics/firebase.js      ← Wrapper SSR-safe
src/lib/actions/scrollAnalytics.js ← Scroll depth action
src/routes/+layout.svelte          ← Pageview en SPA + CTA clicks globales
```

### `firebase.js` — Wrapper principal

- **SSR-safe**: No-OP si `import.meta.env.SSR` es true.
- **Inicialización**: Firebase App y Analytics se inicializan al importar el módulo.
- Usa la API modular v9+ (`initializeApp`, `getAnalytics`, `logEvent`).

Funciones exportadas:

| Función | Descripción |
|---------|-------------|
| `pageview(url)` | Registra una page view con `logEvent(analytics, 'page_view', { page_path, page_location })`. |
| `event(action, params)` | Registra un evento custom con `logEvent(analytics, action, params)`. |

## Eventos trackeados

### Automáticos (desde `+layout.svelte`)

| Evento | Disparo | Parámetros |
|--------|---------|------------|
| `page_view` | Cada navegación SPA (`afterNavigate`) | `page_path`, `page_location` |
| `scroll_depth` | Scroll del usuario | `percent: 25|50|75|100`, `page_path` |

### CTA clicks

| Componente | Evento | Parámetros |
|------------|--------|------------|
| `Navbar.svelte` (Login) | `cta_click` | `{ type: 'login' }` |
| `Navbar.svelte` (Registrate) | `cta_click` | `{ type: 'register' }` |
| `HeroSection.svelte` | `cta_click` | `{ type: 'hero_cta' }` |
| `+layout.svelte` (Login global) | `cta_click` | `{ type: 'login' }` |
| `+layout.svelte` (Register global) | `cta_click` | `{ type: 'register' }` |

### Navegación a cards

| Componente | Evento | Parámetros |
|------------|--------|------------|
| `MerchantCard.svelte` | `merchant_click` | `{ merchant_name, merchant_slug }` |
| `CatalogCard.svelte` | `catalog_click` | `{ catalog_title, catalog_slug }` |

### Secciones vistas

| Componente | Evento | Parámetros |
|------------|--------|------------|
| `PopularCatalogs.svelte` | `section_view` | `{ section: 'popular_catalogs' }` |
| `FeaturedMerchants.svelte` | `section_view` | `{ section: 'featured_merchants' }` |
| `PlatformStats.svelte` | `section_view` | `{ section: 'platform_stats' }` |

## Cómo agregar un nuevo evento

```javascript
import { event } from '$lib/analytics/firebase.js';

// Evento simple
event('mi_evento');

// Con parámetros
event('mi_evento', { clave: 'valor', numero: 42 });
```

## Dashboard en Firebase / Google Analytics

1. Ir a https://console.firebase.google.com
2. Seleccionar el proyecto **menucom-ff087**
3. Ir a **Analytics** → **Dashboard** o **Eventos**
4. También se puede ver en https://analytics.google.com buscando la propiedad asociada

## Notas técnicas

- **SPA handling**: Firebase Analytics maneja automáticamente el page_view en SPA, pero se envía manualmente en `afterNavigate` para mayor precisión.
- **SSR**: Toda la lógica está protegida por `import.meta.env.SSR` — nunca se ejecuta en el servidor.
- **Firebase SDK**: Se usa la API modular v9+ con tree-shaking para minimizar el bundle.
