Feature: Testing an Dometic LMC application

  @First @sanity
  Scenario: Verifying application Mechanical screen functionality
    Then I Tap on Mechanical in Landing screen
    Then I Verify the Awning text
    Then I Verify the Extent text
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
