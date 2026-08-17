import { expect, test } from '@playwright/test';

test('homepage answers what the project is without the old dashboard sections', async ({ page }) => {
  await page.goto('./');

  await expect(page).toHaveTitle(/Legend of Mana Decompilation Project/);
  await expect(page.getByRole('heading', { name: 'What is this?' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'What is decompilation?' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'What does “matching” mean?' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Why are we doing it?' })).toBeVisible();
  await expect(page.getByText('18 Binaries Progress')).toHaveCount(0);
  await expect(page.getByText('Compiler Archaeology')).toHaveCount(0);
});

test('navigation contains only home, blog, progress and GitHub', async ({ page }) => {
  await page.goto('./');
  const nav = page.getByRole('navigation');

  await expect(nav.getByRole('link')).toHaveCount(4);
  await expect(nav.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', /\/blog\/$/);
  await expect(nav.getByRole('link', { name: 'Progress' })).toHaveAttribute('href', 'https://decomp.dev/celophi/lom-decomp');
  await expect(nav.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/celophi/lom-decomp');
});

test('blog index and article pages work', async ({ page }) => {
  await page.goto('./blog/');
  await expect(page.getByRole('heading', { name: 'Project Blog' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Why Legend of Mana?' })).toBeVisible();

  await page.getByRole('link', { name: 'Why Legend of Mana?' }).click();
  await expect(page.getByRole('heading', { name: 'Why Legend of Mana?' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Why decompile it?' })).toBeVisible();
});

test('mobile page has no horizontal overflow', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile');
  await page.goto('./');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});
