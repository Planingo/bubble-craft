import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:3000/');

  await page.getByPlaceholder("c.dupuit@monmail.uk").fill("albus.dumbledore@poudlard.com")
  await page.getByPlaceholder('mon super mot de passe').fill("citron sorbet")

  // Click the get started link.
  await page.getByRole('button', { name: 'Connexion' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*students/);

  // Click the get started link.
  await page.getByRole('button', { href: '/pathways' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*pathways/);
})

test('has title', async ({ page }) => {

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Bubble pixel/);
});
