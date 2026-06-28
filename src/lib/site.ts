export const SITE = {
  name: "Glasswing Studio Rentals",
  shortName: "Glasswing",
  tagline: "Daylight studios with 6-meter windows",
  city: "Prague, CZ",
  address: "Tram Depot District, Prague 7, Czech Republic",
  geo: { lat: 50.0755, lng: 14.4378 },
  hours: "Daily 8:00–20:00 · Full-day 8:00–18:00",
  email: "hello@glasswing.studio",
  est: 2019,
  socials: {
    instagram: "https://instagram.com/glasswing.depot",
    instagramHandle: "@glasswing.depot",
  },
  url: "https://glasswing-1e8579b9-yoavsch.wix-site-host.com",
} as const;

export const NAV = [
  { label: "Studio North", href: "/studio-north" },
  { label: "Studio Depot", href: "/studio-depot" },
  { label: "Rates & Gear", href: "/rates" },
  { label: "The Depot", href: "/about" },
  { label: "Find Us", href: "/contact" },
] as const;

export const STUDIOS = [
  { name: "Studio Depot", href: "/studio-depot" },
  { name: "Studio North", href: "/studio-north" },
] as const;

export const FAQ = [
  {
    q: "What's included in the hourly rate?",
    a: "The room and its grip kit: C-stands, flags, a five-in-one reflector, an apple-box set, and one roll of white seamless. Bring your camera and lights if you want them. Most people shooting in North don't.",
  },
  {
    q: "Can I really drive a car into Studio Depot?",
    a: "Yes. The dock door clears a small hatchback or sedan, and the floor is rated for it. Tell us the make in your booking note so we can confirm turning room and lay down floor protection.",
  },
  {
    q: "How does the booking work?",
    a: "Pick a studio and a date on the booking page and send the request. We reply the same day to confirm the slot and send a door code. No deposit up front.",
  },
  {
    q: "What are the hours and minimum booking?",
    a: "The studios are available 8am to 8pm daily, with a two-hour minimum. Full-day bookings run 8am to 6pm and save you the most per hour.",
  },
  {
    q: "Is there parking and a way to load in?",
    a: "There's a small lot for two cars and a freight lift off the dock for heavy carts. The loading dock itself fits a small car for automotive shoots.",
  },
  {
    q: "Which studio has the famous windows?",
    a: "Both face north, but Studio North is the six-meter wall of glass. Studio Depot trades some of that glass for the drive-in dock and the freight lift.",
  },
] as const;

export const RATES = [
  { label: "Hourly", price: "€45", unit: "/ hr", note: "Two-hour minimum. North or Depot, grip kit included." },
  { label: "Half day", price: "€280", unit: "/ 5 hrs", note: "Five hours, 8am–1pm or 2pm–7pm. Best for a portrait session." },
  { label: "Full day", price: "€480", unit: "/ 10 hrs", note: "8am–6pm. The most light, the lowest per-hour, the whole room." },
] as const;

export const SUN_PATH = [
  { time: "9:00", label: "Raking morning light across the floor", height: 0.55 },
  { time: "Noon", label: "Direct, even north light — no gels, no fuss", height: 1.0 },
  { time: "4:00", label: "Soft and low, holding past four", height: 0.62 },
] as const;
