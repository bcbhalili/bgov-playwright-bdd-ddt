# Automation Engineer: Biendroid
# Date Implemented: October 24, 2026

Feature: Search for Services and Directory Items

    As a user search for a service and directory items
    I want to use the BGovPH's Search field
    So that I will be redirected to the services that I require

    Acceptance Criteria
    1. Validate the BetterGovPH search field
        a. Search field should be visible
        b. Placeholder should be "Search for services, directory items..."
    2. Search field should be able to display relevant results based on the user's search term
    3. User should be redirected based from the chosen search result

     Scenario: Search to Apply for NBI Multipurpose Clearance
        Given the user is in BetterGovPH home page
        And the search field should be visible 
        When the user provides a search term "Apply for NBI Multipurpose Clearance"
        Then the result "Apply for NBI Multipurpose Clearance" should be visible
        When the user clicks on the result "Apply for NBI Multipurpose Clearance"
        Then the user should be redirected to the NBI Clearance Page