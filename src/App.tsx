import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

/**
 * Layout shell shared by every route: semantic header / main / footer with an
 * <Outlet/> for the active page. A skip link lands keyboard users on <main>.
 */
export function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
