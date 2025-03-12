import { test, expect } from '@playwright/test';

test('Header Main', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.locator('.main__header__logo').click();
  await expect(page).toHaveURL(/vacuu/);
});