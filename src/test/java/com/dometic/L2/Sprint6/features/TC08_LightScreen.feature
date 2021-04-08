Feature: Testing an Dometic LMC application

  @First @sanity
  Scenario: Verifying application Light screen functionality
    Then I Tap on Light in Landing screen
    Then I Wait short period for Page to Load
    Then I Verified Light screen header
    Then I Verified Assist Handle Text
    Then I Verified Utility center Text
    Then I Verified Accent Light Text
    Then I Scroll left to right in Accent Light
    Then I Wait short period for Page to Load
    Then I Verified Shower Text
    Then I Verified Ceiling Text
    Then I Verified Bedroom ceiling Text
    Then I Scroll left to right in Bedroom Ceiling
    Then I Verified Galley Text
    Then I Verified Lounge Text
    Then I Verified Awning Light Text
    Then I Verified Bedroom Overhead Text
    Then I Verified Porch Light Text
    Then I Tap on Back Button
    Then I Wait short period for Page to Load