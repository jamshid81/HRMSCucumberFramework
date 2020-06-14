#Author: ahmad.j.Salih@gmail.com
Feature: Add Employee Qualification steps

  #@smoke
  #Scenario: valid admin login
    #When enter valid admin username and password
    #And user click on login button
    #Then admin user is successfully logged in

  @regression
  Scenario: As an admin I should be able to add employee qualifications by specifying
    Given user is logged in with valid Admin credintials
    And user navigate to employee list page
    When user enters valid employee id
    And user click on search button
    And user click on emplyee informaion
    And user click on emloyee qualification then add license button
    Then user select employee license Type and modifies license details
      | License Type      | License Number | Issued Date | Expiry Date |
      | AWS Certification | C234232212     | 2019-Jan-03 | 2024-Dec-29 |
    And user see employee license informaion is displayed
