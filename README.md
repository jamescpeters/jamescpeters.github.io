# jamescpeters.com

Personal website built with Astro and Lumos.

## Technology Stack

- Astro
- Lumos
- TypeScript
- GitHub Pages
- GitHub Actions

## Local Development

Requires Node.js 24 and npm.

### Install dependencies

    npm ci

### Start development server

    npm run dev

### Run Astro diagnostics

    npm run check

### Build production website

    npm run build

### Preview production build

    npm run preview

## Project Structure

- `src/pages/` — Website pages and routes
- `src/layouts/` — Page layouts
- `src/components/` — Lumos components
- `src/styles/` — Styling and design tokens
- `src/assets/` — Imported assets
- `public/` — Static files
- `.github/workflows/` — GitHub Actions

## Deployment

The website is hosted through GitHub Pages.

Production deployments are triggered by pushes
to the `main` branch using GitHub Actions.

Website: https://jamescpeters.com

## Future Development

Additional pages and functionality will be
introduced incrementally after the initial
Astro/Lumos migration.
