<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
    title="Contacta al desarrollador — Menucom"
    description="Contacto directo con el equipo de desarrollo de Menucom."
    image="/img/logos/logomenucom_1.png"
    type="article"
/>

<Container>
<article>
  <h1>Contacta al desarrollador</h1>
  <p>
    ¿Querés consultar algo o reportar un error? Escribíme a:
  </p>
  <ul>
    <li>Email: <a href="mailto:alejandrofarel62@gmail.com">alejandrofarel62@gmail.com</a></li>
  </ul>
  <p>
    También puedes enviarme sugerencias o ideas para mejorar la plataforma.
  </p>
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
    margin-bottom: var(--space-lg);
  }

  li {
    margin-bottom: var(--space-sm);
  }

  a {
    color: var(--color-primary);
    text-decoration: underline;
  }
</style>
