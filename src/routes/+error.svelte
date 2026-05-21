<script>
  import { page } from "$app/stores";
</script>

<div class="error-page">
  <div class="error-page__content">
    <h1 class="error-page__code">{$page.status}</h1>
    <p class="error-page__message">
      {#if $page.status === 404}
        Página no encontrada.
      {:else}
        {$page.error?.message || "Algo salió mal."}
      {/if}
    </p>
    <a href="/" class="error-page__link">Volver al inicio</a>
  </div>
</div>

<style>
  .error-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100dvh;
    padding: var(--space-lg);
    text-align: center;
    font-family: var(--font-body);
  }

  .error-page__content {
    max-width: 500px;
  }

  .error-page__code {
    font-family: var(--font-bold);
    font-size: clamp(4rem, 10vw, 7rem);
    color: var(--color-primary);
    line-height: 1;
    margin-bottom: var(--space-md);
  }

  .error-page__message {
    font-size: 1.25rem;
    color: var(--color-text);
    margin-bottom: var(--space-lg);
  }

  .error-page__link {
    display: inline-block;
    padding: var(--space-sm) var(--space-lg);
    background-color: var(--color-primary);
    color: var(--color-text-inverse);
    font-family: var(--font-bold);
    border-radius: var(--radius-md);
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .error-page__link:hover {
    opacity: 0.9;
  }
</style>
