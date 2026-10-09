"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Simple fade-ups. Rendered inside the page so it runs only after the page has hydrated.
//   [data-hero]          children fade up once on load
//   [data-anim]          fades up when it scrolls into view
//   [data-anim-stagger]  its children fade up one after another
// Phones get shorter moves and quicker timing so nothing feels sluggish on a small screen.
export default function PageAnimations() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      {
        phone: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      },
      (ctx) => {
        const { phone } = ctx.conditions as { phone: boolean };
        const y = phone ? 22 : 40;
        const duration = phone ? 0.75 : 1;
        const stagger = phone ? 0.07 : 0.1;
        const start = phone ? "top 92%" : "top 88%";

        gsap.fromTo(
          "[data-hero] > *",
          { autoAlpha: 0, y: phone ? 20 : 32 },
          { autoAlpha: 1, y: 0, duration: phone ? 0.9 : 1.1, ease: "power3.out", stagger: 0.1, delay: 0.15 },
        );

        gsap.utils.toArray<HTMLElement>("[data-anim]").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y,
            duration,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start, once: true },
          });
        });

        // On phones, cards stack in one column, so each child gets its own trigger
        // instead of waiting for the whole group to enter.
        gsap.utils.toArray<HTMLElement>("[data-anim-stagger]").forEach((el) => {
          if (phone) {
            Array.from(el.children).forEach((child) => {
              gsap.from(child, {
                autoAlpha: 0,
                y,
                duration,
                ease: "power3.out",
                scrollTrigger: { trigger: child, start, once: true },
              });
            });
          } else {
            gsap.from(el.children, {
              autoAlpha: 0,
              y,
              duration,
              ease: "power3.out",
              stagger,
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            });
          }
        });
      },
    );
    return () => mm.revert();
  }, []);

  return null;
}
