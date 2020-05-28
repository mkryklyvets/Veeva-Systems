@login
Feature: Yahoo login feature

Background:
  When user goes to yahoo
  Then Title should contain Yahoo - login and Sign in sign should be displayed and Cursor remain on Sign in Field

  @TC_YH_Login_001
  Scenario: As a user i should be able to login to Yahoo mail using authenticated test data

    When user enter correct email
    And user enter correct password
    Then user should be able to enter main page


@TC_YH_Login_002
    Scenario: As a user i should not be able to login to Yahoo mail using wrong username, error message should be displayed

    When user enter wrong username and press enter
    Then username error message should be displayed

@TC_YH_Login_003
  Scenario: As a user i should not be able to login to Yahoo mail without username, warning message should be displayed

    When user leaves username field empty and press enter
    Then username warning message should be displayed

@TC_YH_Login_004
    Scenario: As a user i should not be able to login to Yahoo mail without correct password, error message should be displayed

      When user enter correct email
      And user enter wrong password and press enter
      Then password error message should be displayed

@TC_YH_Login_005
      Scenario: As a user i should not be able to login to Yahoo mail without password, warning message should be displayed

        When user enter correct email
        And user leaves password field blank and press enter
        Then password warning message should be displayed
