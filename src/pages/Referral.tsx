import { Head } from '@/components/seo/Head';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Card } from '@/components/primitives/Card';
import { Button } from '@/components/primitives/Button';
import { referral } from '@/content/pages';
import { meta } from '@/routes';

export function Referral() {
  return (
    <>
      <Head {...meta['/referral']} />

      {/* Intro */}
      <Section aria-labelledby="referral-title">
        <Container className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wide text-brass-deep">
            {referral.headingSub}
          </p>
          <h1 id="referral-title" className="mt-4 font-display text-4xl text-ink sm:text-5xl">
            {referral.heading}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">{referral.body}</p>
        </Container>
      </Section>

      {/* Reward structure — [NOT VERIFIED], placeholder only (no invented terms). */}
      <Section className="bg-muted" aria-labelledby="referral-rewards-title">
        <Container className="max-w-3xl">
          <h2 id="referral-rewards-title" className="font-display text-3xl text-ink">
            {referral.rewards.heading}
          </h2>
          {/*
            [NOT VERIFIED] Specific reward amounts, eligibility and terms are
            not stated in captured content and must be confirmed with the
            client. Do NOT invent amounts or terms.
          */}
          <p className="mt-6 rounded-lg border border-border bg-background p-4 text-muted-foreground">
            [CLIENT TO SUPPLY] Reward amounts, eligibility and programme terms
            to be confirmed by the client.
          </p>
        </Container>
      </Section>

      {/* CTA block */}
      <Section aria-labelledby="referral-cta-title">
        <Container>
          <Card className="flex flex-col gap-6 bg-ink text-background sm:flex-row sm:items-center sm:justify-between">
            <div className="sm:max-w-xl">
              <h2 id="referral-cta-title" className="font-display text-2xl text-background">
                {referral.cta.heading}
              </h2>
              <p className="mt-3 text-background/80">{referral.cta.body}</p>
            </div>
            <Button as="a" href="/contact" variant="primary">
              {referral.cta.buttonLabel}
            </Button>
          </Card>
        </Container>
      </Section>
    </>
  );
}

export default Referral;
