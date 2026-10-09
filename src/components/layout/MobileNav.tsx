import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { business, navLinks } from '@/content/business';
import { cn } from '@/lib/cn';

/**
 * Accessible mobile disclosure menu, styled to match the luxury sticky header.
 *
 * The toggle button sits on the header (transparent over the dark hero, or on
 * the navy glass bar) so it is WHITE for legibility in both states. The open
 * panel is a dark-navy glassmorphism surface (blur) with white text and gold
 * accents — consistent with the desktop header and the McKinsey/Deloitte/EY
 * reference. aria-expanded on the toggle, Escape to close, focus returns to the
 * toggle on close, and large (44px) touch targets.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      const firstLink = panelRef.current?.querySelector('a');
      (firstLink as HTMLElement | null)?.focus();
    }
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded border border-white/25 px-3 text-white transition-colors hover:border-brass hover:text-brass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <span aria-hidden="true">{open ? '✕' : '☰'}</span>
      </button>

      <div
        id="mobile-nav-panel"
        ref={panelRef}
        hidden={!open}
        className="mobile-nav-panel absolute inset-x-0 top-full"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'min-h-11 rounded px-3 py-2.5 text-base text-white/90 transition-colors hover:bg-white/5 hover:text-brass',
                  isActive && 'text-brass',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={business.whatsapp.consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary mt-2 inline-flex w-full items-center justify-center gap-2 rounded px-5 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Book a Consultation
          </a>
        </nav>
      </div>
    </div>
  );
}
