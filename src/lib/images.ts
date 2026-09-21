/**
 * Builds a hotlink-safe Wikimedia Commons image URL via Special:FilePath,
 * which resolves a plain file name to the current upload without needing
 * the content-hash path.
 */
export function commonsImage(fileName: string, width = 1600): string {
  const encoded = encodeURIComponent(fileName).replace(/%2C/g, ",");
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encoded}?width=${width}`;
}

export type ImageCredit = {
  fileName: string;
  author: string;
  license: string;
  sourceUrl: string;
};

export const CATEGORY_IMAGE_CREDITS: Record<string, ImageCredit> = {
  "kpop-popup": {
    fileName: "Street hongdae Seoul.jpg",
    author: "U0894629",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Street_hongdae_Seoul.jpg",
  },
  culture: {
    fileName: "Gyeongbokgung Palace, Seoul, 1395 (28) (40235004155).jpg",
    author: "Richard Mortel",
    license: "CC BY 2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Gyeongbokgung_Palace,_Seoul,_1395_(28)_(40235004155).jpg",
  },
  sports: {
    fileName: "Han River Walk- Yeouido, Korea.jpg",
    author: "Michael Gallagher",
    license: "CC BY-SA 2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Han_River_Walk-_Yeouido,_Korea.jpg",
  },
  food: {
    fileName: "Gwangjang Market, Seoul 01.jpg",
    author: "Wikimedia Commons contributor",
    license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gwangjang_Market,_Seoul_01.jpg",
  },
};
