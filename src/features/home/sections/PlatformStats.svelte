<script>
  import { onMount } from 'svelte';
  import { getPublicStats } from '$lib/services/merchant.service.js';

  export let title = 'Nuestra Plataforma en Números';

  /** @type {any} */
  let stats = null;
  let loading = true;
  /** @type {string|null} */
  let error = null;

  onMount(async () => {
    try {
      stats = await getPublicStats();
    } catch (err) {
      error = err instanceof Error ? err.message : 'Unknown error';
    } finally {
      loading = false;
    }
  });

  /** @param {number} num */
  function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return String(num);
  }
</script>

{#if !error && stats}
  <section class="platform-stats">
    <div class="platform-stats__container">
      <h2 class="platform-stats__title">{title}</h2>

      <div class="platform-stats__grid">
        <div class="platform-stats__item">
          <span class="platform-stats__number">{formatNumber(stats.totalMerchants)}</span>
          <span class="platform-stats__label">Comerciantes</span>
        </div>
        <div class="platform-stats__item">
          <span class="platform-stats__number">{formatNumber(stats.totalCatalogs)}</span>
          <span class="platform-stats__label">Catálogos</span>
        </div>
        <div class="platform-stats__item">
          <span class="platform-stats__number">{formatNumber(stats.totalItems)}</span>
          <span class="platform-stats__label">Productos</span>
        </div>
        <div class="platform-stats__item">
          <span class="platform-stats__number">{formatNumber(stats.totalOrders)}</span>
          <span class="platform-stats__label">Pedidos</span>
        </div>
      </div>

      {#if stats.merchantGrowth}
        <p class="platform-stats__growth">
          <span class="platform-stats__growth-badge">+{stats.merchantGrowth}%</span>
          nuevos comerciantes este mes
        </p>
      {/if}
    </div>
  </section>
{/if}

<style>
  .platform-stats {
    padding: var(--space-xl) var(--space-lg);
    background: linear-gradient(135deg, var(--color-primary) 0%, #5a8aff 100%);
    color: #fff;
  }

  .platform-stats__container {
    max-width: var(--container-max);
    margin: 0 auto;
    text-align: center;
  }

  .platform-stats__title {
    font-family: var(--font-bold);
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: var(--space-lg);
  }

  .platform-stats__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
    margin-bottom: var(--space-lg);
  }

  @media (min-width: 768px) {
    .platform-stats__grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .platform-stats__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xs);
  }

  .platform-stats__number {
    font-family: var(--font-bold);
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1;
  }

  .platform-stats__label {
    font-family: var(--font-light);
    font-size: 0.95rem;
    opacity: 0.9;
  }

  .platform-stats__growth {
    font-family: var(--font-body);
    font-size: 1rem;
    opacity: 0.95;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);
  }

  .platform-stats__growth-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.25rem 0.6rem;
    border-radius: var(--radius-md);
    font-family: var(--font-bold);
  }
</style>
