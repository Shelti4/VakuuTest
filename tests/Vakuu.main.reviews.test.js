import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.locator('.arrow-left').click();
  await expect(locator).isEnabled('.arrow-left');
  await page.locator('.arrow-right').click();
  await expect(locator).isEnabled('.arrow-right');
});