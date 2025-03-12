import { test, expect } from '@playwright/test';

test('Header Blog', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.getByText('Blog').first().click();
  await expect(page).toHaveURL(/blog/);
});