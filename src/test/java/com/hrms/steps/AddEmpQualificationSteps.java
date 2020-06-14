package com.hrms.steps;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebElement;

import com.hrms.utiles.CommonMethods;
import com.hrms.utiles.ConfigsReader;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddEmpQualificationSteps extends CommonMethods {

	@Given("user is logged in with valid Admin credintials")
	public void user_is_logged_in_with_valid_Admin_credintials() {
		sendText(login.username, ConfigsReader.getProperty("username"));
		sendText(login.password, ConfigsReader.getProperty("password"));
		click(login.loginBtn);
	}

	@Given("user navigate to employee list page")
	public void user_navigate_to_employee_list_page() {
		click(addEmpQ.PIM);
		click(addEmpQ.empList);
		
	}

	@When("user enters valid employee id")
	public void user_enters_valid_employee_id() {
		sendText(addEmpQ.searchById, "730462");
		
	}

	@When("user click on search button")
	public void user_click_on_search_button() {
		click(addEmpQ.search);
	}

	@When("user click on emplyee informaion")
	public void user_click_on_emplyee_informaion() {
		jsClick(addEmpQ.PersonalInfo);
		wait(3);
	}

	@When("user click on emloyee qualification then add license button")
	public void user_click_on_emloyee_qualification_then_add_license_button() {
	
		for (WebElement element: addEmpQ.QualificationBtn) {
			
			String elementText=element.getText();
			if (elementText.equals("Qualifications")) {
			element.click();
			break;
				
			}
		}
//		addEmpQ.Qualification.click();
		
		jsClick(addEmpQ.addLicenseBtn);
	}

	@Then("user select employee license Type and modifies license details")
	public void user_select_employee_license_Type_and_modifies_license_details(
			DataTable licenseData) {
		List<Map<String,String>> emElementMapList=licenseData.asMaps();
		
		for (Map<String, String> map:emElementMapList) {
			
			selectDdValue(addEmpQ.selectLicenseBtn,map.get("License Type"));
			
			sendText(addEmpQ.LicenseNumber,map.get("License Number"));
			sendText(addEmpQ.LicenseIssueDate, map.get("Issued Date"));
			sendText(addEmpQ.LicenseExpiryDate, map.get("Expiry Date"));
			click(addEmpQ.saveBtn);
		}
		wait(2);
		
		
	}

	@Then("user see employee license informaion is displayed")
	public void user_see_employee_license_informaion_is_displayed() {
		
		for(WebElement vLicense: addEmpQ.licenseVerification){
			String actualText=vLicense.getText();
			if (actualText.equals("AWS Certification")){
				vLicense.click();
				System.out.println("License added successfully");
			}else {
				System.out.println("Failed to verify, Liscense was not added");
				break;
			}
		}
	}

}