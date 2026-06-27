<script>
  import { onMount } from 'svelte';
  import { getMerchantCatalogs } from '$lib/services/merchant.service.js';
  import CatalogCard from '../components/CatalogCard.svelte';

  export let merchantSlug;
  export let title = 'Más de este creador';

  /** @type {any[]} */
  let catalogs = [];
  let loading = true;
  /** @type {string|null} */
  let error = null;

  onMount(async () => {
    if (!merchantSlug) {
      loading = false;
      return;
    }
    try {
      catalogs = await getMerchantCatalogs(merchantSlug);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Unknown error';
    } finally {
      loading = false;
    }
  });
</script>

{#if merchantSlug && !error && catalogs.length > 0}
  <section class="owner-catalogs">
    <div class="owner-catalogs__container">
      <h2 class="owner-catalogs__title">{title}</h2>

      {#if loading}
        <div class="owner-catalogs__state">
          <p>Cargando catálogos...</p>
        </div>
      {:else}
        <div class="owner-catalogs__grid">
          {#each catalogs as catalog (catalog.id)}
            <CatalogCard {catalog} />
          {/each}
        </div>
      {/if}
    </div>
  </section>
{/if}

<style>
  .owner-catalogs {
    padding: var(--space-xl) var(--space-lg);
    background: var(--color-secondary-alpha);
  }

  .owner-catalogs__container {
    max-width: var(--container-max);
    margin: 0 auto;
  }

  .owner-catalogs__title {
    font-family: var(--font-bold);
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: var(--space-lg);
    color: var(--color-text);
  }

  .owner-catalogs__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  @media (min-width: 640px) {
    .owner-catalogs__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .owner-catalogs__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .owner-catalogs__state {
    text-align: center;
    padding: var(--space-xl) 0;
    font-family: var(--font-light);
    color: var(--color-text);
    opacity: 0.7;
  }
</style>
