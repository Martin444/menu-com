<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { getFeaturedMerchants } from '$lib/services/merchant.service.js';
  import { scrollReveal } from '$lib/actions/scrollReveal.js';
  import { event } from '$lib/analytics/gtag.js';
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
      event('section_view', { section: 'featured_merchants' });
    } finally {
      loading = false;
    }
  });
</script>

<section class="featured-merchants" use:scrollReveal>
  <div class="featured-merchants__container">
    <h2 class="featured-merchants__title">{title}</h2>

    {#if loading}
      <div class="featured-merchants__grid">
        {#each Array(6) as _, i}
          <div class="skeleton-card">
            <div class="skeleton skeleton-card__cover"></div>
            <div class="skeleton-card__body">
              <div class="skeleton skeleton-card__title"></div>
              <div class="skeleton skeleton-card__text"></div>
              <div class="skeleton-card__tags">
                <div class="skeleton skeleton-card__tag"></div>
                <div class="skeleton skeleton-card__tag skeleton-card__tag--short"></div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else if error}
      <div class="featured-merchants__state" in:fade={{ duration: 300 }}>
        <p>No pudimos cargar los comerciantes destacados.</p>
      </div>
    {:else if merchants.length === 0}
      <div class="featured-merchants__state" in:fade={{ duration: 300 }}>
        <p>No hay comerciantes destacados por el momento.</p>
      </div>
    {:else}
      <div class="featured-merchants__grid" in:fade={{ duration: 400 }}>
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

  /* Skeleton cards */
  .skeleton-card {
    background: var(--color-bg);
    border: 1px solid var(--color-secondary);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .skeleton-card__cover {
    aspect-ratio: 16 / 9;
    border-radius: 0;
  }

  .skeleton-card__body {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-lg) var(--space-md) var(--space-md);
  }

  .skeleton-card__title {
    height: 1.2rem;
    width: 60%;
    border-radius: var(--radius-sm);
  }

  .skeleton-card__text {
    height: 0.9rem;
    width: 90%;
    border-radius: var(--radius-sm);
  }

  .skeleton-card__tags {
    display: flex;
    gap: 0.4rem;
    margin-top: var(--space-xs);
  }

  .skeleton-card__tag {
    height: 1.4rem;
    width: 3.5rem;
    border-radius: var(--radius-sm);
  }

  .skeleton-card__tag--short {
    width: 2.5rem;
  }
</style>
