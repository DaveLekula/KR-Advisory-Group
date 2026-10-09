import type { RouteRecord } from 'vite-react-ssg';
import { App } from '@/App';
import { Home } from '@/pages/Home';
import { Services } from '@/pages/Services';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { Referral } from '@/pages/Referral';

/**
 * SINGLE SOURCE OF TRUTH for routes. The per-route SEO meta lives in
 * src/content/seo.ts (pure data, re-exported here) so the Node sitemap
 * generator can read the paths without importing the React tree.
 * Consumed by:
 *   - vite-react-ssg (via src/main.tsx) to pre-render each page to HTML, and
 *   - src/scripts/generate-sitemap.ts (via content/seo.ts) for dist/sitemap.xml.
 * Add a route in one place only.
 */
export { meta, routePaths } from '@/content/seo';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    entry: 'src/App.tsx',
    children: [
      { index: true, Component: Home, entry: 'src/pages/Home.tsx' },
      { path: 'services', Component: Services, entry: 'src/pages/Services.tsx' },
      { path: 'about', Component: About, entry: 'src/pages/About.tsx' },
      { path: 'contact', Component: Contact, entry: 'src/pages/Contact.tsx' },
      { path: 'referral', Component: Referral, entry: 'src/pages/Referral.tsx' },
    ],
  },
];
