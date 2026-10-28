import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { POManager } from "../pages/POManager";
const { Given, When, Then } = createBdd();

Given('the search field should be visible', async ({ page }) => {
    const manager = new POManager(page)
    await expect(manager.homePage.searchField).toBeVisible()
});

When('the user provides a search term {string}', async ({ page }, searchTerm: string) => {
    const manager = new POManager(page)
    await manager.homePage.searchField.fill(searchTerm)
});

Then('the result {string} should be visible', async ({ page }, result: string) => {
    const manager = new POManager(page)
    await manager.homePage.validateVisibilityOfResult(result)
});

When('the user clicks on the result {string}', async ({ page }, result: string) => {
    const manager = new POManager(page)
    await manager.homePage.clickResult(result)
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