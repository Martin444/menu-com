/**
 * Svelte action: reveals an element when it enters the viewport.
 *
 * @param {HTMLElement} node
 * @param {{ threshold?: number, delay?: number }} [options]
 * @returns {{ destroy(): void }}
 */
export function scrollReveal(node, options = {}) {
  const { threshold = 0.15, delay = 0 } = options;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    node.style.opacity = '1';
    node.style.transform = 'none';
    return { destroy() {} };
  }

  node.style.opacity = '0';
  node.style.transform = 'translateY(24px)';
  node.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';
        observer.unobserve(node);
      }
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
