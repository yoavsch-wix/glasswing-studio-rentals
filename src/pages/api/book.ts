import type { APIRoute } from "astro";
import { items } from "@wix/data";
import { auth } from "@wix/essentials";

export const prerender = false;

const FIELDS = ["name", "email", "studio", "date", "startTime", "hours", "shootType", "message"] as const;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

export const POST: APIRoute = async ({ request }) => {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  const data: Record<string, string> = {};
  for (const key of FIELDS) data[key] = clean(payload[key]);

  if (!data.name || !data.email || !data.date) {
    return json({ ok: false, error: "Please add your name, email, and a date." }, 422);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) {
    return json({ ok: false, error: "That email doesn't look right." }, 422);
  }

  try {
    const insert = auth.elevate(items.insert);
    await insert("BookingInquiry", data);
    return json({ ok: true });
  } catch (err) {
    console.error("[book] insert failed:", err);
    return json({ ok: false, error: "Something went wrong on our end. Email us and we'll sort it." }, 500);
  }
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
