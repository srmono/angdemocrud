const { browser } = require("protractor")

describe("Get Current URL", function(){
    
    it("Web app testing", function(){
        browser.get("http://juliemr.github.io/protractor-demo/");   4
        
        browser.getCurrentUrl().then(url => {
            console.log("Current Url is : ", url)
        })
    })
})