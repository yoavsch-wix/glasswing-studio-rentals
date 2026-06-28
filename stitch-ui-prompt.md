# Glasswing Studio Rentals — UI Design Brief

Two rentable photo studios in a converted 1920s Prague tram depot, famous for floor-to-ceiling north-facing glass. Hourly bookings include grip gear; the loading dock fits a small car for automotive shoots.

## Core features the UI must support
- Studio pages for both spaces with specs and photos
- Rate card with hourly and full-day pricing
- Equipment list included with rental
- Booking inquiry form with date and studio choice
- Mobile-first responsive design

## Art direction
- **Mood:** airy · industrial · bright · spacious
- Treat the palette as a starting point — interpret the mood, don't paint by numbers.

## Audience & voice
- **Audience.** Working photographers, directors, and content crews in Prague — portrait, editorial, product, and automotive shooters in their late 20s to 40s who book by the hour, care about light direction more than amenities, and want gear already in the room and a price they can read without an email exchange.
- **Voice.** plainspoken · spatial · light-literate · unfussy · quietly confident
- **Avoid.** real-estate-listing puffery, lifestyle-brand warmth, exclamation hype, vague creative-agency adjectives

## Hero
- **Headline.** "Six-meter windows, north-facing. The light does most of the work."
- **Layout.** Single full-bleed daylight interior with one overlaid headline and a single booking control
- **Focal / LCP element.** A wide photograph of Studio North's six-meter window wall with raking morning light across an empty concrete floor
- **Treatment.** Spartan all-caps display set tight in the lower-left third over the floor's shadow, large weight-jump from a thin label kicker above it
- **Atmosphere.** The studio interior itself — concrete, steel mullions, blown-soft daylight — no overlay gradient beyond a faint bottom scrim for text contrast
- **Primary CTA.** Check a date
- **Mobile.** Image crops to a vertical slice of the window wall, headline stacks to three short lines, and the booking button pins to a sticky bottom bar
- **The one thing they'll remember.** The feeling that the room is already lit and waiting, and you just need to claim an hour

## Sitemap (7 pages)

| Page | Route | Purpose | CTA |
|---|---|---|---|
| Home | `/` | Show the light in five seconds and push to a booking inquiry | Check a date |
| Studio North | `/studio-north` | Full spec sheet, photos, and sun-path for the larger 6-meter-window space | Check a date |
| Studio Depot | `/studio-depot` | Spec sheet and photos for the drive-in dock space | Check a date |
| Rates & Gear | `/rates` | Hourly and full-day pricing plus the grip list included with every booking | Check a date |
| Book a Studio | `/book` | Date and studio inquiry form | Send booking request |
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

## Sample content

**Gear / spec items (Rates & Gear page)** — fields: name, category, studio, included, hourly add-on, spec note
- Studio North — Hourly | Rates | Studio North | included | €45/hr (min 2 hrs) | 95 sqm, 4.2m ceiling, 6m north-facing glass, full grip kit included.
- Avenger C-Stand (set of 6) | Grip | Both | included | €0 | 40-inch and 20-inch arms, all with grip heads and sandbags, kept by the door.

**Story block (The Depot page)** — heading + body
> The building ran trams until 1978. When the depot closed, the north wall of glass that once let crews inspect carriages in daylight just stayed there, six meters tall, facing the only direction a photographer ever wants. We took the lease in 2019 because of that wall and almost nothing else… Two rooms now: North for the glass, Depot for the drive-in. We still book it the way we'd want to rent it — by the hour, gear already in the room, the light included.

**References / testimonials (Home page)** — name, quote, detail
- Klára Benešová, portrait photographer | "I haven't unpacked a strobe in Studio North in a year. The window is the key light." | Books a half day most weeks for editorial portraits.
- Tomáš Horák, automotive content | "We drove a hatchback onto the seamless in Studio Depot and shot it lit only by the dock-side glass." | Rebooked three times for car detail work.
- Lenka Dvořáková, food stylist | "The noon light off the north wall is the cleanest I've found in Prague. No gels, no fuss." | Shoots cookbook spreads on the corner table.

## Design system

**Aesthetic direction.** Airy industrial: raw tram-depot bones — steel mullions, poured concrete, freight lift — left honest and flooded with white north light, so the architecture reads as the product. The whole site should feel like standing in an empty bright studio waiting for the light to move.

**Spatial composition.** Generous negative space anchored to a strict structural grid that echoes the window mullions; oversized images break the grid edge-to-edge while text columns stay narrow and left-aligned, letting the daylight (whitespace) dominate every screen.

**Typography.**
- Display: **Hanken Grotesk** — Bold 700 (Black 900 for spec numerals), all-caps headlines
- Body: **Söhne** — Buch 400 / Kräftig 500
- Reads like clean architectural signage; heavy Bold-to-Black headlines do the structural work, dimensions and rates feel measured, not marketed.

**Color palette**
| Token | Hex |
|---|---|
| Background | `#F4F6F5` |
| Surface | `#FFFFFF` |
| Text | `#23282C` |
| Text muted | `#5B6660` |
| Border | `#D7DEDB` |
| Primary | `#2E7D5B` |
| Accent | `#1F7A57` |
| Dark | `#23282C` |
| On dark | `#EAF3EE` |

**Signature device.** A thin mint vertical light-line that sweeps across the layout to mark where the daylight falls, reused as the sun-path indicator and as the divider between sections.

**Motion.** CSS-first and quiet: light-line sweep on scroll and gentle image fade-ups, no parallax or autoplay video, snapping to final state under reduced-motion.

**Imagery.** Bright, true-to-life architectural and interior photography with lifted shadows and a slightly cool daylight balance; lots of empty floor and ceiling, the window wall as recurring subject, no heavy color grade.

**Avoid in imagery.** warm orange grading · moody low-key shadows · busy prop styling that hides the space · stock smiling-team photos · heavy vignettes or film grain

## Booking form & conversion
- **Primary action.** Check a date → booking page
- **Repeat the CTA at.** hero · rate card preview band · mobile sticky bar · footer
- **Secondary (ghost) CTA.** See the gear list
- **Form fields.** name, email, studio, date, startTime, hours, shootType
- **Success message.** "Got it. We'll confirm the slot and send the door code by end of day. Pack light — the grip's already here."
- **Reassurance.** No deposit to ask. We just need the date and which room so we can hold it for you.

## FAQ (UI section)
- **What's included in the hourly rate?** The room and its grip kit: C-stands, flags, a five-in-one reflector, an apple-box set, and one roll of white seamless. Bring your camera and lights if you want them.
- **Can I really drive a car into Studio Depot?** Yes. The dock door clears a small hatchback or sedan, and the floor is rated for it.
- **How does the booking work?** Pick a studio and a date on the booking page and send the request. We reply the same day. No deposit up front.
- **What are the hours and minimum booking?** Available 8am to 8pm daily, two-hour minimum. Full-day bookings run 8am to 6pm.
- **Is there parking and a way to load in?** A small lot for two cars and a freight lift off the dock for heavy carts.
- **Which studio has the famous windows?** Both face north, but Studio North is the six-meter wall of glass. Studio Depot trades glass for the drive-in dock and freight lift.

## Accessibility baseline
Text contrast 4.5:1 · UI 3:1 · 44px tap targets · visible focus · honor reduced-motion · alt text required · semantic landmarks

## Bonus UI element
A sun-path diagram showing window light by hour (9am / noon / 4pm), driven by the mint light-line device.
