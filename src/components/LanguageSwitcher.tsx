import Link from "next/link";
import type { Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const other: Locale = locale === "en" ? "ko" : "en";
  const otherLabel = other === "en" ? "English" : "한국어";

  return (
    <Link
      href={`/${other}`}
      className="inline-flex items-center gap-1.5 rounded-full border border-border-soft bg-surface px-3 py-1.5 text-sm font-medium text-foreground/80 transition hover:border-brand-rose hover:text-brand-rose"
    >
      <span aria-hidden>🌐</span>
      {otherLabel}
    </Link>
  );
}
