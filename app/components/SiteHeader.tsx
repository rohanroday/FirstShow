"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#live", label: "Live events" },
  { href: "#cinema", label: "Virtual cinema" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6" aria-label="Main">
        <a href="#main" aria-label="LIVE SHOW home" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <div className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-cream">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="#join" className="btn btn-gold !px-4 !py-2.5 text-sm sm:!px-5" onClick={() => setOpen(false)}>
            Save your seat
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line-strong lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-cream transition-transform duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-cream transition-transform duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Phone menu */}
      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <ul className="border-t border-white/5 px-4 pb-4 pt-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 font-display text-2xl uppercase tracking-wide text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
