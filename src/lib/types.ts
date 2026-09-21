export type Locale = "en" | "ko";

export type CategoryId = "kpop-popup" | "culture" | "sports" | "food";

export type LocalizedText = {
  en: string;
  ko: string;
};

export type Category = {
  id: CategoryId;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  accent: string;
};

export type SeoulEvent = {
  id: string;
  category: CategoryId;
  title: LocalizedText;
  summary: LocalizedText;
  venue: LocalizedText;
  neighborhood: LocalizedText;
  startDate: string;
  endDate: string;
  recurring: LocalizedText | null;
  priceFrom: LocalizedText;
  affiliatePartner: string;
  affiliateUrl: string;
  tags: LocalizedText[];
};
