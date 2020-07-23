package com.hrms.runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(

	features="src/test/resources/features",
	glue="com/hrms/steps",
	dryRun=false,
	monochrome=true,
	strict=false,
	tags="@smoke",
	plugin={
		"pretty",
		"html:target/cucumber-default-reports",
		"json:target/cucumber.json",
		"rerun:target/failed.txt"}
	)
public class SmokeRunner {

}
