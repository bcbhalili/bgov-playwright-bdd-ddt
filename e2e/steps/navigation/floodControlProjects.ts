import { POManager } from "../../pages/POManager";
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd()

Then('the FCP header text {string} should be visible', async ({ page }, headerText: string) => {
    const manager = new POManager(page)
    await manager.fcpPage.verifyFCPHeader(headerText)
});

Then('the {string} label containing {string} in field should be visible', async ({ page }, label: string, field: string) => {
    const manager = new POManager(page)
    await manager.fcpPage.verifyFCPFilterLabelAndField(label, field)
});

Then('the Search Projects label and field should be visible', async ({ page }) => {
    const manager = new POManager(page)
    await expect(manager.fcpPage.searchProjectsLabel).toBeVisible()
    await expect(manager.fcpPage.searchProjectsField).toBeVisible()
});

When('the user provided {string} in the Search Project field', async ({ page }, projectName: string) => {
    const manager = new POManager(page)
    await manager.fcpPage.searchProjectsField.fill(projectName)
});

When('the user provided {string} as the Infrastructure Year', async ({ page }, year: string) => {
    const manager = new POManager(page)
    await manager.fcpPage.pickInfrastructureYear(year)
});

When('the user provided {string} as the Region', async ({ page }, region: string) => {
    const manager = new POManager(page)
    await manager.fcpPage.pickRegion(region)
});

When('the user provided {string} as the Province', async ({ page }, province: string) => {
    const manager = new POManager(page)
    await manager.fcpPage.pickProvince(province)
});

When('the user provided {string} as the Type of Work', async ({ page }, typeOfWork: string) => {
    const manager = new POManager(page)
    await manager.fcpPage.pickTypeOfWork(typeOfWork)
});

When('the user provided {string} as the District Engineering Office', async ({ page }, deo: string) => {
    const manager = new POManager(page)
    await manager.fcpPage.pickDEO(deo)
});

When('the user provided {string} as the Legislative District', async ({ page }, legislativeDistrict: string) => {
    const manager = new POManager(page)
    await manager.fcpPage.pickLegislativeDistrict(legislativeDistrict)
});