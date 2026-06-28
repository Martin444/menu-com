<script>
  import { event } from '$lib/analytics/firebase.js';
  export let merchant;

  const coverUrl = merchant.coverImageUrl || merchant.photoURL || '/img/assets/renderStore.jpeg';
  const avatarUrl = merchant.photoURL || '';
  const businessName = merchant.businessName || 'Negocio';
  const description = merchant.description || '';
  const commerceCount = merchant.commerceCount || 0;
  const tags = merchant.tags || [];
  const merchantSlug = merchant.slug || merchant.id;

  function formatMemberSince(date) {
    if (!date) return '';
    const d = new Date(date);
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  const memberSince = formatMemberSince(merchant.createdAt);
</script>

<a class="merchant-card" href={`/commerce/${merchantSlug}`} on:click={() => event('merchant_click', { merchant_name: businessName, merchant_slug: merchantSlug })}>
  <div class="merchant-card__cover-wrapper">
    <img
      class="merchant-card__cover"
      src={coverUrl}
      alt={`Portada de ${businessName}`}
      loading="lazy"
    />
    {#if avatarUrl}
      <img class="merchant-card__avatar" src={avatarUrl} alt={businessName} />
    {/if}
  </div>

  <div class="merchant-card__body">
    <h3 class="merchant-card__title">{businessName}</h3>
    <p class="merchant-card__description">{description}</p>

    {#if tags.length > 0}
      <div class="merchant-card__tags">
        {#each tags.slice(0, 3) as tag}
          <span class="merchant-card__tag">{tag}</span>
        {/each}
      </div>
    {/if}

    <div class="merchant-card__stats">
      {#if memberSince}
        <span class="merchant-card__stat">Desde {memberSince}</span>
      {/if}
      <span class="merchant-card__stat">{commerceCount} {commerceCount === 1 ? 'comercio' : 'comercios'}</span>
    </div>
  </div>
</a>

<style>
  .merchant-card {
    display: flex;
    flex-direction: column;
    background: var(--color-bg);
    border: 1px solid var(--color-secondary);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    text-decoration: none;
    color: inherit;
    height: 100%;
    cursor: pointer;
  }

  .merchant-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(61, 114, 253, 0.12);
  }

  .merchant-card__cover-wrapper {
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: var(--color-secondary-alpha);
  }

  .merchant-card__cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .merchant-card:hover .merchant-card__cover {
    transform: scale(1.04);
  }

  .merchant-card__avatar {
    position: absolute;
    bottom: -20px;
    left: var(--space-md);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--color-bg);
    background: var(--color-bg);
  }

  .merchant-card__body {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-lg) var(--space-md) var(--space-md);
    flex: 1;
  }

  .merchant-card__title {
    font-family: var(--font-bold);
    font-size: 1.15rem;
    line-height: 1.3;
    color: var(--color-text);
  }

  .merchant-card__description {
    font-family: var(--font-light);
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--color-text);
    opacity: 0.75;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
  }

  .merchant-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: var(--space-xs);
  }

  .merchant-card__tag {
    font-family: var(--font-body);
    font-size: 0.75rem;
    background: var(--color-secondary-alpha);
    color: var(--color-primary);
    padding: 0.2rem 0.5rem;
    border-radius: var(--radius-sm);
  }

  .merchant-card__stats {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-top: var(--space-sm);
    padding-top: var(--space-sm);
    border-top: 1px solid var(--color-secondary-alpha);
  }

  .merchant-card__stat {
    font-family: var(--font-light);
    font-size: 0.8rem;
    opacity: 0.7;
  }
</style>
