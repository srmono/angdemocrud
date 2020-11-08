var name = "Anil";
var d = document.createElement("div");
document.body.appendChild(d); //whereToAdd.appendChild(whatToAdd);
var t = document.createTextNode('I love java script');

d.appendChild(t);
d.setAttribute('id','container');
//d.remove();

console.log(d.innerHTML);
d.innerHTML = "";
d.innerHTML = "<p> Welcome "+ name + "</p>";