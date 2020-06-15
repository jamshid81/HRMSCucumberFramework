#Author: ahmad.j.Salih@gmail.com
Feature: Add Employee Qualification steps

  @test
  Scenario: As an admin I should be able to add employee qualifications by specifying
    Given user is logged in with valid Admin credintials
    And user navigate to employee list page
    When user enters valid employee id "730462"
    And user click on searchButton then click on emplyeeInfo then click on qualification
    And user click on add license button
    Then user select employee license Type and modifies license details
      | License Type      | License Number | Issued Date | Expiry Date |
      | AWS Certification | C234232212     | 2019-Jan-03 | 2024-Dec-29 |
    And user see employee license informaion is displayed
