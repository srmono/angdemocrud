const { fstat } = require("fs");
const { browser, element } = require("protractor");
const fs = require('fs');
const { Buffer } = require("buffer");

describe("Element Screenshot Demo", function(){

    it("How to take element screenshot in Protractor", function(){
        browser.driver.get("http://demo.automationtesting.in/Register.html");

        browser.sleep(5000);

        var logo = element(by.id('imagetrgt'));

        logo.takeScreenshot().then(function(element){
            var stream = fs.createWriteStream('./pages/element.png');
            stream.write(new Buffer(element, 'base64'));
            stream.end();
        });

        browser.sleep(5000);
    })
});