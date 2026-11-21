# Automation Engineer: Biendroid
# Date Implemented: November 21, 2026

Feature: BGovPH Services Navigation Bar

    As a user who wants to know about the service offerings in the Philippines
    I want to use the BGovPH's Services Navigation Bar
    So that I am familiar about the services offered in Philippines

    Acceptance Criteria
    1. Validate the visibility of submenu under Services navigation bar
        a. Business and Trade
        b. Certificated and IDs
        c. Contributions
        d. Disaster and Weather
        e. Education
        f. Health
        g. Employment
        h. Housing
        i. Passport and Travel
        j. Social Services
        k. Tax
        l. Transport and Driving
        m. Uncategorized
    2. Validate the sub-url of the submenus under Services navigation bar upon click of a submenu
        a. Business and Trade       /services?category=business-trade
        b. Certificates and IDs     /services?category=certificates-ids
        c. Contributions            /services?category=contributions
        d. Disaster and Weather     /services?category=disaster-weather
        e. Education                /services?category=education
        f. Health                   /services?category=health
        g. Employment               /services?category=employment
        h. Housing                  /services?category=housing
        i. Passport and Travel      /services?category=passport-travel
        j. Social Services          /services?category=social-services
        k. Tax                      /services?category=tax
        l. Transport and Driving    /services?category=transporr-driving
        m. Uncategorized            /services?category=uncategorized
    3. Validate the header text for each submenu
        a. Business and Trade
        b. Certificated and IDs
        c. Contributions
        d. Disaster and Weather
        e. Education
        f. Health
        g. Employment
        h. Housing
        i. Passport and Travel
        j. Social Services
        k. Tax
        l. Transport and Driving
        m. Uncategorized
    4. Validate the search field for each submenu

    Background:
        Given the user is in BetterGovPH home page
        When the user hovers on the Services navigation bar
    
    @ddt
    Scenario Outline: Submenu under Services Navigation Bar
        And the user clicks on the "<subMenu>" submenu
        And the sub-URL should be "<subUrl>"
        And the header "<subMenu>" should be visible
        And the search field with placeholder text "What do you need? e.g. passport, NBI clearance" should be visible
        Examples:
            | subMenu               | subUrl                                |
            | Business and Trade    | /services?category=business-trade     | 
            | Certificates and IDs  | /services?category=certificates-ids   |
            | Contributions         | /services?category=contributions      |
            | Disaster and Weather  | /services?category=disaster-weather   |
            | Education             | /services?category=education          |
            | Health                | /services?category=health             |
            | Employment            | /services?category=employment         |
            | Housing               | /services?category=housing            |
            | Passport and Travel   | /services?category=passport-travel    |
            | Social Services       | /services?category=social-services    |
            | Tax                   | /services?category=tax                |
            | Transport and Driving | /services?category=transport-driving  |
            | Uncategorized         | /services?category=uncategorized      |