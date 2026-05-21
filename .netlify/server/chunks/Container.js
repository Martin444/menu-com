import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: ".container.svelte-x6bi8p{margin:0 auto;padding:var(--space-xl) var(--space-lg);width:100%}.container--sm.svelte-x6bi8p{max-width:640px}.container--md.svelte-x6bi8p{max-width:720px}.container--lg.svelte-x6bi8p{max-width:960px}",
  map: `{"version":3,"file":"Container.svelte","sources":["Container.svelte"],"sourcesContent":["<script>\\n  /** @type {'sm' | 'md' | 'lg'} */\\n  export let size = 'md';\\n<\/script>\\n\\n<div class=\\"container\\" class:container--sm={size === 'sm'} class:container--md={size === 'md'} class:container--lg={size === 'lg'}>\\n  <slot />\\n</div>\\n\\n<style>\\n  .container {\\n    margin: 0 auto;\\n    padding: var(--space-xl) var(--space-lg);\\n    width: 100%;\\n  }\\n\\n  .container--sm {\\n    max-width: 640px;\\n  }\\n\\n  .container--md {\\n    max-width: 720px;\\n  }\\n\\n  .container--lg {\\n    max-width: 960px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAUE,wBAAW,CACT,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,UAAU,CAAC,CAAC,IAAI,UAAU,CAAC,CACxC,KAAK,CAAE,IACT,CAEA,4BAAe,CACb,SAAS,CAAE,KACb,CAEA,4BAAe,CACb,SAAS,CAAE,KACb,CAEA,4BAAe,CACb,SAAS,CAAE,KACb"}`
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "md" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  $$result.css.add(css);
  return `<div class="${[
    "container svelte-x6bi8p",
    (size === "sm" ? "container--sm" : "") + " " + (size === "md" ? "container--md" : "") + " " + (size === "lg" ? "container--lg" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Container as C
};
