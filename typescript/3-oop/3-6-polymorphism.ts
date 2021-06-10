{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMakerImpl implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class Level

        private coffeeBeans: number = 0; // instance (object) Level

        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMakerImpl {
            return new CoffeeMakerImpl(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans <= 0)
                throw new Error(`value for beans should be greater than 0`);
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine...🧼');
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMakerImpl.BEANS_GRAM_PER_SHOT)
                throw new Error(`Not enough coffee beans!`);

            this.coffeeBeans -= shots * CoffeeMakerImpl.BEANS_GRAM_PER_SHOT;
        }

        private preHeat(): void {
            console.log('heating up... 🔥');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots... ☕`);
            return {shots, hasMilk: false};
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preHeat();
            return this.extract(shots);
        }

    }

    class CaffeLatteMachine extends CoffeeMakerImpl {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }

        private steamMilk(): void {
            console.log('Steaming some milk... 🥛');
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk()
            return {...coffee, hasMilk: true};
        }
    }

    class SweetCoffeeMaker extends CoffeeMakerImpl {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {...coffee, hasSugar: true};
        }
    }

    const machines = [
        new CoffeeMakerImpl(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CoffeeMakerImpl(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16)
    ];

    machines.forEach(machine => {
        console.log(`--------------------------`);
        machine.makeCoffee(1);
    });

}