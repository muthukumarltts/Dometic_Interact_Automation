package com.dometic.L2.stepdefinition;

import com.aventstack.extentreports.GherkinKeyword;
import com.dometic.L2.qa.Pages.Constant_power;
import com.dometic.L2.qa.util.Baseclass;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.testng.Assert;

public class Power extends Baseclass {
    public static String text;
    @Then("I verify Power-progressIndicator in Power")
    public void iVerifyPowerProgressIndicatorInPower() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Power-progressIndicator in Power");
        text = driver.findElementByAccessibilityId(Constant_power.L2Powerpagepower_percentage_access_id).getText();
    }

    @Then("I Validated Power-progressIndicator Percentage is displayed in Landing screen")
    public void iValidatedPowerProgressIndicatorPercentageIsDisplayedInLandingScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Validated Power-progressIndicator Percentage is displayed in Landing screen");
        System.out.println(text);
        String powerMainContent = driver.findElement(By.xpath(Constant_power.L2_power_percentage_xpath)).getText();
        if(text.contains(powerMainContent)){
            System.out.println("Text comparison is Successful");
        }
    }

    @Then("I Verify Start button in power main screen")
    public void iVerifyStartButtonInPowerMainScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify Start button in power main screen");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_power.L2Powerpagepower_start_button_access_id));
    }

    @Then("I Verify Stop button in power main screen")
    public void iVerifyStopButtonInPowerMainScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify Stop button in power main screen");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_power.L2Powerpagepower_stop_button_access_id));
    }

}
