

const { browser, element } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe("Context Menu", function(){

    it("drag and drop test",function(){
        
        browser.waitForAngularEnabled(false);
        browser.driver.get("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        browser.sleep(3000);

        var button = element(by.className("context-menu-one btn btn-neutral"));

        //Right Click
        browser.actions().click(button, protractor.Button.RIGHT).perform();

        browser.sleep(10000);
    });

    it("drag and drop test two",function(){
        
        browser.waitForAngularEnabled(false);
        browser.driver.get("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        browser.sleep(3000);

        var button = element(by.className("context-menu-one btn btn-neutral"));

        //Right Click
        browser.actions().click(button, protractor.Button.RIGHT).performss();

        browser.sleep(10000);
    });

    it("drag and drop test 3",function(){
        
        browser.waitForAngularEnabled(false);
        browser.driver.get("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //var cookie = document.cookie;

        browser.sleep(3000); 

        var button = element(by.className("context-menu-one btn btn-neutralss"));

        //Right Click
        browser.actions().click(button, protractor.Button.RIGHT).perform();

        browser.sleep(10000);
    });

});