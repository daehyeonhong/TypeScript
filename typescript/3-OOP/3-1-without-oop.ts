{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    const BEANS_GRAMM_PER_SHOT: number = 7;

    let coffeeBeans: number = 0;

    function makeCoffee(shots: number): CoffeeCup {
        const shotPerGram: number = shots * BEANS_GRAMM_PER_SHOT;
        if (coffeeBeans < shotPerGram)
            throw new Error(`Not enough coffee beans!`);

        coffeeBeans -= shotPerGram;

        return {
            hasMilk: false, shots
        }
    };

    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee)
}