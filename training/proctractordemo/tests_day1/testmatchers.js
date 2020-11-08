describe("expect demo", function(){
    
    it("expect test", function(){

        //Test 1
        //let x = 100; 
        //expect(x).toBe(100);
        //expect(x).not.toBe(101);

        //Test2 
        //expect(x).toEqual(100); 
        //expect(x).not.toEqual(150); 

        //Text 3
        //let x = [10, 20, 30];
        //expect(x).toBe([10, 20, 30]);
        //expect(x).toEqual([10, 20, 30]);

        // Test 4
        //browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
        //expect(browser.getCurrentUrl()).toBe('http://cafetownsend-angular-rails.herokuapp.com/login');
        //expect(browser.getTitle()).toBe("CafeTownsend-AngularJS-Rails");

        // Test 5
        let arr = [10, 20, 30, 40, 50];
        //expect(arr).toContain(30);
        //expect(arr).not.toContain(30);

        // Test 6
        let tools = ["js", "angular", "protractor"];
        //expect(tools).toContain("angular");

        //Test 7
        let value = 100;
        //expect(value).toBeGreaterThan(50);
        //expect(value).toBeLessThan(200);
       // expect(value).toBeGreaterThan(200);

        //Test 8
        //expect(value).toBeNaN();
        expect(value).not.toBeNaN();

    })
});









