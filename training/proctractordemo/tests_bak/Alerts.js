const { browser, element } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe("Date Picker Demo", function(){

    it("Handling Date Picker", function(){
        browser.driver.get("http://demo.automationtesting.in/Alerts.html"); 

        browser.manage().window().maximize();
        
        browser.sleep(2000);

        element(by.linkText("Alert with OK & Cancel")).click();
        element(by.buttonText("click the button to display a confirm box")).click();
        browser.sleep(5000);

        browser.switchTo().alert().accept(); // it will click on ok button
        browser.sleep(3000);

        element(by.buttonText("click the button to display a confirm box")).click();
        browser.sleep(3000);

        browser.switchTo().alert().dismiss();

        browser.sleep(3000);

        element(by.buttonText("click the button to display a confirm box")).click();

        browser.switchTo().alert().getText().then((text) => {
            console.log("Alert Text is: " + text)
        })

        browser.sleep(3000);
    })
})