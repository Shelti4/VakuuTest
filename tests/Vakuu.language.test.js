import { test, expect } from '@playwright/test';

test('Language', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.getByRole('combobox').selectOption('fin');
  await expect(page.locator('h1')).toContainText('Varo turvallisuuttasi');
});