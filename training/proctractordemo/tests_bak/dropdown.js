describe("Dropdown Selection", function(){

    function calc(fNum,sNum, c){
        element(by.model('first')).sendKeys(fNum);
        element(by.model('second')).sendKeys(sNum);

        element.all(by.tagName("option")).each((item) =>{
            item.getAttribute("value").then((val) => {
                //console.log(val)
                if(val == c ){
                    item.click()
                }
            })
        });

        element(by.id('gobutton')).click();
    }

    it("Addition Test", function(){
        browser.get("http://juliemr.github.io/protractor-demo/");

        calc(3, 5, "ADDITION");
        calc(3, 5, "DIVISION");
        calc(3, 5, "MODULO");
        calc(3, 5, "MULTIPLICATION");
        calc(3, 5, "SUBTRACTION");

        element.all(by.repeater("result in memory")).each(function(item){
            item.element(by.css('td:nth-child(3)')).getText().then(function(val){
                console.log(val)
            })
        });

    });

})


// ADDITION
// DIVISION
// MODULO
// MULTIPLICATION
// SUBTRACTION