import { defineConfig, devices } from '@playwright/test'    // Helper function for configurations such as:
                                                            //      - testDir: location of test files
                                                            //      - fullyParallel: enables/disables running of execution simultaneously
import { defineBddConfig } from 'playwright-bdd'            // To instruct playwright where to look for
                                                            // feature files and step definitions

// Define the path of feature files (features) and step definitions (steps)
const testDir = defineBddConfig({
    features: 'e2e/features/**/*.feature',  // ** added to implement sub-folders under features
    steps: 'e2e/steps/**/*.ts',             // ** added to implement sub-folders under step-definitions
});

export default defineConfig({
    testDir,
    reporter: 'html',
    fullyParallel: true,
    use: {
        screenshot: 'only-on-failure',
        trace: 'on-first-retry'
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        }
    ]
});
