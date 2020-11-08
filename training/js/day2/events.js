function fn() {
	alert('hi');
}
// var btn = document.getElementById('btn');
// //btn.onclick = fn;
// btn.onclick = function(){
// 	alert('hi')
// } 
// Events?
// Types of Events
// Binding event on Element directly
// Bind event by id ref
// Bind event with addEventListener
// Bubbling phase
// Capturing phase
// Capturing Event object
// target
// currentTarget
// stopPropagation
// stopImmediatePropagation
// preventDefault

function fn1(ev){
	ev.stopPropagation();
	//console.log(ev.target); 
	//console.log(ev.currentTarget); 
	console.log("This is Parent Element")
}
function fn2(ev){
	ev.stopPropagation();
	//console.log(ev.target)
	//console.log(ev.currentTarget);
	console.log("This is Child Element")
}

function fn3(ev){
	if(true){
		ev.stopImmediatePropagation()
	}
	console.log("this is another action")
}

function fn4(ev){
	ev.preventDefault();
	console.log("this is another action 4")
}

var p1 = document.getElementById("parent1");
var p2 = document.getElementById("parent2");

var c1 = document.getElementById("child1");
var c2 = document.getElementById("child2");

var anc = document.getElementById('anc');
anc.addEventListener('click',fn4); 


p1.addEventListener('click', fn1);
p2.addEventListener('click', fn1,true);

c1.addEventListener('click', fn2);
c1.addEventListener('click', fn3);
c1.addEventListener('click', fn4);
c2.addEventListener('click', fn2,true);



