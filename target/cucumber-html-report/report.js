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
      "name": "@First1"
    },
    {
      "name": "@sanity1"
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
formatter.uri("src/test/java/com/dometic/L2/features/TC17_Settings.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Settings screen functionality",
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
  "name": "I verify hamburger menu in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyHamburgerMenuInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on hamburger menu in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnHamburgerMenuInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify SETTINGS Text displayed in the top of the app",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifySETTINGSTextDisplayedInTheTopOfTheApp()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify application Logout Functionality",
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
  "name": "I verify Log out is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyLogOutIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to update language section in Settings",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iNavigateToUpdateLanguageSectionInSettings()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I update language to Spanish in settings",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iUpdateLanguageToSpanishInSettings()"
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
  "name": "I Tap on Logout in Settings",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnLogoutInSettings()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC18_LanguageValidationForgotPasswordPage(Spanish).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validating application Spanish Language in login page",
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
  "name": "I verify Forgot your password Spanish text is displayed in Forgot password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyForgotYourPasswordSpanishTextIsDisplayedInForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Forgot your password content Spanish text is displayed in Forgot password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyForgotYourPasswordContentSpanishTextIsDisplayedInForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify E-mail Spanish label is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyEMailSpanishLabelIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Forgot Email Input text field is displayed in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_Page_EmailInputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Send button is displayed in Forgot password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_Page_PasswordInputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Email in Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_enter_invalid_credentials()"
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
  "name": "I Tap on Send button in Forgot Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_enter_credentials_Forgotpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC19_LanguageValidationSignupPasswordPage(Spanish).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Empty Email and Enter the password and verify password(Spanish Language)",
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
  "name": "I Tap on signup link in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupLinkInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I left the Email blank",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iLeftTheEmailBlank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on term and conditions checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnTermAndConditionsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Email field is required Spanish text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.emailFieldIsRequiredSpanishTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter the Email and Empty password and verify password(Spanish Language)",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I left the password blank",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iLeftThePasswordBlank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The password field is required Spanish text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.thePasswordFieldIsRequiredSpanishTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Doesn\u0027t match Spanish text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.doesnTMatchSpanishTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter Valid email valid password and empty verify password(Spanish Language)",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I left the Verify password blank",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iLeftTheVerifyPasswordBlank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The verify password field is required Spanish text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.theVerifyPasswordFieldIsRequiredSpanishTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter inValid email, password and valid verify password(Spanish Language)",
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
  "name": "I enter Invalid Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iEnterInvalidEmailInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The email must be a valid email address Spanish text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.theEmailMustBeAValidEmailAddressSpanishTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter Valid email, invalid password and valid verify password(Spanish Language)",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iEnterInvalidPasswordInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The password doesn\u0027t satisfy the conditions Spanish text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.thePasswordDoesnTSatisfyTheConditionsSpanishTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Doesn\u0027t match Spanish text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.doesnTMatchSpanishTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter Valid email, password and invalid verify password(Spanish Language)",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid verify password password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.iEnterInvalidVerifyPasswordPasswordInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Doesn\u0027t match Spanish text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.doesnTMatchSpanishTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating application Spanish Language in Signup Page",
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
  "name": "I Tap on signup link in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupLinkInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Email Inputbox is displayed in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_Page_EmailInputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Password Inputbox is displayed in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_Page_Password_Inputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Confirm Password Inputbox is displayed in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_Page_confirm_password_Inputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Signup button is displayed in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_Page_Signupbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Email in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Send button in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_signupbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on login link in signup page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnLoginLinkInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC20_LanguageValidationLoginPage(Spanish).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validating application Spanish Language in login page",
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
  "name": "I verify Welcome! Text(Spanish) is displayed in login screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyWelcomeTextSpanishIsDisplayedInLoginScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Log In Text(Spanish) is displayed in login screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyLogInTextSpanishIsDisplayedInLoginScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify E-mail label is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyEMailLabelIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Password label is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyPasswordLabelIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Forgot password? link is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyForgotPasswordLinkIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Don\u0027t have an account? text(Spanish) is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyDonTHaveAnAccountTextSpanishIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Sign Up link is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifySignUpLinkIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Login CTA is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyLoginCTAIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with blank email and blank password field(Spanish Language)",
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
  "name": "I verify black email in email text field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyBlackEmailInEmailTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify black password in password text field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyBlackPasswordInPasswordTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Email field is required Spanish Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.theEmailFieldIsRequiredSpanishErrorMessageIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Password field is required Spanish Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.thePasswordFieldIsRequiredSpanishErrorMessageIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Invalid Email with valid password(Spanish Language)",
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
  "name": "I enter Invalid Email in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterInvalidEmailInLoginPage()"
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
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Spanish Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.spanishErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Valid email and invalid password(Spanish Language)",
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
  "name": "I enter an Invalid Password in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterAnInvalidPasswordInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The password must be at least 5 characters. Spanish Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.thePasswordMustBeAtLeastCharactersSpanishErrorMessageIsDisplayedInLoginPage(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Valid email and blank password(Spanish Language)",
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
  "name": "I verify black password in password text field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyBlackPasswordInPasswordTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Password field is required Spanish Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.thePasswordFieldIsRequiredSpanishErrorMessageIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with empty email and valid password(Spanish Language)",
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
  "name": "I verify black email in email text field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyBlackEmailInEmailTextField()"
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
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Email field is required Spanish Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.theEmailFieldIsRequiredSpanishErrorMessageIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Login Functionality with invalid credentials(Spanish Language)",
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
  "name": "I enter Invalid Email in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterInvalidEmailInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an Invalid Password in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterAnInvalidPasswordInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Spanish Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.spanishErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Login Functionality with valid credentials(Spanish Language)",
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
  "name": "I Tap on an Login button(Spanish) in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnAnLoginButtonSpanishInLoginPage()"
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
  "name": "I Tap on hamburger menu in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnHamburgerMenuInLandingScreen()"
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
  "name": "I navigate to update language section in Settings",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iNavigateToUpdateLanguageSectionInSettings()"
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
  "name": "I update language to Spanish in settings",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iUpdateLanguageToSpanishInSettings()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC21_LanguageValidationLandingPage(Spanish).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Spanish Language in Landing screen",
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
  "name": "I verify the Climatizaci??n in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheClimatizaci??nInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the ??Temperatura fuera de rango! on climate tile in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheTemperaturaFueraDeRangoOnClimateTileInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Alimentaci??n text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheAlimentaci??nTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Bater??a de la casa text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheBater??aDeLaCasaTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the ??Cargar bater??a! text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheCargarBater??aTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Luz text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheLuzTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Actualmente encendido text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheActualmenteEncendidoTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the AGS text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheAGSTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Cargador autom??tico text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheCargadorAutom??ticoTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the ENCENDER text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheENCENDERTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Fusibles text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheFusiblesTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Todo bien text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheTodoBienTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Mec??nica text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheMec??nicaTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll up the screen in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpTheScreenInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Toldo Text in the Landing Page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheToldoTextInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Dep??sito text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheDep??sitoTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Fresh Water(Spanish) text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheFreshWaterSpanishTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Agua negra text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheAguaNegraTextInLandingPage()"
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
  "name": "I verify the Calentador de agua text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheCalentadorDeAguaTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Todas text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheTodasTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Dispositivos text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheDispositivosTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Tanques text in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheTanquesTextInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll down the screen in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollDownTheScreenInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC22_LanguageValidationClimatePage(Spanish).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Spanish Language in Climate screen",
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
  "name": "I Tap on Climate in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnClimateInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Climate header Spanish text displayed in Climate page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheClimateHeaderSpanishTextDisplayedInClimatePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify inside Spanish text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyInsideSpanishTextDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify outside Spanish text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyOutsideSpanishTextDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify All Climate Spanish text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyAllClimateSpanishTextDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Climate toggle is displayed in Climate page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyClimateToggleIsDisplayedInClimatePage()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC23_LanguageValidationPowerPage(Spanish).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Spanish Language in Power screen",
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
  "name": "I Tap on the Alimentaci??n in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnTheAlimentaci??nInLandingScreen()"
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
  "name": "I Verify the power main screen header Spanish text",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyThePowerMainScreenHeaderSpanishText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the House Battery Text Spanish text",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheHouseBatteryTextSpanishText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Inverter Text Spanish text",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheInverterTextSpanishText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Operating Mode Text Spanish text",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheOperatingModeTextSpanishText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the House Battery Voltage Text Spanish text",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheHouseBatteryVoltageTextSpanishText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Load Wattage Text Spanish text",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheLoadWattageTextSpanishText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Chassis Battery Voltage Text Spanish text",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheChassisBatteryVoltageTextSpanishText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Generator Text Spanish text",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheGeneratorTextSpanishText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Charger Text Spanish text",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheChargerTextSpanishText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the AGS Spanish text Text in power main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheAGSSpanishTextTextInPowerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Predictive data Spanish text in power main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyThePredictiveDataSpanishTextInPowerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Generator in Power Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnGeneratorInPowerScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify control Spanish text in Generator main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyControlSpanishTextInGeneratorMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Start button in power main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyStartButtonInPowerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Stop button in power main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyStopButtonInPowerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the  status Spanish text in Generator main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheStatusSpanishTextInGeneratorMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Run time Spanish text in Generator main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheRunTimeSpanishTextInGeneratorMainScreen()"
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
  "name": "I Tap on Charger in Power Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnChargerInPowerScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the charger state Spanish text in  charger main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheChargerStateSpanishTextInChargerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the AC Input Current Spanish text in charger main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheACInputCurrentSpanishTextInChargerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the AC Load Current Spanish text in charger main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheACLoadCurrentSpanishTextInChargerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the charger current Spanish text in charger main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheChargerCurrentSpanishTextInChargerMainScreen()"
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
  "name": "I Tap on AGS in Power Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAGSInPowerScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify clear AGS Spanish text in power AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyClearAGSSpanishTextInPowerAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status Spanish text in power AGs main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyStatusSpanishTextInPowerAGsMainScreen()"
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
  "name": "I Tap on Predictive Data in Power Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnPredictiveDataInPowerScreen()"
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
formatter.uri("src/test/java/com/dometic/L2/features/TC24_LanguageValidationAGSPage(Spanish).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Spanish text in AGS screen",
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
  "name": "I Tap on AGS in Landing Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAGSInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Cargador autom??tico in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheCargadorAutom??ticoInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Inicio del tiempo de silencio in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheInicioDelTiempoDeSilencioInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Fin del tiempo de silencio in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheFinDelTiempoDeSilencioInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Tensi??n de inicio in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheTensi??nDeInicioInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Tiempo de espera in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheTiempoDeEsperaInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Funcionamiento preventivo del generador in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheFuncionamientoPreventivoDelGeneradorInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the D??as seleccionados in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheD??asSeleccionadosInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Hora de inicio in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheHoraDeInicioInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Tiempo de funcionamiento in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheTiempoDeFuncionamientoInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Climatizaci??n con AGS in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheClimatizaci??nConAGSInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll down the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollDownThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Inicio del tiempo de silencio main screen Spanish text in AGS screen",
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
  "name": "I Tap on Inicio del tiempo de silencio",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnInicioDelTiempoDeSilencio()"
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
  "name": "I verify the Inicio del tiempo de silencio Header text in main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheInicioDelTiempoDeSilencioHeaderTextInMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Apply button in the Inicio del tiempo de silencio main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheApplyButtonInTheInicioDelTiempoDeSilencioMainScreen()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Fin del tiempo de silencio main screen Spanish text in AGS screen",
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
  "name": "I Tap on Fin del tiempo de silencio",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnFinDelTiempoDeSilencio()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Fin del tiempo de silencio Header text in main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheFinDelTiempoDeSilencioHeaderTextInMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Apply button in the Fin del tiempo de silencio main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheApplyButtonInTheFinDelTiempoDeSilencioMainScreen()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Tensi??n de inicio main screen Spanish text in AGS screen",
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
  "name": "I Tap on Tensi??n de inicio",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnTensi??nDeInicio()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Tensi??n de inicio Header text in main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheTensi??nDeInicioHeaderTextInMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Apply button in the Tensi??n de inicio main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheApplyButtonInTheTensi??nDeInicioMainScreen()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Tiempo de espera main screen Spanish text in AGS screen",
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
  "name": "I Tap on Tiempo de espera",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnTiempoDeEspera()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Tiempo de espera Header text in main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheTiempoDeEsperaHeaderTextInMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Apply button in the Tiempo de espera main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheApplyButtonInTheTiempoDeEsperaMainScreen()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Hora de inicio main screen Spanish text in AGS screen",
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
  "name": "I Tap on Hora de inicio",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnHoraDeInicio()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Hora de inicio Header text in main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheHoraDeInicioHeaderTextInMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Apply button in the Hora de inicio main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheApplyButtonInTheHoraDeInicioMainScreen()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Tiempo de funcionamiento main screen Spanish text in AGS screen",
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
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tiempo de funcionamiento",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnTiempoDeFuncionamiento()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Tiempo de funcionamiento Header text in main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheTiempoDeFuncionamientoHeaderTextInMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Apply button in the Tiempo de funcionamiento main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheApplyButtonInTheTiempoDeFuncionamientoMainScreen()"
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
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC25_LanguageValidationFusePage(Spanish).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Fuses screen(Spanish) UI",
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
  "name": "I Tap on Fusibles in Landing Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnFusiblesInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify water pump Spanish text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyWaterPumpSpanishTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Satellite Dish Spanish text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifySatelliteDishSpanishTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Accent light Spanish text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyAccentLightSpanishTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Ceiling Light Spanish text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyCeilingLightSpanishTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Bed light Spanish text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyBedLightSpanishTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify washroom light Spanish text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyWashroomLightSpanishTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Galley Spanish text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyGalleySpanishTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Lounge light Spanish text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyLoungeLightSpanishTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Awning Spanish text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyAwningSpanishTextInFuse()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC26_LanguageValidationMechanicalPage(Spanish).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Mechanical screen(Spanish) UI",
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
  "name": "I Tap on Mec??nica in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnMec??nicaInLandingScreen()"
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
  "name": "I verify Controller Spanish text in Mechanical screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyControllerSpanishTextInMechanicalScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Open button in Mechanical screen",
  "keyword": "Then "
});
formatter.match({
  "location": "MechanicalAwning.iVerifyOpenButtonInMechanicalScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Open button Spanish text in Mechanical screen",
  "keyword": "And "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyOpenButtonSpanishTextInMechanicalScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Close button in Mechanical screen",
  "keyword": "Then "
});
formatter.match({
  "location": "MechanicalAwning.iVerifyCloseButtonInMechanicalScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Close button Spanish text in Mechanical screen",
  "keyword": "And "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyCloseButtonSpanishTextInMechanicalScreen()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC27_LanguageValidationTankFreshWaterPage(Spanish).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Spanish Language in Tank Fresh Water screen",
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
  "name": "I Tap on Dep??sito Fresh Water in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnDep??sitoFreshWaterInLandingScreen()"
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
  "name": "I verify the NIVEL DE AGUA DULCE in the Fresh tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheNIVELDEAGUADULCEInTheFreshTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Bomba de agua in the Fresh tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheBombaDeAguaInTheFreshTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Agua dulce in the Fresh tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheAguaDulceInTheFreshTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Negra in the Fresh tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheNegraInTheFreshTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the An??lisis predictivo in the Fresh tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheAn??lisisPredictivoInTheFreshTankMainScreen()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC28_LanguageValidationTankBlackWaterPage(Spanish).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Spanish Language in Tank Black Water screen",
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
  "name": "I Tap on Dep??sito Agua negra in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnDep??sitoAguaNegraInLandingScreen()"
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
  "name": "I verify the NIVEL DE AGUA NEGRA in the Black tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheNIVELDEAGUANEGRAInTheBlackTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Bomba de agua in the Black tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheBombaDeAguaInTheBlackTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Agua dulce in the Black tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheAguaDulceInTheBlackTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Negra in the Black tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheNegraInTheBlackTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the An??lisis predictivo in the Black tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheAn??lisisPredictivoInTheBlackTankMainScreen()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC29_LanguageValidationWaterHeaterTrumaPage(Spanish).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Spanish Language in Water Heater Truma screen",
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
  "name": "I Tap on Calentador de agua",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnCalentadorDeAgua()"
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
  "name": "I Verify the Modo text in the Water Truma main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheModoTextInTheWaterTrumaMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the MODO DE CAMBIO text in the Water Truma main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheMODODECAMBIOTextInTheWaterTrumaMainScreen()"
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
  "name": "I verify the Aplicar in apply button",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyTheAplicarInApplyButton()"
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
formatter.uri("src/test/java/com/dometic/L2/features/TC30_LanguageValidationViewOptionsPage(Spanish).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application ViewOption UI functionality",
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
  "name": "I Validate the cancel button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iValidateTheCancelButton()"
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
  "name": "I verify Ver Opciones spanish text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyVerOpcionesSpanishTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Vista de cuadr??cula spanish text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyVistaDeCuadr??culaSpanishTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Vista de lista spanish text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyVistaDeListaSpanishTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Display spanish text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyDisplaySpanishTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify All Devices spanish text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyAllDevicesSpanishTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Connected Devices spanish text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyConnectedDevicesSpanishTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Non Connected Devices spanish text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyNonConnectedDevicesSpanishTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(Tile View-All Devices) functionality",
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
  "name": "I Tap on Vista de cuadr??cula",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnVistaDeCuadr??cula()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(Tile View-Connected Devices) functionality",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(Tile View-Non Connected Devices) functionality",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(List View-All Devices) functionality",
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
  "name": "I Tap on Vista de lista",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnVistaDeLista()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(List View-Connected Devices) functionality",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(List View-Non Connected Devices) functionality",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption functionality after Logout",
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
  "name": "I Tap on Vista de cuadr??cula",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnVistaDeCuadr??cula()"
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
  "name": "I Tap on hamburger menu in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnHamburgerMenuInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to update language section in Settings",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iNavigateToUpdateLanguageSectionInSettings()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I update language to French in settings",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iUpdateLanguageToFrenchInSettings()"
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
  "name": "I Tap on Logout in Settings",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnLogoutInSettings()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC31_LanguageValidationForgotPasswordPage(French).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validating application French Language in login page",
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
  "name": "I verify Forgot your password French text is displayed in Forgot password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyForgotYourPasswordFrenchTextIsDisplayedInForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Forgot your password content French text is displayed in Forgot password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyForgotYourPasswordContentFrenchTextIsDisplayedInForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify E-mail French label is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyEMailFrenchLabelIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Forgot Email Input text field is displayed in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_Page_EmailInputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Send button is displayed in Forgot password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_Page_PasswordInputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Email in Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_enter_invalid_credentials()"
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
  "name": "I Tap on Send button in Forgot Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_enter_credentials_Forgotpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC32_LanguageValidationSignupPage(French).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Empty Email and Enter the password and verify password(French Language)",
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
  "name": "I Tap on signup link in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupLinkInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I left the Email blank",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iLeftTheEmailBlank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on term and conditions checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnTermAndConditionsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Email field is required French text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.emailFieldIsRequiredFrenchTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter the Email and Empty password and verify password(French Language)",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I left the password blank",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iLeftThePasswordBlank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The password field is required Spanish text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.thePasswordFieldIsRequiredSpanishTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Doesn\u0027t match French text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.doesnTMatchFrenchTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter Valid email valid password and empty verify password(French Language)",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I left the Verify password blank",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iLeftTheVerifyPasswordBlank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The verify password field is required French text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.theVerifyPasswordFieldIsRequiredFrenchTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter inValid email, password and valid verify password(French Language)",
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
  "name": "I enter Invalid Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iEnterInvalidEmailInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The email must be a valid email address French text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.theEmailMustBeAValidEmailAddressFrenchTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter Valid email, invalid password and valid verify password(French Language)",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iEnterInvalidPasswordInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The password doesn\u0027t satisfy the conditions French text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.thePasswordDoesnTSatisfyTheConditionsFrenchTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Doesn\u0027t match French text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.doesnTMatchFrenchTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter Valid email, password and invalid verify password(French Language)",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid verify password password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.iEnterInvalidVerifyPasswordPasswordInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Doesn\u0027t match French text Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.doesnTMatchFrenchTextErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating application Spanish Language in Signup Page",
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
  "name": "I Tap on signup link in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupLinkInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Email Inputbox is displayed in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_Page_EmailInputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Password Inputbox is displayed in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_Page_Password_Inputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Confirm Password Inputbox is displayed in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_Page_confirm_password_Inputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Signup button is displayed in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_Page_Signupbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Email in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Send button in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_signupbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on login link in signup page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnLoginLinkInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC33_LanguageValidationLoginPage(French).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validating application French Language in login page",
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
  "name": "I verify Welcome! Text(French) is displayed in login screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyWelcomeTextFrenchIsDisplayedInLoginScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Log In Text(French) is displayed in login screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyLogInTextFrenchIsDisplayedInLoginScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify E-mail label is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyEMailLabelIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Password label is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyPasswordLabelIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Forgot password? link(French) is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyForgotPasswordLinkFrenchIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Don\u0027t have an account? text(French) is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyDonTHaveAnAccountTextFrenchIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Sign Up link(French) is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifySignUpLinkFrenchIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Login CTA is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyLoginCTAIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with blank email and blank password field(French Language)",
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
  "name": "I verify black email in email text field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyBlackEmailInEmailTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify black password in password text field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyBlackPasswordInPasswordTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Email field is required French Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.theEmailFieldIsRequiredFrenchErrorMessageIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Password field is required French Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.thePasswordFieldIsRequiredFrenchErrorMessageIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Invalid Email with valid password(French Language)",
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
  "name": "I enter Invalid Email in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterInvalidEmailInLoginPage()"
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
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "French Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.frenchErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Valid email and invalid password(French Language)",
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
  "name": "I enter an Invalid Password in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterAnInvalidPasswordInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The password must be at least 5 characters. French Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.thePasswordMustBeAtLeastCharactersFrenchErrorMessageIsDisplayedInLoginPage(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Valid email and blank password(French Language)",
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
  "name": "I verify black password in password text field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyBlackPasswordInPasswordTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Password field is required French Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.thePasswordFieldIsRequiredFrenchErrorMessageIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with empty email and valid password(French Language)",
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
  "name": "I verify black email in email text field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyBlackEmailInEmailTextField()"
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
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Email field is required French Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.theEmailFieldIsRequiredFrenchErrorMessageIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Login Functionality with invalid credentials(French Language)",
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
  "name": "I enter Invalid Email in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterInvalidEmailInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an Invalid Password in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterAnInvalidPasswordInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "French Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.frenchErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Login Functionality with valid credentials(French Language)",
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
  "name": "I Tap on an Login button(Spanish) in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnAnLoginButtonSpanishInLoginPage()"
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
  "name": "I Tap on hamburger menu in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnHamburgerMenuInLandingScreen()"
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
  "name": "I navigate to update language section in Settings",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iNavigateToUpdateLanguageSectionInSettings()"
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
  "name": "I update language to French in settings",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iUpdateLanguageToFrenchInSettings()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC34_TC21_LanguageValidationLandingPage(French).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application French text in Landing screen",
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
  "name": "I verify the text Climat in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextClimatInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text La temp??rature est ?? l???ext??rieur de la plage in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextLaTemp??ratureEst??LExt??rieurDeLaPlageInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text Alimentation in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextAlimentationInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text Batterie de maison in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextBatterieDeMaisonInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text Rechargez la batterie! in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextRechargezLaBatterieInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text Lampe in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextLampeInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text Pr??sentement ALLUM?? in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextPr??sentementALLUM??InTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text AGS in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextAGSInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text Chargement automatique in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextChargementAutomatiqueInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text MARCHE in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextMARCHEinTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text Fusibles in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextFusiblesInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text Tout est OK in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextToutEstOKInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text M??canique in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextM??caniqueInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text Auvent in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextAuventInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text R??servoir in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextR??servoirInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text Fresh Water(French) in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextFreshWaterFrenchInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text Eaux noires in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextEauxNoiresInTheLandingPage()"
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
  "name": "I verify the text Chauffe-eau in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextChauffeEauInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text Truma in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextTrumaInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text Dispositifs in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextDispositifsInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the text r??servoirs in the Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTextR??servoirsInTheLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll down the screen in Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollDownTheScreenInLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC35_LanguageValidationClimatePage(French).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application French Language in Climate screen",
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
  "name": "I Tap on Climate in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnClimateInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Climate header French text displayed in Climate page",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheClimateHeaderFrenchTextDisplayedInClimatePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify inside French text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyInsideFrenchTextDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify outside French text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyOutsideFrenchTextDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify All Climate French text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyAllClimateFrenchTextDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Climate toggle is displayed in Climate page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iVerifyClimateToggleIsDisplayedInClimatePage()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC36_LanguageValidationPowerPage(French).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application French Language in Power screen",
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
  "name": "I Tap on the Alimentation in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iTapOnTheAlimentationInLandingScreen()"
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
  "name": "I Verify the power main screen header French text",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyThePowerMainScreenHeaderFrenchText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the House Battery French text",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheHouseBatteryTextFrenchText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Inverter French text",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheInverterTextFrenchText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Operating Mode French text",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheOperatingModeTextFrenchText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the House Battery Voltage French text",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheHouseBatteryVoltageTextFrenchText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Load Wattage French text",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheLoadWattageTextFrenchText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Chassis Battery Voltage French text",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheChassisBatteryVoltageTextFrenchText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Generator French text",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheGeneratorTextFrenchText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Charger French text",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheChargerTextFrenchText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the AGS French Text in power main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheAGSFrenchTextTextInPowerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Predictive data French text in power main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyThePredictiveDataFrenchTextInPowerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Generator in Power Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnGeneratorInPowerScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify control French text in Generator main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyControlFrenchTextInGeneratorMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Start button in power main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyStartButtonInPowerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Stop button in power main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyStopButtonInPowerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the  status French text in Generator main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheStatusFrenchTextInGeneratorMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Run time French text in Generator main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheRunTimeFrenchTextInGeneratorMainScreen()"
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
  "name": "I Tap on Charger in Power Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnChargerInPowerScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the charger state French text in  charger main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheChargerStateFrenchTextInChargerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the AC Input Current French text in charger main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheACInputCurrentFrenchTextInChargerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the AC Load Current French text in charger main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheACLoadCurrentFrenchTextInChargerMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the charger current French text in charger main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheChargerCurrentFrenchTextInChargerMainScreen()"
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
  "name": "I Tap on AGS in Power Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAGSInPowerScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify clear AGS French text in power AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyClearAGSFrenchTextInPowerAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify status French text in power AGs main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyStatusFrenchTextInPowerAGsMainScreen()"
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
  "name": "I Tap on Predictive Data in Power Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnPredictiveDataInPowerScreen()"
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
formatter.uri("src/test/java/com/dometic/L2/features/TC37_LanguageValidationAGSPage(French).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application French text in AGS screen",
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
  "name": "I Tap on AGS in Landing Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAGSInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Chargement automatique in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheChargementAutomatiqueInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the D??but de la p??riode d???inactivit?? in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheD??butDeLaP??riodeDInactivit??InTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Fin de la p??riode d???inactivit?? in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheFinDeLaP??riodeDInactivit??InTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Tension de d??marrage in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTensionDeD??marrageInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Temps en dessous de in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheTempsEnDessousDeInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the G??n??rateur d???exercices in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheG??n??rateurDExercicesInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Selected Days in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheSelectedDaysInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Heure de d??but in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheHeureDeD??butInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Dur??e de fonctionnement in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheDur??eDeFonctionnementInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Climate AGS in the AGS main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheClimateAGSInTheAGSMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll down the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollDownThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying D??but de la p??riode d???inactivit?? main screen French text in AGS screen",
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
  "name": "I Tap on D??but de la p??riode d???inactivit??",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iTapOnD??butDeLaP??riodeDInactivit??()"
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
  "name": "I verify the D??but de la p??riode d???inactivit?? Header text in main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheD??butDeLaP??riodeDInactivit??HeaderTextInMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Apply button in the D??but de la p??riode d???inactivit?? main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheApplyButtonInTheD??butDeLaP??riodeDInactivit??MainScreen()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Dur??e de fonctionnement main screen French text in AGS screen",
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
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Dur??e de fonctionnement",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iTapOnDur??eDeFonctionnement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Dur??e de fonctionnement Header text in main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheDur??eDeFonctionnementHeaderTextInMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Apply button in the Dur??e de fonctionnement main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheApplyButtonInTheDur??eDeFonctionnementMainScreen()"
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
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC38_LanguageValidationFusePage(French).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Fuses screen(French) UI",
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
  "name": "I Tap on Fusibles in Landing Screen",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iTapOnFusiblesInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify water pump French text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyWaterPumpFrenchTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Satellite Dish French text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifySatelliteDishFrenchTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Accent light French text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyAccentLightFrenchTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Ceiling Light French text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyCeilingLightFrenchTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Bed light French text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyBedLightFrenchTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify washroom light French text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyWashroomLightFrenchTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Galley French text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyGalleyFrenchTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Lounge light French text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyLoungeLightFrenchTextInFuse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Awning French text in Fuse",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyAwningFrenchTextInFuse()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC39_LanguageValidationMechanicalPage(French).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Mechanical screen(French) UI",
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
  "name": "I Tap on M??canique in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iTapOnM??caniqueInLandingScreen()"
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
  "name": "I verify Controller French text in Mechanical screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyControllerFrenchTextInMechanicalScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Open button in Mechanical screen",
  "keyword": "Then "
});
formatter.match({
  "location": "MechanicalAwning.iVerifyOpenButtonInMechanicalScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Open button French text in Mechanical screen",
  "keyword": "And "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyOpenButtonFrenchTextInMechanicalScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Close button in Mechanical screen",
  "keyword": "Then "
});
formatter.match({
  "location": "MechanicalAwning.iVerifyCloseButtonInMechanicalScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Close button French text in Mechanical screen",
  "keyword": "And "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyCloseButtonFrenchTextInMechanicalScreen()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC40_LanguageValidationTankFreshWaterPage(French).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application French Language in Tank Fresh Water screen",
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
  "name": "I Tap on R??servoir Fresh Water in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iTapOnR??servoirFreshWaterInLandingScreen()"
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
  "name": "I verify the NIVEAU D???EAU POTABLE in the Fresh tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheNIVEAUDEAUPOTABLEInTheFreshTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Pompe ?? eau in the Fresh tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyThePompe??EauInTheFreshTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Potable in the Fresh tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyThePotableInTheFreshTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Noires in the Fresh tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheNoiresInTheFreshTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Analyse pr??dictive in the Fresh tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheAnalysePr??dictiveInTheFreshTankMainScreen()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC41_LanguageValidationTankBlackWaterPage(French).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application French Language in Tank Black Water screen",
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
  "name": "I Tap on R??servoir in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iTapOnR??servoirInLandingScreen()"
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
  "name": "I verify the NIVEAU D???EAU POTABLE in the Black tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheNIVEAUDEAUPOTABLEInTheBlackTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Pompe ?? eau in the Black tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyThePompe??EauInTheBlackTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Potable in the Black tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyThePotableInTheBlackTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Noires in the Black tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheNoiresInTheBlackTankMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Analyse pr??dictive in the Black tank main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheAnalysePr??dictiveInTheBlackTankMainScreen()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC42_LanguageValidationWaterHeaterTrumaPage(French).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application French Language in Water Heater Truma screen",
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
  "name": "I Tap on Chauffe-eau",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iTapOnChauffeEau()"
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
  "name": "I Verify the Mode French text in the Water Truma main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheModeFrenchTextInTheWaterTrumaMainScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the CHANGER DE MODE French text in the Water Truma main screen",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheCHANGERDEMODEFrenchTextInTheWaterTrumaMainScreen()"
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
  "name": "I verify the Appliquer in apply button",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyTheAppliquerInApplyButton()"
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
formatter.uri("src/test/java/com/dometic/L2/features/TC43_LanguageValidationViewOptionsPage(French).feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application ViewOption UI functionality(French)",
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
  "name": "I Validate the cancel button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iValidateTheCancelButton()"
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
  "name": "I verify Voir les options French text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyVoirLesOptionsFrenchTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Affichage par vignettes French text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyAffichageParVignettesFrenchTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Affichage par liste French text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyAffichageParListeFrenchTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Display French text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyDisplayFrenchTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify All Devices French text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyAllDevicesFrenchTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Connected Devices French text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyConnectedDevicesFrenchTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Non Connected Devices French text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iVerifyNonConnectedDevicesFrenchTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(Tile View-All Devices) functionality",
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
  "name": "I Tap on Affichage par vignettes",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iTapOnAffichageParVignettes()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(Tile View-Connected Devices) functionality",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(Tile View-Non Connected Devices) functionality",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(List View-All Devices) functionality",
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
  "name": "I Tap on Affichage par liste",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iTapOnAffichageParListe()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(List View-Connected Devices) functionality",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(List View-Non Connected Devices) functionality",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption functionality after Logout",
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
  "name": "I Tap on Affichage par vignettes",
  "keyword": "Then "
});
formatter.match({
  "location": "FrenchLanguage.iTapOnAffichageParVignettes()"
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
  "name": "I Tap on hamburger menu in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnHamburgerMenuInLandingScreen()"
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
  "name": "I Tap on Logout",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnLogout()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});