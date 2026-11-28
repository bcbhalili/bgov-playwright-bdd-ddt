import { Home } from "./Home";
import { Philippines } from "./Philippines";
import { Page, expect } from "@playwright/test";
import { Services } from "./Services";

export class POManager {
    private readonly page: Page
    private readonly home: Home
    private readonly philippines: Philippines
    private readonly services: Services

    constructor(page: Page) {
        this.page = page
        this.home = new Home(this.page)
        this.philippines = new Philippines(this.page)
        this.services = new Services(this.page)
    }

    // Getter for the objects of POMs
    get homePage(): Home {
        return this.home
    }
    get philippinesPage(): Philippines {
        return this.philippines
    }
    get servicesPage(): Services {
        return this.services
    }

    // Common methods
    async validateSubURL(subURL: string) {
        await expect(this.page.url().endsWith(subURL)).toBeTruthy()
    } 
    async validateHeaderVisibility(header: string) {
        await expect(this.page.getByRole('heading', { name: header, exact: true })).toBeVisible()
    }
    async validateFieldVisibilityByPlaceholder(placeholder: string) {
        await expect(this.page.getByPlaceholder(placeholder)).toBeVisible()
    }
    async fillSearchFieldByPlaceholder(placeholder: string, searchTerm: string) {
        await this.page.getByPlaceholder(placeholder).fill(searchTerm)
    }
}