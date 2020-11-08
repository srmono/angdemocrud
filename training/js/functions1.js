//Scope 
// Gloabl Scope
// Private variable Scope
// Life span of Private variable

var a = 10; // global

function fn1(){ 
	//var b = 20; //private ?
	b = 20; // variable without var keyword is global
	console.log(a + b);
}
//fn1();

function fn2(){
	console.log(a);
}

function fn3(){
	console.log(a);
}

//Lexical scope

function parent(){
	var a = 10;

	function child(){
		var b = 40;
		console.log(a + b)
	}
	child();
}

//parent();

//closures

//var counter = 0;

// function increment(){
// 	var counter = 0; //reset 
// 	function plus(){
// 		counter += 1
// 	}
// 	plus();
// 	return counter;
// }
// increment();
// increment();
// console.log(increment());


function increment(){
	var counter = 0;

	return function(){ counter +=1; return counter}
}

var add = increment();

add();
add();
add();
add();
console.log(add());

// call and apply

var person1 = {
	firstName: "venkat",
	lastName: "b"
}

var person2 = {
	firstName: "Anil",
	lastName: "b"
}

function fullName(city, country){
	return this.firstName +"  "+ this.lastName + " , " + city + " , " + country;
}

//fullName.call(person1, "Bangalore", "India");
fullName.apply(person1, ["Bangalore", "India"]);


































































