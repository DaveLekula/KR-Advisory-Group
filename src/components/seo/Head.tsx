import type { ReactNode } from 'react';
import { Head as SSGHead } from 'vite-react-ssg';
import { canonical } from '@/lib/seo';

interface HeadProps {
  title: string;
  description: string;
  /** Route path for the canonical URL (e.g. "/services"). */
  path: string;
  children?: ReactNode;
}

/**
 * Thin wrapper around vite-react-ssg's <Head> that applies the per-route
 * title, meta description, and canonical URL consistently. Extra tags
 * (OG, JSON-LD, etc.) can be passed as children by later features.
 */
export function Head({ title, description, path, children }: HeadProps) {
  return (
    <SSGHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical(path)} />
      {children}
    </SSGHead>
  );
}
