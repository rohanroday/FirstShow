"use client";

import { useEffect, useRef } from "react";

// Full-screen background video: muted, looping, plays on its own.
// Tall screens (phones, portrait tablets) get a vertical 9:16 cut framed on the people in each clip;
// wide screens get the 16:9 cut. Reduced-motion visitors get the matching still and no download.
const TALL = "(max-aspect-ratio: 1/1)";
export default function BackgroundHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (reduce.matches) {
        video.pause();
        return;
      }
      if (!video.getAttribute("src")) {
        video.src = matchMedia(TALL).matches ? "/hero/hero-bg-mobile.mp4" : "/hero/hero-bg.mp4";
      }
      video.play().catch(() => {});
    };
    apply();
    reduce.addEventListener("change", apply);
    return () => reduce.removeEventListener("change", apply);
  }, []);

  return (
    <section className="relative flex min-h-svh items-end overflow-hidden" aria-label="FIRSTSHOW">
      {/* Still frame shown until the video is playing, picked per screen shape */}
      <picture>
        <source media={TALL} srcSet="/hero/hero-bg-poster-mobile.jpg" />
        <img src="/hero/hero-bg-poster.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700"
        onPlaying={(e) => e.currentTarget.classList.remove("opacity-0")}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,14,12,0.97)_0%,rgba(18,14,12,0.85)_22%,rgba(18,14,12,0.35)_40%,rgba(18,14,12,0)_55%,rgba(18,14,12,0)_85%,rgba(18,14,12,0.5)_100%)] md:bg-[linear-gradient(to_top,rgba(18,14,12,0.95)_0%,rgba(18,14,12,0.55)_40%,rgba(18,14,12,0.15)_75%,rgba(18,14,12,0.45)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-8 pt-32 sm:px-6 sm:pb-20 md:pb-28" data-hero>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold sm:text-xs">Digital cinema · Coming soon</p>
        <h1 className="mt-3 max-w-[14ch] font-display text-[clamp(42px,9vw,128px)] sm:mt-4 uppercase leading-[0.92] [text-shadow:var(--tshadow)]">
          First Day. First Show. <span className="text-gold">From Home.</span>
        </h1>
        <p className="mt-4 max-w-[44ch] text-[15px] leading-snug text-cream/90 sm:mt-6 sm:text-lg sm:leading-normal [text-shadow:var(--tshadow)] sm:text-xl">
          Buy a digital cinema ticket and watch new releases on release day, at a real showtime, on your own screen.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
          <a href="#join" className="btn btn-gold">
            Save your seat
          </a>
          <a href="#demo" className="btn btn-ghost">
            ▶ See the app
          </a>
        </div>
      </div>
    </section>
  );
}
