const { browser, element } = require("protractor")

describe("Mouse Move Suite", function(){

    it("Moving Mouse in Protractor", function(){
        browser.get("https://ng-bootstrap.github.io/#/components/tooltip/examples");

        browser.sleep(2000);
        //tagname[attribute="value"]
        var button = element(by.css("button[ngbtooltip='Tooltip on top']"));
        
        browser.actions().mouseMove(button).perform();
        // browser.sleep(3000)
        // browser.actions().mouseMove(button).mouseMove({x: 150, y: 0}).perform();
        // browser.sleep(3000)
        // browser.actions().mouseMove(button).mouseMove({x: 250, y: 0}).perform();
        // browser.sleep(3000)
        // browser.actions().mouseMove(button).mouseMove({x: 450, y: 0}).perform();

        browser.sleep(7000)
    })
})