import type { Locale } from "./config";

export const dictionaries = {
  en: {
    meta: {
      title: "Seoul Site — Plan Seoul around what you love",
      description:
        "Search K-pop pop-ups, culture, running & sports, and food events happening in Seoul during your trip dates.",
    },
    nav: {
      categories: "Categories",
      events: "Events",
      newsletter: "Newsletter",
    },
    hero: {
      eyebrow: "Made for visitors & K-pop fans",
      title: "Plan your Seoul trip around the moments you'll actually remember",
      subtitle:
        "Tell us when you land and leave — we'll surface the K-pop pop-ups, culture, runs and food events happening while you're here.",
      arrivalLabel: "Arrival date",
      departureLabel: "Departure date",
      submit: "Find things to do",
      dateError: "Departure date should be on or after your arrival date.",
    },
    categories: {
      title: "Browse by category",
      subtitle: "Four ways to spend your time in Seoul, each with real spots to visit.",
      viewAll: "View all",
    },
    events: {
      title: "Recommended for your dates",
      subtitleWithDates: "Showing events happening between {start} and {end}.",
      subtitleDefault: "Set your travel dates above to see what overlaps with your trip.",
      allCategories: "All",
      empty: "No events match this filter yet — try widening your dates or picking another category.",
      book: "Book with partner",
      free: "No booking needed",
      resultsCount: "{count} events found",
    },
    ad: {
      label: "Advertisement",
      placeholder: "Your ad could be here — reach travelers planning their Seoul trip.",
      cta: "Advertise with us",
    },
    newsletter: {
      title: "Never miss a Seoul drop",
      subtitle:
        "One email a week: new pop-ups, festival dates and K-pop events, curated for visitors.",
      placeholder: "you@example.com",
      submit: "Subscribe",
      disclosure: "We respect your inbox — unsubscribe anytime.",
      success: "You're on the list! Check your inbox to confirm.",
    },
    footer: {
      affiliateDisclosure:
        "Some links on this site are affiliate booking links. We may earn a commission when you book through them, at no extra cost to you.",
      credits: "Photo credits",
      rights: "All rights reserved.",
    },
    language: {
      label: "Language",
      en: "English",
      ko: "한국어",
    },
  },
  ko: {
    meta: {
      title: "서울 사이트 — 취향에 맞춰 서울을 계획하세요",
      description:
        "여행 일정에 맞춰 서울에서 열리는 케이팝 팝업, 문화, 러닝·스포츠, 맛집 행사를 검색하세요.",
    },
    nav: {
      categories: "카테고리",
      events: "행사",
      newsletter: "뉴스레터",
    },
    hero: {
      eyebrow: "외국인 여행자 & 케이팝 팬을 위한",
      title: "정말 기억에 남을 순간을 중심으로 서울 여행을 계획하세요",
      subtitle:
        "도착일과 출국일을 알려주시면, 여행 기간 동안 열리는 케이팝 팝업, 문화, 러닝, 맛집 행사를 보여드릴게요.",
      arrivalLabel: "도착일",
      departureLabel: "출국일",
      submit: "할 일 찾기",
      dateError: "출국일은 도착일과 같거나 그 이후여야 합니다.",
    },
    categories: {
      title: "카테고리별로 보기",
      subtitle: "서울에서 시간을 보내는 네 가지 방법, 실제로 가볼 수 있는 장소와 함께.",
      viewAll: "전체 보기",
    },
    events: {
      title: "일정에 맞는 추천 행사",
      subtitleWithDates: "{start}부터 {end}까지 열리는 행사를 보여드립니다.",
      subtitleDefault: "위에서 여행 일정을 설정하면 일정과 겹치는 행사를 보여드려요.",
      allCategories: "전체",
      empty: "조건에 맞는 행사가 없어요 — 날짜 범위를 넓히거나 다른 카테고리를 선택해보세요.",
      book: "제휴사에서 예약",
      free: "예약 없이 참여 가능",
      resultsCount: "행사 {count}건",
    },
    ad: {
      label: "광고",
      placeholder: "이 자리에 광고를 게재해보세요 — 서울 여행을 계획하는 여행자에게 노출됩니다.",
      cta: "광고 문의하기",
    },
    newsletter: {
      title: "서울 소식을 놓치지 마세요",
      subtitle: "주 1회, 새로운 팝업·축제 일정·케이팝 행사를 정리해 보내드려요.",
      placeholder: "you@example.com",
      submit: "구독하기",
      disclosure: "언제든 구독을 취소할 수 있어요.",
      success: "구독 신청이 완료됐어요! 메일함에서 확인해주세요.",
    },
    footer: {
      affiliateDisclosure:
        "이 사이트의 일부 링크는 제휴 예약 링크입니다. 해당 링크로 예약 시 추가 비용 없이 저희가 수수료를 받을 수 있습니다.",
      credits: "사진 출처",
      rights: "All rights reserved.",
    },
    language: {
      label: "언어",
      en: "English",
      ko: "한국어",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
