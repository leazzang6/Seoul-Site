"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Category, SeoulEvent } from "@/lib/types";
import { CategoryCard } from "./CategoryCard";
import { EventCard } from "./EventCard";
import { AdSlot } from "./AdSlot";

function overlaps(event: SeoulEvent, arrival: string, departure: string) {
  if (!arrival && !departure) return true;
  const start = arrival || "0000-01-01";
  const end = departure || "9999-12-31";
  return event.startDate <= end && event.endDate >= start;
}

function formatDate(value: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function HomeExperience({
  locale,
  dict,
  categories,
  events,
}: {
  locale: Locale;
  dict: Dictionary;
  categories: Category[];
  events: SeoulEvent[];
}) {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const dateError = Boolean(arrival && departure && departure < arrival);

  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => (activeCategory ? event.category === activeCategory : true))
      .filter((event) => (dateError ? true : overlaps(event, arrival, departure)))
      .sort((a, b) => a.startDate.localeCompare(b.startDate));
  }, [events, activeCategory, arrival, departure, dateError]);

  const categoryById = useMemo(
    () => new Map(categories.map((category) => [category.id, category])),
    [categories]
  );

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-surface-muted px-3 py-1 text-xs font-semibold text-brand-rose">
              {dict.hero.eyebrow}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {dict.hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-base text-foreground/60 sm:text-lg">
              {dict.hero.subtitle}
            </p>
          </div>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="rounded-3xl border border-border-soft bg-surface p-5 shadow-sm sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground/70">
                {dict.hero.arrivalLabel}
                <input
                  type="date"
                  value={arrival}
                  onChange={(event) => setArrival(event.target.value)}
                  className="rounded-xl border border-border-soft bg-surface-muted px-3 py-2.5 text-sm outline-none focus:border-brand-rose"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground/70">
                {dict.hero.departureLabel}
                <input
                  type="date"
                  value={departure}
                  onChange={(event) => setDeparture(event.target.value)}
                  className="rounded-xl border border-border-soft bg-surface-muted px-3 py-2.5 text-sm outline-none focus:border-brand-rose"
                />
              </label>
            </div>

            {dateError && (
              <p className="mt-3 text-xs font-medium text-brand-rose">{dict.hero.dateError}</p>
            )}

            <a
              href="#events"
              className="mt-5 block w-full rounded-full bg-gradient-to-r from-brand-rose to-brand-violet px-5 py-3 text-center text-sm font-semibold text-white transition hover:brightness-110"
            >
              {dict.hero.submit}
            </a>
          </form>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">{dict.categories.title}</h2>
            <p className="mt-1 text-sm text-foreground/60">{dict.categories.subtitle}</p>
          </div>
          {activeCategory && (
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className="whitespace-nowrap text-sm font-semibold text-brand-rose hover:underline"
            >
              {dict.categories.viewAll}
            </button>
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              locale={locale}
              active={activeCategory === category.id}
              onSelect={() =>
                setActiveCategory((current) => (current === category.id ? null : category.id))
              }
            />
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AdSlot dict={dict} variant="inline" />
      </div>

      {/* Events */}
      <section id="events" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">{dict.events.title}</h2>
            <p className="mt-1 text-sm text-foreground/60">
              {arrival && departure && !dateError
                ? dict.events.subtitleWithDates
                    .replace("{start}", formatDate(arrival, locale))
                    .replace("{end}", formatDate(departure, locale))
                : dict.events.subtitleDefault}
            </p>
          </div>
          <span className="text-sm font-medium text-foreground/40">
            {dict.events.resultsCount.replace("{count}", String(filteredEvents.length))}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              activeCategory === null
                ? "bg-foreground text-background"
                : "bg-surface-muted text-foreground/60 hover:text-foreground"
            }`}
          >
            {dict.events.allCategories}
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() =>
                setActiveCategory((current) => (current === category.id ? null : category.id))
              }
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                activeCategory === category.id
                  ? "bg-foreground text-background"
                  : "bg-surface-muted text-foreground/60 hover:text-foreground"
              }`}
            >
              {category.name[locale]}
            </button>
          ))}
        </div>

        {filteredEvents.length === 0 ? (
          <p className="mt-10 rounded-2xl border border-dashed border-border-soft bg-surface-muted px-6 py-10 text-center text-sm text-foreground/60">
            {dict.events.empty}
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => {
              const category = categoryById.get(event.category);
              if (!category) return null;
              return (
                <EventCard
                  key={event.id}
                  event={event}
                  category={category}
                  locale={locale}
                  dict={dict}
                />
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
