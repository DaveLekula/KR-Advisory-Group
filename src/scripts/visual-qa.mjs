// Phase 2.5 Visual QA capture script.
// Drives the system Edge (Chromium) via playwright-core, headless, to screenshot
// all routes at all required viewports and collect layout diagnostics.
import { chromium } from 'playwright-core';
import { mkdirSync, writeFileSync } from 'node:fs';
import { existsSync } from 'node:fs';

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const BASE = process.env.QA_BASE || 'http://127.0.0.1:4178';
const OUT = 'qa-screenshots';

const routes = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
  { name: 'referral', path: '/referral' },
];
const viewports = [
  { w: 360, h: 800 },
  { w: 390, h: 844 },
  { w: 768, h: 1024 },
  { w: 1024, h: 768 },
  { w: 1440, h: 900 },
  { w: 1920, h: 1080 },
];

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ executablePath: EDGE, headless: true });
const diagnostics = [];

for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.w, height: vp.h },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  for (const r of routes) {
    const url = BASE + r.path;
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(350); // allow fonts/layout to settle

    // Diagnostics gathered in-page
    const diag = await page.evaluate((viewportWidth) => {
      const docW = document.documentElement.scrollWidth;
      const clientW = document.documentElement.clientWidth;
      const horizontalOverflow = docW > clientW + 1;
      const logo = document.querySelector('header img, header svg, [data-logo]');
      const logoOk = !!logo && (logo.tagName.toLowerCase() === 'svg' ||
        (logo.complete !== false && (logo.naturalWidth === undefined || logo.naturalWidth > 0)));
      const h1s = Array.from(document.querySelectorAll('h1')).map(h => h.textContent.trim());
      const header = !!document.querySelector('header');
      const footer = !!document.querySelector('footer');
      const nav = !!document.querySelector('nav');
      // mobile nav toggle (button with aria-expanded or aria-controls, hamburger)
      const mobileToggle = document.querySelector('header button[aria-expanded], header button[aria-controls], button[aria-label*="menu" i]');
      const bodyFont = getComputedStyle(document.body).fontFamily;
      const h1Font = document.querySelector('h1') ? getComputedStyle(document.querySelector('h1')).fontFamily : '';
      // count obvious CTAs
      const waCtas = document.querySelectorAll('a[href*="wa.me"]').length;
      return {
        docW, clientW, horizontalOverflow, logoOk, h1Count: h1s.length, h1s,
        header, footer, nav, mobileTogglePresent: !!mobileToggle,
        bodyFont, h1Font, waCtas,
      };
    }, vp.w);

    diagnostics.push({ route: r.name, viewport: `${vp.w}x${vp.h}`, ...diag });

    const file = `${OUT}/${r.name}-${vp.w}.png`;
    await page.screenshot({ path: file, fullPage: true });
  }
  await ctx.close();
}

// Mobile-nav interaction test at 360px on home
{
  const ctx = await browser.newContext({ viewport: { width: 360, height: 800 } });
  const page = await ctx.newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  const toggle = await page.$('header button[aria-expanded], header button[aria-controls], button[aria-label*="menu" i]');
  let mobileNavResult = { toggleFound: !!toggle, opened: false, linksVisible: 0 };
  if (toggle) {
    await toggle.click();
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${OUT}/home-360-menu-open.png`, fullPage: false });
    mobileNavResult.opened = true;
    mobileNavResult.linksVisible = await page.evaluate(() => {
      const panel = document.querySelector('[role="dialog"], nav[aria-label], #mobile-nav, [data-mobile-nav]');
      const links = document.querySelectorAll('a');
      return Array.from(links).filter(a => a.offsetParent !== null && a.getBoundingClientRect().height > 0).length;
    });
  }
  diagnostics.push({ route: 'home', viewport: '360x800', mobileNav: mobileNavResult });
  await ctx.close();
}

await browser.close();
writeFileSync(`${OUT}/diagnostics.json`, JSON.stringify(diagnostics, null, 2));
console.log('VISUAL QA CAPTURE COMPLETE');
console.log(`Screenshots: ${routes.length * viewports.length} + mobile-nav`);

// Print a quick overflow / structure summary
const problems = diagnostics.filter(d => d.horizontalOverflow || d.header === false || d.footer === false || d.logoOk === false || (d.h1Count !== undefined && d.h1Count !== 1));
console.log('POTENTIAL ISSUES:', JSON.stringify(problems, null, 2));
