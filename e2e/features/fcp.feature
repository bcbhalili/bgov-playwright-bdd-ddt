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

    Scenario: Validate FCP Visual filters
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

    @ddt
    Scenario Outline: Search for "Construction of Aborlan River Waterway, Puerto Princesa South Road, Aborlan, Palawan"
        Given the user is in BetterGovPH home page
        When the user hovers on the Flood Control Projects global navigation bar
        And the user clicks on the "Charts" submenu
        And the user provided "<project>" in the Search Project field
        And the user provided "<infrastructureYear>" as the Infrastructure Year
        And the user provided "<region>" as the Region
        And the user provided "<province>" as the Province
        And the user provided "<typeOfWork>" as the Type of Work
        And the user provided "<deo>" as the District Engineering Office
        And the user provided "<legislativeDistrict>" as the Legislative District
        And filters applied should contain "<project>"
        And filters applied should contain "<infrastructureYear>"
        And filters applied should contain "<region>"
        And filters applied should contain "<province>"
        And filters applied should contain "<typeOfWork>"
        And filters applied should contain "<deo>"
        And filters applied should contain "<legislativeDistrict>"
        Examples:
            | project                                                                               | infrastructureYear | region       | province | typeOfWork                 | deo                                       | legislativeDistrict                   |
            | Construction of Aborlan River Waterway, Puerto Princesa South Road, Aborlan, Palawan  | 2023               | Region IV-B  | Palawan  | Construction of Waterway   | Palawan 3rd District Engineering Office   | PALAWAN (THIRD LEGISLATIVE DISTRICT)  |
