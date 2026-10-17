# Automation Engineer: Biendroid
# Date Implemented: October 3, 2026

Feature: BGovPH Philippines Navigation Bar

    As a user who wants to know about the Philippines
    I want to use the BGovPH's Philippine Navigation Bar
    So that I am familiar about the Philippines

    Acceptance Criteria
    1. Validate the sub-URL
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
        And the user clicks on the "About the Philippines" submenu
        Then the header "About the Philippines" should be visible
        And the sub-URL should be "/philippines/about"
        And the user moves the mouse in the top-left corner of the screen
        And the submenu should not be visible
        And the "Philippine landscape" heading image should be visible
    
    Scenario: Navigate to History
        Given the user is in BetterGovPH home page
        When the user hovers on the Philippines navigation bar
        And the user clicks on the "History" submenu
        Then the header "History of the Philippines" should be visible
        And the sub-URL should be "/philippines/history"
        And the user moves the mouse in the top-left corner of the screen
        And the submenu should not be visible
        And the "Historical Philippines" heading image should be visible

    Scenario: Navigate to Culture
        Given the user is in BetterGovPH home page
        When the user hovers on the Philippines navigation bar
        And the user clicks on the "Culture" submenu
        Then the header "Filipino Culture" should be visible
        And the sub-URL should be "/philippines/culture"
        And the user moves the mouse in the top-left corner of the screen
        And the submenu should not be visible
        And the "Filipino Culture" heading image should be visible

    Scenario: Navigate to Regions
        Given the user is in BetterGovPH home page
        When the user hovers on the Philippines navigation bar
        And the user clicks on the "Regions" submenu
        Then the header "Regions of the Philippines" should be visible
        And the sub-URL should be "/philippines/regions"
        And the user moves the mouse in the top-left corner of the screen
        And the submenu should not be visible
        And the "Philippine Regions" heading image should be visible

    Scenario: Navigate to Map
        Given the user is in BetterGovPH home page
        When the user hovers on the Philippines navigation bar
        And the user clicks on the "Map" submenu
        Then the BGovPH home button should be visible
        And the search region field should be visible
        And the sub-URL should be "/philippines/map"

    Scenario: Navigate to Hotlines
        Given the user is in BetterGovPH home page
        When the user hovers on the Philippines navigation bar
        And the user clicks on the "Hotlines" submenu
        Then the header "Philippines Emergency Hotlines" should be visible
        And the sub-URL should be "/philippines/hotlines"
        And the user moves the mouse in the top-left corner of the screen
        And the submenu should not be visible

    Scenario: Navigate to Holidays
        Given the user is in BetterGovPH home page
        When the user hovers on the Philippines navigation bar
        And the user clicks on the "Holidays" submenu
        Then the header "Philippine Public Holidays 2026" should be visible
        And the sub-URL should be "/philippines/holidays"
        And the user moves the mouse in the top-left corner of the screen
        And the submenu should not be visible

    Scenario: Navigate to Forex
        Given the user is in BetterGovPH home page
        When the user hovers on the Philippines navigation bar
        And the user clicks on the "Forex" submenu
        Then the header "Currencies" should be visible
        And the sub-URL should be "/data/forex"
        And the user moves the mouse in the top-left corner of the screen
        And the submenu should not be visible

    Scenario: Navigate to Weather
        Given the user is in BetterGovPH home page
        When the user hovers on the Philippines navigation bar
        And the user clicks on the "Weather" submenu
        Then the header "Cities" should be visible
        And "manila" city should be visible
        And "cebu" city should be visible
        And "davao" city should be visible
        And "baguio" city should be visible
        And the sub-URL should be "/data/weather"
        And the user moves the mouse in the top-left corner of the screen
        And the submenu should not be visible