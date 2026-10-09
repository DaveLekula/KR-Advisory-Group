# SEO URL Mapping

Canonical URL structure for the KR Advisory Group website rebuild, plus the
redirect rules that preserve link equity from legacy paths.

Base URL: `https://www.kradvisorygroup.co.za`

## Canonical routes

| Route       | Canonical URL                                      | Page           |
| ----------- | -------------------------------------------------- | -------------- |
| `/`         | `https://www.kradvisorygroup.co.za`                | Home           |
| `/services` | `https://www.kradvisorygroup.co.za/services`       | Services       |
| `/about`    | `https://www.kradvisorygroup.co.za/about`          | About          |
| `/contact`  | `https://www.kradvisorygroup.co.za/contact`        | Contact        |
| `/referral` | `https://www.kradvisorygroup.co.za/referral`       | Referral       |

All five routes are emitted as crawlable static HTML (SSG) and listed in
`dist/sitemap.xml`. Each page carries a per-route `<title>`, meta description,
and self-referencing `<link rel="canonical">`.

## In-page service anchors (single-hash)

The Services page uses single-hash fragment anchors (the earlier production site
had broken double-hash `##` links; those are fixed). Deep links:

| Anchor                              | Service section   |
| ----------------------------------- | ----------------- |
| `/services#accounting`              | Accounting        |
| `/services#tax`                     | Taxation          |
| `/services#internal-audit`          | Internal Audit    |
| `/services#audit-readiness`         | Audit Readiness   |
| `/services#business-advisory`       | Business Advisory |
| `/services#funding-support`         | Funding Support   |
| `/services#public-sector`           | Public Sector     |

## Redirects

### 301 — legacy referral path

| From                   | To          | Status |
| ---------------------- | ----------- | ------ |
| `/referral-programme`  | `/referral` | 301    |

This is a permanent redirect so the legacy `/referral-programme` path keeps its
link equity and lands on the current `/referral` route.

Implemented in a host-agnostic way for all three target platforms:

- **Netlify / Cloudflare Pages** — `public/_redirects`:
  ```
  /referral-programme  /referral  301
  ```
- **Vercel** — `vercel.json`:
  ```json
  { "source": "/referral-programme", "destination": "/referral", "permanent": true }
  ```

Keep both files in sync if the rule changes.

## Notes

- `robots.txt` references the sitemap: `Sitemap: https://www.kradvisorygroup.co.za/sitemap.xml`.
- The canonical host includes the `www` subdomain; if the client later confirms a
  different canonical host, update the base URL in the sitemap generator,
  canonical tags, and this document together. **[NOT VERIFIED]** canonical host
  (`www` vs apex) pending client confirmation.
