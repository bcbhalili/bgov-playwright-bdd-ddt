# Automation Engineer: Biendroid
# Date Implemented: October 31, 2026

Feature: Flood Control Projects

    As a user who wants to know about the Flood Control Projects in the Philippines
    I want to use BetterGovPH's Flood Control Projects in different views: Visual, Table, and Contractor
    So that I can be informed of the Flood Control Projects

    Acceptance Criteria
    1. Visual view filters should be visible
        a. Search Project field
        b. Infrastructure Year dropdown
        c. Region Search dropdown
        d. Province Search dropdown
        e. Type of Work Search dropdown
        f. District Engineering Office Region Search dropdown
        g. Legislative District Search dropdown
    2. Main header text should be "Flood Control Projects"
    3. Visual view filters used should be visible (filter-all/partial filter)
        a. Search
        b. Year
        c. Region
        d. Type of Work
        e. District Engineering Office
        f. Legislative District
        g. Province
    4. Visual results should be accurate based on filter/s used

    Scenario: Search for "Construction of Aborlan River Waterway, Puerto Princesa South Road, Aborlan, Palawan"
        Given the user is in BetterGovPH home page
        When the user hovers on the Flood Control Projects global navigation bar
        And the user clicks on the "Charts" submenu
        Then the FCP header text "Flood Control Projects" should be visible
        And the Search Projects label and field should be visible
        And the "Infrastructure Year" label containing "Select Year" in field should be visible
        And the "Region" label containing "Select Region" in field should be visible
        And the "Province" label containing "Select Province" in field should be visible
        And the "Type of Work" label containing "Select Type of Work" in field should be visible
        And the "District Engineering Office" label containing "Select DEO" in field should be visible
        And the "Legislative District" label containing "Select Legislative District" in field should be visible
