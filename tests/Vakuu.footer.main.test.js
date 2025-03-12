import { test, expect } from '@playwright/test';

test('Footer Main', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).first().click();
  await expect(page).toHaveURL(/polis812.github.io/);
});