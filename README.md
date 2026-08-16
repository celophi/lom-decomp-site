# lom-decomp GitHub Pages homepage

A deliberately late-1990s / early-2000s styled static homepage for the Legend of Mana decompilation project.

## Local development

```bash
npm install
npm run dev
```

Open the URL printed by Astro. The GitHub Pages base path is `/lom-decomp/`.

## Tests

```bash
npm run test:unit
npm run build
npx playwright install
npm run test:e2e
```

## Deploy

The repository-level `.github/workflows/pages.yml` builds, tests, and publishes `website/dist` to GitHub Pages when changes to `website/**` land on `master`.

The fantasy header artwork is an original generated asset created specifically for this project; it does not reuse game screenshots or character art.
