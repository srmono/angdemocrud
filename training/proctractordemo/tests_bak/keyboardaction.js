const { browser, element } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe("Date Picker Demo", function(){

    it("Handling Date Picker", function(){
        browser.driver.get("http://demo.automationtesting.in/Register.html"); 

        browser.sleep(3000);

        element(by.model("FirstName")).sendKeys("Venkat");
        browser.sleep(3000);
        element(by.model("FirstName")).sendKeys(protractor.Key.ENTER);
        browser.sleep(5000);
    })
})