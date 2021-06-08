'use strict';
{
    /**
 * JavaScript
 * Primitive: number, string, bollean, bigint, symbol, null, undefined
 * Object: function, array ...
 */
    // number
    const num: number = -1234;

    // string
    const str: string = 'hello';

    // boolean
    const boal: boolean = false;

    // undefined
    let name: undefined; // 💩
    let age: number | undefined;
    age = undefined;
    age = 1;

    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: null; // 💩
    let person2: string | null;

    // unknown 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return;
    }

    let unusable: void = undefined; // 💩

    // never
    function throwError(message: string): never {
        // message -> server(log)
        throw new Error(message);
        while (true) { }
    }

    let neverEnding: never; // 💩

    //object
    let obj: object = [1, 2]; // 💩
    function acceptSomeObject(obj: object) { }
    acceptSomeObject({ name: 'ellie' });
    acceptSomeObject({ animal: 'dog' });

}