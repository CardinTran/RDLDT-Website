# Rising Dragon Lion Dance Team Website

Official website for the Rising Dragon Lion Dance Team, a Louisiana-based lion dance organization focused on cultural performance, youth development, education, and community events.

The site is built with Next.js App Router, React, TypeScript, Tailwind CSS, local SEO metadata, structured data, and a Google Drive-backed gallery feed.

## Features

- Responsive homepage for mobile, tablet, and desktop screens.
- Booking, about, join, gallery, and footer contact sections.
- Google Drive photo gallery with local image fallbacks.
- Local business structured data for search engines.
- Open Graph, Twitter card, robots, sitemap, and web manifest support.
- Centralized site configuration and homepage content.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Google Drive API

## Project Structure

```text
app/
  api/gallery/drive/       Google Drive gallery API routes
  globals.css              Global visual system and responsive styles
  layout.tsx               Root metadata, fonts, viewport, and shell
  manifest.ts              Web app manifest
  page.tsx                 Homepage route
  robots.ts                Robots configuration
  sitemap.ts               Sitemap configuration

components/
  drive-photo-gallery.tsx  Rotating Google Drive gallery
  rotating-image-showcase.tsx
  scroll-to-explore.tsx

lib/
  google-drive.ts          Google Drive API helpers
  home-content.ts          Homepage content arrays
  seo.ts                   Structured data helpers
  site-config.ts           Organization, SEO, image, and contact config

public/
  hero-team.jpg
  RDLBooking.jpg
  logo-watermark.png
  mock-logo.png
  mock-team.jpg
```

## Environment Variables

Create `.env.local` from `.env.example`.

```bash
NEXT_PUBLIC_SITE_URL=https://www.risingdragonliondance.com
GOOGLE_DRIVE_API_KEY=
GOOGLE_DRIVE_FOLDER_ID=
```

`NEXT_PUBLIC_SITE_URL` controls canonical URLs, sitemap URLs, Open Graph URLs, and structured data.

`GOOGLE_DRIVE_API_KEY` and `GOOGLE_DRIVE_FOLDER_ID` power the homepage gallery. If either value is missing, the site uses local fallback images from `public/`.

## Google Drive Gallery Setup

1. Create or select a Google Drive folder that contains only gallery images.
2. Share the folder as read-only `Viewer`.
3. Add the folder ID to `GOOGLE_DRIVE_FOLDER_ID`.
4. Add a Google API key with Drive API access to `GOOGLE_DRIVE_API_KEY`.
5. Restart the local dev server after changing `.env.local`.

The gallery list route is cached for five minutes. Proxied Drive images use browser and CDN cache headers so rotation does not repeatedly refetch images during normal browsing.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

Run linting:

```bash
npm run lint
```

Run TypeScript checks:

```bash
npm run typecheck
```

Run a production build:

```bash
npm run build
```

Run the full local check sequence:

```bash
npm run check
```

## Content Updates

Primary organization details live in `lib/site-config.ts`.

Homepage section content lives in `lib/home-content.ts`.

Runtime images live in `public/`. Unused mockups and reference assets should not stay in the app tree.

## SEO Notes

The site includes:

- Canonical metadata
- Search metadata and keywords
- Open Graph metadata
- Twitter card metadata
- `LocalBusiness` structured data
- `robots.txt`
- `sitemap.xml`
- Web app manifest

Before production launch, confirm the real domain in `NEXT_PUBLIC_SITE_URL`, verify the final business address, and connect the site to Google Search Console and Bing Webmaster Tools.

## Security

The site includes baseline production security controls:

- Content Security Policy
- HTTP Strict Transport Security
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- Strict referrer policy
- Restrictive permissions policy
- Server-only Google Drive API credentials
- Google Drive image ID validation
- Image-only proxy responses

Secrets belong only in `.env.local` or the hosting provider's encrypted environment variable store. Do not commit real API keys, tokens, passwords, or private keys.

For production, restrict the Google Drive API key to the final website domain and only the Google Drive API in Google Cloud Console.

## Deployment

Production deployment is intentionally separate from this repository cleanup pass.

Before deployment:

- Confirm `NEXT_PUBLIC_SITE_URL` uses the final live domain.
- Confirm Google Drive gallery credentials are present in the hosting environment.
- Run `npm run check`.
- Review the homepage on mobile, tablet, and desktop viewport sizes.

## Current Production Readiness

Completed:

- Responsive homepage implementation
- Technical SEO foundation
- Structured local business data
- Gallery fallback behavior
- Gallery cache hardening
- Production route cleanup
- Centralized site/content architecture

Remaining:

- Confirm the final live domain.
- Add `GOOGLE_DRIVE_FOLDER_ID` to `.env.local` and production hosting.
- Replace any remaining temporary images with final approved photography if needed.
- Deploy through the chosen hosting provider.
