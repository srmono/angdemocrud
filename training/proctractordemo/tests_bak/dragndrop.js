const { browser, element } = require("protractor");

describe("Drag and Dro Suit", function(){

    it("drag and drop test",function(){
        
        browser.get("https://codef0rmer.github.io/angular-dragdrop/#!/");

        browser.manage().window().maximize();

        let source_el = element(by.model("list1"));
        let target_el = element(by.model("list2"));

        browser.actions().dragAndDrop(source_el, target_el).perform();

        browser.sleep(10000);

    });

});