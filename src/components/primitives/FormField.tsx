import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  /** The input/select/textarea control. Receives id + aria wiring below. */
  children: (aria: {
    id: string;
    'aria-invalid': boolean | undefined;
    'aria-describedby': string | undefined;
  }) => ReactNode;
}

/**
 * Label + control + accessible error. Wires aria-invalid and aria-describedby
 * so screen readers announce validation errors.
 */
export function FormField({ id, label, error, className, children }: FormFieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </label>
      {children({
        id,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': error ? errorId : undefined,
      })}
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-brass-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
