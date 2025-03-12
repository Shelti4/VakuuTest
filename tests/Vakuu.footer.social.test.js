import { test, expect } from '@playwright/test';

test('Footer Social', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  await expect(page).toHaveURL(/instagram/);
  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  await expect(page).toHaveURL(/twitter/);
  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).nth(3).click();
  await expect(page).toHaveURL(/facebook/);
  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).nth(3).click();
  await expect(page).toHaveURL(/telegram/);
});