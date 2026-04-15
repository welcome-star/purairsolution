# Pur Air Solution — Next.js Website

Bilingual FR/EN Next.js 15 website — air duct cleaning Montreal.

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Key Files to Edit First

| File | What to update |
|---|---|
| `lib/data.ts` | Phone, email, GHL embeds, GA4 ID |
| `messages/fr.json` | All French UI text |
| `messages/en.json` | All English UI text |
| `app/globals.css` | Brand color (#00C2A8) |

## Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Or push to GitHub → import on vercel.com → live in 2 minutes.

## After Deploy

1. Add domain in Vercel → Settings → Domains
2. Submit sitemap: https://yoursite.ca/sitemap.xml to Google Search Console
3. Paste GHL form embed URL into `lib/data.ts` → COMPANY.ghl.formEmbed
4. Replace placeholder images in `/public/images/`
5. Add Google Fonts back in `app/[locale]/layout.tsx`

## Full Documentation

See the complete setup guide delivered separately.
