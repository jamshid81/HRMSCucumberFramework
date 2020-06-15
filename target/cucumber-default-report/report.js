$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addEmpQualification.feature");
formatter.feature({
  "name": "Add Employee Qualification steps",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "As an admin I should be able to add employee qualifications by specifying",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged in with valid Admin credintials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddEmpQualificationSteps.user_is_logged_in_with_valid_Admin_credintials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to employee list page",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmpQualificationSteps.user_navigate_to_employee_list_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid employee id \"730462\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddEmpQualificationSteps.user_enters_valid_employee_id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on searchButton then click on emplyeeInfo then click on qualification",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmpQualificationSteps.user_click_on_searchButton_then_click_on_emplyeeInfo_then_click_on_qualification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on add license button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmpQualificationSteps.user_click_on_add_license_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select employee license Type and modifies license details",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddEmpQualificationSteps.user_select_employee_license_Type_and_modifies_license_details(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see employee license informaion is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmpQualificationSteps.user_see_employee_license_informaion_is_displayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"AWS Certification\"}\n  (Session info: chrome\u003d83.0.4103.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-T8R4K7N\u0027, ip: \u0027192.168.1.254\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\jamsh\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63447}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 479a4e70bdc889e28c1aca7abbb6d8a9\n*** Element info: {Using\u003dlink text, value\u003dAWS Certification}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat com.hrms.steps.AddEmpQualificationSteps.user_see_employee_license_informaion_is_displayed(AddEmpQualificationSteps.java:99)\r\n\tat ✽.user see employee license informaion is displayed(file:///C:/Users/jamsh/eclipse-workspace/YT_HRMS_CucumberFramework/src/test/resources/features/addEmpQualification.feature:19)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "As an admin I should be able to add employee qualifications by specifying");
formatter.after({
  "status": "passed"
});
});