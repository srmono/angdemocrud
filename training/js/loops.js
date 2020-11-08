//iterators
// while
// while(condition){
// 	do something
// }
//var i = 10; //10
// while(i < 10){
//  	console.log("current value: ", i);
//  	i++;
// }

// do while 
// do{
//  	console.log("current value: ", i);
//  	i++;
// }while(i < 10)

// for 
// for(init; condition; increment){
// 	body
// }

// for(var i = 0; i < 10; i++){
// 	console.log("current value: ", i)
// }

//var skills = ["html","css","js",'angular','node',"protractor","new"];
//skills[0]
//var skillLength = skills.length;
// for(var i = 0; i < skillLength; i++){
// 	console.log(skills[i])
// }

// for (var i = skillLength - 1; i >= 0; i--) {
// 	console.log(skills[i]);
// }

// console.time("check");
// for(var i = 0; i < 10000; i++){
// 	//console.timeLog("check")
// 	//console.log("current value: ", i)
// }
// console.timeEnd("check");


var skills = ["html","css","js",'angular','node',"protractor","new"];
// for of 
// for( s of skills){
// 	console.log(s)
// }

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

// for(to of topOffers){
// 	console.log(to)
// }
// for in 
var product = {
		image: "tv.jpg",
		title: "Best Deals on (32inch) tv",
		price: "8999",
		cat: "Electronics"
	};

for(p in product){
	console.log(p +" : "+product[p])
}
//iterable












