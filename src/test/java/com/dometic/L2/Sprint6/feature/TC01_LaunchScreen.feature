Feature: Testing Login page in Dometic LMC application

  @First @sanity
  Scenario Outline: Launching the application
    Given I Launch the application on "<portNumber>"
    Then I Wait short period for Page to Load
    Then I Tap on Allow button in Permission popup in Login Page
    Then I Wait short period for Page to Load
    Then I verify Welcome Text is displaying in Login Page
    Then I Verify Page title is displayed in Login Page
    Then I Wait short period for Page to Load

    #signup
  # Empty Email and Enter the password and verify password
    Then I Tap on signup link in login page
    Then I left the Email blank
    Then I enter Password in Signup Page
    And I enter confirm password in Signup Page
    Then I Tap on term and conditions checkbox
    Then I Tap on Signup button

  # Enter the Email and Empty password and verify password
    Then I enter Email in Signup Page
    Then I left the password blank
    And I enter confirm password in Signup Page
    Then I Tap on Signup button

  # Enter Valid email valid password and empty verify password
    Then I enter Email in Signup Page
    Then I enter Password in Signup Page
    Then I left the Verify password blank
    Then I Tap on Signup button

  # Enter inValid email, password and valid verify password
    Then I enter Invalid Email in Signup Page
    Then I enter Password in Signup Page
    And I enter confirm password in Signup Page
    Then I Tap on Signup button

  # Enter Valid email, invalid password and valid verify password
    Then I enter Email in Signup Page
    Then I enter invalid Password in Signup Page
    And I enter confirm password in Signup Page
    Then I Tap on Signup button

  # Enter Valid email, password and invalid verify password
    Then I enter Email in Signup Page
    Then I enter Password in Signup Page
    And I enter invalid verify password password in Signup Page
    Then I Tap on Signup button

  # Verifying application Signup Functionality
    Then I Wait short period for Page to Load
    Then I Tap on signup link in login page
    Then I Verify Email Inputbox is displayed in Signup Page
    Then I Verify Password Inputbox is displayed in Signup Page
    Then I Verify Confirm Password Inputbox is displayed in Signup Page
    Then I Verify Signup button is displayed in Signup Page
    And I enter Email in Signup Page
    And I enter Password in Signup Page
    And I enter confirm password in Signup Page
    Then I Tap on Send button in Signup Page
    Then I Tap on login link in signup page

    #Forgot Password
 # Verifying application Forgot Password Functionality
    Then I verify Forgot your password text is displayedd in Forgot password Page
    Then I verify Forgot your password content text is displayed in Forgot password Page
    Then I verify E-mail (case sensitive) label is displayed
    Then I Verify Forgot Email Input text field is displayed in Login Page
    Then I Verify Send button is displayed in Forgot password Page
    And I enter Email in Login Page
    Then I Wait short period for Page to Load
    Then I Tap on Send button in Forgot Password Page

    #Login Page
  #  Verifying application Login Page UI
    Then I verify Welcome! Text is displayed in login screen
    Then I verify Log In Text is displayed in login screen
    Then I verify E-mail label is displayed in login page
    Then I verify Password label is displayed in login page
    Then I verify Forgot password? link is displayed in login page
    Then I verify Don't have an account? text is displayed in login page
    Then I verify Sign Up link is displayed in login page
    Then I verify Login CTA is displayed in login page

  # Login with blank email and blank password field
    Then I verify black email in email text field
    Then I verify black password in password text field
    Then I Tap on Login button in Login Page

  # Login with Invalid Email with valid password
    Then I enter Invalid Email in Login Page
    Then I enter Valid Password in Login Page
    Then I Tap on Login button in Login Page

  # Login with Valid email and invalid password
    Then I enter Valid Email in Login Page
    Then I enter an Invalid Password in Login Page
    Then I Tap on Login button in Login Page

 # Login with Valid email and blank password
    Then I enter Valid Email in Login Page
    Then I verify black password in password text field
    Then I Tap on Login button in Login Page

  # Login with empty email and valid password
    Then I verify black email in email text field
    Then I enter Valid Password in Login Page
    Then I Tap on Login button in Login Page

 #  Verifying application Login Functionality with invalid credentials
    Then I enter Invalid Email in Login Page
    Then I enter an Invalid Password in Login Page
    Then I Tap on Login button in Login Page
    Then Error message is displayed

  # Verifying application Login Functionality with valid credentials
    Then I enter Valid Email in Login Page
    Then I enter Valid Password in Login Page
    Then I Tap on an Login button in Login Page
    Then  I Wait short period for Page to Load
    Then I verify successfully navigated to On boarding screen

    #onboarding screen
#   Verifying application On boarding screen functionality
    Then I entered into On boarding screen
    Then I Wait short period for Page to Load
    Then I Tap on Yes button
    Then Landing screen is displayed

    Examples:
      | portNumber                   |
      | http://127.0.0.1:5723/wd/hub |
      | http://127.0.0.1:4723/wd/hub |
