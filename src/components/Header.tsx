import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border-soft bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-semibold text-lg">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand-rose to-brand-violet text-white text-sm font-bold">
            S
          </span>
          <span>Seoul Site</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-foreground/70 sm:flex">
          <a href="#categories" className="transition hover:text-brand-rose">
            {dict.nav.categories}
          </a>
          <a href="#events" className="transition hover:text-brand-rose">
            {dict.nav.events}
          </a>
          <a href="#newsletter" className="transition hover:text-brand-rose">
            {dict.nav.newsletter}
          </a>
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
