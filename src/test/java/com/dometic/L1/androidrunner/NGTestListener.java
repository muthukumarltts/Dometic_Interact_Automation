package com.dometic.L1.androidrunner;

import com.aventstack.extentreports.Status;
import com.dometic.L1.qa.util.ExtentReportUtil;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

import static com.dometic.L1.qa.util.Baseclass.extentTest;

public class NGTestListener implements ITestListener {
    ExtentReportUtil extentReportUtil = new ExtentReportUtil();
    @Override
    public void onTestStart(ITestResult iTestResult) {

    }

    @Override
    public void onTestSuccess(ITestResult iTestResult) {

    }

    @Override
    public void onTestFailure(ITestResult iTestResult) {
        System.out.println("On Test Failure");
        extentTest.log(Status.FAIL,iTestResult.getThrowable());

        try {
            extentReportUtil.ExtentReportScreenshot();
        }
        catch (Throwable throwable) {

            throwable.printStackTrace();
        }

    }

    @Override
    public void onTestSkipped(ITestResult iTestResult) {

    }

    @Override
    public void onTestFailedButWithinSuccessPercentage(ITestResult iTestResult) {

    }

    @Override
    public void onStart(ITestContext iTestContext) {
        extentReportUtil.ExtentReport();

    }

    @Override
    public void onFinish(ITestContext iTestContext) {
        extentReportUtil.FlushReport();
    }
}
