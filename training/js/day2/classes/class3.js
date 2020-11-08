class Products{
    constructor(brand, price){
        this.brand = brand,
        this.price = price
    }
    getDetails(){
        return `${this.brand} has price of ${this.price}`
    }
}

class Electronics extends Products{
    constructor(brand,price,ram){
        super(brand,price); // Products
        this.ram = ram;
    }
    // constructor(...args,ram){
    //     super(...args); // Products
    //     this.ram = ram;
    // }
    getDetails(){
        super.getDetails(); // call from parent 
        return `it has ${this.ram}`
    }
}

let mobile = new Electronics("lenovo",50000,"16gb");

console.log(mobile.getDetails())