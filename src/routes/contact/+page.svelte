<script lang="ts">
  import Button from "../../features/home/components/Button.svelte";
  import Container from "$lib/components/Container.svelte";
  import Seo from "$lib/components/Seo.svelte";

  function gotoRegister() {
    window.location.href = "https://menucom-dashboard.netlify.app/#/registrate";
  }
</script>

<Seo
    title="Contacto — Menucom"
    description="Contactá al equipo de Menucom para soporte o consultas."
    image="/img/logos/logomenucom_1.png"
    type="article"
/>

<Container>
<article>
  <h1>Contacto</h1>
  <p>
    ¿Tenés dudas sobre Menucom? Estamos para ayudarte.
  </p>
  <ul class="contact__list">
    <li>
      <strong>Email de soporte:</strong>
      <a href="mailto:alejandrofarel62@gmail.com">alejandrofarel62@gmail.com</a>
    </li>
    <li>
      <strong>Consultas técnicas:</strong>
      <a href="/dev-contact">Contacta al desarrollador</a>
    </li>
  </ul>
  <div class="contact__cta">
    <Button variant="primary" label="Crear cuenta gratis" onClick={gotoRegister} />
  </div>
</article>
</Container>

<style>
  h1 {
    font-family: var(--font-bold);
    font-size: 2.2rem;
    margin-bottom: var(--space-md);
    color: var(--color-text);
  }

  p {
    font-size: 1.1rem;
    margin-bottom: var(--space-lg);
    color: var(--color-text);
    line-height: 1.6;
  }

  .contact__list {
    list-style: none;
    padding: 0;
    margin-bottom: var(--space-xl);
  }

  .contact__list li {
    margin-bottom: var(--space-md);
    font-size: 1rem;
    line-height: 1.5;
  }

  .contact__list a {
    color: var(--color-primary);
    text-decoration: underline;
  }

  .contact__cta {
    display: flex;
    justify-content: flex-start;
  }
</style>
