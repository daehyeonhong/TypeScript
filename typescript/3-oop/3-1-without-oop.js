{
    var BEANS_GRAMM_PER_SHOT_1 = 7;
    var coffeeBeans_1 = 0;
    function makeCoffee(shots) {
        var shotPerGram = shots * BEANS_GRAMM_PER_SHOT_1;
        if (coffeeBeans_1 < shotPerGram)
            throw new Error("Not enough coffee beans!");
        coffeeBeans_1 -= shotPerGram;
        return {
            hasMilk: false, shots: shots
        };
    }
    ;
    coffeeBeans_1 += 3 * BEANS_GRAMM_PER_SHOT_1;
    var coffee = makeCoffee(2);
    console.log(coffee);
}
