# Glasswing Studio Rentals

> Daylight studios with 6-meter windows — a marketing + booking site for two
> rentable photo studios in a converted 1920s Prague tram depot.

A 7-page [Astro](https://astro.build) + React site built on **Wix Headless**:
content lives in Wix CMS, the booking form writes inquiries to a Wix Data
collection, and the whole thing deploys to Wix hosting with the Wix CLI.

The design is "airy industrial" — generous whitespace, sharp corners, a strict
structural grid that echoes steel window mullions, and a signature mint
"light-line". Studio imagery is rendered as a pure CSS/SVG window-wall motif
(no stock photography), so it paints instantly and stays on-brand.

## Features

- **7 pages** — Home, Studio North, Studio Depot, Rates & Gear, Book, The Depot
  (about), Find Us (contact).
- **Wix CMS-backed content** — gear inventory, studio testimonials, and the
  origin story are queried server-side via `@wix/data`.
- **Booking inquiry form** — posts to an Astro API route that inserts into a
  private `BookingInquiry` collection with an elevated SDK call.
- **Interactive sun-path diagram** — a 9am/noon/4pm light scrubber driven by the
  light-line device (progressively enhanced vanilla JS).
- **SEO** — per-page JSON-LD (`PhotographyBusiness`, `Product`, `OfferCatalog`,
  `FAQPage`, `LocalBusiness`), canonical + Open Graph tags.
- **Mobile-first & accessible** — sticky mobile booking bar, skip link, visible
  focus, 44px tap targets, `prefers-reduced-motion` honored.

## Tech stack

- **Astro 5** (`output: "server"`) with `@wix/astro` + `@wix/astro-pages`
- **React 18** islands (booking form only — the rest is static/SSR)
- **Tailwind CSS v4** (CSS-first `@theme` in `src/styles/global.css`)
- **Wix SDK** — `@wix/data` + `@wix/essentials` for CMS reads/writes
- Type-set in **Hanken Grotesk** (display) + **Inter** (body)

## Getting started

### Prerequisites

- Node.js 20+
- A [Wix Headless](https://dev.wix.com/docs/go-headless) project (free). The
  fastest way to start from scratch is `npm create @wix/new@latest`.

### Setup

```bash
npm install
cp .env.example .env.local   # then fill in your Wix credentials
npm run dev                  # http://localhost:4321
```

Populate `.env.local` with your project's credentials — either run
`npx @wix/cli@latest env pull --json` after linking a project, or copy them from
the Wix dashboard (**Settings → Headless Settings → OAuth apps**).

### CMS collections

The site reads four Wix Data collections. Create them in your Wix dashboard
(CMS → Collections) with these fields:

| Collection | Fields | Read |
|---|---|---|
| `GearItem` | name, category, studio, included (bool), hourlyAddOn, specNote, orderIndex | Anyone |
| `StoryBlock` | heading, body, orderIndex | Anyone |
| `Reference` | name, quote, detail, orderIndex | Anyone |
| `BookingInquiry` | name, email, studio, date, startTime, hours, shootType, message | Admin |

Query helpers live in [`src/lib/cms.ts`](src/lib/cms.ts); the form writer is
[`src/pages/api/book.ts`](src/pages/api/book.ts).

## Deploy

```bash
npx wix build
npx wix release   # prints the live *.wix-site-host.com URL
```

## Project structure

```
src/
  components/   # WindowWall, SunPath, GearTable, RateCards, Nav, Footer, BookingForm …
  layouts/      # BaseLayout (head, SEO/JSON-LD, nav, footer, sticky bar)
  lib/          # cms.ts (Wix Data queries) · site.ts (nav, rates, FAQ, business facts)
  pages/        # index + 6 routes, plus api/book.ts and sitemap.xml.ts
  styles/       # global.css (Tailwind v4 @theme: tokens, light-line, buttons)
```

## License

[MIT](LICENSE) — update the copyright holder to your name/organization.
