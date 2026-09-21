import type { Dictionary } from "@/i18n/dictionaries";

export function AdSlot({ dict, variant = "banner" }: { dict: Dictionary; variant?: "banner" | "inline" }) {
  return (
    <div
      className={
        variant === "banner"
          ? "mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border-soft bg-surface-muted px-4 py-6 text-center sm:px-6"
          : "flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border-soft bg-surface-muted px-4 py-8 text-center"
      }
      role="complementary"
      aria-label={dict.ad.label}
    >
      <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground/40">
        {dict.ad.label}
      </span>
      <p className="max-w-md text-sm text-foreground/60">{dict.ad.placeholder}</p>
      <a
        href="mailto:ads@seoulsite.example"
        className="text-sm font-semibold text-brand-rose hover:underline"
      >
        {dict.ad.cta} →
      </a>
    </div>
  );
}
