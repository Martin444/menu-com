import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Container } from "../../../chunks/Container.js";
import { S as Seo } from "../../../chunks/Seo.js";
const css = {
  code: "h1.svelte-1dkzrh2{font-family:var(--font-bold);font-size:2.2rem;margin-bottom:var(--space-md);color:var(--color-text)}p.svelte-1dkzrh2{font-size:1.1rem;margin-bottom:var(--space-lg);color:var(--color-text);line-height:1.6}ol.svelte-1dkzrh2{color:var(--color-text);font-size:1rem;padding-left:var(--space-md)}li.svelte-1dkzrh2{margin-bottom:var(--space-sm)}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n  import Container from \\"$lib/components/Container.svelte\\";\\r\\n  import Seo from \\"$lib/components/Seo.svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<Seo\\r\\n    title=\\"Términos y Condiciones — Menucom\\"\\r\\n    description=\\"Términos y condiciones de uso de la plataforma Menucom.\\"\\r\\n    image=\\"/img/logos/logomenucom_1.png\\"\\r\\n    type=\\"article\\"\\r\\n/>\\r\\n\\r\\n<Container>\\r\\n<article>\\r\\n  <h1>Términos y Condiciones</h1>\\r\\n  <p>\\r\\n    Al utilizar Menucom, aceptas los siguientes términos y condiciones. La plataforma se reserva el derecho de modificar estos términos en cualquier momento.\\r\\n  </p>\\r\\n  <ol>\\r\\n    <li>El uso de la plataforma es responsabilidad del usuario.</li>\\r\\n    <li>Menucom no se responsabiliza por la información ingresada por los comercios.</li>\\r\\n    <li>Los datos personales serán tratados conforme a la legislación vigente.</li>\\r\\n    <li>El servicio puede ser suspendido o modificado sin previo aviso.</li>\\r\\n  </ol>\\r\\n</article>\\r\\n</Container>\\r\\n\\r\\n<style>\\r\\n  h1 {\\r\\n    font-family: var(--font-bold);\\r\\n    font-size: 2.2rem;\\r\\n    margin-bottom: var(--space-md);\\r\\n    color: var(--color-text);\\r\\n  }\\r\\n\\r\\n  p {\\r\\n    font-size: 1.1rem;\\r\\n    margin-bottom: var(--space-lg);\\r\\n    color: var(--color-text);\\r\\n    line-height: 1.6;\\r\\n  }\\r\\n\\r\\n  ol {\\r\\n    color: var(--color-text);\\r\\n    font-size: 1rem;\\r\\n    padding-left: var(--space-md);\\r\\n  }\\r\\n\\r\\n  li {\\r\\n    margin-bottom: var(--space-sm);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4BE,iBAAG,CACD,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CACzB,CAEA,gBAAE,CACA,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,WAAW,CAAE,GACf,CAEA,iBAAG,CACD,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,SAAS,CAAE,IAAI,CACf,YAAY,CAAE,IAAI,UAAU,CAC9B,CAEA,iBAAG,CACD,aAAa,CAAE,IAAI,UAAU,CAC/B"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Términos y Condiciones — Menucom",
      description: "Términos y condiciones de uso de la plataforma Menucom.",
      image: "/img/logos/logomenucom_1.png",
      type: "article"
    },
    {},
    {}
  )} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<article data-svelte-h="svelte-4b7qmq"><h1 class="svelte-1dkzrh2">Términos y Condiciones</h1> <p class="svelte-1dkzrh2">Al utilizar Menucom, aceptas los siguientes términos y condiciones. La plataforma se reserva el derecho de modificar estos términos en cualquier momento.</p> <ol class="svelte-1dkzrh2"><li class="svelte-1dkzrh2">El uso de la plataforma es responsabilidad del usuario.</li> <li class="svelte-1dkzrh2">Menucom no se responsabiliza por la información ingresada por los comercios.</li> <li class="svelte-1dkzrh2">Los datos personales serán tratados conforme a la legislación vigente.</li> <li class="svelte-1dkzrh2">El servicio puede ser suspendido o modificado sin previo aviso.</li></ol></article>`;
    }
  })}`;
});
export {
  Page as default
};
