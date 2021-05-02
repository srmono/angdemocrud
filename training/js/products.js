var topOffers = [
	{
		image: "prod1.jpeg",
		title: "chairs Deals on (32inch) tv",
		price: "999",
		
		cat: "Electronics"
	},
	{
		image: "prod2.jpeg",
		title: "Electronics Deals on (32inch) tv",
		price: "89999",
		cat: "Electronics"
	},
	{
		image: "prod1.jpeg",
		title: "Cameras Deals on (32inch) tv",
		price: "1999",
		cat: "Electronics"
	},
	{
		image: "prod2.jpeg",
		title: "Laptop Deals on (32inch) tv",
		price: "2999",
		cat: "Electronics"
	},
	{
		image: "prod1.jpeg",
		title: "Office",
		price: "8999",
		cat: "Electronics"
	}
]; 
var topFashion = [
	{
		image: "prod1.jpeg",
		title: "chairs Deals on (32inch) tv",
		price: "999",
		cat: "Electronics"
	},
	{
		image: "prod2.jpeg",
		title: "Electronics Deals on (32inch) tv",
		price: "89999",
		cat: "Electronics"
	},
	{
		image: "prod1.jpeg",
		title: "Cameras Deals on (32inch) tv",
		price: "1999",
		cat: "Electronics"
	},
	{
		image: "prod2.jpeg",
		title: "Laptop Deals on (32inch) tv",
		price: "2999",
		cat: "Electronics"
	},
	{
		image: "prod1.jpeg",
		title: "Office",
		price: "8999",
		cat: "Electronics"
	}
]; 

// var output = "";

// for(topOffer of topOffers){
// 	output += "<div class='prod'>"+
// 					"<img src='"+topOffer["image"]+"'>"+
// 					"<div class='title'>"+topOffer["title"]+"</div>"+
// 					"<div class='text'>"+topOffer["cat"]+"</div>"+
// 					"<div class='text'>"+topOffer["price"]+"</div>"+
// 				"</div>";
// }

// //console.log(output)

// var el = document.getElementById("products");
// el.innerHTML = output;


// Reusable Function
function displayProducts(data, elName, title){
	var output = "<h1>"+title+"</h1>";

	for(product of data){
		output += "<div class='prod'>"+
						"<img src='"+product["image"]+"'>"+
						"<div class='title'>"+product["title"]+"</div>"+
						"<div class='text'>"+product["cat"]+"</div>"+
						"<div class='text'>"+product["price"]+"</div>"+
					"</div>";
	}

	output += "<div class='clear'></div>"
	var el = document.getElementById(elName);
	el.innerHTML = output;
}

displayProducts(topOffers, "topoffers", "Top Offers");
displayProducts(topFashion, "topfashion", "Top Fashion Deals");

