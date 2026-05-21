<script>
  /**
   * @typedef {'primary' | 'secondary' | 'ghost'} Variant
   */

  /** @type {string} */
  export let label = '';

  /** @type {Variant} */
  export let variant = 'primary';

  /** @type {"button" | "submit" | "reset"} */
  export let type = 'button';

  /** @type {boolean} */
  export let disabled = false;

  /** @type {() => void} */
  export let onClick = () => {};
</script>

<button
  class="button"
  class:button--primary={variant === 'primary'}
  class:button--secondary={variant === 'secondary'}
  class:button--ghost={variant === 'ghost'}
  {type}
  {disabled}
  on:click={onClick}
>
  {label}
</button>

<style>
  .button {
    font-family: var(--font-bold);
    border-radius: var(--radius-md);
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s ease, transform 0.1s ease;
    cursor: pointer;
  }

  .button:hover:not(:disabled) {
    opacity: 0.9;
  }

  .button:active:not(:disabled) {
    transform: scale(0.98);
  }

  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Primary */
  .button--primary {
    font-size: 20px;
    color: var(--color-text-inverse);
    height: 48px;
    width: 195px;
    background-color: var(--color-primary);
  }

  /* Secondary */
  .button--secondary {
    font-size: 16px;
    color: var(--color-primary);
    height: 41px;
    width: 152px;
    background-color: var(--color-secondary);
  }

  /* Ghost */
  .button--ghost {
    font-size: 15px;
    color: var(--color-primary);
    background: none;
    padding: var(--space-xs) var(--space-sm);
    height: auto;
    width: auto;
  }

  .button--ghost:hover:not(:disabled) {
    background-color: var(--color-secondary-alpha);
    opacity: 1;
  }
</style>
