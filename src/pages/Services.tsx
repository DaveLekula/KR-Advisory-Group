import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Head } from '@/components/seo/Head';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { services } from '@/content/services';
import { scrollToHash } from '@/lib/scroll';
import { meta } from '@/routes';

export function Services() {
  const { hash } = useLocation();

  // Single-hash deep-link support (/services#accounting), replacing the
  // production double-hash defect. Respects prefers-reduced-motion.
  useEffect(() => {
    if (hash) scrollToHash(hash);
  }, [hash]);

  return (
    <>
      <Head {...meta['/services']} />
      <Section>
        <Container>
          <h1 className="text-4xl sm:text-5xl">Our Services</h1>
          <div className="mt-10 grid gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Services;
