// Map()
// set(key, value) // set the values
// get(key)
// has(key)
// delete(key)
// clear() 
// size() 

let myMap =  new Map();

myMap.set("one", "Person One")
myMap.set("two", "Person Two");
myMap.set("three", "Person Three")

// console.log(myMap.size)
// console.log(myMap.get("two")); 
// console.log(myMap.has("three")); 
// console.log(myMap.delete("two")); 
// console.log(myMap.get("two"));
// console.log(myMap.size)
// console.log(myMap.clear()) 
// console.log(myMap.size)

let shop = new Map([
    ["fruits", "bulk"],
    ["pulses", "min"],
    ["dal", "bulk"]
])
//console.log(shop);

// shop.values();
// shop.keys();
// for(let item of shop){
//     console.log(item)
// }


// Set()
// add();
// delete();
// has();

let employees = new Set();

let emp1 = { name: "venkat"};
let emp2 = { name: "anil"};
let emp3 = { name: "vijay"};


employees.add(emp1);
employees.add(emp2);
employees.add(emp3);
employees.add(emp1);
employees.add(emp3);

console.log("Number of Epmployee: ", employees.size)

for (let emp of employees){
    console.log(emp)
}


let fruits = new Set(["Apple", "Mango", "Banana"])





