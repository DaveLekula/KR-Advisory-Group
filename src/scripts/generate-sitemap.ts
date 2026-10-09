/**
 * Generates dist/sitemap.xml from the single source of truth (routePaths in
 * src/routes.tsx), so the sitemap can never drift from the rendered routes.
 * Runs after `vite-react-ssg build` (see package.json "build").
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { routePaths } from '../content/seo.ts';
import { SITE_URL } from '../content/business.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../../dist');

function urlFor(routePath: string): string {
  const clean = routePath === '/' ? '' : routePath.replace(/\/$/, '');
  return `${SITE_URL}${clean}`;
}

async function main() {
  const today = new Date().toISOString().slice(0, 10);

  const urls = routePaths
    .map(
      (p) =>
        `  <url>\n    <loc>${urlFor(p)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  await mkdir(distDir, { recursive: true });
  await writeFile(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');
  // eslint-disable-next-line no-console
  console.log(`[sitemap] wrote ${routePaths.length} urls to dist/sitemap.xml`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('[sitemap] failed:', err);
  process.exit(1);
});
