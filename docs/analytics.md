# Analytics — Google Analytics 4 (gtag.js)

## Resumen

La landing page de Menucom utiliza **Google Analytics 4** vía **gtag.js** para medir tráfico, engagement y conversiones.

## Configuración

### Measurement ID

Se define mediante la variable de entorno `VITE_GA_MEASUREMENT_ID`:

| Archivo | Valor |
|---------|-------|
| `.env` (desarrollo local) | `G-NGC1KBLRTH` |
| `.env.example` | Vacío (deshabilitado por defecto) |
| Netlify (producción) | `G-NGC1KBLRTH` |

Si la variable está vacía o no definida, el analytics no se carga (no-OP total).

### Cómo deshabilitar en desarrollo

```bash
# .env.local (no comiteado)
VITE_GA_MEASUREMENT_ID=
```

O simplemente no incluir la variable.

## Arquitectura

```
src/lib/analytics/gtag.js          ← Wrapper SSR-safe
src/lib/actions/scrollAnalytics.js ← Scroll depth action
src/routes/+layout.svelte          ← Pageview en SPA + CTA clicks globales
```

### `gtag.js` — Wrapper principal

- **SSR-safe**: No-OP si `import.meta.env.SSR` es true.
- **Inicialización lazy**: El script gtag se inyecta dinámicamente al primer uso.
- **`send_page_view: false`**: Se envía manualmente para evitar duplicados en SPA.

Funciones exportadas:

| Función | Descripción |
|---------|-------------|
| `pageview(url)` | Registra una page view. Se llama desde `afterNavigate` en `+layout.svelte`. |
| `event(action, params)` | Registra un evento custom con parámetros opcionales. |

## Eventos trackeados

### Automáticos (desde `+layout.svelte`)

| Evento | Disparo | Parámetros |
|--------|---------|------------|
| `page_view` | Cada navegación SPA (`afterNavigate`) | `page_path`, `page_location` |
| `scroll_depth` | Scroll del usuario | `percent: 25\|50\|75\|100`, `page_path` |

### CTA clicks

| Componente | Evento | Parámetros |
|------------|--------|------------|
| `Navbar.svelte` (Login) | `cta_click` | `{ type: 'login' }` |
| `Navbar.svelte` (Registrate) | `cta_click` | `{ type: 'register' }` |
| `HeroSection.svelte` | `cta_click` | `{ type: 'hero_cta' }` |
| `+layout.svelte` (Login global) | `cta_click` | `{ type: 'login' }` |
| `+layout.svelte` (Register global) | `cta_click` | `{ type: 'register' }` |

Nota: Los clicks en Navbar y layout duplican el evento `cta_click` porque el Navbar llama internamente a las funciones `gotoLogin`/`gotoRegister` del layout, que también disparan el evento. Si en el futuro se desacoplan, revisar duplicación.

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
import { event } from '$lib/analytics/gtag.js';

// Evento simple
event('mi_evento');

// Con parámetros
event('mi_evento', { clave: 'valor', numero: 42 });
```

## Dashboard en Google Analytics

1. Ir a https://analytics.google.com
2. Seleccionar la propiedad **Menucom Landing**
3. Secciones útiles:
   - **Informes → Tiempo real** — verificar que los eventos llegan
   - **Informes → Compromiso → Eventos** — todos los eventos listados arriba
   - **Informes → Compromiso → Páginas y pantallas** — pageviews por ruta

## Notas técnicas

- **SPA handling**: El `send_page_view: false` en el config inicial evita el pageview doble. Las navegaciones SPA se capturan vía `afterNavigate` de SvelteKit.
- **SSR**: Toda la lógica de analytics está protegida por `import.meta.env.SSR` — nunca se ejecuta en el servidor.
- **Script loading**: El script de gtag.js se inyecta dinámicamente con `document.createElement('script')` lazy, no bloquea el render inicial.
- **Ad Blockers**: gtag.js puede ser bloqueado por ad blockers. Los eventos simplemente no se enviarán, sin impacto en la funcionalidad del sitio.
