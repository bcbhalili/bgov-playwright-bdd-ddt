import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();

Given('the user is in BetterGovPH home page', async ({ page }) => {
    await page.goto('https://bettergov.ph')
});

When('the user hovers on the Philippines navigation bar', async ({ page }) => {
    await page.getByRole('link', { name: 'Philippines', exact: true }).hover()
});

When('the user clicks on the {string} submenu', async ({ page }, submenu: string) => {
    await page.getByRole("menuitem", { name: submenu }).click()
});

Then('the header {string} should be visible', async ({ page }, header: string) => {  
    await page.getByRole('heading', { name: header })
});

Then('the sub-URL should be {string}', async ({ page }, subURL: string) => {
    await expect(page.url().endsWith(subURL)).toBeTruthy()
});

Then('the user moves the mouse in the top-left corner of the screen', async ({ page }) => {
    await page.mouse.move(0, 0)
});

Then('the submenu should not be visible', async ({ page }) => {
    await expect(page.getByRole('menu')).toBeHidden()
});

Then('the {string} heading image should be visible', async ({ page }, headingImage: string) => {
    await expect(page.locator(`//img[@alt="${headingImage}"]`)).toBeVisible()
});

Then('the BGovPH home button should be visible', async ({ page }) => {
    await expect(page.getByTitle('Back to Home')).toBeVisible()
});

Then('the search region field should be visible', async ({ page }) => {
    await expect(page.getByPlaceholder('Search regions...')).toBeVisible()
});

Then('{string} city should be visible', async ({ page }, city: string) => {
    await expect(page.getByRole('button', { name: city })).toBeVisible()
});