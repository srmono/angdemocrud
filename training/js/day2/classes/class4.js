class Animal{
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still`)
    }
}

//let animal = new Animal("My Animal");

class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} hides...!`)
    }

    stop(){
        super.stop(); // call from parent
        this.hide(); // it will hide
    }
}

let rabbit = new Rabbit("Black Rabbit");


