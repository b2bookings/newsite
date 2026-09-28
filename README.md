# Solution Group website

Static click-through prototype of the Solution Group marketing site.

## Put it on GitHub

1. Create a new repository on github.com.
2. Upload the contents of this folder to the repo root (Add file > Upload files), including the hidden `.nojekyll` file.
3. Settings > Pages > Source: Deploy from a branch, Branch: `main`, folder `/ (root)`. Save.
4. The site goes live at `https://<your-org>.github.io/<repo-name>/` within a few minutes.

## Viewing locally

Double-clicking `index.html` shows a blank page, because browsers block the separate screen files over `file://`. Run a local server from this folder instead:

    python3 -m http.server 8000

then open http://localhost:8000.

## Structure

- `index.html`: entry point and page router
- `styles.css`, `tokens/`: brand tokens and base styles
- `js/ds-bundle.js`: compiled design-system components
- `js/*.jsx`: site shell and page screens
- `assets/`: Rubik fonts, logos, brand imagery

## Notes

- Prototype, not production code. React, Babel and Lucide icons load from the unpkg CDN.
- Replace placeholder content (metrics, site names, form fields) with approved copy before launch.
- The contact form does not submit anywhere.
