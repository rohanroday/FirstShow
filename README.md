# FIRSTSHOW

**First Day. First Show. From Home.**

Concept landing page for FIRSTSHOW, a digital cinema ticket for watching new releases at home on release day, at a real showtime.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For the faster production version:

```bash
npm run build
npm start
```

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS
- [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- [GSAP](https://gsap.com) + ScrollTrigger for simple fade-in animations

## Where things are

| Path | What it is |
|---|---|
| `app/page.tsx` | All page sections and copy |
| `app/components/BackgroundHero.tsx` | Full-screen background video (16:9 on wide screens, 9:16 on phones) |
| `app/components/SiteHeader.tsx` | Top bar and phone menu |
| `app/components/DemoShowcase.tsx` | Demo film player and clickable app preview |
| `app/components/SmoothScroll.tsx` | Lenis smooth scrolling |
| `app/components/PageAnimations.tsx` | GSAP fade-ins |
| `app/components/WaitlistForm.tsx` | Sign-up form (preview only: does not send data yet) |
| `public/hero/` | Background videos and section images |

## Notes

- This is a concept preview. Films shown are fictional and the video is AI generated.
- The sign-up form shows a thank-you message but does not store anything yet.
- Raw source clips and the full investor film are kept locally and are not in this repo.
