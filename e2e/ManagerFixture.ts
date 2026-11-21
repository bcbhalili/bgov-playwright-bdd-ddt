import { test as base } from 'playwright-bdd'
import { POManager } from './pages/POManager'

type ManagerFixture = {
    managerFixture: POManager
}
export const test = base.extend<ManagerFixture>({
    managerFixture: async ({ page }, use) => {
        await use(new POManager(page))
    }
})