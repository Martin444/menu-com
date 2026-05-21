<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
    title="Términos y Condiciones — Menucom"
    description="Términos y condiciones de uso de la plataforma Menucom."
    image="/img/logos/logomenucom_1.png"
    type="article"
/>

<Container>
<article>
  <h1>Términos y Condiciones</h1>
  <p>
    Al utilizar Menucom, aceptas los siguientes términos y condiciones. La plataforma se reserva el derecho de modificar estos términos en cualquier momento.
  </p>
  <ol>
    <li>El uso de la plataforma es responsabilidad del usuario.</li>
    <li>Menucom no se responsabiliza por la información ingresada por los comercios.</li>
    <li>Los datos personales serán tratados conforme a la legislación vigente.</li>
    <li>El servicio puede ser suspendido o modificado sin previo aviso.</li>
  </ol>
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

  ol {
    color: var(--color-text);
    font-size: 1rem;
    padding-left: var(--space-md);
  }

  li {
    margin-bottom: var(--space-sm);
  }
</style>
