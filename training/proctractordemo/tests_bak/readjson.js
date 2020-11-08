const data = require('../json/global.json');

describe("Read JSON File", function(){

    it("How to read Json Data", function(){
        console.log(data.url)
        console.log(data.supports.tool)
    });

})