import { Head } from '@/components/seo/Head';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { meta } from '@/routes';

export function Referral() {
  return (
    <>
      <Head {...meta['/referral']} />
      <Section>
        <Container>
          <h1 className="text-4xl sm:text-5xl">Referral Programme</h1>
        </Container>
      </Section>
    </>
  );
}

export default Referral;
