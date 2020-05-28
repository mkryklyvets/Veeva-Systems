package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin ="html:target/cucumber-reports",
        features = "src/test/resources/features",
        glue = "step_defs",
        dryRun = false,
        tags = "@login"
)


public class CukesRunner {
}
