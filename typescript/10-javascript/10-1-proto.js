{
    const x = {};
    const y = {};

    console.log(x);
    console.log(y);

    console.log(x.toString());
    console.log(x.__proto___ === y.___proto___);

    const array = [];
    console.log(array);

    function CoffeeMachine(beans) {
        this.beans = beans;
        // Instance member level
        /*
            this.makeCoffee = shots => {
                console.log(`making... ☕`);
            }
        */
    }

    CoffeeMachine.prototype.makeCoffee = (shots) => {
        console.log(`making... ☕`);
    }

    const machine1 = new CoffeeMachine(10);
    const machine2 = new CoffeeMachine(20);
    console.clear();
    console.log(machine1);
    console.log(machine2);

    function LatteMachine(milk) {
        this.milk = new milk;
    }

    LatteMachine.prototype.create(CoffeeMachine.prototype.makeCoffee());

    const latteMachine = new LatteMachine(123);
    console.log(latteMachine);
    latteMachine.makeCoffee();

}