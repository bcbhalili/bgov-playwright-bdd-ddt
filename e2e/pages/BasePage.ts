import { Page } from "@playwright/test";

export abstract class BasePage {
    // Member/s
    protected readonly page: Page;

    // Abstract function prototype/s
    abstract get url(): string

    // Constructor
    constructor(page: Page) {
        this.page = page
    }

    // Method/s
    async goto() {
        await this.page.goto(this.url)
    }
}