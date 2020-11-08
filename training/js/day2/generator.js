function* sum(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 2+3; 
}

let generate = sum();
//console.log(generate.next()); 
for(let val of generate){
    console.log(val)
}
