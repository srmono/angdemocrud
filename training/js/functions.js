// function functioname(argument/params){
// 	function body	
// }
var a = 10;
var b = 20;
function fn(){
	console.log(a + b);
}

//fn();

var x = fn; 

function sum(v1,v2){
	return v1 + v2;
}

// sum(25,36)
// 61
// sum(10,20)
// 30
// sum(50,25,90,56)
// 75
// sum(50)
// NaN : Not a Number?
//console.log(sum(20,69))

// order total

function orderTotal(){
	//console.log(arguments)
	var total = 0; 
	for(arg of arguments){
		total += arg;
	}
	return total; 
}

// function hoisting
checkOne();
function checkOne(){
	return "something"; 
	console.log("this is a check One function"); // once function returns next lines will not execute
}

// check();/ Uncaught TypeError: check is not a function
var check = function(){
	console.log("this is a check function");
}
check();

// Self Invoking function
(function(name){
	console.log("Hey "+ name +" This is self Invoking function")
})("User"); 






