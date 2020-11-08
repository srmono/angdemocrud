describe(" Empolyee login suite", function(){
    
    it("Validate Login and Logout", function(){

        browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');

        //browser.sleep(3000);

        browser.manage().window().maximize();

        expect(browser.getTitle()).toBe("CafeTownsend-AngularJS-Rails");

        element(by.model("user.name")).sendKeys("Luke");

        //browser.sleep(2000);

        element(by.model("user.password")).sendKeys("Skywalker"); 

        //browser.sleep(2000);

        element(by.buttonText('Login')).click();

       // browser.sleep(3000);
        
        var greetmsgel = element(by.id("greetings"));
        expect(greetmsgel.getText()).toBe("Hello Luke"); // validate greeing message

        let logout = element(by.className('main-button')); 
        //verify whether the element present or not
        expect(logout.isPresent()).toBe(true);

        logout.click();

        browser.sleep(3000)
    })
})