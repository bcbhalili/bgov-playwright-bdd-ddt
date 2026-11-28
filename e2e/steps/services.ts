import { expect } from "playwright/test";
import { test } from "../ManagerFixture"
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd(test)

Then('the url should be {string} upon click of {string} result', async ({ managerFixture, page }, searchTerm: string, url: string) => {
    const newPagePromise = page.waitForEvent('popup')
    await managerFixture.servicesPage.clickResult(searchTerm)
    const newPage = await newPagePromise
    await expect(newPage.url().match(url))
});