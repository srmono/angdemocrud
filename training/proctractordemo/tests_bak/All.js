const driver = require("protractor");

describe("Calculator Demo", function(){

    function calc(a,b){
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }

    it("Addition Test", function(){
        browser.get("http://juliemr.github.io/protractor-demo/");

        // element(by.model('first')).sendKeys(2);
        // element(by.model('second')).sendKeys(5);
        // element(by.id('gobutton')).click();
        
        // element(by.model('first')).sendKeys(3);
        // element(by.model('second')).sendKeys(5);
        // element(by.id('gobutton')).click();

        // element(by.model('first')).sendKeys(4);
        // element(by.model('second')).sendKeys(5);
        // element(by.id('gobutton')).click();

        calc(10,20);
        calc(40,20);
        calc(50,50);
        calc(10,60);

        // driver.element.all(by.repeater("result in memory")).count().then((n)=>{
        //     console.log(n)
        // })

        // driver.element.all(by.repeater("result in memory")).each(function(item){
        //     item.element(by.css('td:nth-child(3)')).getText().then(function(val){
        //         console.log(val)
        //     })
        // });

        // element(by.repeater("result in memory")).element(by.css(('td:nth-child(3)')) ).getText().then(function(t){
        //      console.log(t)
        // })

        // driver.element.all(by.tagName("option")).count().then((n) =>{
        //     console.log(n)
        // })

        driver.element.all(by.tagName("option")).each((item) =>{
            item.getAttribute("value").then((val) => {
                console.log(val)
            })
        })

        browser.sleep(5000);
    })
});
