import { c as create_ssr_component, g as subscribe, f as escape, e as add_attribute } from "./ssr.js";
import { p as page } from "./stores.js";
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canonical;
  let ogImage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title = "Menucom — Tu tienda online en minutos" } = $$props;
  let { description = "Crea tu propio negocio online con Menucom. Gestioná stock, catálogos y pedidos fácilmente." } = $$props;
  let { image = "/img/assets/screens.png" } = $$props;
  let { type = "website" } = $$props;
  let { jsonLd = null } = $$props;
  let { noindex = false } = $$props;
  const siteUrl = "https://menucom.netlify.app";
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.jsonLd === void 0 && $$bindings.jsonLd && jsonLd !== void 0) $$bindings.jsonLd(jsonLd);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0) $$bindings.noindex(noindex);
  canonical = `${siteUrl}${$page.url.pathname}`;
  ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-hs65ue_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}>${noindex ? `<meta name="robots" content="noindex, nofollow">` : `<meta name="robots" content="index, follow">`}<link rel="canonical"${add_attribute("href", canonical, 0)}><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:type"${add_attribute("content", type, 0)}><meta property="og:url"${add_attribute("content", canonical, 0)}><meta property="og:image"${add_attribute("content", ogImage, 0)}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${add_attribute("content", title, 0)}><meta name="twitter:description"${add_attribute("content", description, 0)}><meta name="twitter:image"${add_attribute("content", ogImage, 0)}>${jsonLd ? `<!-- HTML_TAG_START -->${`<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}<\/script>`}<!-- HTML_TAG_END -->` : ``}<!-- HEAD_svelte-hs65ue_END -->`, ""}`;
});
export {
  Seo as S
};
