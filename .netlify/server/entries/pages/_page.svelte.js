import { n as noop, c as create_ssr_component, v as validate_component, e as escape, g as each, h as assign, i as identity, f as subscribe } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/Button.js";
/* empty css                                                     */
import { w as writable } from "../../chunks/index.js";
import { S as Seo } from "../../chunks/Seo.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
const css$5 = {
  code: ".hero.svelte-1o6lgvb.svelte-1o6lgvb{display:grid;grid-template-columns:1fr;gap:var(--space-lg);align-items:center;max-width:var(--container-max);margin:0 auto;padding:var(--space-xl) var(--space-lg);min-height:calc(100dvh - 72px)}.hero__content.svelte-1o6lgvb.svelte-1o6lgvb{display:flex;flex-direction:column;justify-content:center}.hero__title.svelte-1o6lgvb.svelte-1o6lgvb{font-family:var(--font-bold);font-weight:700;font-size:clamp(2.5rem, 5vw, 4.25rem);line-height:1.1;color:var(--color-text);margin-bottom:var(--space-lg)}.hero__description.svelte-1o6lgvb.svelte-1o6lgvb{font-family:var(--font-light);font-weight:300;font-size:clamp(1rem, 1.5vw, 1.25rem);line-height:1.7;color:var(--color-text);margin-bottom:var(--space-lg);max-width:50ch}.hero__cta.svelte-1o6lgvb.svelte-1o6lgvb{display:flex}.hero__image.svelte-1o6lgvb.svelte-1o6lgvb{display:none}.hero__image.svelte-1o6lgvb img.svelte-1o6lgvb{width:100%;height:auto;border-radius:var(--radius-md)}@media(min-width: 768px){.hero.svelte-1o6lgvb.svelte-1o6lgvb{grid-template-columns:1fr 1fr;gap:var(--space-xl)}.hero__image.svelte-1o6lgvb.svelte-1o6lgvb{display:flex;align-items:center;justify-content:center}}",
  map: `{"version":3,"file":"HeroSection.svelte","sources":["HeroSection.svelte"],"sourcesContent":["<script>\\n  import { fly } from 'svelte/transition';\\n  import { quintOut } from 'svelte/easing';\\n  import { event } from '$lib/analytics/gtag.js';\\n  import Button from \\"../components/Button.svelte\\";\\n\\n  export let onGetStarted = () => {};\\n\\n  function handleGetStarted() {\\n    event('cta_click', { type: 'hero_cta' });\\n    onGetStarted();\\n  }\\n<\/script>\\n\\n<section class=\\"hero\\">\\n  <div class=\\"hero__content\\">\\n    {#key true}\\n      <h1\\n        class=\\"hero__title\\"\\n        in:fly={{ y: 30, duration: 700, delay: 100, easing: quintOut }}\\n      >\\n        Creá tu tienda online en minutos\\n      </h1>\\n    {/key}\\n\\n    {#key true}\\n      <p\\n        class=\\"hero__description\\"\\n        in:fly={{ y: 30, duration: 700, delay: 250, easing: quintOut }}\\n      >\\n        Creá tu propio negocio fácilmente con nuestra plataforma web.\\n        Gestioná tu inventario, compartí catálogos con clientes y mucho más.\\n      </p>\\n    {/key}\\n\\n    {#key true}\\n      <div\\n        class=\\"hero__cta\\"\\n        in:fly={{ y: 30, duration: 700, delay: 400, easing: quintOut }}\\n      >\\n        <Button variant=\\"primary\\" label=\\"Empezar ahora\\" onClick={handleGetStarted} />\\n      </div>\\n    {/key}\\n  </div>\\n\\n  {#key true}\\n    <div\\n      class=\\"hero__image\\"\\n      in:fly={{ x: 40, opacity: 0, duration: 800, delay: 500, easing: quintOut }}\\n    >\\n      <img src=\\"/img/assets/screens.png\\" alt=\\"Dashboard preview of Menucom platform showing catalog and inventory management\\" />\\n    </div>\\n  {/key}\\n</section>\\n\\n<style>\\n  .hero {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    gap: var(--space-lg);\\n    align-items: center;\\n    max-width: var(--container-max);\\n    margin: 0 auto;\\n    padding: var(--space-xl) var(--space-lg);\\n    min-height: calc(100dvh - 72px);\\n  }\\n\\n  .hero__content {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n  }\\n\\n  .hero__title {\\n    font-family: var(--font-bold);\\n    font-weight: 700;\\n    font-size: clamp(2.5rem, 5vw, 4.25rem);\\n    line-height: 1.1;\\n    color: var(--color-text);\\n    margin-bottom: var(--space-lg);\\n  }\\n\\n  .hero__description {\\n    font-family: var(--font-light);\\n    font-weight: 300;\\n    font-size: clamp(1rem, 1.5vw, 1.25rem);\\n    line-height: 1.7;\\n    color: var(--color-text);\\n    margin-bottom: var(--space-lg);\\n    max-width: 50ch;\\n  }\\n\\n  .hero__cta {\\n    display: flex;\\n  }\\n\\n  .hero__image {\\n    display: none;\\n  }\\n\\n  .hero__image img {\\n    width: 100%;\\n    height: auto;\\n    border-radius: var(--radius-md);\\n  }\\n\\n  /* Tablet and up */\\n  @media (min-width: 768px) {\\n    .hero {\\n      grid-template-columns: 1fr 1fr;\\n      gap: var(--space-xl);\\n    }\\n\\n    .hero__image {\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwDE,mCAAM,CACJ,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAC1B,GAAG,CAAE,IAAI,UAAU,CAAC,CACpB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,eAAe,CAAC,CAC/B,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,IAAI,UAAU,CAAC,CACxC,UAAU,CAAE,KAAK,MAAM,CAAC,CAAC,CAAC,IAAI,CAChC,CAEA,4CAAe,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MACnB,CAEA,0CAAa,CACX,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,MAAM,CAAC,CAAC,GAAG,CAAC,CAAC,OAAO,CAAC,CACtC,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,aAAa,CAAE,IAAI,UAAU,CAC/B,CAEA,gDAAmB,CACjB,WAAW,CAAE,IAAI,YAAY,CAAC,CAC9B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,OAAO,CAAC,CACtC,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,SAAS,CAAE,IACb,CAEA,wCAAW,CACT,OAAO,CAAE,IACX,CAEA,0CAAa,CACX,OAAO,CAAE,IACX,CAEA,2BAAY,CAAC,kBAAI,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,WAAW,CAChC,CAGA,MAAO,YAAY,KAAK,CAAE,CACxB,mCAAM,CACJ,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,GAAG,CAAE,IAAI,UAAU,CACrB,CAEA,0CAAa,CACX,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACnB,CACF"}`
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onGetStarted = () => {
  } } = $$props;
  function handleGetStarted() {
    onGetStarted();
  }
  if ($$props.onGetStarted === void 0 && $$bindings.onGetStarted && onGetStarted !== void 0) $$bindings.onGetStarted(onGetStarted);
  $$result.css.add(css$5);
  return `<section class="hero svelte-1o6lgvb"><div class="hero__content svelte-1o6lgvb"><h1 class="hero__title svelte-1o6lgvb" data-svelte-h="svelte-1liuqoh">Creá tu tienda online en minutos</h1> <p class="hero__description svelte-1o6lgvb" data-svelte-h="svelte-1f1lz8g">Creá tu propio negocio fácilmente con nuestra plataforma web.
        Gestioná tu inventario, compartí catálogos con clientes y mucho más.</p> <div class="hero__cta svelte-1o6lgvb">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "primary",
      label: "Empezar ahora",
      onClick: handleGetStarted
    },
    {},
    {}
  )}</div></div> <div class="hero__image svelte-1o6lgvb" data-svelte-h="svelte-owk5qm"><img src="/img/assets/screens.png" alt="Dashboard preview of Menucom platform showing catalog and inventory management" class="svelte-1o6lgvb"></div> </section>`;
});
const css$4 = {
  code: ".banner.svelte-1cltf{position:relative;width:100%;height:100%;overflow:hidden;background-color:black}.banner__img.svelte-1cltf{width:100%;height:100%;object-fit:cover;object-position:center}@media(max-width: 767px){.banner.svelte-1cltf{position:absolute;inset:0;z-index:0;opacity:0.15}}",
  map: '{"version":3,"file":"BannerImage.svelte","sources":["BannerImage.svelte"],"sourcesContent":["<section class=\\"banner\\" aria-hidden=\\"true\\">\\n  <img\\n    src=\\"/img/assets/renderStore.jpeg\\"\\n    alt=\\"\\"\\n    class=\\"banner__img\\"\\n  />\\n</section>\\n\\n<style>\\n  .banner {\\n    position: relative;\\n    width: 100%;\\n    height: 100%;\\n    overflow: hidden;\\n    background-color: black;\\n  }\\n\\n  .banner__img {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n    object-position: center;\\n  }\\n\\n  /* Mobile: banner becomes a subtle background layer */\\n  @media (max-width: 767px) {\\n    .banner {\\n      position: absolute;\\n      inset: 0;\\n      z-index: 0;\\n      opacity: 0.15;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AASE,oBAAQ,CACN,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MAAM,CAChB,gBAAgB,CAAE,KACpB,CAEA,yBAAa,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,eAAe,CAAE,MACnB,CAGA,MAAO,YAAY,KAAK,CAAE,CACxB,oBAAQ,CACN,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IACX,CACF"}'
};
const BannerImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="banner svelte-1cltf" aria-hidden="true" data-svelte-h="svelte-14wvxqh"><img src="/img/assets/renderStore.jpeg" alt="" class="banner__img svelte-1cltf"> </section>`;
});
const css$3 = {
  code: ".popular-catalogs.svelte-ow4faj{padding:var(--space-xl) var(--space-lg);background:var(--color-bg)}.popular-catalogs__container.svelte-ow4faj{max-width:var(--container-max);margin:0 auto}.popular-catalogs__title.svelte-ow4faj{font-family:var(--font-bold);font-size:clamp(1.5rem, 3vw, 2rem);margin-bottom:var(--space-lg);color:var(--color-text)}.popular-catalogs__grid.svelte-ow4faj{display:grid;grid-template-columns:1fr;gap:var(--space-lg)}@media(min-width: 640px){.popular-catalogs__grid.svelte-ow4faj{grid-template-columns:repeat(2, 1fr)}}@media(min-width: 1024px){.popular-catalogs__grid.svelte-ow4faj{grid-template-columns:repeat(3, 1fr)}}.popular-catalogs__state.svelte-ow4faj{text-align:center;padding:var(--space-xl) 0;font-family:var(--font-light);color:var(--color-text);opacity:0.7}.skeleton-card.svelte-ow4faj{background:var(--color-bg);border:1px solid var(--color-secondary);border-radius:var(--radius-lg);overflow:hidden}.skeleton-card__image.svelte-ow4faj{aspect-ratio:16 / 10;border-radius:0}.skeleton-card__body.svelte-ow4faj{display:flex;flex-direction:column;gap:var(--space-xs);padding:var(--space-md)}.skeleton-card__title.svelte-ow4faj{height:1.2rem;width:70%;border-radius:var(--radius-sm)}.skeleton-card__text.svelte-ow4faj{height:0.9rem;width:100%;border-radius:var(--radius-sm)}.skeleton-card__text--short.svelte-ow4faj{width:50%}",
  map: `{"version":3,"file":"PopularCatalogs.svelte","sources":["PopularCatalogs.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  import { fade } from 'svelte/transition';\\n  import { searchPublicCatalogs } from '$lib/services/catalog.service.js';\\n  import { scrollReveal } from '$lib/actions/scrollReveal.js';\\n  import { event } from '$lib/analytics/gtag.js';\\n  import CatalogCard from '../components/CatalogCard.svelte';\\n\\n  export let title = 'Catálogos Populares';\\n  export let type = undefined;\\n  export let tags = undefined;\\n\\n  /** @type {any[]} */\\n  let catalogs = [];\\n  let loading = true;\\n  /** @type {string|null} */\\n  let error = null;\\n\\n  onMount(async () => {\\n    try {\\n      catalogs = await searchPublicCatalogs({ type, tags });\\n    } catch (err) {\\n      error = err instanceof Error ? err.message : 'Unknown error';\\n      event('section_view', { section: 'popular_catalogs' });\\n    } finally {\\n      loading = false;\\n    }\\n  });\\n<\/script>\\n\\n<section class=\\"popular-catalogs\\" use:scrollReveal>\\n  <div class=\\"popular-catalogs__container\\">\\n    <h2 class=\\"popular-catalogs__title\\">{title}</h2>\\n\\n    {#if loading}\\n      <div class=\\"popular-catalogs__grid\\">\\n        {#each Array(6) as _, i}\\n          <div class=\\"skeleton-card\\">\\n            <div class=\\"skeleton skeleton-card__image\\"></div>\\n            <div class=\\"skeleton-card__body\\">\\n              <div class=\\"skeleton skeleton-card__title\\"></div>\\n              <div class=\\"skeleton skeleton-card__text\\"></div>\\n              <div class=\\"skeleton skeleton-card__text skeleton-card__text--short\\"></div>\\n            </div>\\n          </div>\\n        {/each}\\n      </div>\\n    {:else if error}\\n      <div class=\\"popular-catalogs__state\\" in:fade={{ duration: 300 }}>\\n        <p>No pudimos cargar los catálogos.</p>\\n      </div>\\n    {:else if catalogs.length === 0}\\n      <div class=\\"popular-catalogs__state\\" in:fade={{ duration: 300 }}>\\n        <p>No hay catálogos disponibles por el momento.</p>\\n      </div>\\n    {:else}\\n      <div class=\\"popular-catalogs__grid\\" in:fade={{ duration: 400 }}>\\n        {#each catalogs as catalog (catalog.id)}\\n          <CatalogCard {catalog} />\\n        {/each}\\n      </div>\\n    {/if}\\n  </div>\\n</section>\\n\\n<style>\\n  .popular-catalogs {\\n    padding: var(--space-xl) var(--space-lg);\\n    background: var(--color-bg);\\n  }\\n\\n  .popular-catalogs__container {\\n    max-width: var(--container-max);\\n    margin: 0 auto;\\n  }\\n\\n  .popular-catalogs__title {\\n    font-family: var(--font-bold);\\n    font-size: clamp(1.5rem, 3vw, 2rem);\\n    margin-bottom: var(--space-lg);\\n    color: var(--color-text);\\n  }\\n\\n  .popular-catalogs__grid {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    gap: var(--space-lg);\\n  }\\n\\n  @media (min-width: 640px) {\\n    .popular-catalogs__grid {\\n      grid-template-columns: repeat(2, 1fr);\\n    }\\n  }\\n\\n  @media (min-width: 1024px) {\\n    .popular-catalogs__grid {\\n      grid-template-columns: repeat(3, 1fr);\\n    }\\n  }\\n\\n  .popular-catalogs__state {\\n    text-align: center;\\n    padding: var(--space-xl) 0;\\n    font-family: var(--font-light);\\n    color: var(--color-text);\\n    opacity: 0.7;\\n  }\\n\\n  /* Skeleton cards */\\n  .skeleton-card {\\n    background: var(--color-bg);\\n    border: 1px solid var(--color-secondary);\\n    border-radius: var(--radius-lg);\\n    overflow: hidden;\\n  }\\n\\n  .skeleton-card__image {\\n    aspect-ratio: 16 / 10;\\n    border-radius: 0;\\n  }\\n\\n  .skeleton-card__body {\\n    display: flex;\\n    flex-direction: column;\\n    gap: var(--space-xs);\\n    padding: var(--space-md);\\n  }\\n\\n  .skeleton-card__title {\\n    height: 1.2rem;\\n    width: 70%;\\n    border-radius: var(--radius-sm);\\n  }\\n\\n  .skeleton-card__text {\\n    height: 0.9rem;\\n    width: 100%;\\n    border-radius: var(--radius-sm);\\n  }\\n\\n  .skeleton-card__text--short {\\n    width: 50%;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAkEE,+BAAkB,CAChB,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,IAAI,UAAU,CAAC,CACxC,UAAU,CAAE,IAAI,UAAU,CAC5B,CAEA,0CAA6B,CAC3B,SAAS,CAAE,IAAI,eAAe,CAAC,CAC/B,MAAM,CAAE,CAAC,CAAC,IACZ,CAEA,sCAAyB,CACvB,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,MAAM,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACnC,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CACzB,CAEA,qCAAwB,CACtB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAC1B,GAAG,CAAE,IAAI,UAAU,CACrB,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,qCAAwB,CACtB,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACtC,CACF,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,qCAAwB,CACtB,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACtC,CACF,CAEA,sCAAyB,CACvB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,CAAC,CAC1B,WAAW,CAAE,IAAI,YAAY,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,OAAO,CAAE,GACX,CAGA,4BAAe,CACb,UAAU,CAAE,IAAI,UAAU,CAAC,CAC3B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,iBAAiB,CAAC,CACxC,aAAa,CAAE,IAAI,WAAW,CAAC,CAC/B,QAAQ,CAAE,MACZ,CAEA,mCAAsB,CACpB,YAAY,CAAE,EAAE,CAAC,CAAC,CAAC,EAAE,CACrB,aAAa,CAAE,CACjB,CAEA,kCAAqB,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,UAAU,CAAC,CACpB,OAAO,CAAE,IAAI,UAAU,CACzB,CAEA,mCAAsB,CACpB,MAAM,CAAE,MAAM,CACd,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,IAAI,WAAW,CAChC,CAEA,kCAAqB,CACnB,MAAM,CAAE,MAAM,CACd,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,WAAW,CAChC,CAEA,yCAA4B,CAC1B,KAAK,CAAE,GACT"}`
};
const PopularCatalogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Catálogos Populares" } = $$props;
  let { type = void 0 } = $$props;
  let { tags = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0) $$bindings.tags(tags);
  $$result.css.add(css$3);
  return `<section class="popular-catalogs svelte-ow4faj"><div class="popular-catalogs__container svelte-ow4faj"><h2 class="popular-catalogs__title svelte-ow4faj">${escape(title)}</h2> ${`<div class="popular-catalogs__grid svelte-ow4faj">${each(Array(6), (_, i) => {
    return `<div class="skeleton-card svelte-ow4faj" data-svelte-h="svelte-1qlyr2j"><div class="skeleton skeleton-card__image svelte-ow4faj"></div> <div class="skeleton-card__body svelte-ow4faj"><div class="skeleton skeleton-card__title svelte-ow4faj"></div> <div class="skeleton skeleton-card__text svelte-ow4faj"></div> <div class="skeleton skeleton-card__text skeleton-card__text--short svelte-ow4faj"></div></div> </div>`;
  })}</div>`}</div> </section>`;
});
const css$2 = {
  code: ".featured-merchants.svelte-17r3aek{padding:var(--space-xl) var(--space-lg);background:var(--color-bg)}.featured-merchants__container.svelte-17r3aek{max-width:var(--container-max);margin:0 auto}.featured-merchants__title.svelte-17r3aek{font-family:var(--font-bold);font-size:clamp(1.5rem, 3vw, 2rem);margin-bottom:var(--space-lg);color:var(--color-text)}.featured-merchants__grid.svelte-17r3aek{display:grid;grid-template-columns:1fr;gap:var(--space-lg)}@media(min-width: 640px){.featured-merchants__grid.svelte-17r3aek{grid-template-columns:repeat(2, 1fr)}}@media(min-width: 1024px){.featured-merchants__grid.svelte-17r3aek{grid-template-columns:repeat(3, 1fr)}}.featured-merchants__state.svelte-17r3aek{text-align:center;padding:var(--space-xl) 0;font-family:var(--font-light);color:var(--color-text);opacity:0.7}.skeleton-card.svelte-17r3aek{background:var(--color-bg);border:1px solid var(--color-secondary);border-radius:var(--radius-lg);overflow:hidden}.skeleton-card__cover.svelte-17r3aek{aspect-ratio:16 / 9;border-radius:0}.skeleton-card__body.svelte-17r3aek{display:flex;flex-direction:column;gap:var(--space-xs);padding:var(--space-lg) var(--space-md) var(--space-md)}.skeleton-card__title.svelte-17r3aek{height:1.2rem;width:60%;border-radius:var(--radius-sm)}.skeleton-card__text.svelte-17r3aek{height:0.9rem;width:90%;border-radius:var(--radius-sm)}.skeleton-card__tags.svelte-17r3aek{display:flex;gap:0.4rem;margin-top:var(--space-xs)}.skeleton-card__tag.svelte-17r3aek{height:1.4rem;width:3.5rem;border-radius:var(--radius-sm)}.skeleton-card__tag--short.svelte-17r3aek{width:2.5rem}",
  map: `{"version":3,"file":"FeaturedMerchants.svelte","sources":["FeaturedMerchants.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  import { fade } from 'svelte/transition';\\n  import { getFeaturedMerchants } from '$lib/services/merchant.service.js';\\n  import { scrollReveal } from '$lib/actions/scrollReveal.js';\\n  import { event } from '$lib/analytics/gtag.js';\\n  import MerchantCard from '../components/MerchantCard.svelte';\\n\\n  export let title = 'Comerciantes Destacados';\\n  export let limit = 6;\\n\\n  /** @type {any[]} */\\n  let merchants = [];\\n  let loading = true;\\n  /** @type {string|null} */\\n  let error = null;\\n\\n  onMount(async () => {\\n    try {\\n      merchants = await getFeaturedMerchants({ limit });\\n    } catch (err) {\\n      error = err instanceof Error ? err.message : 'Unknown error';\\n      event('section_view', { section: 'featured_merchants' });\\n    } finally {\\n      loading = false;\\n    }\\n  });\\n<\/script>\\n\\n<section class=\\"featured-merchants\\" use:scrollReveal>\\n  <div class=\\"featured-merchants__container\\">\\n    <h2 class=\\"featured-merchants__title\\">{title}</h2>\\n\\n    {#if loading}\\n      <div class=\\"featured-merchants__grid\\">\\n        {#each Array(6) as _, i}\\n          <div class=\\"skeleton-card\\">\\n            <div class=\\"skeleton skeleton-card__cover\\"></div>\\n            <div class=\\"skeleton-card__body\\">\\n              <div class=\\"skeleton skeleton-card__title\\"></div>\\n              <div class=\\"skeleton skeleton-card__text\\"></div>\\n              <div class=\\"skeleton-card__tags\\">\\n                <div class=\\"skeleton skeleton-card__tag\\"></div>\\n                <div class=\\"skeleton skeleton-card__tag skeleton-card__tag--short\\"></div>\\n              </div>\\n            </div>\\n          </div>\\n        {/each}\\n      </div>\\n    {:else if error}\\n      <div class=\\"featured-merchants__state\\" in:fade={{ duration: 300 }}>\\n        <p>No pudimos cargar los comerciantes destacados.</p>\\n      </div>\\n    {:else if merchants.length === 0}\\n      <div class=\\"featured-merchants__state\\" in:fade={{ duration: 300 }}>\\n        <p>No hay comerciantes destacados por el momento.</p>\\n      </div>\\n    {:else}\\n      <div class=\\"featured-merchants__grid\\" in:fade={{ duration: 400 }}>\\n        {#each merchants as merchant (merchant.id)}\\n          <MerchantCard {merchant} />\\n        {/each}\\n      </div>\\n    {/if}\\n  </div>\\n</section>\\n\\n<style>\\n  .featured-merchants {\\n    padding: var(--space-xl) var(--space-lg);\\n    background: var(--color-bg);\\n  }\\n\\n  .featured-merchants__container {\\n    max-width: var(--container-max);\\n    margin: 0 auto;\\n  }\\n\\n  .featured-merchants__title {\\n    font-family: var(--font-bold);\\n    font-size: clamp(1.5rem, 3vw, 2rem);\\n    margin-bottom: var(--space-lg);\\n    color: var(--color-text);\\n  }\\n\\n  .featured-merchants__grid {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    gap: var(--space-lg);\\n  }\\n\\n  @media (min-width: 640px) {\\n    .featured-merchants__grid {\\n      grid-template-columns: repeat(2, 1fr);\\n    }\\n  }\\n\\n  @media (min-width: 1024px) {\\n    .featured-merchants__grid {\\n      grid-template-columns: repeat(3, 1fr);\\n    }\\n  }\\n\\n  .featured-merchants__state {\\n    text-align: center;\\n    padding: var(--space-xl) 0;\\n    font-family: var(--font-light);\\n    color: var(--color-text);\\n    opacity: 0.7;\\n  }\\n\\n  /* Skeleton cards */\\n  .skeleton-card {\\n    background: var(--color-bg);\\n    border: 1px solid var(--color-secondary);\\n    border-radius: var(--radius-lg);\\n    overflow: hidden;\\n  }\\n\\n  .skeleton-card__cover {\\n    aspect-ratio: 16 / 9;\\n    border-radius: 0;\\n  }\\n\\n  .skeleton-card__body {\\n    display: flex;\\n    flex-direction: column;\\n    gap: var(--space-xs);\\n    padding: var(--space-lg) var(--space-md) var(--space-md);\\n  }\\n\\n  .skeleton-card__title {\\n    height: 1.2rem;\\n    width: 60%;\\n    border-radius: var(--radius-sm);\\n  }\\n\\n  .skeleton-card__text {\\n    height: 0.9rem;\\n    width: 90%;\\n    border-radius: var(--radius-sm);\\n  }\\n\\n  .skeleton-card__tags {\\n    display: flex;\\n    gap: 0.4rem;\\n    margin-top: var(--space-xs);\\n  }\\n\\n  .skeleton-card__tag {\\n    height: 1.4rem;\\n    width: 3.5rem;\\n    border-radius: var(--radius-sm);\\n  }\\n\\n  .skeleton-card__tag--short {\\n    width: 2.5rem;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoEE,kCAAoB,CAClB,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,IAAI,UAAU,CAAC,CACxC,UAAU,CAAE,IAAI,UAAU,CAC5B,CAEA,6CAA+B,CAC7B,SAAS,CAAE,IAAI,eAAe,CAAC,CAC/B,MAAM,CAAE,CAAC,CAAC,IACZ,CAEA,yCAA2B,CACzB,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,MAAM,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACnC,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CACzB,CAEA,wCAA0B,CACxB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAC1B,GAAG,CAAE,IAAI,UAAU,CACrB,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,wCAA0B,CACxB,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACtC,CACF,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,wCAA0B,CACxB,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACtC,CACF,CAEA,yCAA2B,CACzB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,CAAC,CAC1B,WAAW,CAAE,IAAI,YAAY,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,OAAO,CAAE,GACX,CAGA,6BAAe,CACb,UAAU,CAAE,IAAI,UAAU,CAAC,CAC3B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,iBAAiB,CAAC,CACxC,aAAa,CAAE,IAAI,WAAW,CAAC,CAC/B,QAAQ,CAAE,MACZ,CAEA,oCAAsB,CACpB,YAAY,CAAE,EAAE,CAAC,CAAC,CAAC,CAAC,CACpB,aAAa,CAAE,CACjB,CAEA,mCAAqB,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,UAAU,CAAC,CACpB,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,IAAI,UAAU,CAAC,CAAC,IAAI,UAAU,CACzD,CAEA,oCAAsB,CACpB,MAAM,CAAE,MAAM,CACd,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,IAAI,WAAW,CAChC,CAEA,mCAAqB,CACnB,MAAM,CAAE,MAAM,CACd,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,IAAI,WAAW,CAChC,CAEA,mCAAqB,CACnB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,MAAM,CACX,UAAU,CAAE,IAAI,UAAU,CAC5B,CAEA,kCAAoB,CAClB,MAAM,CAAE,MAAM,CACd,KAAK,CAAE,MAAM,CACb,aAAa,CAAE,IAAI,WAAW,CAChC,CAEA,yCAA2B,CACzB,KAAK,CAAE,MACT"}`
};
const FeaturedMerchants = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Comerciantes Destacados" } = $$props;
  let { limit = 6 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0) $$bindings.limit(limit);
  $$result.css.add(css$2);
  return `<section class="featured-merchants svelte-17r3aek"><div class="featured-merchants__container svelte-17r3aek"><h2 class="featured-merchants__title svelte-17r3aek">${escape(title)}</h2> ${`<div class="featured-merchants__grid svelte-17r3aek">${each(Array(6), (_, i) => {
    return `<div class="skeleton-card svelte-17r3aek" data-svelte-h="svelte-1vnzvt1"><div class="skeleton skeleton-card__cover svelte-17r3aek"></div> <div class="skeleton-card__body svelte-17r3aek"><div class="skeleton skeleton-card__title svelte-17r3aek"></div> <div class="skeleton skeleton-card__text svelte-17r3aek"></div> <div class="skeleton-card__tags svelte-17r3aek"><div class="skeleton skeleton-card__tag svelte-17r3aek"></div> <div class="skeleton skeleton-card__tag skeleton-card__tag--short svelte-17r3aek"></div> </div></div> </div>`;
  })}</div>`}</div> </section>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start) return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function") duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const css$1 = {
  code: ".platform-stats.svelte-17evzhx{padding:var(--space-xl) var(--space-lg);background:linear-gradient(135deg, var(--color-primary) 0%, #5a8aff 100%);color:#fff}.platform-stats__container.svelte-17evzhx{max-width:var(--container-max);margin:0 auto;text-align:center}.platform-stats__title.svelte-17evzhx{font-family:var(--font-bold);font-size:clamp(1.5rem, 3vw, 2rem);margin-bottom:var(--space-lg)}.platform-stats__grid.svelte-17evzhx{display:grid;grid-template-columns:repeat(2, 1fr);gap:var(--space-lg);margin-bottom:var(--space-lg)}@media(min-width: 768px){.platform-stats__grid.svelte-17evzhx{grid-template-columns:repeat(4, 1fr)}}.platform-stats__item.svelte-17evzhx{display:flex;flex-direction:column;align-items:center;gap:var(--space-xs)}.platform-stats__number.svelte-17evzhx{font-family:var(--font-bold);font-size:clamp(2rem, 4vw, 3rem);line-height:1}.platform-stats__label.svelte-17evzhx{font-family:var(--font-light);font-size:0.95rem;opacity:0.9}.platform-stats__growth.svelte-17evzhx{font-family:var(--font-body);font-size:1rem;opacity:0.95;display:flex;align-items:center;justify-content:center;gap:var(--space-xs)}.platform-stats__growth-badge.svelte-17evzhx{display:inline-block;background:rgba(255, 255, 255, 0.2);padding:0.25rem 0.6rem;border-radius:var(--radius-md);font-family:var(--font-bold)}",
  map: `{"version":3,"file":"PlatformStats.svelte","sources":["PlatformStats.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  import { tweened } from 'svelte/motion';\\n  import { cubicOut } from 'svelte/easing';\\n  import { getPublicStats } from '$lib/services/merchant.service.js';\\n  import { event } from '$lib/analytics/gtag.js';\\n\\n  export let title = 'Nuestra Plataforma en Números';\\n\\n  /** @type {any} */\\n  let stats = null;\\n  let loading = true;\\n  /** @type {string|null} */\\n  let error = null;\\n  let visible = false;\\n  /** @type {HTMLElement} */\\n  let sectionEl;\\n\\n  const merchantsCount = tweened(0, { duration: 1200, easing: cubicOut });\\n  const catalogsCount = tweened(0, { duration: 1200, easing: cubicOut });\\n  const itemsCount = tweened(0, { duration: 1200, easing: cubicOut });\\n  const ordersCount = tweened(0, { duration: 1200, easing: cubicOut });\\n\\n  onMount(() => {\\n    const observer = new IntersectionObserver(\\n      ([entry]) => {\\n        if (entry.isIntersecting && stats && !visible) {\\n          visible = true;\\n          merchantsCount.set(stats.totalMerchants);\\n          catalogsCount.set(stats.totalCatalogs);\\n          itemsCount.set(stats.totalItems);\\n          ordersCount.set(stats.totalOrders);\\n          observer.disconnect();\\n        }\\n      },\\n      { threshold: 0.3 }\\n    );\\n\\n    if (sectionEl) observer.observe(sectionEl);\\n\\n    (async () => {\\n      try {\\n        stats = await getPublicStats();\\n      } catch (err) {\\n        error = err instanceof Error ? err.message : 'Unknown error';\\n      } finally {\\n        loading = false;\\n      }\\n      event('section_view', { section: 'platform_stats' });\\n    })();\\n\\n    return () => observer.disconnect();\\n  });\\n\\n  /** @param {number} num */\\n  function formatNumber(num) {\\n    const rounded = Math.round(num);\\n    if (rounded >= 1000000) return (rounded / 1000000).toFixed(1) + 'M';\\n    if (rounded >= 1000) return (rounded / 1000).toFixed(1) + 'K';\\n    return String(rounded);\\n  }\\n<\/script>\\n\\n{#if !error && stats}\\n  <section class=\\"platform-stats\\" bind:this={sectionEl}>\\n    <div class=\\"platform-stats__container\\">\\n      <h2 class=\\"platform-stats__title\\">{title}</h2>\\n\\n      <div class=\\"platform-stats__grid\\">\\n        <div class=\\"platform-stats__item\\">\\n          <span class=\\"platform-stats__number\\">{formatNumber($merchantsCount)}</span>\\n          <span class=\\"platform-stats__label\\">Comerciantes</span>\\n        </div>\\n        <div class=\\"platform-stats__item\\">\\n          <span class=\\"platform-stats__number\\">{formatNumber($catalogsCount)}</span>\\n          <span class=\\"platform-stats__label\\">Catálogos</span>\\n        </div>\\n        <div class=\\"platform-stats__item\\">\\n          <span class=\\"platform-stats__number\\">{formatNumber($itemsCount)}</span>\\n          <span class=\\"platform-stats__label\\">Productos</span>\\n        </div>\\n        <div class=\\"platform-stats__item\\">\\n          <span class=\\"platform-stats__number\\">{formatNumber($ordersCount)}</span>\\n          <span class=\\"platform-stats__label\\">Pedidos</span>\\n        </div>\\n      </div>\\n\\n      {#if stats.merchantGrowth}\\n        <p class=\\"platform-stats__growth\\">\\n          <span class=\\"platform-stats__growth-badge\\">+{stats.merchantGrowth}%</span>\\n          nuevos comerciantes este mes\\n        </p>\\n      {/if}\\n    </div>\\n  </section>\\n{/if}\\n\\n<style>\\n  .platform-stats {\\n    padding: var(--space-xl) var(--space-lg);\\n    background: linear-gradient(135deg, var(--color-primary) 0%, #5a8aff 100%);\\n    color: #fff;\\n  }\\n\\n  .platform-stats__container {\\n    max-width: var(--container-max);\\n    margin: 0 auto;\\n    text-align: center;\\n  }\\n\\n  .platform-stats__title {\\n    font-family: var(--font-bold);\\n    font-size: clamp(1.5rem, 3vw, 2rem);\\n    margin-bottom: var(--space-lg);\\n  }\\n\\n  .platform-stats__grid {\\n    display: grid;\\n    grid-template-columns: repeat(2, 1fr);\\n    gap: var(--space-lg);\\n    margin-bottom: var(--space-lg);\\n  }\\n\\n  @media (min-width: 768px) {\\n    .platform-stats__grid {\\n      grid-template-columns: repeat(4, 1fr);\\n    }\\n  }\\n\\n  .platform-stats__item {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: var(--space-xs);\\n  }\\n\\n  .platform-stats__number {\\n    font-family: var(--font-bold);\\n    font-size: clamp(2rem, 4vw, 3rem);\\n    line-height: 1;\\n  }\\n\\n  .platform-stats__label {\\n    font-family: var(--font-light);\\n    font-size: 0.95rem;\\n    opacity: 0.9;\\n  }\\n\\n  .platform-stats__growth {\\n    font-family: var(--font-body);\\n    font-size: 1rem;\\n    opacity: 0.95;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    gap: var(--space-xs);\\n  }\\n\\n  .platform-stats__growth-badge {\\n    display: inline-block;\\n    background: rgba(255, 255, 255, 0.2);\\n    padding: 0.25rem 0.6rem;\\n    border-radius: var(--radius-md);\\n    font-family: var(--font-bold);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAkGE,8BAAgB,CACd,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,IAAI,UAAU,CAAC,CACxC,UAAU,CAAE,gBAAgB,MAAM,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,EAAE,CAAC,CAAC,OAAO,CAAC,IAAI,CAAC,CAC1E,KAAK,CAAE,IACT,CAEA,yCAA2B,CACzB,SAAS,CAAE,IAAI,eAAe,CAAC,CAC/B,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,MACd,CAEA,qCAAuB,CACrB,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,MAAM,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACnC,aAAa,CAAE,IAAI,UAAU,CAC/B,CAEA,oCAAsB,CACpB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,GAAG,CAAE,IAAI,UAAU,CAAC,CACpB,aAAa,CAAE,IAAI,UAAU,CAC/B,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,oCAAsB,CACpB,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACtC,CACF,CAEA,oCAAsB,CACpB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,UAAU,CACrB,CAEA,sCAAwB,CACtB,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACjC,WAAW,CAAE,CACf,CAEA,qCAAuB,CACrB,WAAW,CAAE,IAAI,YAAY,CAAC,CAC9B,SAAS,CAAE,OAAO,CAClB,OAAO,CAAE,GACX,CAEA,sCAAwB,CACtB,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,IAAI,UAAU,CACrB,CAEA,4CAA8B,CAC5B,OAAO,CAAE,YAAY,CACrB,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,OAAO,CAAE,OAAO,CAAC,MAAM,CACvB,aAAa,CAAE,IAAI,WAAW,CAAC,CAC/B,WAAW,CAAE,IAAI,WAAW,CAC9B"}`
};
const PlatformStats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_merchantsCount;
  let $$unsubscribe_catalogsCount;
  let $$unsubscribe_itemsCount;
  let $$unsubscribe_ordersCount;
  let { title = "Nuestra Plataforma en Números" } = $$props;
  const merchantsCount = tweened(0, { duration: 1200, easing: cubicOut });
  $$unsubscribe_merchantsCount = subscribe(merchantsCount, (value) => value);
  const catalogsCount = tweened(0, { duration: 1200, easing: cubicOut });
  $$unsubscribe_catalogsCount = subscribe(catalogsCount, (value) => value);
  const itemsCount = tweened(0, { duration: 1200, easing: cubicOut });
  $$unsubscribe_itemsCount = subscribe(itemsCount, (value) => value);
  const ordersCount = tweened(0, { duration: 1200, easing: cubicOut });
  $$unsubscribe_ordersCount = subscribe(ordersCount, (value) => value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  $$result.css.add(css$1);
  $$unsubscribe_merchantsCount();
  $$unsubscribe_catalogsCount();
  $$unsubscribe_itemsCount();
  $$unsubscribe_ordersCount();
  return `${``}`;
});
const css = {
  code: ".home.svelte-996u97{display:grid;grid-template-columns:1fr;min-height:100dvh}.home__content.svelte-996u97{position:relative;z-index:1;display:flex;flex-direction:column}.home__banner.svelte-996u97{display:none}@media(min-width: 1024px){.home.svelte-996u97{grid-template-columns:2fr 1fr}.home__content.svelte-996u97{grid-column:1}.home__banner.svelte-996u97{display:block;grid-column:2;height:100dvh;position:sticky;top:0}}",
  map: '{"version":3,"file":"Home.svelte","sources":["Home.svelte"],"sourcesContent":["<script>\\r\\n  import HeroSection from \\"./sections/HeroSection.svelte\\";\\r\\n  import BannerImage from \\"./sections/BannerImage.svelte\\";\\r\\n  import PopularCatalogs from \\"./sections/PopularCatalogs.svelte\\";\\r\\n  import OwnerCatalogs from \\"./sections/OwnerCatalogs.svelte\\";\\r\\n  import FeaturedMerchants from \\"./sections/FeaturedMerchants.svelte\\";\\r\\n  import PlatformStats from \\"./sections/PlatformStats.svelte\\";\\r\\n\\r\\n  function gotoRegister() {\\r\\n    window.location.href = \\"https://menucom-dashboard.netlify.app/#/registrate\\";\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"home\\">\\r\\n  <div class=\\"home__content\\">\\r\\n    <HeroSection onGetStarted={gotoRegister} />\\r\\n\\r\\n    <PlatformStats />\\r\\n\\r\\n    <FeaturedMerchants title=\\"Comerciantes Destacados\\" limit={6} />\\r\\n\\r\\n    <PopularCatalogs title=\\"Catálogos Populares\\" />\\r\\n\\r\\n    <!--\\r\\n      Para mostrar catálogos de un propietario específico,\\r\\n      descomentá la línea de abajo y reemplazá OWNER_ID con el UUID real.\\r\\n    -->\\r\\n    <!-- <OwnerCatalogs ownerId=\\"OWNER_ID\\" title=\\"Más de este creador\\" /> -->\\r\\n  </div>\\r\\n\\r\\n  <div class=\\"home__banner\\">\\r\\n    <BannerImage />\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .home {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr;\\r\\n    min-height: 100dvh;\\r\\n  }\\r\\n\\r\\n  .home__content {\\r\\n    position: relative;\\r\\n    z-index: 1;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .home__banner {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  /* Desktop: two-column layout */\\r\\n  @media (min-width: 1024px) {\\r\\n    .home {\\r\\n      grid-template-columns: 2fr 1fr;\\r\\n    }\\r\\n\\r\\n    .home__content {\\r\\n      grid-column: 1;\\r\\n    }\\r\\n\\r\\n    .home__banner {\\r\\n      display: block;\\r\\n      grid-column: 2;\\r\\n      height: 100dvh;\\r\\n      position: sticky;\\r\\n      top: 0;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoCE,mBAAM,CACJ,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAC1B,UAAU,CAAE,MACd,CAEA,4BAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAClB,CAEA,2BAAc,CACZ,OAAO,CAAE,IACX,CAGA,MAAO,YAAY,MAAM,CAAE,CACzB,mBAAM,CACJ,qBAAqB,CAAE,GAAG,CAAC,GAC7B,CAEA,4BAAe,CACb,WAAW,CAAE,CACf,CAEA,2BAAc,CACZ,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,CAAC,CACd,MAAM,CAAE,MAAM,CACd,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CACP,CACF"}'
};
function gotoRegister() {
  window.location.href = "https://menucom-dashboard.netlify.app/#/registrate";
}
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="home svelte-996u97"><div class="home__content svelte-996u97">${validate_component(HeroSection, "HeroSection").$$render($$result, { onGetStarted: gotoRegister }, {}, {})} ${validate_component(PlatformStats, "PlatformStats").$$render($$result, {}, {}, {})} ${validate_component(FeaturedMerchants, "FeaturedMerchants").$$render(
    $$result,
    {
      title: "Comerciantes Destacados",
      limit: 6
    },
    {},
    {}
  )} ${validate_component(PopularCatalogs, "PopularCatalogs").$$render($$result, { title: "Catálogos Populares" }, {}, {})}  </div> <div class="home__banner svelte-996u97">${validate_component(BannerImage, "BannerImage").$$render($$result, {}, {}, {})}</div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const siteUrl = "https://menucom.netlify.app";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Menucom",
        "url": siteUrl,
        "logo": `${siteUrl}/img/logos/logomenucom_1.png`
      },
      {
        "@type": "WebSite",
        "url": siteUrl,
        "name": "Menucom"
      },
      {
        "@type": "WebPage",
        "url": siteUrl,
        "name": "Menucom — Tu tienda online en minutos"
      }
    ]
  };
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Menucom — Tu tienda online en minutos",
      description: "Crea tu propio negocio online con Menucom. Gestioná stock, catálogos y pedidos fácilmente.",
      image: "/img/assets/screens.png",
      type: "website",
      jsonLd
    },
    {},
    {}
  )} ${validate_component(Home, "Home").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
