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
  "name": "user enters valid employee id",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddEmpQualificationSteps.user_enters_valid_employee_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmpQualificationSteps.user_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on emplyee informaion",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmpQualificationSteps.user_click_on_emplyee_informaion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on emloyee qualification then add license button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddEmpQualificationSteps.user_click_on_emloyee_qualification_then_add_license_button()"
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
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "As an admin I should be able to add employee qualifications by specifying");
formatter.after({
  "status": "passed"
});
});