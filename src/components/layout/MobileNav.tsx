import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '@/content/business';
import { WhatsAppCTA } from '@/components/layout/WhatsAppCTA';
import { cn } from '@/lib/cn';

/**
 * Accessible mobile disclosure menu: aria-expanded on the toggle, Escape to
 * close, focus returns to the toggle on close, and large touch targets.
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
      // Move focus into the opened panel for keyboard users.
      const firstLink = panelRef.current?.querySelector('a');
      (firstLink as HTMLElement | null)?.focus();
    }
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded border border-border px-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-deep focus-visible:ring-offset-2"
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
        className="absolute inset-x-0 top-full border-b border-border bg-background shadow-md"
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
                  'min-h-11 rounded px-3 py-2.5 text-base text-ink hover:bg-muted',
                  isActive && 'text-brass-deep',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <WhatsAppCTA kind="consultation" className="mt-2 w-full" />
        </nav>
      </div>
    </div>
  );
}
