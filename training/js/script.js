//alert("I Love JavaScript");

//Data Types?
//Primptive data types
/*
String  "venkat"
Number  49000
BigInt() BigInt(222222222222222222222222222222222222222222222222n)
Boolean true / false 
null 
undefined 
*/

//Complex Data Types
/*
Array()
Object
*/

//variable/identifier 
// NAMING CONVENTIONS
// var NAME ; // case sensitive
// // var 8name; // error
// var price1; 
// var _name_;
// var firstName;
var one, two = 2 , three; 
one = "1";
var name = "venkat";
var price = 590000;
//Do you know Protractor now? bool true / flase
var largeNum = BigInt(222222222222222222222222222222222222222222222222n);
var data = null; 
var profession; 

var students = ["student1","student2","student3",25,["html","css"],null,undefined];


// function fn(){
// 	console.log("test function")
// }

// fn()

var dog = {
	color: "brown",// String,num,array,obj,null,undefined,function
	age: 6,
	activites: ["runs","plays"],
	address: {
		city: "hyd",
		area: "ameerpet",
		getAddress: function(){
			console.log("here is address");
		}
	},
	eyes: "dark",
	runs: function(){
		console.log("Dog runs....!")
	}
}

dog.color = "white";
console.log(dog.color);

var product = {
	image: "tv.jpg",
	title: "Best Deals on (32inch) tv",
	price: "8999",
	cat: "Electronics",
	getIfo : function(){
		this.image
	}
}

var topOffers = [
	{
		image: "tv.jpg",
		title: "Best Deals on (32inch) tv",
		price: "8999",
		cat: "Electronics"
	},
	{
		image: "tv.jpg",
		title: "Best Deals on (32inch) tv",
		price: "8999",
		cat: "Electronics"
	},
	{
		image: "tv.jpg",
		title: "Best Deals on (32inch) tv",
		price: "8999",
		cat: "Electronics"
	},
	{
		image: "tv.jpg",
		title: "Best Deals on (32inch) tv",
		price: "8999",
		cat: "Electronics"
	},
	{
		image: "tv.jpg",
		title: "Best Deals on (32inch) tv",
		price: "8999",
		cat: "Electronics"
	}
]































