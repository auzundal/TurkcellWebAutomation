package Runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(


        plugin = {"pretty", "html:target/cucumberHtmlReport"},
        features = "classpath:features",
        glue = {"TestAutomation/stepDefinitions"},
        tags = "@ayhan1",
        strict = true,
        monochrome = true,
        snippets = CucumberOptions.SnippetType.CAMELCASE
)
class TestRunner {
}
