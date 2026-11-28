import { test } from "../ManagerFixture"
import { createBdd } from "playwright-bdd";
import fs from 'fs'; 
import path from 'path';
import YAML from 'yaml';

const { When, Then } = createBdd(test)
const servicesFilePath = path.resolve(__dirname, '../../data/services.yml')
const servicesFileContents = fs.readFileSync(servicesFilePath, 'utf-8')
const servicesTestData = YAML.parse(servicesFileContents)

Then('the sub-URL should be {string}', async ({ managerFixture }, subURL: string) => {
    await managerFixture.validateSubURL(subURL)
});

Then('the header {string} should be visible', async ({ managerFixture }, header: string) => { 
    await managerFixture.validateHeaderVisibility(header)
});

When('the search field with placeholder text {string} should be visible', async ({ managerFixture}, placeholder: string) => {
    await managerFixture.validateFieldVisibilityByPlaceholder(placeholder)
});

When('the user navigates on the {string} under {string}', async ({ managerFixture }, subMenuItem: string, globalNavigation: string) => {
    const data = servicesTestData[globalNavigation][subMenuItem]

    await managerFixture.homePage.clickSubmenuItem(data.name)
    await managerFixture.validateHeaderVisibility(data.name)
    await managerFixture.validateSubURL(data.subUrl)
});

Then('the search field with placeholder {string} is visible under {string}', async ({ managerFixture }, placeholderKey: string, globalNavigation: string) => {
    const placeholder = servicesTestData[globalNavigation][placeholderKey]

    await managerFixture.validateFieldVisibilityByPlaceholder(placeholder)
});

Then('the user provided search term {string} in search field with placeholder {string} under {string}', async ({ managerFixture, page }, searchTerm: string, placeholderKey: string, globalNavigation: string) => {
    const placeholder = servicesTestData[globalNavigation][placeholderKey] 

    await managerFixture.fillSearchFieldByPlaceholder(placeholder, searchTerm)
});