import { Head } from '@/components/seo/Head';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { meta } from '@/routes';

export function About() {
  return (
    <>
      <Head {...meta['/about']} />
      <Section>
        <Container>
          <h1 className="text-4xl sm:text-5xl">About Us</h1>
        </Container>
      </Section>
    </>
  );
}

export default About;
