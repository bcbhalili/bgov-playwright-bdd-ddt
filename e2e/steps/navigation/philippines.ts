import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { POManager } from "../../pages/POManager";

const { Given, When, Then } = createBdd();

Given('the user is in BetterGovPH home page', async ({ page }) => {
    await page.goto('https://bettergov.ph')
});

When('the user hovers on the Philippines navigation bar', async ({ page }) => {
    const manager = new POManager(page)
    await manager.homePage.philippinesNavBar.hover()
});

When('the user clicks on the {string} submenu', async ({ page }, submenu: string) => {
    const manager = new POManager(page)
    await manager.homePage.clickPhilippinesSubmenu(submenu)
});

Then('the header {string} should be visible', async ({ page }, header: string) => { 
    const manager = new POManager(page)
    await manager.philippinesPage.validateHeaderVisibility(header)
});

Then('the sub-URL should be {string}', async ({ page }, subURL: string) => {
    const manager = new POManager(page)
    await manager.philippinesPage.validateSubURL(subURL)
});

Then('the user moves the mouse in the top-left corner of the screen', async ({ page }) => {
    await page.mouse.move(0, 0)
});

Then('the submenu should not be visible', async ({ page }) => {
    const manager = new POManager(page)
    await expect(manager.homePage.subMenu).toBeHidden()
});

Then('the {string} heading image should be visible', async ({ page }, headingImage: string) => {
    const manager = new POManager(page)
    await manager.philippinesPage.validateHeadingImage(headingImage)
});

Then('the BGovPH home button should be visible', async ({ page }) => {
    const manager = new POManager(page)
    await expect(manager.philippinesPage.backToHome).toBeVisible()
});

Then('the search region field should be visible', async ({ page }) => {
    const manager = new POManager(page)
    await expect(manager.philippinesPage.searchRegions).toBeVisible()
});

Then('{string} city should be visible', async ({ page }, city: string) => {
    const manager = new POManager(page)
    await manager.philippinesPage.validateCity(city)
});