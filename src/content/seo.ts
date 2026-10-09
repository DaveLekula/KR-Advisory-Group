import type { RouteMeta } from '../lib/seo';

/**
 * Per-route SEO meta — pure data, no React imports, so both the app
 * (src/routes.tsx) and the Node sitemap generator can consume it safely.
 * Titles/descriptions are verbatim from CONTENT_INVENTORY.md per page.
 */
export const meta: Record<string, RouteMeta> = {
  '/': {
    path: '/',
    title: 'KR Advisory Group | Financial Clarity. Stronger Controls.',
    description:
      'KR Advisory Group delivers accounting, tax, internal audit, audit-readiness and business advisory solutions for growing businesses and public institutions.',
  },
  '/services': {
    path: '/services',
    title: 'Services | KR Advisory Group',
    description:
      'Practical, CA(SA)-led solutions across the full finance function — accounting, tax, internal audit, audit readiness, business advisory, funding support and public sector advisory.',
  },
  '/about': {
    path: '/about',
    title: 'About | KR Advisory Group',
    description:
      'KR Advisory Group is a CA(SA)-led practice serving growing businesses and public institutions across South Africa.',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact | KR Advisory Group',
    description:
      'Book a free consultation with KR Advisory Group — accounting, tax, internal audit, audit readiness, business advisory and funding preparation.',
  },
  '/referral': {
    path: '/referral',
    title: 'Referral Programme | KR Advisory Group',
    description:
      'Refer a business. Earn rewards. Build stronger businesses together with KR Advisory Group.',
  },
};

/** The ordered list of static route paths (used by the sitemap generator). */
export const routePaths: string[] = Object.keys(meta);
