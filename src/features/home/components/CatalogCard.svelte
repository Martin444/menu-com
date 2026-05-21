<script>
  export let catalog;

  const coverUrl = catalog.coverImageUrl || '/img/assets/renderStore.jpeg';
  const ownerName = catalog.owner?.name || 'Unknown';
  const ownerPhoto = catalog.owner?.photoURL;
  const itemCount = catalog.itemCount;
  const ownerId = catalog.owner?.id;
</script>

<a class="catalog-card" href={ownerId ? `/merchant/${ownerId}` : '#'}>
  <div class="catalog-card__image-wrapper">
    <img
      class="catalog-card__image"
      src={coverUrl}
      alt={`Portada de ${catalog.name}`}
      loading="lazy"
    />
    <span class="catalog-card__badge">{catalog.catalogType}</span>
  </div>

  <div class="catalog-card__body">
    <h3 class="catalog-card__title">{catalog.name}</h3>
    <p class="catalog-card__description">{catalog.description || ''}</p>

    <div class="catalog-card__footer">
      <div class="catalog-card__owner">
        {#if ownerPhoto}
          <img class="catalog-card__owner-photo" src={ownerPhoto} alt={ownerName} />
        {/if}
        <span class="catalog-card__owner-name">{ownerName}</span>
      </div>
      {#if itemCount != null}
        <span class="catalog-card__meta">{itemCount} productos</span>
      {/if}
    </div>
  </div>
</a>

<style>
  .catalog-card {
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
  }

  .catalog-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(61, 114, 253, 0.12);
  }

  .catalog-card__image-wrapper {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: var(--color-secondary-alpha);
  }

  .catalog-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .catalog-card:hover .catalog-card__image {
    transform: scale(1.04);
  }

  .catalog-card__badge {
    position: absolute;
    top: var(--space-sm);
    left: var(--space-sm);
    background: var(--color-primary);
    color: #fff;
    font-family: var(--font-bold);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
  }

  .catalog-card__body {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-md);
    flex: 1;
  }

  .catalog-card__title {
    font-family: var(--font-bold);
    font-size: 1.1rem;
    line-height: 1.3;
    color: var(--color-text);
  }

  .catalog-card__description {
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

  .catalog-card__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--space-sm);
    padding-top: var(--space-sm);
    border-top: 1px solid var(--color-secondary-alpha);
  }

  .catalog-card__owner {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }

  .catalog-card__owner-photo {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
  }

  .catalog-card__owner-name {
    font-family: var(--font-body);
    font-size: 0.85rem;
    opacity: 0.8;
  }

  .catalog-card__meta {
    font-family: var(--font-light);
    font-size: 0.8rem;
    opacity: 0.6;
  }
</style>
