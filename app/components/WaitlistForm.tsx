"use client";

import { useState } from "react";

// Preview only: the success state shows, but nothing is sent anywhere yet.
// Wire this to a form service or a route handler before collecting real sign-ups.
export default function WaitlistForm() {
  const [done, setDone] = useState(false);

  if (done)
    return (
      <div role="status" className="rounded-2xl border border-gold/40 bg-gold-soft px-6 py-5 text-center">
        <p className="font-display text-2xl uppercase tracking-wide text-gold">Seat saved.</p>
        <p className="mt-1 text-sm text-muted">
          This is a preview, so your details were not stored. The real list opens soon.
        </p>
      </div>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="text-left"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-full border border-line-strong bg-surface px-5 py-3.5 text-cream placeholder:text-muted/70 focus:border-gold focus:outline-none"
          />
        </label>
        <label>
          <span className="sr-only">I am a</span>
          <select
            defaultValue="viewer"
            className="w-full rounded-full border border-line-strong bg-surface px-5 py-3.5 text-cream focus:border-gold focus:outline-none sm:w-auto"
          >
            <option value="viewer">I watch films</option>
            <option value="filmmaker">I make films</option>
            <option value="theatre">I run a theatre</option>
            <option value="investor">I invest</option>
          </select>
        </label>
        <button className="btn btn-gold">Save my seat</button>
      </div>
      <p className="mt-3 text-center text-xs text-muted">
        Preview only: this form does not send your details anywhere yet.
      </p>
    </form>
  );
}
