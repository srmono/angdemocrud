const { browser, element } = require("protractor")

describe("Radio Button Suite", function(){

    it("Handling radio button", function(){
        browser.driver.get("http://demo.automationtesting.in/Register.html");

        var radioButton = element(by.className('ng-pristine'));

        radioButton.isSelected().then(radioButton => {
            console.log("Is Radio Button Selected: ", radioButton)
        });

        radioButton.click();

        radioButton.isSelected().then(radioButton => {
            console.log("Is Radio Button Selected: ", radioButton)
        });

        browser.sleep(5000);
    })
})