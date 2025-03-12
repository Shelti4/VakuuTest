import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.locator('img:nth-child(4)').first().click();
  expect(locator).isEnabled('img:nth-child(4)')
});