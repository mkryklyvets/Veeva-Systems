package step_defs;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.YahooLoginPage;
import utilities.Config;
import utilities.Driver;
import utilities.Explicit;


public class Login {
YahooLoginPage yahooLoginPage = new YahooLoginPage();
    @When("user goes to yahoo")
    public void user_goes_to_yahoo() {
       Driver.getDriver().get(Config.getProperty("url"));
    }

    @Then("Title should contain Yahoo - login and Sign in sign should be displayed and Cursor remain on Sign in Field")
    public void title_should_contain_Yahoo_login_and_Sign_in_sign_should_be_displayed_and_Cursor_remain_on_Sign_in_Field() {

        Assert.assertTrue("LogIn Title doesnt match",Driver.getDriver().getTitle().contains("Yahoo"));
        Assert.assertTrue("Sign In sign not displayed",yahooLoginPage.SignIN_sign.isDisplayed());
        WebElement active = Driver.getDriver().switchTo().activeElement();
        Assert.assertEquals("active",active.getAttribute("id"),yahooLoginPage.UserName_field.getAttribute("id"));
        yahooLoginPage.UserName_field.clear();
    }

    @When("user enter correct email")
    public void user_enter_correct_email() {
        yahooLoginPage.UserName_field.sendKeys(Config.getProperty("username")+ Keys.ENTER);

    }

    @When("user enter correct password")
    public void user_enter_correct_password() {
        yahooLoginPage.Password_field.sendKeys(Config.getProperty("password")+Keys.ENTER);
    }

    @Then("user should be able to enter main page")
    public void user_should_be_able_to_enter_main_page() {
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 5);
        wait.until(ExpectedConditions.titleContains(Config.getProperty("username")+"@yahoo.com"));
       String title = Driver.getDriver().getTitle();
       Assert.assertEquals("Home page title doesnt match",title,(Config.getProperty("username")+"@yahoo.com - Yahoo Mail"));
    }

    @When("user enter wrong username and press enter")
    public void user_enter_wrong_username_and_press_enter() {

      yahooLoginPage.UserName_field.sendKeys("wrong username"+Keys.ENTER);

    }

    @Then("username error message should be displayed")
    public void username_error_message_should_be_displayed() {
      WebElement UserNameErrorMessage=Explicit.wait(yahooLoginPage.UserNameError_message,5);
        Assert.assertTrue("Username error message FAILED",UserNameErrorMessage.isDisplayed());
    }

    @When("user leaves username field empty and press enter")
    public void user_leaves_username_field_empty_and_press_enter() {
    yahooLoginPage.Next_button.sendKeys(""+Keys.ENTER);
    }

    @Then("username warning message should be displayed")
    public void username_warning_message_should_be_displayed() {
        WebElement UserNameWarning = Explicit.wait(yahooLoginPage.UserNameError_message,5);
        Assert.assertTrue("Username warning message FAILED",UserNameWarning.isDisplayed());
    }

    @When("user enter wrong password and press enter")
    public void user_enter_wrong_password_and_press_enter() {
      yahooLoginPage.Password_field.sendKeys("wrong password"+Keys.ENTER);
    }

    @Then("password error message should be displayed")
    public void password_error_message_should_be_displayed() {
        WebElement PasswordErrorMessage = Explicit.wait(yahooLoginPage.Password_field,5);
        Assert.assertTrue("Password error message is not displayed ",PasswordErrorMessage.isDisplayed());
    }

    @When("user leaves password field blank and press enter")
    public void user_leaves_password_fiel_blank_and_press_enter() {
        yahooLoginPage.Password_field.sendKeys(""+Keys.ENTER);
    }

    @Then("password warning message should be displayed")
    public void password_warrning_message_should_be_displayed() {
        WebElement PasswordWarning=Explicit.wait(yahooLoginPage.PasswordError_message,5);
        Assert.assertTrue("Pasword warning is not displayed",PasswordWarning.isDisplayed());
        Assert.assertTrue("Password warning message doesnt match",PasswordWarning.getText().contains("Please provide password."));
    }





}
