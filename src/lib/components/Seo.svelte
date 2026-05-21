<script>
  import { page } from '$app/stores';

  /** @type {string} */
  export let title = 'Menucom — Tu tienda online en minutos';
  /** @type {string} */
  export let description = 'Crea tu propio negocio online con Menucom. Gestioná stock, catálogos y pedidos fácilmente.';
  /** @type {string} */
  export let image = '/img/assets/screens.png';
  /** @type {'website' | 'article'} */
  export let type = 'website';
  /** @type {object|null} */
  export let jsonLd = null;
  /** @type {boolean} */
  export let noindex = false;

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://menucom.netlify.app';

  $: canonical = `${siteUrl}${$page.url.pathname}`;
  $: ogImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {#if noindex}
    <meta name="robots" content="noindex, nofollow" />
  {:else}
    <meta name="robots" content="index, follow" />
  {/if}

  <link rel="canonical" href={canonical} />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content={type} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />

  {#if jsonLd}
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`}
  {/if}
</svelte:head>
