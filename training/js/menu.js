var nav = ["home","about","service","faq","contact"];

var output = "<ul>";
//loop
for(navEl of nav){
	//console.log(navEl);
	output += "<li><a href='"+navEl+".html'>"+ navEl +"</a></li>";
}
output += "</ul>";

var el = document.getElementById("menu");
el.innerHTML = output;
//console.log(output);?

