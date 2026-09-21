"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

export function NewsletterForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  return (
    <section
      id="newsletter"
      className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#17131c] to-[#3b1030] px-6 py-10 text-center text-white sm:px-12"
    >
      <h2 className="text-2xl font-bold sm:text-3xl">{dict.newsletter.title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-white/70">{dict.newsletter.subtitle}</p>

      {status === "submitted" ? (
        <p className="mt-6 rounded-full bg-white/10 px-4 py-3 text-sm font-medium text-white">
          {dict.newsletter.success}
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-sm flex-col gap-2 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            {dict.newsletter.placeholder}
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder={dict.newsletter.placeholder}
            className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none focus:border-white/60"
          />
          <button
            type="submit"
            className="rounded-full bg-brand-rose px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            {dict.newsletter.submit}
          </button>
        </form>
      )}

      <p className="mt-3 text-xs text-white/40">{dict.newsletter.disclosure}</p>
    </section>
  );
}
