import { expect, Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class FCP extends BasePage {
    // Constructor
    constructor(page: Page) {
        super(page)
    }

    // Abstract method definition/s
    get url(): string {
        return this.url
    }

    // Getters for locators
    get searchProjectsLabel(): Locator {
        return this.page.getByText('Search Projects', { exact: true })
    }
    get searchProjectsField(): Locator {
        return this.page.getByPlaceholder('Projects, contractors, municipality, province, region...')
    }

    // Method/s
    async verifyFCPHeader(headerText: string) {
        await expect(this.page.getByRole('heading', { name: headerText }).first()).toBeVisible()
    }
    async verifyFCPFilterLabelAndField(label: string, field: string) {
        await expect(this.page.getByText(label, { exact: true })).toBeVisible()
        await expect(this.page.getByRole('button', { name: field })).toBeVisible()
    }
    async pickInfrastructureYear(year: string) {
        await this.page.getByRole('button').filter({ hasText: "Select Year" }).click()
        await this.page.getByRole('button').filter({ hasText: year }).click() 
    }
    async pickRegion(region: string) {
        await this.page.getByRole('button').filter({ hasText: "Select Region" }).click()
        await this.page.getByPlaceholder('Search...').fill(region)
        await this.page.getByRole('button').filter({ hasText: region }).click()
    }
    async pickProvince(province: string) {
        await this.page.getByRole('button').filter({ hasText: "Select Province" }).click()
        await this.page.getByPlaceholder('Search...').fill(province)
        await this.page.getByRole('button').filter({ hasText: province }).click()
    } 
    async pickTypeOfWork(typeOfWork: string) {
        await this.page.getByRole('button').filter({ hasText: "Select Type of Work" }).click()
        await this.page.getByPlaceholder('Search...').fill(typeOfWork)
        await this.page.getByRole('button').filter({ hasText: typeOfWork }).click()
    }
    async pickDEO(deo: string) {
        await this.page.getByRole('button').filter({ hasText: "Select DEO" }).click()
        await this.page.getByPlaceholder('Search...').fill(deo)
        await this.page.getByRole('button').filter({ hasText: deo }).click()
    }
    async pickLegislativeDistrict(legislativeDistrict: string) {
        await this.page.getByRole('button').filter({ hasText: "Select Legislative District" }).click()
        await this.page.getByPlaceholder('Search...').fill(legislativeDistrict)
        await this.page.getByRole('button').filter({ hasText: legislativeDistrict }).click()
    }
}
