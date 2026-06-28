import type { APIRoute } from "astro";
import { SITE } from "../lib/site";

export const prerender = false;

const ROUTES = ["/", "/studio-north", "/studio-depot", "/rates", "/book", "/about", "/contact"];

export const GET: APIRoute = () => {
  const urls = ROUTES.map(
    (r) =>
      `  <url><loc>${SITE.url}${r}</loc><changefreq>monthly</changefreq><priority>${r === "/" ? "1.0" : "0.8"}</priority></url>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
  return new Response(xml, { headers: { "content-type": "application/xml" } });
};
