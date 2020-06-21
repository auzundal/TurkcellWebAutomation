package Environment;

import org.openqa.selenium.NoSuchSessionException;
import org.openqa.selenium.SessionNotCreatedException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.util.concurrent.TimeUnit;


public class DriverUtil {
    public static long DEFAULT_WAIT = 10;
    protected static WebDriver driver;

    public static WebDriver getDefaultDriver() {

        if (driver != null) {
            return driver;
        }

        //CHROME   // System.setProperty("webdriver.chrome.driver", "webdrivers\\chromedriver.exe");
        System.setProperty("webdriver.gecko.driver", "webdrivers\\geckodriver.exe");
        DesiredCapabilities capabilities = null;
        //CHROME   //  capabilities = DesiredCapabilities.chrome();
        capabilities = DesiredCapabilities.firefox();
        capabilities.setJavascriptEnabled(true);
        capabilities.setCapability("takesScreenshot", true);
        driver = new FirefoxDriver();
        //CHROME  //driver = new ChromeDriver();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().setScriptTimeout(DEFAULT_WAIT,
                TimeUnit.SECONDS);
        driver.manage().window().maximize();
        return driver;
    }

    public static void closeDriver() {
        if (driver != null) {
            try {
                driver.close();
                driver.quit(); // fails in current geckodriver! TODO: Fixme
            } catch (NoSuchMethodError nsme) { // in case quit fails
            } catch (NoSuchSessionException nsse) { // in case close fails
            } catch (SessionNotCreatedException snce) {
            } // in case close fails
            driver = null;
        }
    }
}
