import { Card } from '@/components/primitives/Card';

interface AudienceCardProps {
  title: string;
  body: string;
}

/** "Who We Help" audience card, shared by Home and About. */
export function AudienceCard({ title, body }: AudienceCardProps) {
  return (
    <Card as="article">
      <h3 className="text-xl">{title}</h3>
      <p className="mt-3 text-muted-foreground">{body}</p>
    </Card>
  );
}
