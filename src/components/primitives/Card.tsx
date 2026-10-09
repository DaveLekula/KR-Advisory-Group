import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface CardProps {
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
}

/** The single reusable surface: one radius, one shadow, consistent spacing. */
export function Card({ as: Tag = 'div', id, className, children }: CardProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'rounded-lg border border-border bg-background p-6 shadow-sm sm:p-8',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
