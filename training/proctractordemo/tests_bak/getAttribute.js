const { browser, element } = require("protractor")

describe("Get Current URL", function(){
    
    it("Web app testing", function(){
        browser.get("http://juliemr.github.io/protractor-demo/");   
        
        var button = element(by.buttonText("Go!")).getAttribute("id")
        button.then(idValue => {
            console.log("The Attribute Value is : ", idValue);
        })
    })
})