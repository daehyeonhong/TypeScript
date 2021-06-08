function calculate(command, previousNumber, nextNumber) {
    var result;
    switch (command) {
        case 'add':
            return previousNumber + nextNumber;
        case 'substract':
            return previousNumber - nextNumber;
        case 'multiply':
            return previousNumber * nextNumber;
        case 'divide':
            return previousNumber / nextNumber;
        case 'remainder':
            return previousNumber % nextNumber;
    }
}
/*function calculate(action: string, previousNumber: number, nextNumber: number): number {
    let result: number;
    switch (action) {
        case 'add':
            result = previousNumber + nextNumber;
            break;
        case 'substract':
            result = previousNumber - nextNumber;
            break;
        case 'multiply':
            result = previousNumber * nextNumber;
            break;
        case 'divide':
            result = previousNumber / nextNumber;
            break;
        case 'remainder':
            result = previousNumber % nextNumber;
            break;

            return result;
    }
}*/
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
