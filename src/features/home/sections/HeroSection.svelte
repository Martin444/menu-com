<script>
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { event } from '$lib/analytics/firebase.js';
  import Button from "../components/Button.svelte";

  export let onGetStarted = () => {};

  function handleGetStarted() {
    event('cta_click', { type: 'hero_cta' });
    onGetStarted();
  }
</script>

<section class="hero">
  <div class="hero__content">
    {#key true}
      <h1
        class="hero__title"
        in:fly={{ y: 30, duration: 700, delay: 100, easing: quintOut }}
      >
        Creá tu tienda online en minutos
      </h1>
    {/key}

    {#key true}
      <p
        class="hero__description"
        in:fly={{ y: 30, duration: 700, delay: 250, easing: quintOut }}
      >
        Creá tu propio negocio fácilmente con nuestra plataforma web.
        Gestioná tu inventario, compartí catálogos con clientes y mucho más.
      </p>
    {/key}

    {#key true}
      <div
        class="hero__cta"
        in:fly={{ y: 30, duration: 700, delay: 400, easing: quintOut }}
      >
        <Button variant="primary" label="Empezar ahora" onClick={handleGetStarted} />
      </div>
    {/key}
  </div>

  {#key true}
    <div
      class="hero__image"
      in:fly={{ x: 40, opacity: 0, duration: 800, delay: 500, easing: quintOut }}
    >
      <img src="/img/assets/screens.png" alt="Dashboard preview of Menucom platform showing catalog and inventory management" />
    </div>
  {/key}
</section>

<style>
  .hero {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
    align-items: center;
    max-width: var(--container-max);
    margin: 0 auto;
    padding: var(--space-xl) var(--space-lg);
    min-height: calc(100dvh - 72px);
  }

  .hero__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero__title {
    font-family: var(--font-bold);
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 4.25rem);
    line-height: 1.1;
    color: var(--color-text);
    margin-bottom: var(--space-lg);
  }

  .hero__description {
    font-family: var(--font-light);
    font-weight: 300;
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    line-height: 1.7;
    color: var(--color-text);
    margin-bottom: var(--space-lg);
    max-width: 50ch;
  }

  .hero__cta {
    display: flex;
  }

  .hero__image {
    display: none;
  }

  .hero__image img {
    width: 100%;
    height: auto;
    border-radius: var(--radius-md);
  }

  /* Tablet and up */
  @media (min-width: 768px) {
    .hero {
      grid-template-columns: 1fr 1fr;
      gap: var(--space-xl);
    }

    .hero__image {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
