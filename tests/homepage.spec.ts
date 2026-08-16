import { expect, test } from '@playwright/test';

test('communicates the project clearly in the period-style homepage', async ({ page }) => {
  await page.goto('./');

  await expect(page).toHaveTitle(/Legend of Mana Decompilation Project/);
  await expect(page.getByRole('heading', { name: 'Welcome!' })).toBeVisible();
  await expect(page.getByText('1 main executable + 17 overlays')).toBeVisible();
  await expect(page.getByRole('heading', { name: '18 Binaries Progress' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'The Decompilation Cycle' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Compiler Archaeology' })).toBeVisible();
});

test('renders all 18 real project modules', async ({ page }) => {
  await page.goto('./');
  const moduleMap = page.getByTestId('module-map');
  await expect(moduleMap.locator('.module-cell')).toHaveCount(18);
  await expect(moduleMap.getByText('GNAME.BIN')).toBeVisible();
  await expect(moduleMap.getByText('TITLE.BIN')).toBeVisible();
  await expect(moduleMap.getByText('SLUS_010.13')).toBeVisible();
});

test('primary external links are valid', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('link', { name: /View on GitHub/ })).toHaveAttribute('href', 'https://github.com/celophi/lom-decomp');
  await expect(page.getByRole('link', { name: /See progress/ })).toHaveAttribute('href', 'https://decomp.dev/celophi/lom-decomp');
});

test('mobile page has no horizontal overflow', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile');
  await page.goto('./');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});
