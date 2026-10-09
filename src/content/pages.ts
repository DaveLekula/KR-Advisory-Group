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

/**
 * About page copy — verbatim from CONTENT_INVENTORY.md ("Page: About").
 * Leadership names/titles are the verified facts (see content/business.ts);
 * individual bios and headshots are [NOT VERIFIED] and must be rendered as
 * clearly-labeled placeholders, never fabricated.
 */
export const about = {
  /** H1 — verbatim. */
  heading: 'About Us',
  headingSub: 'Financial Clarity. Stronger Controls. Better Business Decisions.',
  intro:
    'KR Advisory Group is a CA(SA)-led practice serving growing businesses and public institutions across South Africa.',
  // CONTENT_INVENTORY.md describes the body as copy "on managing finances,
  // strengthening controls, audit preparation; belief statement that
  // 'accounting should do more than keep you compliant.'" but captures only
  // the quoted belief statement verbatim. The remaining paragraphs are
  // JS-rendered on the live site and must be supplied by the client — not
  // fabricated (No Assumptions Policy).
  belief: 'Accounting should do more than keep you compliant.',
  bodyPlaceholder:
    '[CLIENT TO SUPPLY] Body copy on managing finances, strengthening controls and audit preparation.',
  leadership: {
    heading: 'Leadership',
    // Individual biography paragraphs are [NOT VERIFIED] — placeholder only.
    bioPlaceholder: 'Bio to be supplied by client.',
  },
  howWeWork: {
    heading: 'How We Work',
    // JS-rendered on the live site; not captured verbatim in the inventory.
    bodyPlaceholder:
      '[CLIENT TO SUPPLY] "How We Work" section copy.',
  },
  whoWeHelp: {
    heading: 'Who We Help',
  },
} as const;

/**
 * Contact page copy — verbatim from CONTENT_INVENTORY.md ("Page: Contact").
 * The contact form's exact field names, required-field rules and submission
 * endpoint are [NOT VERIFIED] — see the clearly-commented placeholder in
 * src/pages/Contact.tsx. Do NOT invent an endpoint or field set.
 */
export const contact = {
  /** H1 — verbatim. */
  heading: 'Contact Us',
  headingSub: "Let's talk about your business.",
  intro:
    'Discuss accounting, tax, internal audit, audit readiness, business advisory or funding preparation.',
  prepare: {
    heading: 'Prepare your enquiry',
    lead: "Tell us what you need. We'll show you what to include.",
    serviceSelectorLabel: 'Service (optional)',
    notice: 'Nothing is sent to us until you submit the form below.',
  },
  form: {
    heading: 'Send us a message',
  },
} as const;

/**
 * Referral page copy — verbatim from CONTENT_INVENTORY.md
 * ("Page: Referral Programme"). Specific reward amounts, eligibility and
 * terms are [NOT VERIFIED] — rendered as a clearly-labeled placeholder in
 * src/pages/Referral.tsx. Do NOT invent terms.
 */
export const referral = {
  /** H1 — verbatim. */
  heading: 'Referral Programme',
  headingSub: 'Refer a business. Earn rewards. Build stronger businesses together.',
  body:
    'Programme rewards professionals and contacts who connect KR with businesses needing accounting, tax, internal audit, audit-readiness or business advisory support.',
  cta: {
    heading: 'Ready to make a referral?',
    body:
      'Send us the details of the business or organisation, and we will take it from there.',
    buttonLabel: 'Refer a Business',
  },
  rewards: {
    heading: 'Reward structure',
  },
} as const;
