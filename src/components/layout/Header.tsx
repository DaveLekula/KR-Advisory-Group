import { Link, NavLink } from 'react-router-dom';
import { business, navLinks } from '@/content/business';
import { Container } from '@/components/primitives/Container';
import { WhatsAppCTA } from '@/components/layout/WhatsAppCTA';
import { MobileNav } from '@/components/layout/MobileNav';
import { cn } from '@/lib/cn';

/** Global header: logo + 5 nav links + consultation CTA. Semantic header/nav. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2" aria-label={`${business.name} — home`}>
          <img src="/kr-logo.png" alt="" width={36} height={36} className="h-9 w-auto" />
          <span className="font-display text-lg text-ink">{business.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                cn(
                  'text-sm text-ink hover:text-brass-deep',
                  isActive && 'text-brass-deep',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppCTA kind="consultation" />
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
