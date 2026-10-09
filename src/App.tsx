import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

/**
 * Layout shell shared by every route: semantic header / main / footer with an
 * <Outlet/> for the active page. A skip link lands keyboard users on <main>.
 *
 * The header is position:fixed (so it can be transparent over the home hero and
 * transition to glass on scroll). Home's hero is full-bleed and sits under the
 * header by design; every other route needs top padding equal to the header
 * height (h-16 = 4rem) so its first section isn't hidden behind the fixed bar.
 */
export function App() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className={isHome ? undefined : 'pt-16'}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
