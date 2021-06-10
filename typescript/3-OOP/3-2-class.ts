{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        static BEANS_GRAM_PER_SHOT: number = 7; // class Level

        coffeeBeans: number = 0; // instance (object) Level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT
            )
                throw new Error(`Not enough coffee beans!`);

            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT
            ;

            return {
                hasMilk: false, shots
            }
        };

    }

    const maker = new CoffeeMaker(32);

    const maker2 = CoffeeMaker.makeMachine(3);

}