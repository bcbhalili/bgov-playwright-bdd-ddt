import { Home } from "./Home";
import { Philippines } from "./Philippines";
import { Page } from "@playwright/test";

export class POManager {
    private readonly page: Page
    private readonly home: Home
    private readonly philippines: Philippines

    constructor(page: Page) {
        this.page = page
        this.home = new Home(page)
        this.philippines = new Philippines(page)
    }

    // Getter for the objects of POMs
    get homePage(): Home {
        return this.home
    }
    get philippinesPage(): Philippines {
        return this.philippines
    }
}