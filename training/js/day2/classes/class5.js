// Private and Protected Properties and methods
class CoffeeMachine{
    _waterAmount = 0; // the amount of the water in inside //protected '_'
    #waterLimit = 200;

    #checkWater(value){
        if (value < 0) throw new Error("negative water");
        if( value > this.#waterLimit) throw new Error("too much water");
    }

    set waterAmount(value){
        if(value < 0) throw new Error("Negative water");
        this._waterAmount = value;
    }

    get waterAmount(){
        return this._waterAmount;
    }
    constructor(power){
        this._power = power;
        console.log(`coffee machine created with power of ${power}`)
    }

    get power(){
        return this._power;
    }
}

let coffeeMachine =  new CoffeeMachine(100);


//coffeeMachine.waterAmount = 100; 



