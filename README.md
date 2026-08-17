# lom-decomp project website

The site has four navigation destinations:

- **Home** — a short explanation of what the project is, what decompilation means, how matching works, and why the project exists.
- **Blog** — local Markdown posts for project updates and longer write-ups.
- **Progress** — links to the project on decomp.dev.
- **GitHub** — links to the source repository.

## Local development

```bash
npm install
npm run dev
```

Astro is configured for the GitHub Pages base path `/lom-decomp-site/`.

## Adding a blog post

Create a Markdown file in:

```text
src/data/blog/
```

For example:

```text
src/data/blog/compression-retrospective.md
```

Use this frontmatter:

```md
---
title: "Reverse engineering the compressor"
description: "How the original compression format was reconstructed."
pubDate: 2026-08-20
draft: false
---

Write the post here in normal Markdown.
```

Posts with `draft: true` are excluded from the generated blog index and article routes. Published posts are automatically sorted newest-first.

## Tests

```bash
npm run test:unit
npm run build
npx playwright install
npm run test:e2e
```

## Deployment

`.github/workflows/pages.yml` builds, tests, and deploys the static `dist/` directory to GitHub Pages on pushes to `main` or `master`.

## Artwork

The header, navigation icons, floral ornaments, and parchment section banners are original generated assets created for this project. The site does not depend on game screenshots or official character artwork.
