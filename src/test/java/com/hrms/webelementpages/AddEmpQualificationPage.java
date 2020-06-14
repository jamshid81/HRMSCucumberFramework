package com.hrms.webelementpages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.utiles.CommonMethods;

public class AddEmpQualificationPage extends CommonMethods {

	@FindBy(xpath = "//a[@id='menu_pim_viewPimModule']")
	public WebElement PIM;

	@FindBy(id = "menu_pim_viewEmployeeList")
	public WebElement empList;

	@FindBy(id = "empsearch_id")
	public WebElement searchById;

	@FindBy(id = "searchBtn")
	public WebElement search;

	//@FindBy(xpath = "//h1[text()='Personal Details']")
	@FindBy(xpath = "//a[text()='730462']")
	public WebElement PersonalInfo;

	@FindBy(xpath = "//td[@class='left']/a")
	public WebElement EmppersonalInfo;

	@FindBy(xpath="//ul[@id='sidenav']/li")
	public List<WebElement> QualificationBtn;
	
	@FindBy(linkText="Qualifications")
	public WebElement Qualification;
	@FindBy(xpath="//tr[@class='odd']/td")
	public List<WebElement> licenseVerification;

	@FindBy(id = "addLicense")
	public WebElement addLicenseBtn;

	@FindBy(id = "license_code")
	public WebElement selectLicenseBtn;

	@FindBy(id = "license_license_no")
	public WebElement LicenseNumber;

	@FindBy(id = "license_date")
	public WebElement LicenseIssueDate;

	@FindBy(id = "license_renewal_date")
	public WebElement LicenseExpiryDate;
	
	@FindBy(id = "btnLicenseSave")
	public WebElement saveBtn;

	public AddEmpQualificationPage() {
		PageFactory.initElements(driver, this);
	}

}
