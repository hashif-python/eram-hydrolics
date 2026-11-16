# ERAM Hydraulics — Five Style Client Showcase

One React + Vite application presenting **five complete website concepts** at a single URL. The opening dashboard has interactive live previews. Click a style to open its full website **in a new browser tab**.

## Requirements

- Node.js **20.19+ or 22.12+** (recommended: Node.js 22 LTS)
- npm and Internet connection for first install

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:5173/**.

The first `npm run dev` installs Design 2’s independent React 19 dependencies if needed, builds all five site previews, then starts one Vite server. You do NOT need to run five separate terminals.

## Routes

| Page | URL |
|---|---|
| Dashboard | http://localhost:5173/ |
| Concept 1 | http://localhost:5173/styles/v1/ |
| Concept 2 | http://localhost:5173/styles/v2/ |
| Concept 3 | http://localhost:5173/styles/v3/ |
| Concept 4 | http://localhost:5173/styles/v4/ |
| Concept 5 | http://localhost:5173/styles/v5/ |

The dashboard's preview images use live, read-only iframe views of the built websites. They lazy-load when cards enter the viewport. The full website buttons use `target="_blank"`.

## Production build

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` directory to static hosting (Vercel, Netlify, nginx, etc.). For direct links to nested pages like `/styles/v4/products`, configure history fallback to `/styles/v4/index.html` (the included `vercel.json` contains Vercel rewrite rules).

## Project structure

- `src/` — React showcase dashboard
- `designs/v1/` — original React style 1
- `designs/v2/` — original React style 2, with original images
- `designs/v3/` — original React style 3
- `designs/v4/` — original React style 4
- `designs/v5/` — original React style 5
- `scripts/build-styles.mjs` — automatically builds each preview under `public/styles/vX/`
- `public/styles/` — generated files, not committed

All five websites are preserved as separate, isolated React builds within one deliverable. This prevents CSS, router, Tailwind, and dependency differences from breaking each other. There is **no database/backend** or external deployment requirement.

If you change any website code under `designs/`, rerun `npm run dev` (restart the running server) to rebuild its static preview, or run `npm run build:styles` while the server is open.

## Troubleshooting

If dependency installation fails, confirm you are connected to the internet and use Node.js 22. Design 2 intentionally installs React 19 inside `designs/v2/node_modules` while the dashboard and other styles use React 18. This avoids the `Cannot read properties of null (reading useRef)` crash caused by duplicate React runtimes. If upgrading from an older showcase, delete the old `node_modules` folder, run `npm install`, then `npm run dev`. Existing page content or images that depend on third-party external URLs require an Internet connection to render.

## Official ERAM Hydraulics branding
All five styles and the showcase dashboard use the supplied official ERAM Hydraulics logo (`public/eram-official-logo.png` and each design’s `public/eram-official-logo.png`). Each site also uses it as the favicon.

## Style 2 React hook fix

Design 2 has been removed from the root npm workspaces and builds independently.
`npm run dev` / `npm run build` will install its local dependencies automatically
when missing. The `resolve.dedupe` setting keeps React imports consistent inside
the Style 2 bundle. This is a frontend-only fix; no database or server is needed.
