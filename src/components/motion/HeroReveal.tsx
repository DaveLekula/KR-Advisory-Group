import { useRef } from 'react';
import type { ElementType, ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import { GSAP_EASE, STAGGER, DURATION } from '@/animations/motionTokens';
import { loadGsap } from './gsap';

interface HeroRevealProps {
  /** Hero element to render. Defaults to 'section'. */
  as?: ElementType;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}

/**
 * GSAP-driven cinematic hero reveal: a line-by-line masked `<h1>` reveal
 * (`.hero-line-inner`), a staggered reveal of the non-heading hero elements
 * (`.hero-reveal`), and a scrubbed hero-image parallax on >= 768px.
 *
 * No-flash model (motion-design.md §3.1a / §3.2): the hidden pre-animation
 * state is pure CSS gated on `.hero-motion-ready`, which this component adds to
 * its own root INSIDE the `useGSAP` layout pass — so the hidden-class landing
 * and the first tween commit in one layout pass, before paint. GSAP only ever
 * animates FROM the CSS-hidden state TOWARD visible; it never hides a painted
 * element.
 *
 * FIXED DECISIONS honoured:
 *  - `motionAllowed` is a DIRECT `window.matchMedia` read inside the effect body
 *    (never a render/hook value).
 *  - `useGSAP` runs with an EMPTY dependency array (mount-only); `motionAllowed`
 *    is NOT in any deps array.
 *  - Targets are selected via the scoped root, so markers absent on interior
 *    heroes (CTA/chips/scroll cue) simply contribute nothing — no dead selector,
 *    no error.
 */
export function HeroReveal({ as, className, children, ...rest }: HeroRevealProps) {
  const Component = as ?? 'section';
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const motionAllowed =
        typeof window !== 'undefined' &&
        'IntersectionObserver' in window &&
        typeof window.matchMedia === 'function' &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!motionAllowed) return;

      // Add the hidden-state gate in the SAME layout commit as the first tween.
      root.classList.add('hero-motion-ready');

      let cancelled = false;

      void loadGsap().then((bundle) => {
        if (cancelled || !bundle) {
          // Import failed or component unmounted: ensure nothing stays hidden.
          if (!bundle) root.classList.remove('hero-motion-ready');
          return;
        }

        const { gsap } = bundle;

        gsap.context(() => {
          const lineInners = gsap.utils.toArray<HTMLElement>('.hero-line-inner');
          const reveals = gsap.utils.toArray<HTMLElement>('.hero-reveal');
          const img = root.querySelector<HTMLElement>('[data-hero-parallax]');

          try {
            const tl = gsap.timeline({ defaults: { ease: GSAP_EASE } });

            if (lineInners.length > 0) {
              tl.to(lineInners, {
                y: 0,
                autoAlpha: 1,
                filter: 'blur(0px)',
                stagger: STAGGER.heroLines,
                duration: DURATION.heroLine,
              });
            }

            if (reveals.length > 0) {
              tl.to(
                reveals,
                {
                  y: 0,
                  autoAlpha: 1,
                  stagger: STAGGER.group,
                  duration: DURATION.heroPara,
                },
                '<0.1',
              );
            }

            if (img) {
              gsap.matchMedia().add('(min-width: 768px)', () => {
                gsap.set(img, { scale: 1.08 });
                gsap.fromTo(
                  img,
                  { yPercent: 4 },
                  {
                    yPercent: -4,
                    ease: 'none',
                    scrollTrigger: {
                      trigger: root,
                      start: 'top top',
                      end: 'bottom top',
                      scrub: true,
                    },
                  },
                );
              });
            }
          } catch {
            // Any failure: clear inline styles so elements fall back to the
            // CSS resting (visible) state.
            const targets = [...lineInners, ...reveals, ...(img ? [img] : [])];
            if (targets.length > 0) gsap.set(targets, { clearProps: 'all' });
            root.classList.remove('hero-motion-ready');
          }
        }, root);
      });

      return () => {
        cancelled = true;
      };
    },
    { scope: rootRef, dependencies: [] },
  );

  return (
    <Component ref={rootRef} className={className} {...rest}>
      {children}
    </Component>
  );
}
