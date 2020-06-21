package Runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/cucumberHtmlReport"},
        features = "classpath:features",
        glue = {"TestAutomation/stepDefinitions"},
        //You can select features;
        // 1) ayhan1
        // 2) ayhan2
        tags = "@ayhan2",
        strict = true,
        monochrome = true,
        snippets = CucumberOptions.SnippetType.CAMELCASE
)
class TestRunner {
}
