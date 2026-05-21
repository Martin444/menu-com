<script>
  import { onMount } from 'svelte';
  import { getFeaturedMerchants } from '$lib/services/merchant.service.js';
  import MerchantCard from '../components/MerchantCard.svelte';

  export let title = 'Comerciantes Destacados';
  export let limit = 6;

  /** @type {any[]} */
  let merchants = [];
  let loading = true;
  /** @type {string|null} */
  let error = null;

  onMount(async () => {
    try {
      merchants = await getFeaturedMerchants({ limit });
    } catch (err) {
      error = err instanceof Error ? err.message : 'Unknown error';
    } finally {
      loading = false;
    }
  });
</script>

<section class="featured-merchants">
  <div class="featured-merchants__container">
    <h2 class="featured-merchants__title">{title}</h2>

    {#if loading}
      <div class="featured-merchants__state">
        <p>Cargando comerciantes...</p>
      </div>
    {:else if error}
      <div class="featured-merchants__state featured-merchants__state--error">
        <p>No pudimos cargar los comerciantes destacados.</p>
      </div>
    {:else if merchants.length === 0}
      <div class="featured-merchants__state">
        <p>No hay comerciantes destacados por el momento.</p>
      </div>
    {:else}
      <div class="featured-merchants__grid">
        {#each merchants as merchant (merchant.id)}
          <MerchantCard {merchant} />
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .featured-merchants {
    padding: var(--space-xl) var(--space-lg);
    background: var(--color-bg);
  }

  .featured-merchants__container {
    max-width: var(--container-max);
    margin: 0 auto;
  }

  .featured-merchants__title {
    font-family: var(--font-bold);
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: var(--space-lg);
    color: var(--color-text);
  }

  .featured-merchants__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  @media (min-width: 640px) {
    .featured-merchants__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .featured-merchants__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .featured-merchants__state {
    text-align: center;
    padding: var(--space-xl) 0;
    font-family: var(--font-light);
    color: var(--color-text);
    opacity: 0.7;
  }

  .featured-merchants__state--error {
    color: #e74c3c;
    opacity: 1;
  }
</style>
