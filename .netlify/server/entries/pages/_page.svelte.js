import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/Button.js";
/* empty css                                                     */
import { S as Seo } from "../../chunks/Seo.js";
const css$4 = {
  code: ".hero.svelte-1o6lgvb.svelte-1o6lgvb{display:grid;grid-template-columns:1fr;gap:var(--space-lg);align-items:center;max-width:var(--container-max);margin:0 auto;padding:var(--space-xl) var(--space-lg);min-height:calc(100dvh - 72px)}.hero__content.svelte-1o6lgvb.svelte-1o6lgvb{display:flex;flex-direction:column;justify-content:center}.hero__title.svelte-1o6lgvb.svelte-1o6lgvb{font-family:var(--font-bold);font-weight:700;font-size:clamp(2.5rem, 5vw, 4.25rem);line-height:1.1;color:var(--color-text);margin-bottom:var(--space-lg)}.hero__description.svelte-1o6lgvb.svelte-1o6lgvb{font-family:var(--font-light);font-weight:300;font-size:clamp(1rem, 1.5vw, 1.25rem);line-height:1.7;color:var(--color-text);margin-bottom:var(--space-lg);max-width:50ch}.hero__cta.svelte-1o6lgvb.svelte-1o6lgvb{display:flex}.hero__image.svelte-1o6lgvb.svelte-1o6lgvb{display:none}.hero__image.svelte-1o6lgvb img.svelte-1o6lgvb{width:100%;height:auto;border-radius:var(--radius-md)}@media(min-width: 768px){.hero.svelte-1o6lgvb.svelte-1o6lgvb{grid-template-columns:1fr 1fr;gap:var(--space-xl)}.hero__image.svelte-1o6lgvb.svelte-1o6lgvb{display:flex;align-items:center;justify-content:center}}",
  map: '{"version":3,"file":"HeroSection.svelte","sources":["HeroSection.svelte"],"sourcesContent":["<script>\\n  import Button from \\"../components/Button.svelte\\";\\n\\n  export let onGetStarted = () => {};\\n<\/script>\\n\\n<section class=\\"hero\\">\\n  <div class=\\"hero__content\\">\\n    <h1 class=\\"hero__title\\">Creá tu tienda online en minutos</h1>\\n    <p class=\\"hero__description\\">\\n      Creá tu propio negocio fácilmente con nuestra plataforma web.\\n      Gestioná tu inventario, compartí catálogos con clientes y mucho más.\\n    </p>\\n    <div class=\\"hero__cta\\">\\n      <Button variant=\\"primary\\" label=\\"Empezar ahora\\" onClick={onGetStarted} />\\n    </div>\\n  </div>\\n\\n  <div class=\\"hero__image\\">\\n    <img src=\\"/img/assets/screens.png\\" alt=\\"Dashboard preview of Menucom platform showing catalog and inventory management\\" />\\n  </div>\\n</section>\\n\\n<style>\\n  .hero {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    gap: var(--space-lg);\\n    align-items: center;\\n    max-width: var(--container-max);\\n    margin: 0 auto;\\n    padding: var(--space-xl) var(--space-lg);\\n    min-height: calc(100dvh - 72px);\\n  }\\n\\n  .hero__content {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n  }\\n\\n  .hero__title {\\n    font-family: var(--font-bold);\\n    font-weight: 700;\\n    font-size: clamp(2.5rem, 5vw, 4.25rem);\\n    line-height: 1.1;\\n    color: var(--color-text);\\n    margin-bottom: var(--space-lg);\\n  }\\n\\n  .hero__description {\\n    font-family: var(--font-light);\\n    font-weight: 300;\\n    font-size: clamp(1rem, 1.5vw, 1.25rem);\\n    line-height: 1.7;\\n    color: var(--color-text);\\n    margin-bottom: var(--space-lg);\\n    max-width: 50ch;\\n  }\\n\\n  .hero__cta {\\n    display: flex;\\n  }\\n\\n  .hero__image {\\n    display: none;\\n  }\\n\\n  .hero__image img {\\n    width: 100%;\\n    height: auto;\\n    border-radius: var(--radius-md);\\n  }\\n\\n  /* Tablet and up */\\n  @media (min-width: 768px) {\\n    .hero {\\n      grid-template-columns: 1fr 1fr;\\n      gap: var(--space-xl);\\n    }\\n\\n    .hero__image {\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwBE,mCAAM,CACJ,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAC1B,GAAG,CAAE,IAAI,UAAU,CAAC,CACpB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,eAAe,CAAC,CAC/B,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,IAAI,UAAU,CAAC,CACxC,UAAU,CAAE,KAAK,MAAM,CAAC,CAAC,CAAC,IAAI,CAChC,CAEA,4CAAe,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MACnB,CAEA,0CAAa,CACX,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,MAAM,CAAC,CAAC,GAAG,CAAC,CAAC,OAAO,CAAC,CACtC,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,aAAa,CAAE,IAAI,UAAU,CAC/B,CAEA,gDAAmB,CACjB,WAAW,CAAE,IAAI,YAAY,CAAC,CAC9B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,IAAI,CAAC,CAAC,KAAK,CAAC,CAAC,OAAO,CAAC,CACtC,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,SAAS,CAAE,IACb,CAEA,wCAAW,CACT,OAAO,CAAE,IACX,CAEA,0CAAa,CACX,OAAO,CAAE,IACX,CAEA,2BAAY,CAAC,kBAAI,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,WAAW,CAChC,CAGA,MAAO,YAAY,KAAK,CAAE,CACxB,mCAAM,CACJ,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,GAAG,CAAE,IAAI,UAAU,CACrB,CAEA,0CAAa,CACX,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACnB,CACF"}'
};
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onGetStarted = () => {
  } } = $$props;
  if ($$props.onGetStarted === void 0 && $$bindings.onGetStarted && onGetStarted !== void 0) $$bindings.onGetStarted(onGetStarted);
  $$result.css.add(css$4);
  return `<section class="hero svelte-1o6lgvb"><div class="hero__content svelte-1o6lgvb"><h1 class="hero__title svelte-1o6lgvb" data-svelte-h="svelte-6hkcv3">Creá tu tienda online en minutos</h1> <p class="hero__description svelte-1o6lgvb" data-svelte-h="svelte-a5vvk2">Creá tu propio negocio fácilmente con nuestra plataforma web.
      Gestioná tu inventario, compartí catálogos con clientes y mucho más.</p> <div class="hero__cta svelte-1o6lgvb">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "primary",
      label: "Empezar ahora",
      onClick: onGetStarted
    },
    {},
    {}
  )}</div></div> <div class="hero__image svelte-1o6lgvb" data-svelte-h="svelte-6f3qt6"><img src="/img/assets/screens.png" alt="Dashboard preview of Menucom platform showing catalog and inventory management" class="svelte-1o6lgvb"></div> </section>`;
});
const css$3 = {
  code: ".banner.svelte-1cltf{position:relative;width:100%;height:100%;overflow:hidden;background-color:black}.banner__img.svelte-1cltf{width:100%;height:100%;object-fit:cover;object-position:center}@media(max-width: 767px){.banner.svelte-1cltf{position:absolute;inset:0;z-index:0;opacity:0.15}}",
  map: '{"version":3,"file":"BannerImage.svelte","sources":["BannerImage.svelte"],"sourcesContent":["<section class=\\"banner\\" aria-hidden=\\"true\\">\\n  <img\\n    src=\\"/img/assets/renderStore.jpeg\\"\\n    alt=\\"\\"\\n    class=\\"banner__img\\"\\n  />\\n</section>\\n\\n<style>\\n  .banner {\\n    position: relative;\\n    width: 100%;\\n    height: 100%;\\n    overflow: hidden;\\n    background-color: black;\\n  }\\n\\n  .banner__img {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n    object-position: center;\\n  }\\n\\n  /* Mobile: banner becomes a subtle background layer */\\n  @media (max-width: 767px) {\\n    .banner {\\n      position: absolute;\\n      inset: 0;\\n      z-index: 0;\\n      opacity: 0.15;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AASE,oBAAQ,CACN,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MAAM,CAChB,gBAAgB,CAAE,KACpB,CAEA,yBAAa,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,eAAe,CAAE,MACnB,CAGA,MAAO,YAAY,KAAK,CAAE,CACxB,oBAAQ,CACN,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IACX,CACF"}'
};
const BannerImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="banner svelte-1cltf" aria-hidden="true" data-svelte-h="svelte-14wvxqh"><img src="/img/assets/renderStore.jpeg" alt="" class="banner__img svelte-1cltf"> </section>`;
});
const css$2 = {
  code: ".popular-catalogs.svelte-5plhuk{padding:var(--space-xl) var(--space-lg);background:var(--color-bg)}.popular-catalogs__container.svelte-5plhuk{max-width:var(--container-max);margin:0 auto}.popular-catalogs__title.svelte-5plhuk{font-family:var(--font-bold);font-size:clamp(1.5rem, 3vw, 2rem);margin-bottom:var(--space-lg);color:var(--color-text)}.popular-catalogs__grid.svelte-5plhuk{display:grid;grid-template-columns:1fr;gap:var(--space-lg)}@media(min-width: 640px){.popular-catalogs__grid.svelte-5plhuk{grid-template-columns:repeat(2, 1fr)}}@media(min-width: 1024px){.popular-catalogs__grid.svelte-5plhuk{grid-template-columns:repeat(3, 1fr)}}.popular-catalogs__state.svelte-5plhuk{text-align:center;padding:var(--space-xl) 0;font-family:var(--font-light);color:var(--color-text);opacity:0.7}.popular-catalogs__state--error.svelte-5plhuk{color:#e74c3c;opacity:1}",
  map: `{"version":3,"file":"PopularCatalogs.svelte","sources":["PopularCatalogs.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  import { searchPublicCatalogs } from '$lib/services/catalog.service.js';\\n  import CatalogCard from '../components/CatalogCard.svelte';\\n\\n  export let title = 'Catálogos Populares';\\n  export let type = undefined;\\n  export let tags = undefined;\\n\\n  /** @type {any[]} */\\n  let catalogs = [];\\n  let loading = true;\\n  /** @type {string|null} */\\n  let error = null;\\n\\n  onMount(async () => {\\n    try {\\n      catalogs = await searchPublicCatalogs({ type, tags });\\n    } catch (err) {\\n      error = err instanceof Error ? err.message : 'Unknown error';\\n    } finally {\\n      loading = false;\\n    }\\n  });\\n<\/script>\\n\\n<section class=\\"popular-catalogs\\">\\n  <div class=\\"popular-catalogs__container\\">\\n    <h2 class=\\"popular-catalogs__title\\">{title}</h2>\\n\\n    {#if loading}\\n      <div class=\\"popular-catalogs__state\\">\\n        <p>Cargando catálogos...</p>\\n      </div>\\n    {:else if error}\\n      <div class=\\"popular-catalogs__state popular-catalogs__state--error\\">\\n        <p>No pudimos cargar los catálogos.</p>\\n      </div>\\n    {:else if catalogs.length === 0}\\n      <div class=\\"popular-catalogs__state\\">\\n        <p>No hay catálogos disponibles por el momento.</p>\\n      </div>\\n    {:else}\\n      <div class=\\"popular-catalogs__grid\\">\\n        {#each catalogs as catalog (catalog.id)}\\n          <CatalogCard {catalog} />\\n        {/each}\\n      </div>\\n    {/if}\\n  </div>\\n</section>\\n\\n<style>\\n  .popular-catalogs {\\n    padding: var(--space-xl) var(--space-lg);\\n    background: var(--color-bg);\\n  }\\n\\n  .popular-catalogs__container {\\n    max-width: var(--container-max);\\n    margin: 0 auto;\\n  }\\n\\n  .popular-catalogs__title {\\n    font-family: var(--font-bold);\\n    font-size: clamp(1.5rem, 3vw, 2rem);\\n    margin-bottom: var(--space-lg);\\n    color: var(--color-text);\\n  }\\n\\n  .popular-catalogs__grid {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    gap: var(--space-lg);\\n  }\\n\\n  @media (min-width: 640px) {\\n    .popular-catalogs__grid {\\n      grid-template-columns: repeat(2, 1fr);\\n    }\\n  }\\n\\n  @media (min-width: 1024px) {\\n    .popular-catalogs__grid {\\n      grid-template-columns: repeat(3, 1fr);\\n    }\\n  }\\n\\n  .popular-catalogs__state {\\n    text-align: center;\\n    padding: var(--space-xl) 0;\\n    font-family: var(--font-light);\\n    color: var(--color-text);\\n    opacity: 0.7;\\n  }\\n\\n  .popular-catalogs__state--error {\\n    color: #e74c3c;\\n    opacity: 1;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAqDE,+BAAkB,CAChB,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,IAAI,UAAU,CAAC,CACxC,UAAU,CAAE,IAAI,UAAU,CAC5B,CAEA,0CAA6B,CAC3B,SAAS,CAAE,IAAI,eAAe,CAAC,CAC/B,MAAM,CAAE,CAAC,CAAC,IACZ,CAEA,sCAAyB,CACvB,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,MAAM,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACnC,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CACzB,CAEA,qCAAwB,CACtB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAC1B,GAAG,CAAE,IAAI,UAAU,CACrB,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,qCAAwB,CACtB,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACtC,CACF,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,qCAAwB,CACtB,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACtC,CACF,CAEA,sCAAyB,CACvB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,CAAC,CAC1B,WAAW,CAAE,IAAI,YAAY,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,OAAO,CAAE,GACX,CAEA,6CAAgC,CAC9B,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,CACX"}`
};
const PopularCatalogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Catálogos Populares" } = $$props;
  let { type = void 0 } = $$props;
  let { tags = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0) $$bindings.tags(tags);
  $$result.css.add(css$2);
  return `<section class="popular-catalogs svelte-5plhuk"><div class="popular-catalogs__container svelte-5plhuk"><h2 class="popular-catalogs__title svelte-5plhuk">${escape(title)}</h2> ${`<div class="popular-catalogs__state svelte-5plhuk" data-svelte-h="svelte-xvr07r"><p>Cargando catálogos...</p></div>`}</div> </section>`;
});
const css$1 = {
  code: ".featured-merchants.svelte-1yizr5k{padding:var(--space-xl) var(--space-lg);background:var(--color-bg)}.featured-merchants__container.svelte-1yizr5k{max-width:var(--container-max);margin:0 auto}.featured-merchants__title.svelte-1yizr5k{font-family:var(--font-bold);font-size:clamp(1.5rem, 3vw, 2rem);margin-bottom:var(--space-lg);color:var(--color-text)}.featured-merchants__grid.svelte-1yizr5k{display:grid;grid-template-columns:1fr;gap:var(--space-lg)}@media(min-width: 640px){.featured-merchants__grid.svelte-1yizr5k{grid-template-columns:repeat(2, 1fr)}}@media(min-width: 1024px){.featured-merchants__grid.svelte-1yizr5k{grid-template-columns:repeat(3, 1fr)}}.featured-merchants__state.svelte-1yizr5k{text-align:center;padding:var(--space-xl) 0;font-family:var(--font-light);color:var(--color-text);opacity:0.7}.featured-merchants__state--error.svelte-1yizr5k{color:#e74c3c;opacity:1}",
  map: `{"version":3,"file":"FeaturedMerchants.svelte","sources":["FeaturedMerchants.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  import { getFeaturedMerchants } from '$lib/services/merchant.service.js';\\n  import MerchantCard from '../components/MerchantCard.svelte';\\n\\n  export let title = 'Comerciantes Destacados';\\n  export let limit = 6;\\n\\n  /** @type {any[]} */\\n  let merchants = [];\\n  let loading = true;\\n  /** @type {string|null} */\\n  let error = null;\\n\\n  onMount(async () => {\\n    try {\\n      merchants = await getFeaturedMerchants({ limit });\\n    } catch (err) {\\n      error = err instanceof Error ? err.message : 'Unknown error';\\n    } finally {\\n      loading = false;\\n    }\\n  });\\n<\/script>\\n\\n<section class=\\"featured-merchants\\">\\n  <div class=\\"featured-merchants__container\\">\\n    <h2 class=\\"featured-merchants__title\\">{title}</h2>\\n\\n    {#if loading}\\n      <div class=\\"featured-merchants__state\\">\\n        <p>Cargando comerciantes...</p>\\n      </div>\\n    {:else if error}\\n      <div class=\\"featured-merchants__state featured-merchants__state--error\\">\\n        <p>No pudimos cargar los comerciantes destacados.</p>\\n      </div>\\n    {:else if merchants.length === 0}\\n      <div class=\\"featured-merchants__state\\">\\n        <p>No hay comerciantes destacados por el momento.</p>\\n      </div>\\n    {:else}\\n      <div class=\\"featured-merchants__grid\\">\\n        {#each merchants as merchant (merchant.id)}\\n          <MerchantCard {merchant} />\\n        {/each}\\n      </div>\\n    {/if}\\n  </div>\\n</section>\\n\\n<style>\\n  .featured-merchants {\\n    padding: var(--space-xl) var(--space-lg);\\n    background: var(--color-bg);\\n  }\\n\\n  .featured-merchants__container {\\n    max-width: var(--container-max);\\n    margin: 0 auto;\\n  }\\n\\n  .featured-merchants__title {\\n    font-family: var(--font-bold);\\n    font-size: clamp(1.5rem, 3vw, 2rem);\\n    margin-bottom: var(--space-lg);\\n    color: var(--color-text);\\n  }\\n\\n  .featured-merchants__grid {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    gap: var(--space-lg);\\n  }\\n\\n  @media (min-width: 640px) {\\n    .featured-merchants__grid {\\n      grid-template-columns: repeat(2, 1fr);\\n    }\\n  }\\n\\n  @media (min-width: 1024px) {\\n    .featured-merchants__grid {\\n      grid-template-columns: repeat(3, 1fr);\\n    }\\n  }\\n\\n  .featured-merchants__state {\\n    text-align: center;\\n    padding: var(--space-xl) 0;\\n    font-family: var(--font-light);\\n    color: var(--color-text);\\n    opacity: 0.7;\\n  }\\n\\n  .featured-merchants__state--error {\\n    color: #e74c3c;\\n    opacity: 1;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoDE,kCAAoB,CAClB,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,IAAI,UAAU,CAAC,CACxC,UAAU,CAAE,IAAI,UAAU,CAC5B,CAEA,6CAA+B,CAC7B,SAAS,CAAE,IAAI,eAAe,CAAC,CAC/B,MAAM,CAAE,CAAC,CAAC,IACZ,CAEA,yCAA2B,CACzB,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,MAAM,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CACnC,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CACzB,CAEA,wCAA0B,CACxB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAC1B,GAAG,CAAE,IAAI,UAAU,CACrB,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,wCAA0B,CACxB,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACtC,CACF,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,wCAA0B,CACxB,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACtC,CACF,CAEA,yCAA2B,CACzB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,CAAC,CAC1B,WAAW,CAAE,IAAI,YAAY,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,OAAO,CAAE,GACX,CAEA,gDAAkC,CAChC,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,CACX"}`
};
const FeaturedMerchants = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Comerciantes Destacados" } = $$props;
  let { limit = 6 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0) $$bindings.limit(limit);
  $$result.css.add(css$1);
  return `<section class="featured-merchants svelte-1yizr5k"><div class="featured-merchants__container svelte-1yizr5k"><h2 class="featured-merchants__title svelte-1yizr5k">${escape(title)}</h2> ${`<div class="featured-merchants__state svelte-1yizr5k" data-svelte-h="svelte-1vz8y4l"><p>Cargando comerciantes...</p></div>`}</div> </section>`;
});
const css = {
  code: ".home.svelte-996u97{display:grid;grid-template-columns:1fr;min-height:100dvh}.home__content.svelte-996u97{position:relative;z-index:1;display:flex;flex-direction:column}.home__banner.svelte-996u97{display:none}@media(min-width: 1024px){.home.svelte-996u97{grid-template-columns:2fr 1fr}.home__content.svelte-996u97{grid-column:1}.home__banner.svelte-996u97{display:block;grid-column:2;height:100dvh;position:sticky;top:0}}",
  map: '{"version":3,"file":"Home.svelte","sources":["Home.svelte"],"sourcesContent":["<script>\\r\\n  import HeroSection from \\"./sections/HeroSection.svelte\\";\\r\\n  import BannerImage from \\"./sections/BannerImage.svelte\\";\\r\\n  import PopularCatalogs from \\"./sections/PopularCatalogs.svelte\\";\\r\\n  import OwnerCatalogs from \\"./sections/OwnerCatalogs.svelte\\";\\r\\n  import FeaturedMerchants from \\"./sections/FeaturedMerchants.svelte\\";\\r\\n  // import PlatformStats from \\"./sections/PlatformStats.svelte\\";\\r\\n\\r\\n  function gotoRegister() {\\r\\n    window.location.href = \\"https://menucom-dashboard.netlify.app/#/registrate\\";\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"home\\">\\r\\n  <div class=\\"home__content\\">\\r\\n    <HeroSection onGetStarted={gotoRegister} />\\r\\n\\r\\n    <!-- <PlatformStats /> -->\\r\\n\\r\\n    <FeaturedMerchants title=\\"Comerciantes Destacados\\" limit={6} />\\r\\n\\r\\n    <PopularCatalogs title=\\"Catálogos Populares\\" />\\r\\n\\r\\n    <!--\\r\\n      Para mostrar catálogos de un propietario específico,\\r\\n      descomentá la línea de abajo y reemplazá OWNER_ID con el UUID real.\\r\\n    -->\\r\\n    <!-- <OwnerCatalogs ownerId=\\"OWNER_ID\\" title=\\"Más de este creador\\" /> -->\\r\\n  </div>\\r\\n\\r\\n  <div class=\\"home__banner\\">\\r\\n    <BannerImage />\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .home {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr;\\r\\n    min-height: 100dvh;\\r\\n  }\\r\\n\\r\\n  .home__content {\\r\\n    position: relative;\\r\\n    z-index: 1;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .home__banner {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  /* Desktop: two-column layout */\\r\\n  @media (min-width: 1024px) {\\r\\n    .home {\\r\\n      grid-template-columns: 2fr 1fr;\\r\\n    }\\r\\n\\r\\n    .home__content {\\r\\n      grid-column: 1;\\r\\n    }\\r\\n\\r\\n    .home__banner {\\r\\n      display: block;\\r\\n      grid-column: 2;\\r\\n      height: 100dvh;\\r\\n      position: sticky;\\r\\n      top: 0;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoCE,mBAAM,CACJ,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAC1B,UAAU,CAAE,MACd,CAEA,4BAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAClB,CAEA,2BAAc,CACZ,OAAO,CAAE,IACX,CAGA,MAAO,YAAY,MAAM,CAAE,CACzB,mBAAM,CACJ,qBAAqB,CAAE,GAAG,CAAC,GAC7B,CAEA,4BAAe,CACb,WAAW,CAAE,CACf,CAEA,2BAAc,CACZ,OAAO,CAAE,KAAK,CACd,WAAW,CAAE,CAAC,CACd,MAAM,CAAE,MAAM,CACd,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CACP,CACF"}'
};
function gotoRegister() {
  window.location.href = "https://menucom-dashboard.netlify.app/#/registrate";
}
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="home svelte-996u97"><div class="home__content svelte-996u97">${validate_component(HeroSection, "HeroSection").$$render($$result, { onGetStarted: gotoRegister }, {}, {})}  ${validate_component(FeaturedMerchants, "FeaturedMerchants").$$render(
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
