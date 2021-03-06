Feature: Testing an Dometic LMC application

  @First @sanity
  Scenario: Verifying application French Language in Power screen
    Then I Tap on the Alimentation in Landing screen
    Then I Wait short period for Page to Load
    Then I Verify the power main screen header French text
    Then I Verify the House Battery French text
    Then I Verify the Inverter French text
    Then I Verify the Operating Mode French text
    Then I Verify the House Battery Voltage French text
    Then I Verify the Load Wattage French text
    Then I Scroll up the page
    Then I Verify the Chassis Battery Voltage French text
    Then I Verify the Generator French text
    Then I Verify the Charger French text
    Then I Verify the AGS French Text in power main screen
    Then I Verify the Predictive data French text in power main screen
    Then I Tap on Generator in Power Screen
    Then I Verify control French text in Generator main screen
    Then I Verify Start button in power main screen
    Then I Verify Stop button in power main screen
    Then I Verify the  status French text in Generator main screen
    Then I verify the Run time French text in Generator main screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Charger in Power Screen
    Then I verify the charger state French text in  charger main screen
    Then I verify the AC Input Current French text in charger main screen
    Then I verify the AC Load Current French text in charger main screen
    Then I verify the charger current French text in charger main screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on AGS in Power Screen
    Then I verify clear AGS French text in power AGS main screen
    Then I verify status French text in power AGs main screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Predictive Data in Power Screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Tap on Back Button
    Then I Wait short period for Page to Load