import { test } from "../ManagerFixture"
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd(test)

Given('the user is in BetterGovPH home page', async ({ page }) => {
    await page.goto('https://bettergov.ph')
});

When('the user hovers on the Philippines navigation bar', async ({ managerFixture }) => {
    await managerFixture.homePage.philippinesNavBar.hover()
});

When('the user hovers on the Services navigation bar', async ({ managerFixture }) => {
    await managerFixture.homePage.servicesNavBar.hover()
});

When('the user clicks on the {string} submenu', async ({ managerFixture }, submenu: string) => {
    await managerFixture.homePage.clickSubmenuItem(submenu)
});