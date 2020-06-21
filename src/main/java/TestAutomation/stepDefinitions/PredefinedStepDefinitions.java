package TestAutomation.stepDefinitions;

import Environment.DriverUtil;
import TestAutomation.methods.AssertionMethods;
import TestAutomation.methods.BaseTest;
import TestAutomation.methods.TestCaseFailed;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.io.File;
import java.io.IOException;
import java.util.Date;

public class PredefinedStepDefinitions extends AssertionMethods implements BaseTest {

    public static long DEFAULT_WAIT = 20;
    protected WebDriver driver = DriverUtil.getDefaultDriver();
    protected static String baseUrl = "http://automationpractice.com/";
    protected static WebElement element;
    protected static WebDriverWait wait;

    protected static Date date = new Date();
    protected static long ts = date.getTime();
    protected static String txtFileName = ts + "_result.txt";
    protected static File file = new File(txtFileName);

    @Given("^I go to main page$")
    public void iGoToMainPage() {
        driver.get(baseUrl);
    }

    //Assertion steps

    /**
     * page title checking
     *
     * @param present :
     * @param title   :
     */
    @Then("^I should\\s*((?:not)?)\\s+see page title as \"(.+)\"$")
    public void check_title(String present, String title) throws TestCaseFailed, IOException {
        //System.out.println("Present :" + present.isEmpty());
        assertionObj.checkTitle(title, present.isEmpty());
    }

    @Then("^I see? (.+) \"(.*?)\" element$")
    public void iSeeCheckElement(String type, String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        assertionObj.isElementDisplayed(type, accessName);
    }

    // step to check element text
    @Then("^element having (.+) \"([^\"]*)\" should\\s*((?:not)?)\\s+have text as \"(.*?)\"$")
    public void check_element_text(String type, String accessName, String present, String value) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        assertionObj.checkElementText(type, value, accessName, present.isEmpty());
    }

    // enter text into input field steps
    @Then("^I enter \"([^\"]*)\" into input field having (.+) \"([^\"]*)\"$")
    public void enter_text(String text, String type, String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        inputObj.enterText(type, text, accessName);
    }

    // clear input field steps
    @Then("^I clear input field having (.+) \"([^\"]*)\"$")
    public void clear_text(String type, String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        inputObj.clearText(type, accessName);
    }

    // click on web element
    @Then("^I click on element having (.+) \"(.*?)\"$")
    public void click(String type, String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        clickObj.click(type, accessName);
    }

    // hover over element

    // Note: Doesn't work on Windows firefox
    @Then("^I hover over element having (.+) \"(.*?)\"$")
    public void hover_over_element(String type, String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        navigationObj.hoverOverElement(type, accessName);
    }

    //Progress methods

    // wait for specific period of time
    @Then("^I wait for (\\d+) seconds$")
    public void wait(String time) throws TestCaseFailed, TestCaseFailed, InterruptedException {
        progressObj.wait(time);
    }

    //wait for specific element to display for specific period of time
    @Then("^I wait (\\d+) seconds for element having (.+) \"(.*?)\" to display$")
    public void wait_for_ele_to_display(String duration, String type, String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        progressObj.waitForElementToDisplay(type, accessName, duration);
    }

    //create new txt file
    @And("^I create new txt file$")
    public static void iCreateNewTxtFile() {
        assertionObj.createTxtFile(file);
    }

    //get of page info
    @And("^I get of page info$")
    public void iGetOfPageInfo() {
        String currentTitle = driver.getTitle();
        String currentUrl = driver.getCurrentUrl();
        String responseCode = restAPI(currentUrl);

        assertionObj.writeTxtFile(file, currentUrl, currentTitle, responseCode);

    }

    //send email
    @And("^I send email$")
    public void iSendEmail() {
        sendMailobj.sendMail(file);
    }

    //compare parametric userId of blog posts using the API endpoint
    @Then("user {int} should have {int} posts")
    public void userShouldHavePosts(int userId, int numposts) {
        int APInumposts = assertionObj.restAPITestUser(userId, numposts);
        Assert.assertEquals(userId, numposts, "Numposts is equal API response!");
    }

    //check each blog post should have a unique ID
    @Then("each blog post should have a unique ID")
    public void eachBlogPostShouldHaveAUniqueID() {
        assertionObj.numPostsAPI();
    }

    //Step to close the browser
    @Then("^I close browser$")
    public void close_browser() {
        progressObj.closeDriver();
    }

    @When("I check status code {int} with my url {string}")
    public void iCheckStatusCodeWithMyUrl(int statusCode, String url) {
        assertionObj.restAPITest(statusCode, url);
    }

    // scroll webpage

    @Then("^I scroll to (top|end) of page$")
    public void scroll_page(String to) throws TestCaseFailed, IOException {
        navigationObj.scrollPage(to);
    }


    // scroll webpage to specific element

    @Then("^I scroll to element having (.+) \"(.*?)\"$")
    public void scroll_to_element(String type, String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        navigationObj.scrollToElement(type, accessName);
    }


    // select option by text/value from dropdown
    @Then("^I select \"(.*?)\" option by (.+) from dropdown having (.+) \"(.*?)\"$")
    public void select_option_from_dropdown(String option,String optionBy,String type,String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        miscmethodObj.validateOptionBy(optionBy);
        inputObj.selectOptionFromDropdown(type,optionBy, option, accessName);
    }

    // select option by index from dropdown
    @Then("^I select (\\d+) option by index from dropdown having (.+) \"(.*?)\"$")
    public void select_option_from_dropdown_by_index(String option, String type, String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        inputObj.selectOptionFromDropdown(type,"selectByIndex", option, accessName);
    }

    // select option by text/value from multiselect
    @Then("^I select \"(.*?)\" option by (.+) from multiselect dropdown having (.+) \"(.*?)\"$")
    public void select_option_from_multiselect_dropdown(String option,String optionBy, String type,String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        miscmethodObj.validateOptionBy(optionBy);
        inputObj.selectOptionFromDropdown(type,optionBy, option, accessName);
    }

    // select option by index from multiselect
    @Then("^I select (\\d+) option by index from multiselect dropdown having (.+) \"(.*?)\"$")
    public void select_option_from_multiselect_dropdown_by_index(String option, String type, String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        inputObj.selectOptionFromDropdown(type,"selectByIndex", option, accessName);
    }

    // deselect option by text/value from multiselect
    @Then("^I deselect \"(.*?)\" option by (.+) from multiselect dropdown having (.+) \"(.*?)\"$")
    public void deselect_option_from_multiselect_dropdown(String option,String optionBy, String type,String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        miscmethodObj.validateOptionBy(optionBy);
        inputObj.deselectOptionFromDropdown(type, optionBy, option, accessName);
    }

    // deselect option by index from multiselect
    @Then("^I deselect (\\d+) option by index from multiselect dropdown having (.+) \"(.*?)\"$")
    public void deselect_option_from_multiselect_dropdown_by_index(String option, String type, String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        inputObj.deselectOptionFromDropdown(type, "selectByIndex", option, accessName);
    }

    // step to select option from mutliselect dropdown list
	/*@Then("^I select all options from multiselect dropdown having (.+) \"(.*?)\"$")
	public void select_all_option_from_multiselect_dropdown(String type,String accessName) throws TestCaseFailed
	{
	miscmethod.validateLocator(type);
	//inputObj.
	//select_all_option_from_multiselect_dropdown(type, access_name)
	}*/

    // step to unselect option from mutliselect dropdown list
    @Then("^I deselect all options from multiselect dropdown having (.+) \"(.*?)\"$")
    public void unselect_all_option_from_multiselect_dropdown(String type, String accessName) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        inputObj.unselectAllOptionFromMultiselectDropdown(type, accessName);
    }

    // step to check attribute value
    @Then("^element having (.+) \"([^\"]*)\" should\\s*((?:not)?)\\s+have attribute \"(.*?)\" with value \"(.*?)\"$")
    public void check_element_attribute(String type,String accessName,String present,String attrb,String value) throws TestCaseFailed, IOException {
        miscmethodObj.validateLocator(type);
        assertionObj.checkElementAttribute(type, attrb, value, accessName, present.isEmpty());
    }

}
