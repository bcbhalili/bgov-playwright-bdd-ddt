import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();

Given('the user is in BetterGovPH home page', async ({ page }) => {
    await page.goto('https://bettergov.ph')
});

When('the user hovers on the Philippines navigation bar', async ({ page }) => {
    await page.getByRole('link', { name: 'Philippines', exact: true }).hover()
});

When('the user clicks on the About the Philippines submenu', async ({ page }) => {
    await page.getByRole('menuitem', { name: 'About the Philippines' }).click()
});

Then('the header About the Philippines should be visible', async ({ page }) => {
    await page.getByRole('heading', { name: 'About the Philippines' }).isVisible()
});