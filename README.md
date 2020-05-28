# Veeva Systems Exercise

#### Created By Maksym Kryklyvets.
### Yahoo login feature automation.
I created simple framework for UI automation with **Maven**, that uses Java, Selenium, Cucumber.
I followed POM, so I have a YahooLoginPage where I stored all locators, that was used during Automation.
Here you can also find **configuration.properties** file, where i stored most essential data that was used, and inside of utilities package you can find Config class, which reads the data from properties file, and based on that will setup WebDriver or environment.I used Singleton design pattern for WebDriver, so we can run our tests with ChromeDriver or Firefox. and also in Utilities I created reusable method for Expicit wait.
For reporting I'm using HTML report which is stored inside **target/cucumber-rports**, which will attach a screenshot anytime when test are failed. Screenshot is SetUp inside Hooks class in step_defs package .


***Thank you for your time.***
   
