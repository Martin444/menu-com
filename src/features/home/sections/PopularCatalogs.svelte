<script>
  import { onMount } from 'svelte';
  import { searchPublicCatalogs } from '$lib/services/catalog.service.js';
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
    } finally {
      loading = false;
    }
  });
</script>

<section class="popular-catalogs">
  <div class="popular-catalogs__container">
    <h2 class="popular-catalogs__title">{title}</h2>

    {#if loading}
      <div class="popular-catalogs__state">
        <p>Cargando catálogos...</p>
      </div>
    {:else if error}
      <div class="popular-catalogs__state popular-catalogs__state--error">
        <p>No pudimos cargar los catálogos.</p>
      </div>
    {:else if catalogs.length === 0}
      <div class="popular-catalogs__state">
        <p>No hay catálogos disponibles por el momento.</p>
      </div>
    {:else}
      <div class="popular-catalogs__grid">
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

  .popular-catalogs__state--error {
    color: #e74c3c;
    opacity: 1;
  }
</style>
