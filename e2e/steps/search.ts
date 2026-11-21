import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../ManagerFixture";
const { Given, When, Then } = createBdd(test);

Given('the search field should be visible', async ({ managerFixture }) => {
    await expect(managerFixture.homePage.searchField).toBeVisible()
});

When('the user provides a search term {string}', async ({ managerFixture }, searchTerm: string) => {
    await managerFixture.homePage.searchField.fill(searchTerm)
});

Then('the result {string} should be visible', async ({ managerFixture }, result: string) => {
    await managerFixture.homePage.validateVisibilityOfResult(result)
});

When('the user clicks on the result {string}', async ({ managerFixture }, result: string) => {
    await managerFixture.homePage.clickResult(result)
});

Then('the user should be redirected to {string}', async ({ page }, url: string) => {
    const newPage = await page.waitForEvent('popup')
    await newPage.waitForLoadState()
    await expect(newPage).toHaveURL(url)
    // Recaptcha stage
    // await newPage.getByRole('button', { name: 'Begin begin' }).click()
    // const newPage2 = await page.waitForEvent('popup')
    // await newPage.waitForLoadState()
    // await newPage2.getByRole('textbox', { name: 'email' }).isVisible()
});