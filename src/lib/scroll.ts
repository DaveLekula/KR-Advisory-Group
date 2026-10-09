/**
 * Single-hash smooth-scroll to an in-page anchor (e.g. /services#accounting).
 * Replaces the production site's double-hash (##) defect. Respects the user's
 * prefers-reduced-motion setting.
 */
export function scrollToHash(hash: string): void {
  if (typeof document === 'undefined') return;

  const id = hash.replace(/^#+/, '');
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  el.scrollIntoView({
    behavior: prefersReduced ? 'auto' : 'smooth',
    block: 'start',
  });
}
