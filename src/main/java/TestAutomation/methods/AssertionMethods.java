package TestAutomation.methods;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;


public class AssertionMethods extends SelectElementByType implements BaseTest {
    //This file contains assertion methods which are called from predefinedStepDefinitions

    //SelectElementByType eleType= new SelectElementByType();
    private WebElement element = null;

    /**
     * Method to get page title
     *
     * @return String
     */
    public String getPageTitle() {
        return driver.getTitle();
    }

    /**
     * Method to verify page title
     *
     * @param title    : String : expected title
     * @param testCase : Boolean : test case [true or false]
     */
    public void checkTitle(String title, boolean testCase) throws TestCaseFailed, IOException {
        String pageTitle = getPageTitle();

        if (testCase) {
            if (!pageTitle.equals(title))
                throw new TestCaseFailed("Page Title Not Matched, Actual Page Title : " + pageTitle);
        } else {
            if (pageTitle.equals(title))
                throw new TestCaseFailed("Page Title Matched, Actual Page Title : " + pageTitle);
        }
    }

    /**
     * Method to get element text
     *
     * @param accessType : String : Locator type (id, name, class, xpath, css)
     * @param accessName : String : Locator value
     * @return String
     */
    public String getElementText(String accessType, String accessName) {
        element = wait.until(ExpectedConditions.presenceOfElementLocated(getElementByType(accessType, accessName)));
        return element.getText();
    }

    /**
     * Method to check element text
     *
     * @param accessType  : String : Locator type (id, name, class, xpath, css)
     * @param actualValue : String : Expected element text
     * @param accessName  : String : Locator value
     * @param testCase    : Boolean : test case [true or false]
     */
    public void checkElementText(String accessType, String actualValue, String accessName, boolean testCase) throws TestCaseFailed, IOException {
        String elementText = getElementText(accessType, accessName);

        if (testCase) {
            if (!elementText.equals(actualValue))
                throw new TestCaseFailed("Text Not Matched");
        } else {
            if (elementText.equals(actualValue))
                throw new TestCaseFailed("Text Matched");
        }
    }

    /**
     * method to create txt file in project files
     *
     * @param file : File : file type
     */
    public void createTxtFile(File file) {
        try {
            if (!file.exists()) { // eğer dosya yoksa
                file.createNewFile(); // dosyamızı oluşturur.
                System.out.println(file.getName() + " adlı dosya Oluşturuldu..");
            } else {
                System.out.println("Dosya olduğundan oluşturma işlemi yapılmayacaktır. ");
            }
        } catch (IOException e) { // hata yakalama
            // TODO: handle exception
            e.printStackTrace();
        }
    }

    public void writeTxtFile(File file, String currentUrl, String currentTitle, String responseCode) {
        try {
            //     FileOutputStream fos = new FileOutputStream(file);
            FileWriter fw = new FileWriter(file, true);

            fw.write("\r\n");
            fw.write(currentUrl);
            fw.write("   ");
            fw.write(currentTitle);
            fw.write("   ");
            fw.write(responseCode);
            fw.flush();

            fw.close();
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public String restAPI(String currentUrl) {

        int statusCode = 0;

        // String baseURL = "https://www.amazon.com/s?k=apple&i=" + departmentLine + "&ref=nb_sb_noss";
        String baseURL = currentUrl;

        RestAssured.baseURI = baseURL;

        // https://www.amazon.com/s?k=apple&i=arts-crafts-intl-ship&ref=nb_sb_noss
        RequestSpecification httpRequest = RestAssured.given();
        Response response = httpRequest.get();

        statusCode = response.getStatusCode();

        String newStatusCode = Integer.toString(statusCode);
        System.out.println(newStatusCode);

        return newStatusCode;
        //  Assert.assertEquals(statusCode /*actual value*/, 200 /*expected value*/, "Correct status code returned");

        //   writeTxtFile(file, newStatusCode);
    }

    public void restAPITest(int statusCode, String url) {

        RestAssured.baseURI = url;

        RequestSpecification httpRequest = RestAssured.given();
        Response response = httpRequest.get();

        int urlStatusCode = response.getStatusCode();
        System.out.println(urlStatusCode);

        Assert.assertEquals(statusCode, urlStatusCode);

    }


    public int restAPITestUser(int userId, int numposts) {

        String URL = "https://jsonplaceholder.typicode.com/posts?userId=" + userId;
        String baseURL = URL;

        RestAssured.baseURI = baseURL;

        RequestSpecification httpRequest = RestAssured.given();
        Response response = httpRequest.get();

        httpRequest.header("Content-Type", "application/json");

        Assert.assertEquals(response.getStatusCode(), 200);

        String jsonString = response.asString();
        Assert.assertTrue(jsonString.contains("userId"));

        //This token will be used in later requests
        String URLuserId = JsonPath.from(jsonString).get("userId").toString();
        int UrlUserPosts = Integer.parseInt(URLuserId);
        System.out.println(URLuserId);

        if (numposts == UrlUserPosts) {
            return 1;
        } else {
            return 0;
        }
    }

    public int numPostsAPI() {


        // String baseURL = "https://www.amazon.com/s?k=apple&i=" + departmentLine + "&ref=nb_sb_noss";
        String URL = "https://jsonplaceholder.typicode.com/posts";
        String baseURL = URL;

        RestAssured.baseURI = baseURL;

        RequestSpecification httpRequest = RestAssured.given();
        Response response = httpRequest.get();

        httpRequest.header("Content-Type", "application/json");

        Assert.assertEquals(response.getStatusCode(), 200);

        String jsonString = response.asString();
        Assert.assertTrue(jsonString.contains("id"));

        //This token will be used in later requests
        String URLuserId = JsonPath.from(jsonString).get("id").toString();

        System.out.println(URLuserId);


        //  int URLuser = Integer.parseInt(URLuserId);

        JsonPath jp = new JsonPath(response.asString());

        ////   int numPostsResponse = Integer.parseInt(jp.get($['store']['book'][0]['title']).toString());

        int numPostsResponse = Integer.parseInt(jp.get("userId.size()").toString());

        if (numPostsResponse == URLuserId.length()) {
            return 1;
        } else {
            return 0;
        }
    }

    /** method to assert radio button selected/unselected
     @param accessType : String : Locator type (id, name, class, xpath, css)
     @param accessName : String : Locator value
     @param shouldBeSelected : Boolean : test case [true or false]
     */
    public void isRadioButtonSelected(String accessType,String accessName,boolean shouldBeSelected) throws TestCaseFailed, IOException {
        WebElement radioButton = wait.until(ExpectedConditions.presenceOfElementLocated(getElementByType(accessType, accessName)));
        if((!radioButton.isSelected()) && shouldBeSelected)
            throw new TestCaseFailed("Radio Button not selected");
        else if(radioButton.isSelected() && !shouldBeSelected)
            throw new TestCaseFailed("Radio Button is selected");
    }

    /**
     * method to get element status - displayed?
     *
     * @param accessType : String : Locator type (id, name, class, xpath, css)
     * @param accessName : String : Locator value
     * @return Boolean
     */
    public boolean isElementDisplayed(String accessType, String accessName) {
        element = wait.until(ExpectedConditions.presenceOfElementLocated(getElementByType(accessType, accessName)));
        return element.isDisplayed();
    }

    /**
     * method to get attribute value
     *
     * @param accessType    : String : Locator type (id, name, class, xpath, css)
     * @param accessName    : String : Locator value
     * @param attributeName : String : attribute name
     * @return String
     */
    public String getElementAttribute(String accessType, String accessName, String attributeName) {
        element = wait.until(ExpectedConditions.presenceOfElementLocated(getElementByType(accessType, accessName)));
        return element.getAttribute(attributeName);
    }

    /**
     * method to check attribute value
     *
     * @param accessType     : String : Locator type (id, name, class, xpath, css)
     * @param attributeName  : String : attribute name
     * @param attributeValue : String : attribute value
     * @param accessName     : String : Locator value
     * @param testCase       : Boolean : test case [true or false]
     */
    public void checkElementAttribute(String accessType, String attributeName, String attributeValue, String accessName, boolean testCase) throws TestCaseFailed, IOException {
        String attrVal = getElementAttribute(accessType, accessName, attributeName);
        boolean ss = accessName.contains(attributeValue);
        System.out.println(ss);
        int aa = accessName.length();
        System.out.println(aa);

        if (testCase) {
            if (!attrVal.equals(attributeValue))
                throw new TestCaseFailed("Attribute Value Not Matched");
        } else {
            if (attrVal.equals(attributeValue))
                throw new TestCaseFailed("Attribute Value Matched");
        }
    }

    public void pressEnter(String accessType, String accessName){
        element = wait.until(ExpectedConditions.presenceOfElementLocated(getElementByType(accessType, accessName)));
        element.sendKeys(Keys.ENTER);
    }

}
