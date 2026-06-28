# Glasswing Studio Rentals

> Daylight studios with 6-meter windows

**HEADLESS DAY brief spec-0155** · Category: **Photography & Film** · Difficulty: **easy**

Two rentable photo studios in a converted Prague tram depot, famous for floor-to-ceiling north-facing glass. Hourly bookings include grip gear, and the loading dock fits a small car for automotive shoots.

---

## Requirements

Your build is judged against these. All of them.

- [ ] Studio pages for both spaces with specs and photos
- [ ] Rate card with hourly and full-day pricing
- [ ] Equipment list included with rental
- [ ] Booking inquiry form with date and studio choice
- [ ] Mobile-first responsive design

## Art direction

| | |
|---|---|
| Mood | airy · industrial · bright · spacious |
| Primary color | `#343A40` |
| Accent color | `#74C69D` |

Treat the palette as a starting point — interpret the mood, don't paint by numbers.

## Bonus challenge

Add a sun-path diagram showing window light by hour

---

# Creative brief

A richer brief to build from — structure, content, design, SEO, and performance. Hit the requirements above; let this guide how.

## Audience & voice

**Audience.** Working photographers, directors, and content crews in Prague — portrait, editorial, product, and automotive shooters in their late 20s to 40s who book by the hour, care about light direction more than amenities, and want gear already in the room and a price they can read without an email exchange.

**Voice.** plainspoken · spatial · light-literate · unfussy · quietly confident

**Avoid.** real-estate-listing puffery, lifestyle-brand warmth, exclamation hype, vague creative-agency adjectives

## Hero

**Headline.** “Six-meter windows, north-facing. The light does most of the work.”

**Layout.** Single full-bleed daylight interior with one overlaid headline and a single booking control

**Focal / LCP element.** A wide photograph of Studio North's six-meter window wall with raking morning light across an empty concrete floor

**Treatment.** Spartan all-caps display set tight in the lower-left third over the floor's shadow, large weight-jump from a thin label kicker above it

**On load.** Hero image fades up from a flat light-gray placeholder while the headline lines stagger in bottom-up over 400ms and the booking button settles last; under prefers-reduced-motion everything renders in final position with no fade

**Atmosphere.** The studio interior itself — concrete, steel mullions, blown-soft daylight — no overlay gradient beyond a faint bottom scrim for text contrast

**Primary CTA.** Check a date

**Mobile.** Image crops to a vertical slice of the window wall, headline stacks to three short lines, and the booking button pins to a sticky bottom bar

**The one thing they'll remember.** The feeling that the room is already lit and waiting, and you just need to claim an hour

## Sitemap (7 pages)

| Page | Route | Purpose | CTA |
|---|---|---|---|
| Home | `/` | Show the light in five seconds and push to a booking inquiry | Check a date |
| Studio North | `/studio-north` | Full spec sheet, photos, and sun-path for the larger 6-meter-window space | Check a date |
| Studio Depot | `/studio-depot` | Spec sheet and photos for the drive-in dock space | Check a date |
| Rates & Gear | `/rates` | Hourly and full-day pricing plus the grip list included with every booking | Check a date |
| Book a Studio | `/book` | Date and studio inquiry form into a Wix CMS bookings collection | Send booking request |
| The Depot | `/about` | How a 1920s tram depot became two daylight studios | See the studios |
| Find Us | `/contact` | Neighborhood, loading-dock access notes, map facade | Check a date |

## Homepage flow

1. **Hero** — Six-meter windows, north-facing. The light does most of the work.
2. **Two studios at a glance** — Two rooms. One for soft portraits, one a car can drive into.
3. **Sun-path strip** — Here is exactly where the light falls at 9am, noon, and 4pm.
4. **What's in the room** — C-stands, flags, and a roll of seamless are already here. Bring your camera.
5. **Rate card preview** — Hourly or full day. The price is on the page, not behind a form.
6. **Who shoots here** — The people who keep rebooking, and what they shot.
7. **Booking CTA band** — Tell us the date and the studio. We reply same day.
8. **Access and dock notes** — The loading dock fits a small car and a freight lift handles the rest.

## Content to create

Seed these into the CMS — counts and sample rows are the minimum bar.

- **8× GearItem** (on Rates & Gear) — fields: name, category, studio, included, hourlyAddOn, specNote
  - e.g. Studio North — Hourly | Rates | Studio North | included | €45/hr (min 2 hrs) | 95 sqm, 4.2m ceiling, 6m north-facing glass, full grip kit included.
  - e.g. Avenger C-Stand (set of 6) | Grip | Both | included | €0 | 40-inch and 20-inch arms, all with grip heads and sandbags, kept by the door.
- **1× StoryBlock** (on The Depot) — fields: heading, body
  - e.g. The building ran trams until 1978. When the depot closed, the north wall of glass that once let crews inspect carriages in daylight just stayed there, six meters tall, facing the only direction a photographer ever wants. We took the lease in 2019 because of that wall and almost nothing else. The first year we shot in it ourselves, learning how the light crossed the floor through the day, where it went flat, where it stayed soft past four. We poured a level floor over the old inspection pits, kept the freight lift, and widened the dock door until a small car could roll straight onto the seamless. Two rooms now: North for the glass, Depot for the drive-in. We still book it the way we'd want to rent it — by the hour, gear already in the room, the light included.
- **3× Reference** (on Home) — fields: name, quote, detail
  - e.g. Klára Benešová, portrait photographer | 'I haven't unpacked a strobe in Studio North in a year. The window is the key light.' | Books a half day most weeks for editorial portraits.
  - e.g. Tomáš Horák, automotive content | 'We drove a hatchback onto the seamless in Studio Depot and shot it lit only by the dock-side glass.' | Rebooked three times for car detail work.
  - e.g. Lenka Dvořáková, food stylist | 'The noon light off the north wall is the cleanest I've found in Prague. No gels, no fuss.' | Shoots cookbook spreads on the corner table.

## Design system

**Aesthetic direction.** Airy industrial: raw tram-depot bones — steel mullions, poured concrete, freight lift — left honest and flooded with white north light, so the architecture reads as the product. The whole site should feel like standing in an empty bright studio waiting for the light to move.

**Spatial composition.** Generous negative space anchored to a strict structural grid that echoes the window mullions; oversized images break the grid edge-to-edge while text columns stay narrow and left-aligned, letting the daylight (whitespace) dominate every screen.

**Typography.** Display: `Hanken Grotesk` · Body: `Söhne` · Hanken Grotesk Bold 700 (with Black 900 for the spec numerals) for the all-caps headlines against Söhne Buch 400/Kräftig 500 body
_Source:_ Hanken Grotesk (Google Fonts / @fontsource); Söhne (Google Fonts / @fontsource) for body
_Why:_ Hanken Grotesk's geometric-humanist sans reads like clean architectural signage and stays out of the light's way, while its broad weight range lets a heavy Bold-to-Black headline do the structural work, carrying an industrial, drafted-on-blueprint authority that matches the depot's steel bones and lets dimensions and rates feel measured, not marketed.

**Color system** — paste into your Tailwind v4 `@theme`:

```css
@theme {
  --color-background: #F4F6F5;
  --color-surface: #FFFFFF;
  --color-text: #23282C;
  --color-text-muted: #5B6660;
  --color-border: #D7DEDB;
  --color-primary: #2E7D5B;
  --color-accent: #1F7A57;
  --color-dark: #23282C;
  --color-on-dark: #EAF3EE;
}
```

**Signature device.** A thin mint vertical light-line that sweeps across the layout to mark where the daylight falls, reused as the sun-path indicator and as the divider between sections.

**Motion.** CSS-first and quiet: the light-line sweep on scroll and gentle image fade-ups, no parallax or autoplay video, snapping to final state under reduced-motion.

**Imagery.** Bright, true-to-life architectural and interior photography with lifted shadows and a slightly cool daylight balance; lots of empty floor and ceiling, the window wall as recurring subject, no heavy color grade.

**Avoid in imagery.** warm orange grading · moody low-key shadows · busy prop styling that hides the space · stock smiling-team photos · heavy vignettes or film grain

## Conversion & forms

**Primary action.** Check a date — via @wix/bookings (with a Wix CMS bookings inquiry collection fallback) → `/book`

**Repeat at.** hero · rate card preview band · mobile sticky bar · footer

**Secondary (ghost).** See the gear list

**Form fields.** name, email, studio, date, startTime, hours, shootType

**Success message.** “Got it. We'll confirm the slot and send the door code by end of day. Pack light — the grip's already here.”

**Reassurance.** No deposit to ask. We just need the date and which room so we can hold it for you.

## FAQ

Real questions to answer on the site (and feed FAQPage JSON-LD).

**What's included in the hourly rate?**

The room and its grip kit: C-stands, flags, a five-in-one reflector, an apple-box set, and one roll of white seamless. Bring your camera and lights if you want them. Most people shooting in North don't.

**Can I really drive a car into Studio Depot?**

Yes. The dock door clears a small hatchback or sedan, and the floor is rated for it. Tell us the make in your booking note so we can confirm turning room and lay down floor protection.

**How does the booking work?**

Pick a studio and a date on the booking page and send the request. We reply the same day to confirm the slot and send a door code. No deposit up front.

**What are the hours and minimum booking?**

The studios are available 8am to 8pm daily, with a two-hour minimum. Full-day bookings run 8am to 6pm and save you the most per hour.

**Is there parking and a way to load in?**

There's a small lot for two cars and a freight lift off the dock for heavy carts. The loading dock itself fits a small car for automotive shoots.

**Which studio has the famous windows?**

Both face north, but Studio North is the six-meter wall of glass. Studio Depot trades some of that glass for the drive-in dock and the freight lift.

## SEO

**Primary keyword.** daylight photo studio rental Prague

**Secondary.** north-facing studio hire Prague · drive-in photo studio · hourly studio rental Prague · natural light studio Prague

**Schema.org type.** `PhotographyBusiness`

**JSON-LD per page.** Product (Studio North) · OfferCatalog (Rates & Gear) · LocalBusiness (Find Us) · FAQPage (FAQ)

**Business facts.** Prague, CZ · Daily 8am-8pm, full-day 8am-6pm · €€ · est. 2019

**Differentiators.** Two north-facing studios in a 1920s tram depot; 6-meter window wall; grip gear included; loading dock that fits a small car

**Socials.** @glasswing.depot · @glasswingstudios

## Performance & accessibility

**LCP element.** Hero photograph of Studio North's six-meter window wall in raking morning light

**Top moves.**
- Serve the hero as responsive AVIF/WebP with explicit width/height and fetchpriority=high
- Self-host Söhne and Hanken Grotesk as preloaded woff2 subsets with font-display:swap
- Drive the light-line sweep and sun-path with CSS scroll-driven animations instead of a JS scroll listener

**Hydration plan.**
- `MobileBookingStickyBar` → `client:load` (Above-fold per-visitor conversion control that must be tappable immediately)
- `NavBookButton` → `client:load` (Primary conversion in the header, interactive on first paint)
- `SunPathDiagram` → `client:visible` (Interactive hour scrubber only needs to run when it scrolls into view)
- `BookingInquiryForm` → `client:idle` (Below-fold form can defer hydration until the main thread is free)

**Defer as facades.** Neighborhood map loaded as a static image facade that swaps to interactive on click · Optional studio walkthrough video loaded as a poster-image facade on tap

**Targets.** LCP < 2.5s · INP < 200ms · CLS < 0.1 · Lighthouse mobile ≥ 90

**Accessibility baseline.** Text contrast 4.5:1 · UI 3:1 · 44px tap targets · visible focus · honor reduced-motion · alt text required · semantic landmarks

---

# How to build this with Wix Headless

This is the same flow HEADLESS DAY itself was built and deployed with.
Any frontend framework works; the steps below use Astro + React.

## 1. Create the project

```bash
npm create @wix/new@latest my-site
cd my-site
```

This scaffolds an Astro project preconfigured with the `@wix/astro`
integration and links it to a new Wix Headless project in your account
(it will open a browser to authenticate). Already have a project?
Run `npm create @wix/new@latest -- headless link` inside it instead.

## 2. Develop

```bash
npm run dev
```

- Pages live in `src/pages/` (Astro routes). Use React islands
  (`client:load`) for interactive pieces.
- Talk to Wix from code with the SDK:

```ts
import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

const wix = createClient({
  modules: { items },
  auth: OAuthStrategy({ clientId: import.meta.env.PUBLIC_WIX_CLIENT_ID }),
});
```

- Need content collections (menus, galleries, listings)? Create CMS
  collections in your project dashboard (CMS → Collections) and query
  them with `@wix/data`. Need bookings, stores, or events? Install the
  app on the project and use the matching `@wix/...` SDK module.
- Your OAuth client ID is in the dashboard under
  **Settings → Headless Settings → OAuth apps**; put it in `.env.local`
  as `PUBLIC_WIX_CLIENT_ID`.

## 3. Deploy on Wix

```bash
npx wix build
npx wix release
```

`release` prints your live `*.wix-site-host.com` URL. Redeploys are the
same two commands. That URL is what you submit.

## 4. Submit

Paste your live URL into **My Spec → Submit your build** on the
HEADLESS DAY site before 16:00. Good luck. 🎰
