/** @type {string | undefined} */
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

let initialized = false;

function init() {
	if (initialized || import.meta.env.SSR || !measurementId) return;
	initialized = true;

	window.dataLayer = window.dataLayer || [];
	/** @param {...unknown} args */
	function gtag(...args) { window.dataLayer.push(args); }
	window.gtag = gtag;
	gtag('js', new Date());
	gtag('config', measurementId, { send_page_view: false });

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
	document.head.appendChild(script);
}

/** @param {string} url */
export function pageview(url) {
	if (import.meta.env.SSR || !measurementId) return;
	init();
	if (typeof window.gtag === 'function') {
		window.gtag('config', measurementId, { page_path: url });
	}
}

/**
 * @param {string} action
 * @param {Record<string, string | number | boolean>} [params]
 */
export function event(action, params) {
	if (import.meta.env.SSR || !measurementId) return;
	init();
	if (typeof window.gtag === 'function') {
		window.gtag('event', action, params);
	}
}
