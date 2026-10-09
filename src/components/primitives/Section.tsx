import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  'aria-labelledby'?: string;
}

/** Vertical rhythm wrapper for page sections. */
export function Section({ id, className, children, ...rest }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-24', className)} {...rest}>
      {children}
    </section>
  );
}
