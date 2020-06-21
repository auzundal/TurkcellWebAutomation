$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/MyStoreAutomation.feature");
formatter.feature({
  "name": "My Store Test Automation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ayhan2"
    }
  ]
});
formatter.scenario({
  "name": "My Store Test Automation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ayhan2"
    }
  ]
});
formatter.step({
  "name": "I go to main page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.iGoToMainPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title as \"My Store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.check_title(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element having class \"header_user_info\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see page title as \"Login - My Store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.check_title(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll to element having id \"SubmitCreate\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.scroll_to_element(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element having id \"email_create\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"hepsibuwrcada@gmail.com\" into input field having id \"email_create\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.enter_text(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on element having id \"SubmitCreate\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll to element having id \"customer_firstname\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.scroll_to_element(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.id: customer_firstname (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat TestAutomation.methods.NavigateMethods.scrollToElement(NavigateMethods.java:131)\r\n\tat TestAutomation.stepDefinitions.PredefinedStepDefinitions.scroll_to_element(PredefinedStepDefinitions.java:170)\r\n\tat ✽.I scroll to element having id \"customer_firstname\"(classpath:features/MyStoreAutomation.feature:16)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: #customer_firstname\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027AYHANU7\u0027, ip: \u0027192.168.10.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\ayhan\\AppData\\Local\\Temp\\rust_mozprofilet01oTp, rotatable\u003dfalse, moz:geckodriverVersion\u003d0.26.0, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d77.0.1, moz:shutdownTimeout\u003d60000, platformVersion\u003d10.0, moz:processID\u003d21900, browserName\u003dfirefox, javascriptEnabled\u003dtrue, moz:buildID\u003d20200602222727, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: bcea0c02-019a-4198-88b4-e9074e62dd44\n*** Element info: {Using\u003did, value\u003dcustomer_firstname}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor9.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:457)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:182)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:179)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat TestAutomation.methods.NavigateMethods.scrollToElement(NavigateMethods.java:131)\r\n\tat TestAutomation.stepDefinitions.PredefinedStepDefinitions.scroll_to_element(PredefinedStepDefinitions.java:170)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I see id \"customer_firstname\" element",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.iSeeCheckElement(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"TestFirstNamee\" into input field having id \"customer_firstname\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.enter_text(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"TestUsernamee\" into input field having id \"customer_lastname\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.enter_text(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"123456\" into input field having id \"passwd\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.enter_text(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 2 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"Ayhan\" into input field having id \"firstname\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.enter_text(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 2 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"Uzundal\" into input field having id \"lastname\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.enter_text(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"HepsiBurada TrumpTower\" into input field having id \"address1\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.enter_text(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"Istanbul\" into input field having id \"city\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.enter_text(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select 2 option by index from dropdown having id \"id_state\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.select_option_from_dropdown_by_index(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"14555\" into input field having id \"postcode\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.enter_text(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"5395555555\" into input field having id \"phone_mobile\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.enter_text(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having id \"submitAccount\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see page title as \"My account - My Store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.check_title(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having xpath \"/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[2]/a\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 2 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having xpath \"/html/body/div/div[2]/div/div[3]/div[1]/div[1]/div/ul/li[3]\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having xpath \"/html/body/div/div[2]/div/div[3]/div[2]/ul/li[1]\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see page title as \"Printed Summer Dress - My Store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.check_title(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 2 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to element having id \"add_to_cart\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.scroll_to_element(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having id \"add_to_cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 2 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having xpath \"//*[@class\u003d\u0027icon-chevron-left left\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to element having id \"search_query_top\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.scroll_to_element(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter \"Summer\" into input field having id \"search_query_top\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.enter_text(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having xpath \"//*[@name\u003d\u0027submit_search\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I scroll to element having xpath \"/html/body/div/div[2]/div/div[3]/div[2]/ul/li[1]/div\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.scroll_to_element(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having xpath \"/html/body/div/div[2]/div/div[3]/div[2]/ul/li[1]/div\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see page title as \"Printed Summer Dress - My Store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.check_title(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having id \"add_to_cart\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 2 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having class \"cross\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 2 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having xpath \"//*[@class\u003d\u0027shopping_cart\u0027]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having xpath \"//*[@class\u003d\u0027button btn btn-default standard-checkout button-medium\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having xpath \"//*[@class\u003d\u0027button btn btn-default button-medium\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having id \"cgv\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having xpath \"//*[@class\u003d\u0027button btn btn-default standard-checkout button-medium\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having class \"bankwire\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having xpath \"//*[@class\u003d\u0027button btn btn-default button-medium\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see xpath \"//*[@class\u003d\u0027button-exclusive btn btn-default\u0027]\" element",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.iSeeCheckElement(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having class \"account\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on element having xpath \"//*[@title\u003d\u0027Orders\u0027]\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.click(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.wait(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAutomation.stepDefinitions.PredefinedStepDefinitions.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});