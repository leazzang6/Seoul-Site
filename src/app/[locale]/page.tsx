import { isLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { categories } from "@/data/categories";
import { events } from "@/data/events";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdSlot } from "@/components/AdSlot";
import { NewsletterForm } from "@/components/NewsletterForm";
import { HomeExperience } from "@/components/HomeExperience";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} />

      <main className="flex-1">
        <HomeExperience locale={locale} dict={dict} categories={categories} events={events} />

        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <AdSlot dict={dict} variant="banner" />
        </div>

        <div className="px-4 py-6 sm:px-6">
          <NewsletterForm dict={dict} />
        </div>
      </main>

      <Footer locale={locale} dict={dict} />
    </>
  );
}
