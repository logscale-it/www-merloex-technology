# Merloex — React port

React + TypeScript + Vite port of the merloex.de WordPress/Divi site (from the static restore in `../www.merloex.de`).

```sh
bun install
bun run dev     # dev server
bun run build   # production build → dist/
```

## Notes

- **Photos are illustrations.** The original photos under `wp-content/uploads` were not in the restore and are not on archive.org. `src/assets/*.svg` are flat brand-style illustrations with the original filenames and aspect ratios — drop a real photo next to one and update its import in `src/assets/images.ts`. The logo (`logo.png`) is the real one, recovered from `image001.png`; `src/assets/logo-mark.svg` is a vector redraw of the mark without text (also used as `public/favicon.svg`).
- **Forms have no backend.** The original Gravity Forms install is gone; the Kontakt and Jobs forms open a prefilled `mailto:info@merloex.de` instead. Swap `mailtoSubmit` in `src/pages/Kontakt.tsx` for a real endpoint (Formspree, own API) when one exists.
- Impressum/Datenschutzerklärung content ported verbatim; the Datenschutz text lives in `src/content/datenschutz.html`.
- SPA routing: when deploying to static hosting, configure a fallback of all routes to `index.html`.
