Feature: Testing an Dometic LMC application

  @First @sanity
  Scenario: Verifying application Spanish Language in Power screen
    Then I Tap on the Alimentación in Landing screen
    Then I Wait short period for Page to Load
    Then I Verify the power main screen header Spanish text
    Then I Verify the House Battery Text Spanish text
    Then I Verify the Inverter Text Spanish text
    Then I Verify the Operating Mode Text Spanish text
    Then I Verify the House Battery Voltage Text Spanish text
    Then I Verify the Load Wattage Text Spanish text
    Then I Scroll up the page
    Then I Verify the Chassis Battery Voltage Text Spanish text
    Then I Verify the Generator Text Spanish text
    Then I Verify the Charger Text Spanish text
    Then I Verify the AGS Spanish text Text in power main screen
    Then I Verify the Predictive data Spanish text in power main screen
    Then I Tap on Generator in Power Screen
    Then I Verify control Spanish text in Generator main screen
    Then I Verify Start button in power main screen
    Then I Verify Stop button in power main screen
    Then I Verify the  status Spanish text in Generator main screen
    Then I verify the Run time Spanish text in Generator main screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Charger in Power Screen
    Then I verify the charger state Spanish text in  charger main screen
    Then I verify the AC Input Current Spanish text in charger main screen
    Then I verify the AC Load Current Spanish text in charger main screen
    Then I verify the charger current Spanish text in charger main screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on AGS in Power Screen
    Then I verify clear AGS Spanish text in power AGS main screen
    Then I verify status Spanish text in power AGs main screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Predictive Data in Power Screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Tap on Back Button
    Then I Wait short period for Page to Load