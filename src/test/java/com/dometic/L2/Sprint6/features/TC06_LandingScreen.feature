Feature: Testing an Dometic LMC application

  @First @sanity
  Scenario: Verifying application Landing Screen functionality
    Then I Tap on LATER Button
    Then I Tap on cancel button in Upgrade Firmware

  @sanity
  Scenario: Verifying application Climate screen functionality
    Then I Tap on Climate in Landing screen
    Then I Wait short period for Page to Load
    Then I verified inside text is displayed in Ac climate screen
    Then I verified outside text is displayed in Ac climate screen
#    Then I Scroll Right to Left of the screen
#    Then I Scroll Right to Left of the screen
#    Then I Wait short period for Page to Load
#    Then I Tap on Apply button in climate screen
#    Then I Wait for Page to Load
#    Then I verified Power text is displayed Ac climate screen
#    Then I verified Fan speed text is displayed Ac climate screen
#    Then I verified Climate Mode text is displayed Ac climate screen
#    Then I verified Climate AGS text is displayed Ac climate screen
#    Then I verified Air Conditioner text is displayed Ac climate screen
#    Then I verified Scheduler text is displayed Ac climate screen
#    Then I Tap on Fan speed in climate screen
#    Then I scroll up the screen in AC Fan Speed
#    Then I Wait short period for Page to Load
#    Then I Tap on Apply button in AC Fan Speed
#    Then I Wait short period for Page to Load
#    Then I Wait short period for Page to Load
#    Then I Tap on Climate mode in climate screen
#    Then I Wait short period for Page to Load
#    Then I scroll up the screen in Climate Mode
#    Then I Tap on Apply button in AC Climate Mode
#    Then I Wait short period for Page to Load
#    Then I Tap on Scheduled At in climate screen
#    Then I Wait short period for Page to Load
#    Then I Scroll up the hours in Scheduled At
#    Then I Scroll up the minutes in Scheduled At
#    Then I Tap on apply button in Scheduled At
    Then I Tap on Back Button
    Then I Wait short period for Page to Load



