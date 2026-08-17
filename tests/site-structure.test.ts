import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

describe('simplified site structure', () => {
  it('includes the generated navigation icons and colored parchment banners', () => {
    const expected = [
      'public/images/icons/home.webp',
      'public/images/icons/blog.webp',
      'public/images/icons/progress.webp',
      'public/images/icons/github.webp',
      'public/images/banners/green.webp',
      'public/images/banners/blue.webp',
      'public/images/banners/blush.webp',
      'public/images/banners/lavender.webp',
    ];
    for (const file of expected) expect(fs.existsSync(path.join(root, file)), file).toBe(true);
  });

  it('contains a markdown-backed blog collection', () => {
    expect(fs.existsSync(path.join(root, 'src/content.config.ts'))).toBe(true);
    expect(fs.existsSync(path.join(root, 'src/data/blog/welcome.md'))).toBe(true);
  });
});
