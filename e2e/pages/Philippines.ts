import { expect, Page, Locator } from "@playwright/test";

export class Philippines {
    // Members
    private readonly page: Page

    // Constructor
    constructor(page: Page) {
        this.page = page
    }

    // Locators (getters)
    get backToHome(): Locator {
        return this.page.getByTitle('Back to Home')
    }
    get searchRegions(): Locator {
        return this.page.getByTitle('Back to Home')
    }

    // Methods
    async validateHeaderVisibility(header: string) {
        await expect(this.page.getByRole('heading', { name: header })).toBeVisible()
    }
    async validateSubURL(subURL: string) {
        await expect(this.page.url().endsWith(subURL)).toBeTruthy()
    }
    async validateHeadingImage(headingImage: string) {
        await expect(this.page.locator(`//img[@alt="${headingImage}"]`)).toBeVisible()
    }
    async validateCity(city: string) {
        await expect(this.page.getByRole('button', { name: city })).toBeVisible()
    }
}