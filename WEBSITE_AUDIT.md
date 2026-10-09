# Website Audit — KR Advisory Group

**Target:** https://www.kradvisorygroup.co.za/
**Date:** 9 October 2026
**Prepared by:** Kiro (acting as Senior Full-Stack, SEO, UX, Accessibility, Performance, Security & DevOps engineer)
**Scope:** Phase 1 Discovery & Audit only. No implementation has been performed. The production site has not been modified.

> **No-assumptions policy applied.** Findings are based on live HTTP responses, server-delivered HTML, the site's CSS bundle, and linked assets. The site is a **client-rendered React (Vite) SPA** on the **Lovable** platform behind **Cloudflare**. Dynamic, JS-rendered content and runtime behaviour (e.g. full form internals, Lighthouse field data, analytics account IDs) could **not** be fully verified with the available tooling. These gaps are flagged explicitly and must be closed via live-rendered inspection or client confirmation before implementation.

---

## 1. Current implementation

### 1.1 Technology stack (verified from assets & headers)
- **Rendering:** Client-side React SPA. HTML shell ships a near-empty body; content is hydrated by `/assets/index-fKjoDYsr.js` + `/assets/routes-BsQQjT1w.js`.
- **Build tool:** Vite (hashed `/assets/*` bundle naming).
- **Styling:** Tailwind-style utility CSS with an OKLCH design-token system (`/assets/styles-CAN0orZs.css`, ~85 KB). Light **and** dark theme tokens defined.
- **Platform:** Lovable (`#lovable-badge`, `lovable.dev/projects/...`), with Lovable's own analytics (`/~flock.js`, `/~api/analytics`).
- **CDN / edge:** Cloudflare (`Server: cloudflare`, `CF-RAY`, `__cf_bm` cookie).
- **Fonts:** Google Fonts — Fraunces (serif display), Instrument Sans (body), IBM Plex Mono (accent).

### 1.2 Site structure & navigation
- Primary routes: `/`, `/services`, `/about`, `/contact`, `/referral`.
- Consistent global header (logo + 5 nav links + WhatsApp/consultation CTA) and footer (address, leadership, services/contact links, socials, copyright).
- Service deep-links use in-page anchors on `/services`.

### 1.3 Visual identity (verified design tokens)
- **Ink / navy (primary dark):** `oklch(20% .045 258)` — deep desaturated blue, used for text and dark surfaces.
- **Brass / gold accent:** `--brass: oklch(75.5% .115 82)`, deep brass `oklch(62–68% .125 75)` — the signature accent.
- **Background:** warm off-white `oklch(98.4% .004 88)`.
- **Border/muted:** warm neutrals (`oklch(90.6% .012 88)`, `oklch(95.5% .008 88)`).
- **Radius:** `0.625rem`.
- **Type:** Fraunces (display), Instrument Sans (body), IBM Plex Mono (labels/eyebrows).
- Overall aesthetic: premium, editorial, professional advisory firm — to be preserved.

### 1.4 Existing SEO state
**Present / good:**
- Unique, descriptive `<title>` and `<meta description>` per page (verified on `/`, `/services`, `/about`, `/contact`).
- Open Graph title/description/type + `twitter:card` on home.
- `lang="en"`, correct viewport meta.
- `robots.txt` present and permissive for major bots.
- Image preloading for logo + hero (`<link rel="preload" as="image">`).

**Missing / problematic:**
- **No `sitemap.xml`** (`/sitemap.xml` → 404) and **no `Sitemap:` directive** in robots.txt.
- **No canonical tags** detected.
- **No structured data (JSON-LD)** — no Organization / LocalBusiness / Person / Service / BreadcrumbList schema.
- **Client-side rendering risk:** primary content is JS-rendered. Crawlers that don't execute JS (and social scrapers) see a near-empty shell. This is the single biggest SEO risk for a lead-generation site.
- **Per-page OG/Twitter coverage unconfirmed** beyond home; interior pages may share or lack OG images.
- **No OG image URL** verified.

### 1.5 Accessibility state (preliminary)
Full WCAG validation requires live-rendered DOM + assistive-tech testing (not possible from server HTML alone). Preliminary observations:
- `lang` attribute present (good).
- Semantic structure, heading order, focus management, form labels, and ARIA usage are JS-rendered and **[NOT VERIFIED]** — must be audited against the running app in Phase 4.
- Colour contrast: brass-on-navy and ink-on-off-white token pairs look promising but must be measured for WCAG 2.2 AA (notably brass `oklch(75.5%)` text on light backgrounds, which often fails for normal-size text).

### 1.6 Performance observations
- Served over Cloudflare with HTTP compression (chunked), HSTS, and image preloads — reasonable baseline.
- **SPA cost:** client-side hydration delays content paint; a lead-gen marketing site would benefit from SSR/SSG for faster LCP and reliable crawlability.
- `Cache-Control: no-cache, must-revalidate, max-age=0` on the HTML document (expected for an SPA shell).
- Core Web Vitals field data **[NOT VERIFIED]** — no Lighthouse/CrUX run was possible here; treat all CWV numbers as goals to be measured in Phase 5.

### 1.7 Conversion paths (verified)
- WhatsApp (`https://wa.me/27734997148`) with pre-filled messages for "book a consultation" and "I have a question" — strong, present throughout.
- Contact page "Prepare your enquiry" helper + submittable form (endpoint/fields **[NOT VERIFIED]**).
- Referral programme CTA.
- Email links (info@ / kralephenya@ / ngongxeka@).

### 1.8 Security posture (verified headers)
- Present: `Strict-Transport-Security` (1 yr, includeSubDomains), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.
- Not observed: `Content-Security-Policy`, `X-Frame-Options`/`frame-ancestors`, `Permissions-Policy`.

### 1.9 Defects found
- **Double-hash anchors:** navigation emits `/services##accounting` (two `#`) instead of `/services#accounting` — anchor links are broken. Verified in markup across `/`, `/about`, `/contact`.
- **Prompt vs. reality:** the brief referenced `/referral-programme`; the live route is `/referral` (the `-programme` path 404s). Reconstruction must use `/referral` (and may add a 301 from `/referral-programme` if desired).
- **No sitemap.xml.**

---

## 2. Improvement recommendations

### 2.1 UI improvements
- Preserve the navy + brass identity, Fraunces/Instrument Sans/IBM Plex Mono type system, and logo exactly.
- Tighten spacing scale and vertical rhythm; standardise service/audience cards into one reusable component.
- Strengthen the hero (clear value proposition + primary CTA above the fold).
- Consistent button hierarchy (primary = brass, secondary = outline) and consistent WhatsApp CTA treatment.

### 2.2 UX improvements
- Fix the double-hash service anchors; add smooth-scroll + visible active state on `/services`.
- Improve mobile navigation (accessible disclosure menu, large touch targets).
- Make the "Prepare your enquiry" helper's value obvious and keyboard-operable; ensure the real form never shows a success state on failure.
- Clear trust signals on About (CA(SA) credential, leadership) — using only verified content.

### 2.3 SEO improvements
- **Adopt SSR or static generation** (crawlable HTML) — highest-impact change for a lead-gen site.
- Add `sitemap.xml` + `Sitemap:` directive in robots.txt.
- Add canonical tags to every page.
- Add JSON-LD: `Organization` + `LocalBusiness` (Midrand/Waterfall address, verified), `Person` for each verified CA(SA) founder, `Service` per verified service, `BreadcrumbList`.
- Per-page OG/Twitter tags + a branded OG image.
- Natural local-SEO signals for Midrand / Waterfall / Johannesburg / Gauteng / South Africa — no doorway pages, no unverified locations.

### 2.4 Accessibility improvements (target WCAG 2.2 AA)
- Measure and fix contrast (especially brass text on light surfaces).
- Semantic landmarks, logical heading order, visible focus states, labelled form fields with accessible error handling, `prefers-reduced-motion` support (the Lovable badge already respects it; extend site-wide).

### 2.5 Performance improvements (targets, not guarantees)
- LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.
- Pre-rendered HTML, responsive/`srcset` images with explicit dimensions, `font-display: swap` + preconnect (already present), code-splitting, and reserved space for the hero to protect CLS.

### 2.6 Technical / maintainability improvements
- Keep a React + Vite foundation (framework preservation rule) and add a rendering strategy that produces crawlable HTML (e.g. SSG/prerender) rather than switching frameworks without justification.
- Reusable component library + design tokens mirrored from the current CSS variables.
- Add `CSP`, `X-Frame-Options`/`frame-ancestors`, `Permissions-Policy` headers.
- Environment-based config for form endpoints and keys — no secrets in the repo.

---

## 3. Open items requiring client confirmation (no assumptions)
1. **Leadership bios & headshots** — not verified in server HTML.
2. **Contact form endpoint, exact fields, validation rules, and anti-spam** — not verified.
3. **Referral programme reward structure / terms** — not stated anywhere captured.
4. **Analytics / GA4 / Google Business Profile / Search Console ownership** — not verifiable from here.
5. **Hosting & deployment target** for the rebuild (stay on Lovable? move to Vercel/Netlify/Cloudflare Pages?) — needs a decision; email DNS must be preserved regardless.
6. **Full rendered copy** for FAQ answers, "How We Work", and any content hidden behind JS interactions.

---

## 4. Recommended architecture (for approval)
- **Framework:** React + Vite (preserve), add **static pre-rendering / SSG** for crawlable, fast-loading pages. No microservices, no unnecessary backend.
- **Styling:** Port the existing OKLCH token system into a documented theme; Tailwind-style utilities + a small reusable component set (Button, Card, Section, Nav, Footer, FormField).
- **Content:** Structured content modules mirroring the inventory so future developers edit copy in one place.
- **Forms:** A single secure endpoint (serverless function or the current provider) with validation, honeypot/rate-limiting, and real success/failure states.
- **SEO layer:** Per-route metadata, canonicals, JSON-LD, generated sitemap, robots with sitemap directive.
- **Deployment:** Staging first; preserve URLs and email DNS; rollback plan; no production deploy without approval.

---

## ✅ Approval gate (STOP)
Per the master prompt, Phase 1 is complete and implementation is **paused** pending your approval. Deliverables produced: `WEBSITE_AUDIT.md` and `CONTENT_INVENTORY.md`.

**I need your decisions on:**
1. Approve the recommended architecture (React + Vite + static pre-rendering), or specify a different direction.
2. Confirm the hosting/deployment target for the rebuild.
3. Provide or authorise capture of the **[NOT VERIFIED]** items in §3 (leadership bios/photos, form endpoint & fields, referral terms, analytics ownership).
4. Confirm whether to add a `301` from `/referral-programme` → `/referral`.

Implementation (Phase 2 onward) will begin only after your go-ahead.
