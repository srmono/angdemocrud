const driver = require('protractor');

describe("using async & await", () => {
    
    // it("test async", async () => {
    //     browser.get("http://juliemr.github.io/protractor-demo/"); 
    //     console.log(await browser.getTitle())
    // })

    it("test async", () => {
        browser.get("http://juliemr.github.io/protractor-demo/").then(() => {
            browser.getTitle().then( title => {
                console.log(title)
            })
            //console.log(browser.getTitle());
        })
    })
})