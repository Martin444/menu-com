import { event } from '$lib/analytics/firebase.js';

const thresholds = [25, 50, 75, 100];

/**
 * Svelte action: tracks scroll depth percentage.
 * @param {HTMLElement} _node
 * @returns {{ destroy(): void }}
 */
export function scrollAnalytics(_node) {
	let maxReached = 0;

	function handleScroll() {
		const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
		if (scrollHeight <= 0) return;
		const scrolled = Math.round((window.scrollY / scrollHeight) * 100);

		for (const t of thresholds) {
			if (scrolled >= t && t > maxReached) {
				maxReached = t;
				event('scroll_depth', { percent: t, page_path: window.location.pathname });
			}
		}
	}

	window.addEventListener('scroll', handleScroll, { passive: true });
	handleScroll();

	return {
		destroy() {
			window.removeEventListener('scroll', handleScroll);
		}
	};
}
