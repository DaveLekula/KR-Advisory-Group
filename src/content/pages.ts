/**
 * Verbatim page copy from CONTENT_INVENTORY.md. Reproduce exactly — do NOT
 * paraphrase. The seven service blocks and three audience cards live in
 * src/content/services.ts; this module holds the Home page's narrative
 * sections. Later features extend it with About/Contact/Referral copy.
 */

export const home = {
  /** H1 (hero) — verbatim. */
  heroHeading: 'Financial clarity. Stronger controls. Better business decisions.',
  heroSubCopy:
    'KR Advisory Group delivers accounting, tax, internal audit, audit-readiness and business advisory solutions for growing businesses and public institutions.',
  heroImage: {
    src: '/hero.jpg',
    alt: 'KR Advisory Group',
  },
  /** The six services surfaced on the home page (ids reference services.ts). */
  serviceListIds: [
    'accounting',
    'tax',
    'internal-audit',
    'audit-readiness',
    'business-advisory',
    'funding-support',
  ] as const,
  why: {
    heading: 'Why KR Advisory Group',
    lead: 'Your business deserves more than just accounting.',
    // CONTENT_INVENTORY.md describes this body as copy "explaining support for
    // SMEs, audit preparation, and public institutions" but does not capture
    // the verbatim paragraph (it is JS-rendered on the live site). Per the No
    // Assumptions Policy this must be supplied by the client, not fabricated.
    body: '[CLIENT TO SUPPLY] Body copy explaining support for SMEs, audit preparation, and public institutions.',
    cta: { label: 'Explore Our Services', href: '/services' },
  },
  whoWeHelp: {
    heading: 'Who We Help',
  },
  publicSector: {
    heading: 'Public Sector Advisory',
    body: 'Governance and audit readiness for public institutions.',
    cta: { label: 'Discuss your organisation', href: '/contact' },
  },
  referralTeaser: {
    heading: 'Referral Programme',
    body: 'Know a business that needs stronger finances? Refer them to us.',
    cta: { label: 'Refer a Business', href: '/referral' },
  },
  closing: {
    heading: 'Ready to strengthen your business or organisation?',
  },
} as const;
