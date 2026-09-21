import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "kpop-popup",
    name: { en: "K-pop & Pop-up", ko: "케이팝 & 팝업" },
    tagline: {
      en: "Fan meets, photocard markets & brand pop-ups",
      ko: "팬미팅, 포토카드 마켓, 브랜드 팝업스토어",
    },
    description: {
      en: "From Hongdae busking nights to agency-run pop-up stores in Seongsu, find the fan experiences worth building your trip around.",
      ko: "홍대 버스킹 나이트부터 성수동 소속사 팝업스토어까지, 여행 일정을 채울 만한 팬 경험을 만나보세요.",
    },
    accent: "#E11D6B",
  },
  {
    id: "culture",
    name: { en: "Culture", ko: "문화" },
    tagline: {
      en: "Palaces, hanok villages & museum exhibits",
      ko: "고궁, 한옥마을, 박물관 전시",
    },
    description: {
      en: "Royal ceremonies, lantern nights and special exhibitions that show Seoul's history alongside its skyline.",
      ko: "수문장 교대식부터 등불 축제, 특별 전시까지 서울의 역사와 스카이라인을 함께 만나보세요.",
    },
    accent: "#9333EA",
  },
  {
    id: "sports",
    name: { en: "Running & Sports", ko: "러닝 & 스포츠" },
    tagline: {
      en: "Han River runs, night rides & open sessions",
      ko: "한강 러닝, 야간 라이딩, 오픈 세션",
    },
    description: {
      en: "Lace up along the Han River — fun runs, night rides and community sessions with a skyline view.",
      ko: "한강을 따라 뛰어보세요 — 펀런, 야간 라이딩, 스카이라인이 보이는 커뮤니티 세션까지.",
    },
    accent: "#0EA5A4",
  },
  {
    id: "food",
    name: { en: "Food", ko: "맛집" },
    tagline: {
      en: "Market crawls, festivals & night food tours",
      ko: "시장 투어, 푸드 페스티벌, 야간 먹거리 투어",
    },
    description: {
      en: "Gwangjang Market bites, riverside food festivals and guided crawls through Seoul's best street food.",
      ko: "광장시장 먹거리부터 한강 푸드 페스티벌, 서울 대표 길거리 음식 투어까지.",
    },
    accent: "#F59E0B",
  },
];

export function getCategory(id: string) {
  return categories.find((category) => category.id === id);
}
