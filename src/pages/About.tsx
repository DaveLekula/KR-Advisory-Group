import { Head } from '@/components/seo/Head';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Card } from '@/components/primitives/Card';
import { AudienceCard } from '@/components/cards/AudienceCard';
import { about } from '@/content/pages';
import { audiences } from '@/content/services';
import { leadership } from '@/content/business';
import { meta } from '@/routes';

export function About() {
  return (
    <>
      <Head {...meta['/about']} />

      {/* Intro */}
      <Section aria-labelledby="about-title">
        <Container className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wide text-brass-deep">
            {about.headingSub}
          </p>
          <h1 id="about-title" className="mt-4 font-display text-4xl text-ink sm:text-5xl">
            {about.heading}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">{about.intro}</p>
          <p className="mt-4 text-lg text-muted-foreground">{about.bodyPlaceholder}</p>
          <p className="mt-6 font-display text-2xl text-ink">{about.belief}</p>
        </Container>
      </Section>

      {/* Leadership — verified names/titles only; bios are [NOT VERIFIED]. */}
      <Section className="bg-muted" aria-labelledby="about-leadership-title">
        <Container>
          <h2 id="about-leadership-title" className="font-display text-3xl text-ink">
            {about.leadership.heading}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {leadership.map((person) => (
              <Card as="article" key={person.name}>
                <h3 className="text-xl text-ink">
                  {person.name}, {person.credential}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-brass-deep">
                  {person.title}
                </p>
                {/*
                  [NOT VERIFIED] Individual biography paragraphs and headshots
                  are JS-rendered on the live site and not confirmed in server
                  HTML. Render a clearly-labeled placeholder — do NOT fabricate.
                */}
                <p className="mt-4 text-muted-foreground">
                  {about.leadership.bioPlaceholder}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How We Work — copy [NOT VERIFIED], placeholder only. */}
      <Section aria-labelledby="about-how-title">
        <Container className="max-w-3xl">
          <h2 id="about-how-title" className="font-display text-3xl text-ink">
            {about.howWeWork.heading}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {about.howWeWork.bodyPlaceholder}
          </p>
        </Container>
      </Section>

      {/* Who We Help — same three audience cards as Home. */}
      <Section className="bg-muted" aria-labelledby="about-who-title">
        <Container>
          <h2 id="about-who-title" className="font-display text-3xl text-ink">
            {about.whoWeHelp.heading}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {audiences.map((audience) => (
              <AudienceCard key={audience.title} title={audience.title} body={audience.body} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default About;
