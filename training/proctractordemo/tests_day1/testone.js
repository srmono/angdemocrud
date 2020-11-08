describe("My Suite", function(){
    beforeEach(function(){
        console.log("this is before each");
    });
    afterEach(function(){
        console.log("this is after each");
    });
    afterAll(function(){
        console.log("this is After all tests");
    });
    beforeAll(function(){
        console.log("this is Before all tests");
    })
    //my first test case
    it("test one", function(){
        console.log("my first test case");
    });

    it("test two", function(){
        console.log("my second test case");
    });

    it("test three", function(){
        console.log("my Third test case");
    });
})