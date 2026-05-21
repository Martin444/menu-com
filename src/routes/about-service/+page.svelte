<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
    title="Sobre el Servicio — Menucom"
    description="Conocé cómo Menucom ayuda a restaurantes y comercios gastronómicos a gestionar menús y pedidos online."
    image="/img/logos/logomenucom_1.png"
    type="article"
/>

<Container>
<article>
  <h1>Sobre el Servicio</h1>
  <p>
    Menucom es una plataforma digital diseñada para facilitar la gestión de menús y pedidos en restaurantes y comercios gastronómicos. Nuestro objetivo es brindar una experiencia ágil, moderna y eficiente tanto para los comercios como para sus clientes.
  </p>
  <ul>
    <li>Gestión de menús digitalizados</li>
    <li>Pedidos en tiempo real</li>
    <li>Soporte técnico dedicado</li>
    <li>Actualizaciones constantes</li>
  </ul>
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

  ul {
    list-style: disc inside;
    color: var(--color-text);
    font-size: 1rem;
    padding-left: var(--space-md);
  }

  li {
    margin-bottom: var(--space-sm);
  }
</style>
