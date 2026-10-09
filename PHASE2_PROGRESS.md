# Phase 2 Progress Summary — KR Advisory Group Website Rebuild

**Date:** 10 October 2026
**Phase:** 2 — Page Reconstruction
**Status:** Complete. Build verified green. Changes committed locally, **not** pushed to production.

> Scope note: Phase 2 recreated all current production pages and established the component, SEO, and accessibility foundations. No new service pages or new business content were invented. The production website was not modified.

---

## 1. Work completed

- Scaffolded **React 18 + Vite 5 + TypeScript** at the repo root (existing `README.md`, `WEBSITE_AUDIT.md`, `CONTENT_INVENTORY.md`, `SEO_URL_MAPPING.md`, and `.git/` preserved).
- **Static pre-rendering / SSG** via `vite-react-ssg` (pinned `0.8.9`): every route emits real, crawlable HTML — not an empty SPA shell.
- **Tailwind v3 + PostCSS** styling, with the **exact production OKLCH design tokens** ported as CSS variables, plus the three brand fonts (Fraunces, Instrument Sans, IBM Plex Mono) with preconnect + `display=swap`.
- Recreated all **5 production routes** with copy taken verbatim from `CONTENT_INVENTORY.md`.
- Built a **reusable component architecture** (see §2).
- Implemented the **full SEO layer** (see §4).
- Fixed the production **double-hash anchor defect** — service deep links are now single-hash (`/services#accounting` … `/services#public-sector`).
- Downloaded the real **brand assets** (logo + hero) from the live site into `public/`.

### Pages recreated
| Route | H1 | Notes |
|-------|-----|-------|
| `/` | Financial clarity. Stronger controls. Better business decisions. | Hero + 6-service list + "Why KR Advisory Group" + "Who We Help" (3 cards) + Public Sector band + Referral teaser + closing CTA |
| `/services` | Our Services | 7 numbered blocks (01–07) with verbatim "What this includes" lists; one anchor id per service |
| `/about` | About Us | Verified leadership names/titles only; bios/photos are labeled placeholders; "How We Work" placeholder |
| `/contact` | Contact Us | "Prepare your enquiry" helper; accessible form; endpoint is a configurable placeholder (no fake success) |
| `/referral` | Referral Programme | Verbatim copy + "Refer a Business" CTA; reward terms are a labeled placeholder |

---

## 2. Component architecture (`src/`)

```
src/
  App.tsx, main.tsx, routes.tsx        # routes.tsx is the single source of truth for routes
  index.css                            # OKLCH tokens, fonts, focus/reduced-motion styles
  components/
    primitives/  Button, Card, Container, FormField, Section
    layout/      Header, Footer, MobileNav, WhatsAppCTA
    cards/       ServiceCard, AudienceCard
    seo/         Head, JsonLd
  content/       business.ts, pages.ts, seo.ts, services.ts   # verbatim copy + verified facts
  lib/           cn.ts, scroll.ts, seo.ts, jsonld.ts
  pages/         Home, Services, About, Contact, Referral
  scripts/       generate-sitemap.ts
```

---

## 3. Build & verification results (independently re-verified)

- `npm install` — succeeds.
- `npm run build` — **exit 0**. Emits `dist/{index,services,about,contact,referral}/index.html` + `dist/sitemap.xml`.
- **SSG proof (verified in built HTML):** `<div id="root">` is populated (not empty); Home H1 = "Financial clarity. Stronger controls. Better business decisions."; About H1 = "About Us" with founder name present; Services contains `id="accounting"` … `id="public-sector"`.
- **Double-hash anchors:** none in `dist` (verified).
- **Per-route SEO:** `rel="canonical"` and `application/ld+json` present on all 5 routes (verified).
- **sitemap.xml:** 5 absolute URLs matching the routes (verified).
- **robots.txt:** contains `Sitemap: https://www.kradvisorygroup.co.za/sitemap.xml` (verified).
- `tsc --noEmit` — clean (per build step).

---

## 4. SEO layer

- Per-route `<title>`, meta description, and **self-referencing canonical** on `https://www.kradvisorygroup.co.za`.
- Open Graph + Twitter card tags (image = `/hero.jpg`).
- **JSON-LD:** Organization + LocalBusiness on Home (verified Waterfall/Midrand address, `+27734997148`, 5 social `sameAs`, logo); Service ×7 + BreadcrumbList on `/services`; Person ×2 (name + jobTitle only) + BreadcrumbList on `/about`; BreadcrumbList on `/contact` and `/referral`.
- Generated `sitemap.xml`; `robots.txt` with Sitemap directive.
- **301 `/referral-programme → /referral`** provided host-agnostically: `public/_redirects` (Netlify / Cloudflare Pages) and `vercel.json` redirects (Vercel). Recorded in `SEO_URL_MAPPING.md`.

---

## 5. Accessibility & responsive decisions

- Semantic `header` / `main` / `footer`, skip link, `aria-labelledby` on sections.
- Form fields labelled with `aria-invalid` / `aria-describedby`; client-side validation; **success state is never shown on failure**.
- Visible focus ring (brass-deep); hero alt text; `prefers-reduced-motion` honoured in CSS and smooth-scroll.
- **Brass contrast decision:** bright brass `oklch(75.5% .115 82)` is used only as a primary-button fill with ink text and for large accents — **never** as body or link text. Normal-size text uses brass-deep or ink to meet WCAG 2.2 AA. (Formal contrast measurement across all pairs is scheduled for Phase 4.)
- Mobile-first Tailwind layouts with a mobile nav panel; intended to validate at 360/390/768/1024/1440/1920px (full device-matrix QA is a Phase 5 task).

---

## 6. [CLIENT MUST SUPPLY] — no assumptions made

| Item | State |
|------|-------|
| Leadership bios & headshots | Names + job titles only; bios/photos are labeled placeholders. No bio text or qualifications invented. |
| Contact form endpoint, exact fields & validation rules | Form posts to a configurable env var (`VITE_CONTACT_ENDPOINT`); with no endpoint it does **not** fake success. |
| Referral programme reward structure / terms | Verbatim copy only; terms are a labeled placeholder. No amounts/terms invented. |
| Analytics / GA4 / Search Console ownership | Not configured; ownership + property IDs pending client confirmation. |
| Canonical host (`www` vs apex) | Currently `www`; confirm before go-live. |
| "Why KR Advisory Group" body / "How We Work" copy | Not verbatim-verifiable from inventory; labeled placeholders used. |

---

## 7. Git

Local commits on `main` (not pushed):
- `chore: scaffold react+vite+ts app with ssg and tailwind`
- `feat: add OKLCH design tokens, fonts, and reusable component library`
- `feat: add Home and Services pages with single-hash service anchors`
- `feat: add About, Contact, and Referral pages`
- `feat: add SEO layer - Head, JSON-LD, sitemap, robots, redirect`
- `docs: add SEO_URL_MAPPING with routes and 301 referral redirect`

Post-workflow cleanup (orchestrator): untracked internal `.agents/` workflow artifacts and added `.agents` to `.gitignore`.

---

## 8. Outstanding issues / next actions

- **Phase 3 — SEO implementation detail docs:** `ARCHITECTURE.md`, `SEO_IMPLEMENTATION.md` (SEO_URL_MAPPING.md already drafted).
- **Phase 4 — Accessibility, security & performance:** formal WCAG 2.2 AA audit (`ACCESSIBILITY_REPORT.md`), contrast measurement across all token pairs, CSP / `X-Frame-Options` / `Permissions-Policy` headers, Core Web Vitals optimisation.
- **Phase 5 — QA:** device-matrix responsive validation, Lighthouse, `QA_REPORT.md`.
- **Phase 6 — Deployment prep:** `DEPLOYMENT_GUIDE.md`, hosting recommendation (Cloudflare Pages / Vercel / Netlify), DNS/SSL preservation, rollback plan.
- **Client inputs** from §6 are required before go-live.
