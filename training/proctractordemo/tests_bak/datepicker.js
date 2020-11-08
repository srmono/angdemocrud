const { browser, element } = require("protractor")

describe("Date Picker Demo", function(){

    it("Handling Date Picker", function(){
        browser.driver.get("http://demo.automationtesting.in/Datepicker.html"); 

        browser.sleep(3000);

        element(by.id('datepicker2')).sendKeys('11/23/2020');

        browser.sleep(3000);

        //element("document.getElementById('datepicker1)")

        browser.executeScript("document.getElementById('datepicker1').value='07/07/2020'");

        browser.sleep(3000);
    })
})