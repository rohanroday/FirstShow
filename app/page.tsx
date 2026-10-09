import Image from "next/image";
import DemoShowcase from "./components/DemoShowcase";
import Logo from "./components/Logo";
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
  { n: "03", title: "Pick your quality", body: "720p, 1080p or 2K. One ticket covers the household, on one screen." },
  { n: "04", title: "Doors open", body: "The film starts at showtime. Popcorn is your department." },
];

const COMPARE: [string, string, string][] = [
  ["When you watch", "Release day, at a showtime", "Weeks or months later"],
  ["What you pay for", "One show, from ₹299", "A monthly catalogue"],
  ["Live events", "Cricket, concerts and more", "Rarely, and usually extra"],
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
  { q: "Is this legal?", a: "Yes. Every film and event on LIVE SHOW is streamed under a direct agreement with its rights holder. No agreement, no show." },
  { q: "What is the difference between ₹299, ₹550 and ₹899?", a: "Picture quality. 720p is ₹299, 1080p is ₹550 and 2K is ₹899. Same film, same showtime, same household ticket." },
  { q: "Can I watch cricket and concerts too?", a: "Yes. Matches, concerts and other live events stream live. You buy a ticket for the event, just like a film." },
  { q: "How many screens can one ticket use?", a: "One. Your ticket is locked to the screen you pick when you book, for that one show." },
  { q: "What if I start late?", a: "Like a cinema, the show has a start time. We plan a short grace window so a late start does not cost you the film." },
  { q: "What stops people from recording it?", a: "Every stream carries an invisible mark tied to the ticket that played it. A leaked copy points straight back to its source, and that account is closed." },
  { q: "Which films will be on it?", a: "We start with regional and independent releases that get too few screens. Bigger films follow as producers join." },
  { q: "Is LIVE SHOW available now?", a: "Not yet. This is a concept preview. Save your seat and we will tell you before the first show." },
];

const PLANS = [
  { q: "720p", name: "HD", price: "299", best: "phones and tablets" },
  { q: "1080p", name: "Full HD", price: "550", best: "laptops and most TVs", featured: true },
  { q: "2K", name: "Ultra sharp", price: "899", best: "big TVs and projectors" },
];
const PLAN_POINTS = ["One film, one showtime", "Your whole household", "Plays on one screen"];

const EVENTS = [
  {
    title: "Cricket",
    body: "Every ball, live. Buy a match ticket and watch from your sofa.",
    icon: (
      <>
        <path d="M4 20 15 9l2 2L6 22H4z" />
        <path d="m15 9 3-3 2 2-3 3" />
        <circle cx="18" cy="18" r="2.5" />
      </>
    ),
  },
  {
    title: "Music concerts",
    body: "A front-row view of the biggest shows, wherever you are.",
    icon: (
      <>
        <path d="M9 18V5l11-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="17" cy="16" r="3" />
      </>
    ),
  },
  {
    title: "Stand-up and theatre",
    body: "Live comedy and stage shows, as they happen.",
    icon: (
      <>
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8" />
      </>
    ),
  },
  {
    title: "And everything else",
    body: "Premieres, festivals, award nights. If it is live, it is on LIVE SHOW.",
    icon: <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" />,
  },
];

const CINEMA = [
  { title: "Doors-open lobby", body: "Join before the show, watch the countdown, settle in." },
  { title: "Theatre mode", body: "Lights-down view and cinema sound. No pop-ups, no distractions." },
  { title: "Watch together", body: "Invite family in other cities to the same showtime." },
  { title: "A real interval", body: "Just like the cinema. Popcorn break included." },
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

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 px-5 py-28 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center" data-anim>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Pricing</p>
              <h2 className="mt-4 font-display text-5xl uppercase sm:text-6xl">One show. Your choice of picture.</h2>
              <p className="mx-auto mt-4 max-w-[48ch] text-muted">
                Pay per show, no subscription. Every ticket covers your whole household.
              </p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-3" data-anim-stagger>
              {PLANS.map((p) => (
                <article
                  key={p.q}
                  className={`relative flex flex-col rounded-3xl border p-8 ${
                    p.featured ? "border-gold/60 bg-gold-soft" : "border-line bg-surface"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink">
                      Best for most TVs
                    </span>
                  )}
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{p.name}</p>
                  <h3 className="mt-2 font-display text-6xl uppercase leading-none">{p.q}</h3>
                  <p className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl text-gold">₹{p.price}</span>
                    <span className="text-sm text-muted">/ show</span>
                  </p>
                  <p className="mt-2 text-sm text-muted">Best on {p.best}</p>
                  <ul className="mt-6 space-y-2 border-t border-line pt-6 text-sm">
                    {PLAN_POINTS.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span className="text-gold" aria-hidden="true">
                          ✓
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a href="#join" className={`btn mt-8 ${p.featured ? "btn-gold" : "btn-ghost"}`}>
                    Save your seat
                  </a>
                </article>
              ))}
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

        {/* Live events */}
        <section id="live" className="scroll-mt-20 border-y border-line bg-surface/60 px-5 py-28 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl" data-anim>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-gold">
                <span className="h-2 w-2 rounded-full bg-red" aria-hidden="true" /> Live
              </p>
              <h2 className="mt-4 font-display text-5xl uppercase leading-[0.95] sm:text-6xl">
                Not just movies. Everything live.
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-anim-stagger>
              {EVENTS.map((e) => (
                <article key={e.title} className="rounded-3xl border border-line bg-ink p-7">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-9 w-9 text-gold"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {e.icon}
                  </svg>
                  <h3 className="mt-5 font-display text-3xl uppercase leading-none">{e.title}</h3>
                  <p className="mt-3 text-muted">{e.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Virtual cinema */}
        <section id="cinema" className="scroll-mt-20 px-5 py-28 sm:px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="overflow-hidden rounded-3xl border border-line" data-anim>
              <Image
                src="/hero/hero-ending.jpg"
                alt="A family watching a film on a big TV in a dark living room"
                width={1920}
                height={1080}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <div data-anim>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">First time in the world</p>
                <h2 className="mt-4 max-w-[14ch] font-display text-5xl uppercase leading-[0.95] sm:text-6xl">
                  A virtual cinema hall, at home.
                </h2>
              </div>
              <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2" data-anim-stagger>
                {CINEMA.map((c) => (
                  <li key={c.title}>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <p className="mt-1 text-muted">{c.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Ticket vs OTT */}
        <section className="px-5 py-28 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-5xl uppercase sm:text-6xl" data-anim>Not another subscription</h2>
            <div className="mt-12 overflow-hidden rounded-2xl border border-line" data-anim role="table" aria-label="LIVE SHOW ticket compared with a typical OTT subscription">
              <div role="row" className="grid grid-cols-[1fr_1.2fr_1.2fr] bg-surface-2 font-mono text-[11px] uppercase tracking-wider text-muted sm:text-xs">
                <span role="columnheader" className="p-3 sm:p-4"><span className="sr-only">Topic</span></span>
                <span role="columnheader" className="p-3 text-gold sm:p-4">LIVE SHOW ticket</span>
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
            <Logo className="text-lg" /> · Watch release-day movies online. Live.
          </span>
          <span>Concept preview. Films shown are fictional. Video is AI generated. © 2026</span>
        </div>
      </footer>
      <PageAnimations />
    </>
  );
}
