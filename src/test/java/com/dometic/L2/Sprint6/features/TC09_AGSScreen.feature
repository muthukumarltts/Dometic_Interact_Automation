Feature: Testing an Dometic LMC application

  @First @sanity
  Scenario: Verifying application AGS screen functionality
    Then I Tap on AGS in Landing Screen
    Then I Verify the Auto charger text in AGS Main screen
    Then I Verify the Quiet Time Start text in AGS Main screen
    Then I Verify the Quiet Time Ends text in AGS Main screen
    Then I Verify the Start Voltage text in AGS Main screen
    Then I Verify the Time Under text in AGS Main screen
    Then I Verify the Generator Exerciser text in AGS Main screen
    Then I Verify the Selected Days text in AGS Main screen
    Then I Verify the Start Time text in AGS Main screen
    Then I Tap on Quiet Time Start
    Then I Wait short period for Page to Load
    Then I Scroll up the hours in Quiet Time Start
    Then I Wait short period for Page to Load
    Then I Scroll up the minutes in Quiet Time Start
    Then I Tap on apply button in AGS
    Then I Verify the Run Time text in AGS Main screen
    Then I Verify the AGS Climate text in AGS Main screen
    Then I Tap on Back Button
    Then I Wait short period for Page to Load