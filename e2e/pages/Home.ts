import { expect, Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class Home extends BasePage {
    // Constructor
    constructor(page: Page) {
        super(page)
    }

    // Abstract method definition/s
    get url(): string {
        return 'https://bettergov.ph'
    }

    // Getters (Locators)
    get philippinesNavBar(): Locator {
        return this.page.getByRole('link', { name: 'Philippines', exact: true })
    }
    get floodControlProjectsNavBar(): Locator {
        return this.page.getByRole('navigation').getByRole('link', { name: 'Flood Control Projects' })
    }
    get subMenu(): Locator {
        return this.page.getByRole('menu')
    }
    get searchField(): Locator {
        return this.page.getByPlaceholder("Search for services, directory items...")
    }

    // Methods
    async clickPhilippinesSubmenu(submenu: string) {
        await this.page.getByRole("menuitem", { name: submenu }).click()
    }
    async validateVisibilityOfResult(result: string) {
        await expect(this.page.getByRole('article').filter({ hasText: result })).toBeVisible()
    }
    async clickResult(result: string) {
        await this.page.getByRole('article').filter({ hasText: result }).click()
    }
}