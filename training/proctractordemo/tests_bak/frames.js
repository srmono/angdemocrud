const { browser, element } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe("Date Picker Demo", function(){

    it("Handling Date Picker", function(){
        browser.driver.get("http://demo.automationtesting.in/Frames.html"); 

        browser.manage().window().maximize();
        
        browser.sleep(2000);

        browser.switchTo().frame(0);

        element(by.xpath("//input[1]")).sendKeys("protractor")
        browser.sleep(3000);
    });

}); 