import { Link } from 'react-router-dom';
import { business, leadership, socials } from '@/content/business';
import { services } from '@/content/services';
import { Container } from '@/components/primitives/Container';

/** Global footer: address, brand line, leadership, service + contact links, socials, copyright. */
export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-lg text-ink">{business.name}</p>
            <p className="mt-2 max-w-sm text-muted-foreground">{business.brandLine}</p>
            <address className="mt-4 not-italic text-muted-foreground">
              {business.address}
            </address>
            <p className="mt-4 text-muted-foreground">
              {leadership.map((l) => (
                <span key={l.name} className="block">
                  {l.name}, {l.credential} — {l.title}
                </span>
              ))}
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              Our Services
            </h2>
            <ul className="mt-3 space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.id}`}
                    className="text-sm text-ink hover:text-brass-deep"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              Contact
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={business.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-brass-deep"
                >
                  WhatsApp {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.emails.general}`}
                  className="text-ink hover:text-brass-deep"
                >
                  {business.emails.general}
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-ink hover:text-brass-deep">
                  Contact page
                </Link>
              </li>
            </ul>

            <h2 className="mt-6 font-mono text-xs uppercase tracking-wide text-muted-foreground">
              Follow
            </h2>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-brass-deep"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{business.copyright}</p>
          <p>{business.locality}</p>
        </div>
      </Container>
    </footer>
  );
}
