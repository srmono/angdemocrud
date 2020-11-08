const { browser, element } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe("Multi Frames Test", function(){

    it("navigating frames with in htmlpage", function(){
        browser.waitForAngularEnabled(false);
        browser.driver.get("https://www.selenium.dev/selenium/docs/api/java/"); 
        
        browser.sleep(3000);

        browser.switchTo().frame("packageListFrame"); // First Frame
        element(by.linkText("org.openqa.selenium")).click();
        browser.sleep(3000);
        browser.switchTo().defaultContent();

        //element(locate?).click();

        browser.switchTo().frame("packageFrame"); // Second Frame
        element(by.linkText("WebDriver")).click();
        browser.sleep(3000);
        browser.switchTo().defaultContent();

        browser.switchTo().frame("classFrame"); // Second Frame
        element(by.xpath("//div[@class='topNav']//a[.='Index']")).click();
        browser.sleep(3000);

    })

})