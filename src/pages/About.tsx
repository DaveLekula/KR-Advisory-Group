import { Head } from '@/components/seo/Head';
import { JsonLd } from '@/components/seo/JsonLd';
import { founders, breadcrumbs } from '@/lib/jsonld';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Card } from '@/components/primitives/Card';
import { AudienceCard } from '@/components/cards/AudienceCard';
import { PageHero } from '@/components/layout/PageHero';
import { CtaBand } from '@/components/layout/CtaBand';
import { about, home } from '@/content/pages';
import { audiences } from '@/content/services';
import { leadership } from '@/content/business';
import { meta } from '@/routes';

/** Initials for the typographic monogram treatment (no portraits). */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .slice(0, 2)
    .join('');
}

export function About() {
  return (
    <>
      <Head {...meta['/about']} />
      <JsonLd data={[...founders(), breadcrumbs('About', '/about')]} />

      {/* (A) Interior hero — the single H1 for this page. */}
      <PageHero
        eyebrow={about.headingSub}
        title={about.heading}
        supporting={about.intro}
        image={home.heroImage}
      />

      {/* (B) Who We Are — editorial two-column on desktop, stacked on mobile. */}
      <Section className="bg-surface-ivory" aria-labelledby="about-who-we-are-title">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2
                id="about-who-we-are-title"
                className="font-display text-3xl text-ink sm:text-4xl"
              >
                Who We Are
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">{about.body}</p>
              <p className="mt-6 font-display text-2xl leading-snug text-ink">
                {about.belief}
              </p>
              <p className="mt-6 text-base text-muted-foreground">
                From{' '}
                <a className="text-ink underline hover:text-brass-deep" href="/services#accounting">
                  accounting
                </a>{' '}
                to{' '}
                <a className="text-ink underline hover:text-brass-deep" href="/services#audit-readiness">
                  audit readiness
                </a>
                , explore the full range of our{' '}
                <a className="text-ink underline hover:text-brass-deep" href="/services">
                  services
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* (C) Our Leadership — verified names/credentials/titles only; a brass
          monogram instead of any portrait. Bios are [NOT VERIFIED] and render
          as a clearly-labelled placeholder — never fabricated. */}
      <Section aria-labelledby="about-leadership-title">
        <Container>
          <h2 id="about-leadership-title" className="font-display text-3xl text-ink sm:text-4xl">
            Our Leadership
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {leadership.map((person) => (
              <Card as="article" key={person.name} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brass bg-surface-ivory font-display text-lg text-brass-deep"
                >
                  {initials(person.name)}
                </span>
                <div>
                  <h3 className="text-xl text-ink">
                    {person.name}, {person.credential}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-brass-deep">
                    {person.title}
                  </p>
                  {/*
                    [NOT VERIFIED] Individual biographies are JS-rendered on the
                    live site and not confirmed in server HTML. Render a clearly
                    labelled "to be confirmed" placeholder — do NOT fabricate.
                  */}
                  <p className="mt-4 text-sm italic text-muted-foreground">
                    {about.leadership.bioPlaceholder}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* (D) How We Work — the engagement-process steps are [NOT VERIFIED].
          Render a clearly-labelled client-confirmation placeholder rather than
          a fabricated numbered process. */}
      <Section className="bg-surface-stone" aria-labelledby="about-how-title">
        <Container className="max-w-3xl">
          <h2 id="about-how-title" className="font-display text-3xl text-ink sm:text-4xl">
            {about.howWeWork.heading}
          </h2>
          <p className="mt-6 rounded-lg border border-dashed border-border bg-background p-5 text-base italic text-muted-foreground">
            {about.howWeWork.bodyPlaceholder}
          </p>
        </Container>
      </Section>

      {/* (E) Who We Help — same three audience cards / 3-up grid as Home. */}
      <Section aria-labelledby="about-who-title">
        <Container>
          <h2 id="about-who-title" className="font-display text-3xl text-ink sm:text-4xl">
            {about.whoWeHelp.heading}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {audiences.map((audience) => (
              <AudienceCard key={audience.title} title={audience.title} body={audience.body} />
            ))}
          </div>
        </Container>
      </Section>

      {/* (F) Closing CTA band. */}
      <CtaBand
        id="about-cta-title"
        heading="Let's strengthen your business together."
        button={{ label: 'Book a Consultation', href: '/contact' }}
      />
    </>
  );
}

export default About;
