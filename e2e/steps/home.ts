import { POManager } from "../pages/POManager";
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd()

Given('the user is in BetterGovPH home page', async ({ page }) => {
    await page.goto('https://bettergov.ph')
});

When('the user hovers on the Philippines navigation bar', async ({ page }) => {
    const manager = new POManager(page)
    await manager.homePage.philippinesNavBar.hover()
});

When('the user hovers on the Flood Control Projects global navigation bar', async ({ page }) => {
    const manager = new POManager(page)
    await manager.homePage.floodControlProjectsNavBar.hover()
});

When('the user clicks on the {string} submenu', async ({ page }, submenu: string) => {
    const manager = new POManager(page)
    await manager.homePage.clickPhilippinesSubmenu(submenu)
});