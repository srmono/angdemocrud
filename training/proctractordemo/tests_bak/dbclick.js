const { browser, element } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe("Date Picker Demo", function(){

    it("Handling Date Picker", function(){
        browser.driver.get("http://demo.automationtesting.in/WebTable.html"); 

        browser.manage().window().maximize();
        
        browser.sleep(3000);

        var edButton = element(by.css("div[class='ui-grid-canvas'] > div:nth-child(3) >  div > div:nth-child(6) i[class*='pencil']"));

        // Mehtod 1
        //browser.actions().doubleClick(edButton).perform();

        // Mehtod 2
        browser.actions().mouseMove(edButton).doubleClick().perform();

        browser.sleep(10000);

    })
})