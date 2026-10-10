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
    // Verbatim: approved Home 'why' paragraph (client-verified original website
    // content, approved by the client to replace the former [CLIENT TO SUPPLY]
    // placeholder). This is the single approved Home copy change.
    body:
      'At KR Advisory Group, we help organisations manage their finances, strengthen their internal controls, prepare for audits and make informed financial decisions. Whether you are a growing SME looking for reliable financial reporting, a business preparing for an external audit, or a public institution looking to strengthen governance and audit readiness, we provide practical solutions tailored to your organisation.',
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
  /** H1 — verbatim from the live site (About spec). */
  heading: 'Financial clarity. Stronger businesses.',
  /** Eyebrow — verbatim from the About spec. */
  headingSub: 'ABOUT KR ADVISORY GROUP',
  // Verbatim: recovered About intro from the live site.
  intro:
    'KR Advisory Group is a CA(SA)-led practice serving growing businesses and public institutions across South Africa.',
  // Verbatim: recovered About body from the live site.
  body:
    'We help organisations manage their finances, strengthen their internal controls, prepare for audits and make informed financial decisions. Whether you are a growing SME looking for reliable financial reporting, a business preparing for an external audit, or a public institution working to strengthen governance and audit readiness, we provide practical solutions tailored to your organisation.',
  // Verbatim: recovered belief statement from the live site.
  belief:
    'Our work is led by Chartered Accountants and built on a simple belief: accounting should do more than keep you compliant — it should give you the clarity and control to run a stronger organisation.',
  // Retained alias of the verified body so the current About page keeps
  // typechecking/building until the page is rebuilt in FEAT-003 to read
  // about.body. Same verbatim recovered copy — not a placeholder/gap.
  bodyPlaceholder:
    'We help organisations manage their finances, strengthen their internal controls, prepare for audits and make informed financial decisions. Whether you are a growing SME looking for reliable financial reporting, a business preparing for an external audit, or a public institution working to strengthen governance and audit readiness, we provide practical solutions tailored to your organisation.',
  leadership: {
    heading: 'Leadership',
    // [CLIENT TO SUPPLY] / [NOT VERIFIED] — individual founder biographies are
    // not on the live site; placeholder only, pending client confirmation.
    bioPlaceholder: '[CLIENT TO SUPPLY] Founder bio pending client confirmation.',
  },
  howWeWork: {
    heading: 'How We Work',
    // [CLIENT TO SUPPLY] / [NOT VERIFIED] — the engagement-process steps are not
    // on the live site; placeholder only, pending client confirmation.
    bodyPlaceholder:
      '[CLIENT TO SUPPLY] "How We Work" engagement-process steps pending client confirmation.',
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
  /** H1 — verbatim from the live site (Contact spec). */
  heading: "Let's start a conversation.",
  /** Eyebrow — verbatim from the Contact spec. */
  headingSub: "LET'S TALK ABOUT YOUR BUSINESS",
  /** Supporting copy — verbatim from the Contact spec. */
  supporting:
    'Discuss your accounting, tax, audit-readiness or business advisory needs with our team.',
  // Verbatim: recovered Contact intro from the live site.
  intro:
    "We would be pleased to discuss your business or organisation's requirements — accounting, tax, internal audit, audit readiness, business advisory or funding preparation.",
  // Verbatim: the one recovered Contact FAQ from the live site.
  faq: {
    question: 'How do I get started / book a consultation?',
    answer:
      'The easiest way is to book a free consultation. Send us an enquiry through the form on this page, message us on WhatsApp at 073 499 7148, or email Kralephenya@kradvisorygroup.co.za. We will set up a conversation to understand your requirements, then follow up with a proposal tailored to your business or organisation.',
    closing:
      'Still have a question? WhatsApp us on 073 499 7148 or email Kralephenya@kradvisorygroup.co.za.',
  },
  // [NOT VERIFIED] — the form's exact field set and submission endpoint are not
  // confirmed; the existing working form + placeholder notice are preserved.
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
  /** H1 — verbatim from the live site (Referral spec). */
  heading: 'Great connections. Stronger businesses.',
  /** Eyebrow — verbatim from the Referral spec. */
  headingSub: 'REFERRAL PROGRAMME',
  // Verbatim: recovered Referral intro from the live site.
  intro:
    'Our referral programme rewards the professionals and contacts who connect us with businesses that need accounting, tax, internal audit, audit-readiness or business advisory support.',
  // Retained alias of the verified intro so the current Referral page keeps
  // typechecking/building until the page is rebuilt in FEAT-004 to read
  // referral.intro. Same verbatim recovered copy — not a placeholder/gap.
  body:
    'Our referral programme rewards the professionals and contacts who connect us with businesses that need accounting, tax, internal audit, audit-readiness or business advisory support.',
  // Verbatim: recovered Referral CTA block from the live site.
  cta: {
    heading: 'Ready to make a referral?',
    body:
      'Send us the details of the business or organisation, and we will take it from there.',
    buttonLabel: 'Refer a Business',
  },
  rewards: {
    heading: 'Reward structure',
    // [CLIENT TO SUPPLY] / [NOT VERIFIED] — no reward amounts, eligibility or
    // terms appear on the live site. This gap is documented in
    // CONTENT_GAP_ANALYSIS.md and the Reward Structure section is OMITTED from
    // the public Referral page (handled in FEAT-004). Pending client confirmation.
    bodyPlaceholder:
      '[CLIENT TO SUPPLY] Referral reward structure (amounts, eligibility, terms) pending client confirmation.',
  },
} as const;
