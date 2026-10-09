import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from '@/routes';
import '@/index.css';

// vite-react-ssg entry. Routes come from the single source of truth in
// src/routes.tsx. createRoot is picked up by the SSG build and the dev server.
export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
});
