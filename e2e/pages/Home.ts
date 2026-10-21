import { expect, Page, Locator } from "@playwright/test";

export class Home {
    // Member
    private readonly page: Page

    // Constructor
    constructor(page: Page) {
        this.page = page
    }

    // Getters (Locators)
    get philippinesNavBar(): Locator {
        return this.page.getByRole('link', { name: 'Philippines', exact: true })
    }

    // Methods
    async clickPhilippinesSubmenu(submenu: string) {
        await this.page.getByRole("menuitem", { name: submenu }).click()
    }
    async validateHeaderVisibility(header: string) {
        await expect(this.page.getByRole('heading', { name: header })).toBeVisible()
    }
}