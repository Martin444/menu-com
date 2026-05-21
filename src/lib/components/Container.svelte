<script>
  /** @type {'sm' | 'md' | 'lg'} */
  export let size = 'md';
</script>

<div class="container" class:container--sm={size === 'sm'} class:container--md={size === 'md'} class:container--lg={size === 'lg'}>
  <slot />
</div>

<style>
  .container {
    margin: 0 auto;
    padding: var(--space-xl) var(--space-lg);
    width: 100%;
  }

  .container--sm {
    max-width: 640px;
  }

  .container--md {
    max-width: 720px;
  }

  .container--lg {
    max-width: 960px;
  }
</style>
