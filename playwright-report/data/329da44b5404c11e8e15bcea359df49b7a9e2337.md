# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\features\navigation\philippines.feature.spec.js >> BGovPH Philippines Navigation Bar >> Navigate to About the Philippines
- Location: .features-gen\e2e\features\navigation\philippines.feature.spec.js:6:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.goto: Test timeout of 60000ms exceeded.
Call log:
  - navigating to "https://bettergov.ph/", waiting until "load"

```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | import { createBdd } from "playwright-bdd";
  3  | import { Home } from "../../pages/Home";
  4  | 
  5  | const { Given, When, Then } = createBdd();
  6  | 
  7  | Given('the user is in BetterGovPH home page', async ({ page }) => {
> 8  |     await page.goto('https://bettergov.ph')
     |                ^ Error: page.goto: Test timeout of 60000ms exceeded.
  9  | });
  10 | 
  11 | When('the user hovers on the Philippines navigation bar', async ({ page }) => {
  12 |     const home = new Home(page)
  13 |     await home.philippinesNavBar.hover()
  14 | });
  15 | 
  16 | When('the user clicks on the {string} submenu', async ({ page }, submenu: string) => {
  17 |     const home = new Home(page)
  18 |     await home.clickPhilippinesSubmenu(submenu)
  19 | });
  20 | 
  21 | Then('the header {string} should be visible', async ({ page }, header: string) => { 
  22 |     const home = new Home(page) 
  23 |     await home.validateHeaderVisibility(header)
  24 | });
  25 | 
  26 | Then('the sub-URL should be {string}', async ({ page }, subURL: string) => {
  27 |     await expect(page.url().endsWith(subURL)).toBeTruthy()  // Implement for POM
  28 | });
  29 | 
  30 | Then('the user moves the mouse in the top-left corner of the screen', async ({ page }) => {
  31 |     await page.mouse.move(0, 0)     // Implement for POM
  32 | });
  33 | 
  34 | Then('the submenu should not be visible', async ({ page }) => {
  35 |     await expect(page.getByRole('menu')).toBeHidden()   // Implement for POM
  36 | });
  37 | 
  38 | Then('the {string} heading image should be visible', async ({ page }, headingImage: string) => {
  39 |     await expect(page.locator(`//img[@alt="${headingImage}"]`)).toBeVisible()   // Implement for POM
  40 | });
  41 | 
  42 | Then('the BGovPH home button should be visible', async ({ page }) => {
  43 |     await expect(page.getByTitle('Back to Home')).toBeVisible() // Implement for POM
  44 | });
  45 | 
  46 | Then('the search region field should be visible', async ({ page }) => {
  47 |     await expect(page.getByPlaceholder('Search regions...')).toBeVisible()  // Implement for POM
  48 | });
  49 | 
  50 | Then('{string} city should be visible', async ({ page }, city: string) => {
  51 |     await expect(page.getByRole('button', { name: city })).toBeVisible()    // Implement for POM
  52 | });
```