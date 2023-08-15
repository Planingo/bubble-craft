import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Bubble pixel/);
});

test('reset link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Password forget' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*reset/);
});

test('signup link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Create an account' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*signup/);
});

test('login link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByPlaceholder("c.dupuit@monmail.uk").fill("albus.dumbledore@poudlard.com")
  await page.getByPlaceholder('mon super mot de passe').fill("citron sorbet")

  // Click the get started link.
  await page.getByRole('button', { name: 'Connexion' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*students/);
});
