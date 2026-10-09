"use client";

import { useEffect, useState } from "react";

// The 40-second demo film (public/demo.mp4) plus a clickable app preview.
const VIDEO_SRC = "/demo.mp4";
const POSTER_SRC = "/demo-poster.jpg";

const STEPS = ["Browse", "Showtime", "Pay", "Ticket", "Watch"] as const;

const FILMS = [
  { title: "Monsoon Letters", lang: "Marathi · Drama", hue: "from-sky-700 to-indigo-950" },
  { title: "Kaali Raat", lang: "Hindi · Thriller", hue: "from-red-700 to-zinc-950" },
  { title: "Dhol Baaje", lang: "Punjabi · Comedy", hue: "from-amber-500 to-orange-900" },
];

export default function DemoShowcase() {
  const [hasVideo, setHasVideo] = useState(false);
  const [mode, setMode] = useState<"video" | "preview">("preview");

  useEffect(() => {
    fetch(VIDEO_SRC, { method: "HEAD" })
      .then((r) => {
        const isVideo = r.ok && (r.headers.get("content-type") ?? "").startsWith("video");
        if (isVideo) {
          setHasVideo(true);
          setMode("video");
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      {hasVideo && (
        <div className="mb-5 flex justify-center gap-2">
          {(["video", "preview"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                mode === m ? "bg-gold text-ink" : "bg-surface-2 text-muted hover:text-cream"
              }`}
            >
              {m === "video" ? "Watch the film" : "Try the app"}
            </button>
          ))}
        </div>
      )}

      <div className="mx-auto max-w-4xl rounded-[22px] border border-line bg-surface p-2 shadow-[0_40px_120px_-40px_#f2b54440] sm:p-3">
        <div
          className={`relative overflow-hidden rounded-[14px] bg-ink ${
            mode === "video" && hasVideo ? "aspect-video" : "aspect-[4/5] sm:aspect-video"
          }`}
        >
          {mode === "video" && hasVideo ? (
            <video
              className="h-full w-full object-cover"
              src={VIDEO_SRC}
              poster={POSTER_SRC}
              controls
              preload="none"
              playsInline
            />
          ) : (
            <AppPreview autoplay={false} />
          )}
        </div>
      </div>
    </div>
  );
}

function AppPreview({ autoplay = true }) {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(!autoplay);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setStep((s) => (s + 1) % STEPS.length), 3200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="absolute inset-0 flex flex-col">
      {/* App chrome */}
      <div className="flex items-center justify-between border-b border-white/10 bg-ink/80 px-4 py-2.5 text-[11px] sm:text-xs">
        <span className="font-display text-base tracking-wider text-gold sm:text-lg">FIRSTSHOW</span>
        <span className="text-muted">Friday · Release day</span>
      </div>

      <div className="relative flex-1">
        {STEPS.map((_, i) => (
          <div
            key={i}
            className={`absolute inset-0 p-4 transition-all duration-500 sm:p-6 ${
              i === step ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
            }`}
          >
            <Screen index={i} />
          </div>
        ))}
      </div>

      {/* Step rail */}
      <div className="flex border-t border-white/10 bg-ink/80">
        {STEPS.map((label, i) => (
          <button
            key={label}
            onClick={() => {
              setStep(i);
              setPaused(true);
            }}
            className={`flex-1 py-2 text-[10px] uppercase tracking-wider transition sm:text-xs ${
              i === step ? "text-gold" : "text-muted hover:text-cream"
            }`}
          >
            <span
              className={`mx-auto mb-1 block h-0.5 w-6 rounded ${i === step ? "bg-gold" : "bg-white/15"}`}
            />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Screen({ index }: { index: number }) {
  const film = FILMS[0];

  if (index === 0)
    return (
      <div className="flex h-full flex-col">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gold sm:text-xs">Releasing today</p>
        <div className="mt-3 grid flex-1 grid-cols-3 gap-2 sm:gap-4">
          {FILMS.map((f, i) => (
            <div
              key={f.title}
              className={`flex flex-col justify-end rounded-lg bg-gradient-to-b ${f.hue} p-2 sm:p-3 ${
                i === 0 ? "ring-2 ring-gold" : "opacity-80"
              }`}
            >
              <p className="font-display text-sm leading-none sm:text-2xl">{f.title}</p>
              <p className="mt-1 text-[9px] text-white/70 sm:text-xs">{f.lang}</p>
            </div>
          ))}
        </div>
      </div>
    );

  if (index === 1)
    return (
      <div className="flex h-full gap-4">
        <div className={`hidden w-1/3 rounded-lg bg-gradient-to-b ${film.hue} sm:block`} />
        <div className="flex flex-1 flex-col justify-center">
          <p className="font-display text-2xl sm:text-4xl">{film.title}</p>
          <p className="text-xs text-muted">{film.lang} · 2h 14m · U/A 13+</p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-muted sm:text-xs">Pick a showtime</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {["4:00 PM", "7:30 PM", "10:15 PM"].map((t) => (
              <span
                key={t}
                className={`rounded-md border px-3 py-1.5 text-xs sm:text-sm ${
                  t === "7:30 PM" ? "border-gold bg-gold-soft text-gold" : "border-white/15 text-muted"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm">
            Digital ticket <span className="font-semibold text-gold">₹299</span>
            <span className="text-muted"> · whole household</span>
          </p>
        </div>
      </div>
    );

  if (index === 2)
    return (
      <div className="mx-auto flex h-full max-w-sm flex-col justify-center gap-2 text-xs sm:text-sm">
        <p className="font-display text-2xl">Checkout</p>
        <Row k={film.title} v="7:30 PM show" />
        <Row k="Digital ticket" v="₹299" />
        <Row k="Device" v="Living-room TV" />
        <div className="mt-3 rounded-md bg-gold py-2 text-center font-semibold text-ink">Paid via UPI ✓</div>
      </div>
    );

  if (index === 3)
    return (
      <div className="flex h-full items-center justify-center">
        <div className="ticket flex w-full max-w-md overflow-hidden rounded-xl bg-cream text-ink">
          <div className="flex-1 p-4 sm:p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Admit one household</p>
            <p className="font-display text-2xl leading-none sm:text-3xl">{film.title}</p>
            <p className="mt-2 text-xs text-zinc-600">Fri · 7:30 PM · Screen: Living-room TV</p>
            <p className="mt-3 text-xs font-semibold text-red">Doors open 7:15 PM</p>
          </div>
          <div className="flex w-24 items-center justify-center border-l-2 border-dashed border-zinc-300 sm:w-28">
            <QrBlock />
          </div>
        </div>
      </div>
    );

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-950 via-zinc-900 to-black">
      <p className="font-display text-3xl text-white/80 sm:text-5xl">{film.title}</p>
      <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded bg-red px-2 py-0.5 text-[10px] font-semibold uppercase">
        <span className="live-dot h-1.5 w-1.5 rounded-full bg-white" /> Live show
      </span>
      <span className="absolute bottom-10 left-4 font-mono text-[9px] text-white/25">
        FS·7F3A·TXN0192·19:31
      </span>
      <div className="absolute inset-x-4 bottom-4 h-1 rounded bg-white/15">
        <div className="h-full w-1/5 rounded bg-gold" />
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-white/10 py-1.5">
      <span className="text-muted">{k}</span>
      <span>{v}</span>
    </div>
  );
}

function QrBlock() {
  // Decorative, deterministic pattern standing in for a ticket code
  const cells = Array.from({ length: 49 }, (_, i) => (Math.imul(i + 7, 2654435761) >>> 0) % 7 < 3);
  return (
    <div className="grid grid-cols-7 gap-px">
      {cells.map((on, i) => (
        <span key={i} className={`h-2 w-2 ${on ? "bg-ink" : "bg-transparent"}`} />
      ))}
    </div>
  );
}
