const driver = require("protractor");

describe("Calculator Demo", function(){

    it("Addition Test", function(){
        browser.get("http://juliemr.github.io/protractor-demo/");

        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(5);
        element(by.id('gobutton')).click();
        
        element(by.model('first')).sendKeys(3);
        element(by.model('second')).sendKeys(5);
        element(by.id('gobutton')).click();


        //let restult = element(by.className('ng-binding'));
        // element(by.css(('td:nth-child(2)')) ).getText().then(function(t){
        //     console.log(t)
        // })

        element(by.repeater("result in memory")).element(by.css(('td:nth-child(3)')) ).getText().then(function(t){
             console.log(t)
        })

        
        browser.sleep(5000);
    })
});
