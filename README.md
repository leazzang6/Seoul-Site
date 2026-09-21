# Seoul Site

A responsive, bilingual (English/Korean) website that helps international
visitors and overseas K-pop fans plan a Seoul trip around dates: search and
browse K-pop & pop-up, culture, running & sports, and food events happening
in Seoul during a traveler's stay.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Custom locale routing (`/en`, `/ko`) via `src/proxy.ts`, English as the
  default/primary locale
- Static sample event data (`src/data`) — no backend/database yet

## Features

- Hero with arrival/departure date inputs that filter events by overlap
  with the trip dates
- Four category cards (K-pop & Pop-up, Culture, Running & Sports, Food),
  each using a real, appropriately-licensed Seoul photo from Wikimedia
  Commons (credited in the footer)
- Sample event list with category + date filtering
- Monetization placeholders: affiliate "Book with partner" links on
  bookable events, ad slots, and a newsletter signup form
- Fully responsive (mobile, tablet, desktop)

## Development

```bash
npm install
npm run dev      # http://localhost:3000 (redirects to /en)
npm run build
npm run lint
```

## Notes / next steps

- Event and category data is static/sample (`src/data/events.ts`,
  `src/data/categories.ts`) — swap in a real CMS or API when ready.
- Affiliate links point to a placeholder partner domain
  (`example-partner.com`) — replace with real booking partner URLs.
- The newsletter form is client-side only (no email backend wired up yet).
- Ad slots are static placeholders — swap in a real ad network script.
- Photos are hotlinked from Wikimedia Commons via `Special:FilePath`;
  see the footer for per-image author/license credit.
