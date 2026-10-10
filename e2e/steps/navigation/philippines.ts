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