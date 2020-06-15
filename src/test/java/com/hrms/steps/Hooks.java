package com.hrms.steps;

import com.hrms.testbase.BaseClass;
import com.hrms.utiles.CommonMethods;

import io.cucumber.java.*;

public class Hooks {

	@Before
	public void Start() {
		BaseClass.setup();
	}

	@After
	public void End(Scenario scenario) {

		byte[] screenshot;
		if (scenario.isFailed()) {
			screenshot = CommonMethods.takeScreenshot("faildTest/" + scenario.getName());
		} else {
			screenshot = CommonMethods.takeScreenshot("passedTest/" + scenario.getName());
		}
		scenario.attach(screenshot, "image/png", scenario.getName());
		BaseClass.tearDown();
	}

}
