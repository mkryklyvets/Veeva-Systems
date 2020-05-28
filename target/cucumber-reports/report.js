$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login.feature");
formatter.feature({
  "name": "Yahoo login feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user goes to yahoo",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_goes_to_yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title should contain Yahoo - login and Sign in sign should be displayed and Cursor remain on Sign in Field",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.title_should_contain_Yahoo_login_and_Sign_in_sign_should_be_displayed_and_Cursor_remain_on_Sign_in_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user i should be able to login to Yahoo mail using authenticated test data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@TC_YH_Login_001"
    }
  ]
});
formatter.step({
  "name": "user enter correct email",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enter_correct_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter correct password",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_enter_correct_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to enter main page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_should_be_able_to_enter_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user goes to yahoo",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_goes_to_yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title should contain Yahoo - login and Sign in sign should be displayed and Cursor remain on Sign in Field",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.title_should_contain_Yahoo_login_and_Sign_in_sign_should_be_displayed_and_Cursor_remain_on_Sign_in_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user i should not be able to login to Yahoo mail using wrong username, error message should be displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@TC_YH_Login_002"
    }
  ]
});
formatter.step({
  "name": "user enter wrong username and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enter_wrong_username_and_press_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "username error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.username_error_message_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user goes to yahoo",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_goes_to_yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title should contain Yahoo - login and Sign in sign should be displayed and Cursor remain on Sign in Field",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.title_should_contain_Yahoo_login_and_Sign_in_sign_should_be_displayed_and_Cursor_remain_on_Sign_in_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user i should not be able to login to Yahoo mail without username, warning message should be displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@TC_YH_Login_003"
    }
  ]
});
formatter.step({
  "name": "user leaves username field empty and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_leaves_username_field_empty_and_press_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "username warning message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.username_warning_message_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user goes to yahoo",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_goes_to_yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title should contain Yahoo - login and Sign in sign should be displayed and Cursor remain on Sign in Field",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.title_should_contain_Yahoo_login_and_Sign_in_sign_should_be_displayed_and_Cursor_remain_on_Sign_in_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user i should not be able to login to Yahoo mail without correct password, error message should be displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@TC_YH_Login_004"
    }
  ]
});
formatter.step({
  "name": "user enter correct email",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enter_correct_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter wrong password and press enter",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_enter_wrong_password_and_press_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.password_error_message_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user goes to yahoo",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_goes_to_yahoo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title should contain Yahoo - login and Sign in sign should be displayed and Cursor remain on Sign in Field",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.title_should_contain_Yahoo_login_and_Sign_in_sign_should_be_displayed_and_Cursor_remain_on_Sign_in_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user i should not be able to login to Yahoo mail without password, warning message should be displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@TC_YH_Login_005"
    }
  ]
});
formatter.step({
  "name": "user enter correct email",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enter_correct_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user leaves password field blank and press enter",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_leaves_password_fiel_blank_and_press_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password warning message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.password_warrning_message_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});