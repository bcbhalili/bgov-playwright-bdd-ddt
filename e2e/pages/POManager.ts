import { FCP } from "./FCP";
import { Home } from "./Home";
import { Philippines } from "./Philippines";
import { Page } from "@playwright/test";

export class POManager {
    private readonly page: Page
    private readonly home: Home
    private readonly philippines: Philippines
    private readonly fcp: FCP

    constructor(page: Page) {
        this.page = page
        this.home = new Home(this.page)
        this.philippines = new Philippines(this.page)
        this.fcp = new FCP(this.page)
    }

    // Getter for the objects of POMs
    get homePage(): Home {
        return this.home
    }
    get philippinesPage(): Philippines {
        return this.philippines
    }
    get fcpPage(): FCP {
        return this.fcp
    }
}