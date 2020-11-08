//let & const
//var name = "venkat";
// let course = "js";

// if(true){
//     let course = "react";
//     console.log(course + "inside if block")
// }
// console.log(course)

// const course = 'angular';
// course = "react";

// const skills = ["html", "css", "js"];

// undefined
// skills.push("angular")
// 4
// skills 
// (4) ["html", "css", "js", "angular"]
// skills = {}; 
// VM494:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:8

// OBJECT BEHAVIOUR CHANGES

// var name = "venkat";
// var profession = "Training";

// let person = {
//     name,
//     profession,
//     city: "bangalore",
//     "get Info"(){
//         console.log(this.name)
//     }
// }
// person.name

// ARROW FUNCTION 
let fn = () => "This is a function";
//fn(); 
//let sum = a => a + 10;
//let sum = (a,b) => a + b;

//Default values

function sum(a, b = 10){
    return a+b;
}
console.log(sum(20));

//this scope?

// var btn = document.getElementById("btn");

// function fn(){
//   console.log(this)
// }
// //fn()
// var fn1 = () => {
//   console.log(this)
// }
// //fn1();

// btn.addEventListener('click', fn1);

// Spread and Rest operator
var prices = [20,30,50,56];

function orderTotal(...nums){ // rest operator
    var total = 0;
    console.log(nums)
    for(n of nums){
        total += n
    }

    return total;
}

//orderTotal(prices);

Math.max(...prices); // spread operator

///Destruction 

let skills = ["html", "css", "js"];

// var a = skills[0];
// var b = skills[1];

var [a, ...b] = skills;

//console.log(a);
//console.log(b);

var person = {
    name: "venkat",
    city: "banglore"
}

var { name: fname, city } = person;
console.log("fname: ",fname)
console.log(city)

// Template Literals 

let user = "Guest";

//let welcome = "Welcome " + user;
let welcome = `Welcome ${user} to the right platform`;

console.log(welcome)
11







































































































