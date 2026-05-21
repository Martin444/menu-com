import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Container } from "../../../chunks/Container.js";
import { S as Seo } from "../../../chunks/Seo.js";
const css = {
  code: "h1.svelte-oiduv9{font-family:var(--font-bold);font-size:2.2rem;margin-bottom:var(--space-md);color:var(--color-text)}p.svelte-oiduv9{font-size:1.1rem;margin-bottom:var(--space-lg);color:var(--color-text);line-height:1.6}ul.svelte-oiduv9{list-style:disc inside;color:var(--color-text);font-size:1rem;padding-left:var(--space-md);margin-bottom:var(--space-lg)}li.svelte-oiduv9{margin-bottom:var(--space-sm)}a.svelte-oiduv9{color:var(--color-primary);text-decoration:underline}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n  import Container from \\"$lib/components/Container.svelte\\";\\r\\n  import Seo from \\"$lib/components/Seo.svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<Seo\\r\\n    title=\\"Contacta al desarrollador — Menucom\\"\\r\\n    description=\\"Contacto directo con el equipo de desarrollo de Menucom.\\"\\r\\n    image=\\"/img/logos/logomenucom_1.png\\"\\r\\n    type=\\"article\\"\\r\\n/>\\r\\n\\r\\n<Container>\\r\\n<article>\\r\\n  <h1>Contacta al desarrollador</h1>\\r\\n  <p>\\r\\n    ¿Querés consultar algo o reportar un error? Escribíme a:\\r\\n  </p>\\r\\n  <ul>\\r\\n    <li>Email: <a href=\\"mailto:alejandrofarel62@gmail.com\\">alejandrofarel62@gmail.com</a></li>\\r\\n  </ul>\\r\\n  <p>\\r\\n    También puedes enviarme sugerencias o ideas para mejorar la plataforma.\\r\\n  </p>\\r\\n</article>\\r\\n</Container>\\r\\n\\r\\n<style>\\r\\n  h1 {\\r\\n    font-family: var(--font-bold);\\r\\n    font-size: 2.2rem;\\r\\n    margin-bottom: var(--space-md);\\r\\n    color: var(--color-text);\\r\\n  }\\r\\n\\r\\n  p {\\r\\n    font-size: 1.1rem;\\r\\n    margin-bottom: var(--space-lg);\\r\\n    color: var(--color-text);\\r\\n    line-height: 1.6;\\r\\n  }\\r\\n\\r\\n  ul {\\r\\n    list-style: disc inside;\\r\\n    color: var(--color-text);\\r\\n    font-size: 1rem;\\r\\n    padding-left: var(--space-md);\\r\\n    margin-bottom: var(--space-lg);\\r\\n  }\\r\\n\\r\\n  li {\\r\\n    margin-bottom: var(--space-sm);\\r\\n  }\\r\\n\\r\\n  a {\\r\\n    color: var(--color-primary);\\r\\n    text-decoration: underline;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4BE,gBAAG,CACD,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CACzB,CAEA,eAAE,CACA,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,WAAW,CAAE,GACf,CAEA,gBAAG,CACD,UAAU,CAAE,IAAI,CAAC,MAAM,CACvB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,SAAS,CAAE,IAAI,CACf,YAAY,CAAE,IAAI,UAAU,CAAC,CAC7B,aAAa,CAAE,IAAI,UAAU,CAC/B,CAEA,gBAAG,CACD,aAAa,CAAE,IAAI,UAAU,CAC/B,CAEA,eAAE,CACA,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,eAAe,CAAE,SACnB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Contacta al desarrollador — Menucom",
      description: "Contacto directo con el equipo de desarrollo de Menucom.",
      image: "/img/logos/logomenucom_1.png",
      type: "article"
    },
    {},
    {}
  )} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<article data-svelte-h="svelte-5947c5"><h1 class="svelte-oiduv9">Contacta al desarrollador</h1> <p class="svelte-oiduv9">¿Querés consultar algo o reportar un error? Escribíme a:</p> <ul class="svelte-oiduv9"><li class="svelte-oiduv9">Email: <a href="mailto:alejandrofarel62@gmail.com" class="svelte-oiduv9">alejandrofarel62@gmail.com</a></li></ul> <p class="svelte-oiduv9">También puedes enviarme sugerencias o ideas para mejorar la plataforma.</p></article>`;
    }
  })}`;
});
export {
  Page as default
};
