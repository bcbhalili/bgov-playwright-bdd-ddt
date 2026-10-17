# bgov-playwright-bdd-ddt

This repository contain TypeScript files to be used in Test Automation of a Civic Technology platform called BetterGovPH.

SETUP AND FIRST RUN
1. Install VSCode Extension: Cucumber (Gherkin) Full Support by Alexander Krechik
2. Install Playwright and BDD Packages: 
	npm install -D @playwright/test@1.62.0
	npm install -D playwright-bdd
	// -D means devDependencies (tools needed to run locally)
3. Download browser binaries: 
	npx playwright install
	// webkit, chromium, firefox
4. e2e folder setup (e2e and its subfolders are custom named)
	- root/e2e
	- root/e2e/features
	- root/e2e/step-definitions (or steps) 
	- root/e2e/models (or pages)
5. Create playwright config: playwright.config.ts
```
import { defineConfig, devices } from '@playwright/test'    
// Helper function for configurations such as:
//      - testDir: location of test files
//      - fullyParallel: enables/disables running of execution simultaneously
import { defineBddConfig } from 'playwright-bdd'            
// To instruct playwright where to look for
// feature files and step definitions

// Define the path of feature files (features) and step definitions (steps)
const testDir = defineBddConfig({
    features: 'e2e/features/**/*.feature',  // ** added to implement sub-folders under features
    steps: 'e2e/steps/**/*.ts',             // ** added to implement sub-folders under step-definitions
});

export default defineConfig({
    testDir,
    reporter: 'html',
    fullyParallel: true,
    use: {
        screenshot: 'only-on-failure',
        trace: 'on-first-retry'
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        }
    ]
});
```
6. Feature File
```
# Documentation here

Feature: High Level Scenario
    As a user who wants to <user's wants or needs to use the product>
    I want to <ways or means to fulfill the user's wants or needs>
    So that I <outcome when the user's wants or needs have been fulfilled>

    Acceptance Criteria (or Validation Points)
        1.  <validation point 1>
        2.  <validation point 2>
        3.  <validation point 3>
        ...
        n.  <validation point n>

    Background: Background name 
        Given Start to type your Given step here

    Scenario: Scenario name
        Given Start to type your Given step here
        When Start to type your When step here
        Then Start to type your Then step here
        And Start to type your And step here

    Scenario Outline: Scenario Outline name
        Given Start to type your Given step here "<column1>"
        When Start to type your When step here "<column2>"
        Then Start to type your Then step here "<column3>"
        | column1   | column2   | column3 |
        | value1    | value4    | value7  |
        | value2    | value5    | value8  |
        | value3    | value3    | value9  |
```
7. Run npx bddgen to generate undefined BDD steps
	- Copy Givens/Whens/Thens
8. Step Definition: e2e/step-definitions
```
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();

// Paste copied from step 7
```
9. Add basic documentations in package.json:
```
{
  "name": "playwright-ts-bdd-scratch",
  "author": { 
    "name": "Biendroid",
    "email": "test@mail.com"
  },
  "scripts": {
    "test-all": "npx bddgen && npx playwright test",
    "test-chromium": "npx bddgen && npx playwright test --project=chromiumm"
  },
  "devDependencies": {
    "@playwright/test": "^1.62.0",
    "playwright-bdd": "^9.2.1"
  }
}
```
10. First Run
[e2e/steps/navigation/philippines.ts]
```
import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();


Given('the user is in BetterGovPH home page', async ({ page }) => {
    await page.goto("https://bettergov.ph/")
});

When('the user navigates to {string}', async ({ page }, subPage) => {
    await page.locator('//div[@class="relative group"]/a[@href="/philippines"]').hover()
    await page.getByRole('menuitem', { name: subPage }).click()
    await page.waitForFunction(() => {
        return Array.from(document.images).every(img => img.complete && img.naturalWidth > 0);
    });
});

Then('the subdomain should be {string}', async ({page}, subDomain) => {
    await expect(page.url().endsWith(subDomain)).toBe(true) 
});
```
[e2e/features/navigation/philippines.feature]
```
# Automation Engineer: Biendroid
# Date Implemented: October 2, 2026

Feature: Philippines Navigation Bar
    As a user who wants to know about the Philippines
    I want to use the Philippines Navigation Bar
    So that I am knowledgable about the Philippines

    Acceptance Criteria
        1. Subdomains
            a. About the Philippines:   /philippines/about
            b. History:                 /philippines/history
            ...
            z. Weather:                 /data/weather

    Background: Go to BetterGovPH Home Page
        Given the user is in BetterGovPH home page

    Scenario: Navigate to About the Philippines
        When the user navigates to "About the Philippines"
        Then the subdomain should be "/philippines/about"
```
PARAMETERIZATION
- programming practice where codes are designed to accept placeholders called parameters instead of fixed logic, hardcoded values
- parameters (variables in methods); arguments are actual values supplied in parameters
- promotes code reusability, maintenance, and testability; complies to DRY (Don't Repeat Yourself) principle
- arguments happen in feature files, parameters happen in step definitions

DOCSTRING and TAGS
- good tool to document step definitions
- https://typedoc.org/documents/Tags.TypeScript_Tags.html
Sample:
```
/**
 * @author Biendroid  
 * @alias PH_SD_002
 * @description 
 *      Performs a mouse click on a submenu under Philippines global navigation.
 *      Pre-requisite: Must use PH_SD_001 to hover on Philippines global navigation and display submenus 
 * @param {string} submenu - The submenu under Philippines global navigation
 */
```
REMOVE SUBMENU IN GLOBAL NAVIGATION
```
When('the user moves the mouse at the top-left side of the screen', async ({ page }) => {
  await page.mouse.move(0, 0)
});
Then('the submenu should not be visible', async ({ page }) => {
    await expect(page.getByRole('menu')).toBeHidden()
});
```
WAIT FOR IMAGE TO LOAD
```
Then('the {string} heading image should load', async ({ page }, headingImage) => {
    await expect(page.locator(`//img[@alt="${headingImage}"]`)).not.toHaveJSProperty('naturalWidth', 0);
});
```