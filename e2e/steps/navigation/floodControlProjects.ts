import { POManager } from "../../pages/POManager";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd()

Then('the FCP header text {string} should be visible', async ({ page }, headerText: string) => {
    await expect(page.getByRole('heading', { name: headerText }).first()).toBeVisible()
});

Then('the {string} label containing {string} in field should be visible', async ({ page }, label: string, field) => {
    await expect(page.getByText(label, { exact: true })).toBeVisible()
    await expect(page.getByRole('button', { name: field })).toBeVisible()
});


Then('the Search Projects label and field should be visible', async ({ page }) => {
    await expect(page.getByText('Search Projects', { exact: true })).toBeVisible()
    await expect(page.getByPlaceholder('Projects, contractors, municipality, province, region...')).toBeVisible()
});