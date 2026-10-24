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

Then('the user should be redirected to the NBI Clearance Page', async ({ context }) => {
    const [newPage] = await Promise.all([ context.waitForEvent('page') ])
    await newPage.waitForLoadState()
    await expect(newPage).toHaveURL("https://clearance.nbi.gov.ph/")
});