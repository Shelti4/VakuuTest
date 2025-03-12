import { test, expect } from '@playwright/test';

test('Header Main', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.getByRole('link', { name: 'Calculate the price' }).first().click();
  await expect(page).toHaveURL(/car/);
});