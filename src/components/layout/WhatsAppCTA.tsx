import { Button } from '@/components/primitives/Button';
import { business } from '@/content/business';

interface WhatsAppCTAProps {
  /** 'consultation' => book a consultation; 'question' => I have a question. */
  kind?: 'consultation' | 'question';
  variant?: 'primary' | 'secondary';
  className?: string;
}

const labels: Record<'consultation' | 'question', string> = {
  consultation: 'Book a Consultation',
  question: 'WhatsApp Us',
};

/**
 * Consistent WhatsApp CTA. Opens wa.me with the prefilled message observed on
 * the live site. Reused everywhere a WhatsApp action appears.
 */
export function WhatsAppCTA({
  kind = 'consultation',
  variant = 'primary',
  className,
}: WhatsAppCTAProps) {
  const href =
    kind === 'consultation'
      ? business.whatsapp.consultationUrl
      : business.whatsapp.questionUrl;

  return (
    <Button
      as="a"
      href={href}
      variant={variant}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {labels[kind]}
    </Button>
  );
}
