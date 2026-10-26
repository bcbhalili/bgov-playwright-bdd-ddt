# bgov-playwright-bdd-ddt

This repository contain TypeScript files to be used in Test Automation of a Civic Technology platform called BetterGovPH. This README file also serve as lecture notes throughout Live Coding Season 5.

NPM Version: 12.2.0
Playwright Version: 1.59.1

### .gitignore setup
```
node_modules/
playwright-report/
test-results/
playwright.config.ts
.features-gen/
```

SETUP AND FIRST RUN
1. Install VSCode Extension: Cucumber (Gherkin) Full Support by Alexander Krechik
2. Install Playwright and BDD Packages: 
	npm install -D @playwright/test@1.59.0
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

## Page Object Models (POMs)
Without POM:
- hard to maintain
- hardcoded values
- unsimplified implementation of code (suffers readability)
```
await page.goto('/login');
await page.locator('#email').fill('user@example.com');
await page.locator('#password').fill('password123');
await page.locator('button[type="submit"]').click();
await expect(page.locator('.dashboard-welcome')).toBeVisible();
```

With POM:
- locators housed in one place; dev made UI changes? easily adjusted in that place
- readable code; represents behavior
- scalability; new team members can understand faster

Sample POM (Login.ts)
- Promotes encapsulation; one of the pillars of Object-Oriented Programming
```
import { Page, Locator } from '@playwright/test';

export class Login {
    // Page member
    private readonly page: Page

    // Constructor
    constructor(page: Page) {
        this.page = page
    }

    // Declare locators as getters
    get emailField(): Locator {
        return this.page.getByLabel('Email')
    }
    get passwordField(): Locator {
        return this.page.getByLabel('Password')
    }
    get signInButton(): Locator {
        return this.page.getByLabel('Sign In')
    }
}
```
Sample import (from step definition file)
```
import { Login } from "../../pages/Login";
```
Sample object creation (from a step definition using page fixture)
```
const login = new Login(page)
```

Reference: https://www.anton.qa/blog/posts/page-object-model-in-playwright-with-typescript-complete-guide

## POM Manager Implementation
1. Create page objects
```
// Login.ts

import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-submit');
  }

  async login(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}
```
```
// Dashboard.ts

import { type Page, type Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly welcomeMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeMessage = page.locator('.welcome-banner');
  }
}
```
2. Create a Page Object Manager
```
// POManager.ts

import { type Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';

export class POManager {
  readonly page: Page;
  readonly loginPage: LoginPage;
  readonly dashboardPage: DashboardPage;

  constructor(page: Page) {
    this.page = page;
    // Instantiate all your page classes here
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getDashboardPage() {
    return this.dashboardPage;
  }
}
```
3. Use POManager in Step Definitions
4. [Optional] Use POManager in a custom fixture
```
// baseTest.ts
import { test as base } from '@playwright/test';
import { POManager } from '../pages/POManager';

// Extend base test to include the POManager automatically
export const test = base.extend<{ poManager: POManager }>({
  poManager: async ({ page }, use) => {
    const poManager = new POManager(page);
    await use(poManager);
  },
});

export { expect } from '@playwright/test';
```
```
// tests/auth.spec.ts
import { test, expect } from '../fixtures/baseTest'; // Import extended test

test('User can log in cleaner', async ({ poManager, page }) => {
  await page.goto('https://example.com');
  await poManager.getLoginPage().login('user', 'pass');
  await expect(poManager.getDashboardPage().welcomeMessage).toBeVisible();
});
```

## Handling new tabs (2 methods)
METHOD #1: Using context fixture
```
const [newPage] = await Promise.all([ context.waitForEvent('page') ])
await newPage.waitForLoadState()
```
METHOD #2: Using page fixture
```
const newPage = await page.waitForEvent('popup')
await newPage.waitForLoadState()
```
Note:
- page fixture represents a single browser tab or popup
- context fixture represents an isolated browser session (behaves as an incognito window by default)

## Create, Modify, and Merge branch to main (console method)
1. git pull (sync local and remote - up to date - get latest code) 
2. git checkout -b custom-branch-name (create and move to that branch; -b stands for branch)
3. Make desired changes
4. git add . (add all files t stage)
5. git commit -m "descriptive commit message"
6. git push -u origin custom-branch-name (-u is used to create a remote custom branch and push updates; no need for -u for repeated push)
7. Go to GitHub repository > Pull requests > new pull request
8. base: target branch
9. compare: custom branch
10. Create pull request
11. Fill title and description
12. Set assignee/s
13. Create pull request
14. Code review process
15. Merge pull request > Confirm merge
16. (optional) delete branch
17. Switch to main branch
18. git pull