import { Head } from '@/components/seo/Head';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { meta } from '@/routes';

export function Home() {
  return (
    <>
      <Head {...meta['/']} />
      <Section>
        <Container>
          <h1 className="text-4xl sm:text-5xl">
            Financial clarity. Stronger controls. Better business decisions.
          </h1>
        </Container>
      </Section>
    </>
  );
}

export default Home;
