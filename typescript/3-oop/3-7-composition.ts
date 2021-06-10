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

        public constructor(coffeeBeans: number, private milk: MilkFronther, private sugar: SugarProvider) {
            this.coffeeBeans = coffeeBeans;
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }

    }

    interface MilkFronther {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    class CheapMilkSteamer implements MilkFronther {
        private steamMilk(): void {
            console.log('Steaming some milk... 🥛');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup, hasMilk: true
            }
        };
    }

    class FancyMilkSteamer implements MilkFronther {
        private steamMilk(): void {
            console.log('Fancy Steaming some milk... 🥛');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup, hasMilk: true
            }
        };
    }

    class ColdMilkSteamer implements MilkFronther {
        private steamMilk(): void {
            console.log('Cold Steaming some milk... 🥛');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup, hasMilk: true
            }
        };
    }

    class NoMilk implements MilkFronther {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    class AutomaticSugarMixer implements SugarProvider {
        private getSugar(): boolean {
            console.log(`Getting some sugar from jar 🍭`);
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup, hasSugar: sugar
            }
        }
    }

    class SugarMixer implements SugarProvider {
        private getSugar(): boolean {
            console.log(`Getting some sugar from jar 🍭`);
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup, hasSugar: sugar
            }
        }
    }

    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    const candySugar = new AutomaticSugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    const sweetCandyMachine = new CoffeeMakerImpl(12, noMilk, candySugar);
    const sweetMachine = new CoffeeMakerImpl(12, noMilk, sugar);

    const cheapLatteMachine = new CoffeeMakerImpl(12, fancyMilkMaker, noSugar);
    const fancyLatteMachine = new CoffeeMakerImpl(12, fancyMilkMaker, noSugar);
    const coldLatteMachine = new CoffeeMakerImpl(12, coldMilkMaker, noSugar);
    const sweetLatteMachine = new CoffeeMakerImpl(12, cheapMilkMaker, candySugar);

}