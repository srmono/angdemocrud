let homepage = require('../pages/homepage');

describe("Calculator Demo", function(){

    it("Addition Test", function(){
        homepage.get("http://juliemr.github.io/protractor-demo/");

        homepage.enterFirstNumber(4);

        homepage.enterSecondNumber(3);

        homepage.clickGo();

        homepage.verifyresult('7');

        browser.sleep(5000);
    });
});
