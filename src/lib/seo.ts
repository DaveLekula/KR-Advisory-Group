import { SITE_URL } from '../content/business';

export interface RouteMeta {
  title: string;
  description: string;
  /** Canonical path (leading slash). Combined with SITE_URL. */
  path: string;
}

/** Build an absolute canonical URL from a route path. */
export function canonical(pathname: string): string {
  const clean = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  return `${SITE_URL}${clean}`;
}

/** Absolute URL for the default Open Graph / Twitter share image. */
export function ogImage(): string {
  return `${SITE_URL}/hero.jpg`;
}
