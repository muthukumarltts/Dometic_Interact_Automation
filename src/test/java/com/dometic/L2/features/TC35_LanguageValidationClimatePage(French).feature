Feature: Testing an Dometic LMC application

  @First @sanity
  Scenario: Verifying application French Language in Climate screen
    Then I Tap on Climate in Landing screen
    Then I verify the Climate header French text displayed in Climate page
    Then I Verify inside French text displayed
    Then I Verify outside French text displayed
    Then I verify All Climate French text displayed
    Then I Verify Climate toggle is displayed in Climate page
    Then I Tap on Back Button