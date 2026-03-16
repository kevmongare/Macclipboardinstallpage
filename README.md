# MacClipboard — Installation Site

Landing page for [MacClipboard](https://github.com/kevmongare/MacClipboard), built with **React + TypeScript + Vite**.

## Stack

- React 18
- TypeScript 5
- Vite 5
- No external UI libraries — all styling via inline styles and CSS variables

## Project structure

```
src/
├── main.tsx                   # Entry point
├── App.tsx                    # Root component
├── index.css                  # Global reset + design tokens (CSS variables)
│
├── types/
│   └── index.ts               # Shared TypeScript interfaces
│
├── data/
│   └── installData.tsx        # All static content, links, copy text
│
├── components/
│   ├── icons/
│   │   └── index.tsx          # All SVG icons as named exports
│   │
│   ├── ui/
│   │   └── index.tsx          # Primitives: Tag, KeyCap, CodeSnip, SectionLabel, Divider
│   │
│   └── sections/
│       ├── index.ts           # Barrel export
│       ├── HeroSection.tsx    # Headline, subtitle, download + GitHub buttons
│       ├── FeaturesSection.tsx
│       ├── InstallStepsSection.tsx
│       ├── GatekeeperSection.tsx  # macOS unverified app bypass accordion
│       ├── PermissionsSection.tsx
│       ├── ShortcutsSection.tsx
│       ├── SourceSection.tsx  # Build from source with copy buttons
│       ├── KnownIssuesSection.tsx
│       └── FooterSection.tsx
│
└── pages/
    └── InstallPage.tsx        # Composes all sections into the full page
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import your GitHub repo.
4. Framework preset: **Vite** (auto-detected).
5. Click **Deploy** — done.

`vercel.json` is already configured for SPA routing.

## Deploy to Netlify

1. Push this repo to GitHub.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy site**.

`public/_redirects` is already configured for SPA routing.

## Customising content

All page copy, links, version numbers, and data live in one place:

```
src/data/installData.tsx
```

Change `REPO_URL`, `RELEASE_URL`, `APP_VERSION`, step descriptions, shortcuts, etc. there — the components pick it up automatically.
