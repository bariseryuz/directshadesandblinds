# Direct Shades & Blinds — Website

Modern Next.js (App Router, TypeScript, Tailwind) site tailored for heavy media (hero video/image) with overlay slides that scroll over the media, plus core pages per requirements.

## Features
- Fixed hero media background with overlay content and CTAs
- Overlay slides: services + featured projects, mill partnerships
- Infinite certificates marquee (trust indicators)
- Pages: Home, About, Services, Projects, Mill Partnerships, Markets, Contact (bid form with plan upload)
- Media sections intentionally left empty; a placeholder badge is shown

## Replace Media
- Option A (local file): place your video at `public/hero.mp4`. It will load automatically.
- Option B (external URL): create `.env.local` with `NEXT_PUBLIC_HERO_VIDEO_URL=https://your.cdn/video.mp4`.
- Replace project/media placeholders across pages with your assets.

## Run Locally
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Notes
- Import alias `@/*` maps to `src/*`.
- Styling uses Tailwind; adjust theme in `tailwind.config.ts`.
