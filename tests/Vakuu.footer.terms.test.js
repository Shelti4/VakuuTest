import { test, expect } from '@playwright/test';

test('Footer Terms', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.getByRole('link', { name: 'Terms' }).click();
  await expect(page).toHaveURL(/terms/);
});