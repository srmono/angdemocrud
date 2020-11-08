describe("Calculator Demo", function(){

    it("Addition Test", function(){
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(5);
        element(by.id('gobutton')).click();
        //let restult = element(by.cssContainingText('.ng-binding', '7'));
        let restult = element(by.className('ng-binding'));
        //console.log("result: ", restult.getText())
        expect(restult.getText()).toEqual('7');

        //expect(element(by.binding('latest')).getText()).toEqual('7');
        browser.sleep(5000);
    })
});
