import { test } from "../ManagerFixture"
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd(test)

Then('the sub-URL should be {string}', async ({ managerFixture }, subURL: string) => {
    await managerFixture.validateSubURL(subURL)
});

Then('the header {string} should be visible', async ({ managerFixture }, header: string) => { 
    await managerFixture.validateHeaderVisibility(header)
});

When('the search field with placeholder text {string} should be visible', async ({ managerFixture}, placeholder: string) => {
    await managerFixture
});