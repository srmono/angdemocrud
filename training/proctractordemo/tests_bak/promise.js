const { browser, element } = require("protractor")

describe("My Suite", function(){
    
    it("Test One", function(){
        browser.get("http://juliemr.github.io/protractor-demo/");

        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(5);
        element(by.id('gobutton')).click(); 

        // browser.sleep(9000);
        // console.log("test outside");
        //  browser.get("http://juliemr.github.io/protractor-demo/").then(function(){
        //     console.log("Test inside One");
        // })
        // console.log("test outside two")
        //tagname[attribute="value"]
        //console.log( element(by.css('h2[class="ng-binding"]')).getText() )

        // element(by.css('h2[class="ng-binding"]')).getText().then(function(text){
        //     console.log("Resolved: ", text)
        // })

        // element(by.className("ng-binding")).getText().then(function(text){
        //     console.log("Resolved: ", text)
        // })

        // element(by.css(".ng-binding")).getText().then(function(text){
        //     console.log("Resolved: ", text)
        // })

        expect(element(by.css(".ng-binding")).getText()).toBe('7');
    })
})