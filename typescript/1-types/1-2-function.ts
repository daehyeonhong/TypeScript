{
    /*// JavaSCript 💩
    function jsAdd(num1, num2) {
        return num1 + num2
    }

    // TypeSCript
    function tsAdd(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JavaScript 💩
    function jsFetchNum(id) {
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // TypeScript ✨
    function tsFetchNum(id: string): Promise<number> {
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }*/

    // JavaScript  ✨ => TypeScript
    // Optional parameter
    function printName(firstName: string, lastName?: string): void {
        console.log(firstName);
        console.log(lastName);
    }

    printName('Steve', 'Jobs');
    printName('Bill');
    printName('Anna', undefined);

    // Default parameter
    function printMessage(message: string = 'default message'): void {
        console.log(message);
    }

    printMessage();

    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((previousValue, currentValue) => currentValue + previousValue);
    }

    // Rest parameter
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3));
    console.log(addNumbers(1, 2, 3, 4, 5, 6, 7));

}