<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { getPublicCatalogsByOwner } from '$lib/services/catalog.service.js';
  import CatalogCard from '../../../features/home/components/CatalogCard.svelte';
  import Button from '../../../features/home/components/Button.svelte';

  const MERCHANT_STORE_URL = import.meta.env.VITE_MERCHANT_STORE_URL || 'https://menu-comerce.netlify.app';

  function goToStore() {
    window.location.href = `${MERCHANT_STORE_URL}/${ownerId}`;
  }

  /** @type {any[]} */
  let catalogs = [];
  let loading = true;
  /** @type {string|null} */
  let error = null;
  /** @type {string|undefined} */
  let ownerId;

  const unsubscribe = page.subscribe($p => {
    ownerId = $p.params.slug;
  });

  onMount(async () => {
    if (!ownerId) return;
    try {
      catalogs = await getPublicCatalogsByOwner(ownerId);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Error al cargar el comercio';
    } finally {
      loading = false;
    }
  });

  $: ownerName = catalogs[0]?.owner?.name || 'Comercio';
  $: ownerPhoto = catalogs[0]?.owner?.photoURL;
  $: totalCatalogs = catalogs.length;
  $: totalItems = catalogs.reduce((sum, c) => sum + (c.itemCount || 0), 0);
  $: allTags = [...new Set(catalogs.flatMap(c => c.tags || []))];
</script>

<svelte:head>
  <title>{ownerName} — Menucom</title>
</svelte:head>

<section class="merchant-page">
  <div class="merchant-page__container">
    {#if loading}
      <div class="merchant-page__state">
        <p>Cargando comercio...</p>
      </div>
    {:else if error}
      <div class="merchant-page__state merchant-page__state--error">
        <p>{error}</p>
      </div>
    {:else if catalogs.length > 0}
      <div class="merchant-page__header">
        <div class="merchant-page__cover">
          <img
            class="merchant-page__cover-img"
            src={catalogs[0].coverImageUrl || ownerPhoto || '/img/assets/renderStore.jpeg'}
            alt={ownerName}
          />
          {#if ownerPhoto}
            <img class="merchant-page__avatar" src={ownerPhoto} alt={ownerName} />
          {/if}
        </div>
        <div class="merchant-page__info">
          <h1 class="merchant-page__name">{ownerName}</h1>
          <div class="merchant-page__tags">
            {#each allTags as tag}
              <span class="merchant-page__tag">{tag}</span>
            {/each}
          </div>
          <div class="merchant-page__stats">
            <span class="merchant-page__stat">{totalCatalogs} catálogos</span>
            <span class="merchant-page__stat">{totalItems} productos</span>
          </div>
          <div class="merchant-page__actions">
            <Button label="Visitar tienda" variant="primary" onClick={goToStore} />
          </div>
        </div>
      </div>

      <div class="merchant-page__catalogs">
        <h2 class="merchant-page__catalogs-title">Catálogos</h2>
        <div class="merchant-page__grid">
          {#each catalogs as catalog (catalog.id)}
            <CatalogCard {catalog} />
          {/each}
        </div>
      </div>
    {:else}
      <div class="merchant-page__state">
        <p>Este comercio no tiene catálogos públicos aún.</p>
      </div>
    {/if}
  </div>
</section>

<style>
  .merchant-page {
    padding: var(--space-lg);
    background: var(--color-bg);
  }

  .merchant-page__container {
    max-width: var(--container-max);
    margin: 0 auto;
  }

  .merchant-page__header {
    margin-bottom: var(--space-xl);
  }

  .merchant-page__cover {
    position: relative;
    aspect-ratio: 21 / 9;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--color-secondary-alpha);
    margin-bottom: var(--space-lg);
  }

  .merchant-page__cover-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .merchant-page__avatar {
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

  .merchant-page__info {
    padding: var(--space-lg) 0 0;
  }

  .merchant-page__name {
    font-family: var(--font-bold);
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    margin-bottom: var(--space-sm);
    color: var(--color-text);
  }

  .merchant-page__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: var(--space-md);
  }

  .merchant-page__tag {
    font-family: var(--font-body);
    font-size: 0.8rem;
    background: var(--color-secondary-alpha);
    color: var(--color-primary);
    padding: 0.25rem 0.6rem;
    border-radius: var(--radius-sm);
  }

  .merchant-page__stats {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-lg);
  }

  .merchant-page__stat {
    font-family: var(--font-light);
    font-size: 0.9rem;
    color: var(--color-text);
    opacity: 0.7;
  }

  .merchant-page__catalogs-title {
    font-family: var(--font-bold);
    font-size: 1.5rem;
    margin-bottom: var(--space-lg);
    color: var(--color-text);
  }

  .merchant-page__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  @media (min-width: 640px) {
    .merchant-page__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .merchant-page__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .merchant-page__actions {
    margin-top: var(--space-lg);
  }

  .merchant-page__state {
    text-align: center;
    padding: var(--space-xl) 0;
    font-family: var(--font-light);
    color: var(--color-text);
    opacity: 0.7;
  }
</style>
