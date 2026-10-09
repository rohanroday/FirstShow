import Image from "next/image";
import DemoShowcase from "./components/DemoShowcase";
import PageAnimations from "./components/PageAnimations";
import SiteHeader from "./components/SiteHeader";
import BackgroundHero from "./components/BackgroundHero";
import WaitlistForm from "./components/WaitlistForm";

const PAINS = [
  { k: "01", title: "No cinema nearby", body: "For many families the closest screen is a long trip away. So the new film waits." },
  { k: "02", title: "Four tickets add up", body: "Tickets, snacks, travel, parking. A family night out costs a lot before the film starts." },
  { k: "03", title: "Small films, few shows", body: "Regional and indie releases often get one or two shows a day. Then they are gone." },
];

const STEPS = [
  { n: "01", title: "Pick a new release", body: "See what opens this Friday, in the language you love." },
  { n: "02", title: "Book a showtime", body: "4 PM, 7:30 PM, 10:15 PM. Real show slots, like the cinema." },
  { n: "03", title: "Get your ticket", body: "One ticket for the household, locked to the screen you choose." },
  { n: "04", title: "Doors open", body: "The film starts at showtime. Popcorn is your department." },
];

const COMPARE: [string, string, string][] = [
  ["When you watch", "Release day, at a showtime", "Weeks or months later"],
  ["What you pay for", "One film, one show", "A monthly catalogue"],
  ["The feeling", "An event the family plans for", "Something on in the background"],
  ["Who earns", "Filmmaker, theatre partner, platform", "Mostly the platform"],
];

const SECURITY = [
  {
    title: "A mark on every stream",
    body: "An invisible watermark ties each stream to the ticket that played it.",
    icon: <path d="M4 12c3-5 13-5 16 0-3 5-13 5-16 0Zm8-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />,
  },
  {
    title: "One ticket, one screen",
    body: "A ticket plays on the screen it was booked for, and nowhere else.",
    icon: <path d="M3 5h18v11H3zM8 20h8M12 16v4" />,
  },
  {
    title: "Region and time locks",
    body: "A show plays only in approved regions, at approved times.",
    icon: <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2" />,
  },
  {
    title: "Leaks shut down mid-show",
    body: "Suspicious sessions get flagged and stopped while the film is still playing.",
    icon: <path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6l-8-3Zm-3 9 2 2 4-4" />,
  },
];

const FAQ = [
  { q: "Is this legal?", a: "Yes. Every film on FIRSTSHOW is shown under a direct agreement with its rights holder. No agreement, no show." },
  { q: "How many screens can one ticket use?", a: "One. Your ticket is locked to the screen you pick when you book, for that one show." },
  { q: "What if I start late?", a: "Like a cinema, the show has a start time. We plan a short grace window so a late start does not cost you the film." },
  { q: "What stops people from recording it?", a: "Every stream carries an invisible mark tied to the ticket that played it. A leaked copy points straight back to its source, and that account is closed." },
  { q: "Which films will be on it?", a: "We start with regional and independent releases that get too few screens. Bigger films follow as producers join." },
  { q: "Is FIRSTSHOW live?", a: "Not yet. This is a concept preview. Save your seat and we will tell you before the first show." },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main" tabIndex={-1} className="outline-none">
        <BackgroundHero />

        {/* The problem: statement left, stubs right */}
        <section id="why" className="scroll-mt-20 px-5 py-28 sm:px-6 md:py-36">
          <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
            <div data-anim>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">The Friday problem</p>
              <h2 className="mt-4 max-w-[14ch] font-display text-5xl uppercase leading-[0.95] sm:text-7xl">
                Big films get the screens. Everyone else waits.
              </h2>
            </div>
            <ol className="flex flex-col" data-anim-stagger>
              {PAINS.map((p) => (
                <li key={p.k} className="grid grid-cols-[56px_1fr] items-baseline border-t border-line py-7 last:border-b">
                  <span className="font-mono text-sm text-muted">{p.k}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 max-w-[46ch] text-muted">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="scroll-mt-20 border-y border-line bg-surface/60 px-5 py-28 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center" data-anim>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">How it works</p>
              <h2 className="mt-4 font-display text-5xl uppercase sm:text-6xl">A cinema ticket. Your screen.</h2>
            </div>
            <div className="relative mt-16">
              <svg className="absolute left-0 right-0 top-[22px] hidden h-2 w-full md:block" preserveAspectRatio="none" viewBox="0 0 100 2" aria-hidden="true">
                <path d="M0 1H100" pathLength={1} stroke="#6b5747" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
              </svg>
              <ol className="grid gap-10 md:grid-cols-4 md:gap-6" data-anim-stagger>
                {STEPS.map((s) => (
                  <li key={s.n} className="relative">
                    <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-line-strong bg-ink font-mono text-sm text-gold">
                      {s.n}
                    </span>
                    <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 max-w-[30ch] text-muted">{s.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* The app */}
        <section id="demo" className="scroll-mt-20 px-5 py-28 sm:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center" data-anim>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">See the app</p>
            <h2 className="mt-4 font-display text-5xl uppercase sm:text-6xl">From booking to showtime</h2>
          </div>
          <div data-anim>
            <DemoShowcase />
          </div>
        </section>

        {/* Ticket vs OTT */}
        <section className="px-5 py-28 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-5xl uppercase sm:text-6xl" data-anim>Not another subscription</h2>
            <div className="mt-12 overflow-hidden rounded-2xl border border-line" data-anim role="table" aria-label="FIRSTSHOW ticket compared with a typical OTT subscription">
              <div role="row" className="grid grid-cols-[1fr_1.2fr_1.2fr] bg-surface-2 font-mono text-[11px] uppercase tracking-wider text-muted sm:text-xs">
                <span role="columnheader" className="p-3 sm:p-4"><span className="sr-only">Topic</span></span>
                <span role="columnheader" className="p-3 text-gold sm:p-4">FIRSTSHOW ticket</span>
                <span role="columnheader" className="p-3 sm:p-4">Typical OTT</span>
              </div>
              {COMPARE.map(([k, a, b]) => (
                <div role="row" key={k} className="grid grid-cols-[1fr_1.2fr_1.2fr] items-baseline border-t border-line text-sm sm:text-base">
                  <span role="rowheader" className="p-3 text-muted sm:p-4">{k}</span>
                  <span role="cell" className="p-3 font-medium sm:p-4">{a}</span>
                  <span role="cell" className="p-3 text-muted sm:p-4">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners: one large card, two stacked */}
        <section id="partners" className="scroll-mt-20 px-5 py-28 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl" data-anim>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Everyone earns from an extra ticket</p>
              <h2 className="mt-4 font-display text-5xl uppercase leading-[0.95] sm:text-6xl">Built for the whole film world</h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 md:grid-rows-2" data-anim-stagger>
              <article className="relative overflow-hidden rounded-3xl border border-line md:row-span-2">
                <Image src="/hero/tap.jpg" alt="" width={1920} height={1080} sizes="(min-width: 768px) 50vw, 100vw" className="h-64 w-full object-cover md:h-80" />
                <div className="p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">For audiences</p>
                  <h3 className="mt-3 font-display text-4xl uppercase leading-none">The first show, without the trip.</h3>
                  <p className="mt-4 max-w-[44ch] text-muted">
                    No cinema nearby, no problem. One ticket covers the whole family, in your language, on release day.
                  </p>
                </div>
              </article>
              <article className="rounded-3xl border border-line bg-surface p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">For filmmakers</p>
                <h3 className="mt-3 font-display text-3xl uppercase leading-none">Reach viewers your screens can&apos;t.</h3>
                <p className="mt-3 max-w-[44ch] text-muted">
                  A second release-day box office, with ticket data in real time. Built for films that get too few shows.
                </p>
              </article>
              <article className="rounded-3xl border border-line bg-surface p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">For theatres</p>
                <h3 className="mt-3 font-display text-3xl uppercase leading-none">A digital box office, not a rival.</h3>
                <p className="mt-3 max-w-[44ch] text-muted">
                  Earn a share of home tickets in your region, and sell them under your own name.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Where we start: full-bleed image */}
        <section className="relative overflow-hidden">
          <Image src="/hero/no-cinema.jpg" alt="A grandmother and her grandson watching a film together on their sofa" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,12,0.94)_0%,rgba(18,14,12,0.7)_45%,rgba(18,14,12,0.15)_100%)]" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 py-32 sm:px-6 md:py-44" data-anim-stagger>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Where we start</p>
            <h2 className="mt-4 max-w-[13ch] font-display text-5xl uppercase leading-[0.95] sm:text-7xl">
              Where the screens are scarce.
            </h2>
            <ul className="mt-10 max-w-md space-y-5 text-lg">
              <li><span className="font-semibold">Regional cinema.</span> <span className="text-muted">Strong films, too few screens.</span></li>
              <li><span className="font-semibold">Towns without a cinema.</span> <span className="text-muted">The first show comes to them.</span></li>
              <li><span className="font-semibold">Indians abroad.</span> <span className="text-muted">Release day, not months later.</span></li>
            </ul>
          </div>
        </section>

        {/* Security: 2x2 */}
        <section className="px-5 py-28 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.4fr]">
            <div data-anim>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Protecting every premiere</p>
              <h2 className="mt-4 max-w-[12ch] font-display text-5xl uppercase leading-[0.95] sm:text-6xl">
                Producers&apos; first question. Answered.
              </h2>
            </div>
            <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2" data-anim-stagger>
              {SECURITY.map((s) => (
                <div key={s.title}>
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {s.icon}
                  </svg>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="faq scroll-mt-20 border-t border-line px-5 py-28 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-5xl uppercase sm:text-6xl" data-anim>Fair questions</h2>
            <div className="mt-10" data-anim-stagger>
              {FAQ.map((f) => (
                <details key={f.q} className="border-b border-line py-5">
                  <summary className="flex items-baseline justify-between gap-6 text-lg font-medium">
                    {f.q}
                    <span className="plus font-mono text-xl text-gold" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 max-w-[60ch] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* The one call to action */}
        <section id="join" className="relative scroll-mt-20 overflow-hidden px-5 py-32 sm:px-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_100%,#f2b5442a_0%,transparent_70%)]" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl text-center" data-anim-stagger>
            <h2 className="font-display text-6xl uppercase leading-[0.92] sm:text-8xl">
              Save your seat for the <span className="text-gold">first show.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[44ch] text-muted">
              Viewers, filmmakers, theatres and investors. Join early and hear first when the doors open.
            </p>
            <div className="mt-10">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-5 py-10 text-sm text-muted sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <span>
            <span className="font-display text-lg uppercase tracking-wider text-cream">
              First<span className="text-gold">show</span>
            </span>{" "}
            · First Day. First Show. From Home.
          </span>
          <span>Concept preview. Films shown are fictional. Video is AI generated. © 2026</span>
        </div>
      </footer>
      <PageAnimations />
    </>
  );
}
