import { Head } from '@/components/seo/Head';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbs } from '@/lib/jsonld';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Button } from '@/components/primitives/Button';
import { PageHero } from '@/components/layout/PageHero';
import { CtaBand } from '@/components/layout/CtaBand';
import { referral, home } from '@/content/pages';
import { meta } from '@/routes';

export function Referral() {
  return (
    <>
      <Head {...meta['/referral']} />
      <JsonLd data={breadcrumbs('Referral Programme', '/referral')} />

      {/* (A) Interior hero — the single H1 for this page, with primary CTA. */}
      <PageHero
        eyebrow={referral.headingSub}
        title={referral.heading}
        supporting={referral.intro}
        image={home.heroImage}
        cta={{ label: referral.cta.buttonLabel, href: '/contact' }}
      />

      {/* (B) Programme Overview — verified intro copy. */}
      <Section className="bg-surface-ivory" aria-labelledby="referral-overview-title">
        <Container className="max-w-3xl">
          <h2
            id="referral-overview-title"
            className="font-display text-3xl text-ink sm:text-4xl"
          >
            Programme Overview
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {referral.intro}
          </p>
        </Container>
      </Section>

      {/*
        (C) How Referrals Work — the specific steps are [NOT VERIFIED] and are
        OMITTED here rather than fabricated.
        (D) Reward Structure — OMITTED from the public page. Reward amounts,
        eligibility and terms are [NOT VERIFIED]; the gap is documented in
        CONTENT_GAP_ANALYSIS.md. The [CLIENT TO SUPPLY] placeholder must NOT
        render as customer-facing copy, so no reward section appears below.
      */}

      {/* (E) Referral submission CTA — verified referral.cta block. */}
      <Section aria-labelledby="referral-cta-title">
        <Container>
          <div className="flex flex-col gap-6 rounded-lg border border-border bg-surface-stone p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="sm:max-w-xl">
              <h2 id="referral-cta-title" className="font-display text-2xl text-ink">
                {referral.cta.heading}
              </h2>
              <p className="mt-3 text-muted-foreground">{referral.cta.body}</p>
            </div>
            <Button as="a" href="/contact" variant="primary">
              {referral.cta.buttonLabel}
            </Button>
          </div>
        </Container>
      </Section>

      {/* (F) Final CTA band. */}
      <CtaBand
        id="referral-band-title"
        heading="Know a business that could benefit from better financial guidance?"
        button={{ label: 'Refer a Business', href: '/contact' }}
      />
    </>
  );
}

export default Referral;
