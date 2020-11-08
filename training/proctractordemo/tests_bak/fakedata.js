const faker = require('faker');

describe("Faker Demo data", function(){

    it("How to generate random massive data using faker", function(){
        console.log(faker.name.firstName());
        console.log(faker.name.lastName());
        console.log(faker.phone.phoneNumber());
        console.log(faker.address.city());
        console.log(faker.internet.email());
    })
});