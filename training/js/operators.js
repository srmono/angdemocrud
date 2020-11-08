// Arthiemtic Operators 
var a = 10;
var b = 20;
var c = "10";
// console.log("a+b: ", a + b);
// console.log("a-b: ", a - b);
// console.log("a*b: ", a * b);
// console.log("a/b: ", a / b);
// console.log("a%b: ", a % b);
// // console.log("a++: ", a++);
// // console.log("++a: ", ++a);
// // console.log("a--: ", a--);
// // console.log("--a: ", --a);
// console.log("a ** b: ", a ** b);

//comparision operators 
// console.log("a == b: ", a == b);
// console.log("a != b: ", a != b);
// console.log("a < b: ", a < b);
// console.log("a > b: ", a > b);
// console.log("a <= b: ", a <= b);
// console.log("a >= b: ", a >= b);
// console.log("a == c: ", a == c);
// console.log("a === c: ", a === c);


//Assignment Operators
//var name = "venkat";
//
var account = 100000;
// //account = account + 10000;
// account += 10000;
// account 
// console.log("account += 10000", account += 10000);
// console.log("account -= 10000", account -= 10000);
// console.log("account *= 10000", account *= 10000);
// console.log("account /= 10000", account /= 10000);
// console.log("account %= 10000", account %= 10000);

// 10% on min purchase 5000
// if(condition){
// 	//statements
// }
var orderTotal = 4500;
if(orderTotal >= 5000){
	console.log("You are eligible for 10% discount");
} else if(orderTotal >= 2500 || orderTotal < 5000 ){
	console.log("You are eligible for 5% discount");
} else{
	console.log("Minimum 5000 order is required to get discount");
}

//Ternary operator "?"

//var result = condition ? value1 : value2;
var age = 18;

//var accessAllowed = ( age > 18 ) ? "allow" : "don't allow"
var accessAllowed = ( age > 18 ) ? "allow" : 
	( age < 21  ) ? "Try later when you are 21" : "sorry you are not allowed"

console.log(accessAllowed)



// Nullish coalescing operator "??"

//var user = "venkat";
var user1 = null;
var user2 = null;
var user;
console.log(user1 ?? user2 ?? user ?? "Anonymous");

























