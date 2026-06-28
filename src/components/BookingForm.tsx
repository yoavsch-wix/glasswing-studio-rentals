import { useState, type FormEvent } from "react";

const STUDIOS = ["Studio North", "Studio Depot", "Either room"];
const HOURS = ["2 hours", "3 hours", "4 hours", "Half day (5h)", "Full day (10h)"];
const SHOOT_TYPES = ["Portrait", "Editorial", "Product / still life", "Automotive", "Food", "Other"];

interface Props {
  defaultStudio?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function BookingForm({ defaultStudio }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok && body.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(body.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network hiccup — check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-primary bg-primary/5 p-8 md:p-10" role="status">
        <div className="light-line h-10 w-px mb-6" />
        <p className="font-display font-bold uppercase text-2xl md:text-3xl tracking-tight leading-tight">
          Got it. We'll confirm the slot and send the door code by end of day.
        </p>
        <p className="text-muted text-lg mt-4">Pack light — the grip's already here.</p>
      </div>
    );
  }

  const field = "flex flex-col gap-2";
  const labelCls = "kicker text-muted";
  const inputCls =
    "bg-transparent border-0 border-b border-border focus:border-primary outline-none py-2.5 text-lg transition-colors";

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
      <div className={field}>
        <label htmlFor="name" className={labelCls}>Name</label>
        <input id="name" name="name" required autoComplete="name" className={inputCls} />
      </div>
      <div className={field}>
        <label htmlFor="email" className={labelCls}>Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} />
      </div>
      <div className={field}>
        <label htmlFor="studio" className={labelCls}>Studio</label>
        <select id="studio" name="studio" defaultValue={defaultStudio || STUDIOS[0]} className={inputCls}>
          {STUDIOS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div className={field}>
        <label htmlFor="date" className={labelCls}>Date</label>
        <input id="date" name="date" type="date" required className={inputCls} />
      </div>
      <div className={field}>
        <label htmlFor="startTime" className={labelCls}>Start time</label>
        <input id="startTime" name="startTime" type="time" min="08:00" max="20:00" defaultValue="09:00" className={inputCls} />
      </div>
      <div className={field}>
        <label htmlFor="hours" className={labelCls}>How long</label>
        <select id="hours" name="hours" defaultValue={HOURS[0]} className={inputCls}>
          {HOURS.map((h) => <option key={h} value={h}>{h}</option>)}
        </select>
      </div>
      <div className={field}>
        <label htmlFor="shootType" className={labelCls}>Shoot type</label>
        <select id="shootType" name="shootType" defaultValue={SHOOT_TYPES[0]} className={inputCls}>
          {SHOOT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div className={`${field} sm:col-span-1`}>
        <label htmlFor="message" className={labelCls}>Anything else</label>
        <input id="message" name="message" placeholder="Driving a car in? Tell us the make." className={inputCls} />
      </div>

      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-5 mt-2">
        <button type="submit" disabled={status === "submitting"} className="btn-primary disabled:opacity-60">
          {status === "submitting" ? "Sending…" : "Send booking request"}
        </button>
        <p className="text-sm text-muted max-w-xs">
          No deposit to ask. We just need the date and which room so we can hold it for you.
        </p>
      </div>

      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-[#b3261e]" role="alert">{error}</p>
      )}
    </form>
  );
}
