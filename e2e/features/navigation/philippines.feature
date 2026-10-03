# Automation Engineer: Biendroid
# Date Implemented: October 3, 2026

Feature: BGovPH Philippines Navigation Bar

    As a user who wants to know about the Philippines
    I want to use the BGovPH's Philippine Navigation Bar
    So that I am familiar about the Philippines

    Acceptance Criteria
    1. Validate the subdomain
        a. About the Philippines:   /philippines/about
        b. History:                 /philippines/history
        ...
        z. Weather:                 /data/weather
    2. Validate Headers
        a. About the Philippines:   About the Philippines
        b. History:                 History of the Philippines
        c. Culture:                 Filipino Culture
        ...
        z. Weather:                 About Weather Data

    Scenario: Navigate to About the Philippines
        Given the user is in BetterGovPH home page
        When the user hovers on the Philippines navigation bar
        And the user clicks on the About the Philippines submenu
        Then the header About the Philippines should be visible