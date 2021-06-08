{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // public
    // private
    // protected
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class Level

        private coffeeBeans: number = 0; // instance (object) Level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans <= 0)
                throw new Error(`value for beans should be greater than 0`);
            this.coffeeBeans += beans;
        }


        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT
            )
                throw new Error(`Not enough coffee beans!`);

            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT
            ;

            return {
                hasMilk: false, shots
            }
        };

    }

    const maker = CoffeeMaker.makeMachine(32);

    class User {

        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }

        private internalAge = 4;

        get age(): number {
            return this.internalAge;
        }

        set age(num: number) {
            if (num > 0)
                this.internalAge = num;
        }

        constructor(private firstName: string, private lastName: string) {
        }
    }

    const user = new User('Steve', 'Jobs');
    user.age = 6;
    console.log(user.fullName);

}