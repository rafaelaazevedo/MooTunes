Feature: Home Page

  Scenario: Loading account page
    Given the home page has loaded
    When selecting a name on the list
    Then the account page for that name should be loaded