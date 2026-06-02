<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { searchPublicCatalogs } from '$lib/services/catalog.service.js';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import { event } from '$lib/analytics/gtag.js';
  import CatalogCard from '../components/CatalogCard.svelte';

  export let title = 'Catálogos Populares';
  export let type = undefined;
  export let tags = undefined;

  /** @type {any[]} */
  let catalogs = [];
  let loading = true;
  /** @type {string|null} */
  let error = null;

  onMount(async () => {
    try {
      catalogs = await searchPublicCatalogs({ type, tags });
    } catch (err) {
      error = err instanceof Error ? err.message : 'Unknown error';
      event('section_view', { section: 'popular_catalogs' });
    } finally {
      loading = false;
    }
  });
</script>

<section class="popular-catalogs" use:scrollReveal>
  <div class="popular-catalogs__container">
    <h2 class="popular-catalogs__title">{title}</h2>

    {#if loading}
      <div class="popular-catalogs__grid">
        {#each Array(6) as _, i}
          <div class="skeleton-card">
            <div class="skeleton skeleton-card__image"></div>
            <div class="skeleton-card__body">
              <div class="skeleton skeleton-card__title"></div>
              <div class="skeleton skeleton-card__text"></div>
              <div class="skeleton skeleton-card__text skeleton-card__text--short"></div>
            </div>
          </div>
        {/each}
      </div>
    {:else if error}
      <div class="popular-catalogs__state" in:fade={{ duration: 300 }}>
        <p>No pudimos cargar los catálogos.</p>
      </div>
    {:else if catalogs.length === 0}
      <div class="popular-catalogs__state" in:fade={{ duration: 300 }}>
        <p>No hay catálogos disponibles por el momento.</p>
      </div>
    {:else}
      <div class="popular-catalogs__grid" in:fade={{ duration: 400 }}>
        {#each catalogs as catalog (catalog.id)}
          <CatalogCard {catalog} />
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .popular-catalogs {
    padding: var(--space-xl) var(--space-lg);
    background: var(--color-bg);
  }

  .popular-catalogs__container {
    max-width: var(--container-max);
    margin: 0 auto;
  }

  .popular-catalogs__title {
    font-family: var(--font-bold);
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: var(--space-lg);
    color: var(--color-text);
  }

  .popular-catalogs__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  @media (min-width: 640px) {
    .popular-catalogs__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .popular-catalogs__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .popular-catalogs__state {
    text-align: center;
    padding: var(--space-xl) 0;
    font-family: var(--font-light);
    color: var(--color-text);
    opacity: 0.7;
  }

  /* Skeleton cards */
  .skeleton-card {
    background: var(--color-bg);
    border: 1px solid var(--color-secondary);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .skeleton-card__image {
    aspect-ratio: 16 / 10;
    border-radius: 0;
  }

  .skeleton-card__body {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-md);
  }

  .skeleton-card__title {
    height: 1.2rem;
    width: 70%;
    border-radius: var(--radius-sm);
  }

  .skeleton-card__text {
    height: 0.9rem;
    width: 100%;
    border-radius: var(--radius-sm);
  }

  .skeleton-card__text--short {
    width: 50%;
  }
</style>
