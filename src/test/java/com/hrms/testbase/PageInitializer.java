package com.hrms.testbase;

import com.hrms.webelementpages.AddEmpQualificationPage;
import com.hrms.webelementpages.LoginPage;

public class PageInitializer extends BaseClass {

	public static LoginPage login;
	public static AddEmpQualificationPage addEmpQ;
	
	public static void initilize() {
		
		login=new LoginPage(); 
		addEmpQ=new AddEmpQualificationPage();
	}
}
