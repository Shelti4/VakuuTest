import { test, expect } from '@playwright/test';

test('Get started', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.getByRole('button', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/insurance/);
});