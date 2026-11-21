import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { POManager } from "../../pages/POManager";
import { test } from "../../ManagerFixture";
const { Given, When, Then } = createBdd(test);

Then('the user moves the mouse in the top-left corner of the screen', async ({ page }) => {
    await page.mouse.move(0, 0)
});

Then('the submenu should not be visible', async ({ managerFixture }) => {
    await expect(managerFixture.homePage.subMenu).toBeHidden()
});

Then('the {string} heading image should be visible', async ({ managerFixture }, headingImage: string) => {
    if (headingImage != '') {
        await managerFixture.philippinesPage.validateHeadingImage(headingImage)
    }
});

Then('the BGovPH home button should be visible', async ({ managerFixture }) => {
    await expect(managerFixture.philippinesPage.backToHome).toBeVisible()
});

Then('the search region field should be visible', async ({ managerFixture }) => {
    await expect(managerFixture.philippinesPage.searchRegions).toBeVisible()
});

Then('{string} city should be visible', async ({ managerFixture }, city: string) => {
    await managerFixture.philippinesPage.validateCity(city)
});