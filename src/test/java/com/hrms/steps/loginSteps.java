package com.hrms.steps;

import org.junit.Assert;

import com.hrms.utiles.CommonMethods;
import com.hrms.utiles.ConfigsReader;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class loginSteps extends CommonMethods {

	@When("enter valid admin username and password")
	public void enter_valid_admin_username_and_password() {
		sendText(login.username, ConfigsReader.getProperty("username"));
		sendText(login.password, ConfigsReader.getProperty("password"));
		
	}
	@And("user click on login button")
	public void user_click_on_login_button() {
		
		click(login.loginBtn);
		
	}
	@Then("admin user is successfully logged in")
	public void admin_user_is_successfully_logged_in() {
		Assert.assertEquals("Admin is not logged in", login.welcomeText.getText(),"Welcome Admin");
	}
}
