package utilities;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Explicit {
    public static WebElement wait(WebElement webElement, Integer TIME){
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(),TIME);
        return wait.until(ExpectedConditions.visibilityOf(webElement));

    }
}
