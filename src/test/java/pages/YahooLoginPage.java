package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class YahooLoginPage {

public YahooLoginPage(){
    PageFactory.initElements(Driver.getDriver(),this);
}
// Sign in sign
    @FindBy(xpath = "//strong[@class='challenge-heading']")
    public WebElement SignIN_sign;

// Username field
    @FindBy(id = "login-username")
    public WebElement UserName_field;

// Next button
    @FindBy(id = "login-signin")
    public WebElement Next_button;

// Stay Sign in sign
    @FindBy(xpath = "//span[@class='stay-signed-in checkbox-container']//label")
    public WebElement StaySignIN_sign;

// Stay Sign in checkbox
    @FindBy(id = "persistent")
    public WebElement StaySignIN_checkbox;

// Username error message
    @FindBy(id = "username-error")
    public WebElement UserNameError_message;

// Enter password sign
    @FindBy(xpath = "//strong")
    public WebElement EnterPassword_sign;

// Password field
    @FindBy(id = "login-passwd")
    public WebElement Password_field;

// Password error message
    @FindBy(xpath = "//p[@class='error-msg']")
    public WebElement PasswordError_message;







}
