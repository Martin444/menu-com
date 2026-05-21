<script>
  import Button from "../components/Button.svelte";

  export let onGetStarted = () => {};
</script>

<section class="hero">
  <div class="hero__content">
    <h1 class="hero__title">Creá tu tienda online en minutos</h1>
    <p class="hero__description">
      Creá tu propio negocio fácilmente con nuestra plataforma web.
      Gestioná tu inventario, compartí catálogos con clientes y mucho más.
    </p>
    <div class="hero__cta">
      <Button variant="primary" label="Empezar ahora" onClick={onGetStarted} />
    </div>
  </div>

  <div class="hero__image">
    <img src="/img/assets/screens.png" alt="Dashboard preview of Menucom platform showing catalog and inventory management" />
  </div>
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
