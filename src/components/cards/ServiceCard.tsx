import { Card } from '@/components/primitives/Card';
import { WhatsAppCTA } from '@/components/layout/WhatsAppCTA';
import type { Service } from '@/content/services';

interface ServiceCardProps {
  service: Service;
}

/**
 * Numbered service block (01–07). Its `id` is the single-hash anchor target
 * used by /services#<id> deep links. Lists every "What this includes" item.
 */
export function ServiceCard({ service }: ServiceCardProps) {
  const headingId = `${service.id}-title`;
  return (
    <Card as="article" id={service.id} className="scroll-mt-24">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-brass-deep" aria-hidden="true">
          {service.number}
        </span>
        <h3 id={headingId} className="text-2xl">
          {service.title}
        </h3>
      </div>
      <p className="mt-2 text-muted-foreground">{service.promise}</p>

      <h4 className="mt-6 font-mono text-xs uppercase tracking-wide text-muted-foreground">
        What this includes
      </h4>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2" aria-labelledby={headingId}>
        {service.includes.map((item) => (
          <li key={item} className="flex gap-2 text-foreground">
            <span aria-hidden="true" className="text-brass-deep">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <WhatsAppCTA kind="consultation" />
        <WhatsAppCTA kind="question" variant="secondary" />
      </div>
    </Card>
  );
}
