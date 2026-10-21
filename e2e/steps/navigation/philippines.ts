import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { Home } from "../../pages/Home";

const { Given, When, Then } = createBdd();

Given('the user is in BetterGovPH home page', async ({ page }) => {
    await page.goto('https://bettergov.ph')
});

When('the user hovers on the Philippines navigation bar', async ({ page }) => {
    const home = new Home(page)
    await home.philippinesNavBar.hover()
});

When('the user clicks on the {string} submenu', async ({ page }, submenu: string) => {
    const home = new Home(page)
    await home.clickPhilippinesSubmenu(submenu)
});

Then('the header {string} should be visible', async ({ page }, header: string) => { 
    const home = new Home(page) 
    await home.validateHeaderVisibility(header)
});

Then('the sub-URL should be {string}', async ({ page }, subURL: string) => {
    await expect(page.url().endsWith(subURL)).toBeTruthy()  // Implement for POM
});

Then('the user moves the mouse in the top-left corner of the screen', async ({ page }) => {
    await page.mouse.move(0, 0)     // Implement for POM
});

Then('the submenu should not be visible', async ({ page }) => {
    await expect(page.getByRole('menu')).toBeHidden()   // Implement for POM
});

Then('the {string} heading image should be visible', async ({ page }, headingImage: string) => {
    await expect(page.locator(`//img[@alt="${headingImage}"]`)).toBeVisible()   // Implement for POM
});

Then('the BGovPH home button should be visible', async ({ page }) => {
    await expect(page.getByTitle('Back to Home')).toBeVisible() // Implement for POM
});

Then('the search region field should be visible', async ({ page }) => {
    await expect(page.getByPlaceholder('Search regions...')).toBeVisible()  // Implement for POM
});

Then('{string} city should be visible', async ({ page }, city: string) => {
    await expect(page.getByRole('button', { name: city })).toBeVisible()    // Implement for POM
});