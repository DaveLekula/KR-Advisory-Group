import { Head } from '@/components/seo/Head';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { meta } from '@/routes';

export function Contact() {
  return (
    <>
      <Head {...meta['/contact']} />
      <Section>
        <Container>
          <h1 className="text-4xl sm:text-5xl">Contact Us</h1>
        </Container>
      </Section>
    </>
  );
}

export default Contact;
