Feature: Testing an Dometic LMC application

  @First @sanity
  Scenario: Verifying application Water Heater Truma screen functionality
    Then I Wait short period for Page to Load
    Then I Scroll the screen upto water heater truma
    Then I Tap on Water Heater Truma
    Then I Wait short period for Page to Load
    Then I verify the Heater text in the Truma heater
    Then I verify the Mode text in the Truma heater
    Then I verify the Change Mode text in the Truma heater
#    Then I verify the status in the Truma heater
#    Then I verify the Decalcification in the Truma heater
    Then I Tap on Back Button
    Then I Wait short period for Page to Load