import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Container } from "../../../chunks/Container.js";
const css = {
  code: "h1.svelte-6hl4xw.svelte-6hl4xw{font-family:var(--font-bold);font-size:2.2rem;margin-bottom:var(--space-md);color:var(--color-text)}p.svelte-6hl4xw.svelte-6hl4xw{font-size:1.1rem;margin-bottom:var(--space-lg);color:var(--color-text);line-height:1.6}.contact__list.svelte-6hl4xw.svelte-6hl4xw{list-style:none;padding:0;margin-bottom:var(--space-xl)}.contact__list.svelte-6hl4xw li.svelte-6hl4xw{margin-bottom:var(--space-md);font-size:1rem;line-height:1.5}.contact__list.svelte-6hl4xw a.svelte-6hl4xw{color:var(--color-primary);text-decoration:underline}.contact__cta.svelte-6hl4xw.svelte-6hl4xw{display:flex;justify-content:flex-start}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\n  import Button from \\"../../features/home/components/Button.svelte\\";\\n  import Container from \\"$lib/components/Container.svelte\\";\\n\\n  function gotoRegister() {\\n    window.location.href = \\"https://menucom-dashboard.netlify.app/#/registrate\\";\\n  }\\n<\/script>\\n\\n<svelte:head>\\n  <title>Contacto — Menucom</title>\\n  <meta name=\\"description\\" content=\\"Contactá al equipo de Menucom para soporte o consultas.\\" />\\n</svelte:head>\\n\\n<Container>\\n  <h1>Contacto</h1>\\n  <p>\\n    ¿Tenés dudas sobre Menucom? Estamos para ayudarte.\\n  </p>\\n  <ul class=\\"contact__list\\">\\n    <li>\\n      <strong>Email de soporte:</strong>\\n      <a href=\\"mailto:alejandrofarel62@gmail.com\\">alejandrofarel62@gmail.com</a>\\n    </li>\\n    <li>\\n      <strong>Consultas técnicas:</strong>\\n      <a href=\\"/dev-contact\\">Contacta al desarrollador</a>\\n    </li>\\n  </ul>\\n  <div class=\\"contact__cta\\">\\n    <Button variant=\\"primary\\" label=\\"Crear cuenta gratis\\" onClick={gotoRegister} />\\n  </div>\\n</Container>\\n\\n<style>\\n  h1 {\\n    font-family: var(--font-bold);\\n    font-size: 2.2rem;\\n    margin-bottom: var(--space-md);\\n    color: var(--color-text);\\n  }\\n\\n  p {\\n    font-size: 1.1rem;\\n    margin-bottom: var(--space-lg);\\n    color: var(--color-text);\\n    line-height: 1.6;\\n  }\\n\\n  .contact__list {\\n    list-style: none;\\n    padding: 0;\\n    margin-bottom: var(--space-xl);\\n  }\\n\\n  .contact__list li {\\n    margin-bottom: var(--space-md);\\n    font-size: 1rem;\\n    line-height: 1.5;\\n  }\\n\\n  .contact__list a {\\n    color: var(--color-primary);\\n    text-decoration: underline;\\n  }\\n\\n  .contact__cta {\\n    display: flex;\\n    justify-content: flex-start;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAmCE,8BAAG,CACD,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CACzB,CAEA,6BAAE,CACA,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,WAAW,CAAE,GACf,CAEA,0CAAe,CACb,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CAAC,CACV,aAAa,CAAE,IAAI,UAAU,CAC/B,CAEA,4BAAc,CAAC,gBAAG,CAChB,aAAa,CAAE,IAAI,UAAU,CAAC,CAC9B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GACf,CAEA,4BAAc,CAAC,eAAE,CACf,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,eAAe,CAAE,SACnB,CAEA,yCAAc,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,UACnB"}'
};
function gotoRegister() {
  window.location.href = "https://menucom-dashboard.netlify.app/#/registrate";
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1l2zg29_START -->${$$result.title = `<title>Contacto — Menucom</title>`, ""}<meta name="description" content="Contactá al equipo de Menucom para soporte o consultas."><!-- HEAD_svelte-1l2zg29_END -->`, ""} ${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="svelte-6hl4xw" data-svelte-h="svelte-vgv0xl">Contacto</h1> <p class="svelte-6hl4xw" data-svelte-h="svelte-19llibq">¿Tenés dudas sobre Menucom? Estamos para ayudarte.</p> <ul class="contact__list svelte-6hl4xw" data-svelte-h="svelte-1w3br6x"><li class="svelte-6hl4xw"><strong>Email de soporte:</strong> <a href="mailto:alejandrofarel62@gmail.com" class="svelte-6hl4xw">alejandrofarel62@gmail.com</a></li> <li class="svelte-6hl4xw"><strong>Consultas técnicas:</strong> <a href="/dev-contact" class="svelte-6hl4xw">Contacta al desarrollador</a></li></ul> <div class="contact__cta svelte-6hl4xw">${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "primary",
          label: "Crear cuenta gratis",
          onClick: gotoRegister
        },
        {},
        {}
      )}</div>`;
    }
  })}`;
});
export {
  Page as default
};
