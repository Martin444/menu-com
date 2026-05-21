import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Container } from "../../../chunks/Container.js";
import { S as Seo } from "../../../chunks/Seo.js";
const css = {
  code: "h1.svelte-12qz3zu{font-family:var(--font-bold);font-size:2.2rem;margin-bottom:var(--space-md);color:var(--color-text)}p.svelte-12qz3zu{font-size:1.1rem;margin-bottom:var(--space-lg);color:var(--color-text);line-height:1.6}ul.svelte-12qz3zu{list-style:disc inside;color:var(--color-text);font-size:1rem;padding-left:var(--space-md)}li.svelte-12qz3zu{margin-bottom:var(--space-sm)}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n  import Container from \\"$lib/components/Container.svelte\\";\\r\\n  import Seo from \\"$lib/components/Seo.svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<Seo\\r\\n    title=\\"Sobre el Servicio — Menucom\\"\\r\\n    description=\\"Conocé cómo Menucom ayuda a restaurantes y comercios gastronómicos a gestionar menús y pedidos online.\\"\\r\\n    image=\\"/img/logos/logomenucom_1.png\\"\\r\\n    type=\\"article\\"\\r\\n/>\\r\\n\\r\\n<Container>\\r\\n<article>\\r\\n  <h1>Sobre el Servicio</h1>\\r\\n  <p>\\r\\n    Menucom es una plataforma digital diseñada para facilitar la gestión de menús y pedidos en restaurantes y comercios gastronómicos. Nuestro objetivo es brindar una experiencia ágil, moderna y eficiente tanto para los comercios como para sus clientes.\\r\\n  </p>\\r\\n  <ul>\\r\\n    <li>Gestión de menús digitalizados</li>\\r\\n    <li>Pedidos en tiempo real</li>\\r\\n    <li>Soporte técnico dedicado</li>\\r\\n    <li>Actualizaciones constantes</li>\\r\\n  </ul>\\r\\n</article>\\r\\n</Container>\\r\\n\\r\\n<style>\\r\\n  h1 {\\r\\n    font-family: var(--font-bold);\\r\\n    font-size: 2.2rem;\\r\\n    margin-bottom: var(--space-md);\\r\\n    color: var(--color-text);\\r\\n  }\\r\\n\\r\\n  p {\\r\\n    font-size: 1.1rem;\\r\\n    margin-bottom: var(--space-lg);\\r\\n    color: var(--color-text);\\r\\n    line-height: 1.6;\\r\\n  }\\r\\n\\r\\n  ul {\\r\\n    list-style: disc inside;\\r\\n    color: var(--color-text);\\r\\n    font-size: 1rem;\\r\\n    padding-left: var(--space-md);\\r\\n  }\\r\\n\\r\\n  li {\\r\\n    margin-bottom: var(--space-sm);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4BE,iBAAG,CACD,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CACzB,CAEA,gBAAE,CACA,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,WAAW,CAAE,GACf,CAEA,iBAAG,CACD,UAAU,CAAE,IAAI,CAAC,MAAM,CACvB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,SAAS,CAAE,IAAI,CACf,YAAY,CAAE,IAAI,UAAU,CAC9B,CAEA,iBAAG,CACD,aAAa,CAAE,IAAI,UAAU,CAC/B"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Sobre el Servicio — Menucom",
      description: "Conocé cómo Menucom ayuda a restaurantes y comercios gastronómicos a gestionar menús y pedidos online.",
      image: "/img/logos/logomenucom_1.png",
      type: "article"
    },
    {},
    {}
  )} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<article data-svelte-h="svelte-fso2y3"><h1 class="svelte-12qz3zu">Sobre el Servicio</h1> <p class="svelte-12qz3zu">Menucom es una plataforma digital diseñada para facilitar la gestión de menús y pedidos en restaurantes y comercios gastronómicos. Nuestro objetivo es brindar una experiencia ágil, moderna y eficiente tanto para los comercios como para sus clientes.</p> <ul class="svelte-12qz3zu"><li class="svelte-12qz3zu">Gestión de menús digitalizados</li> <li class="svelte-12qz3zu">Pedidos en tiempo real</li> <li class="svelte-12qz3zu">Soporte técnico dedicado</li> <li class="svelte-12qz3zu">Actualizaciones constantes</li></ul></article>`;
    }
  })}`;
});
export {
  Page as default
};
