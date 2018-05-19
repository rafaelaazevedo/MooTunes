Feature: Account Page

  Scenario: Go back from Account page
    Given the account page has loaded
    When pressing the back button
    Then the home page has loaded