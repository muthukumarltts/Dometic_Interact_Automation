$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/dometic/L2/features/TC01_LaunchScreen.feature");
formatter.feature({
  "name": "Testing Login page in Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Launching the application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@Device1"
    },
    {
      "name": "@Device2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Basestepdefinition.iLaunchTheApplicationOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC02_SplashScreen.feature");
formatter.feature({
  "name": "Testing Login page in Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Splash screen Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@Device1"
    },
    {
      "name": "@Device2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Allow button in Permission popup in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.tap_on_Allow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Welcome Text is displaying in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.assert_Welcome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Page title is displayed in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.Login_Page_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC05_LoginScreen.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Login Functionality with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    },
    {
      "name": "@Device1"
    },
    {
      "name": "@Device2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter Valid Email in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterValidEmailInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Valid Password in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterValidPasswordInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on an Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnAnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify successfully navigated to On boarding screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifySuccessfullyNavigatedToOnBoardingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC06_OnboardingScreen.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application On boarding screen functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I entered into On boarding screen",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iEnteredIntoOnBoardingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Yes button",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iTapOnYesButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Landing screen is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.landingScreenIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC07_LandingScreen.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Landing Screen functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on LATER Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnLATERButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on cancel button in Upgrade Firmware",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnCancelButtonInUpgradeFirmware()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validated Corresponding Climate tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedCorrespondingClimateTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Devices tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingDevicesTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Tank tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingTankTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen with ViewOption(Tile View-All Devices) functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tile View Options",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnTileViewOptions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on All Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnAllDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validated Corresponding Climate tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedCorrespondingClimateTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Devices tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingDevicesTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Tank tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingTankTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen with ViewOption(Tile View-Connected Devices) functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Connected Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnConnectedDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validated Corresponding Climate tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedCorrespondingClimateTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Devices tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingDevicesTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Tank tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingTankTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen with ViewOption(Tile View-Non Connected Devices) functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Non Connected Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnNonConnectedDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen with ViewOption(List View-All Devices) functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on List View Options",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnListViewOptions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on All Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnAllDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validated Corresponding Climate tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedCorrespondingClimateTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Devices tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingDevicesTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Tank tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingTankTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen with ViewOption(List View-Connected Devices) functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Connected Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnConnectedDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validated Corresponding Climate tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedCorrespondingClimateTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Devices tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingDevicesTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Tank tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingTankTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen with ViewOption(List View-Non Connected Devices) functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Non Connected Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnNonConnectedDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tile View Options",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnTileViewOptions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on All Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnAllDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC13_TankFreshWaterScreen.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Tank Fresh Water screen UI",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tank Fresh Water in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTankFreshWaterInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the fresh water level text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheFreshWaterLevelText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the water pump text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheWaterPumpText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the fresh text on button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheFreshTextOnButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the black text on button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheBlackTextOnButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the predictive data in Fresh water text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyThePredictiveDataInFreshWaterText()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Tank Fresh Water screen functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I verify Tank-progressIndicator in Tank Fresh Water",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTankProgressIndicatorInTankFreshWater()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validated Tank-progressIndicator(Fresh Water) percentage is displayed in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedTankProgressIndicatorFreshWaterPercentageIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC15_WaterHeaterTrumaScreen.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Water Heater Truma screen UI",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll the screen upto water heater truma",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iScrollTheScreenUptoWaterHeaterTruma()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Water Heater Truma",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnWaterHeaterTruma()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Heater text in the Truma heater",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheHeaterTextInTheTrumaHeater()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Mode text in the Truma heater",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheModeTextInTheTrumaHeater()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Change Mode text in the Truma heater",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheChangeModeTextInTheTrumaHeater()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Water Heater Truma screen functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I validated Truma Heater Status on Tile",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedTrumaHeaterStatusOnTile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Water Heater Truma",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnWaterHeaterTruma()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll up the Truma heater carousel",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iScrollUpTheTrumaHeaterCarousel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the apply button in the Water heater Truma",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheApplyButtonInTheWaterHeaterTruma()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on the Truma heater Apply button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTheTrumaHeaterApplyButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validated the Heater mode in the main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedTheHeaterModeInTheMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating the updated values in the Water Heater main screen",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Water Heater Truma",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnWaterHeaterTruma()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validated the updated Heater mode values in the Heater Main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedTheUpdatedHeaterModeValuesInTheHeaterMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});