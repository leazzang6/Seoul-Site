import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Category, SeoulEvent } from "@/lib/types";
import { commonsImage, CATEGORY_IMAGE_CREDITS } from "@/lib/images";

function formatDateRange(start: string, end: string, locale: Locale) {
  const formatter = new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-US", {
    month: "short",
    day: "numeric",
  });
  if (start === end) return formatter.format(new Date(start));
  return `${formatter.format(new Date(start))} – ${formatter.format(new Date(end))}`;
}

export function EventCard({
  event,
  category,
  locale,
  dict,
}: {
  event: SeoulEvent;
  category: Category;
  locale: Locale;
  dict: Dictionary;
}) {
  const credit = CATEGORY_IMAGE_CREDITS[event.category];

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-sm transition hover:shadow-md">
      <div className="relative h-40 w-full">
        <Image
          src={commonsImage(credit.fileName, 700)}
          alt={category.name[locale]}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          unoptimized
        />
        <span
          className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
          style={{ backgroundColor: category.accent }}
        >
          {category.name[locale]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between text-xs font-medium text-foreground/50">
          <span>{formatDateRange(event.startDate, event.endDate, locale)}</span>
          <span>{event.neighborhood[locale]}</span>
        </div>

        <h3 className="text-base font-bold leading-snug">{event.title[locale]}</h3>
        <p className="text-sm text-foreground/60">{event.summary[locale]}</p>

        {event.recurring && (
          <p className="text-xs font-medium text-brand-teal">{event.recurring[locale]}</p>
        )}

        <div className="mt-1 flex flex-wrap gap-1.5">
          {event.tags.map((tag) => (
            <span
              key={tag.en}
              className="rounded-full bg-surface-muted px-2 py-0.5 text-[11px] font-medium text-foreground/60"
            >
              {tag[locale]}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-sm font-semibold">{event.priceFrom[locale]}</span>
          {event.affiliateUrl ? (
            <a
              href={event.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="rounded-full bg-brand-rose px-4 py-2 text-xs font-semibold text-white transition hover:brightness-110"
            >
              {dict.events.book}
            </a>
          ) : (
            <span className="rounded-full bg-surface-muted px-4 py-2 text-xs font-medium text-foreground/50">
              {dict.events.free}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
