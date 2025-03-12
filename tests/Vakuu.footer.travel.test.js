import { test, expect } from '@playwright/test';

test('Footer Travel', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.getByRole('link', { name: 'Travel insurance' }).click();
  await expect(page).toHaveURL(/travel/);
});