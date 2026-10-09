import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Centred content column with consistent horizontal padding and max width. */
export function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </Tag>
  );
}
