import { test, expect } from '@playwright/test';

test('Phone Number is correct', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.getByRole('link', { name: '+358 9 000' }).click();
  await expect(page).toHaveURL()("+358 9 000");
});