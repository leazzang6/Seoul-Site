# Seoul Site

A responsive, bilingual (English/Korean) website that helps international
visitors and overseas K-pop fans plan a Seoul trip around dates: search and
browse K-pop & pop-up, culture, running & sports, and food events happening
in Seoul during a traveler's stay.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript), built as a
  fully static export (`output: 'export'`) — no server required
- [Tailwind CSS v4](https://tailwindcss.com/)
- Custom locale routing (`/en`, `/ko`), English as the default/primary
  locale; `/` and any unknown path client-redirect to `/en`
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
npm run build     # static export written to ./out
npm run lint
```

## Deploying to GitHub Pages

`.github/workflows/deploy-pages.yml` builds the static export and publishes
it to GitHub Pages on every push to `main` (or via manual dispatch). One-time
setup in the GitHub UI:

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or re-run the workflow) — the site will be published at
   `https://<owner>.github.io/Seoul-Site/`.

`next.config.ts` hardcodes `basePath`/`assetPrefix` as `/Seoul-Site` to match
that project-page URL; update it if the repo is ever renamed or moved to a
custom domain.

## Notes / next steps

- Event and category data is static/sample (`src/data/events.ts`,
  `src/data/categories.ts`) — swap in a real CMS or API when ready.
- Affiliate links point to a placeholder partner domain
  (`example-partner.com`) — replace with real booking partner URLs.
- The newsletter form is client-side only (no email backend wired up yet).
- Ad slots are static placeholders — swap in a real ad network script.
- Photos are hotlinked from Wikimedia Commons via `Special:FilePath`;
  see the footer for per-image author/license credit.
