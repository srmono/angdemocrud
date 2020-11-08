const { browser, element } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe("Windows Demo", function(){

    it("Windows / child windows Demo", function(){
        browser.driver.get("http://demo.automationtesting.in/Windows.html"); 

        browser.manage().window().maximize();

        var tabbedButton = element(by.xpath("//a[@href='http://www.selenium.dev']/button[@class='btn btn-info']"));

        tabbedButton.click();

        var winHandles =  browser.getAllWindowHandles();

        browser.sleep(3000);

        winHandles.then(function(handles){
            //console.log(handles)
            // var parentWindow = handles[0];
            // var tabbedWindow = handles[1];

            var [parentWindow, tabbedWindow ] = handles;

            browser.waitForAngularEnabled(false);
            browser.switchTo().window(tabbedWindow);

            browser.getTitle().then( title => {
                console.log("Tabbed Window Title is: ", title)
            })

            browser.sleep(5000);
            browser.close(); 
            browser.sleep(2000);

            browser.switchTo().window(parentWindow);
            browser.sleep(2000);
            browser.getTitle().then( title => {
                console.log("Parent Window Title is: ", title)
            })

        })
        
        browser.sleep(5000);
    });

}); 