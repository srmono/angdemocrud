describe("My Suite", function(){

    xit("test one", function(){
        console.log("my first test case");
    });

    it("test 2", function(){
        console.log("my 2nd test case");
    });

    xit("test 3", function(){
        console.log("my 3rd test case");
    });

    fit("test 4", function(){
        console.log("my 4th test case");
    });

});

//fdescribe("My Suite2", function(){
xdescribe("My Suite2", function(){
    it("test one in Suite 2", function(){
        console.log("test one in my suite two ");
    });
    
});

xdescribe("My Suite3", function(){

    it("test one in Suite 3", function(){
        console.log("test one in my suite three ");
    });
    
});