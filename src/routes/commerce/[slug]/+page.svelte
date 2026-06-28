<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { getMerchantCatalogs } from '$lib/services/merchant.service.js';
  import CatalogCard from '../../../features/home/components/CatalogCard.svelte';
  import Button from '../../../features/home/components/Button.svelte';

  const MERCHANT_STORE_URL = import.meta.env.VITE_MERCHANT_STORE_URL || 'https://menu-comerce.netlify.app';

  function goToStore() {
    window.location.href = `${MERCHANT_STORE_URL}/${commerceSlug}`;
  }

  /** @type {any[]} */
  let catalogs = [];
  let loading = true;
  /** @type {string|null} */
  let error = null;
  /** @type {string|undefined} */
  let commerceSlug;

  const unsubscribe = page.subscribe($p => {
    commerceSlug = $p.params.slug;
  });

  onMount(async () => {
    if (!commerceSlug) return;
    try {
      catalogs = await getMerchantCatalogs(commerceSlug);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Error al cargar el comercio';
    } finally {
      loading = false;
    }
  });

  $: commerceName = catalogs[0]?.owner?.name || 'Comercio';
  $: commercePhoto = catalogs[0]?.owner?.photoURL;
  $: totalCatalogs = catalogs.length;
  $: totalItems = catalogs.reduce((sum, c) => sum + (c.itemCount || 0), 0);
  $: allTags = [...new Set(catalogs.flatMap(c => c.tags || []))];
</script>

<svelte:head>
  <title>{commerceName} — Menucom</title>
</svelte:head>

<section class="commerce-page">
  <div class="commerce-page__container">
    {#if loading}
      <div class="commerce-page__state">
        <p>Cargando comercio...</p>
      </div>
    {:else if error}
      <div class="commerce-page__state commerce-page__state--error">
        <p>{error}</p>
      </div>
    {:else if catalogs.length > 0}
      <div class="commerce-page__header">
        <div class="commerce-page__cover">
          <img
            class="commerce-page__cover-img"
            src={catalogs[0].coverImageUrl || commercePhoto || '/img/assets/renderStore.jpeg'}
            alt={commerceName}
          />
          {#if commercePhoto}
            <img class="commerce-page__avatar" src={commercePhoto} alt={commerceName} />
          {/if}
        </div>
        <div class="commerce-page__info">
          <h1 class="commerce-page__name">{commerceName}</h1>
          <div class="commerce-page__tags">
            {#each allTags as tag}
              <span class="commerce-page__tag">{tag}</span>
            {/each}
          </div>
          <div class="commerce-page__stats">
            <span class="commerce-page__stat">{totalCatalogs} {totalCatalogs === 1 ? 'catálogo' : 'catálogos'}</span>
            <span class="commerce-page__stat">{totalItems} {totalItems === 1 ? 'producto' : 'productos'}</span>
          </div>
          <div class="commerce-page__actions">
            <Button label="Visitar tienda" variant="primary" onClick={goToStore} />
          </div>
        </div>
      </div>

      <div class="commerce-page__catalogs">
        <h2 class="commerce-page__catalogs-title">Catálogos</h2>
        <div class="commerce-page__grid">
          {#each catalogs as catalog (catalog.id)}
            <CatalogCard {catalog} />
          {/each}
        </div>
      </div>
    {:else}
      <div class="commerce-page__state">
        <p>Este comercio no tiene catálogos públicos aún.</p>
      </div>
    {/if}
  </div>
</section>

<style>
  .commerce-page {
    padding: var(--space-lg);
    background: var(--color-bg);
  }

  .commerce-page__container {
    max-width: var(--container-max);
    margin: 0 auto;
  }

  .commerce-page__header {
    margin-bottom: var(--space-xl);
  }

  .commerce-page__cover {
    position: relative;
    aspect-ratio: 21 / 9;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--color-secondary-alpha);
    margin-bottom: var(--space-lg);
  }

  .commerce-page__cover-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .commerce-page__avatar {
    position: absolute;
    bottom: -32px;
    left: var(--space-lg);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--color-bg);
    background: var(--color-bg);
  }

  .commerce-page__info {
    padding: var(--space-lg) 0 0;
  }

  .commerce-page__name {
    font-family: var(--font-bold);
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    margin-bottom: var(--space-sm);
    color: var(--color-text);
  }

  .commerce-page__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: var(--space-md);
  }

  .commerce-page__tag {
    font-family: var(--font-body);
    font-size: 0.8rem;
    background: var(--color-secondary-alpha);
    color: var(--color-primary);
    padding: 0.25rem 0.6rem;
    border-radius: var(--radius-sm);
  }

  .commerce-page__stats {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-lg);
  }

  .commerce-page__stat {
    font-family: var(--font-light);
    font-size: 0.9rem;
    color: var(--color-text);
    opacity: 0.7;
  }

  .commerce-page__catalogs-title {
    font-family: var(--font-bold);
    font-size: 1.5rem;
    margin-bottom: var(--space-lg);
    color: var(--color-text);
  }

  .commerce-page__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  @media (min-width: 640px) {
    .commerce-page__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .commerce-page__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .commerce-page__actions {
    margin-top: var(--space-lg);
  }

  .commerce-page__state {
    text-align: center;
    padding: var(--space-xl) 0;
    font-family: var(--font-light);
    color: var(--color-text);
    opacity: 0.7;
  }
</style>
