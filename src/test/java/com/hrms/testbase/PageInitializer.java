package com.hrms.testbase;

import com.hrms.webelementpages.LoginPage;

public class PageInitializer extends BaseClass {

	public static LoginPage login;
	
	public static void initilize() {
		
		login=new LoginPage(); 
	}
}
