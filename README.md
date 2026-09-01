# Merloex — React port

React + TypeScript + Vite port of the merloex.de WordPress/Divi site (from the static restore in `../www.merloex.de`).

```sh
bun install
bun run dev     # dev server
bun run build   # production build → dist/
```

## Design

Redesign implemented from the Stitch project **"Merloex Professional Redesign"** (design system "Precision Infrastructure": Trust-Navy palette, Hanken Grotesk / Inter / JetBrains Mono, 4px radii, tonal layers). Tokens live at the top of `src/index.css`; icons are inline Material Symbols in `src/components/Icons.tsx`; services/contact data in `src/services.ts`. Stitch only covered the homepage (hero, services, footer) — the other pages reuse the same components and tokens.

## Notes

- **Hero photo** (`src/assets/hero.jpg`) was generated in Stitch. Replace with a real photo of a Merloex object when available.

- **Photos are illustrations.** The original photos under `wp-content/uploads` were not in the restore and are not on archive.org. `src/assets/*.svg` are flat brand-style illustrations with the original filenames and aspect ratios — drop a real photo next to one and update its import in `src/assets/images.ts`. The logo (`logo.png`) is the real one, recovered from `image001.png`; `src/assets/logo-mark.svg` is a vector redraw of the mark without text (also used as `public/favicon.svg`).
- **Forms have no backend.** The original Gravity Forms install is gone; the Kontakt and Jobs forms open a prefilled `mailto:info@merloex.de` instead. Swap `mailtoSubmit` in `src/pages/Kontakt.tsx` for a real endpoint (Formspree, own API) when one exists.
- Impressum/Datenschutzerklärung content ported verbatim; the Datenschutz text lives in `src/content/datenschutz.html`.
- SPA routing: when deploying to static hosting, configure a fallback of all routes to `index.html`.
