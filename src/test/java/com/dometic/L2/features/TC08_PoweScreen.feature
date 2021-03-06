Feature: Testing an Dometic LMC application

  @First1 @sanity1
  Scenario: Verifying application Power screen Functionality
#    Then I Tap on the Power in Landing screen
#    Then I Wait short period for Page to Load
#    Then I verify Power-progressIndicator in Power
#    Then I Tap on Back Button
#    Then I Wait short period for Page to Load
#    Then I Validated Power-progressIndicator Percentage is displayed in Landing screen
#    Then I Wait short period for Page to Load

  @sanity1
  Scenario: Verifying application Power screen UI
    Then I Tap on the Power in Landing screen
    Then I Wait short period for Page to Load
    Then I Verify the power main screen header
    Then I Verify the House Battery Text
    Then I Verify the Inverter Text
    Then I Verify the Operating Mode Text
    Then I Verify the House Battery Voltage Text
    Then I Verify the Load Wattage Text
    Then I Verify the Chassis Battery Voltage Text
    Then I Verify the Generator Text
    Then I Verify the Charger Text
    Then I Verify the AGS Text in power main screen
    Then I Verify the Predictive data in power main screen
    Then I Tap on Generator in Power Screen
    Then I Verify control text in Generator main screen
    Then I Verify Start button in power main screen
    Then I Verify Stop button in power main screen
    Then I Verify the  status text in Generator main screen
    Then I verify the Run time text in Generator main screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Charger in Power Screen
    Then I verify the charger state in  charger main screen
    Then I verify the AC Input Current in charger main screen
    Then I verify the AC Load Current in charger main screen
    Then I verify the charger current in charger main screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on AGS in Power Screen
    Then I verify clear AGS text in power AGS main screen
    Then I verify status text in power AGs main screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Predictive Data in Power Screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Tap on Back Button
    Then I Wait short period for Page to Load

