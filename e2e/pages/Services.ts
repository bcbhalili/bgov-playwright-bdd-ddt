import { expect, Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class Services extends BasePage {
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
        return this.page.getByRole('button', { name: 'Philippines', exact: true })
    }
    get servicesNavBar(): Locator {
        return this.page.getByRole('button', { name: 'Services', exact: true })
    }
    get subMenu(): Locator {
        return this.page.getByRole('menu')
    }
    get searchField(): Locator {
        return this.page.getByPlaceholder("Search for services, directory items...")
    }

    // Methods
    async clickResult(result: string) {
        await this.page.getByRole('link').getByRole('heading', { name: result, exact: true }).click()
    }
}