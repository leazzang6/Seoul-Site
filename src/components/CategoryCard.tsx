import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Category } from "@/lib/types";
import { commonsImage, CATEGORY_IMAGE_CREDITS } from "@/lib/images";

export function CategoryCard({
  category,
  locale,
  active,
  onSelect,
}: {
  category: Category;
  locale: Locale;
  active: boolean;
  onSelect?: () => void;
}) {
  const credit = CATEGORY_IMAGE_CREDITS[category.id];

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative flex h-56 flex-col justify-end overflow-hidden rounded-2xl text-left shadow-sm ring-2 transition sm:h-64 ${
        active ? "ring-brand-rose" : "ring-transparent hover:ring-border-soft"
      }`}
    >
      <Image
        src={commonsImage(credit.fileName, 900)}
        alt={category.name[locale]}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
        unoptimized
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(23,19,28,0) 30%, rgba(23,19,28,0.85) 100%)`,
        }}
      />
      <div
        className="absolute left-4 top-4 h-2.5 w-2.5 rounded-full"
        style={{ backgroundColor: category.accent }}
        aria-hidden
      />
      <div className="relative z-10 p-4 text-white">
        <h3 className="text-lg font-bold">{category.name[locale]}</h3>
        <p className="mt-1 text-xs text-white/80">{category.tagline[locale]}</p>
      </div>
    </button>
  );
}
