import type { ReactNode } from 'react';
import { Head as SSGHead } from 'vite-react-ssg';
import { canonical, ogImage } from '@/lib/seo';
import { business } from '@/content/business';

interface HeadProps {
  title: string;
  description: string;
  /** Route path for the canonical URL (e.g. "/services"). */
  path: string;
  children?: ReactNode;
}

/**
 * Thin wrapper around vite-react-ssg's <Head> that applies the per-route
 * title, meta description, canonical URL, and Open Graph + Twitter card
 * tags consistently. Extra tags (JSON-LD, etc.) can be passed as children.
 */
export function Head({ title, description, path, children }: HeadProps) {
  const url = canonical(path);
  const image = ogImage();

  return (
    <SSGHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={business.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {children}
    </SSGHead>
  );
}
