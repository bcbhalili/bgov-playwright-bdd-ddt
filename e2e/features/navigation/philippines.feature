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

    Background:
        Given the user is in BetterGovPH home page
        When the user hovers on the Philippines navigation bar

    @ddt
    Scenario Outline: Submenus under Philippines Navigation Bar
        And the user clicks on the "<subMenu>" submenu
        Then the header "<header>" should be visible
        And the sub-URL should be "<subUrl>"
        And the user moves the mouse in the top-left corner of the screen
        And the submenu should not be visible
        And the "<headingImage>" heading image should be visible
        Examples:
            | subMenu                   | header                            | subUrl                | headingImage              |
            | About the Philippines     | About the Philippines             | /philippines/about    | Philippine landscape      |
            | History                   | History of the Philippines        | /philippines/history  | Historical Philippines    |
            | Culture                   | Filipino Culture                  | /philippines/culture  | Filipino Culture          |
            | Regions                   | Regions of the Philippines        | /philippines/regions  | Philippine Regions        |
            | Hotlines                  | Philippines Emergency Hotlines    | /philippines/hotlines |                           |
            | Forex                     | Currencies                        | /data/forex           |                           |

    Scenario: Navigate to Map
        And the user clicks on the "Map" submenu
        Then the BGovPH home button should be visible
        And the search region field should be visible
        And the sub-URL should be "/philippines/map"

    Scenario: Navigate to Weather
        And the user clicks on the "Weather" submenu
        Then the header "Cities" should be visible
        And "manila" city should be visible
        And "cebu" city should be visible
        And "davao" city should be visible
        And "baguio" city should be visible
        And the sub-URL should be "/data/weather"
        And the user moves the mouse in the top-left corner of the screen
        And the submenu should not be visible