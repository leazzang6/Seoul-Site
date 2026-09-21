import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { CATEGORY_IMAGE_CREDITS } from "@/lib/images";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border-soft bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="max-w-3xl text-xs leading-relaxed text-foreground/50">
          {dict.footer.affiliateDisclosure}
        </p>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-foreground/40">
            {dict.footer.credits}
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-foreground/40">
            {Object.values(CATEGORY_IMAGE_CREDITS).map((credit) => (
              <li key={credit.fileName}>
                <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {credit.fileName}
                </a>{" "}
                — {credit.author}, {credit.license}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-border-soft pt-6 text-sm text-foreground/50 sm:flex-row sm:items-center">
          <span>
            © {year} Seoul Site. {dict.footer.rights}
          </span>
          <span className="text-xs text-foreground/30">
            {locale === "en" ? "Built for visitors & K-pop fans" : "여행자와 케이팝 팬을 위해 만들었어요"}
          </span>
        </div>
      </div>
    </footer>
  );
}
