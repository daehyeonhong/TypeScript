/**
 * Type Inference
 */
let text: string = 'hello';
text = 'hi';
const print = (message: string) => console.log(message);
print('hello')

function add(x: number, y: number): number {
    return x + y;
}

const result = add(1, 2);