package TestAutomation.methods;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class ClickElementsMethods extends SelectElementByType implements BaseTest {
    //SelectElementByType eleType= new SelectElementByType();
    private WebElement element = null;

    /**
     * Method to click on an element
     *
     * @param accessType : String : Locator type (id, name, class, xpath, css)
     * @param accessName : String : Locator value
     */
    public void click(String accessType, String accessName) {
        element = wait.until(ExpectedConditions.presenceOfElementLocated(getElementByType(accessType, accessName)));
        element.click();
    }
    /** Method to Double click on an element
     @param accessType : String : Locator type (id, name, class, xpath, css)
     @param accessValue : String : Locator value
     */
    public void doubleClick(String accessType, String accessValue)
    {
        element = wait.until(ExpectedConditions.presenceOfElementLocated(getElementByType(accessType, accessValue)));

        Actions action = new Actions(driver);
        action.moveToElement(element).doubleClick().perform();
    }

}