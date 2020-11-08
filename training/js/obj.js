// Singleton Pattern
var person = { 
	name: "venkat", 
	profession: "Training",
	skill: ["UI","UX", "Cloud"],
	getName: function(){
		return this.name ;
	},
	setName: function(n){
		this.name = n;
	}
}

person.city = "bangalore";
person.getCity = function(){
	return this.city;
}

person.name;
person.profession;
person.getName();
person.setName("Vijay");
person.getName();

var person1 = Object.create(person);

// Constructor Pattern

function Laptop(brand,ram,ssd){
	this.brand = brand;
	this.ram = ram;
	this.ssd = ssd;

	this.getInfo = function(){
		return this.brand +" "+ this.ram +" "+ this.ssd
	}
}

Laptop.prototype.color = "Black";

var laptopOne = new Laptop("Lenovo", "16gb", "1TB");
var laptopTwo = new Laptop("Apple", "8gb", "1TB");
//100 instances
laptopOne.brand;
laptopOne.graphics = "8gb"; 

//var skills = ["html","css"];
//function Array(){.....}
var skills = new Array("html","css");
skills.length; 

























// Prototype Pattern