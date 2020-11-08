//"SWITCH" statement
// A Switch statement can replace multiple if checks
// swith(x){
// 	case 'value1' : // if(x === 'value1')
// 	.....
// 	[break]

// 	case 'value2' : // if(x === 'value2')
// 	.....
// 	[break]

// 	default: ...

// }

var sum = 2 + 4; 

switch(sum){
	case 3: 
		alert("Too Small");
		break;
	case 6:
	case 4: 
		alert("Value is correct");
		break;
	case 5: 
		alert("Too Big");
		break;
	default:
		alert("No value is matched")
}











