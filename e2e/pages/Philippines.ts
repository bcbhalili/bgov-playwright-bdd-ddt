import { expect, Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class Philippines extends BasePage {
    // Constructor
    constructor(page: Page) {
        super(page)
    }

    // Abstract method definition/s
    get url(): string {
        return 'https://bettergov.ph/philippines/about'
    }

    // Locators (getters)
    get backToHome(): Locator {
        return this.page.getByTitle('Back to Home')
    }
    get searchRegions(): Locator {
        return this.page.getByTitle('Back to Home')
    }

    // Methods
    async validateHeadingImage(headingImage: string) {
        await expect(this.page.locator(`//img[@alt="${headingImage}"]`)).toBeVisible()
    }
    async validateCity(city: string) {
        await expect(this.page.getByText(city).first()).toBeVisible()
    }
}